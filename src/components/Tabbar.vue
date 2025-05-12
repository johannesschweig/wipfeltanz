<script setup lang="ts">
import { useRoute } from 'vue-router'

// Define an array of routes
const routes = [
  { path: '/', name: 'Lageplan' },
  { path: '/anreise', name: 'Anreise' },
  { path: '/programm', name: 'Programm' },
  { path: '/packliste', name: 'Packliste' },
  { path: '/verkoestigung', name: 'Verköstigung' },
  { path: '/finanzierung', name: 'Finanzierung' },
]
</script>

<template>
  <!-- Tab Bar -->
  <nav class="grid grid-cols-3 md:flex md:flex-wrap md:justify-mbetween gap-2 md:gap-4 text-orange-800 px-2 py-2 md:rounded-xl mb-4 md:mb-8 text-sm md:text-base bg-orange-200">
    <router-link
      v-for="route in routes"
      :key="route.path"
      :to="route.path"
      class="px-4 py-2 text-center"
      :class="{ 'border border-orange-800 rounded-xl text-orange-900 font-bold': $route.path === route.path }"
    >
      {{ route.name }}
    </router-link>
  </nav>
</template>