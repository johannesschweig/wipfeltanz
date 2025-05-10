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
        <div class="text-emerald-900 mb-4">Wipfeltanz</div>
        <div class="text-orange-900 text-4xl">Es hallt im Wald!</div>
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
                href="https://www.google.com/maps/place/Alte+Lanker+Str.+102,+16321+Bernau+bei+Berlin/@52.72978,13.56658,17z/data=!3m1!4b1!4m6!3m5!1s0x47a9b1a66b4c5f39:0x92699dd28031638d!8m2!3d52.72978!4d13.56658!16s%2Fg%2F11c2329m8d?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D">
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
      <div class="text-stone-300 mb-4">Bitte sag uns bis zum 15.06.2025 bescheid, ob und wie du den WIPFELTANZ
        mitgestalten möchtest. Falls ihr Fragen habt, meldet euch einfach!</div>
      <div class="text-stone-300 mb-4">Über DIESEN LINK könnt ihr alle wichtigen Infos mit uns teilen.</div>
      <button class="btn-lg btn-primary">Zusagen</button>
    </div>
    <!-- Details -->
    <div class="mx-3 md:mx-6">
      <div class="mb-12">
        <div class="text-2xl font-slab text-orange-950 mb-8">Lageplan</div>
        <img src="./assets/map.png" class="" />
      </div>
      <div class="mb-4">
        <div class="text-2xl font-slab text-orange-950 mb-2">Anreise</div>
        <div class="mb-4">Adresse: Alte Lanker Str. 102, 16321 Bernau bei Berlin </div>
      </div>
      <div class="mb-12">
        <!-- Zug & Fahrrad -->
        <div class="text-xl font-slab text-orange-950 mb-2">Zug & Fahrrad</div>
        <div class="mb-8">
          Ab dem Bahnhof Bernau sind es ca. 25-30 Min Fahrradfahrt.
          <br /><br />
          <div class="text-lg font-slab text-orange-950 mb-2">Option A: Hauptstraße ca. 7km</div>
          Für die, die es eilig haben, führt euch GoogleMaps an der Hauptstraße durch den Wald direkt zum Ziel. An
          dieser Strecke gibt es, sobald ihr aus Bernau raus seid, keinen separaten Fahrradweg. Die Autos fahren hier
          schnell, aber es sind nicht viele Autos auf dieser asphaltierten Straße unterwegs.
          <img src="./assets/option-a.png" class="mb-4" />
          <br /><br />
          <div class="text-lg font-slab text-orange-950 mb-2">Option B: Entspannt durch Lobetal ca. 8-9km</div>
          Ihr fahrt vom Bahnhof bis zur Weggabelung “Alte-Lanker Straße - Biesenthaler Weg” (bei der Markierung für 29
          min) und biegt in den Biesenthaler Weg ab. Dieser Weg ist etwas länger, dafür weniger befahren und schöner.
          Ihr folgt der Straße bis zur Abzweigung Bodelschwinghstraße. In diese biegt ihr links ab. Sobald sich der Weg
          in einen Feldweg aufgabelt, haltet ihr euch links und fahrt den hügeligen Feldweg durch den Wald bis zum
          Zielort: Alte-Lanker-Straße 102.
        </div>
        <img src="./assets/option-b.png" class="mb-4" />

        <!-- Zug & Bus -->
        <div class="text-xl font-slab text-orange-950 mb-2">Zug & Bus</div>
        <div class="mb-4">
          Vom Bahnhof Bernau fährt der Bus 890 in 13 Minuten direkt bis zum Festivalgelände, allerdings nur
          unregelmäßig. Schaut bitte, dass ihr eine gute Bahnverbindung findet. Wir sind selbst nicht sehr mobil und
          können nur im Notfall per Auto abholen.
          <br /><br />
          <a href="https://bbg-eberswalde.de/images/bernau/890/890_241215.pdf" class="text-blue-600 underline"
            target="_blank">Busfahrplan</a>
          <br /><br />
          <div class="text-lg font-slab text-orange-950 mb-2">Anreise Bus</div>
          Einstieg Bernau Bhf<br />
          <ul class="list-disc list-inside">
            <li>Freitag stündlich bis 19:20</li>
            <li>Samstag um 8:20, 11:20, 15:20, 17:20 und 19:20</li>
          </ul>
          Ausstieg Försterei Woltersdorf
          <br />
          <div class="text-lg font-slab text-orange-950 mb-2">Abreise Bus</div>
          Einstieg Försterei Woltersdorf<br />
          <ul class="list-disc list-inside">
            <li>Sonntag 9:25, 12:25, 16:34, 18:34 und 20:34</li>
          </ul>
          Ankunft Bernau Bhf<br />
          <ul class="list-disc list-inside">
            <li>Sonntag 9:41, 12:41, 16:50, 18:50 und 20:50</li>
          </ul>
        </div>

        <!-- Auto -->
        <div class="text-xl font-slab text-orange-950 mb-2">Auto</div>
        <div class="mb-4">
          Adresse fürs Navi:<br />
          Alte-Lanker Straße 102<br />
          16321 Bernau bei Berlin
          <br /><br />
          Mit Navi solltet ihr problemlos zum Gelände finden. Auf dem Gelände selbst wird es keinen Platz für Autos
          geben. Etwa 150m entfernt gibt es einen stillgelegten Feldweg, den wir ausschildern. Hier kann der fahrbare
          Untersatz abgestellt werden.
        </div>
      </div>
      <div class="mb-12">
        <div class="text-2xl font-slab text-orange-950 mb-2">Programm</div>
        <div class="mb-4">Wir alle machen das Programm. Reicht dazu gerne auf unserem Pad eigene Ideen ein!</div>
        <button class="btn btn-secondary">Workshop einreichen</button>
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
