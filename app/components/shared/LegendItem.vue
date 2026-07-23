<script setup>
const props = defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  isExtended: { type: Boolean, default: false },
})
</script>

<template>
  <div class="legend-item" :class="{ 'legend-item--extended': isExtended }">
    <div class="legend-item__icon">
      <Image
        :src="icon"
        alt=""
        :width="isExtended ? 120 : 44"
        :height="isExtended ? 120 : 44"
      />
    </div>
    <div class="legend-item__text">
      <span class="legend-item__title">{{ title }}</span>
      <span v-if="isExtended && subtitle" class="legend-item__subtitle">{{ subtitle }}</span>
    </div>
  </div>
</template>

<style lang="scss">
.legend-item {
  display: flex;
  align-items: center;
  min-height: 8.9rem;
  padding: 2.3rem 2.9rem;
  border-radius: 2rem;
  background: linear-gradient(90deg, $magenta 0.18%, #CC137A 12.18%, #661368 56.18%, #25135D 86.17%, $darkBlue 100.17%);

  @media (max-width: $tablet) {
    padding: 1.3rem 1.9rem;
  }

  &__icon {
    position: relative;
    flex-shrink: 0;
  }

  &__text {
    display: flex;
    flex-direction: column;
    margin-left: 1.6rem;
    min-width: 0;

  }

  &__title {
    font-family: $monserrat;
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 1.1;
    text-transform: uppercase;
    color: $white;

    @media (max-width: $tablet) {
      font-size: 2rem;
    }
  }

  &__subtitle {
    font-family: $monserrat;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.2;
    color: rgba($white, 0.8);
    margin-top: 0.4rem;
  }

  // ═══ Extended — для секции Локации ═══
  &--extended {
    min-height: 18.1rem;
    padding: 3rem 3rem 3rem 4.1rem;

    .legend-item__icon {
      width: 12rem;
      height: 12rem;
    }

    .legend-item__text {
      margin-left: 3.9rem;
      gap: 2.3rem;
    }

    .legend-item__title {
      font-size: 2.2rem;
      font-weight: 700;
      line-height: 1.1;
    }

    .legend-item__subtitle {
      font-family: $monserrat;
      font-size: 1.8rem;
      font-weight: 500;
      line-height: 1.1;
      color: $white;
      margin-top: 0;
      opacity: 1;
    }
  }
}
</style>
