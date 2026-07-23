<script setup>
import navItems from '~/../data/navigation.json'

const mobileOpen = ref(false)

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value
}

function closeMobile() {
  mobileOpen.value = false
}
</script>

<template>
  <nav class="nav" :class="{ 'nav--open': mobileOpen }">
    <button class="nav__toggle" @click="toggleMobile" aria-label="Меню">
      <img
        v-if="!mobileOpen"
        src="/images/burger.svg"
        alt="Открыть меню"
        width="44"
        height="44"
      />
      <img
        v-else
        src="/images/close.svg"
        alt="Закрыть меню"
        width="35"
        height="35"
      />
    </button>

    <div class="nav__overlay">
      <ul class="nav__list">
        <li v-for="item in navItems" :key="item.link" class="nav__item">
          <a
            :href="item.link"
            class="nav__link"
            @click="closeMobile"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <img
        class="nav__girl"
        src="/images/hero/girl.png"
        alt=""
        width="1523"
        height="1558"
      />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  &__toggle {
    display: none;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;
    line-height: 0;

    &:focus-visible {
      outline: 2px solid #0055ff;
      outline-offset: 2px;
    }

    @media (max-width: $tablet) {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 1.2rem;
      right: 1.6rem;
      z-index: 1030;
    }
  }

  &__overlay {
    display: contents;

    @media (max-width: $tablet) {
      display: flex;
      flex-direction: column;
      position: fixed;
      inset: 0;
      background-color: $magenta;
      z-index: 1029;
      padding: 8rem 2rem 4rem;
      opacity: 0;
      pointer-events: none;
      transition: opacity 300ms ease;
      overflow-y: auto;
    }

    .nav--open & {
      @media (max-width: $tablet) {
        opacity: 1;
        pointer-events: all;
      }
    }
  }

  &__list {
    display: flex;
    gap: 2.4rem;
    align-items: center;
    list-style: none;

    @media (max-width: $tablet) {
      flex-direction: column;
      gap: 2.4rem;
      padding: 0;
      margin: auto 0;
      flex-shrink: 0;
    }
  }

  &__link {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.1;
    color: $white;
    transition: color 150ms ease;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: $tablet) {
      font-size: 2.4rem;
      font-weight: 600;
      padding: 0.8rem 0;
    }
  }

  &__girl {
    display: none;

    @media (max-width: $tablet) {
      display: block;
      width: 100%;
      max-width: 28rem;
      height: auto;
      margin: 2rem auto 0;
      flex-shrink: 0;
      object-fit: contain;
    }
  }
}
</style>
