<script setup>
const props = defineProps({
  title: { type: String, required: true },
  paragraphs: { type: Array, default: () => [] },
  decorLeft: { type: String, default: '' },
  decorRight: { type: String, default: '' },
  bullets: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section id="about" class="about">
    <Image class="about__decor about__decor--left" :src="decorLeft" alt="" width="412" height="891"/>
    <Image class="about__decor about__decor--right" :src="decorRight" alt="" width="325" height="761"/>
    <Container>
      <h2 class="about__title title">{{ title }}</h2>
      <div class="about__text">
        <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
      </div>
      <div class="about__items">
        <div class="about__item" v-for="(item, index) in bullets" :key="index">
          <div class="about__item-left">
            <div class="about__item-title">{{ item.title }}</div>
            <div class="about__item-text">{{ item.text }}</div>
          </div>
          <div class="about__item-image-wrap">
            <Image
              class="about__item-image"
              :src="item.image"
              alt=""
              width="239"
              height="187"
            />
          </div>
        </div>
      </div>
    </Container>

  </section>

</template>

<style lang="scss">
.about {
  position: relative;
  padding: 10rem 0 10rem;

  @media (max-width: $mobile) {
    padding: 5rem 0;
  }

  &__title {
    margin: 0 0 3.5rem;
  }

  &__decor {
    position: absolute;
    z-index: 0;
    user-select: none;
    pointer-events: none;

    &--left {
      width: 41.2rem;
      top: -13.5rem;
      left: -0.5rem;

      @media (max-width: 1280px) {
        width: 30rem;
      }

      @media (max-width: $laptop) {
        width: 35.2rem;
      }
    }

    &--right {
      width: 32.5rem;
      bottom: -2rem;
      right: -1rem;

      @media (max-width: 1280px) {
        width: 28rem;
      }
    }

    @media (max-width: $tablet) {
      display: none;
    }
  }

  &__text {
    position: relative;
    font-size: 2.4rem;
    line-height: 1.1;
    font-weight: 500;
    text-align: center;
    max-width: 100rem;
    margin: 0 auto 7rem;
    z-index: 5;

    @media (max-width: $tablet) {
      font-size: 1.8rem;
      margin: 0 auto 4rem;
      max-width: 60rem;
    }

    p {
      margin: 0;

      &:not(:last-child) {
        margin: 0 0 2.6rem;
      }

      &:last-child {
        max-width: 90rem;
        margin: 0 auto;
      }
    }
  }

  &__item-image-wrap {
    width: 23.9rem;
    height: 100%;
    position: relative;
    clip-path: polygon(3rem 0, 100% 0, 100% 100%, 0 100%);
    overflow: hidden;
    flex-shrink: 0;

    @media (max-width: $mobile) {
      width: 100%;
      height: 22rem;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }

    .about__item-image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
    position: relative;
    z-index: 1;

    @media (max-width: $mobile) {
      grid-template-columns: 1fr;
    }
  }

  &__item {
    display: flex;
    justify-content: space-between;
    background: linear-gradient(90deg, #EB1380 0.18%, #CC137A 12.18%, #661368 56.18%, #25135D 86.17%, #0C1359 100.17%);
    border-top-left-radius: 20px;
    border-top-right-radius: 12px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 12px;
    overflow: hidden;

    @media (max-width: $mobile) {
      flex-direction: column;
      border-radius: 20px;
    }
  }

  &__item-left {
    padding: 3.8rem 2rem 4.1rem 4.2rem;
    max-width: 31rem;

    @media (max-width: $tablet) {
      max-width: 100%;
      padding: 3rem 2rem 2rem;
    }
  }

  &__item-title {
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 1.1;
    text-transform: uppercase;
    margin: 0 0 1.6rem;

    @media (max-width: $tablet) {
      font-size: 2rem;
    }
  }

  &__item-text {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.1;

    @media (max-width: $tablet) {
      font-size: 1.6rem;
    }
  }

}

</style>
