<script setup>
const props = defineProps({
  title: { type: String, required: true },
  text: { type: String, default: '' },
  button: { type: Object, default: () => ({}) },
  title2: { type: String, required: true },
  text2: { type: String, default: '' },
  button2: { type: Object, default: () => ({}) },
  policyLinks: { type: Array, default: () => [] },
  images: {
    type: Object,
    default: () => ({
      ballLeft: '',
      ballRight: '',
      ballMobile: '',
    }),
  },
})
</script>

<template>
  <section id="contest" class="contest">
    <Image
      class="contest__decor contest__decor--left"
      :src="images.ballLeft"
      alt=""
      width="384"
      height="372"
    />
    <Image
      class="contest__decor contest__decor--right"
      :src="images.ballRight"
      alt=""
      width="727"
      height="484"
    />
    <Container>
      <div class="contest__content">
        <h2 class="contest__title">{{ title }}</h2>
        <div class="contest__text">{{ text }}</div>
        <a
          :href="button.link"
          class="button contest__link"
          :target="button.target || '_self'"
        >
          {{ button.text }}
        </a>

        <h2 class="contest__title">{{ title2 }}</h2>
        <div class="contest__text">{{ text2 }}</div>
        <a
          :href="button2.link"
          class="button contest__link"
          :target="button2.target || '_self'"
        >
          {{ button2.text }}
        </a>

        <div class="contest__policy-links">
          <a
            v-for="(link, index) in policyLinks"
            :key="index"
            :href="link.href"
            :target="link.target"
          >
            {{ link.text }}
          </a>
        </div>
      </div>
      <Image
        class="contest__mobile-decor"
        :src="images.ballMobile"
        alt=""
        width="750"
        height="473"
      />
    </Container>
  </section>
</template>

<style lang="scss">
.contest {
  position: relative;
  overflow: hidden;
  background: linear-gradient(357deg, #EB1380 -30.04%, #CC137A -14.78%, #661368 41.18%, #25135D 79.33%, #0C1359 97.13%);

  &__decor {
    position: absolute;
    z-index: 0;
    user-select: none;
    pointer-events: none;

    &--left {
      top: 0rem;
      left: -0.9rem;
      width: 20.1%;
    }

    &--right {
      bottom: 0.1rem;
      right: -0.7rem;
      width: 38%;
    }

    @media (max-width: $tablet) {
      display: none;
    }
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: $tablet) {
      flex-direction: column;
    }
  }

  &__content {
    padding: 9rem 0 9.8rem;
    max-width: 87.7rem;
    text-align: center;

    @media (max-width: $tablet) {
      max-width: unset;
      padding: 4.3rem 0 0;
    }
  }

  &__title {
    font-size: 6rem;
    line-height: 1.1;
    text-transform: uppercase;
    font-weight: 700;
    font-style: italic;
    margin: 0 0 2rem;

    @media (max-width: $tablet) {
      font-size: 3.6rem;
      margin: 0 0 2.7rem;
    }
  }

  &__text {
    font-size: 2.8rem;
    line-height: 1.1;
    font-weight: 600;
    padding: 0 6rem;
    margin: 0 0 7.5rem;

    @media (max-width: $tablet) {
      font-size: 1.6rem;
      padding: 0;
      margin: 0 0 4.5rem;
    }
  }

  &__mobile-decor {
    margin-top: -6.6rem;
    display: none;

    @media (max-width: $tablet) {
      display: flex;
    }
  }

  &__link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: $white;
    font-family: $monserrat;
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border-radius: 20px;
    border: 2px solid $magenta;
    background: $magenta;
    text-decoration: none;
    padding: 2.3rem;
    cursor: pointer;
    flex-shrink: 0;
    margin: 0 0 7.8rem;
    text-align: center;
    width: 44.6rem;

    &:hover {
      background-color: $darkBlue;
      border-color: $darkBlue;
    }

    @media (max-width: $tablet) {
      border-width: 1px;
      border-radius: 6px;
      width: 20.3rem;
      font-size: 1.6rem;
      padding: 0.5rem 0.8rem;
      margin: 0 0 3.2rem;
    }
  }

  &__policy-links {
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: center;
    gap: 3.8rem;

    @media (max-width: $tablet) {
      flex-direction: column-reverse;
      gap: 1.2rem;
    }

    a {
      color: $white;
      font-size: 1.6rem;
      line-height: 1.1;
      font-weight: 500;

      @media (max-width: $tablet) {
        font-size: 1.4rem;
      }
    }
  }
}
</style>
