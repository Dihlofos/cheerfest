<script setup>
const props = defineProps({
  title: { type: String, required: true },
  buttons: { type: Array, default: () => [] },
  mapImage: { type: String, default: '' },
  mapImageMobile: { type: String, default: '' },
  legend: { type: Array, default: () => [] },
})
</script>

<template>
  <section id="map" class="map">
    <Container>

    </Container>
  </section>
</template>

<style lang="scss">
.map {

  &__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: $magenta;
    color: $white;
    font-family: $monserrat;
    font-size: 2.2rem;
    font-weight: 600;
    line-height: 1.1;
    border-radius: 2rem;
    padding: 1.5rem 2.1rem;
    text-decoration: none;
    white-space: nowrap;
    transition: background 0.2s;

    &:hover {
      background: $darkBlue;
    }
  }

}
</style>
