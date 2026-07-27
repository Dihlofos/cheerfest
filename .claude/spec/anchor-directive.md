# Spec: Кастомная директива `v-anchor`

## Проблема

Сейчас плавный скролл по якорным ссылкам (`<a href="#about">`) работает только в навигации — библиотека `smooth-scroll` инициализируется в `Navigation.vue` и привязана к селектору `.nav__link`:

```js
// Navigation.vue
const smoothScroll = new SmoothScroll('.nav__link', { speed: 200, offset: 45 })
```

Добавить якорные ссылки в других местах сайта (например, в футере, в тексте секций, в модальных окнах) без дублирования этого кода невозможно.

**Цель:** единый, переиспользуемый механизм плавного скролла — кастомная Vue-директива `v-anchor`, которую можно повесить на любую `<a href="#...">` в любом компоненте.

## Текущий стек

| Что | Где |
|---|---|
| Библиотека `smooth-scroll@16.1.3` | `Navigation.vue` — `new SmoothScroll('.nav__link', ...)` |
| CSS `scroll-padding-top: 4.5rem` | `main.scss` (фолбэк для браузерной навигации с хешем в URL) |
| Якорные `id` на секциях | `#about`, `#map`, `#program`, `#contest`, `#locations`, `#faq`, `#footer` |
| Фреймворк | Nuxt 3 (SSR + static prerender) |
| Директивы в проекте | Отсутствуют (директория `app/directives/` не создана) |

## Дизайн

### API директивы

```html
<!-- Базовое использование: href — обязателен, offset и speed берутся из глобальных дефолтов -->
<a href="#about" v-anchor>О событии</a>

<!-- Собственные настройки -->
<a href="#map" v-anchor="{ offset: 80, speed: 300 }">Карта</a>
```

### Поведение

1. **Перехват клика:** директива вешает `click`-обработчик. Если `href` начинается с `#` — `preventDefault()` и запускает плавный скролл через `smooth-scroll.animateScroll()`.
2. **Поиск цели:** `document.querySelector(href)` → элемент с matching id.
3. **Скролл:** `smooth-scroll` уже содержит всю логику анимации и easing, мы используем его программный метод `.animateScroll(target, null, options)`.
4. **Fallback для не-`#` ссылок:** если `href` не начинается с `#` или целевого элемента нет — ничего не делает, пропускает стандартный переход.
5. **SSR-safe:** директива не делает ничего на сервере; `smooth-scroll` динамически импортируется только на клиенте.

### Значения по умолчанию

| Параметр | Значение | Комментарий |
|---|---|---|
| `offset` | `45` | Отступ сверху (высота фиксированного хедера + запас) |
| `speed` | `200` | Длительность анимации в ms |

Эти значения вынесены в константы внутри плагина; переопределяются через аргумент `v-anchor="{ offset: 80 }"`.

### Архитектура: один глобальный инстанс

**Ключевое решение:** создаём один экземпляр `SmoothScroll` на уровне плагина (без привязки к CSS-селектору — передаём фиктивный селектор или пустой массив). Директива получает этот инстанс и на каждый клик дёргает `.animateScroll(target, null, options)`.

```ts
// plugin
const smoothScroll = new SmoothScroll('a[data-anchor]', { speed: 200, offset: 45 })
```

Либо, что ещё проще — `smooth-scroll` при создании экземпляра умеет работать с **пустым селектором**, если передать ему элементы через `animateScroll()` программно. Проверим доку:

```js
// Вариант A: создаём инстанс без привязки к селектору
// Передаём селектор, которого нет на странице — инстанс будет использоваться только через .animateScroll()
const instance = new SmoothScroll(null, { speed: 200, offset: 45 })

// Вариант B: используем data-атрибут как селектор
const instance = new SmoothScroll('a[data-anchor-smooth]', { speed: 200, offset: 45 })
// в директиве: el.setAttribute('data-anchor-smooth', '') — инстанс сам перехватит клики
```

Выбираем **Вариант А** — это даст полный контроль в директиве и не потребует трюков с data-атрибутами.

### Поток данных

```
click на <a href="#about" v-anchor>
  → директива: проверяем href.startsWith('#')
  → document.querySelector(href) → target элемент
  → smoothScrollInstance.animateScroll(target, null, { speed, offset })
  → smooth-scroll делает анимацию
```

## Структура файлов

```
app/
  directives/
    anchor.ts              # Объект директивы (mounted/updated/unmounted)
  plugins/
    anchor-directive.ts    # Регистрация директивы + создание SmoothScroll-инстанса
```

### `Navigation.vue` — упростить

```diff
- <a :href="item.link" class="nav__link" @click="closeMobile">
+ <a :href="item.link" class="nav__link" v-anchor @click="closeMobile">

- let smoothScroll = null
- onMounted(async () => {
-   const SmoothScroll = (await import('smooth-scroll')).default
-   smoothScroll = new SmoothScroll('.nav__link', { speed: 200, offset: 45 })
- })
- onUnmounted(() => { smoothScroll?.destroy() })
```

- Убрать `import('smooth-scroll')` и создание инстанса
- Убрать `onMounted` / `onUnmounted` с библиотекой
- Добавить `v-anchor` на каждую `<a>` ссылку
- `@click="closeMobile"` остаётся — директива и обработчик не конфликтуют

Smooth-scroll при этом **не удаляется** из `package.json` — он остаётся зависимостью, но создаётся один раз в плагине, а не в каждом компоненте.

## Обработка граничных случаев

| Случай | Поведение |
|---|---|
| `href` без `#` (внешняя ссылка) | Не вмешиваемся — стандартный переход |
| `href="#nonexistent"` — элемента нет | `console.warn` в dev, скролл не выполняется |
| Клик с зажатым `Ctrl`/`Cmd`/`Shift` | Не вмешиваемся — браузер сам откроет в новой вкладке |
| Повторный клик во время анимации | `smooth-scroll` обрабатывает это сам (прерывает предыдущую и стартует новую) |
| Два инстанса `SmoothScroll` одновременно | Не будет — инстанс создаётся один раз в плагине |

## Порядок реализации

1. **Создать `app/plugins/anchor-directive.ts`** — динамический импорт `smooth-scroll`, создание глобального инстанса, `vueApp.directive('anchor', vAnchor)`, передача инстанса в директиву.
2. **Создать `app/directives/anchor.ts`** — объект директивы (`mounted`, `updated`, `unmounted`). Принимает `smoothScrollInstance` из плагина. В `mounted` вешает click-обработчик, который вызывает `smoothScrollInstance.animateScroll(target, null, opts)`.
3. **Обновить `Navigation.vue`** — добавить `v-anchor` на ссылки, убрать ручное создание `SmoothScroll`.
4. **Протестировать:**
   - Клик по всем пунктам навигации → плавный скролл до секции.
   - Прямой переход по URL с `#about` → браузерный фолбэк с `scroll-padding-top`.
   - Мобильное меню: бургер → клик по ссылке → скролл + закрытие меню.
   - Добавить `<a href="#faq" v-anchor>` в футере или любой другой секции → работает без дополнительного кода.

## Код (reference)

```ts
// app/plugins/anchor-directive.ts

import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(async (nuxtApp) => {
  // Динамический импорт — только на клиенте
  const SmoothScroll = (await import('smooth-scroll')).default

  // Один глобальный инстанс без привязки к селектору
  const smoothScrollInstance = new SmoothScroll(null as any, {
    speed: 200,
    offset: 45,
  })

  // Передаём инстанс в директиву через provide
  nuxtApp.vueApp.provide('smoothScroll', smoothScrollInstance)
  nuxtApp.vueApp.directive('anchor', createAnchorDirective(smoothScrollInstance))
})
```

```ts
// app/directives/anchor.ts

import type { Directive } from 'vue'

export interface AnchorOptions {
  offset?: number
  speed?: number
}

const DEFAULTS: AnchorOptions = {
  offset: 45,
  speed: 200,
}

export function createAnchorDirective(smoothScroll: any): Directive<HTMLElement, AnchorOptions | undefined> {
  return {
    mounted(el, binding) {
      const handler = (event: Event) => {
        const mouseEvent = event as MouseEvent
        const link = mouseEvent.currentTarget as HTMLAnchorElement
        const href = link.getAttribute('href')

        if (!href?.startsWith('#')) return
        if (mouseEvent.ctrlKey || mouseEvent.metaKey || mouseEvent.shiftKey) return

        const target = document.querySelector(href)
        if (!target) {
          if (import.meta.env.DEV) {
            console.warn(`[v-anchor] Target "${href}" not found`)
          }
          return
        }

        mouseEvent.preventDefault()

        const opts = { ...DEFAULTS, ...binding.value }
        smoothScroll.animateScroll(target, null, {
          speed: opts.speed,
          offset: opts.offset,
        })
      }

      ;(el as any).__vAnchorHandler = handler
      el.addEventListener('click', handler)
    },

    updated(el, binding) {
      // Обновляем обработчик при изменении аргументов директивы
      const oldHandler = (el as any).__vAnchorHandler
      if (oldHandler) {
        el.removeEventListener('click', oldHandler)
      }
      // Клонируем mounted-логику
      const handler = (event: Event) => {
        const mouseEvent = event as MouseEvent
        const link = mouseEvent.currentTarget as HTMLAnchorElement
        const href = link.getAttribute('href')

        if (!href?.startsWith('#')) return
        if (mouseEvent.ctrlKey || mouseEvent.metaKey || mouseEvent.shiftKey) return

        const target = document.querySelector(href)
        if (!target) {
          if (import.meta.env.DEV) {
            console.warn(`[v-anchor] Target "${href}" not found`)
          }
          return
        }

        mouseEvent.preventDefault()

        const opts = { ...DEFAULTS, ...binding.value }
        smoothScroll.animateScroll(target, null, {
          speed: opts.speed,
          offset: opts.offset,
        })
      }
      ;(el as any).__vAnchorHandler = handler
      el.addEventListener('click', handler)
    },

    unmounted(el) {
      const handler = (el as any).__vAnchorHandler
      if (handler) {
        el.removeEventListener('click', handler)
      }
    },
  }
}
```

## Что не входит в скоуп

- Автоматический скролл при загрузке страницы с хешем в URL — это остаётся на браузере (`scroll-padding-top` в CSS достаточно).
- Отслеживание активной секции (подсветка пункта меню) — отдельная фича, не связанная с директивой.
- Scroll-spy / Intersection Observer — не входит в эту задачу.
