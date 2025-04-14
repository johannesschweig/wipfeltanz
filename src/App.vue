<script setup lang="ts">
import Avatar from './components/Avatar.vue'
</script>

<template>
  <div class="max-w-7xl mx-auto">
    <div class="flex mt-12 mb-8">
      <Avatar person="ise"/>
      <div class="grow"></div>
      <Avatar person="becci"/>
    </div>
    <h1 class="text-6xl mb-8 text-center font-slab">
      <div class="text-emerald-900">Wipfeltanz</div>
      <div class="text-orange-900">im</div>
      <div class="text-fuchsia-900">Lobetal</div>
    </h1>
    <div class="flex mb-8">
      <Avatar person="lotta"/>
      <div class="grow">]
        <div class="mb-8 text-lg">
          <p class="text-center font-bold text-stone-800">25.07 - 27.07</p>
          <p class="text-center font-bold text-stone-800 hover:text-stone-600">
            <a href="https://maps.app.goo.gl/LyBYxpTkdrQuBfxA6">Lobetal bei Bernau</a>
          </p>
        </div>
      </div>
      <Avatar person="florenz"/>
    </div>

  </div>
</template>
