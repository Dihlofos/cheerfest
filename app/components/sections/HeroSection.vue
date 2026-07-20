<script setup>
const props = defineProps({
  title: { type: String, required: true },
  mainText: { type: String, default: '' },
  subText: { type: String, default: '' },
  logos: { type: Array, default: () => [] },
  links: { type: Array, default: () => [] },
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
  <section id="hero" class="hero">
    <h1 class="visually-hidden">{{ title }}</h1>
    <div class="hero__content">
      <Image
        class="hero__decor hero__decor--left"
        :src="images.decorLeft"
        alt=""
        width="907"
        height="940"
      />
      <Image
        class="hero__decor hero__decor--top"
        :src="images.decorTop"
        alt=""
        width="859"
        height="421"
      />
      <Image
        class="hero__decor hero__decor--right"
        :src="images.decorRight"
        alt=""
        width="1031"
        height="940"
      />
      <Image
        class="hero__mobile-decor"
        :src="images.mobileDecor"
        alt=""
        width="880"
        height="947"
      />
      <Image
        :src="images.bg"
        alt=""
        class="hero__bg"
        width="1920"
        height="808"
      />
      <Container>
        <div class="hero__info">
          <div class="hero__main">
            <div class="hero__logos">
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
            <Image
              class="hero__logo"
              :src="images.logo"
              alt=""
              width="739"
              height="337"
            />
            <div class="hero__date-wrapper tablet">
              <Image
                :src="images.dateMobile"
                alt=""
                class="hero__date"
                width="260"
                height="88"
              />
            </div>
            <Image
              :src="images.girl"
              alt=""
              class="hero__girl tablet"
              width="1523"
              height="1558"
            />
            <div class="hero__links">
              <Button
                v-for="(link, index) in links"
                :key="index"
                class="hero__button"
                :class="link.class"
                :href="link.href"
              >
                {{ link.text }}
              </Button>
            </div>
          </div>
          <div class="hero__right">
            <div class="hero__date-wrapper">
              <Image
                :src="images.dateDesktop"
                alt=""
                class="hero__date"
                width="431"
                height="145"
              />
            </div>
            <Image
              class="hero__girls"
              :src="images.girls"
              alt=""
              width="888"
              height="662"
            />
          </div>
        </div>
      </Container>
    </div>
  </section>
</template>

<style lang="scss">
.hero {
  position: relative;
  overflow: hidden;
  margin-top: 9.2rem;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;


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
    justify-content: flex-start;
    gap: 4.8rem;
    padding-left: 6.6rem;
    margin: 0 0 6.5rem;

    @media (max-width: $tablet) {
      gap: 2.7rem;
      padding: 0 1rem;
      max-width: 50rem;
      margin: 0 auto;
    }
  }

  &__content {
    position: relative;
    padding: 4.8rem 0 10.8rem;

    .container {
      max-width: 183rem;
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
  &__links {
    display: flex;
    gap: 2rem;
    margin-left: 6.9rem;
  }

  &__button {
    &.button {
      font-size: 2.2rem;
      padding: 1.2rem 2rem;
    }
  }


  &__logo {
    margin: 0 0 5.4rem;

    @media (max-width: $tablet) {
      margin: 0 0 3rem;
      max-width: 50rem;
    }
  }

  &__main {
    width: 49.5%;
    margin-left: 15.5rem;

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
      bottom: 0;
      left: -1rem;
      width: 111rem;
    }

    &--right {
      bottom: 0;
      right: -0.7rem;
      width: 128.1rem;
    }

    &--top {
      right: 5.5rem;
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
    right: 3.6%;
    width: 97.1rem;
    user-select: none;
    pointer-events: none;
    width: 48.7%;
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
    height: 112%;
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
