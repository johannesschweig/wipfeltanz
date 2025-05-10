<script setup lang="ts">
import Avatar from '@/components/Avatar.vue'
</script>

<template>
  <div class="mx-3 md:mx-6">
    <div class="flex mt-12 mb-8">
      <Avatar person="ise" />
      <div class="grow"></div>
      <Avatar person="becci" />
    </div>
    <h1 class="text-6xl mb-8 text-center font-slab">
      <div class="text-emerald-900 mb-4">Wipfeltanz</div>
      <div class="text-orange-900 text-4xl">Es hallt im Wald!</div>
    </h1>
    <div class="flex mb-8">
      <Avatar person="lotta" />
      <div class="grow flex justify-center">
        <div class="mb-8 text-lg font-bold mx-auto">
          <div class="grid grid-cols-[16px_1fr] items-center gap-2 mb-4">
            <img src="@/assets/calendar.svg" class="max-w-4" />
            <div class="">25.07 - 27.07</div>
          </div>
          <div class="hover:text-stone-600">
            <a class="grid grid-cols-[16px_1fr] grid-rows-[16px_1fr] items-center gap-2"
              href="https://www.google.com/maps/place/Alte+Lanker+Str.+102,+16321+Bernau+bei+Berlin/@52.72978,13.56658,17z/data=!3m1!4b1!4m6!3m5!1s0x47a9b1a66b4c5f39:0x92699dd28031638d!8m2!3d52.72978!4d13.56658!16s%2Fg%2F11c2329m8d?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D">
              <img src="@/assets/map.svg" class="max-w-4" />
              <span>Lobetal</span>
              <span class="text-sm col-start-2">bei Berlin</span>
            </a>
          </div>
        </div>
      </div>
      <Avatar person="florenz" />
    </div>
  </div>
</template>