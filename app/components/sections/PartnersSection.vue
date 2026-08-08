<script setup>
const props = defineProps({
  title: { type: String, required: true },
  logos: { type: Array, default: () => [] },
})
</script>

<template>
  <section id="partners" class="partners">
    <Container>
      <h2 class="partners__title title">{{ title }}</h2>

      <div class="partners__list">
        <div
          v-for="(logo, index) in logos"
          :key="index"
          class="partners__logo-wrap"
        >
          <component
            :is="logo.link ? 'a' : 'span'"
            :href="logo.link || undefined"
            :target="logo.link ? '_blank' : undefined"
          >
            <Image
              class="partners__logo"
              :src="logo.src"
              :alt="logo.alt"
              width="164"
              height="49"
            />
          </component>
        </div>
      </div>
      <div class="partners__more">А также спортивный фестиваль в <a href="https://leto.sport.mos.ru" target="_blank">Лужниках</a></div>
    </Container>
  </section>
</template>

<style lang="scss">
.partners {
  padding: 6rem 0 8rem;

  @media (max-width: $mobile) {
    padding: 0rem 0 3rem;
  }

  &__title {
    margin: 0 0 3.9rem;

    @media (max-width: $mobile) {
      margin: 0 0 3.5rem;
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;
  }

  &__logo-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24.4rem;
    height: 10rem;
    background: $magenta;
    border-radius: 1.6rem;
    padding: 1.8rem 4rem;
  }

  &__more {
    font-size: 2.4rem;
    text-align: center;
    padding-top: 3rem;
    font-weight: 700;

    a {
      color: $white;
      text-decoration: underline;
    }
  }

  &__logo {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
}
</style>
