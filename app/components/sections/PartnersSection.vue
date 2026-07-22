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
          <Image
            class="partners__logo"
            :src="logo.src"
            :alt="logo.alt"
            width="164"
            height="49"
          />
        </div>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.partners {
  padding: 6rem 0 8rem;

  &__title {
    margin: 0 0 3.9rem;
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
    background: $white;
    border-radius: 1.6rem;
    padding: 1.8rem 4rem;
  }

  &__logo {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
}
</style>
