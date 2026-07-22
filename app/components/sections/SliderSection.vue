<script setup>
const props = defineProps({
  title: { type: String, required: true },
  cards: { type: Array, default: () => [] },
})
</script>

<template>
  <section class="slider-section">
    <Container>
      <h2 class="slider-section__title title">{{ title }}</h2>

      <Slider
        :items="cards"
        arrow-left="/images/shared/arrow-left.svg"
        arrow-right="/images/shared/arrow-right.svg"
      >
        <template #slide="{ item }">
          <div class="slider-section__card">
            <Image
              class="slider-section__card-photo"
              :src="item.photo"
              alt=""
              width="380"
              height="393"
            />
            <div class="slider-section__card-name-wrap">
              <p class="slider-section__card-name">{{ item.name }}</p>
            </div>
          </div>
        </template>
      </Slider>
    </Container>
  </section>
</template>

<style lang="scss">
.slider-section {
  padding: 6rem 0 10rem;

  &__title {
    margin: 0 0 6.3rem;
  }

  &__card {
    position: relative;
    width: 100%;
    height: 40rem;
    border-radius: 3rem;
    overflow: hidden;
    background: $magenta;
  }

  &__card-photo {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 76%;
    max-width: none;
    object-fit: cover;
    object-position: top center;
  }

  &__card-name-wrap {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    padding: 6rem 0 3.6rem;
    background: var(--gr-0, linear-gradient(90deg, #0C1359 0.18%, #25135D 14.18%, #661368 44.18%, #CC137A 88.17%, #EB1380 100.17%));
    clip-path: polygon(0 3rem, 101% 0, 100% 100%, 0% 100%);
  }

  &__card-name {
    font-family: $monserrat;
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 1.1;
    text-transform: uppercase;
    text-align: center;
    color: $white;
    white-space: pre-line;
    margin: 0;
    padding: 0 1rem;
  }
}

@media (max-width: $mobile) {
  .slider-section {
    padding: 6rem 0 5rem;

    &__title {
      margin: 0 0 4rem;
    }

    &__card {
      width: 28rem;
      height: 32rem;
    }

    &__card-photo {
      width: 30rem;
      height: 31rem;
    }
  }
}
</style>
