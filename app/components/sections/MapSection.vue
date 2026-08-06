<script setup>
const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  buttons: { type: Array, default: () => [] },
  mapImage: { type: String, default: '' },
  legend: { type: Array, default: () => [] },
})
</script>

<template>
  <section id="map" class="map">
    <Container>
      <div class="map__header">
        <h2 class="map__title">{{ title }}</h2>
        <p class="map__subtitle">{{ subtitle }}</p>
      </div>

      <div class="map__content">
        <div class="map__legend-col">
          <div class="map__legend">
            <div
              v-for="item in legend"
              :key="item.number"
              class="map__legend-item"
            >
              <div class="map__legend-num">
                <span>{{ item.number }}</span>
              </div>
              <div class="map__legend-text">
                <div class="map__legend-name">{{ item.name }}</div>
                <div
                  v-if="item.description"
                  class="map__legend-desc"
                >{{ item.description }}</div>
              </div>
            </div>
          </div>
          <a
            v-for="btn in buttons"
            :key="btn.text"
            :href="btn.link"
            class="map__button"
            target="_blank"
          >{{ btn.text }}</a>
        </div>

        <div class="map__image-col">
          <img
            class="map__map"
            :src="mapImage"
            alt=""
            width="810"
            height="593"
          />
        </div>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.map {
  padding: 6.6rem 0;
  scroll-padding-top: 10rem;

  @media (max-width: $tablet) {
    padding: 5rem 0;
  }

  // ── Header ──────────────────────────────────────────────

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.1rem;
    margin-bottom: 4.6rem;
    text-align: center;
    color: $white;

    @media (max-width: $tablet) {
      gap: 2rem;
      margin-bottom: 3rem;
    }
  }

  &__title {
    font-family: $monserrat;
    font-size: 6rem;
    font-weight: 700;
    font-style: italic;
    line-height: 1.1;
    text-transform: uppercase;
    margin: 0;

    @media (max-width: $tablet) {
      font-size: 4rem;
    }

    @media (max-width: $mobile) {
      font-size: 3rem;
    }
  }

  &__subtitle {
    font-family: $monserrat;
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 1.1;
    margin: 0;
    max-width: 52.6rem;

    @media (max-width: $tablet) {
      font-size: 1.8rem;
    }
  }

  // ── Content row ─────────────────────────────────────────

  &__content {
    display: flex;
    gap: 4.7rem;
    align-items: flex-start;

    @media (max-width: $tablet) {
      flex-direction: column-reverse;
    }
  }

  // ── Legend column ───────────────────────────────────────

  &__legend-col {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    max-width: 56.6rem;

    @media (max-width: $tablet) {
      max-width: 100%;
      width: 100%;
    }
  }

  &__legend {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  &__legend-item {
    display: flex;
    gap: 1.6rem;
    align-items: center;
  }

  &__legend-num {
    width: 4rem;
    height: 4rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: url('/images/map/squircle.svg') center / contain no-repeat;

    span {
      font-family: $monserrat;
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.1;
      color: $white;
    }
  }

  &__legend-text {
    flex: 1 0 0;
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
  }

  &__legend-name {
    font-family: $monserrat;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.1;
    text-transform: uppercase;
    color: $white;

    @media (max-width: $tablet) {
      font-size: 1.6rem;
    }

    @media (max-width: $mobile) {
      font-size: 1.4rem;
    }
  }

  &__legend-desc {
    font-family: $monserrat;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.1;
    color: $white;

    @media (max-width: $tablet) {
      font-size: 1.4rem;
    }

    @media (max-width: $mobile) {
      font-size: 1.2rem;
    }
  }

  // ── Button ──────────────────────────────────────────────

  &__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: $magenta;
    color: $white;
    font-family: $monserrat;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.1;
    border-radius: 2rem;
    padding: 1.6rem 2.8rem;
    text-decoration: none;
    white-space: nowrap;
    transition: background 0.2s;
    width: fit-content;

    &:hover {
      background: $darkBlue;
    }

    @media (max-width: $tablet) {
      font-size: 1.8rem;
      padding: 1.4rem 2.4rem;
      align-self: center;
    }
  }

  // ── Map image ───────────────────────────────────────────

  &__image-col {
    max-width: 81rem;
    flex-shrink: 0;

    @media (max-width: $mobile) {
      margin: 0 -2rem;
    }
  }

  &__map {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 1.8rem;
    object-fit: cover;

    @media (max-width: $mobile) {
      border-radius: 0;
    }
  }
}
</style>
