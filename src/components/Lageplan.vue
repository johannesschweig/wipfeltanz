<template>
  <div class="mb-12">
    <div class="text-2xl font-slab text-orange-950 mb-8">Lageplan</div>
    <img :src="mapImage" class="cursor-pointer" @click="show = true" />
    <div>
      <p class="text-sm text-gray-500 mt-4">
        Hier ist der Lageplan für das Event. Klicke auf das Bild, um eine größere Version zu sehen.
      </p>
    </div>
    <div
      v-if="show"
      class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-90"
      @click.self="show = false"
    >
      <img
        :src="mapImage"
        class="h-100vw w-100vh md:max-h-[80vh] md:max-w-[80vw] transform rotate-90 md:rotate-0 bg-white rounded"
        @click.stop
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import mapImage from '@/assets/map.png'

const show = ref(false)
</script>