<script setup>
import HeroSection from '~/components/sections/HeroSection.vue';
import heroData from '~/../data/sections/hero.json';
import aboutData from '~/../data/sections/about.json';
import mapData from '~/../data/sections/map.json';
import programData from '~/../data/sections/program.json';
import clubsData from '~/../data/sections/clubs.json';
import nominationsData from '~/../data/sections/nominations.json';

// Здесь можно переписать title и description для каждой страницы, если нужно
useHead({
  title: ''
})
</script>

<template>
  <main>
    <HeroSection v-bind="heroData" />
    <AboutSection v-bind="aboutData" />
    <MapSection v-bind="mapData" />
    <ProgramSection v-bind="programData" />
    <ClubsSection v-bind="clubsData" />
    <NominationsSection v-bind="nominationsData" />
  </main>
</template>

<!-- <script setup>
import dummyData from '~/../data/sections/dummy.json'
import contestData from '~/../data/sections/contest.json'

definePageMeta({
  layout: 'empty'
})

useHead({
  title: 'Фестиваль танцев и чирлидинга — 15 августа'
})
</script>

<template>
  <main>
    <DummyHeroSection v-bind="dummyData" />
    <ContestSection v-bind="contestData" />
  </main>
</template> -->

