<script setup>
const props = defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
  girl: { type: String, required: true },
  titleImg: { type: String, required: true },
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
  <section id="clubs" class="clubs">

    <Container>
      <h2 class="title clubs__title">{{ title }}</h2>
      <div class="clubs__info">
        <Image class="clubs__decor" :src="decorTop" width="1494" height="900" />
        <Image class="clubs__girl" :src="girl" alt="Girl" width="681" height="853" />

        <div class="clubs__content">
          <Image class="clubs__title-logo" :src="titleImg" alt="Title" />
          <div class="clubs__bg">
            <Image :src="bg" alt="Background" width="1400" height="352"/>
          </div>
          <div class="clubs__text-content">
            <h2 class="clubs__text text">{{ text }}</h2>
            <a :href="button.link" class="clubs__button">{{ button.text }}</a>
          </div>
        </div>
      </div>


    </Container>

  </section>

</template>

<style lang="scss">
.clubs {
  position: relative;
  padding: 5.4rem 0 5rem;


  &__title {
    margin: 0 0 59rem;
  }

  &__title-logo {
    position: absolute;
    top: -7.5rem;
    right: 7rem;
    z-index: 6;
  }

  &__text {
    font-size: 2.4rem;
    line-height: 1.1;
    font-weight: 500;
    margin: 0 0 3.7rem;
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
    width: 161rem;
    right: -17.2rem;
    position: absolute;
    bottom: 0;
    z-index: 5;
    max-width: unset;
  }

  &__girl {
    position: absolute;
    bottom: 0.2rem;
    left: 2.5rem;
    width: 68rem;
    z-index:6;
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
    justify-content: flex-end;

  }

  &__text-content {
    position: relative;
    z-index: 10;
    max-width: 73.9rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    }
  }

}

</style>
