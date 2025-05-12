<script setup lang="ts">
import Tabbar from './components/Tabbar.vue'
import Hero from './components/Hero.vue'
import Welcome from './components/Welcome.vue'
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <!-- Hero -->
    <Hero />
    <!-- Welcome -->
    <Welcome />
    <Tabbar />
    <!-- Details -->
    <div class="mx-3 md:mx-6">
      <router-view />
    </div>
  </div>
</template>
