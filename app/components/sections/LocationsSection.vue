<script setup>
const props = defineProps({
  title: { type: String, required: true },
  timeBadge: { type: String, default: '' },
  items: { type: Array, default: () => [] },
})

// Duplicate events so the scroll is visible
const duplicatedItems = computed(() => [...props.items, ...props.items])
</script>

<template>
  <section id="locations" class="locations">
    <Container>
      <div class="locations__header">
        <h2 class="locations__title title" v-html="sanitizeText(title)" />
        <span class="locations__time-badge" v-html="sanitizeText(timeBadge)" />
      </div>

      <div class="locations__wrapper">
        <div class="locations__scroll" dir="rtl">
          <div class="locations__grid" dir="ltr">
            <LegendItem
              v-for="(item, index) in duplicatedItems"
              :key="index"
              :icon="item.icon"
              :title="item.name"
              :subtitle="item.description"
              :is-extended="true"
            />
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.locations {
  padding: 7.5rem 0 10rem;

  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.7em;
    margin: 0 0 7.2rem;
  }

  &__title {
    margin: 0;
    line-height: 1;
  }

  &__time-badge {
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
    padding: 1.5rem 2rem;
    white-space: nowrap;
  }

  &__wrapper {
    position: relative;

    // Вертикальная линия таймлайна
    &:before {
      content: '';
      position: absolute;
      left: 0.6rem;
      top: 0;
      height: 100%;
      width: 1px;
      background-color: $white;
      z-index: 1;
    }
  }

  &__scroll {
    position: relative;
    z-index: 2;
    overflow: auto;
    height: 79.9rem;
    padding-left: 6.4rem;

    // Кастомный скроллбар
    &::-webkit-scrollbar {
      width: 1.5rem;
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: $magenta;
      border-radius: 10px;
      z-index: 2;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;

    // Чередование градиента: нечётные элементы — реверсный градиент
    .legend-item {
      &:nth-child(odd) {
        background: linear-gradient(90deg, $darkBlue 0.18%, #25135D 14.18%, #661368 44.18%, #CC137A 88.18%, $magenta 100.17%);
      }
      &:nth-child(even) {
        background: linear-gradient(90deg, #0C1359 0.18%, #25135D 14.18%, #661368 44.18%, #CC137A 88.17%, #EB1380 100.17%);
      }
    }
  }
}
</style>
