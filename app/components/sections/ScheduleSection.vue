<script setup>
import { ref, computed } from 'vue'
import { sanitizeText } from '~/utils/sanitize'

const props = defineProps({
  title: { type: String, required: true },
  tabs: { type: Array, default: () => [] },
})

const activeIndex = ref(0)

const activeTab = computed(() => props.tabs[activeIndex.value] || {})
</script>

<template>
  <section id="schedule" class="schedule">
    <Container>
      <h2 class="schedule__title title">{{ title }}</h2>

      <div class="schedule__tabs">
        <button
          v-for="(tab, index) in tabs"
          :key="tab.name"
          :class="['schedule__tab', { 'schedule__tab--active': index === activeIndex }]"
          @click="activeIndex = index"
        >
          {{ tab.name }}
        </button>
      </div>

      <div
        class="schedule__grid"
        :style="{ '--cols': activeTab.columns }"
      >
        <div
          v-for="event in activeTab.events"
          :key="event.title"
          class="schedule__card"
          :class="{ 'schedule__card--reg': event.registration }"
        >

          <div class="schedule__event-title" v-html="sanitizeText(event.title)"></div>
          <div class="schedule__event-bottom">
            <div class="schedule__time">{{ event.time }}</div>
            <a
              v-if="event.registration"
              :href="event.link || '#'"
              class="schedule__reg"
              target="_blank"
            >Регистрация</a>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.schedule {
  padding: 9.3rem 0;
  scroll-padding-top: 10rem;

  @media (max-width: $tablet) {
    padding: 5rem 0;
  }

  // ── Title ─────────────────────────────────────────────────

  &__title {
    margin: 0 0 6.4rem;

    @media (max-width: $tablet) {
      margin: 0 0 3rem;
    }
  }

  // ── Tabs ──────────────────────────────────────────────────

  &__tabs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 5rem;

    @media (max-width: $tablet) {
      gap: 0.8rem;
      margin-bottom: 3rem;
    }

    @media (max-width: $mobile) {
      flex-wrap: nowrap;
      justify-content: flex-start;
      overflow-x: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;
      -webkit-overflow-scrolling: touch;
      margin-left: -2rem;
      margin-right: -2rem;
      padding-left: 2rem;
      padding-right: 2rem;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  &__tab {
    font-family: $monserrat;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.1;
    color: $white;
    background: transparent;
    border: 2px solid $white;
    border-radius: 2rem;
    padding: 1.3rem 2.7rem;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.2s, color 0.2s;

    @media (max-width: $tablet) {
      font-size: 1.6rem;
      padding: 1rem 2rem;
      border-radius: 1.4rem;
    }

    @media (max-width: $mobile) {
      font-size: 1.4rem;
      padding: 0.8rem 1.6rem;
      border-radius: 1.2rem;
    }

    &--active {
      background: $white;
      border-color: $white;
      color: $magenta;
    }
  }

  // ── Grid ──────────────────────────────────────────────────

  &__grid {
    display: grid;
    grid-template-columns: repeat(var(--cols, 3), 1fr);
    gap: 1.5rem 1.5rem;

    @media (max-width: $tablet) {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    @media (max-width: $mobile) {
      grid-template-columns: 1fr;
      gap: 1.6rem;
    }
  }

  // ── Card ──────────────────────────────────────────────────

  &__card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
    background: var(--grrr, linear-gradient(90deg, #EB1380 0.2%, #CC137A 18.82%, #661368 87.1%, #25135D 133.65%, #0C1359 155.37%));
    border-radius: 2rem;
    padding: 2.4rem;
    min-height: 18rem;

    &--reg {
      background: linear-gradient(271deg, #FFC200 -17.34%, #FF00C3 139.04%);
    }

    @media (max-width: $tablet) {
      padding: 2.4rem 2rem;
      gap: 1.6rem;
      border-radius: 1.6rem;
    }
  }

  // ── Time badge ────────────────────────────────────────────

  &__time {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: $white;
    font-family: $monserrat;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.1;
    border-radius: 2rem;
    padding: 0.8rem 1.5rem;
    white-space: nowrap;
    border-radius: 30px;
    border: 2px solid $white;

    @media (max-width: $tablet) {
      font-size: 1.6rem;
      padding: 1rem 1.8rem;
    }
  }

  // ── Event title ───────────────────────────────────────────

  &__event-title {
    font-family: $monserrat;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
    color: $white;
    margin: 0;

    @media (max-width: $tablet) {
      font-size: 1.8rem;
    }

    @media (max-width: $mobile) {
      font-size: 1.6rem;
    }
  }

  &__event-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    gap: 2rem;
  }

  // ── Registration button ───────────────────────────────────

  &__reg {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: $white;
    color: $magenta;
    font-family: $monserrat;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.1;
    border-radius: 2rem;
    padding: 0.9rem 2.8rem;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    border-radius: 20px;

    @media (min-width: $tablet) {
      &:hover {
        background: $magenta;
        color: $white;
      }
    }

    @media (max-width: $tablet) {
      font-size: 1.8rem;
      padding: 1.4rem 2.4rem;
    }

    @media (max-width: $mobile) {
      font-size: 1.6rem;
      padding: 1.2rem 2rem;
    }
  }
}
</style>
