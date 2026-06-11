import type { CampsiteConfig } from "../types";

/**
 * Obersteghof — Stellplatz am Bauernhof, Maria Alm (Region Hochkönig).
 * Inhalte zu 100 % aus raw/digest abgeleitet. Stellplatz-Nachtpreis ist Richtwert
 * (auf der Website nicht angegeben) — offen im priceNote disclosed.
 */
const IMG = "/campsites/obersteghof";

const obersteghof: CampsiteConfig = {
  name: "Obersteghof",
  shortName: "Obersteghof",
  slug: "obersteghof",
  ort: "Maria Alm",
  region: "Salzburger Land",
  theme: "alpin",
  heroVariant: "center",
  brandKind: "Stellplatz am Bauernhof",
  regionLong: "Region Hochkönig · Maria Alm · Salzburger Land · Österreich",

  claim: "Stellplatz mit Blick aufs Steinerne Meer",
  claimEmphasis: "Steinerne Meer",
  intro:
    "Auf einer kleinen Anhöhe über dem Urslautal liegt der Obersteghof — ein Bauernhof mit Wildkräutergarten, Eseln und weitem Blick auf Maria Alm und das Steinerne Meer. Von April bis Oktober findest du hier deinen ruhigen Platz.",

  statement: {
    text: "Hoch über Maria Alm wachsen die Kräuter, grasen die Esel und steht das Steinerne Meer im Blick.",
    emphasis: "das Steinerne Meer",
  },

  pillars: [
    {
      title: "Stellplatz mit Bergblick",
      text: "Gemütliche Plätze auf fester Anhöhe — der Blick reicht über Maria Alm bis zum Steinernen Meer.",
      image: { src: `${IMG}/gallery-92c2fc473e.webp`, alt: "Wohnmobile am Stellplatz des Obersteghofs mit Blick auf das Steinerne Meer" },
    },
    {
      title: "Wildkräuter & Garten",
      text: "Der liebevoll angelegte Kräutergarten und die umliegende Wildkräuter-Landschaft laden zum Durchatmen ein.",
      image: { src: `${IMG}/gallery-77fb000228.webp`, alt: "Kräutergarten am Obersteghof mit Hochbeeten und Bergpanorama" },
    },
    {
      title: "Hofleben mit Eseln",
      text: "Deinen Platz teilst du in Nachbarschaft mit den Eseln vom Hof — Natur und Tiere direkt vor dem Vorzelt.",
      image: { src: `${IMG}/gallery-b0090d07fb.webp`, alt: "Esel auf der Wiese am Obersteghof" },
    },
  ],

  usps: [
    "Strom & Frischwasser",
    "WC & warme Dusche",
    "Hunde willkommen",
    "HochkönigCard inklusive",
    "Wasser aus eigener Quelle",
    "Blick aufs Steinerne Meer",
  ],

  trust: {
    heading: "Ruhe, Kräuter und Weitblick",
    headingEmphasis: "Kräuter",
    intro:
      "Familie Rainer empfängt dich auf einem stillen Hof mit eigener Quelle, Kräutergarten und Eseln. Dazu Kräuterladen, Workshops und geführtes Waldbaden — und mit der HochkönigCard viele Leistungen inklusive.",
  },

  awards: [
    { label: "Natur im Garten", image: { src: `${IMG}/logo-d927ee2fd4.png`, alt: "Auszeichnung Natur im Garten" } },
  ],

  saison: { von: "April", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/gallery-e6f9a5425d.webp`, alt: "Almhütte Oberstegalm am Obersteghof mit Blick auf den Hochkönig" },
  },

  camping: {
    heading: "Stellplatz am Obersteghof",
    intro:
      "Ein kleiner, gemütlicher Platz auf festem Schotter — eben, wetterfest und mit Strom, Frischwasser von der eigenen Quelle, WC und warmer Dusche.",
    features: [
      {
        title: "Ebener Platz im Grünen",
        text: "Stellplätze auf festem, ebenem Schotter — mitten ins Grüne gebettet, ruhig und wetterfest. Strom und Frischwasser sind vorhanden.",
        image: { src: `${IMG}/gallery-48b75ea2b2.webp`, alt: "Stellplatz am Obersteghof von oben, umgeben von Wiesen" },
      },
      {
        title: "In Nachbarschaft der Esel",
        text: "Die Esel vom Hof grasen gleich nebenan — ein Stück Bauernhofleben, das gerade Kinder gern täglich besuchen.",
        image: { src: `${IMG}/gallery-d647fa13dc.webp`, alt: "Esel am Stall des Obersteghofs" },
      },
      {
        title: "Kräutergarten von oben",
        text: "Der angelegte Kräutergarten mit seinen Hochbeeten lädt zum Schlendern und Schauen ein — Wildkräuter, so weit das Auge reicht.",
        image: { src: `${IMG}/amenity-cc2dfe5b68.webp`, alt: "Kräutergarten am Obersteghof aus der Vogelperspektive" },
      },
      {
        title: "Obstbäume & Bienen",
        text: "Apfel- und Birnbäume blühen im Frühjahr, fleißige Bienen summen dazwischen — der Hof ist als „Natur im Garten“ ausgezeichnet.",
        image: { src: `${IMG}/amenity-832ac701a6.webp`, alt: "Apfelblüte mit Biene am Obersteghof" },
      },
      {
        title: "Wildkräuter ringsum",
        text: "Rund um den Hof breitet sich eine vielseitige Wildkräuter-Landschaft aus — Grundlage für die Naturprodukte aus dem Kräuterladen.",
        image: { src: `${IMG}/amenity-344da27a20.webp`, alt: "Wildkräuterwiese am Obersteghof mit Bergen im Hintergrund" },
      },
      {
        title: "Wald für Waldbaden",
        text: "Der nahe Wald lädt zum geführten Waldbaden ein — gemütliche Stunden zwischen den Bäumen, gut für Körper und Kopf.",
        image: { src: `${IMG}/gallery-f8cff3955d.webp`, alt: "Wald nahe dem Obersteghof für geführtes Waldbaden" },
      },
    ],
  },

  mobilheime: {
    heading: "Die Oberstegalm",
    intro:
      "Wer mehr Ruhe sucht, mietet die Oberstegalm — eine Selbstversorgerhütte in Alleinlage hoch über dem Tal.",
    items: [
      {
        name: "Oberstegalm",
        kind: "Selbstversorger-Almhütte",
        text: "Idyllische Almhütte auf 1280 m in Alleinlage: Holzherd, Holzofen, Warmwasser über Badeofen, Strom aus Photovoltaik und Wasser aus eigener Quelle. Fasssauna mit Holzofen, Lagerfeuerplatz und Doppelbetten aus Zirbenholz. Buchbar wochenweise von Samstag bis Samstag.",
        image: { src: `${IMG}/gallery-7d59776972.webp`, alt: "Oberstegalm — Almhütte mit Sitzplatz und Bergblick" },
        features: [
          "Für 1 – 8 Personen",
          "Wohnfläche ca. 80 m²",
          "Fasssauna mit Holzofen",
          "Auf 1280 m, Alleinlage",
          "Juni bis Oktober",
          "Wochenweise Sa – Sa",
        ],
      },
    ],
  },

  anreise: {
    heading: "Dein Weg auf die Anhöhe",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A10 Tauernautobahn Richtung Saalfelden, weiter nach Maria Alm. Der Hof liegt auf einer Anhöhe — die letzten Meter sind Schotterstraße, Zufahrtshöhe max. 3,35 m.",
      },
      {
        title: "Lage & Ort",
        text: "Das Ortszentrum von Maria Alm erreichst du in rund 25 Gehminuten. Bahnhof Saalfelden und Flughafen Salzburg (ca. 1 Stunde) liegen in erreichbarer Nähe.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke von der Oberstegalm",
    headingEmphasis: "Oberstegalm",
    intro:
      "Warmes Zirbenholz, Holzofen und eine gemütliche Stube — ein Blick in die Selbstversorgerhütte hoch über Maria Alm.",
    tag: "Almhütte · Juni bis Oktober",
    moreCount: 12,
    images: [
      { src: `${IMG}/gallery-04e310f84d.webp`, alt: "Küche und Stube der Oberstegalm mit Holzherd" },
      { src: `${IMG}/gallery-f8281ec440.webp`, alt: "Küche der Oberstegalm mit Holzofen und Brennholz" },
      { src: `${IMG}/gallery-4709f19433.webp`, alt: "Schlafzimmer der Oberstegalm mit Doppelbett aus Zirbenholz" },
      { src: `${IMG}/gallery-7d319dd0e3.webp`, alt: "Schlaflager im Obergeschoss der Oberstegalm" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz auf der Anhöhe",
    headingEmphasis: "auf der Anhöhe",
    intro:
      "Wähle Zeitraum und Personen — Familie Rainer meldet sich persönlich mit deiner Verfügbarkeit für den Stellplatz.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreis — auf der Website sind keine Stellplatz-Preise angegeben (bitte bestätigen). 2 Personen inkl. Strom · HochkönigCard inklusive · zzgl. evtl. Ortstaxe.",
    highlight: {
      title: "HochkönigCard inklusive",
      text: "6 Sommerbahnen, Schwimmbäder, geführte Wanderungen und mehr — bei uns kostenlos für dich.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz (Wohnmobil/Wohnwagen)", perNight: 32, perExtraGuest: 6 },
    ],
  },

  kontakt: {
    tel: "+43 650 3502874",
    telHref: "tel:+436503502874",
    mail: "angelarainer@gmx.at",
    adresse: "Stegen 27 · 5761 Maria Alm · Österreich",
    coords: { lat: 47.394363, lng: 12.901932 },
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Stellplatz", href: "#camping" },
    { label: "Almhütte", href: "#mobilheime" },
    { label: "Eindrücke", href: "#galerie" },
    {
      label: "Preise & Anreise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default obersteghof;
