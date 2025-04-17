<script setup lang="ts">
import Avatar from './components/Avatar.vue'
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <!-- Hero -->
    <div class="mx-3 md:mx-6">
      <div class="flex mt-12 mb-8">
        <Avatar person="ise" />
        <div class="grow"></div>
        <Avatar person="becci" />
      </div>
      <h1 class="text-6xl mb-8 text-center font-slab">
        <div class="text-emerald-900">Wipfeltanz</div>
        <div class="text-orange-900 text-4xl">in</div>
        <div class="text-fuchsia-900">Lobetal</div>
      </h1>
      <div class="flex mb-8">
        <Avatar person="lotta" />
        <div class="grow flex justify-center">
          <div class="mb-8 text-lg font-bold mx-auto">
            <div class="grid grid-cols-[16px_1fr] items-center gap-2 mb-4">
              <img src="./assets/calendar.svg" class="max-w-4" />
              <div class="">25.07 - 27.07</div>
            </div>
            <div class="hover:text-stone-600">
              <a class="grid grid-cols-[16px_1fr] grid-rows-[16px_1fr] items-center gap-2"
                href="https://maps.app.goo.gl/LyBYxpTkdrQuBfxA6">
                <img src="./assets/map.svg" class="max-w-4" />
                <span>Lobetal</span>
                <span class="text-sm col-start-2">bei Berlin</span>
              </a>
            </div>
          </div>
        </div>
        <Avatar person="florenz" />
      </div>
    </div>
    <!-- Welcome -->
    <div class="mb-8 px-3 md:px-6 py-6 md:py-8 bg-orange-900 md:rounded-2xl">
      <div class="text-3xl font-slab text-orange-100 mb-4">Herzlich Willkommen</div>
      <div class="text-stone-300 mb-4">Wir (Ise, Bcci, Lotta und Florenz) werden 30, 30, 30 und 23 Jahre alt und wollen
        deshalb mit Euch feiern.</div>
      <button class="btn-lg btn-primary">Zusagen</button>
    </div>
    <!-- Details -->
    <div class="mx-3 md:mx-6">
      <div class="mb-12">
        <div class="text-2xl font-slab text-orange-950 mb-2">Anreise</div>
        <div class="mb-4">Mit dem Fahrrad: Fahrt mit der Regio bis Bernau und dann 7km mit dem Fahrrad nach Lobetal.
        </div>
        <div class="mb-4">Mit den Öffis: Fahrt mit der Regio bis Bernau und dann mit dem Bus 890 (Endstation
          Marienwerder)
          bis zur Station Lanke, Försterei Woltersdorf.</div>
        <div class="mb-4">Mit dem Auto: Navi bis nach Lobetal.</div>
      </div>
      <div class="mb-12">
        <div class="text-2xl font-slab text-orange-950 mb-2">Programm</div>
        <div class="mb-4">Wir alle machen das Programm. Reicht dazu gerne auf unserem Pad eigene Ideen ein!</div>
        <button class="btn btn-secondary">Workshop einreichen</button>
      </div>
      <div class="mb-12">
        <div class="text-2xl font-slab text-orange-950 mb-8">Lageplan</div>
        <img src="./assets/map.png" class="" />
      </div>
      <div class="mb-12">
        <div class="text-2xl font-slab text-orange-950 mb-2">Essen</div>
        <div class="mb-4">Im Wald gibt es genug Damm- und Rotwild für alle. Auf eine gute Bockjagd!</div>
      </div>
      <div class="mb-12">
        <div class="text-2xl font-slab text-orange-950 mb-2">FAQ</div>
        <div class="font-slab text-orange-950">Toilette</div>
        <div class="mb-4">Es gibt eine im Haus</div>
        <div class="font-slab text-orange-950">Zelten</div>
        <div class="mb-4">Bitte gerne!</div>
      </div>
    </div>
  </div>
</template>
