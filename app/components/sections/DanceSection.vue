<script setup>
import Title from '~/components/ui/Title.vue'

const props = defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
  titleImg: { type: String, required: true },
  girl: { type: String, required: true },
  bg: { type: String, required: true },
  decorTop: { type: String, required: true },
  button: {
    type: Object,
    default: () => ({
      link: '#',
      text: 'Подать заявку',
    }),
  },
})
</script>

<template>
  <section id="dance" class="dance">

    <Container>
      <Title class="dance__title" white>{{ title }}</Title>
      <div class="dance__info">
        <Image class="dance__decor" :src="decorTop" width="1494" height="900" />
        <Image class="dance__girls" :src="girl" alt="Girls" width="681" height="853" />

        <div class="dance__content">
          <div class="dance__bg">
            <Image :src="bg" alt="Background" width="1400" height="352" />
          </div>
          <Image class="dance__title-logo" :src="titleImg" alt="Title" />
          <div class="dance__text-content">
            <p class="dance__text text">{{ text }}</p>
            <a :href="button.link" class="dance__button" :target="button.target">{{ button.text }}</a>
          </div>
        </div>
      </div>

    </Container>

  </section>
</template>

<style lang="scss">
.dance {
  position: relative;
  padding: 5.4rem 0 5rem;

  &__title {
    margin: 0 0 59rem;

    @media (max-width: $tablet) {
      margin: 0 0 45rem;
    }

    @media (max-width: $mobile) {
      margin: 0 0 4rem;
    }
  }

  &__title-logo {
    position: absolute;
    top: -7.5rem;
    left: 11rem;
    z-index: 6;

    @media (max-width: $tablet) {
      left: 0;
    }

    @media (max-width: $mobile) {
      position: static;
      width: 95%;
      margin: 0 auto 4rem;
    }
  }

  &__text {
    font-size: 2.4rem;
    line-height: 1.1;
    font-weight: 500;
    margin: 0 0 3.7rem;
    padding-right: 2rem;
    color: $white;

    @media (max-width: $tablet) {
      padding: 0 4rem;
    }

    @media (max-width: $mobile) {
      font-size: 1.8rem;
      padding: 0
    }
  }

  &__button {
    background-color: $magenta;
    padding: 1.5rem 2rem;
    font-size: 2.2rem;
    line-height: 1.1;
    font-weight: 600;
    text-decoration: none;
    border-radius: 20px;
    color: $white;
  }

  &__decor {
    width: 157rem;
    right: -8rem;
    position: absolute;
    bottom: -2.9rem;
    z-index: 5;
    max-width: unset;

    @media (max-width: $tablet) {
      width: 132rem;
      right: -11.2rem;
    }

    @media (max-width: $mobile) {
      display: none;
    }
  }

  &__girls {
    position: absolute;
    bottom: 0.2rem;
    right: 2rem;
    width: 68rem;
    z-index: 6;

    @media (max-width: $tablet) {
      width: 65rem;
    }

    @media (max-width: $mobile) {
      display: none;
    }
  }

  &__info {
    position: relative;

  }

  &__content {
    padding-top: 11.7rem;
    position: relative;
    border-radius: 20px;
    min-height: 35.2rem;
    display: flex;
    justify-content: flex-start;

    @media (max-width: $tablet) {
      z-index: 10;
    }

    @media (max-width: $mobile) {
      flex-direction: column;
      padding: 3rem;
    }

  }

  &__text-content {
    position: relative;
    z-index: 10;
    max-width: 80.9rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 8.5rem;
    text-align: center;

    @media (max-width: $tablet) {
      padding: 0 0 2rem;
    }

    @media (max-width: $mobile) {
      padding: 0;
    }
  }

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 5;
    border-radius: 20px;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      @media (max-width: $tablet) {
        right: auto;
        left: 0;
        width: 104%;
        height: 100%;
        max-width: unset;
      }

      @media (max-width: $mobile) {
        width: 108%;
      }
    }
  }

}

</style>
