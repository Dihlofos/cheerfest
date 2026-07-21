<script setup>
import { computed } from 'vue'
import { sanitizeText } from '~/utils/sanitize'

const props = defineProps({
  title: { type: String, required: true },
  events: { type: Array, default: () => [] },
})

// Duplicate events so the scroll is visible
const duplicatedEvents = computed(() => [...props.events, ...props.events])
</script>

<template>
  <section id="program" class="program">
    <Container>
      <h2 class="program__title title">{{ title }}</h2>

      <div class="program__wrapper">
        <div class="program__scroll" dir="rtl">
          <div class="program__cards" dir="ltr">
            <div
              v-for="(event, index) in duplicatedEvents"
              :key="index"
              class="program__card"
            >
              <div class="program__card-photo-wrap">
                <Image
                  class="program__card-photo"
                  :src="event.image"
                  alt=""
                  width="351"
                  height="268"
                />
              </div>
              <div class="program__card-text">
                <div class="program__card-title" v-html="sanitizeText(event.title)"></div>
                <div class="program__card-time">{{ event.time }}</div>
                <div class="program__card-desc">{{ event.description }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.program {
  padding: 6.1rem 0 10rem;

  &__title {
    margin: 0 0 6.4rem;
  }

  &__wrapper {
    position: relative;

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
    height: 90rem;
    padding-left: 6.4rem;



    /* Ширина всего скроллбара */
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

  &__cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.7rem;
  }

  &__card {
    display: grid;
    grid-template-columns: 24rem 1fr;
    border-radius: 20px;
    overflow: hidden;
    background: linear-gradient(90deg, $darkBlue 0.18%, #25135D 14.18%, #661368 44.18%, #CC137A 88.18%, $magenta 100.17%);
  }

  &__card-text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;
    padding: 3.4rem 2.9rem 5rem;
    min-width: 0;
  }

  &__card-title {
    font-family: $monserrat;
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 1.1;
    text-transform: uppercase;
    color: $white;
  }

  &__card-time {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    background: $white;
    color: $magenta;
    font-family: $monserrat;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.1;
    border-radius: 2rem;
    padding: 1.7rem 2.1rem;
    white-space: nowrap;
  }

  &__card-desc {
    font-family: $monserrat;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.1;
    color: $white;
    max-width: 31rem;
  }

  // ── Photo (left column) with clip-path skew ──────────────

  &__card-photo-wrap {
    clip-path: polygon(0 0, 100% 0, calc(100% - 3rem) 100%, 0 100%);
    overflow: hidden;
  }

  &__card-photo {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
