# SCSS Conventions

## Media queries placement

Каждый `@media`-запрос должен быть вложен **внутрь блока элемента, к которому он относится**. Запрещается агрегировать стили для нескольких элементов в один общий `@media`-блок на уровне родителя.

### ✅ Правильно
```scss
.block {
  padding: 10rem 0;

  @media (max-width: $mobile) {
    padding: 5rem 0;
  }

  &__title {
    font-size: 2.4rem;

    @media (max-width: $mobile) {
      font-size: 1.8rem;
    }
  }

  &__image {
    width: 100%;

    @media (max-width: $mobile) {
      width: 50%;
    }
  }
}
```

### ❌ Неправильно
```scss
.block {
  padding: 10rem 0;

  &__title {
    font-size: 2.4rem;
  }

  &__image {
    width: 100%;
  }

  // ❌ Один media-запрос сразу для нескольких элементов
  @media (max-width: $mobile) {
    padding: 5rem 0;

    &__title {
      font-size: 1.8rem;
    }

    &__image {
      width: 50%;
    }
  }
}
```

### Почему так

- **Удобство поддержки** — все стили элемента (включая адаптивные) находятся в одном месте
- **Лёгкий поиск** — не нужно скроллить вниз, чтобы найти мобильные стили для элемента
- **Меньше конфликтов** — при перемещении или удалении элемента не нужно искать его адаптивные стили в других `@media`-блоках
