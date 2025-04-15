<script setup lang="ts">
import Avatar from './components/Avatar.vue'
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <div class="flex mt-12 mb-8">
      <Avatar person="ise"/>
      <div class="grow"></div>
      <Avatar person="becci"/>
    </div>
    <h1 class="text-6xl mb-8 text-center font-slab">
      <div class="text-emerald-900">Wipfeltanz</div>
      <div class="text-orange-900 text-4xl">in</div>
      <div class="text-fuchsia-900">Lobetal</div>
    </h1>
    <div class="flex mb-8">
      <Avatar person="lotta"/>
      <div class="grow">
        <div class="mb-8 text-lg font-bold text-stone-700 grid grid-rows-2 justify-items-center">
          <div class="">25.07 - 27.07</div>
          <div class="hover:text-stone-600">
            <a class="grid grid-cols-[16px_1fr] items-center gap-2" href="https://maps.app.goo.gl/LyBYxpTkdrQuBfxA6">
              <img src="./assets/map.svg" class="max-w-4" />
              <span>Lobetal
                <span class="text-sm">(bei Berlin)</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <Avatar person="florenz"/>
    </div>
    <div class="mb-12">
      <div class="text-2xl font-slab text-orange-950 mb-2">Herzlich Willkommen</div>
      <div class="text-stone-700 mb-4">Wir (Ise, Bcci, Lotta und Florenz) werden 30, 30, 30 und 23 Jahre alt und wollen deshalb mit Euch feiern.</div>
      <button class="btn-lg btn-primary">Zusagen</button>
    </div>
    <div class="mb-12">
      <div class="text-2xl font-slab text-orange-950 mb-2">Anreise</div>
      <div class="text-stone-700 mb-4"></div>
    </div>
    <div class="mb-12">
      <div class="text-2xl font-slab text-orange-950 mb-2">Programm</div>
      <div class="text-stone-700 mb-4"></div>
    </div>
    <div class="mb-12">
      <div class="text-2xl font-slab text-orange-950 mb-2">Lageplan</div>
      <div class="text-stone-700 mb-4"></div>
    </div>
    <div class="mb-12">
      <div class="text-2xl font-slab text-orange-950 mb-2">Essen</div>
      <div class="text-stone-700 mb-4"></div>
    </div>
    <div class="mb-12">
      <div class="text-2xl font-slab text-orange-950 mb-2">FAQ</div>
      <div class="text-stone-700 mb-4"></div>
    </div>


  </div>
</template>
