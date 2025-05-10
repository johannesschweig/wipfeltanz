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
        <div class="mb-4">
          <p>Der WIPFELTANZ wird ein kleines Mitmach-Festival. Das bedeutet, das Wochenende lebt von unseren eigenen
            Beiträgen. Die Location bietet viel Raum, den wir zusammen bespielen können (<a href="#"
              class="text-blue-600 underline">Lageplan</a>). Ideen wären zum Beispiel:</p>
        </div>

        <div class="mb-6">
          <div class="text-xl font-slab text-orange-950 mb-2">Musik</div>
          <p>Du willst auflegen, ein Instrument mitbringen oder mit deiner Band spielen? Meld dich bei uns, dann kriegen
            wir das hin! Je früher wir wissen, welche Technik du brauchst und was du selbst mitbringen kannst, desto
            besser.</p>
        </div>

        <div class="mb-6">
          <div class="text-xl font-slab text-orange-950 mb-2">Workshops</div>
          <p>Ob Kräuterwanderung, Makramee-Workshop, Loop-Station-Experimente, Improtheater, Contact-Impro, eine
            Einführung in deinen Lieblings-Tanzstil oder eine Kampfsportart, (Acro-)Yoga, Meditation, Schnitzen,
            Topfschlagen, Schreibwerkstatt oder etwas ganz anderes - Wir lieben eure Ideen!</p>
          <p>Natürlich ist die Organisation von Workshops freiwillig, wir freuen uns auch, wenn du einfach dabei bist -
            aber <strong>je mehr Gäste etwas beitragen, desto bunter wird unser Programm. Und je früher wir bescheid
              wissen, desto besser können wir planen.</strong> Auch wenn du das Gefühl hast, du bist auf dem Gebiet noch
            nicht so bewandert - wir können auch zusammen ausprobieren. Wir sehen den WIPFELTANZ als Experimentierwiese
            - eine Lichtung im Wald für eure Ideen!</p>
        </div>

        <div class="mb-6">
          <div class="text-xl font-slab text-orange-950 mb-2">Bring etwas mit!</div>
          <p>Vielleicht willst du auch selbst etwas mitbringen, aber nicht extra einen Workshop dazu anbieten? Ideen
            wären zum Beispiel Spiele wie Wikingerschach, Seifenblasen, Hoola-Hoop-Reifen, Slack-Line, BodyPainting /
            Kinderschminken, Perlenbastel-Sets, ...</p>
          <p>Deko ist auch sehr erwünscht. Wenn du also eine schöne Lichterkette hast oder etwas anderes, das Lobetal
            noch schöner und gemütlicher macht, bring es mit! Teppiche und Tücher sind auch begehrt.</p>
          <p>Hast du Technik für Musik, Schwarzlicht, Laser für Lichteffekte oder eine Nebelmaschine? Dann sag unbedingt
            bescheid!</p>
        </div>

        <div class="mb-6">
          <div class="text-xl font-slab text-orange-950 mb-2">Erkundung der Umgebung</div>
          <p>Das Grundstück liegt mitten im Lobetaler Wald. Uns wird bestimmt nicht langweilig.</p>
        </div>

        <div class="mt-4">
          <p>Wir freuen uns über jede Person, die Lust hat, etwas kleines oder großes beizusteuern. Egal ob du von einer
            Idee gehört hast, die du gerne teilen würdest, oder absolute*r Expert*in auf einem Gebiet bist. Die einzige
            Voraussetzung:</p>
          <p class="font-bold">Du hast Bock!</p>
        </div>
      </div>
      <!-- Packliste -->
      <div class="mb-12">
        <div class="text-2xl font-slab text-orange-950 mb-2">Packliste</div>
        <ul class="list-disc list-inside space-y-2">
          <!-- TODO Doc link -->
          <li>Zelt, Isomatte und Schlafsack (wenn du kein Zelt oder ein Extra-Zelt hast, das du mitbringen kannst,
            schreibs in das Doc)</li>
          <li>Mückenspray</li>
          <li>Sonnencreme</li>
          <li>Geschirr, Besteck</li>
          <li>Becher (Wir stellen Klebeband und Edding zum Beschriften)</li>
          <li>Wasserflasche (Trinkwasser gibt es vor Ort)</li>
          <li>Tuch oder Picknickdecke (Je mehr, desto besser!)</li>
          <li>Campingstuhl/Hocker</li>
          <li>Hängematte</li>
          <li>warme Kleidung für nachts</li>
          <li>Schuhe zum Tanzen und Walderkunden</li>
          <li>Badesachen (es gibt wahrscheinlich ein großes Planschbecken und Seen in der Gegend)</li>
          <li>ökologisch abbaubares Hygienezeug (Zahncreme, Duschgel, Shampoo)
            <ul class="list-disc list-inside ml-6 space-y-2">
              <li>Wir haben eine Outdoor-Dusche!</li>
              <li>
                Bitte nutzt den Wald fürs kleine Geschäft und die Plumpsklos fürs große Geschäft, da das eine Bad im
                Wohnhaus für beispielsweise menstruierende Personen und Familien mit Kindern reserviert ist.
              </li>
            </ul>
          </li>
          <li>Handtuch</li>
          <li>
            <!-- TODO Doc link -->
            Lebensmittel für unser <strong>Mitbring-Buffet</strong> (Abendessen für Freitag, Frühstück und Snacks für
            tagsüber für Samstag). Bitte trage im Doc ein, was du mitbringst. Abendessen am Samstag und Frühstück am
            Sonntag stellen wir.
          </li>
          <li>Dinge, die den Ort schöner machen, von Spielen über Lichterketten bis hin zu Seifenblasen</li>
          <li>Was euch sonst noch so einfällt!</li>
        </ul>
      </div>
      <!-- Verköstigung -->
      <div class="mb-12">
        <div class="text-2xl font-slab text-orange-950 mb-2">Verköstigung</div>
        <div class="mb-4">
          <p>Beim Wipfeltanz sollen nicht nur die Hüften geschwungen werden, es soll auch geschmaust werden.</p>
        </div>
        <div class="mb-4">
          <p>Zum Abendessen am Freitag und Frühstück am Samstag wird es eine große Tafel mit mitgebrachten Leckereien
            geben. Tragt gerne im <a href="#" class="text-blue-600 underline">Rise up Pad</a> ein, was ihr beisteuert,
            damit ein buntes Buffet entstehen kann.</p>
        </div>
        <div class="mb-4">
          <p>Samstagabend bauen wir eine non-stop-hotdog-station (in veggie und vegan) auf. Zusätzlich wird es Rohkost
            und Salate geben, die wir zusammen schnippeln können. Wir kaufen ein.</p>
        </div>
        <div class="mb-4">
          <p>Am Sonntagmorgen holen wir Brötchen beim Bäcker und stellen Basics an Belag. Damit alle gestärkt die
            Heimreise antreten können.</p>
        </div>
        <div class="mb-4">
          <h3 class="text-xl font-bold text-orange-950 mb-2">Getränke</h3>
          <p>Bier, Sekt, einige Limos, alkoholfreies Bier und Leitungswasser stellen wir. Wem was fehlt, darf das gerne
            selbst mitbringen.</p>
        </div>
      </div>
      <!-- Finanzierung -->
      <div class="mb-12">
        <div class="text-2xl font-slab text-orange-950 mb-2">Finanzierung</div>
        <div class="mb-4">
          <p>Um einen Teil der Veranstaltung zu finanzieren, bitten wir euch um einen Unkostenbeitrag für Location, Technik, Getränke, das Abendessen am Samstag und Frühstück am Sonntag (Empfehlung: <strong>25-50€</strong> pro Person). Bitte schätze selbst ehrlich ein, wie viel du konsumierst und wie viel du geben kannst. Wir wollen allen die Teilnahme ermöglichen - am Geld soll es nicht scheitern!</p>
        </div>
        <div class="mb-4">
          <p>Bitte überweise deinen Beitrag bis zum <strong>15.06.</strong> per PayPal an Lottas PayPal-Adresse: <a href="mailto:markoetter@posteo.de" class="text-blue-600 underline">markoetter@posteo.de</a>.</p>
          <!-- TODO paypal me link -->
        </div>
        <div class="mb-4">
          <p>Falls du Fragen hast, kannst du dich immer bei uns melden.</p>
        </div>
        <img src="./assets/group.jpg" class="" />
      </div>
    </div>
  </div>
</template>
