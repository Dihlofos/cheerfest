<script setup>
import dummyData from '~/../data/sections/dummy.json'
import contestData from '~/../data/sections/contest.json'

definePageMeta({
  layout: 'empty'
})

useHead({
  title: ''
})
</script>

<template>
  <main>
    <DummyHeroSection v-bind="dummyData" />
    <ContestSection v-bind="contestData" />
  </main>
</template>
