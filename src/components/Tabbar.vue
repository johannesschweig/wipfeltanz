<script setup lang="ts">
import { useRoute } from 'vue-router';
</script>

<template>
  <!-- Tab Bar -->
  <nav class="flex flex-wrap justify-between bg-orange-900 text-stone-100 px-4 py-2 rounded-lg mb-8 text-sm md:text-base">
    <router-link
      to="/"
      class="px-4 py-2"
      :class="{ 'bg-orange-700 rounded': $route.path === '/' }"
    >
      Lageplan
    </router-link>
    <router-link
      to="/anreise"
      class="px-4 py-2"
      :class="{ 'bg-orange-700 rounded': $route.path === '/anreise' }"
    >
      Anreise
    </router-link>
    <router-link
      to="/programm"
      class="px-4 py-2"
      :class="{ 'bg-orange-700 rounded': $route.path === '/programm' }"
    >
      Programm
    </router-link>
    <router-link
      to="/packliste"
      class="px-4 py-2"
      :class="{ 'bg-orange-700 rounded': $route.path === '/packliste' }"
    >
      Packliste
    </router-link>
    <router-link
      to="/verkoestigung"
      class="px-4 py-2"
      :class="{ 'bg-orange-700 rounded': $route.path === '/verkoestigung' }"
    >
      Verköstigung
    </router-link>
    <router-link
      to="/finanzierung"
      class="px-4 py-2"
      :class="{ 'bg-orange-700 rounded': $route.path === '/finanzierung' }"
    >
      Finanzierung
    </router-link>
  </nav>
</template>