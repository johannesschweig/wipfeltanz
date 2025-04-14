<template>
  <div class="">
    <img class="max-w-24 max-h-24" :src="imageSrc" />
    <div class="text-center font-slab text-stone-700">{{ name }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  person: {
    type: String,
    required: true
  }
})

const imageSrc = `/src/assets/${props.person}.png`

const name = computed(() => {
  switch(props.person) {
    case 'ise':
      return 'Ise'
    case 'becci':
      return 'Becci'
    case 'lotta':
      return 'Lotta'
    case 'florenz':
      return 'Florenz'
    default:
      return ''
  }
})
</script>