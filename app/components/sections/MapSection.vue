<script setup>
const props = defineProps({
  title: { type: String, required: true },
  buttons: { type: Array, default: () => [] },
  mapImage: { type: String, default: '' },
  legend: { type: Array, default: () => [] },
})
</script>

<template>
  <section id="map" class="map">
    <Container>
      <div class="map__header">
        <h2 class="map__title title">{{ title }}</h2>
        <div class="map__buttons">
          <a
            v-for="(btn, index) in buttons"
            :key="index"
            :href="btn.link"
            class="map__button"
            target="_blank"
          >
            {{ btn.text }}
          </a>
        </div>
      </div>

      <div class="map__image-wrap">
        <Image
          class="map__image"
          :src="mapImage"
          alt=""
          width="1400"
          height="491"
        />
      </div>

      <div class="map__legend">
        <LegendItem
          v-for="(item, index) in legend"
          :key="index"
          :icon="item.icon"
          :title="item.name"
        />
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.map {
  padding: 7.4rem 0 10rem;

  &__header {
    display: flex;
    justify-content: center;
    gap: 3.5rem;
    margin: 0 0 5rem;
  }

  &__title {
    margin: 0;
    line-height: 1;
  }

  &__buttons {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }

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

  &__image-wrap {
    border-radius: 2rem;
    overflow: hidden;
    margin: 0 0 5rem;
  }

  &__image {
    display: block;
    width: 100%;
    height: auto;
  }

  &__legend {
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-wrap: wrap;
    gap: 2.5rem;
    row-gap: 1rem;
  }


  .legend-item {
    &:nth-child(odd) {
      background: linear-gradient(90deg, $darkBlue 0.18%, #25135D 14.18%, #661368 44.18%, #CC137A 88.18%, $magenta 100.17%);
    }
  }
}
</style>
