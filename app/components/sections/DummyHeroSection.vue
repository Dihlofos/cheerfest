<script setup>
const props = defineProps({
  title: { type: String, required: true },
  mainText: { type: String, default: '' },
  subText: { type: String, default: '' },
  logos: { type: Array, default: () => [] },
  images: {
    type: Object,
    default: () => ({
      decorLeft: '',
      decorTop: '',
      decorRight: '',
      mobileDecor: '',
      bg: '',
      logo: '',
      dateDesktop: '',
      dateMobile: '',
      girl: '',
      girls: '',
    }),
  },
})
</script>

<template>
  <section id="dummy" class="dummy">
    <h1 class="visually-hidden">{{ title }}</h1>
    <div class="dummy__top">
      <Container>
        <div class="dummy__logos">
          <a
            v-for="(logo, index) in logos"
            :key="index"
            :href="logo.link"
            target="_blank"
          >
            <Image
              :src="logo.src"
              :alt="logo.alt"
              :width="logo.width"
              :height="logo.height"
            />
          </a>
        </div>
      </Container>
    </div>
    <div class="dummy__content">
      <Image
        class="dummy__decor dummy__decor--left"
        :src="images.decorLeft"
        alt=""
        width="907"
        height="940"
      />
      <Image
        class="dummy__decor dummy__decor--top"
        :src="images.decorTop"
        alt=""
        width="859"
        height="421"
      />
      <Image
        class="dummy__decor dummy__decor--right"
        :src="images.decorRight"
        alt=""
        width="1031"
        height="940"
      />
      <Image
        class="dummy__mobile-decor"
        :src="images.mobileDecor"
        alt=""
        width="880"
        height="947"
      />
      <Image
        :src="images.bg"
        alt=""
        class="dummy__bg"
        width="2216"
        height="940"
      />
      <Container>
        <div class="dummy__info">
          <div class="dummy__main">
            <Image
              class="dummy__logo"
              :src="images.logo"
              alt=""
              width="909"
              height="415"
            />
            <div class="dummy__date-wrapper tablet">
              <Image
                :src="images.dateMobile"
                alt=""
                class="dummy__date"
                width="260"
                height="88"
              />
            </div>
            <Image
              :src="images.girl"
              alt=""
              class="dummy__girl tablet"
              width="1523"
              height="1558"
            />
            <div class="dummy__main-text">
              <span>{{ mainText }}</span>
            </div>
            <div class="dummy__subtext">{{ subText }}</div>
          </div>
          <div class="dummy__right">
            <div class="dummy__date-wrapper">
              <Image
                :src="images.dateDesktop"
                alt=""
                class="dummy__date"
                width="431"
                height="145"
              />
            </div>
            <Image
              class="dummy__girls"
              :src="images.girls"
              alt=""
              width="971"
              height="765"
            />
          </div>
        </div>
      </Container>
    </div>
  </section>
</template>

<style lang="scss">
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);
}

// Tablet utility — hide on desktop, show on tablet/mobile
.tablet {
  display: none;

  @media (max-width: $tablet) {
    display: block;
  }
}

.dummy {
  position: relative;
  overflow: hidden;

  &__top {
    position: relative;
    background-color: $magenta;
    padding: 2.9rem 0;
    z-index: 10;

    @media (max-width: $tablet) {
      padding: 1.7rem 0;
    }
  }

  &__logos {
    display: flex;
    justify-content: center;
    gap: 4.8rem;

    @media (max-width: $tablet) {
      gap: 2.7rem;
      padding: 0 1rem;
      max-width: 50rem;
      margin: 0 auto;
    }
  }

  &__content {
    position: relative;
    padding: 10.7rem 0 10rem;

    .container {
      max-width: 184rem;
    }

    @media (max-width: $tablet) {
      padding: 4.9rem 0 4.1rem;

      .container {
        padding: 0 1.6rem;
      }
    }
  }

  &__right {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;

    @media (max-width: $tablet) {
      display: none;
    }
  }

  &__logo {
    margin: 0 0 2.7rem;
    width: 100%;

    @media (max-width: $tablet) {
      margin: 0 0 3rem;
      max-width: 50rem;
    }
  }

  &__main {
    width: 49.5%;

    @media (max-width: $tablet) {
      width: 100%;
    }
  }

  &__main-text {
    position: relative;
    font-weight: 700;
    line-height: 1.1;
    font-style: italic;
    font-size: 2.8rem;
    text-transform: uppercase;
    max-width: 65.4rem;
    margin: 0 0 2.3rem 10rem;

    @media (max-width: $tablet) {
      margin-left: 0;
      font-size: 2rem;
      padding: 0 1rem;
      text-align: center;
      margin-bottom: 1.7rem;

      span {
        position: relative;
        z-index: 1;
      }

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: calc(100% + 1rem);
        left: 0;
        top: -0.7rem;
        background-color: $magenta;
        z-index: 0;
        transform: skewX(-12deg);
      }
    }
  }

  &__subtext {
    font-size: 1.6rem;
    line-height: 1.1;
    font-weight: 500;
    max-width: 65.4rem;
    margin-left: 10rem;

    @media (max-width: $tablet) {
      margin-left: 0;
      font-size: 1.6rem;
      text-align: center;
      position: relative;
      z-index: 5;
    }
  }

  &__date {
    width: 43.1rem;
    margin-top: 10rem;
    margin-right: 2rem;
    z-index: 5;
    position: relative;

    @media (max-width: $tablet) {
      margin-top: 0;
      width: 26rem;
      margin-right: 0;
      margin-left: -0.3rem;
    }
  }

  &__decor {
    position: absolute;
    mix-blend-mode: screen;
    z-index: 1;

    &--left {
      top: -10.5rem;
      left: -1rem;
      width: 90.7rem;
    }

    &--right {
      top: -10.4rem;
      right: -0.7rem;
      width: 103.1rem;
    }

    &--top {
      right: 21.5rem;
      top: -10.5rem;
      width: 85.9rem;
    }

    @media (max-width: $tablet) {
      display: none;
    }
  }

  &__girl {
    position: relative;
    width: 77rem;
    max-width: unset;
    left: 50%;
    transform: translateX(-45.4%);
    margin-top: -27.3rem;
    margin-bottom: -31.6rem;
  }

  &__mobile-decor {
    display: none;
    position: absolute;
    width: 140.4rem;
    max-width: unset;
    top: -41rem;
    left: 50%;
    transform: translateX(-56%) rotate(7deg);
    z-index: 2;
    mix-blend-mode: screen;
    user-select: none;
    pointer-events: none;

    @media (max-width: $tablet) {
      display: block;
    }
  }

  &__girls {
    position: absolute;
    bottom: -15.7%;
    right: -2.1%;
    width: 97.1rem;
    user-select: none;
    pointer-events: none;
    width: 52.7%;
  }

  &__info {
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: space-between;
  }

  &__bg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
    pointer-events: none;
    z-index: 0;

    @media (max-width: $tablet) {
      max-width: unset;
      width: auto;
      height: auto;
      bottom: auto;
      top: 0;
    }
  }
}
</style>
