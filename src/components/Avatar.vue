<template>
  <div class="">
    <img class="max-w-24 max-h-24 md:max-w-32 md:max-h-32 shadow-sm rounded-full" :src="imageSrc" />
    <div class="text-center font-slab md:text-lg mt-1 md:mt-2 text-stone-700">{{ name }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Import images
import iseImage from '@/assets/ise.png'
import becciImage from '@/assets/becci.png'
import lottaImage from '@/assets/lotta.png'
import florenzImage from '@/assets/florenz.png'

const props = defineProps({
  person: {
    type: String,
    required: true
  }
})

// Map person to the corresponding image
const imageSrc = computed(() => {
  switch (props.person) {
    case 'ise':
      return iseImage
    case 'becci':
      return becciImage
    case 'lotta':
      return lottaImage
    case 'florenz':
      return florenzImage
    default:
      return ''
  }
})

// Map person to the corresponding name
const name = computed(() => {
  switch (props.person) {
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