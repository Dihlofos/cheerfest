<script setup>
import { ref } from 'vue'
import { sanitizeText } from '~/utils/sanitize'

const props = defineProps({
  title: { type: String, required: true },
  items: { type: Array, required: true },
  images: {
    type: Object,
    default: () => ({
      decorLeft: '/images/faq/decor-left.svg',
      decorRight: '/images/faq/decor-right.svg',
      arrowDown: '/images/faq/arrow-down.svg',
      arrowUp: '/images/faq/arrow-up.svg',
    }),
  },
})

const openState = ref({})

function toggle(index) {
  openState.value = { ...openState.value, [index]: !openState.value[index] }
}

function isOpen(index) {
  return !!openState.value[index]
}
</script>

<template>
  <section id="faq" class="faq">
    <Container>
      <h2 class="faq__title title">{{ title }}</h2>

      <div class="faq__accordion">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="faq__item"
          :class="{ active: isOpen(index) }"
        >
          <button
            class="faq__toggler"
            :class="{ active: isOpen(index) }"
            :aria-expanded="isOpen(index)"
            :aria-controls="`faq-content-${index}`"
            @click="toggle(index)"
          >
            {{ item.question }}
            <span class="faq__icon" aria-hidden="true">
              <img :src="images.arrowDown" alt="" class="faq__down" width="36" height="36">
              <img :src="images.arrowUp" alt="" class="faq__up" width="36" height="36">
            </span>
          </button>

          <div
            :id="`faq-content-${index}`"
            class="faq__content"
            :class="{ active: isOpen(index) }"
            role="region"
          >
            <p v-html="sanitizeText(item.answer)"></p>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<style lang="scss" scoped>
.faq {
  position: relative;
  z-index: 2;
  padding-block: 8rem 15.5rem;

  @media (max-width: $tablet) {
    padding-block: 4rem 8rem;
  }

  &__title {
    margin: 0 0 6.5rem;
  }

  &__accordion {
    position: relative;
    z-index: 2;
  }

  &__item {
    width: 100%;
    background: $darkBlue;
    border-radius: 2rem;
    margin: 0 0 2rem;
    overflow: hidden;
    transition: background 0.3s ease;

    @media (max-width: $tablet) {
      border-radius: 1.2rem;
      margin-bottom: 1.6rem;
    }

    &.active {
      background: linear-gradient(90deg, $darkBlue 0.18%, #25135D 14.18%, #661368 44.18%, #CC137A 88.18%, $magenta 100.17%);
    }
  }

  &__toggler {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    color: $white;
    font-family: $monserrat;
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 1.1;
    text-transform: uppercase;
    border: none;
    background: transparent;
    cursor: pointer;
    text-align: left;
    padding: 3rem 4.2rem 2rem;
    gap: 1.5rem;

    &.active {
      padding: 2.2rem 4.2rem 0;
    }

    @media (max-width: $tablet) {
      padding: 1.8rem;
      font-size: 1.6rem;

      &.active {
        padding-bottom: 0.5rem;
      }
    }
  }

  &__decor {
    top: 0;
    position: absolute;
    max-width: unset;
    user-select: none;
    pointer-events: none;

    &--left {
      top: -32.7rem;
      left: -52.8rem;
    }

    &--right {
      top: -38.5rem;
      right: -56rem;
    }
  }

  &__icon {
    display: flex;
    width: 3.6rem;
    height: 3.6rem;
    flex-shrink: 0;

    @media (max-width: $tablet) {
      width: 2.4rem;
      height: 2.4rem;
    }

    img {
      width: 3.6rem;
      height: 3.6rem;

      @media (max-width: $tablet) {
        width: 2.4rem;
        height: 2.4rem;
      }
    }

    .faq__up {
      display: none;
    }
  }

  .faq__item.active &__icon {
    .faq__down {
      display: none;
    }

    .faq__up {
      display: block;
    }
  }

  &__content {
    display: none;

    &.active {
      display: block;
    }

    p {
      color: $white;
      font-family: $monserrat;
      font-size: 2rem;
      font-weight: 500;
      line-height: 1.1;
      padding: 0 4.2rem 3.2rem;
      margin: 0;
      max-width: 108.4rem;

      @media (max-width: $tablet) {
        font-size: 1.4rem;
        padding: 1.6rem 1.8rem 1.8rem;
      }
    }
  }
}
</style>
