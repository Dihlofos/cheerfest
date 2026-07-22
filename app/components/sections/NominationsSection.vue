<script setup>
const props = defineProps({
  title: { type: String, required: true },
  nominations: { type: Array, default: () => [] },
  prizeLabel: { type: String, default: '' },
  prizeAmount: { type: String, default: '' },
  prizeNote: { type: String, default: '' },
})
</script>

<template>
  <section id="nominations" class="nominations">
    <Container>
      <div class="nominations__header">
        <h2 class="nominations__title title">{{ title }}</h2>
      </div>

      <div class="nominations__list">
        <LegendItem
          v-for="(item, index) in nominations"
          :key="index"
          :icon="item.icon"
          :title="item.name"
        />
      </div>

      <div class="nominations__prize">
        <span class="nominations__prize-label">{{ prizeLabel }}</span>
        <span class="nominations__prize-amount">{{ prizeAmount }}</span>
        <span class="nominations__prize-note">{{ prizeNote }}</span>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.nominations {
  padding: 12.1rem 0 10rem;

  &__header {
    display: flex;
    justify-content: center;
    margin: 0 0 4rem;
  }

  &__title {
    margin: 0;
    line-height: 1;
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
    row-gap: 1.2rem;
    margin: 0 0 4.8rem;

    .legend-item {
      &:nth-child(odd) {
        background: linear-gradient(90deg, $darkBlue 0.18%, #25135D 14.18%, #661368 44.18%, #CC137A 88.18%, $magenta 100.17%);
      }
    }
  }

  &__prize {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.7rem;
  }

  &__prize-label {
    font-family: $monserrat;
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 1.1;
    text-transform: uppercase;
    color: $white;
    text-align: center;
  }

  &__prize-amount {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(266.98deg, #FFC200 16.52%, $pink 81.66%);
    color: $white;
    font-family: $monserrat;
    font-size: 3.6rem;
    font-weight: 600;
    line-height: 1.1;
    border-radius: 2rem;
    padding: 1.4rem 2.1rem;
    white-space: nowrap;
  }

  &__prize-note {
    font-family: $monserrat;
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 1.1;
    text-transform: uppercase;
    color: $white;
    max-width: 31.4rem;
  }
}
</style>
