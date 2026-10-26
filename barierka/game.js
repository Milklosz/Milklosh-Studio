const USTAWIENIA = {
  nazwa: 'BARIERKA',
  wersja: '1.0',
  autor: 'Milklosh Studio',
  kontakt: 'milklosh.studio@gmail.com',
  ekran: { szerokosc: 320, wysokosc: 180 },
  kafelek: 12,
  krokCzasu: 1 / 60,

  petla: {
    interpolacja: true,
    maxDelta: 0.1,
    maxKrokow: 6,
    opoznienieRozmiaru: 0.12,
  },

  diagnostyka: {
    klawisz: 'KeyG',
    parametr: 'debug',
    probki: 120,
    x: 3,
    y: 24,
    odstep: 7,
    margines: 3,
    kolorTla: 'rgba(5, 8, 20, 0.85)',
    kolorTekstu: '#7dff9a',
    kolorOstrzezenia: '#ffd23a',
    typoweOdswiezania: [30, 48, 50, 60, 72, 75, 90, 100, 120, 144, 165, 240],
  },

  fizyka: {
    grawitacja: 900,
    predkoscSkoku: 280,
    predkoscUciecia: 120,
    maxPredkoscSpadania: 400,
    epsilon: 0.001,
  },

  postac: {
    predkoscBiegu: 90,
    predkoscKucania: 40,
    szerokosc: 10,
    wysokosc: 24,
    wysokoscKucania: 14,
    szerokoscSprite: 16,
    klatkiBieguNaSekunde: 12,
    limitUpadku: 176,
    startKolumna: 2,
  },

  jezdnia: {
    poziomZiemi: 144,
    wysokoscPobocza: 6,
    zoltaLiniaY: 153,
    srodkowaLiniaY: 166,
    srodkowaLiniaGrubosc: 2,
    dlugoscKreski: 20,
    okresKreski: 44,
  },

  barierka: {
    slupekCo: 3,
    slupekOdsuniecie: 4,
    slupekSzerokosc: 3,
    kolorSzynyGora: '#e6ebef',
    kolorSzynyJasny: '#b9c1c9',
    kolorSzynyRowek: '#7d8791',
    kolorSzynySrodek: '#9aa3ad',
    kolorSzynyCien: '#5f6872',
    kolorSruby: '#4b535c',
    kolorSlupka: '#8a939d',
    kolorSlupkaCien: '#5a636d',
    kolorGleby: '#2a251f',
  },

  kamera: {
    gora: -36,
    dol: 0,
    kotwicaStopY: 120,
    martwaStrefa: 22,
    wygladzanie: 7.5,
    koniecRuchu: 1,
    paralaksaNieba: 0.25,
    dopelnienieLasu: 80,
  },

  platformy: {
    rzadBazowy: 10,
    grubosc: 8,
    rozstawFilarow: 6,
    szerokoscFilaru: 6,
    wysokoscBarierki: 7,
    odstepSlupkowBarierki: 6,
    predkoscZeskoku: 60,
    kolorGora: '#a9aeb3',
    kolorCialo: '#80858b',
    kolorCien: '#4f5459',
    kolorSzwu: '#6a6f75',
    kolorFilaru: '#6f757b',
    kolorFilaruJasny: '#8b9197',
    kolorFilaruCien: '#555b61',
    kolorPodstawy: '#3e4247',
    kolorBarierki: '#9aa0a6',
    kolorBarierkiJasny: '#c3c8cc',
  },

  drzewo: {
    wysokoscPnia: 4,
    szerokoscPnia: 2,
    wysokoscPietra: 12,
    koronaOkraglego: 0.65,
  },

  las: [
    { paralaksa: 0.12, paralaksaPionowa: 0.6, podstawa: 112, odstep: 11, wysokoscMin: 40, wysokoscMax: 62, szerokoscMin: 14, szerokoscMax: 20, wariantow: 10, okraglyCo: 5, ziarno: 11 },
    { paralaksa: 0.28, paralaksaPionowa: 0.8, podstawa: 128, odstep: 13, wysokoscMin: 50, wysokoscMax: 74, szerokoscMin: 16, szerokoscMax: 24, wariantow: 10, okraglyCo: 5, ziarno: 23 },
    { paralaksa: 0.5, paralaksaPionowa: 1, podstawa: 144, odstep: 17, wysokoscMin: 60, wysokoscMax: 92, szerokoscMin: 20, szerokoscMax: 30, wariantow: 10, okraglyCo: 5, ziarno: 37 },
  ],

  paleta: {
    r: '#46528a',
    d: '#222c4a',
    D: '#0b0e18',
    c: '#62d8ff',
    h: '#2d3658',
    v: '#0a1320',
    g: '#3a6f9a',
  },

  przeszkody: {
    klatek: 16,
    tolerancjaHitboxu: 2,
    marginesLadowania: 4,
    marginesSpawnu: 4,
    odbicie: 200,
    jezdniaDolnaY: 176,
    typy: {
      beczka: {
        rodzaj: 'beczka',
        srednica: 18,
        predkosc: 48,
        kolory: { dno: '#9c4a24', krawedz: '#5a2a12', obrecz: '#74381b', znak: '#e8c030' },
      },
      opona: {
        rodzaj: 'opona',
        srednica: 14,
        predkosc: 90,
        kolory: { bieznik: '#17171c', bieznikJasny: '#2e2e38', bok: '#222229', felga: '#8b929c' },
      },
      karton: {
        rodzaj: 'karton',
        srednica: 12,
        predkosc: 30,
        kolory: { tektura: '#b88b52', krawedz: '#7b5a31', tasma: '#e0c9a0', etykieta: '#f2efe6' },
      },
    },
  },

  wrogowie: {
    predkosc: 30,
    szerokosc: 14,
    wysokosc: 22,
    klatkiNaSekunde: 4,
    tolerancjaLadowania: 8,
    tolerancjaHitboxu: 2,
    odbicie: 220,
    czasSplaszczenia: 0.5,
    zasiegDomyslny: 2,
    paleta: {
      y: '#f2c230',
      h: '#b88a10',
      s: '#e9b98c',
      e: '#1a1a1a',
      o: '#ff7a1a',
      l: '#eef2b8',
      g: '#555a63',
      b: '#2f4a7a',
      k: '#17130f',
    },
    grzybiarka: {
      czasSchylenia: 2,
      czasZamachu: 1,
      zgiecie: 6,
      zasiegPionowy: 30,
      kosz: {
        rozmiar: 8,
        predkosc: 150,
        grawitacja: 380,
        celWysokosc: 29,
        obrotNaSekunde: 8,
        tolerancja: 1,
        minCzasLotu: 0.3,
        kolory: { plecionka: '#c8a15a', plecionkaCiemna: '#8d6b2f', obrecz: '#6b4a1a', raczka: '#7a5524' },
      },
      paleta: {
        r: '#b3322a',
        s: '#e0b08a',
        e: '#1a1a1a',
        g: '#4f7a3a',
        G: '#35592a',
        n: '#7b4f2a',
        N: '#5a3a1c',
        w: '#c8a15a',
        W: '#8d6b2f',
        k: '#3a2a1c',
      },
    },
  },

  powerupy: {
    szerokosc: 8,
    wysokosc: 8,
    unoszenie: 3,
    pulsSzybkosc: 8,
    miganieOstatnieSekundy: 1,
    miganieSzybkosc: 10,
    aura: { przezroczystosc: 0.16, amplituda: 0.1, promien: 1 },
    pasek: { szerokosc: 40, wysokosc: 4, odstep: 4, kolorRamki: '#05060d' },
    typy: {
      niebieski: { kolor: '#4aa8ff', kolorJasny: '#cfeaff', czas: 7, efekt: 'zabijanieWrogow', dzwiek: 'powerupNiebieski' },
      czerwony: { kolor: '#ff4a4a', kolorJasny: '#ffd0d0', czas: 7, efekt: 'tempo', mnoznik: 1.5, dzwiek: 'powerupCzerwony' },
      zolty: { kolor: '#ffd23a', kolorJasny: '#fff2b8', czas: 7, efekt: 'deska', mnoznik: 1.5, dzwiek: 'powerupZolty' },
    },
    deska: { b: '#d9a21b', d: '#8a5f0a', w: '#2a2a30' },
  },

  smierc: {
    czas: 0.5,
    blysk: 0.08,
    kolorBlysku: '#ffffff',
    grawitacja: 380,
    rozrzutX: 7,
    rozrzutLosowyX: 30,
    impulsGora: 20,
    impulsLosowyGora: 70,
    rozrzutY: 3,
    czasZnikania: 0.2,
  },

  punktKontrolny: {
    odstepRespawnuKolumn: 1,
    wysokoscDrazka: 16,
    szerokoscDrazka: 2,
    przesuniecieX: 5,
    szerokoscFlagi: 8,
    wysokoscFlagi: 6,
    kolorDrazka: '#c9ced6',
    kolorNieaktywny: '#ff5a4a',
    kolorAktywny: '#4dff88',
    kolorKonturu: '#0b1020',
  },

  odblaski: {
    szerokosc: 5,
    wysokosc: 5,
    unoszenie: 5,
    tolerancja: 2,
    pulsSzybkosc: 6,
    poswiata: 0.35,
    kontur: '#05060d',
    konturAlfa: 0.75,
    kolory: {
      czerwony: { kolor: '#ff2d55', kolorJasny: '#ffc2d0' },
      bialy: { kolor: '#dce6ff', kolorJasny: '#ffffff' },
      zolty: { kolor: '#fff35c', kolorJasny: '#ffffd0' },
    },
    dzwiek: 'odblask',
    licznik: { odstepY: 9, ikonaOdstep: 10 },
    rozmieszczenie: {
      1: [
        { kolumna: 30, kolor: 'czerwony' },
        { kolumna: 57, kolor: 'bialy' },
        { kolumna: 91, kolor: 'zolty' },
        { kolumna: 116, kolor: 'czerwony' },
        { kolumna: 124, kolor: 'bialy' },
        { kolumna: 141, kolor: 'zolty' },
        { kolumna: 178, kolor: 'czerwony' },
        { kolumna: 192, kolor: 'bialy' },
      ],
      2: [
        { kolumna: 27, kolor: 'czerwony' },
        { kolumna: 53, kolor: 'bialy' },
        { kolumna: 78, kolor: 'zolty' },
        { kolumna: 131, kolor: 'czerwony', wysokosc: 4 },
        { kolumna: 139, kolor: 'bialy' },
        { kolumna: 147, kolor: 'zolty' },
        { kolumna: 175, kolor: 'czerwony' },
        { kolumna: 202, kolor: 'bialy' },
        { kolumna: 227, kolor: 'zolty' },
        { kolumna: 241, kolor: 'czerwony' },
      ],
      3: [
        { kolumna: 35, kolor: 'czerwony' },
        { kolumna: 81, kolor: 'bialy' },
        { kolumna: 101, kolor: 'zolty', wysokosc: 2 },
        { kolumna: 140, kolor: 'czerwony', wysokosc: 2 },
        { kolumna: 148, kolor: 'bialy' },
        { kolumna: 156, kolor: 'zolty' },
        { kolumna: 210, kolor: 'czerwony' },
        { kolumna: 237, kolor: 'bialy' },
        { kolumna: 275, kolor: 'zolty' },
        { kolumna: 303, kolor: 'czerwony' },
        { kolumna: 330, kolor: 'bialy' },
        { kolumna: 366, kolor: 'zolty' },
      ],
      4: [
        { kolumna: 39, kolor: 'czerwony' },
        { kolumna: 94, kolor: 'bialy' },
        { kolumna: 119, kolor: 'zolty', wysokosc: 4 },
        { kolumna: 133, kolor: 'czerwony' },
        { kolumna: 155, kolor: 'bialy' },
        { kolumna: 185, kolor: 'zolty' },
        { kolumna: 230, kolor: 'czerwony' },
        { kolumna: 248, kolor: 'bialy' },
        { kolumna: 277, kolor: 'zolty' },
        { kolumna: 337, kolor: 'czerwony' },
        { kolumna: 350, kolor: 'bialy' },
        { kolumna: 359, kolor: 'zolty', wysokosc: 4 },
      ],
      5: [
        { kolumna: 35, kolor: 'czerwony' },
        { kolumna: 64, kolor: 'bialy', wysokosc: 4 },
        { kolumna: 95, kolor: 'zolty' },
        { kolumna: 112, kolor: 'czerwony' },
        { kolumna: 162, kolor: 'bialy' },
        { kolumna: 202, kolor: 'zolty' },
        { kolumna: 224, kolor: 'czerwony', wysokosc: 4 },
        { kolumna: 238, kolor: 'bialy' },
        { kolumna: 275, kolor: 'zolty' },
        { kolumna: 300, kolor: 'czerwony', wysokosc: 4 },
        { kolumna: 337, kolor: 'bialy' },
        { kolumna: 346, kolor: 'zolty' },
      ],
      6: [
        { kolumna: 32, kolor: 'czerwony' },
        { kolumna: 87, kolor: 'bialy' },
        { kolumna: 106, kolor: 'zolty' },
        { kolumna: 124, kolor: 'czerwony' },
        { kolumna: 150, kolor: 'bialy' },
        { kolumna: 219, kolor: 'zolty' },
        { kolumna: 241, kolor: 'czerwony', wysokosc: 4 },
        { kolumna: 250, kolor: 'bialy' },
        { kolumna: 261, kolor: 'zolty' },
        { kolumna: 296, kolor: 'czerwony' },
        { kolumna: 324, kolor: 'bialy' },
        { kolumna: 352, kolor: 'zolty' },
        { kolumna: 378, kolor: 'czerwony', wysokosc: 4 },
        { kolumna: 387, kolor: 'bialy' },
      ],
      7: [
        { kolumna: 20, kolor: 'czerwony' },
        { kolumna: 45, kolor: 'bialy' },
        { kolumna: 75, kolor: 'zolty', wysokosc: 2 },
        { kolumna: 108, kolor: 'czerwony' },
        { kolumna: 143, kolor: 'bialy', wysokosc: 4 },
        { kolumna: 190, kolor: 'zolty' },
        { kolumna: 221, kolor: 'czerwony' },
        { kolumna: 241, kolor: 'bialy' },
        { kolumna: 253, kolor: 'zolty', wysokosc: 3 },
        { kolumna: 306, kolor: 'czerwony' },
        { kolumna: 320, kolor: 'bialy', wysokosc: 4 },
        { kolumna: 368, kolor: 'zolty' },
        { kolumna: 415, kolor: 'czerwony', wysokosc: 2 },
        { kolumna: 468, kolor: 'bialy' },
      ],
      8: [
        { kolumna: 18, kolor: 'czerwony' },
        { kolumna: 47, kolor: 'bialy' },
        { kolumna: 62, kolor: 'zolty' },
        { kolumna: 124, kolor: 'czerwony', wysokosc: 4 },
        { kolumna: 140, kolor: 'bialy', wysokosc: 4 },
        { kolumna: 178, kolor: 'zolty' },
        { kolumna: 196, kolor: 'czerwony' },
        { kolumna: 237, kolor: 'bialy', wysokosc: 2 },
        { kolumna: 254, kolor: 'zolty' },
        { kolumna: 312, kolor: 'czerwony' },
        { kolumna: 335, kolor: 'bialy' },
        { kolumna: 392, kolor: 'zolty', wysokosc: 4 },
        { kolumna: 431, kolor: 'czerwony' },
        { kolumna: 478, kolor: 'bialy' },
      ],
      9: [
        { kolumna: 19, kolor: 'czerwony' },
        { kolumna: 48, kolor: 'bialy' },
        { kolumna: 58, kolor: 'zolty' },
        { kolumna: 112, kolor: 'czerwony' },
        { kolumna: 146, kolor: 'bialy' },
        { kolumna: 174, kolor: 'zolty' },
        { kolumna: 193, kolor: 'czerwony' },
        { kolumna: 240, kolor: 'bialy', wysokosc: 2 },
        { kolumna: 303, kolor: 'zolty' },
        { kolumna: 337, kolor: 'czerwony' },
        { kolumna: 381, kolor: 'bialy' },
        { kolumna: 407, kolor: 'zolty', wysokosc: 4 },
        { kolumna: 442, kolor: 'czerwony' },
        { kolumna: 505, kolor: 'bialy' },
      ],
      10: [
        { kolumna: 19, kolor: 'czerwony' },
        { kolumna: 51, kolor: 'bialy' },
        { kolumna: 83, kolor: 'zolty' },
        { kolumna: 114, kolor: 'czerwony' },
        { kolumna: 147, kolor: 'bialy' },
        { kolumna: 178, kolor: 'zolty' },
        { kolumna: 211, kolor: 'czerwony' },
        { kolumna: 243, kolor: 'bialy' },
        { kolumna: 278, kolor: 'zolty' },
        { kolumna: 310, kolor: 'czerwony' },
        { kolumna: 339, kolor: 'bialy' },
        { kolumna: 372, kolor: 'zolty' },
        { kolumna: 401, kolor: 'czerwony' },
        { kolumna: 436, kolor: 'bialy' },
      ],
    },
  },

  ocena: {
    czasyOdniesienia: [38, 50, 70, 73, 74, 82, 90, 92, 98, 148],
    progOdblaskow: 0.7,
    gwiazda: { kolorPelnej: '#ffd23a', kolorPustej: '#3a4060', konturPelnej: '#8a5f0a' },
    kafel: { y: 1, skala: 1, odstep: 1 },
    ekran: {
      tytulY: 18,
      gwiazdyY: 38,
      gwiazdaSkala: 3,
      gwiazdaOdstep: 5,
      liniaCzasY: 66,
      liniaOdblaskiY: 77,
      liniaSmiercY: 88,
      nowaOcenaY: 104,
      kolorSpelnionego: '#7dff9a',
      kolorNiespelnionego: '#8f98ad',
    },
  },

  meta: {
    szerokosc: 16,
    wysokosc: 40,
    kwadrat: 4,
    kolorJasny: '#f2f2f2',
    kolorCiemny: '#15151a',
    kolorSlupka: '#c9ced6',
    opoznienieRestartu: 0.6,
  },

  dzwiek: {
    glosnoscEfektow: 0.6,
    glosnoscMuzyki: 0.14,
    maxGlosow: 24,
    progLadowania: 90,
    ostrzezenieCo: 0.25,
    kluczPamieci: 'barierka_dzwiek_wyciszony',
    efekty: {
      skok: [{ t: 'square', f: 300, f2: 620, d: 0.13, v: 0.5 }],
      ladowanie: [{ t: 'noise', f: 380, f2: 160, d: 0.06, v: 0.22 }],
      kucanie: [{ t: 'triangle', f: 200, f2: 130, d: 0.05, v: 0.08 }],
      odblask: [
        { t: 'square', f: 1400, d: 0.04, o: 0, v: 0.25 },
        { t: 'square', f: 2100, d: 0.07, o: 0.04, v: 0.25 },
      ],
      punktKontrolny: [
        { t: 'square', f: 660, d: 0.07, o: 0, v: 0.35 },
        { t: 'square', f: 990, d: 0.14, o: 0.07, v: 0.35 },
      ],
      powerupNiebieski: [
        { t: 'square', f: 523, d: 0.08, o: 0, v: 0.4 },
        { t: 'square', f: 659, d: 0.08, o: 0.07, v: 0.4 },
        { t: 'square', f: 784, d: 0.08, o: 0.14, v: 0.4 },
        { t: 'square', f: 1047, d: 0.14, o: 0.21, v: 0.4 },
      ],
      powerupCzerwony: [
        { t: 'triangle', f: 262, d: 0.08, o: 0, v: 0.7 },
        { t: 'triangle', f: 330, d: 0.08, o: 0.06, v: 0.7 },
        { t: 'triangle', f: 392, d: 0.08, o: 0.12, v: 0.7 },
        { t: 'triangle', f: 523, d: 0.08, o: 0.18, v: 0.7 },
        { t: 'noise', f: 1400, f2: 700, d: 0.14, o: 0.2, v: 0.15 },
      ],
      powerupZolty: [
        { t: 'square', f: 784, d: 0.07, o: 0, v: 0.35 },
        { t: 'square', f: 988, d: 0.07, o: 0.06, v: 0.35 },
        { t: 'square', f: 784, d: 0.07, o: 0.12, v: 0.35 },
        { t: 'square', f: 1319, d: 0.14, o: 0.18, v: 0.35 },
      ],
      zabicieSkok: [
        { t: 'square', f: 200, f2: 70, d: 0.12, v: 0.5 },
        { t: 'noise', f: 700, f2: 300, d: 0.08, v: 0.3 },
        { t: 'square', f: 420, f2: 840, d: 0.08, o: 0.08, v: 0.3 },
      ],
      zabicieBok: [
        { t: 'noise', f: 1200, f2: 200, d: 0.22, v: 0.4 },
        { t: 'square', f: 700, f2: 140, d: 0.22, v: 0.35 },
      ],
      smierc: [
        { t: 'square', f: 660, f2: 80, d: 0.5, v: 0.5 },
        { t: 'noise', f: 900, f2: 100, d: 0.4, v: 0.35 },
        { t: 'triangle', f: 330, f2: 50, d: 0.5, v: 0.5 },
      ],
      rzut: [
        { t: 'noise', f: 600, f2: 1800, d: 0.14, v: 0.25 },
        { t: 'square', f: 250, f2: 480, d: 0.12, v: 0.18 },
      ],
      uderzenieKosza: [
        { t: 'noise', f: 500, f2: 180, d: 0.1, v: 0.35 },
        { t: 'triangle', f: 170, f2: 80, d: 0.09, v: 0.4 },
      ],
      odbicie: [
        { t: 'square', f: 280, f2: 900, d: 0.11, v: 0.4 },
        { t: 'triangle', f: 420, f2: 1300, d: 0.11, v: 0.3 },
      ],
      ostrzezenie: [{ t: 'square', f: 988, d: 0.05, v: 0.3 }],
      zapowiedz: [
        { t: 'square', f: 880, d: 0.06, o: 0, v: 0.32 },
        { t: 'square', f: 660, d: 0.06, o: 0.1, v: 0.32 },
        { t: 'square', f: 880, d: 0.09, o: 0.2, v: 0.32 },
      ],
      bossTrafienie: [
        { t: 'square', f: 180, f2: 60, d: 0.25, v: 0.6 },
        { t: 'noise', f: 900, f2: 200, d: 0.2, v: 0.4 },
        { t: 'square', f: 520, f2: 260, d: 0.15, o: 0.1, v: 0.35 },
      ],
      bossSmierc: [
        { t: 'square', f: 400, f2: 40, d: 1.2, v: 0.5 },
        { t: 'noise', f: 1200, f2: 80, d: 1.3, v: 0.4 },
        { t: 'triangle', f: 200, f2: 30, d: 1.4, v: 0.5 },
      ],
      fanfara: [
        { t: 'square', f: 523, d: 0.12, o: 0, v: 0.4 },
        { t: 'square', f: 659, d: 0.12, o: 0.13, v: 0.4 },
        { t: 'square', f: 784, d: 0.12, o: 0.26, v: 0.4 },
        { t: 'square', f: 1047, d: 0.2, o: 0.39, v: 0.4 },
        { t: 'square', f: 784, d: 0.12, o: 0.62, v: 0.4 },
        { t: 'square', f: 1047, d: 0.3, o: 0.75, v: 0.4 },
        { t: 'triangle', f: 523, d: 1.2, o: 1.05, v: 0.5 },
        { t: 'triangle', f: 659, d: 1.2, o: 1.05, v: 0.5 },
        { t: 'triangle', f: 784, d: 1.2, o: 1.05, v: 0.5 },
        { t: 'square', f: 1047, d: 1.2, o: 1.05, v: 0.25 },
        { t: 'square', f: 1319, d: 0.9, o: 1.05, v: 0.15 },
      ],
      meta: [
        { t: 'square', f: 523, d: 0.11, o: 0, v: 0.4 },
        { t: 'square', f: 659, d: 0.11, o: 0.12, v: 0.4 },
        { t: 'square', f: 784, d: 0.11, o: 0.24, v: 0.4 },
        { t: 'square', f: 1047, d: 0.12, o: 0.36, v: 0.4 },
        { t: 'triangle', f: 523, d: 0.6, o: 0.5, v: 0.5 },
        { t: 'triangle', f: 659, d: 0.6, o: 0.5, v: 0.5 },
        { t: 'triangle', f: 784, d: 0.6, o: 0.5, v: 0.5 },
        { t: 'square', f: 1047, d: 0.6, o: 0.5, v: 0.22 },
      ],
    },
    muzyka: {
      bpm: 156,
      bramka: 0.8,
      wyprzedzenie: 0.25,
      odstepPlanowania: 40,
      glosnoscMelodii: 0.6,
      glosnoscBasu: 0.9,
      tempoPowerup: 1.08,
      filtrNormalny: 2600,
      filtrPowerup: 6500,
      czasFiltru: 0.15,
      melodia: [
        'E5 . C5 E5 A5 . G5 E5',
        'C5 . A4 C5 E5 . D5 C5',
        'A4 . C5 F5 A5 . G5 F5',
        'E5 . C5 A4 C5 . E5 F5',
        'G5 . E5 C5 E5 . G5 C6',
        'B5 . G5 E5 G5 . B5 G5',
        'D5 . G5 B5 D6 . B5 G5',
        'A5 . F#5 D5 F#5 . A5 B5',
        'E5 . C5 E5 A5 . G5 E5',
        'C5 . A4 C5 E5 . G5 A5',
        'A5 . F5 C5 F5 . A5 C6',
        'A5 . G5 F5 E5 . F5 A5',
        'D5 . F5 A5 D6 . C6 A5',
        'E5 . G#5 B5 E6 . D6 B5',
        'C6 . B5 A5 E5 . A5 C6',
        'B5 . G#5 E5 G#5 . B5 E6',
      ],
      bas: ['A2', 'A2', 'F2', 'F2', 'C3', 'C3', 'G2', 'G2', 'A2', 'A2', 'F2', 'F2', 'D3', 'E2', 'A2', 'E2'],
    },
  },

  postep: {
    klucz: 'barierka_postep',
  },

  latwy: {
    dostepny: true,
    domyslnie: false,
    klawisz: 'KeyE',
    klucz: 'barierka_latwy',
    mnoznikPowerupow: 1.5,
    minOdcinek: 110,
    szukanie: 0.32,
    plaskie: 5,
    odRobotnika: 5,
    odGrzybiarki: 3,
    przedToczaca: 30,
    zaToczaca: 4,
  },

  kolorystyka: {
    wlaczona: true,
    klawisz: 'KeyC',
    klucz: 'barierka_kolor',
    podgladX: 98,
    podgladY: 0,
    warianty: [
      { gwiazdki: 0, c: '#62d8ff', g: '#3a6f9a' },
      { gwiazdki: 8, c: '#7dff9a', g: '#3a8a5a' },
      { gwiazdki: 15, c: '#ffb347', g: '#a8652a' },
      { gwiazdki: 22, c: '#ff8ad8', g: '#a04a88' },
      { gwiazdki: 30, c: '#f4f4f4', g: '#8a8f99' },
    ],
  },

  duch: {
    wlaczony: true,
    klawisz: 'KeyU',
    klucz: 'barierka_duch_',
    kluczWlaczenia: 'barierka_duch_wl',
    co: 3,
    maksProbek: 4000,
    alfa: 0.35,
    kolor: '#e8f4ff',
  },

  statystyki: {
    wlaczone: true,
    opcjeY: 145,
    opcjeOdstep: 8,
    klawisz: 'KeyT',
    naglowekY: 6,
    tabelaY: 24,
    odstep: 9,
    kolumny: [34, 78, 138, 192, 252],
    sumaY: 128,
    sumaOdstep: 9,
    stopkaY: 172,
    przycisk: { szerokosc: 96, wysokosc: 14, margines: 6, kolorRamki: '#7dff9a' },
    zapisCo: 10,
  },

  jezyk: {
    klucz: 'barierka_jezyk',
    dostepne: ['pl', 'en'],
    domyslny: 'en',
    polski: 'pl',
  },

  opinia: {
    temat: 'Barierka feedback',
  },

  zrzut: {
    skala: 4,
    prefiks: 'barierka',
  },

  auta: {
    wlaczone: true,
    okres: 560,
    przerwaMin: 16,
    pasy: [
      { dol: 161, kierunek: -1, predkosc: 46, liczba: 4, ciezarowki: 0.3, rozmiar: 0.6, ziarno: 5 },
      { dol: 170, kierunek: -1, predkosc: 84, liczba: 5, ciezarowki: 0.2, rozmiar: 0.75, ziarno: 9 },
      { dol: 179, kierunek: 1, predkosc: 126, liczba: 4, ciezarowki: 0.2, rozmiar: 0.95, ziarno: 14 },
    ],
    typy: {
      osobowe: { dlugosc: 18, nadwozie: 4, dach: 3, dachStart: 4, dachDlugosc: 9 },
      ciezarowka: { dlugosc: 38, kabinaDlugosc: 11, kabinaWysokosc: 9, skrzyniaWysokosc: 10 },
    },
    kolaWysokosc: 2,
    kolaSzerokosc: 3,
    nadwozia: ['#b3392c', '#2f6db3', '#d7d9dc', '#d9a621', '#3f8a52', '#7b52a6', '#2a2f38'],
    skrzynie: ['#cfd3d8', '#b9532f', '#e6e6e0', '#4a6fa5'],
    kabiny: ['#2f6db3', '#b3392c', '#d9a621', '#d7d9dc'],
    okna: '#9cc7e6',
    kola: '#101216',
    swiatlo: {
      wiazka: 16,
      alfaWiazki: 0.18,
      kolorWiazki: '#fff1b0',
      kolorReflektora: '#fff6c8',
      kolorTylnego: '#ff3b30',
      poswiataTylnego: 0.3,
      minimumReflektora: 0.45,
      minimumTylnego: 0.5,
      spadekWiazki: 0.2,
      krotkaWiazka: 0.8,
      progKrotkiejWiazki: 20,
    },
    poziomy: {
      1: { reflektory: 0.6, tylne: 0.9, odcien: null },
      2: { reflektory: 1, tylne: 1, odcien: { kolor: '#05070c', sila: 0.35 } },
      3: { reflektory: 0.9, tylne: 1, odcien: { kolor: '#101216', sila: 0.15 } },
      4: { reflektory: 0.45, tylne: 0.6, odcien: { kolor: '#d9dfe6', sila: 0.45 } },
      5: { reflektory: 0.35, tylne: 0.5, odcien: { kolor: '#c9c3ba', sila: 0.4 } },
      6: { reflektory: 0.4, tylne: 0.5, odcien: { kolor: '#ffffff', sila: 0.25 } },
      7: { reflektory: 0.9, tylne: 1, odcien: { kolor: '#4a1f3a', sila: 0.2 } },
      8: { reflektory: 1, tylne: 1, odcien: { kolor: '#05070c', sila: 0.3 } },
      9: { reflektory: 1, tylne: 1, odcien: { kolor: '#0a1014', sila: 0.3 } },
      10: { reflektory: 0.8, tylne: 1, odcien: { kolor: '#2a1a3a', sila: 0.2 } },
    },
  },

  boss: {
    szerokosc: 28,
    wysokosc: 44,
    zycia: 3,
    hitbox: { x: 4, y: 3, szerokosc: 20 },
    tolerancjaLadowania: 0,
    odbicie: 260,
    czasOgluszenia: 1.5,
    mnoznikOdwrotu: 2,
    atakPoOdwrocie: 0.4,
    miganieSzybkosc: 12,
    predkosci: [30, 42, 54],
    odstepyAtakow: [2.4, 2.0, 1.6],
    pierwszyAtak: 1.6,
    czasZapowiedzi: 0.7,
    czasPoAtaku: 0.5,
    ataki: [['beczka'], ['opona', 'beczka'], ['kosze', 'opona', 'beczka']],
    klatkiChoduNaSekunde: 5,
    wejscieKolumn: 14,
    wygladzanieKamery: 6,
    odPokladu: 1,
    startKolumna: 38,
    rzut: { czasLotu: 0.4, czasLotuPoklad: 0.7, przedSoba: 4, predkosci: { beczka: 56, opona: 96 }, obrot: 10, zycie: 9 },
    kosze: { odstepKolumn: 5, ostrzezenie: 0.9, czasSpadania: 0.35, startY: -40, alfaCienia: 0.55, kolorCienia: '#05060d', kolorObwodki: '#ffd23a' },
    rozpad: { czas: 1.5, grawitacja: 60, rozrzutX: 5, rozrzutLosowy: 50, impuls: 30, impulsLosowy: 60, znikanie: 0.6 },
    pasek: { y: 5, szerokosc: 22, wysokosc: 5, odstep: 3, napisOdstep: 3, kolor: '#ff5a4a', kolorJasny: '#ffb0a0', kolorPusty: '#3a2333', kolorRamki: '#05060d' },
    sciana: { szerokosc: 8, pas: 6, kolorJasny: '#f2f2f2', kolorCiemny: '#d8402a', kolorRamy: '#3a3f47', gora: -40 },
    znak: { kolor: '#ffd23a', skala: 2, odstep: 3 },
    tempoMuzyki: 1.12,
    przesuniecieKamery: 100,
    marginesWidocznosci: 4,
    paleta: {
      k: '#1a1410', y: '#f2c230', Y: '#c4940f', l: '#fff6b0', s: '#e9b98c', S: '#c48e66', e: '#1a1a1a', m: '#5a3a1c',
      o: '#ff7a1a', O: '#c85a0a', r: '#e8f0c0', w: '#d9dde3', g: '#555a63', b: '#2f4a7a', B: '#223658', n: '#3a2a1c', p: '#e05a8a',
    },
  },

  blyski: {
    ostrzezenie: true,
    klucz: 'barierka_blyski',
    domyslnie: false,
    przyciskSzerokosc: 104,
    przyciskWysokosc: 16,
    przyciskOdstep: 10,
    tytulY: 22,
    opisY: 50,
    opisOdstep: 10,
    przyciskiY: 96,
    podpowiedzY: 132,
    notkaY: 146,
    wyborPrzycisk: { szerokosc: 90, wysokosc: 14, margines: 6, odstepOdGlosnika: 14, kolorRamki: '#ffd23a' },
  },

  efekty: {
    wlaczone: true,
    klucz: 'barierka_efekty',
    limitCzastek: 160,
    pyl: {
      kolor: '#dfe3e8',
      ladowanie: { liczba: 8, czas: 0.26, predkosc: 40, wznies: 26, grawitacja: 60, rozmiar: 2 },
      start: { liczba: 4, czas: 0.2, predkosc: 30, wznies: 14, grawitacja: 40, rozmiar: 2 },
    },
    drzenie: {
      czas: 0.15,
      zabicieWroga: 2,
      bossTrafienie: 4,
      uderzenieKosza: 2,
      smierc: 3,
    },
    smugi: {
      kolor: '#ffd6d6',
      alfa: 0.7,
      odstep: 0.03,
      czas: 0.16,
      dlugoscMin: 7,
      dlugoscMax: 18,
      dryf: 50,
      zapas: 2,
    },
    blysk: {
      czas: 0.16,
      kolorSrodka: '#ffffff',
      promien: 7,
      rozmiarSrodka: 5,
      iskry: 4,
    },
  },

  interfejs: {
    wyborNaglowekY: 10,
    wyborPodsumowanie: true,
    wyborPodsumowanieY: 23,
    wyborMysz: true,
    wyborKolumny: 5,
    wyborSiatkaY: 32,
    wyborKafelSzerokosc: 56,
    wyborKafelWysokosc: 36,
    wyborKafelOdstep: 6,
    wyborSkalaNumeru: 3,
    wyborNumerY: 7,
    wyborCzasY: 26,
    wyborOpisY: 116,
    wyborRekordY: 128,
    wyborPodpowiedzY: 150,
    kolorZablokowanego: '#3a4060',
    kolorRamkiKafla: 'rgba(232, 236, 255, 0.35)',
    bladNapisSkala: 4,
    bladNapisY: 60,
    bladKolor: '#ff5a5a',
    bladTlo: '#0d0f1a',
    bladPodpisY: 110,
    gratulacjeNaglowekY: 34,
    gratulacjeNaglowekSkala: 4,
    gratulacjeOpisY: 70,
    gratulacjeCzasY: 90,
    gratulacjePodpisY: 112,
    gratulacjeFinal: { naglowekY: 16, pokonanyY: 44, czasY: 54, gwiazdyY: 63, gwiazdySkala: 2, gwiazdyOdstep: 4, opisY: 80, czasLacznyY: 92, podpisY: 110 },
    kolorZaznaczenia: 'rgba(98, 216, 255, 0.2)',
    dalejY: 142,
    rekordY: 124,
    kolorIkony: '#e8ecff',
    kolorIkonyWyciszonej: '#ff5a5a',
    skalaNaglowka: 4,
    skalaPodtytulu: 2,
    nazwaY: 46,
    podtytulNazwyY: 74,
    podtytulNazwyKolor: '#b9c1d9',
    nacisnijY: 108,
    miganiePodtytulu: 2,
    kolorTekstu: '#e8ecff',
    kolorCienia: '#05060d',
    kolorAkcentu: '#62d8ff',
    kolorTla: 'rgba(5, 8, 20, 0.72)',
    skalaHud: 1,
    skalaTytulu: 2,
    margines: 5,
    skalaPodpisu: 1,
    przyciskPomocy: { x: 52, y: 146, szerokosc: 68, wysokosc: 15, kolorRamki: '#62d8ff' },
    przyciskOGrze: { x: 126, y: 146, szerokosc: 68, wysokosc: 15, kolorRamki: '#62d8ff' },
    przyciskJezyka: { x: 200, y: 146, szerokosc: 68, wysokosc: 15, kolorRamki: '#62d8ff' },
    oGrzeNaglowekY: 8,
    oGrzeNazwaY: 28,
    oGrzeNazwaSkala: 4,
    oGrzeWersjaY: 56,
    oGrzeOpisY: 70,
    oGrzeOdstep: 10,
    oGrzeAutorY: 100,
    oGrzeKodY: 124,
    oGrzeBlyskiY: 134,
    oGrzeStopkaY: 164,
    opiniaY: { ogrze: 144, meta: 154, gratulacje: 154 },
    opiniaKolor: '#62d8ff',
    opiniaPodkreslenie: 2,
    opiniaMargines: 4,
    kasujPrzycisk: { x: 6, szerokosc: 90, wysokosc: 14, margines: 6, kolorRamki: '#ff5a5a' },
    kasujPytanieY: 50,
    kasujPytanieSkala: 2,
    kasujPodpowiedzY: 84,
    kasujPrzyciskiY: 84,
    kasujPrzyciskiSzerokosc: 60,
    kasujPrzyciskiWysokosc: 16,
    kasujPrzyciskiOdstep: 10,
    pauzaSkala: 4,
    pauzaY: 70,
    pauzaPodpisY: 100,
    pomocNaglowekY: 6,
    pomocNaglowekSkala: 2,
    pomocSterowaniePierwszyY: 24,
    pomocSterowanieOdstep: 7,
    pomocPowerupyNaglowekY: 110,
    pomocPowerupyPierwszyY: 121,
    pomocPowerupyOdstep: 12,
    pomocPowerupyOdstepIkony: 16,
    pomocPowerupy: ['niebieski', 'czerwony', 'zolty'],
    pomocStopkaY: 164,
    komunikat: { y: 24, czas: 1.4, skala: 1, kolorTla: 'rgba(5, 8, 20, 0.85)', margines: 4 },
  },
  okno: {
    calkowiteSkalowanie: true,
  },
  dotyk: {
    minRozmiarPx: 48,
    minRozmiarGornychPx: 40,
    strzalka: 26,
    skok: 34,
    kucnij: 26,
    odstep: 5,
    margines: 6,
    poleDotyku: 5,
    gora: { rozmiar: 14, odstep: 3, margines: 4 },
    przezroczystosc: 0.35,
    przezroczystoscWcisniety: 0.7,
    przezroczystoscIkony: 0.9,
    kolorTla: '#05060d',
    kolorRamki: '#e8ecff',
    kolorIkony: '#e8ecff',
    kolorWcisnietego: '#62d8ff',
    pauza: { szerokosc: 100, wysokosc: 18, odstep: 6, y: 96 },
    obrotTlo: '#0d0f1a',
    obrotKolor: '#62d8ff',
    obrotRozmiar: '28px',
    obrotCzcionka: 'monospace',
  },
};

const TEKSTY = {
  pl: {
    tytulKarty: 'Barierka - bieg po barierkach',
    podtytulNazwy: 'BIEG PO BARIERKACH',
    nacisnij: 'NACIŚNIJ DOWOLNY KLAWISZ',
    dotknijEkranu: 'DOTKNIJ EKRANU',
    przyciskPomocy: 'H - POMOC',
    przyciskPomocyDotyk: 'POMOC',
    przyciskOGrze: 'I - O GRZE',
    przyciskOGrzeDotyk: 'O GRZE',
    przyciskJezyka: 'L - ENGLISH',
    przyciskJezykaDotyk: 'ENGLISH',
    wyborNaglowek: 'WYBIERZ POZIOM',
    poziom: 'POZIOM {n}',
    podtytuly: ['ZMIERZCH', 'NOC W DESZCZU', 'TUNEL', 'MGŁA O ŚWICIE', 'ESTAKADA', 'ZIMA', 'ZACHÓD SŁOŃCA', 'MIASTO NOCĄ', 'BURZA', 'FINAŁ O ŚWICIE'],
    rekord: 'REKORD: {t}',
    wyborPodpowiedz: 'STRZAŁKI LUB MYSZ - WYBÓR   ENTER - START',
    wyborPodpowiedzDotyk: 'DOTKNIJ POZIOM',
    wyborPodsumowanieTekst: 'GWIAZDKI: {g}/{m}   UKOŃCZONO: {p}%',
    kasuj: 'K - KASUJ POSTĘP',
    kasujDotyk: 'KASUJ POSTĘP',
    kasujPytanie: 'KASOWAĆ POSTĘP?',
    kasujPodpowiedz: 'ENTER - TAK   ESC - NIE',
    tak: 'TAK',
    nie: 'NIE',
    proba: 'PRÓBA: {n}',
    odblaski: 'ODBLASKI: {a}/{b}',
    metaTytul: 'POZIOM UKOŃCZONY',
    metaCzas: 'CZAS: {t} / {ref} S',
    metaBezSmierci: 'BEZ ŚMIERCI',
    metaProby: 'PRÓB: {n}',
    metaNowaOcena: 'NOWA NAJLEPSZA OCENA',
    metaNowyRekord: 'NOWY REKORD',
    metaDalej: 'DOWOLNY KLAWISZ - DALEJ',
    metaDalejDotyk: 'DOTKNIJ EKRANU - DALEJ',
    gratulacje: 'GRATULACJE',
    gratulacjeOpis: 'WSZYSTKIE POZIOMY UKOŃCZONE',
    gratulacjeCzas: 'ŁĄCZNY CZAS: {t} S',
    gratulacjePodpis: 'SUMA NAJLEPSZYCH CZASÓW WSZYSTKICH POZIOMÓW',
    oGrze: 'O GRZE',
    wersja: 'WERSJA {v}',
    oGrzeOpis: ['CZŁOWIECZEK BIEGNIE PO AUTOSTRADOWYCH BARIERKACH.', 'UNIKAJ PRZESZKÓD I WROGÓW. DOBIEGNIJ DO METY.'],
    autor: 'AUTOR: {x}',
    kontakt: 'KONTAKT: {x}',
    oGrzeKod: 'GRAFIKA I DŹWIĘK SĄ GENEROWANE KODEM',
    oGrzeStopka: 'ESC LUB I: ZAMKNIJ',
    oGrzeStopkaDotyk: 'DOTKNIJ EKRANU - ZAMKNIJ',
    opinia: 'NAPISZ OPINIĘ',
    pauza: 'PAUZA',
    pauzaPodpis: 'P WZNÓW / ESC MENU',
    pauzaWznow: 'WZNÓW',
    pauzaWyjdz: 'WYJDŹ DO MENU',
    pomoc: 'POMOC',
    pomocSterowanie: [
      'STRZAŁKI LUB A D: RUCH',
      'SPACJA LUB W: SKOK (DŁUŻEJ = WYŻEJ)',
      'STRZAŁKA W DÓŁ LUB S: KUCANIE',
      'KUCANIE + SKOK: ZESKOK PRZEZ PLATFORMĘ',
      'WSKOK Z GÓRY ODBIJA I SPŁASZCZA WROGÓW',
      'FINAŁ: SKOK NA GŁOWĘ SZEFA (Z NIEBIESKIM TEŻ Z BOKU)',
      'P: PAUZA   H: POMOC   ESC: WYBÓR POZIOMU',
      'M: DŹWIĘK   F: PEŁNY EKRAN   L: JĘZYK   G: FPS',
      'V: EFEKTY I BŁYSKI   X: ZRZUT PNG   I: O GRZE',
      'WYBÓR POZIOMU: K KASUJ   B BŁYSKI   T STATYSTYKI',
      'U: DUCH REKORDU   C: KOLOR POSTACI (ZA GWIAZDKI)',
      'E: TRYB UŁATWIONY (DŁUŻSZE POWERUPY I WIĘCEJ FLAG)',
    ],
    pomocDotyk: [
      'PRZYCISKI LEWO I PRAWO: RUCH',
      'SKOK: DŁUŻEJ TRZYMAJ = WYŻEJ',
      'KUCNIJ: KUCANIE',
      'KUCNIJ + SKOK: ZESKOK PRZEZ PLATFORMĘ',
      'FINAŁ: SKOK NA GŁOWĘ SZEFA (Z NIEBIESKIM TEŻ Z BOKU)',
      'U GÓRY: PAUZA   DŹWIĘK   POMOC',
      'WYBÓR POZIOMU: PRZYCISKI BŁYSKI I STATYSTYKI',
      'STATYSTYKI: DOTKNIJ OPCJI ABY JĄ ZMIENIĆ',
      'DIAGNOSTYKA FPS: ?DEBUG=1 NA KOŃCU ADRESU',
      'U GÓRY: PEŁNY EKRAN',
    ],
    powerupy: 'POWERUPY',
    powerup: {
      niebieski: { nazwa: 'NIEBIESKI', opis: 'WBIEGANIE WE WROGÓW ICH POKONUJE' },
      czerwony: { nazwa: 'CZERWONY', opis: 'SZYBSZE TEMPO BIEGU' },
      zolty: { nazwa: 'ŻÓŁTY', opis: 'WYŻSZY SKOK' },
    },
    pomocStopka: 'H LUB ESC: ZAMKNIJ',
    pomocStopkaDotyk: 'DOTKNIJ EKRANU - ZAMKNIJ',
    blad: 'BŁĄD',
    bladPodpis: 'ENTER LUB ESC: MENU',
    bladPodpisDotyk: 'DOTKNIJ EKRANU: MENU',
    skok: 'SKOK',
    kucnij: 'KUCNIJ',
    obrocTelefon: 'OBRÓĆ TELEFON',
    efektyWlaczone: 'EFEKTY I BŁYSKI: WŁ.',
    efektyWylaczone: 'EFEKTY I BŁYSKI: WYŁ.',
    efektyBezBlyskow: 'EFEKTY: WŁ.  BŁYSKI: WYŁ. (B W WYBORZE POZIOMU)',
    blyskiWlaczone: 'BŁYSKI: WŁ.',
    blyskiWylaczone: 'BŁYSKI: WYŁ.',
    przyciskBlyski: 'B - BŁYSKI: {s}',
    przyciskBlyskiDotyk: 'BŁYSKI: {s}',
    wl: 'WŁ.',
    wyl: 'WYŁ.',
    ostrzezenieTytul: 'UWAGA: BŁYSKI',
    ostrzezenieOpis: ['POZIOM 9 (BURZA) ZAWIERA BŁYSKI ŚWIATŁA I PIORUNY.', 'MOGĄ BYĆ NIEPRZYJEMNE DLA OSÓB WRAŻLIWYCH NA ŚWIATŁO.', 'WYBÓR ZOSTANIE ZAPAMIĘTANY.'],
    ostrzezenieWlacz: 'BŁYSKI WŁĄCZONE',
    ostrzezenieWylacz: 'BŁYSKI WYŁĄCZONE',
    ostrzezeniePodpowiedz: 'STRZAŁKI - WYBÓR   ENTER - DALEJ   ESC - WRÓĆ',
    ostrzezeniePodpowiedzDotyk: 'DOTKNIJ WYBRANEJ OPCJI',
    ostrzezenieNotka: 'ZMIANA PÓŹNIEJ: V (EFEKTY I BŁYSKI) LUB B W WYBORZE POZIOMU',
    ostrzezenieNotkaDotyk: 'ZMIANA PÓŹNIEJ: PRZYCISK BŁYSKI W WYBORZE POZIOMU',
    oGrzeBlyski: 'V WYŁĄCZA EFEKTY I BŁYSKI BURZY',
    bossNazwa: 'SZEF BUDOWY',
    bossPodpowiedz: 'SKOCZ SZEFOWI NA GŁOWĘ!',
    finalPokonany: 'SZEF BUDOWY POKONANY!',
    finalCzas: 'CZAS FINAŁU: {t} S',
    statystyki: 'STATYSTYKI',
    statKolumny: ['POZIOM', 'REKORD', 'GWIAZDKI', 'ODBLASKI', 'ZGONY'],
    statCzasGry: 'ŁĄCZNY CZAS GRY: {t}',
    statZgony: 'ZGONY RAZEM: {n}   UKOŃCZONE POZIOMY: {u}/{m}',
    statStopka: 'T LUB ESC: ZAMKNIJ',
    statStopkaDotyk: 'DOTKNIJ EKRANU - ZAMKNIJ',
    przyciskStat: 'T - STATYSTYKI',
    przyciskStatDotyk: 'STATYSTYKI',
    opcje: 'OPCJE',
    opcjaDuch: 'U - DUCH NAJLEPSZEGO PRZEJŚCIA: {s}',
    opcjaDuchDotyk: 'DUCH NAJLEPSZEGO PRZEJŚCIA: {s}',
    duchWlaczony: 'DUCH: WŁ.',
    duchWylaczony: 'DUCH: WYŁ.',
    opcjaKolor: 'C - KOLOR POSTACI: {k} (ODBLOKOWANE {n}/{m})',
    opcjaKolorDotyk: 'KOLOR POSTACI: {k} (ODBLOKOWANE {n}/{m})',
    kolorPostaci: 'KOLOR POSTACI: {k}',
    kolorNastepny: 'NASTĘPNY KOLOR ZA {g} GWIAZDEK',
    kolory: ['NIEBIESKI', 'ZIELONY', 'POMARAŃCZOWY', 'RÓŻOWY', 'BIAŁY'],
    opcjaLatwy: 'E - TRYB UŁATWIONY: {s}',
    opcjaLatwyDotyk: 'TRYB UŁATWIONY: {s}',
    latwyWlaczony: 'TRYB UŁATWIONY: WŁ. (BEZ REKORDÓW)',
    latwyWylaczony: 'TRYB UŁATWIONY: WYŁ.',
    latwyZnacznik: 'ŁATWY',
    latwyMeta: 'TRYB UŁATWIONY: BEZ REKORDU I GWIAZDEK',
    zrzutZapisany: 'ZAPISANO ZRZUT PNG',
    zrzutBlad: 'NIE UDAŁO SIĘ ZAPISAĆ PNG',
    diagFps: 'FPS: ŚREDNIO {a}  MINIMUM {b}',
    diagKlatka: 'NAJDŁUŻSZA KLATKA: {t} MS',
    diagKroki: 'KROKI FIZYKI 0/1/2+: {a}/{b}/{c}',
    diagEkran: 'ODŚWIEŻANIE EKRANU: OK. {h} HZ',
    diagDpr: 'DPR: {d}  SKALA BUFORA: {s}X',
    diagBufor: 'BUFOR {w}X{h}  NA EKRANIE {cw}X{ch}',
    diagRender: 'RENDER: {t} MS',
    diagWlaczona: 'DIAGNOSTYKA: WŁ.',
    diagWylaczona: 'DIAGNOSTYKA: WYŁ.',
  },
  en: {
    tytulKarty: 'Barierka - a guardrail runner',
    podtytulNazwy: 'A GUARDRAIL RUNNER',
    nacisnij: 'PRESS ANY KEY',
    dotknijEkranu: 'TAP THE SCREEN',
    przyciskPomocy: 'H - HELP',
    przyciskPomocyDotyk: 'HELP',
    przyciskOGrze: 'I - ABOUT',
    przyciskOGrzeDotyk: 'ABOUT',
    przyciskJezyka: 'L - POLSKI',
    przyciskJezykaDotyk: 'POLSKI',
    wyborNaglowek: 'SELECT LEVEL',
    poziom: 'LEVEL {n}',
    podtytuly: ['DUSK', 'RAINY NIGHT', 'TUNNEL', 'MISTY DAWN', 'VIADUCT', 'WINTER', 'SUNSET', 'CITY AT NIGHT', 'STORM', 'DAWN FINALE'],
    rekord: 'BEST: {t}',
    wyborPodpowiedz: 'ARROWS OR MOUSE - CHOOSE   ENTER - START',
    wyborPodpowiedzDotyk: 'TAP A LEVEL',
    wyborPodsumowanieTekst: 'STARS: {g}/{m}   COMPLETED: {p}%',
    kasuj: 'K - RESET PROGRESS',
    kasujDotyk: 'RESET PROGRESS',
    kasujPytanie: 'RESET PROGRESS?',
    kasujPodpowiedz: 'ENTER - YES   ESC - NO',
    tak: 'YES',
    nie: 'NO',
    proba: 'ATTEMPT: {n}',
    odblaski: 'REFLECTORS: {a}/{b}',
    metaTytul: 'LEVEL COMPLETE',
    metaCzas: 'TIME: {t} / {ref} S',
    metaBezSmierci: 'NO DEATHS',
    metaProby: 'ATTEMPTS: {n}',
    metaNowaOcena: 'NEW BEST RATING',
    metaNowyRekord: 'NEW RECORD',
    metaDalej: 'PRESS ANY KEY TO CONTINUE',
    metaDalejDotyk: 'TAP THE SCREEN TO CONTINUE',
    gratulacje: 'WELL DONE',
    gratulacjeOpis: 'ALL LEVELS COMPLETE',
    gratulacjeCzas: 'TOTAL TIME: {t} S',
    gratulacjePodpis: 'ALL YOUR BEST LEVEL TIMES ADDED UP',
    oGrze: 'ABOUT',
    wersja: 'VERSION {v}',
    oGrzeOpis: ['A RUNNER SPRINTS ALONG HIGHWAY GUARDRAILS.', 'DODGE HAZARDS AND ENEMIES TO REACH THE FINISH.'],
    autor: 'AUTHOR: {x}',
    kontakt: 'CONTACT: {x}',
    oGrzeKod: 'ALL GRAPHICS AND SOUND ARE MADE IN CODE',
    oGrzeStopka: 'ESC OR I: CLOSE',
    oGrzeStopkaDotyk: 'TAP THE SCREEN TO CLOSE',
    opinia: 'SEND FEEDBACK',
    pauza: 'PAUSED',
    pauzaPodpis: 'P RESUME / ESC MENU',
    pauzaWznow: 'RESUME',
    pauzaWyjdz: 'EXIT TO MENU',
    pomoc: 'HELP',
    pomocSterowanie: [
      'ARROWS OR A D: MOVE',
      'SPACE OR W: JUMP (HOLD = HIGHER)',
      'DOWN ARROW OR S: DUCK',
      'DUCK + JUMP: DROP THROUGH A PLATFORM',
      'JUMP ON TOP TO BOUNCE AND SQUASH ENEMIES',
      'FINALE: STOMP THE BOSS (WITH BLUE ALSO FROM THE SIDE)',
      'P: PAUSE   H: HELP   ESC: LEVEL SELECT',
      'M: SOUND   F: FULLSCREEN   L: LANGUAGE   G: FPS',
      'V: EFFECTS AND FLASHES   X: SAVE PNG   I: ABOUT',
      'LEVEL SELECT: K RESET   B FLASHES   T STATISTICS',
      'U: GHOST OF BEST RUN   C: RUNNER COLOR (FOR STARS)',
      'E: EASY MODE (LONGER POWER-UPS AND MORE FLAGS)',
    ],
    pomocDotyk: [
      'LEFT AND RIGHT BUTTONS: MOVE',
      'JUMP: HOLD LONGER = HIGHER',
      'DUCK: CROUCH DOWN',
      'DUCK + JUMP: DROP THROUGH A PLATFORM',
      'FINALE: STOMP THE BOSS (WITH BLUE ALSO FROM THE SIDE)',
      'TOP: PAUSE   SOUND   HELP',
      'LEVEL SELECT: FLASHES AND STATISTICS BUTTONS',
      'STATISTICS: TAP AN OPTION TO CHANGE IT',
      'FPS DIAGNOSTICS: ADD ?DEBUG=1 TO THE ADDRESS',
      'TOP: FULLSCREEN',
    ],
    powerupy: 'POWER-UPS',
    powerup: {
      niebieski: { nazwa: 'BLUE', opis: 'RUNNING INTO ENEMIES DEFEATS THEM' },
      czerwony: { nazwa: 'RED', opis: 'FASTER RUNNING' },
      zolty: { nazwa: 'YELLOW', opis: 'HIGHER JUMP' },
    },
    pomocStopka: 'H OR ESC: CLOSE',
    pomocStopkaDotyk: 'TAP THE SCREEN TO CLOSE',
    blad: 'ERROR',
    bladPodpis: 'ENTER OR ESC: MENU',
    bladPodpisDotyk: 'TAP THE SCREEN: MENU',
    skok: 'JUMP',
    kucnij: 'DUCK',
    obrocTelefon: 'ROTATE PHONE',
    efektyWlaczone: 'EFFECTS AND FLASHES: ON',
    efektyWylaczone: 'EFFECTS AND FLASHES: OFF',
    efektyBezBlyskow: 'EFFECTS: ON  FLASHES: OFF (B IN LEVEL SELECT)',
    blyskiWlaczone: 'FLASHES: ON',
    blyskiWylaczone: 'FLASHES: OFF',
    przyciskBlyski: 'B - FLASHES: {s}',
    przyciskBlyskiDotyk: 'FLASHES: {s}',
    wl: 'ON',
    wyl: 'OFF',
    ostrzezenieTytul: 'WARNING: FLASHES',
    ostrzezenieOpis: ['LEVEL 9 (STORM) HAS FLASHES OF LIGHT AND LIGHTNING.', 'THEY MAY BE UNPLEASANT FOR LIGHT-SENSITIVE PLAYERS.', 'YOUR CHOICE WILL BE REMEMBERED.'],
    ostrzezenieWlacz: 'FLASHES ON',
    ostrzezenieWylacz: 'FLASHES OFF',
    ostrzezeniePodpowiedz: 'ARROWS - CHOOSE   ENTER - CONTINUE   ESC - BACK',
    ostrzezeniePodpowiedzDotyk: 'TAP AN OPTION',
    ostrzezenieNotka: 'CHANGE LATER: V (EFFECTS AND FLASHES) OR B IN LEVEL SELECT',
    ostrzezenieNotkaDotyk: 'CHANGE LATER: FLASHES BUTTON IN LEVEL SELECT',
    oGrzeBlyski: 'V TURNS OFF EFFECTS AND STORM FLASHES',
    bossNazwa: 'SITE BOSS',
    bossPodpowiedz: 'STOMP THE BOSS ON THE HEAD!',
    finalPokonany: 'THE SITE BOSS IS BEATEN!',
    finalCzas: 'FINALE TIME: {t} S',
    statystyki: 'STATISTICS',
    statKolumny: ['LEVEL', 'BEST', 'STARS', 'REFLECTORS', 'DEATHS'],
    statCzasGry: 'TOTAL PLAY TIME: {t}',
    statZgony: 'TOTAL DEATHS: {n}   LEVELS COMPLETED: {u}/{m}',
    statStopka: 'T OR ESC: CLOSE',
    statStopkaDotyk: 'TAP THE SCREEN TO CLOSE',
    przyciskStat: 'T - STATISTICS',
    przyciskStatDotyk: 'STATISTICS',
    opcje: 'OPTIONS',
    opcjaDuch: 'U - GHOST OF THE BEST RUN: {s}',
    opcjaDuchDotyk: 'GHOST OF THE BEST RUN: {s}',
    duchWlaczony: 'GHOST: ON',
    duchWylaczony: 'GHOST: OFF',
    opcjaKolor: 'C - RUNNER COLOR: {k} (UNLOCKED {n}/{m})',
    opcjaKolorDotyk: 'RUNNER COLOR: {k} (UNLOCKED {n}/{m})',
    kolorPostaci: 'RUNNER COLOR: {k}',
    kolorNastepny: 'NEXT COLOR AT {g} STARS',
    kolory: ['BLUE', 'GREEN', 'ORANGE', 'PINK', 'WHITE'],
    opcjaLatwy: 'E - EASY MODE: {s}',
    opcjaLatwyDotyk: 'EASY MODE: {s}',
    latwyWlaczony: 'EASY MODE: ON (NO RECORDS)',
    latwyWylaczony: 'EASY MODE: OFF',
    latwyZnacznik: 'EASY',
    latwyMeta: 'EASY MODE: NO RECORD OR STARS',
    zrzutZapisany: 'PNG SAVED',
    zrzutBlad: 'COULD NOT SAVE PNG',
    diagFps: 'FPS: AVERAGE {a}  MINIMUM {b}',
    diagKlatka: 'LONGEST FRAME: {t} MS',
    diagKroki: 'PHYSICS STEPS 0/1/2+: {a}/{b}/{c}',
    diagEkran: 'DISPLAY REFRESH: ABOUT {h} HZ',
    diagDpr: 'DPR: {d}  BUFFER SCALE: {s}X',
    diagBufor: 'BUFFER {w}X{h}  ON SCREEN {cw}X{ch}',
    diagRender: 'RENDER: {t} MS',
    diagWlaczona: 'DIAGNOSTICS: ON',
    diagWylaczona: 'DIAGNOSTICS: OFF',
  },
};

const POZIOM_1 = {
  nazwa: 'POZIOM 1',
  odcinki: [
    { start: 0, length: 22, top: 10 },
    { start: 24, length: 28, top: 10 },
    { start: 55, length: 5, top: 10 },
    { start: 60, length: 5, top: 8 },
    { start: 65, length: 8, top: 10 },
    { start: 76, length: 4, top: 9 },
    { start: 80, length: 6, top: 8 },
    { start: 89, length: 30, top: 10 },
    { start: 122, length: 36, top: 10 },
    { start: 161, length: 3, top: 8 },
    { start: 166, length: 4, top: 9 },
    { start: 170, length: 42, top: 10 },
  ],
  platformy: [
    { kolumna: 94, wysokosc: 2, dlugosc: 20 },
    { kolumna: 99, wysokosc: 5, dlugosc: 10 },
  ],
  przeszkody: [
    { typ: 'karton', kolumna: 9 },
    { typ: 'opona', kolumna: 41 },
    { typ: 'beczka', kolumna: 49 },
    { typ: 'beczka', kolumna: 137 },
    { typ: 'opona', kolumna: 148 },
    { typ: 'karton', kolumna: 153 },
    { typ: 'beczka', kolumna: 188 },
    { typ: 'opona', kolumna: 199 },
    { typ: 'karton', kolumna: 204 },
    { typ: 'opona', kolumna: 18, jezdnia: true },
    { typ: 'karton', kolumna: 32, jezdnia: true },
    { typ: 'beczka', kolumna: 47, jezdnia: true },
    { typ: 'karton', kolumna: 66, jezdnia: true },
    { typ: 'opona', kolumna: 84, jezdnia: true },
    { typ: 'beczka', kolumna: 100, jezdnia: true },
    { typ: 'opona', kolumna: 114, jezdnia: true },
    { typ: 'beczka', kolumna: 131, jezdnia: true },
    { typ: 'karton', kolumna: 145, jezdnia: true },
    { typ: 'opona', kolumna: 161, jezdnia: true },
    { typ: 'beczka', kolumna: 175, jezdnia: true },
    { typ: 'karton', kolumna: 193, jezdnia: true },
    { typ: 'opona', kolumna: 205, jezdnia: true },
  ],
  wrogowie: [
    { kolumna: 16, zasieg: 2 },
    { kolumna: 62, zasieg: 1 },
    { kolumna: 69, zasieg: 2 },
    { kolumna: 83, zasieg: 1 },
  ],
  grzybiarki: [
    { kolumna: 174, zasiegRzutu: 150 },
    { kolumna: 106, zasiegRzutu: 130, wysokosc: 2 },
  ],
  powerupy: [
    { typ: 'czerwony', kolumna: 27 },
    { typ: 'niebieski', kolumna: 47 },
    { typ: 'zolty', kolumna: 155 },
  ],
  meta: { kolumna: 208 },
  motyw: {
    niebo: ['#141a3a', '#232d5c', '#38477f', '#5d6ca3', '#a67fa8', '#e8997f'],
    las: ['#313a6a', '#1f2650', '#0e1226'],
    jezdnia: {
      kolorPobocza: '#352f29',
      kolorZwiru: '#4a4238',
      kolorAsfaltu: '#20232a',
      kolorAsfaltuJasny: '#2a2e36',
      kolorAsfaltuCiemny: '#181b20',
      kolorZoltejLinii: '#b3a23e',
      kolorBialejLinii: '#d9dde3',
    },
  },
};

const POZIOM_2 = {
  nazwa: 'POZIOM 2',
  odcinki: [
    { start: 0, length: 14, top: 10 },
    { start: 16, length: 16, top: 10 },
    { start: 35, length: 5, top: 10 },
    { start: 40, length: 5, top: 9 },
    { start: 45, length: 5, top: 8 },
    { start: 50, length: 16, top: 10 },
    { start: 69, length: 7, top: 10 },
    { start: 76, length: 5, top: 9 },
    { start: 81, length: 6, top: 8 },
    { start: 90, length: 12, top: 10 },
    { start: 102, length: 6, top: 8 },
    { start: 108, length: 26, top: 10 },
    { start: 137, length: 41, top: 10 },
    { start: 181, length: 10, top: 10 },
    { start: 191, length: 6, top: 8 },
    { start: 200, length: 44, top: 10 },
    { start: 248, length: 9, top: 10 },
    { start: 260, length: 5, top: 8 },
    { start: 268, length: 12, top: 10 },
  ],
  platformy: [
    { kolumna: 106, wysokosc: 4, dlugosc: 35 },
    { kolumna: 146, wysokosc: 3, dlugosc: 8 },
    { kolumna: 174, wysokosc: 2, dlugosc: 3 },
    { kolumna: 177, wysokosc: 6, dlugosc: 26 },
    { kolumna: 209, wysokosc: 2, dlugosc: 3 },
    { kolumna: 212, wysokosc: 4, dlugosc: 5 },
    { kolumna: 222, wysokosc: 4, dlugosc: 4 },
    { kolumna: 231, wysokosc: 4, dlugosc: 3 },
  ],
  przeszkody: [
    { typ: 'karton', kolumna: 31 },
    { typ: 'opona', kolumna: 86 },
    { typ: 'karton', kolumna: 279 },
    { typ: 'karton', kolumna: 10, jezdnia: true },
    { typ: 'opona', kolumna: 27, jezdnia: true },
    { typ: 'beczka', kolumna: 48, jezdnia: true },
    { typ: 'opona', kolumna: 70, jezdnia: true },
    { typ: 'karton', kolumna: 93, jezdnia: true },
    { typ: 'beczka', kolumna: 118, jezdnia: true },
    { typ: 'opona', kolumna: 140, jezdnia: true },
    { typ: 'karton', kolumna: 162, jezdnia: true },
    { typ: 'opona', kolumna: 185, jezdnia: true },
    { typ: 'beczka', kolumna: 206, jezdnia: true },
    { typ: 'opona', kolumna: 226, jezdnia: true },
    { typ: 'karton', kolumna: 250, jezdnia: true },
    { typ: 'opona', kolumna: 266, jezdnia: true },
  ],
  wrogowie: [
    { kolumna: 58, zasieg: 2 },
    { kolumna: 96, zasieg: 2 },
    { kolumna: 115, zasieg: 2 },
    { kolumna: 121, zasieg: 2 },
    { kolumna: 127, zasieg: 2 },
    { kolumna: 186, zasieg: 1 },
    { kolumna: 252, zasieg: 1 },
  ],
  grzybiarki: [
    { kolumna: 160, zasiegRzutu: 130 },
    { kolumna: 223, zasiegRzutu: 100 },
  ],
  powerupy: [
    { typ: 'niebieski', kolumna: 109 },
    { typ: 'zolty', kolumna: 175, wysokosc: 2 },
    { typ: 'czerwony', kolumna: 210, wysokosc: 2 },
  ],
  meta: { kolumna: 273 },
  motyw: {
    niebo: ['#04050b', '#070913', '#0a0d1b', '#0e1224', '#151a2f', '#231f36'],
    las: ['#0e1322', '#0a0e19', '#06080f'],
    jezdnia: {
      kolorPobocza: '#1d1a17',
      kolorZwiru: '#2c2823',
      kolorAsfaltu: '#121419',
      kolorAsfaltuJasny: '#1c1f27',
      kolorAsfaltuCiemny: '#0c0d11',
      kolorZoltejLinii: '#7d7232',
      kolorBialejLinii: '#8d939e',
      kolorKaluzy: '#252a36',
    },
    barierka: {
      kolorSzynyGora: '#c3d0e2',
      kolorSzynyJasny: '#748092',
      kolorSzynyRowek: '#46505e',
      kolorSzynySrodek: '#5c6676',
      kolorSzynyCien: '#303845',
      kolorSruby: '#262c35',
      kolorSlupka: '#525c6c',
      kolorSlupkaCien: '#323a46',
      kolorGleby: '#121010',
    },
    wiadukt: {
      kolorGora: '#8d98a8',
      kolorCialo: '#565f6c',
      kolorCien: '#2f353f',
      kolorSzwu: '#454d58',
      kolorFilaru: '#474f5a',
      kolorFilaruJasny: '#5e6774',
      kolorFilaruCien: '#323842',
      kolorPodstawy: '#22262c',
      kolorBarierki: '#6a7480',
      kolorBarierkiJasny: '#96a2b0',
    },
    latarnie: {
      co: 9,
      przesuniecie: 5,
      wolneKolumny: 2,
      wysokosc: 66,
      wysiegnik: 7,
      kolorSlupa: '#222833',
      kolorSlupaJasny: '#363e4c',
      kolorKlosza: '#fff0c2',
      kolorSwiatla: '#ffc864',
      poswiataAlfa: 0.3,
      stozekAlfa: 0.08,
      stozekSzerokosc: 24,
      plamaAlfa: 0.4,
      odbicieAlfa: 0.6,
      odbicieSzerokie: 9,
      odbicieFale: 7,
      odbicieFalowanie: 3,
      ziarnoMigotania: 5,
      migoczeCo: 6,
      migotanieSzybkosc: 14,
      migotanieMin: 0.25,
    },
    deszcz: {
      krople: 70,
      predkosc: 300,
      rozrzutPredkosci: 0.3,
      wiatr: -75,
      dlugosc: 5,
      margines: 20,
      paralaksa: 0.6,
      kolor: '#9fb3d8',
      alfa: 0.5,
      pluski: 7,
      pluskiNaSekunde: 9,
      kolorPlusku: '#b9c9e8',
      alfaPlusku: 0.55,
      kaluzaKomorka: 16,
      kaluzaCo: 3,
      kaluzaMin: 3,
      kaluzaRozrzut: 7,
    },
  },
};

const POZIOM_4 = {
  nazwa: 'POZIOM 4',
  odcinki: [
    { start: 0, length: 24, top: 10 },
    { start: 26, length: 11, top: 10 },
    { start: 37, length: 5, top: 9 },
    { start: 44, length: 5, top: 8 },
    { start: 51, length: 5, top: 10 },
    { start: 58, length: 4, top: 9 },
    { start: 64, length: 34, top: 10 },
    { start: 100, length: 11, top: 10 },
    { start: 113, length: 4, top: 9 },
    { start: 117, length: 6, top: 10 },
    { start: 125, length: 4, top: 10 },
    { start: 131, length: 19, top: 10 },
    { start: 152, length: 39, top: 10 },
    { start: 193, length: 11, top: 10 },
    { start: 206, length: 11, top: 9 },
    { start: 219, length: 4, top: 10 },
    { start: 225, length: 19, top: 10 },
    { start: 246, length: 34, top: 9 },
    { start: 282, length: 16, top: 10 },
    { start: 300, length: 18, top: 10 },
    { start: 320, length: 4, top: 9 },
    { start: 324, length: 6, top: 10 },
    { start: 332, length: 21, top: 10 },
    { start: 355, length: 21, top: 10 },
    { start: 378, length: 11, top: 9 },
    { start: 391, length: 19, top: 10 },
  ],
  platformy: [
    { kolumna: 115, wysokosc: 4, dlugosc: 41 },
    { kolumna: 283, wysokosc: 3, dlugosc: 4 },
    { kolumna: 322, wysokosc: 4, dlugosc: 40 },
  ],
  przeszkody: [
    { typ: 'opona', kolumna: 243 },
    { typ: 'beczka', kolumna: 316 },
    { typ: 'karton', kolumna: 408 },
    { typ: 'karton', kolumna: 12, jezdnia: true },
    { typ: 'opona', kolumna: 33, jezdnia: true },
    { typ: 'beczka', kolumna: 61, jezdnia: true },
    { typ: 'karton', kolumna: 90, jezdnia: true },
    { typ: 'opona', kolumna: 119, jezdnia: true },
    { typ: 'beczka', kolumna: 143, jezdnia: true },
    { typ: 'karton', kolumna: 166, jezdnia: true },
    { typ: 'opona', kolumna: 186, jezdnia: true },
    { typ: 'karton', kolumna: 209, jezdnia: true },
    { typ: 'beczka', kolumna: 236, jezdnia: true },
    { typ: 'opona', kolumna: 262, jezdnia: true },
    { typ: 'karton', kolumna: 289, jezdnia: true },
    { typ: 'beczka', kolumna: 326, jezdnia: true },
    { typ: 'opona', kolumna: 347, jezdnia: true },
    { typ: 'karton', kolumna: 372, jezdnia: true },
    { typ: 'beczka', kolumna: 398, jezdnia: true },
  ],
  wrogowie: [
    { kolumna: 31, zasieg: 1 },
    { kolumna: 105, zasieg: 2 },
    { kolumna: 198, zasieg: 1 },
    { kolumna: 211, zasieg: 1 },
    { kolumna: 293, zasieg: 1 },
    { kolumna: 370, zasieg: 1 },
    { kolumna: 383, zasieg: 1 },
  ],
  grzybiarki: [
    { kolumna: 80, zasiegRzutu: 150 },
    { kolumna: 139, zasiegRzutu: 170, wysokosc: 4 },
    { kolumna: 171, zasiegRzutu: 180 },
    { kolumna: 262, zasiegRzutu: 160 },
    { kolumna: 341, zasiegRzutu: 190, wysokosc: 4 },
  ],
  powerupy: [
    { typ: 'czerwony', kolumna: 116, wysokosc: 4 },
    { typ: 'niebieski', kolumna: 285, wysokosc: 3 },
    { typ: 'zolty', kolumna: 323, wysokosc: 4 },
  ],
  meta: { kolumna: 395 },
  punktyKontrolne: [{ kolumna: 227 }],
  motyw: {
    niebo: ['#5f7189', '#7889a1', '#95a3b7', '#b3bdca', '#ced2d7', '#e4d7cb'],
    las: ['#a5afbc', '#8795a6', '#6a798c'],
    jezdnia: {
      kolorPobocza: '#3f403e',
      kolorZwiru: '#53524d',
      kolorAsfaltu: '#33363b',
      kolorAsfaltuJasny: '#3e4248',
      kolorAsfaltuCiemny: '#2a2c30',
      kolorZoltejLinii: '#b3a35e',
      kolorBialejLinii: '#d3d8de',
    },
    barierka: {
      kolorSzynyGora: '#b9c2cd',
      kolorSzynyJasny: '#6a7584',
      kolorSzynyRowek: '#3c4552',
      kolorSzynySrodek: '#525c6a',
      kolorSzynyCien: '#2c333d',
      kolorSruby: '#232931',
      kolorSlupka: '#46505d',
      kolorSlupkaCien: '#2f3640',
      kolorGleby: '#262624',
    },
    wiadukt: {
      kolorGora: '#a2acb9',
      kolorCialo: '#56606d',
      kolorCien: '#363d47',
      kolorSzwu: '#46505b',
      kolorFilaru: '#4b5461',
      kolorFilaruJasny: '#636d7a',
      kolorFilaruCien: '#343a44',
      kolorPodstawy: '#272b31',
      kolorBarierki: '#5a6471',
      kolorBarierkiJasny: '#87929f',
    },
    lasWarstwy: [{ wysokoscMin: 30, wysokoscMax: 48 }, { wysokoscMin: 38, wysokoscMax: 60 }, { wysokoscMin: 50, wysokoscMax: 78 }],
    slonce: { x: 232, y: 60, promien: 10, kolor: '#fff1dc', kolorPoswiaty: '#ffe3c2', poswiata: [{ promien: 34, alfa: 0.12 }, { promien: 20, alfa: 0.22 }] },
    mgla: { kolor: '#d9dfe6', warstwy: [0.5, 0.4, 0.28], pasma: { liczba: 8, alfa: 0.24, wysokosc: 6, y: 112, rozrzutY: 34, dlugosc: 120, predkosc: 4, paralaksa: 0.6 } },
  },
};

const POZIOM_5 = {
  nazwa: 'POZIOM 5',
  odcinki: [
    { start: 0, length: 25, top: 10 },
    { start: 27, length: 6, top: 10 },
    { start: 33, length: 5, top: 8 },
    { start: 38, length: 16, top: 10 },
    { start: 57, length: 12, top: 10 },
    { start: 69, length: 4, top: 8 },
    { start: 73, length: 12, top: 10 },
    { start: 88, length: 27, top: 10 },
    { start: 118, length: 11, top: 10 },
    { start: 132, length: 11, top: 10 },
    { start: 146, length: 11, top: 10 },
    { start: 160, length: 6, top: 10 },
    { start: 169, length: 36, top: 10 },
    { start: 208, length: 11, top: 10 },
    { start: 222, length: 11, top: 10 },
    { start: 236, length: 7, top: 10 },
    { start: 243, length: 6, top: 8 },
    { start: 249, length: 13, top: 10 },
    { start: 265, length: 13, top: 10 },
    { start: 281, length: 15, top: 10 },
    { start: 296, length: 5, top: 8 },
    { start: 301, length: 31, top: 10 },
    { start: 335, length: 5, top: 10 },
    { start: 340, length: 4, top: 8 },
    { start: 344, length: 12, top: 10 },
    { start: 359, length: 11, top: 10 },
    { start: 373, length: 11, top: 10 },
    { start: 387, length: 16, top: 10 },
  ],
  platformy: [
    { kolumna: 35, wysokosc: 4, dlugosc: 58 },
    { kolumna: 96, wysokosc: 4, dlugosc: 46 },
    { kolumna: 145, wysokosc: 4, dlugosc: 21 },
    { kolumna: 169, wysokosc: 4, dlugosc: 50 },
    { kolumna: 222, wysokosc: 4, dlugosc: 21 },
    { kolumna: 247, wysokosc: 4, dlugosc: 49 },
    { kolumna: 298, wysokosc: 4, dlugosc: 25 },
    { kolumna: 342, wysokosc: 4, dlugosc: 45 },
  ],
  przeszkody: [
    { typ: 'karton', kolumna: 83 },
    { typ: 'karton', kolumna: 402 },
    { typ: 'karton', kolumna: 12, jezdnia: true },
    { typ: 'opona', kolumna: 35, jezdnia: true },
    { typ: 'beczka', kolumna: 60, jezdnia: true },
    { typ: 'karton', kolumna: 88, jezdnia: true },
    { typ: 'opona', kolumna: 115, jezdnia: true },
    { typ: 'beczka', kolumna: 141, jezdnia: true },
    { typ: 'karton', kolumna: 170, jezdnia: true },
    { typ: 'opona', kolumna: 196, jezdnia: true },
    { typ: 'beczka', kolumna: 224, jezdnia: true },
    { typ: 'karton', kolumna: 249, jezdnia: true },
    { typ: 'opona', kolumna: 276, jezdnia: true },
    { typ: 'beczka', kolumna: 304, jezdnia: true },
    { typ: 'karton', kolumna: 329, jezdnia: true },
    { typ: 'opona', kolumna: 352, jezdnia: true },
    { typ: 'beczka', kolumna: 378, jezdnia: true },
    { typ: 'karton', kolumna: 398, jezdnia: true },
  ],
  wrogowie: [
    { kolumna: 44, zasieg: 1 },
    { kolumna: 49, zasieg: 1 },
    { kolumna: 63, zasieg: 1 },
    { kolumna: 79, zasieg: 1 },
    { kolumna: 123, zasieg: 1 },
    { kolumna: 137, zasieg: 1 },
    { kolumna: 151, zasieg: 1 },
    { kolumna: 174, zasieg: 1 },
    { kolumna: 213, zasieg: 1 },
    { kolumna: 227, zasieg: 1 },
    { kolumna: 255, zasieg: 1 },
    { kolumna: 271, zasieg: 1 },
    { kolumna: 286, zasieg: 1 },
    { kolumna: 350, zasieg: 1 },
    { kolumna: 364, zasieg: 1 },
    { kolumna: 378, zasieg: 1 },
    { kolumna: 392, zasieg: 1 },
  ],
  grzybiarki: [
    { kolumna: 101, zasiegRzutu: 110 },
    { kolumna: 193, zasiegRzutu: 100, wysokosc: 4 },
    { kolumna: 311, zasiegRzutu: 100, wysokosc: 4 },
  ],
  powerupy: [
    { typ: 'niebieski', kolumna: 40 },
    { typ: 'zolty', kolumna: 181 },
    { typ: 'czerwony', kolumna: 247 },
  ],
  meta: { kolumna: 398 },
  punktyKontrolne: [{ kolumna: 183 }],
  motyw: {
    niebo: ['#56637a', '#68748a', '#7d8799', '#959ba8', '#b0aeb0', '#cdbfae'],
    las: ['#8a93a3', '#6f7889', '#555e6f'],
    jezdnia: {
      kolorPobocza: '#4a4640',
      kolorZwiru: '#5e5850',
      kolorAsfaltu: '#3a3d43',
      kolorAsfaltuJasny: '#464a51',
      kolorAsfaltuCiemny: '#2f3237',
      kolorZoltejLinii: '#c9a94a',
      kolorBialejLinii: '#dcdcd6',
    },
    barierka: {
      kolorGleby: '#3a3631',
    },
    wiadukt: {
      kolorGora: '#d6cfc0',
      kolorCialo: '#a8a090',
      kolorCien: '#6e695f',
      kolorSzwu: '#8d8677',
      kolorFilaru: '#9a9384',
      kolorFilaruJasny: '#b9b2a2',
      kolorFilaruCien: '#757062',
      kolorPodstawy: '#585449',
      kolorBarierki: '#b0ab9f',
      kolorBarierkiJasny: '#dcd8cc',
    },
    slonce: { x: 236, y: 44, promien: 11, kolor: '#f7ead0', kolorPoswiaty: '#f4dcb4', poswiata: [{ promien: 34, alfa: 0.12 }, { promien: 20, alfa: 0.22 }] },
    mgla: { kolor: '#c9c3ba', warstwy: [0.45, 0.3, 0.15], pasma: { liczba: 5, alfa: 0.14, wysokosc: 6, y: 100, rozrzutY: 30, dlugosc: 120, predkosc: 4, paralaksa: 0.6 } },
    miasto: {
      warstwy: [
        { odstep: 16, szerokoscMin: 12, szerokoscMax: 22, wysokoscMin: 40, wysokoscMax: 74, oknaAlfa: 0.18 },
        { odstep: 22, szerokoscMin: 16, szerokoscMax: 28, wysokoscMin: 44, wysokoscMax: 84, oknaAlfa: 0.25 },
        { odstep: 28, szerokoscMin: 20, szerokoscMax: 34, wysokoscMin: 50, wysokoscMax: 92, oknaAlfa: 0.3 },
      ],
      uskok: 0.18, antena: 8,
      okna: ['#d9dee6', '#b9c4d2', '#e8dcc6'], oknaCo: 3, oknaOdstepX: 3, oknaOdstepY: 4, oknoSzerokosc: 1, oknoWysokosc: 2,
      warstwaNeonow: 2, neony: ['#e8dcc6'], neonyCo: 1000, neonSzerokosc: 10, neonWysokosc: 7, neonOdGory: 6,
      neonAlfa: 0, poswiataAlfa: 0, migoczeCo: 3, migotanieSzybkosc: 10, migotanieMin: 0.15,
    },
  },
};

const POZIOM_6 = {
  nazwa: 'POZIOM 6',
  odcinki: [
    { start: 0, length: 24, top: 10 },
    { start: 27, length: 8, top: 10 },
    { start: 35, length: 2, top: 9 },
    { start: 37, length: 10, top: 8 },
    { start: 49, length: 4, top: 10 },
    { start: 55, length: 4, top: 10 },
    { start: 61, length: 11, top: 10 },
    { start: 74, length: 11, top: 8 },
    { start: 85, length: 16, top: 10 },
    { start: 104, length: 23, top: 10 },
    { start: 129, length: 8, top: 10 },
    { start: 137, length: 2, top: 9 },
    { start: 139, length: 9, top: 8 },
    { start: 148, length: 19, top: 10 },
    { start: 169, length: 5, top: 10 },
    { start: 176, length: 5, top: 10 },
    { start: 183, length: 5, top: 10 },
    { start: 190, length: 14, top: 10 },
    { start: 206, length: 11, top: 8 },
    { start: 217, length: 16, top: 10 },
    { start: 235, length: 5, top: 8 },
    { start: 240, length: 6, top: 10 },
    { start: 248, length: 7, top: 10 },
    { start: 257, length: 7, top: 10 },
    { start: 266, length: 11, top: 10 },
    { start: 279, length: 11, top: 10 },
    { start: 292, length: 8, top: 10 },
    { start: 300, length: 2, top: 9 },
    { start: 302, length: 14, top: 8 },
    { start: 316, length: 16, top: 10 },
    { start: 334, length: 21, top: 10 },
    { start: 357, length: 4, top: 8 },
    { start: 361, length: 22, top: 10 },
    { start: 385, length: 12, top: 10 },
    { start: 399, length: 11, top: 10 },
    { start: 412, length: 6, top: 10 },
    { start: 418, length: 2, top: 9 },
    { start: 420, length: 7, top: 8 },
    { start: 427, length: 19, top: 10 },
  ],
  platformy: [
    { kolumna: 148, wysokosc: 2, dlugosc: 4 },
    { kolumna: 237, wysokosc: 4, dlugosc: 29 },
    { kolumna: 359, wysokosc: 4, dlugosc: 22 },
  ],
  przeszkody: [
    { typ: 'karton', kolumna: 41 },
    { typ: 'opona', kolumna: 97 },
    { typ: 'beczka', kolumna: 143 },
    { typ: 'karton', kolumna: 200 },
    { typ: 'opona', kolumna: 229 },
    { typ: 'beczka', kolumna: 306 },
    { typ: 'opona', kolumna: 328 },
    { typ: 'karton', kolumna: 395 },
    { typ: 'karton', kolumna: 423 },
    { typ: 'opona', kolumna: 439 },
    { typ: 'karton', kolumna: 11, jezdnia: true },
    { typ: 'opona', kolumna: 37, jezdnia: true },
    { typ: 'beczka', kolumna: 63, jezdnia: true },
    { typ: 'karton', kolumna: 89, jezdnia: true },
    { typ: 'opona', kolumna: 115, jezdnia: true },
    { typ: 'beczka', kolumna: 141, jezdnia: true },
    { typ: 'karton', kolumna: 167, jezdnia: true },
    { typ: 'opona', kolumna: 193, jezdnia: true },
    { typ: 'beczka', kolumna: 219, jezdnia: true },
    { typ: 'karton', kolumna: 245, jezdnia: true },
    { typ: 'opona', kolumna: 271, jezdnia: true },
    { typ: 'beczka', kolumna: 297, jezdnia: true },
    { typ: 'karton', kolumna: 323, jezdnia: true },
    { typ: 'opona', kolumna: 349, jezdnia: true },
    { typ: 'beczka', kolumna: 375, jezdnia: true },
    { typ: 'karton', kolumna: 401, jezdnia: true },
    { typ: 'opona', kolumna: 427, jezdnia: true },
  ],
  wrogowie: [
    { kolumna: 66, zasieg: 1 },
    { kolumna: 79, zasieg: 1 },
    { kolumna: 160, zasieg: 1 },
    { kolumna: 211, zasieg: 1 },
    { kolumna: 271, zasieg: 1 },
    { kolumna: 284, zasieg: 1 },
    { kolumna: 311, zasieg: 1 },
    { kolumna: 368, zasieg: 1 },
    { kolumna: 377, zasieg: 1 },
    { kolumna: 404, zasieg: 1 },
  ],
  grzybiarki: [
    { kolumna: 116, zasiegRzutu: 100 },
    { kolumna: 252, zasiegRzutu: 100, wysokosc: 4 },
    { kolumna: 344, zasiegRzutu: 100 },
  ],
  powerupy: [
    { typ: 'czerwony', kolumna: 150, wysokosc: 2 },
    { typ: 'niebieski', kolumna: 238, wysokosc: 4 },
    { typ: 'zolty', kolumna: 360, wysokosc: 4 },
  ],
  meta: { kolumna: 440 },
  punktyKontrolne: [{ kolumna: 190 }],
  motyw: {
    niebo: ['#5d82b3', '#7398c6', '#8aaed6', '#a2c0e2', '#bad2ec', '#d0e1f3'],
    las: ['#7d93ab', '#5c7590', '#3e5670'],
    jezdnia: { kolorPobocza: '#e6edf4', kolorZwiru: '#c3cfdb', kolorAsfaltu: '#3a3f47', kolorAsfaltuJasny: '#474d56', kolorAsfaltuCiemny: '#30343b', kolorZoltejLinii: '#c9b65a', kolorBialejLinii: '#eef2f6' },
    barierka: { kolorSzynyGora: '#ffffff', kolorGleby: '#dfe7ef' },
    snieg: { platki: 90, predkosc: 24, rozrzutPredkosci: 0.5, wiatr: -10, kolysanie: 1.3, amplituda: 3, kolor: '#ffffff', alfa: 0.9, paralaksa: 0.6, margines: 20, duzeCo: 4, czapy: ['#b9cbe0', '#d3e0ee', '#eef4fa'] },
  },
};

const POZIOM_3 = {
  nazwa: 'POZIOM 3',
  odcinki: [
    { start: 0, length: 20, top: 10 },
    { start: 22, length: 6, top: 10 },
    { start: 28, length: 5, top: 9 },
    { start: 33, length: 10, top: 8 },
    { start: 46, length: 7, top: 9 },
    { start: 53, length: 10, top: 10 },
    { start: 65, length: 6, top: 10 },
    { start: 71, length: 5, top: 9 },
    { start: 76, length: 10, top: 8 },
    { start: 89, length: 62, top: 10 },
    { start: 154, length: 7, top: 10 },
    { start: 161, length: 6, top: 9 },
    { start: 167, length: 25, top: 8 },
    { start: 195, length: 21, top: 10 },
    { start: 219, length: 11, top: 10 },
    { start: 230, length: 5, top: 9 },
    { start: 235, length: 5, top: 10 },
    { start: 243, length: 5, top: 10 },
    { start: 248, length: 5, top: 9 },
    { start: 255, length: 6, top: 9 },
    { start: 264, length: 21, top: 10 },
    { start: 288, length: 8, top: 10 },
    { start: 296, length: 5, top: 9 },
    { start: 301, length: 24, top: 8 },
    { start: 328, length: 6, top: 9 },
    { start: 334, length: 6, top: 10 },
    { start: 342, length: 5, top: 10 },
    { start: 347, length: 6, top: 9 },
    { start: 353, length: 8, top: 8 },
    { start: 364, length: 6, top: 10 },
    { start: 372, length: 15, top: 10 },
  ],
  platformy: [
    { kolumna: 99, wysokosc: 2, dlugosc: 16 },
    { kolumna: 118, wysokosc: 2, dlugosc: 14 },
    { kolumna: 135, wysokosc: 2, dlugosc: 12 },
    { kolumna: 200, wysokosc: 2, dlugosc: 3 },
    { kolumna: 212, wysokosc: 5, dlugosc: 41 },
    { kolumna: 275, wysokosc: 2, dlugosc: 4 },
  ],
  przeszkody: [
    { typ: 'karton', kolumna: 42 },
    { typ: 'karton', kolumna: 85 },
    { typ: 'karton', kolumna: 160 },
    { typ: 'beczka', kolumna: 260 },
    { typ: 'karton', kolumna: 295 },
    { typ: 'beczka', kolumna: 358 },
    { typ: 'opona', kolumna: 11, jezdnia: true },
    { typ: 'karton', kolumna: 34, jezdnia: true },
    { typ: 'beczka', kolumna: 57, jezdnia: true },
    { typ: 'opona', kolumna: 80, jezdnia: true },
    { typ: 'karton', kolumna: 103, jezdnia: true },
    { typ: 'beczka', kolumna: 126, jezdnia: true },
    { typ: 'opona', kolumna: 149, jezdnia: true },
    { typ: 'karton', kolumna: 172, jezdnia: true },
    { typ: 'beczka', kolumna: 195, jezdnia: true },
    { typ: 'opona', kolumna: 218, jezdnia: true },
    { typ: 'karton', kolumna: 241, jezdnia: true },
    { typ: 'beczka', kolumna: 264, jezdnia: true },
    { typ: 'opona', kolumna: 287, jezdnia: true },
    { typ: 'karton', kolumna: 310, jezdnia: true },
    { typ: 'beczka', kolumna: 333, jezdnia: true },
    { typ: 'opona', kolumna: 356, jezdnia: true },
    { typ: 'karton', kolumna: 379, jezdnia: true },
  ],
  wrogowie: [
    { kolumna: 57, zasieg: 1 },
    { kolumna: 94, zasieg: 1 },
    { kolumna: 103, zasieg: 2 },
    { kolumna: 109, zasieg: 1 },
    { kolumna: 122, zasieg: 2 },
    { kolumna: 127, zasieg: 1 },
    { kolumna: 139, zasieg: 2 },
    { kolumna: 144, zasieg: 1 },
    { kolumna: 224, zasieg: 1 },
    { kolumna: 270, zasieg: 2 },
    { kolumna: 379, zasieg: 2 },
  ],
  grzybiarki: [
    { kolumna: 180, zasiegRzutu: 100 },
    { kolumna: 313, zasiegRzutu: 100 },
  ],
  powerupy: [
    { typ: 'niebieski', kolumna: 99 },
    { typ: 'zolty', kolumna: 201, wysokosc: 2 },
    { typ: 'czerwony', kolumna: 276, wysokosc: 2 },
  ],
  meta: { kolumna: 383 },
  punktyKontrolne: [{ kolumna: 207 }],
  motyw: {
    niebo: ['#2a2d33', '#30343b', '#353940', '#3a3e45', '#3e434a', '#43474e'],
    las: ['#000000', '#000000', '#000000'],
    jezdnia: {
      kolorPobocza: '#24221f',
      kolorZwiru: '#35312c',
      kolorAsfaltu: '#17181b',
      kolorAsfaltuJasny: '#222428',
      kolorAsfaltuCiemny: '#101113',
      kolorZoltejLinii: '#a08a2e',
      kolorBialejLinii: '#a8adb4',
    },
    barierka: {
      kolorSzynyGora: '#e4e9ee',
      kolorSzynyJasny: '#aab3bd',
      kolorSzynyRowek: '#6c7681',
      kolorSzynySrodek: '#8a949f',
      kolorSzynyCien: '#4e5761',
      kolorSruby: '#3c434c',
      kolorSlupka: '#7a838e',
      kolorSlupkaCien: '#4a525c',
      kolorGleby: '#1a1816',
    },
    wiadukt: {
      kolorGora: '#b7bcc2',
      kolorCialo: '#7d838a',
      kolorCien: '#4c5157',
      kolorSzwu: '#666c73',
      kolorFilaru: '#5f656c',
      kolorFilaruJasny: '#787e86',
      kolorFilaruCien: '#454a50',
      kolorPodstawy: '#2c2f33',
      kolorBarierki: '#d0a72a',
      kolorBarierkiJasny: '#f0d060',
    },
    tunel: {
      strop: 24, paralaksa: 0.7, kolorStropu: '#1b1d21', kolorStropuJasny: '#3a3e45', kolorKrawedzi: '#0d0e10',
      zebraCo: 48, zebraSzerokosc: 8, zebraWystaje: 4, kolorZebra: '#15171a',
      spoinaCo: 22, panelCo: 40, kolorSpoiny: '#262a30', kolorDolu: '#2c3036',
      pas: { y: 134, wysokosc: 4, dlugosc: 8, kolor: '#c9a227', kolorPrzerwy: '#16181b' },
      lampy: { co: 80, szerokosc: 12, kolor: '#fff4cf', kolorObudowy: '#4a4f57', kolorSwiatla: '#ffd98a', poswiataAlfa: 0.35, stozekAlfa: 0.09, stozekDlugosc: 100, stozekSzerokosc: 56, migoczeCo: 7, migotanieSzybkosc: 12, migotanieMin: 0.3, ziarno: 3 },
    },
  },
};

const POZIOM_7 = {
  nazwa: 'POZIOM 7',
  odcinki: [
    { start: 0, length: 22, top: 10 },
    { start: 24, length: 14, top: 10 },
    { start: 41, length: 14, top: 10 },
    { start: 57, length: 4, top: 10 },
    { start: 63, length: 4, top: 10 },
    { start: 70, length: 33, top: 10 },
    { start: 105, length: 25, top: 10 },
    { start: 132, length: 4, top: 10 },
    { start: 136, length: 2, top: 9 },
    { start: 138, length: 16, top: 8 },
    { start: 156, length: 5, top: 10 },
    { start: 163, length: 5, top: 10 },
    { start: 170, length: 13, top: 10 },
    { start: 186, length: 14, top: 10 },
    { start: 203, length: 25, top: 10 },
    { start: 231, length: 14, top: 10 },
    { start: 248, length: 33, top: 10 },
    { start: 283, length: 4, top: 10 },
    { start: 289, length: 4, top: 10 },
    { start: 295, length: 13, top: 10 },
    { start: 310, length: 4, top: 10 },
    { start: 314, length: 2, top: 9 },
    { start: 316, length: 18, top: 8 },
    { start: 336, length: 4, top: 10 },
    { start: 342, length: 4, top: 10 },
    { start: 348, length: 13, top: 10 },
    { start: 364, length: 14, top: 10 },
    { start: 380, length: 4, top: 10 },
    { start: 386, length: 4, top: 10 },
    { start: 393, length: 14, top: 10 },
    { start: 410, length: 35, top: 10 },
    { start: 447, length: 12, top: 10 },
    { start: 462, length: 14, top: 10 },
    { start: 479, length: 8, top: 10 },
  ],
  platformy: [
    { kolumna: 71, wysokosc: 2, dlugosc: 6 },
    { kolumna: 142, wysokosc: 4, dlugosc: 4 },
    { kolumna: 249, wysokosc: 3, dlugosc: 6 },
    { kolumna: 316, wysokosc: 4, dlugosc: 6 },
    { kolumna: 411, wysokosc: 2, dlugosc: 6 },
  ],
  przeszkody: [
    { typ: 'karton', kolumna: 51 },
    { typ: 'beczka', kolumna: 196 },
    { typ: 'opona', kolumna: 374 },
    { typ: 'karton', kolumna: 403 },
    { typ: 'karton', kolumna: 472 },
    { typ: 'karton', kolumna: 11, jezdnia: true },
    { typ: 'opona', kolumna: 37, jezdnia: true },
    { typ: 'beczka', kolumna: 63, jezdnia: true },
    { typ: 'karton', kolumna: 89, jezdnia: true },
    { typ: 'opona', kolumna: 115, jezdnia: true },
    { typ: 'beczka', kolumna: 141, jezdnia: true },
    { typ: 'karton', kolumna: 167, jezdnia: true },
    { typ: 'opona', kolumna: 193, jezdnia: true },
    { typ: 'beczka', kolumna: 219, jezdnia: true },
    { typ: 'karton', kolumna: 245, jezdnia: true },
    { typ: 'opona', kolumna: 271, jezdnia: true },
    { typ: 'beczka', kolumna: 297, jezdnia: true },
    { typ: 'karton', kolumna: 323, jezdnia: true },
    { typ: 'opona', kolumna: 349, jezdnia: true },
    { typ: 'beczka', kolumna: 375, jezdnia: true },
    { typ: 'karton', kolumna: 401, jezdnia: true },
    { typ: 'opona', kolumna: 427, jezdnia: true },
    { typ: 'beczka', kolumna: 453, jezdnia: true },
    { typ: 'karton', kolumna: 479, jezdnia: true },
  ],
  wrogowie: [
    { kolumna: 32, zasieg: 2 },
    { kolumna: 82, zasieg: 1 },
    { kolumna: 89, zasieg: 1 },
    { kolumna: 96, zasieg: 1 },
    { kolumna: 177, zasieg: 1 },
    { kolumna: 260, zasieg: 1 },
    { kolumna: 267, zasieg: 1 },
    { kolumna: 274, zasieg: 1 },
    { kolumna: 302, zasieg: 1 },
    { kolumna: 328, zasieg: 1 },
    { kolumna: 355, zasieg: 1 },
    { kolumna: 422, zasieg: 1 },
    { kolumna: 430, zasieg: 1 },
    { kolumna: 438, zasieg: 1 },
    { kolumna: 453, zasieg: 1 },
  ],
  grzybiarki: [
    { kolumna: 115, zasiegRzutu: 100 },
    { kolumna: 213, zasiegRzutu: 100 },
  ],
  powerupy: [
    { typ: 'niebieski', kolumna: 73, wysokosc: 2 },
    { typ: 'czerwony', kolumna: 144, wysokosc: 4 },
    { typ: 'niebieski', kolumna: 251, wysokosc: 3 },
    { typ: 'zolty', kolumna: 319, wysokosc: 4 },
    { typ: 'niebieski', kolumna: 413, wysokosc: 2 },
  ],
  meta: { kolumna: 483 },
  punktyKontrolne: [{ kolumna: 235 }],
  motyw: {
    niebo: ['#4a2a63', '#8a3a74', '#cc4f78', '#ee6e66', '#f9945a', '#fdbb68'],
    las: ['#8a4560', '#5e2f4e', '#34193a'],
    jezdnia: { kolorPobocza: '#3a2622', kolorZwiru: '#53362c', kolorAsfaltu: '#2e2128', kolorAsfaltuJasny: '#3a2a31', kolorAsfaltuCiemny: '#241a1f', kolorZoltejLinii: '#e0aa44', kolorBialejLinii: '#f3dcc8' },
    barierka: {
      kolorSzynyGora: '#ffe9d2',
      kolorSzynyJasny: '#e0b39a',
      kolorSzynyRowek: '#9a6670',
      kolorSzynySrodek: '#bf8a8c',
      kolorSzynyCien: '#6a3d52',
      kolorSruby: '#4e2c3c',
      kolorSlupka: '#a87880',
      kolorSlupkaCien: '#6e4655',
      kolorGleby: '#2a1a22',
    },
    wiadukt: {
      kolorGora: '#f0cdb4',
      kolorCialo: '#b88a8c',
      kolorCien: '#74465a',
      kolorSzwu: '#8e5c6c',
      kolorFilaru: '#8a5868',
      kolorFilaruJasny: '#b27f86',
      kolorFilaruCien: '#65404f',
      kolorPodstawy: '#3c2430',
      kolorBarierki: '#b8868a',
      kolorBarierkiJasny: '#f0c4b0',
    },
    lasWarstwy: [{ wysokoscMin: 18, wysokoscMax: 34 }, { wysokoscMin: 26, wysokoscMax: 46 }, { wysokoscMin: 40, wysokoscMax: 70 }],
    slonce: { x: 214, y: 92, promien: 24, kolor: '#ffd36b', kolorPoswiaty: '#ffa65a', poswiata: [{ promien: 52, alfa: 0.1 }, { promien: 38, alfa: 0.16 }, { promien: 29, alfa: 0.22 }], pasy: { kolor: '#e8784a', od: 6, co: 3, grubosc: 1 } },
    cienie: { kolor: '#1d0a26', alfa: 0.42, przesuniecie: 1.9, glebokosc: 0.5, grubosc: 3, slupekDlugosc: 28, slupekNachylenie: 1.6 },
  },
};

const POZIOM_8 = {
  nazwa: 'POZIOM 8',
  odcinki: [
    { start: 0, length: 22, top: 10 },
    { start: 24, length: 13, top: 10 },
    { start: 39, length: 4, top: 10 },
    { start: 45, length: 4, top: 10 },
    { start: 51, length: 4, top: 10 },
    { start: 58, length: 14, top: 10 },
    { start: 74, length: 23, top: 10 },
    { start: 99, length: 4, top: 10 },
    { start: 105, length: 4, top: 10 },
    { start: 109, length: 4, top: 10 },
    { start: 113, length: 2, top: 9 },
    { start: 115, length: 6, top: 8 },
    { start: 121, length: 8, top: 10 },
    { start: 131, length: 6, top: 10 },
    { start: 139, length: 6, top: 10 },
    { start: 147, length: 6, top: 10 },
    { start: 155, length: 6, top: 10 },
    { start: 163, length: 8, top: 10 },
    { start: 174, length: 18, top: 10 },
    { start: 194, length: 13, top: 10 },
    { start: 209, length: 4, top: 10 },
    { start: 215, length: 4, top: 10 },
    { start: 221, length: 4, top: 10 },
    { start: 228, length: 18, top: 10 },
    { start: 248, length: 28, top: 10 },
    { start: 278, length: 4, top: 10 },
    { start: 284, length: 4, top: 10 },
    { start: 290, length: 4, top: 10 },
    { start: 296, length: 25, top: 10 },
    { start: 323, length: 16, top: 10 },
    { start: 341, length: 4, top: 10 },
    { start: 347, length: 4, top: 10 },
    { start: 353, length: 4, top: 10 },
    { start: 359, length: 4, top: 10 },
    { start: 366, length: 14, top: 10 },
    { start: 382, length: 4, top: 10 },
    { start: 386, length: 2, top: 9 },
    { start: 388, length: 20, top: 8 },
    { start: 410, length: 4, top: 10 },
    { start: 416, length: 4, top: 10 },
    { start: 422, length: 4, top: 10 },
    { start: 428, length: 23, top: 10 },
    { start: 453, length: 13, top: 10 },
    { start: 469, length: 18, top: 10 },
    { start: 490, length: 10, top: 10 },
  ],
  platformy: [
    { kolumna: 117, wysokosc: 4, dlugosc: 30 },
    { kolumna: 233, wysokosc: 2, dlugosc: 6 },
    { kolumna: 390, wysokosc: 4, dlugosc: 8 },
  ],
  przeszkody: [
    { typ: 'karton', kolumna: 68 },
    { typ: 'beczka', kolumna: 183 },
    { typ: 'karton', kolumna: 264 },
    { typ: 'karton', kolumna: 376 },
    { typ: 'beczka', kolumna: 478 },
    { typ: 'karton', kolumna: 11, jezdnia: true },
    { typ: 'opona', kolumna: 37, jezdnia: true },
    { typ: 'beczka', kolumna: 63, jezdnia: true },
    { typ: 'karton', kolumna: 89, jezdnia: true },
    { typ: 'opona', kolumna: 115, jezdnia: true },
    { typ: 'beczka', kolumna: 141, jezdnia: true },
    { typ: 'karton', kolumna: 167, jezdnia: true },
    { typ: 'opona', kolumna: 193, jezdnia: true },
    { typ: 'beczka', kolumna: 219, jezdnia: true },
    { typ: 'karton', kolumna: 245, jezdnia: true },
    { typ: 'opona', kolumna: 271, jezdnia: true },
    { typ: 'beczka', kolumna: 297, jezdnia: true },
    { typ: 'karton', kolumna: 323, jezdnia: true },
    { typ: 'opona', kolumna: 349, jezdnia: true },
    { typ: 'beczka', kolumna: 375, jezdnia: true },
    { typ: 'karton', kolumna: 401, jezdnia: true },
    { typ: 'opona', kolumna: 427, jezdnia: true },
    { typ: 'beczka', kolumna: 453, jezdnia: true },
    { typ: 'karton', kolumna: 479, jezdnia: true },
  ],
  wrogowie: [
    { kolumna: 31, zasieg: 1 },
    { kolumna: 81, zasieg: 1 },
    { kolumna: 90, zasieg: 1 },
    { kolumna: 201, zasieg: 1 },
    { kolumna: 270, zasieg: 1 },
    { kolumna: 328, zasieg: 1 },
    { kolumna: 403, zasieg: 1 },
    { kolumna: 435, zasieg: 1 },
    { kolumna: 444, zasieg: 1 },
    { kolumna: 460, zasieg: 1 },
  ],
  grzybiarki: [
    { kolumna: 133, zasiegRzutu: 100, wysokosc: 4 },
    { kolumna: 306, zasiegRzutu: 100 },
  ],
  powerupy: [
    { typ: 'czerwony', kolumna: 125, wysokosc: 4 },
    { typ: 'niebieski', kolumna: 235, wysokosc: 2 },
    { typ: 'zolty', kolumna: 392, wysokosc: 4 },
  ],
  meta: { kolumna: 495 },
  punktyKontrolne: [{ kolumna: 231 }],
  motyw: {
    niebo: ['#05040f', '#0a0820', '#120c2e', '#1d1240', '#2c1650', '#44195a'],
    las: ['#1c1a3c', '#13122b', '#0b0b1d'],
    jezdnia: { kolorPobocza: '#16141c', kolorZwiru: '#24212c', kolorAsfaltu: '#101015', kolorAsfaltuJasny: '#1a1a22', kolorAsfaltuCiemny: '#0a0a0e', kolorZoltejLinii: '#8a7a3a', kolorBialejLinii: '#9a9aaa' },
    barierka: {
      kolorSzynyGora: '#cfd6e6',
      kolorSzynyJasny: '#7c86a0',
      kolorSzynyRowek: '#4a5270',
      kolorSzynySrodek: '#5f698a',
      kolorSzynyCien: '#343b57',
      kolorSruby: '#2a3048',
      kolorSlupka: '#565f7c',
      kolorSlupkaCien: '#383f58',
      kolorGleby: '#0f0e16',
    },
    wiadukt: {
      kolorGora: '#8a93b0',
      kolorCialo: '#4c5372',
      kolorCien: '#2b3047',
      kolorSzwu: '#3c4260',
      kolorFilaru: '#3f4562',
      kolorFilaruJasny: '#58607f',
      kolorFilaruCien: '#2a2f45',
      kolorPodstawy: '#171a2a',
      kolorBarierki: '#5a6385',
      kolorBarierkiJasny: '#8d97b8',
    },
    gwiazdy: { liczba: 30, wysokosc: 50, kolor: '#ffffff', alfa: 0.6, paralaksa: 0.03, migotanie: 3, duzeCo: 9, ziarno: 7 },
    miasto: {
      warstwy: [
        { odstep: 18, szerokoscMin: 14, szerokoscMax: 24, wysokoscMin: 44, wysokoscMax: 82, oknaAlfa: 0.35 },
        { odstep: 24, szerokoscMin: 18, szerokoscMax: 30, wysokoscMin: 50, wysokoscMax: 92, oknaAlfa: 0.55 },
        { odstep: 30, szerokoscMin: 22, szerokoscMax: 36, wysokoscMin: 56, wysokoscMax: 100, oknaAlfa: 0.85 },
      ],
      uskok: 0.18, antena: 8,
      okna: ['#ffd27a', '#9fe8ff', '#ffe9b0'], oknaCo: 3, oknaOdstepX: 3, oknaOdstepY: 4, oknoSzerokosc: 1, oknoWysokosc: 2,
      warstwaNeonow: 2, neony: ['#ff3fa4', '#3ff0ff', '#b6ff3f', '#ffb13f'], neonyCo: 2, neonSzerokosc: 10, neonWysokosc: 7, neonOdGory: 6,
      neonAlfa: 0.95, poswiataAlfa: 0.22, migoczeCo: 3, migotanieSzybkosc: 10, migotanieMin: 0.15,
      odbicia: { alfa: 0.55, dlugosc: 26, szerokie: 8, fale: 7, falowanie: 3 },
    },
  },
};

const POZIOM_9 = {
  nazwa: 'POZIOM 9',
  odcinki: [
    { start: 0, length: 22, top: 10 },
    { start: 24, length: 13, top: 10 },
    { start: 39, length: 5, top: 10 },
    { start: 46, length: 5, top: 9 },
    { start: 54, length: 14, top: 9 },
    { start: 70, length: 23, top: 9 },
    { start: 95, length: 4, top: 8 },
    { start: 101, length: 4, top: 9 },
    { start: 107, length: 25, top: 9 },
    { start: 134, length: 16, top: 9 },
    { start: 152, length: 4, top: 10 },
    { start: 158, length: 4, top: 9 },
    { start: 164, length: 4, top: 8 },
    { start: 171, length: 18, top: 8 },
    { start: 191, length: 13, top: 8 },
    { start: 206, length: 4, top: 10 },
    { start: 212, length: 4, top: 9 },
    { start: 218, length: 4, top: 10 },
    { start: 224, length: 4, top: 9 },
    { start: 231, length: 18, top: 10 },
    { start: 251, length: 28, top: 10 },
    { start: 281, length: 4, top: 9 },
    { start: 287, length: 4, top: 8 },
    { start: 293, length: 4, top: 9 },
    { start: 300, length: 14, top: 9 },
    { start: 316, length: 14, top: 9 },
    { start: 332, length: 25, top: 10 },
    { start: 359, length: 4, top: 9 },
    { start: 365, length: 4, top: 10 },
    { start: 371, length: 4, top: 9 },
    { start: 378, length: 14, top: 9 },
    { start: 394, length: 4, top: 10 },
    { start: 398, length: 2, top: 9 },
    { start: 400, length: 20, top: 8 },
    { start: 422, length: 4, top: 10 },
    { start: 428, length: 4, top: 9 },
    { start: 434, length: 4, top: 8 },
    { start: 440, length: 23, top: 8 },
    { start: 465, length: 16, top: 8 },
    { start: 483, length: 4, top: 9 },
    { start: 489, length: 4, top: 10 },
    { start: 495, length: 4, top: 9 },
    { start: 502, length: 18, top: 9 },
    { start: 523, length: 10, top: 9 },
  ],
  platformy: [
    { kolumna: 12, wysokosc: 2, dlugosc: 6 },
    { kolumna: 236, wysokosc: 2, dlugosc: 6 },
    { kolumna: 402, wysokosc: 4, dlugosc: 8 },
  ],
  przeszkody: [
    { typ: 'karton', kolumna: 64 },
    { typ: 'beczka', kolumna: 180 },
    { typ: 'karton', kolumna: 267 },
    { typ: 'opona', kolumna: 310 },
    { typ: 'karton', kolumna: 388 },
    { typ: 'beczka', kolumna: 511 },
    { typ: 'karton', kolumna: 11, jezdnia: true },
    { typ: 'opona', kolumna: 37, jezdnia: true },
    { typ: 'beczka', kolumna: 63, jezdnia: true },
    { typ: 'karton', kolumna: 89, jezdnia: true },
    { typ: 'opona', kolumna: 115, jezdnia: true },
    { typ: 'beczka', kolumna: 141, jezdnia: true },
    { typ: 'karton', kolumna: 167, jezdnia: true },
    { typ: 'opona', kolumna: 193, jezdnia: true },
    { typ: 'beczka', kolumna: 219, jezdnia: true },
    { typ: 'karton', kolumna: 245, jezdnia: true },
    { typ: 'opona', kolumna: 271, jezdnia: true },
    { typ: 'beczka', kolumna: 297, jezdnia: true },
    { typ: 'karton', kolumna: 323, jezdnia: true },
    { typ: 'opona', kolumna: 349, jezdnia: true },
    { typ: 'beczka', kolumna: 375, jezdnia: true },
    { typ: 'karton', kolumna: 401, jezdnia: true },
    { typ: 'opona', kolumna: 427, jezdnia: true },
    { typ: 'beczka', kolumna: 453, jezdnia: true },
    { typ: 'karton', kolumna: 479, jezdnia: true },
    { typ: 'opona', kolumna: 505, jezdnia: true },
    { typ: 'beczka', kolumna: 531, jezdnia: true },
  ],
  wrogowie: [
    { kolumna: 31, zasieg: 1 },
    { kolumna: 77, zasieg: 1 },
    { kolumna: 86, zasieg: 1 },
    { kolumna: 139, zasieg: 1 },
    { kolumna: 198, zasieg: 1 },
    { kolumna: 273, zasieg: 1 },
    { kolumna: 323, zasieg: 1 },
    { kolumna: 415, zasieg: 1 },
    { kolumna: 447, zasieg: 1 },
    { kolumna: 456, zasieg: 1 },
    { kolumna: 470, zasieg: 1 },
  ],
  grzybiarki: [
    { kolumna: 117, zasiegRzutu: 100 },
    { kolumna: 342, zasiegRzutu: 100 },
  ],
  powerupy: [
    { typ: 'czerwony', kolumna: 14, wysokosc: 2 },
    { typ: 'niebieski', kolumna: 238, wysokosc: 2 },
    { typ: 'zolty', kolumna: 404, wysokosc: 4 },
  ],
  meta: { kolumna: 528 },
  punktyKontrolne: [{ kolumna: 234 }],
  motyw: {
    niebo: ['#0d1118', '#141b24', '#1c262f', '#26333b', '#33434a', '#43555a'],
    las: ['#1d2a30', '#141e23', '#0c1316'],
    jezdnia: { kolorPobocza: '#1b211f', kolorZwiru: '#2a322e', kolorAsfaltu: '#12171a', kolorAsfaltuJasny: '#1c2328', kolorAsfaltuCiemny: '#0c1013', kolorZoltejLinii: '#8a8434', kolorBialejLinii: '#98a2a8', kolorKaluzy: '#2a363d' },
    barierka: {
      kolorSzynyGora: '#d0dde4',
      kolorSzynyJasny: '#7e909a',
      kolorSzynyRowek: '#4a5a63',
      kolorSzynySrodek: '#607079',
      kolorSzynyCien: '#33414a',
      kolorSruby: '#28333a',
      kolorSlupka: '#566770',
      kolorSlupkaCien: '#36444c',
      kolorGleby: '#101514',
    },
    wiadukt: {
      kolorGora: '#93a4ad',
      kolorCialo: '#5a6a73',
      kolorCien: '#323e45',
      kolorSzwu: '#48565e',
      kolorFilaru: '#4a5961',
      kolorFilaruJasny: '#62737c',
      kolorFilaruCien: '#35414a',
      kolorPodstawy: '#20282c',
      kolorBarierki: '#6e7f88',
      kolorBarierkiJasny: '#9db0ba',
    },
    deszcz: { krople: 100, predkosc: 340, rozrzutPredkosci: 0.3, wiatr: -120, dlugosc: 6, margines: 24, paralaksa: 0.6, kolor: '#a7bcc8', alfa: 0.5, pluski: 9, pluskiNaSekunde: 11, kolorPlusku: '#bccdd8', alfaPlusku: 0.55, kaluzaKomorka: 16, kaluzaCo: 2, kaluzaMin: 3, kaluzaRozrzut: 8 },
    burza: { co: 6, czas: 0.4, ziarno: 4, kolor: '#dfe8ff', alfaNieba: 0.4, alfaEkranu: 0.08, piorun: '#ffffff', margines: 30, dlugoscPioruna: 100 },
  },
};

const POZIOM_10 = {
  nazwa: 'POZIOM 10',
  odcinki: [
    { start: 0, length: 22, top: 10 },
    { start: 24, length: 11, top: 10 },
    { start: 37, length: 4, top: 10 },
    { start: 43, length: 4, top: 10 },
    { start: 49, length: 4, top: 9 },
    { start: 56, length: 14, top: 9 },
    { start: 72, length: 21, top: 9 },
    { start: 95, length: 4, top: 8 },
    { start: 101, length: 4, top: 9 },
    { start: 107, length: 25, top: 9 },
    { start: 134, length: 28, top: 9 },
    { start: 164, length: 4, top: 10 },
    { start: 170, length: 4, top: 9 },
    { start: 176, length: 4, top: 8 },
    { start: 183, length: 18, top: 8 },
    { start: 203, length: 11, top: 8 },
    { start: 216, length: 4, top: 9 },
    { start: 222, length: 4, top: 10 },
    { start: 228, length: 4, top: 9 },
    { start: 234, length: 4, top: 10 },
    { start: 241, length: 18, top: 10 },
    { start: 261, length: 21, top: 10 },
    { start: 284, length: 4, top: 9 },
    { start: 290, length: 4, top: 8 },
    { start: 296, length: 4, top: 10 },
    { start: 302, length: 4, top: 9 },
    { start: 309, length: 14, top: 9 },
    { start: 325, length: 11, top: 10 },
    { start: 338, length: 25, top: 9 },
    { start: 365, length: 4, top: 10 },
    { start: 371, length: 4, top: 9 },
    { start: 377, length: 4, top: 8 },
    { start: 383, length: 4, top: 10 },
    { start: 387, length: 2, top: 9 },
    { start: 389, length: 20, top: 8 },
    { start: 411, length: 28, top: 8 },
    { start: 441, length: 4, top: 9 },
    { start: 448, length: 14, top: 9 },
    { start: 464, length: 11, top: 9 },
    { start: 478, length: 65, top: 10 },
  ],
  platformy: [
    { kolumna: 12, wysokosc: 2, dlugosc: 6 },
    { kolumna: 246, wysokosc: 2, dlugosc: 6 },
    { kolumna: 391, wysokosc: 4, dlugosc: 8 },
    { kolumna: 494, wysokosc: 2, dlugosc: 7 },
    { kolumna: 533, wysokosc: 2, dlugosc: 7 },
  ],
  przeszkody: [
    { typ: 'karton', kolumna: 66 },
    { typ: 'opona', kolumna: 150 },
    { typ: 'beczka', kolumna: 192 },
    { typ: 'opona', kolumna: 319 },
    { typ: 'karton', kolumna: 427 },
    { typ: 'opona', kolumna: 458 },
    { typ: 'karton', kolumna: 11, jezdnia: true },
    { typ: 'opona', kolumna: 37, jezdnia: true },
    { typ: 'beczka', kolumna: 63, jezdnia: true },
    { typ: 'karton', kolumna: 89, jezdnia: true },
    { typ: 'opona', kolumna: 115, jezdnia: true },
    { typ: 'beczka', kolumna: 141, jezdnia: true },
    { typ: 'karton', kolumna: 167, jezdnia: true },
    { typ: 'opona', kolumna: 193, jezdnia: true },
    { typ: 'beczka', kolumna: 219, jezdnia: true },
    { typ: 'karton', kolumna: 245, jezdnia: true },
    { typ: 'opona', kolumna: 271, jezdnia: true },
    { typ: 'beczka', kolumna: 297, jezdnia: true },
    { typ: 'karton', kolumna: 323, jezdnia: true },
    { typ: 'opona', kolumna: 349, jezdnia: true },
    { typ: 'beczka', kolumna: 375, jezdnia: true },
    { typ: 'karton', kolumna: 401, jezdnia: true },
    { typ: 'opona', kolumna: 427, jezdnia: true },
    { typ: 'beczka', kolumna: 453, jezdnia: true },
    { typ: 'karton', kolumna: 479, jezdnia: true },
  ],
  wrogowie: [
    { kolumna: 29, zasieg: 1 },
    { kolumna: 78, zasieg: 1 },
    { kolumna: 86, zasieg: 1 },
    { kolumna: 156, zasieg: 1 },
    { kolumna: 208, zasieg: 1 },
    { kolumna: 267, zasieg: 1 },
    { kolumna: 275, zasieg: 1 },
    { kolumna: 330, zasieg: 1 },
    { kolumna: 404, zasieg: 1 },
    { kolumna: 433, zasieg: 1 },
    { kolumna: 469, zasieg: 1 },
  ],
  grzybiarki: [
    { kolumna: 117, zasiegRzutu: 100 },
    { kolumna: 348, zasiegRzutu: 100 },
  ],
  powerupy: [
    { typ: 'czerwony', kolumna: 14, wysokosc: 2 },
    { typ: 'niebieski', kolumna: 248, wysokosc: 2 },
    { typ: 'zolty', kolumna: 393, wysokosc: 4 },
    { typ: 'niebieski', kolumna: 497, wysokosc: 2 },
    { typ: 'zolty', kolumna: 536, wysokosc: 2 },
  ],
  meta: { kolumna: 491 },
  boss: { arena: 491, szerokosc: 52 },
  punktyKontrolne: [{ kolumna: 244 }, { kolumna: 481 }],
  motyw: {
    niebo: ['#0b1030', '#17194a', '#2d2a62', '#5b3c74', '#b0607e', '#f0a070'],
    las: ['#4a3a66', '#2e2648', '#171329'],
    jezdnia: { kolorPobocza: '#2a2230', kolorZwiru: '#3c3242', kolorAsfaltu: '#1c1824', kolorAsfaltuJasny: '#26212f', kolorAsfaltuCiemny: '#14111a', kolorZoltejLinii: '#c89a4a', kolorBialejLinii: '#d8cfe0' },
    barierka: {
      kolorSzynyGora: '#f4e4ec',
      kolorSzynyJasny: '#b8a4c0',
      kolorSzynyRowek: '#6e5a7c',
      kolorSzynySrodek: '#8e7a9c',
      kolorSzynyCien: '#4a3a5c',
      kolorSruby: '#352a44',
      kolorSlupka: '#7e6a8e',
      kolorSlupkaCien: '#524262',
      kolorGleby: '#1a1420',
    },
    wiadukt: {
      kolorGora: '#e8cede',
      kolorCialo: '#9c84a8',
      kolorCien: '#5c4a6c',
      kolorSzwu: '#7a6688',
      kolorFilaru: '#76628a',
      kolorFilaruJasny: '#9a86aa',
      kolorFilaruCien: '#544466',
      kolorPodstawy: '#2e2438',
      kolorBarierki: '#a08aae',
      kolorBarierkiJasny: '#ead2e0',
    },
    gwiazdy: { liczba: 50, wysokosc: 56, kolor: '#ffffff', alfa: 0.7, paralaksa: 0.03, migotanie: 3, duzeCo: 13, ziarno: 10 },
    lasWarstwy: [{ wysokoscMin: 18, wysokoscMax: 32 }, { wysokoscMin: 24, wysokoscMax: 42 }, { wysokoscMin: 36, wysokoscMax: 64 }],
    slonce: { x: 236, y: 112, promien: 15, kolor: '#ffd88a', kolorPoswiaty: '#ff9a7a', poswiata: [{ promien: 44, alfa: 0.1 }, { promien: 30, alfa: 0.16 }, { promien: 21, alfa: 0.22 }], pasy: { kolor: '#f08a6a', od: 5, co: 3, grubosc: 1 } },
    latarnie: {
      co: 11,
      przesuniecie: 6,
      wolneKolumny: 2,
      wysokosc: 66,
      wysiegnik: 7,
      kolorSlupa: '#2a2234',
      kolorSlupaJasny: '#40364e',
      kolorKlosza: '#fff0c2',
      kolorSwiatla: '#ffc864',
      poswiataAlfa: 0.22,
      stozekAlfa: 0.05,
      stozekSzerokosc: 24,
      plamaAlfa: 0.28,
      odbicieAlfa: 0.3,
      odbicieSzerokie: 9,
      odbicieFale: 7,
      odbicieFalowanie: 3,
      ziarnoMigotania: 7,
      migoczeCo: 6,
      migotanieSzybkosc: 14,
      migotanieMin: 0.25,
    },
  },
};

const POZIOMY = [POZIOM_1, POZIOM_2, POZIOM_3, POZIOM_4, POZIOM_5, POZIOM_6, POZIOM_7, POZIOM_8, POZIOM_9, POZIOM_10];

const SCREEN_W = USTAWIENIA.ekran.szerokosc;
const SCREEN_H = USTAWIENIA.ekran.wysokosc;
const TILE = USTAWIENIA.kafelek;
const ROWS = SCREEN_H / TILE;
const STEP = USTAWIENIA.krokCzasu;
const PHYS = USTAWIENIA.fizyka;
const CHAR = USTAWIENIA.postac;
const ROAD = USTAWIENIA.jezdnia;
const BARRIER = USTAWIENIA.barierka;
const TREE = USTAWIENIA.drzewo;
const PALETTE = USTAWIENIA.paleta;
const OBST = USTAWIENIA.przeszkody;
const DEATH = USTAWIENIA.smierc;
const ENEMY = USTAWIENIA.wrogowie;
const PICKER = ENEMY.grzybiarka;
const POWER = USTAWIENIA.powerupy;
const CAM = USTAWIENIA.kamera;
const PLAT = USTAWIENIA.platformy;
const SND = USTAWIENIA.dzwiek;
const FINISH = USTAWIENIA.meta;
const FLAG = USTAWIENIA.punktKontrolny;
const REFL = USTAWIENIA.odblaski;
const OCENA = USTAWIENIA.ocena;
const UI = USTAWIENIA.interfejs;
const OKNO = USTAWIENIA.okno;
const DOTYK = USTAWIENIA.dotyk;
const JEZ = USTAWIENIA.jezyk;
const FX = USTAWIENIA.efekty;
const AUTA = USTAWIENIA.auta;
const BLYSKI = USTAWIENIA.blyski;
const BOSS = USTAWIENIA.boss;
const DUCH = USTAWIENIA.duch;
const SKORY = USTAWIENIA.kolorystyka;
const LATWY = USTAWIENIA.latwy;
const PETLA = USTAWIENIA.petla;
const DIAG = USTAWIENIA.diagnostyka;
const GROUND_Y = ROAD.poziomZiemi;
const GROUND_ROW = GROUND_Y / TILE;
const SPRITE_OFFSET_X = (CHAR.szerokoscSprite - CHAR.szerokosc) / 2;
let FINISH_X = 0;

function savedLanguage() {
  try {
    const saved = localStorage.getItem(JEZ.klucz);
    return JEZ.dostepne.includes(saved) ? saved : null;
  } catch (err) {
    return null;
  }
}

function browserLanguage() {
  try {
    return String(navigator.language || '').toLowerCase().startsWith(JEZ.polski) ? JEZ.polski : JEZ.domyslny;
  } catch (err) {
    return JEZ.domyslny;
  }
}

let LANG = savedLanguage() || browserLanguage();

function tx(key, vars) {
  let value = TEKSTY[LANG][key];
  if (value === undefined) value = TEKSTY[JEZ.domyslny][key];
  if (vars && typeof value === 'string') {
    for (const name in vars) value = value.split('{' + name + '}').join(String(vars[name]));
  }
  return value;
}

const T_EMPTY = 0;
const T_RAIL = 1;
const T_POST = 2;
const T_PLAT = 3;
const T_WALL = 4;

function hash(n) {
  let h = Math.imul(n ^ 0x9e3779b9, 0x85ebca6b);
  h ^= h >>> 13;
  h = Math.imul(h, 0xc2b2ae35);
  h ^= h >>> 16;
  return h >>> 0;
}

function buildLevel() {
  let cols = 0;
  for (const s of level.odcinki) cols = Math.max(cols, s.start + s.length);

  const grid = [];
  for (let r = 0; r < ROWS; r++) {
    grid.push(new Array(cols).fill(T_EMPTY));
  }

  for (const s of level.odcinki) {
    for (let c = s.start; c < s.start + s.length; c++) {
      grid[s.top][c] = T_RAIL;
      for (let r = s.top + 1; r < GROUND_ROW; r++) {
        grid[r][c] = T_POST;
      }
    }
  }
  for (const p of level.platformy) {
    const row = PLAT.rzadBazowy - p.wysokosc;
    for (let c = p.kolumna; c < p.kolumna + p.dlugosc; c++) {
      if (grid[row][c] === T_EMPTY) grid[row][c] = T_PLAT;
    }
  }
  return grid;
}

let level = POZIOMY[0];
let map = [];
let LEVEL_COLS = 0;
let LEVEL_W = 0;

function isSolid(col, row) {
  if (col < 0 || col >= LEVEL_COLS || row < 0 || row >= ROWS) return false;
  const t = map[row][col];
  return t === T_RAIL || t === T_WALL;
}

function isPlatform(col, row) {
  if (col < 0 || col >= LEVEL_COLS || row < 0 || row >= ROWS) return false;
  return map[row][col] === T_PLAT;
}

function platformBelow() {
  const row = Math.floor((player.y + player.h + PHYS.epsilon) / TILE);
  const c0 = Math.floor(player.x / TILE);
  const c1 = Math.floor((player.x + player.w - PHYS.epsilon) / TILE);
  let found = false;
  for (let c = c0; c <= c1; c++) {
    if (isSolid(c, row)) return false;
    if (isPlatform(c, row)) found = true;
  }
  return found;
}

function railTopY(col) {
  for (let r = 0; r < ROWS; r++) {
    if (map[r][col] === T_RAIL) return r * TILE;
  }
  return null;
}

function overlapsSolid(x, y, w, h) {
  const c0 = Math.floor(x / TILE);
  const c1 = Math.floor((x + w - PHYS.epsilon) / TILE);
  const r0 = Math.floor(y / TILE);
  const r1 = Math.floor((y + h - PHYS.epsilon) / TILE);
  for (let r = r0; r <= r1; r++) {
    for (let c = c0; c <= c1; c++) {
      if (isSolid(c, r)) return true;
    }
  }
  return false;
}

function layer(y, rows, x = 0) {
  return { x, y, rows };
}

const HEAD = layer(0, [
  ".....rrrrrr.....",
  "....rhcccchr....",
  "....rhhhhhhr....",
  "....rhhvvvvr....",
  "....hhhvgvvr....",
  "....rhhvvvvr....",
  ".....rhcchhr....",
]);

const TORSO = layer(7, [
  "....rddddddr....",
  ".....rdccdr.....",
  ".....rdccdr.....",
  ".....rdccdr.....",
  ".....rdccdr.....",
  ".....rdccdr.....",
  ".....rdccdr.....",
  ".....rccccr.....",
  ".....rdccdr.....",
]);

const ARMS_DOWN = layer(8, [
  "...rc......cr...",
  "...rc......cr...",
  "...rc......cr...",
  "...rc......cr...",
  "...rc......cr...",
  "...rD......Dr...",
]);

const ARMS_SWING = layer(8, [
  "...rc......cr.D.",
  "..rc........crc.",
  ".rc.........rcc.",
  "Dc..............",
  "................",
  "................",
]);

const ARMS_PASS = layer(8, [
  "...rc......cr...",
  "...rc......cr...",
  "...rc......cr...",
  "..rc........cr..",
  "..Dc........cD..",
  "................",
]);

const LEGS_STAND = layer(16, [
  ".....cddddc.....",
  ".....cdrrdc.....",
  ".....cdrrdc.....",
  ".....cdrrdc.....",
  ".....cdrrdc.....",
  ".....cdrrdc.....",
  "....DDDDDDDD....",
  "....cccccccc....",
]);

const LEGS_CONTACT = layer(16, [
  ".....cddddc.....",
  "....cdd..ddc....",
  "...cdd....ddc...",
  "..cdd.....ddc...",
  "..cdd.....ddc...",
  "..cdd.....ddc...",
  "..DDD.....DDDD..",
  "..ccc.....cccc..",
]);

const LEGS_PASSING = layer(16, [
  ".....cddddc.....",
  ".....cddddc.....",
  "....cdd..ddc....",
  "...cdd...ddc....",
  "...DDD...ddc....",
  "...ccc...ddc....",
  ".........DDDD...",
  ".........cccc...",
]);

const LEGS_PUSH = layer(16, [
  ".....cddddc.....",
  "....cdd.ddddc...",
  "...cdd.....ddc..",
  "...cdd.....ddc..",
  "..cdd......DDD..",
  "..cdd......ccc..",
  ".DDDD...........",
  ".cccc...........",
]);

const LEGS_TUCK = layer(16, [
  ".....cddddc.....",
  ".....cddddc.....",
  ".....cdd.ddc....",
  ".....cdd..dddc..",
  ".....cdd..ddc...",
  ".....cdd..DDD...",
  "....DDDDD.ccc...",
  "....ccccc.......",
]);

const LEGS_JUMP = layer(16, [
  ".....cddddc.....",
  "....cddddddc....",
  "...cdd...ddc....",
  "..cdd.....ddc...",
  "..ddD.....DDD...",
  "..ccc.....ccc...",
  "................",
  "................",
]);

const CROUCH_HEAD = layer(0, HEAD.rows, 2);

const CROUCH_BODY = layer(7, [
  "..rdddddddddr...",
  ".rcddccccccddr..",
  ".rcdddddddddcr..",
  ".rdccd....dccr..",
  "..cddddddddc....",
  "..cdd....ddc....",
  "..cccc...cccc...",
]);

const SPRITES = {
  stand: [HEAD, TORSO, ARMS_DOWN, LEGS_STAND],
  run: [
    [HEAD, TORSO, ARMS_SWING, LEGS_CONTACT],
    [HEAD, TORSO, ARMS_PASS, LEGS_PASSING],
    [HEAD, TORSO, ARMS_SWING, LEGS_PUSH],
    [HEAD, TORSO, ARMS_PASS, LEGS_TUCK],
  ],
  jump: [HEAD, TORSO, ARMS_SWING, LEGS_JUMP],
  crouch: [CROUCH_HEAD, CROUCH_BODY],
};

const BOARD = [
  ".bbbbbbbbbbbbbb.",
  "..dddddddddddd..",
  "..ww........ww..",
];

const WORKER_TOP = [
  "....yyyyyy....",
  "...yyyyyyyy...",
  "...yyyyyyyyyy.",
  "...hhhhhhhhh..",
  "....ssssss....",
  "....sssess....",
  "....ssssss....",
  "...oooooooo...",
  "..goolooloog..",
  "..goolooloog..",
  "..goolooloog..",
  "..gllllllllg..",
  "..soooooooos..",
  "...oooooooo...",
  "...bbbbbbbb...",
];

const WORKER_LEGS = [
  [
    "...bbbbbbbb...",
    "...bbb..bbb...",
    "...bbb..bbb...",
    "...bbb..bbb...",
    "...bbb..bbb...",
    "..kkkk..kkkk..",
    "..kkkk..kkkk..",
  ],
  [
    "...bbbbbbbb...",
    "..bbb....bbb..",
    "..bbb....bbb..",
    ".bbb......bbb.",
    ".bbb......bbb.",
    ".kkkk.....kkkk",
    ".kkkk.....kkkk",
  ],
];

const PICKER_LOWER = [
  "...GGGGGGGG...",
  "...nnnnnnnn...",
  "..nnnnnnnnnn..",
  "..nnnnnnnnnn..",
  "..nnNnnnnNnn..",
  "..nnNnnnnNnn..",
  "..NNNNNNNNNN..",
  "....ss..ss....",
  "....ss..ss....",
  "....ss..ss....",
  "...kkk..kkk...",
];

const PICKER_RAISED = [
  "....rrrrrr.WWW",
  "...rrrrrrrrwww",
  "...rssssssrwww",
  "...rsssessrWWW",
  "....ssssss.ss.",
  ".....ssss..g..",
  "....gggggg.g..",
  "...gggggggg.g.",
  "..gggggggggg..",
  "..gggggggggg..",
  "..sggggggggs..",
].concat(PICKER_LOWER);

const PICKER_BENT = [
  "..............",
  "..............",
  "..............",
  "..............",
  "..............",
  "..............",
  "........rrrr..",
  ".......rrrrrr.",
  ".......rsessr.",
  ".......sssss..",
  "....ggggggg...",
  "...GGGGGGGGs..",
  "...nnnnnnnn.s.",
].concat(PICKER_LOWER.slice(2, 8), [
  "....ss..ss.WWW",
  "....ss..sswwww",
  "...kkk..kkkwww",
]);

const PICKER_SQUASHED = [
  ".rrrrr.ssss...",
  "..gggggggggg..",
  "..GGGGGGGGGG..",
  "..nnnnnnnnnn..",
  "..kkk...kkk...",
];

const WORKER_FRAMES = WORKER_LEGS.map(legs => WORKER_TOP.concat(legs));

const BOSS_CHOD_A = [
  "..........kkkkkkkk..........",
  "........kkyyyyyyyykk........",
  ".......kyyllyyyyyyyykk......",
  "......kyyllyyyyyyyYYYYk.....",
  ".....kyyylyyyyyyyyYYYYk.....",
  ".....kyyyyyyyyyyyyYYYYk.....",
  "..kkkyyyyyyyyyyyyyYYYYykkk..",
  ".kyyyyyyyyyyyyyyyyyyyyyyyyk.",
  ".kYYYYYYYYYYYYYYYYYYYYYYYYk.",
  "..kkkkksseesssssseesskkkkk..",
  "......kssssessssessssk......",
  "......kssseesssseesssk......",
  "......kssseesssseesssk......",
  "......ksspsssSSssspssk......",
  "......kssssssSSssssssk......",
  "......ksssmmmmmmmeessk......",
  "......kssessssseessssk......",
  "......kssseeeeessssssk......",
  "......kSsssSSSssssssSk......",
  "......kSssssssssssssSk......",
  ".......kssssssssssssk.......",
  "....kkkkkkkSSSSSSkkkkkkk....",
  ".kkkooorrooowwwwooorroookkk.",
  "kookooorrooowwwwooorOOOOOook",
  "kookooorrooowwwwooorOOOOOook",
  "koooooorroooowwoooorOOOOOook",
  "koooooorroooowwoooorOOOOOook",
  "koorrrrrrrrrrrrrrrrrrrrrrook",
  "koorrrrrrrrrrrrrrrrrrrrrrook",
  "koooooorroooowwoooorrooooook",
  "koooooorroooowwoooorrooooook",
  "koorrrrrrrrrrrrrrrrrrrrrrook",
  "kggkooorroooowwoooorroookggk",
  "kggkooorroooowwoooorroookggk",
  "kggknnnnnnnnnnnnnnnnnnnnkggk",
  ".kkknnnnnnnnnnnnnnnnnnnnkkk.",
  "....kkbbbbbBBkkbbbbbBBkk....",
  ".....kbbbbbBBkkbbbbbBBk.....",
  ".....kbbbbbBBkkbbbbbBBk.....",
  ".....kbbbbbBBkkbbbbbBBk.....",
  ".....kbbbbbBBkkbbbbbBBk.....",
  "....knnnnnnnnkknnnnnnnnk....",
  "....knnnnnnnnkknnnnnnnnk....",
  ".....kkkkkkkk..kkkkkkkk.....",
];

const BOSS_CHOD_B = [
  "..........kkkkkkkk..........",
  "........kkyyyyyyyykk........",
  ".......kyyllyyyyyyyykk......",
  "......kyyllyyyyyyyYYYYk.....",
  ".....kyyylyyyyyyyyYYYYk.....",
  ".....kyyyyyyyyyyyyYYYYk.....",
  "..kkkyyyyyyyyyyyyyYYYYykkk..",
  ".kyyyyyyyyyyyyyyyyyyyyyyyyk.",
  ".kYYYYYYYYYYYYYYYYYYYYYYYYk.",
  "..kkkkksseesssssseesskkkkk..",
  "......kssssessssessssk......",
  "......kssseesssseesssk......",
  "......kssseesssseesssk......",
  "......ksspsssSSssspssk......",
  "......kssssssSSssssssk......",
  "......ksssmmmmmmmeessk......",
  "......kssessssseessssk......",
  "......kssseeeeessssssk......",
  "......kSsssSSSssssssSk......",
  "......kSssssssssssssSk......",
  ".......kssssssssssssk.......",
  "....kkkkkkkSSSSSSkkkkkkk....",
  ".kkkooorrooowwwwooorroookkk.",
  "kookooorrooowwwwooorOOOOOook",
  "kookooorrooowwwwooorOOOOOook",
  "koooooorroooowwoooorOOOOOook",
  "koooooorroooowwoooorOOOOOook",
  "koorrrrrrrrrrrrrrrrrrrrrrook",
  "koorrrrrrrrrrrrrrrrrrrrrrook",
  "koooooorroooowwoooorrooooook",
  "koooooorroooowwoooorrooooook",
  "koorrrrrrrrrrrrrrrrrrrrrrook",
  "kggkooorroooowwoooorroookggk",
  "kggkooorroooowwoooorroookggk",
  "kggknnnnnnnnnnnnnnnnnnnnkggk",
  ".kkknnnnnnnnnnnnnnnnnnnnkkk.",
  "...kbbbbbBBkkkkkkbbbbbBBk...",
  "...kbbbbbBBk....kbbbbbBBk...",
  "...kbbbbbBBk....kbbbbbBBk...",
  "...kbbbbbBBk....kbbbbbBBk...",
  "..kkbbbbbBBk....kbbbbbBBkk..",
  ".knnnnnnnnnk....knnnnnnnnnk.",
  ".knnnnnnnnnk....knnnnnnnnnk.",
  "..kkkkkkkkk......kkkkkkkkk..",
];

const BOSS_CHOD_C = [
  "..........kkkkkkkk..........",
  "........kkyyyyyyyykk........",
  ".......kyyllyyyyyyyykk......",
  "......kyyllyyyyyyyYYYYk.....",
  ".....kyyylyyyyyyyyYYYYk.....",
  ".....kyyyyyyyyyyyyYYYYk.....",
  "..kkkyyyyyyyyyyyyyYYYYykkk..",
  ".kyyyyyyyyyyyyyyyyyyyyyyyyk.",
  ".kYYYYYYYYYYYYYYYYYYYYYYYYk.",
  "..kkkkksseesssssseesskkkkk..",
  "......kssssessssessssk......",
  "......kssseesssseesssk......",
  "......kssseesssseesssk......",
  "......ksspsssSSssspssk......",
  "......kssssssSSssssssk......",
  "......ksssmmmmmmmeessk......",
  "......kssessssseessssk......",
  "......kssseeeeessssssk......",
  "......kSsssSSSssssssSk......",
  "......kSssssssssssssSk......",
  ".......kssssssssssssk.......",
  "....kkkkkkkSSSSSSkkkkkkk....",
  ".kkkooorrooowwwwooorroookkk.",
  "kookooorrooowwwwooorOOOOOook",
  "kookooorrooowwwwooorOOOOOook",
  "koooooorroooowwoooorOOOOOook",
  "koooooorroooowwoooorOOOOOook",
  "koorrrrrrrrrrrrrrrrrrrrrrook",
  "koorrrrrrrrrrrrrrrrrrrrrrook",
  "koooooorroooowwoooorrooooook",
  "koooooorroooowwoooorrooooook",
  "koorrrrrrrrrrrrrrrrrrrrrrook",
  "kggkooorroooowwoooorroookggk",
  "kggkooorroooowwoooorroookggk",
  "kggknnnnnnnnnnnnnnnnnnnnkggk",
  ".kkknnnnnnnnnnnnnnnnnnnnkkk.",
  "....kkkbbbbbBBbbbbbBBkkk....",
  "......kbbbbbBBbbbbbBBk......",
  "......kbbbbbBBbbbbbBBk......",
  "......kbbbbbBBbbbbbBBk......",
  "......kbbbbbBBnnnnnnnnk.....",
  "......knnnnnnnnnnnnnnnk.....",
  "......knnnnnnnnkkkkkkk......",
  ".......kkkkkkkk.............",
];

const BOSS_ZAMACH = [
  "..........kkkkkkkk..........",
  "........kkyyyyyyyykk........",
  ".......kyyllyyyyyyyykk......",
  "......kyyllyyyyyyyYYYYk.....",
  ".....kyyylyyyyyyyyYYYYk.....",
  ".....kyyyyyyyyyyyyYYYYk.....",
  "..kkkyyyyyyyyyyyyyYYYYykkk..",
  ".kyyyyyyyyyyyyyyyyyyyyyyyyk.",
  ".kYYYYYYYYYYYYYYYYYYYYYYYYk.",
  ".kkkkkksseesssssseesskkkkkk.",
  "kgggk.kssssessssessssk.kgggk",
  "kgggk.kssseesssseesssk.kgggk",
  "kgggk.kssseesssseesssk.kgggk",
  "koook.ksspsssSSssspssk.koook",
  "koook.kssssssSSssssssk.koook",
  "koook.ksssmmmmmmmeessk.koook",
  "koook.kssessssseessssk.koook",
  "koook.kssseeeeessssssk.koook",
  "koook.kSsssSSSssssssSk.koook",
  "koook.kSssssssssssssSk.koook",
  "koook..kssssssssssssk..koook",
  "koookkkkkkkSSSSSSkkkkkkkoook",
  "koooooorrooowwwwooorrooooook",
  ".kkkooorrooowwwwooorOOOOOkk.",
  "...kooorrooowwwwooorOOOOOk..",
  "..koooorroooowwoooorOOOOOk..",
  "..koooorroooowwoooorOOOOOk..",
  "..krrrrrrrrrrrrrrrrrrrrrrk..",
  "..krrrrrrrrrrrrrrrrrrrrrrk..",
  "..koooorroooowwoooorrooook..",
  "..koooorroooowwoooorrooook..",
  "..krrrrrrrrrrrrrrrrrrrrrrk..",
  "...kooorroooowwoooorroook...",
  "...kooorroooowwoooorroook...",
  "...knnnnnnnnnnnnnnnnnnnnk...",
  "...knnnnnnnnnnnnnnnnnnnnk...",
  "....kkbbbbbBBkkbbbbbBBkk....",
  ".....kbbbbbBBkkbbbbbBBk.....",
  ".....kbbbbbBBkkbbbbbBBk.....",
  ".....kbbbbbBBkkbbbbbBBk.....",
  ".....kbbbbbBBkkbbbbbBBk.....",
  "....knnnnnnnnkknnnnnnnnk....",
  "....knnnnnnnnkknnnnnnnnk....",
  ".....kkkkkkkk..kkkkkkkk.....",
];

const BOSS_OGLUSZONY = [
  "..........kkkkkkkk..........",
  "........kkyyyyyyyykk........",
  ".......kyyllyyyyyyyykk......",
  "......kyyllyyyyyyyYYYYk.....",
  ".....kyyylyyyyyyyyYYYYk.....",
  ".....kyyyyyyyyyyyyYYYYk.....",
  "..kkkyyyyyyyyyyyyyYYYYykkk..",
  ".kyyyyyyyyyyyyyyyyyyyyyyyyk.",
  ".kYYYYYYYYYYYYYYYYYYYYYYYYk.",
  "..kkkkksssssssssssssskkkkk..",
  "......kssssssssssssssk......",
  "......kssesessssesessk......",
  "......ksssessssssesssk......",
  "......kssesesSSsesessk......",
  "......kssssssSSssssssk......",
  "......kssssssssssssssk......",
  "......ksssssesesessssk......",
  "......kssssesesesssssk......",
  "......kSssssssssssssSk......",
  "......kSssssssssssssSk......",
  ".......kssssssssssssk.......",
  "....kkkkkkkSSSSSSkkkkkkk....",
  ".kkkooorrooowwwwooorroookkk.",
  "kookooorrooowwwwooorOOOOOook",
  "kookooorrooowwwwooorOOOOOook",
  "koooooorroooowwoooorOOOOOook",
  "koooooorroooowwoooorOOOOOook",
  "koorrrrrrrrrrrrrrrrrrrrrrook",
  "koorrrrrrrrrrrrrrrrrrrrrrook",
  "koooooorroooowwoooorrooooook",
  "koooooorroooowwoooorrooooook",
  "koorrrrrrrrrrrrrrrrrrrrrrook",
  "kggkooorroooowwoooorroookggk",
  "kggkooorroooowwoooorroookggk",
  "kggknnnnnnnnnnnnnnnnnnnnkggk",
  ".kkknnnnnnnnnnnnnnnnnnnnkkk.",
  "....kkbbbbbBBkkbbbbbBBkk....",
  ".....kbbbbbBBkkbbbbbBBk.....",
  ".....kbbbbbBBkkbbbbbBBk.....",
  ".....kbbbbbBBkkbbbbbBBk.....",
  ".....kbbbbbBBkkbbbbbBBk.....",
  "....knnnnnnnnkknnnnnnnnk....",
  "....knnnnnnnnkknnnnnnnnk....",
  ".....kkkkkkkk..kkkkkkkk.....",
];

const BOSS_CHOD = [BOSS_CHOD_A, BOSS_CHOD_B, BOSS_CHOD_A, BOSS_CHOD_C];

const WORKER_SQUASHED = [
  "...yyyyyoooo..",
  "..oooollooooo.",
  "..gooooooooog.",
  ".bbbbbbbbbbbb.",
  ".kkkk......kkk",
];

const FONT = {
  A: ['###', '#.#', '###', '#.#', '#.#'],
  B: ['##.', '#.#', '##.', '#.#', '##.'],
  C: ['###', '#..', '#..', '#..', '###'],
  D: ['##.', '#.#', '#.#', '#.#', '##.'],
  E: ['###', '#..', '##.', '#..', '###'],
  I: ['###', '.#.', '.#.', '.#.', '###'],
  J: ['..#', '..#', '..#', '#.#', '###'],
  K: ['#.#', '#.#', '##.', '#.#', '#.#'],
  L: ['#..', '#..', '#..', '#..', '###'],
  M: ['#.#', '###', '###', '#.#', '#.#'],
  N: ['##.', '#.#', '#.#', '#.#', '#.#'],
  O: ['###', '#.#', '#.#', '#.#', '###'],
  P: ['###', '#.#', '###', '#..', '#..'],
  R: ['##.', '#.#', '##.', '#.#', '#.#'],
  S: ['###', '#..', '###', '..#', '###'],
  T: ['###', '.#.', '.#.', '.#.', '.#.'],
  U: ['#.#', '#.#', '#.#', '#.#', '###'],
  W: ['#.#', '#.#', '###', '###', '#.#'],
  Y: ['#.#', '#.#', '.#.', '.#.', '.#.'],
  Z: ['###', '..#', '.#.', '#..', '###'],
  0: ['###', '#.#', '#.#', '#.#', '###'],
  1: ['.#.', '##.', '.#.', '.#.', '###'],
  2: ['###', '..#', '###', '#..', '###'],
  3: ['###', '..#', '###', '..#', '###'],
  4: ['#.#', '#.#', '###', '..#', '..#'],
  5: ['###', '#..', '###', '..#', '###'],
  6: ['###', '#..', '###', '#.#', '###'],
  7: ['###', '..#', '..#', '.#.', '.#.'],
  8: ['###', '#.#', '###', '#.#', '###'],
  9: ['###', '#.#', '###', '..#', '###'],
  ':': ['...', '.#.', '...', '.#.', '...'],
  '.': ['...', '...', '...', '...', '.#.'],
  '-': ['...', '...', '###', '...', '...'],
  '=': ['...', '###', '...', '###', '...'],
  '?': ['###', '..#', '.#.', '...', '.#.'],
  '@': ['###', '#.#', '###', '#..', '###'],
  F: ['###', '#..', '##.', '#..', '#..'],
  G: ['###', '#..', '#.#', '#.#', '###'],
  H: ['#.#', '#.#', '###', '#.#', '#.#'],
  Q: ['###', '#.#', '#.#', '###', '..#'],
  V: ['#.#', '#.#', '#.#', '#.#', '.#.'],
  X: ['#.#', '#.#', '.#.', '#.#', '#.#'],
  '+': ['...', '.#.', '###', '.#.', '...'],
  '/': ['..#', '..#', '.#.', '#..', '#..'],
  '!': ['.#.', '.#.', '.#.', '...', '.#.'],
  '(': ['.#.', '#..', '#..', '#..', '.#.'],
  ')': ['.#.', '..#', '..#', '..#', '.#.'],
  '%': ['#.#', '..#', '.#.', '#..', '#.#'],
};

const ACCENTED = { 'Ó': 'O', 'Ń': 'N', 'Ś': 'S', 'Ę': 'E', 'Ą': 'A', 'Ł': 'L', 'Ż': 'Z', 'Ź': 'Z', 'Ć': 'C' };

const player = {
  x: 0,
  y: 0,
  w: CHAR.szerokosc,
  h: CHAR.wysokosc,
  vx: 0,
  vy: 0,
  onGround: false,
  crouching: false,
  facing: 1,
  animTime: 0,
};

const audio = {
  ctx: null,
  master: null,
  sfxBus: null,
  musicBus: null,
  filter: null,
  noise: null,
  muted: false,
  live: 0,
  musicOn: false,
  musicTimer: null,
  musicStep: 0,
  musicNext: 0,
  musicNodes: new Set(),
};

const NOTE_OFFSETS = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

function noteFreq(name) {
  const m = /^([A-G])(#?)(\d)$/.exec(name);
  if (!m) return 0;
  const midi = (Number(m[3]) + 1) * 12 + NOTE_OFFSETS[m[1]] + (m[2] ? 1 : 0);
  return 440 * Math.pow(2, (midi - 69) / 12);
}

function loadMute() {
  try {
    audio.muted = localStorage.getItem(SND.kluczPamieci) === '1';
  } catch (err) {
    audio.muted = false;
  }
}

function saveMute() {
  try {
    localStorage.setItem(SND.kluczPamieci, audio.muted ? '1' : '0');
  } catch (err) {
    return;
  }
}

function initAudio() {
  if (audio.ctx) {
    if (audio.ctx.state === 'suspended' && !document.hidden) audio.ctx.resume();
    return;
  }
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return;
  const ctx = new AudioCtor();
  audio.ctx = ctx;
  audio.master = ctx.createGain();
  audio.master.gain.value = audio.muted ? 0 : 1;
  audio.master.connect(ctx.destination);
  audio.sfxBus = ctx.createGain();
  audio.sfxBus.gain.value = SND.glosnoscEfektow;
  audio.sfxBus.connect(audio.master);
  audio.filter = ctx.createBiquadFilter();
  audio.filter.type = 'lowpass';
  audio.filter.frequency.value = SND.muzyka.filtrNormalny;
  audio.filter.connect(audio.master);
  audio.musicBus = ctx.createGain();
  audio.musicBus.gain.value = SND.glosnoscMuzyki;
  audio.musicBus.connect(audio.filter);
  const length = ctx.sampleRate;
  audio.noise = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = audio.noise.getChannelData(0);
  for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
  if (ctx.state === 'suspended') ctx.resume();
}

function voice(bus, kind, f, f2, start, dur, vol, nodeSet) {
  const ctx = audio.ctx;
  const src = kind === 'noise' ? ctx.createBufferSource() : ctx.createOscillator();
  const gain = ctx.createGain();
  if (kind === 'noise') {
    src.buffer = audio.noise;
    src.playbackRate.setValueAtTime(f / 1000, start);
    if (f2) src.playbackRate.exponentialRampToValueAtTime(f2 / 1000, start + dur);
  } else {
    src.type = kind;
    src.frequency.setValueAtTime(f, start);
    if (f2) src.frequency.exponentialRampToValueAtTime(f2, start + dur);
  }
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.linearRampToValueAtTime(vol, start + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + dur);
  src.connect(gain);
  gain.connect(bus);
  audio.live++;
  if (nodeSet) nodeSet.add(src);
  src.onended = () => {
    audio.live--;
    src.disconnect();
    gain.disconnect();
    if (nodeSet) nodeSet.delete(src);
  };
  src.start(start);
  src.stop(start + dur + 0.02);
}

function audioRunning() {
  return audio.ctx !== null && audio.ctx.state === 'running';
}

function playSfx(name) {
  if (!audioRunning() || audio.muted) return;
  const def = SND.efekty[name];
  if (!def || audio.live >= SND.maxGlosow) return;
  const t0 = audio.ctx.currentTime;
  for (const n of def) voice(audio.sfxBus, n.t, n.f, n.f2, t0 + (n.o || 0), n.d, n.v, null);
}

function musicStepCount() {
  return SND.muzyka.melodia.length * 8;
}

function playMusicStep(step, time, stepLen) {
  const M = SND.muzyka;
  const bar = Math.floor(step / 8);
  const pos = step % 8;
  const dur = stepLen * M.bramka;
  const tokens = M.melodia[bar].split(' ');
  if (tokens[pos] !== '.') voice(audio.musicBus, 'square', noteFreq(tokens[pos]), 0, time, dur, M.glosnoscMelodii, audio.musicNodes);
  const root = noteFreq(M.bas[bar]);
  voice(audio.musicBus, 'triangle', pos % 2 === 0 ? root : root * 2, 0, time, dur, M.glosnoscBasu, audio.musicNodes);
}

function scheduleMusic() {
  const ctx = audio.ctx;
  const M = SND.muzyka;
  if (!audioRunning() || audio.muted || !audio.musicOn) return;
  const boosted = anyPowerActive();
  audio.filter.frequency.setTargetAtTime(boosted ? M.filtrPowerup : M.filtrNormalny, ctx.currentTime, M.czasFiltru);
  const stepLen = 60 / M.bpm / 2 / (boosted ? M.tempoPowerup : 1) / (game.arena ? BOSS.tempoMuzyki : 1);
  if (audio.musicNext < ctx.currentTime) audio.musicNext = ctx.currentTime + 0.05;
  while (audio.musicNext < ctx.currentTime + M.wyprzedzenie) {
    playMusicStep(audio.musicStep, audio.musicNext, stepLen);
    audio.musicNext += stepLen;
    audio.musicStep = (audio.musicStep + 1) % musicStepCount();
  }
}

function startMusic() {
  if (!audio.ctx || audio.musicOn) return;
  audio.musicOn = true;
  audio.musicStep = 0;
  audio.musicNext = audio.ctx.currentTime + 0.1;
  audio.musicTimer = setInterval(scheduleMusic, SND.muzyka.odstepPlanowania);
}

function stopMusic() {
  if (audio.musicTimer !== null) clearInterval(audio.musicTimer);
  audio.musicTimer = null;
  audio.musicOn = false;
  for (const node of Array.from(audio.musicNodes)) {
    try {
      node.stop();
    } catch (err) {
      audio.musicNodes.delete(node);
    }
  }
}

function toggleMute() {
  audio.muted = !audio.muted;
  saveMute();
  if (audio.master) audio.master.gain.setValueAtTime(audio.muted ? 0 : 1, audio.ctx.currentTime);
}

function pauseAudio() {
  if (audio.ctx) audio.ctx.suspend();
}

function resumeAudio() {
  if (audio.ctx && !document.hidden && !game.paused && !game.portrait) audio.ctx.resume();
}

function autoPause() {
  if (PAUSABLE_STATES.includes(game.state)) setPaused(true);
}

window.addEventListener('blur', () => {
  pauseAudio();
  autoPause();
});
window.addEventListener('focus', resumeAudio);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    pauseAudio();
    autoPause();
  } else resumeAudio();
});

loadMute();

const PAUSABLE_STATES = ['gra', 'smierc', 'meta'];

const game = {
  state: 'gra',
  paused: false,
  pomoc: false,
  blad: false,
  confirmReset: false,
  portrait: false,
  attempts: 1,
  punkt: -1,
  time: 0,
  finalTime: 0,
  finishTimer: 0,
  deathTimer: 0,
  particles: [],
  spawned: [],
  powerups: [],
  odblaski: [],
  ocena: null,
  active: {},
  clock: 0,
  started: false,
  levelIndex: 0,
  cursor: 0,
  rekord: false,
  congratsAt: 0,
  komunikat: null,
  ostrzezeniePoziom: 0,
  ostrzezenieWybor: 1,
  arena: false,
  finalWin: false,
};

const progress = { odblokowane: 1, najlepsze: POZIOMY.map(() => null), oceny: POZIOMY.map(() => null), zgony: POZIOMY.map(() => 0), odblaskiMax: POZIOMY.map(() => null), czasGry: 0 };

let obstacles = [];
let enemies = [];
let projectiles = [];
let prevBottom = 0;

const SPAWN_X = CHAR.startKolumna * TILE;
let SPAWN_Y = 0;

function savedEasy() {
  try {
    const saved = localStorage.getItem(LATWY.klucz);
    return saved === null ? LATWY.domyslnie : saved === '1';
  } catch (err) {
    return LATWY.domyslnie;
  }
}

const easy = { on: savedEasy(), cache: new Map() };

function easyActive() {
  return LATWY.dostepny && easy.on;
}

function toggleEasy() {
  if (!LATWY.dostepny) return;
  easy.on = !easy.on;
  showMessage(tx(easy.on ? 'latwyWlaczony' : 'latwyWylaczony'));
  try {
    localStorage.setItem(LATWY.klucz, easy.on ? '1' : '0');
  } catch (err) {
    return;
  }
}

function safeCheckpointColumn(lvl, c) {
  const top = railTopYIn(lvl, c);
  if (top === null) return false;
  for (let k = 1; k < LATWY.plaskie; k++) if (railTopYIn(lvl, c + k) !== top || railTopYIn(lvl, c - 1) !== top) return false;
  for (const w of lvl.wrogowie) if (Math.abs(w.kolumna - c) < LATWY.odRobotnika) return false;
  for (const g of lvl.grzybiarki) if (Math.abs(g.kolumna - c) < g.zasiegRzutu / TILE + LATWY.odGrzybiarki) return false;
  for (const o of lvl.przeszkody) if (!o.jezdnia && o.kolumna >= c - LATWY.zaToczaca && o.kolumna <= c + LATWY.przedToczaca) return false;
  for (const p of lvl.platformy) if (c + 1 >= p.kolumna && c - 1 < p.kolumna + p.dlugosc) return false;
  if (lvl.boss && c >= lvl.boss.arena - 2) return false;
  return true;
}

function railTopYIn(lvl, col) {
  let top = null;
  for (const s of lvl.odcinki) if (col >= s.start && col < s.start + s.length) top = top === null ? s.top : Math.min(top, s.top);
  return top;
}

function easyCheckpoints(lvl) {
  let list = easy.cache.get(lvl);
  if (list) return list;
  const base = (lvl.punktyKontrolne || []).map(p => p.kolumna);
  const marks = [CHAR.startKolumna].concat(base, [lvl.meta.kolumna]);
  const extra = [];
  for (let i = 0; i + 1 < marks.length; i++) {
    const a = marks[i];
    const b = marks[i + 1];
    if (b - a < LATWY.minOdcinek) continue;
    const mid = Math.round((a + b) / 2);
    for (let d = 0; d <= Math.floor((b - a) * LATWY.szukanie); d++) {
      const c = safeCheckpointColumn(lvl, mid + d) ? mid + d : safeCheckpointColumn(lvl, mid - d) ? mid - d : null;
      if (c !== null) {
        extra.push(c);
        break;
      }
    }
  }
  list = base.concat(extra).sort((p, q) => p - q).map(c => ({ kolumna: c }));
  easy.cache.set(lvl, list);
  return list;
}

function checkpoints() {
  if (easyActive()) return easyCheckpoints(level);
  return level.punktyKontrolne || [];
}

function respawn() {
  const list = checkpoints();
  if (game.punkt >= 0 && game.punkt < list.length) {
    const col = list[game.punkt].kolumna;
    const spawnCol = col + FLAG.odstepRespawnuKolumn;
    player.x = spawnCol * TILE + (TILE - CHAR.szerokosc) / 2;
    player.y = railTopY(spawnCol) - CHAR.wysokosc;
  } else {
    player.x = SPAWN_X;
    player.y = SPAWN_Y;
  }
  player.h = CHAR.wysokosc;
  player.vx = 0;
  player.vy = 0;
  player.onGround = false;
  player.crouching = false;
  player.facing = 1;
  player.animTime = 0;
  player.px = player.x;
  player.pb = player.y + player.h;
  groundFeetY = player.y + player.h;
  updateCamera();
}

function createEnemy(entry, index) {
  const top = railTopY(entry.kolumna);
  if (top === null) return null;
  const zasieg = entry.zasieg !== undefined ? entry.zasieg : ENEMY.zasiegDomyslny;
  return {
    typ: 'robotnik',
    id: index,
    x: entry.kolumna * TILE + (TILE - ENEMY.szerokosc) / 2,
    y: top - ENEMY.wysokosc,
    w: ENEMY.szerokosc,
    h: ENEMY.wysokosc,
    dir: -1,
    groundTop: top,
    minX: (entry.kolumna - zasieg) * TILE,
    maxX: (entry.kolumna + zasieg + 1) * TILE,
    state: 'zywy',
    timer: 0,
    animTime: 0,
    dead: false,
  };
}

function createPicker(entry, index) {
  const top = entry.wysokosc !== undefined ? (USTAWIENIA.platformy.rzadBazowy - entry.wysokosc) * TILE : railTopY(entry.kolumna);
  if (top === null) return null;
  return {
    typ: 'grzybiarka',
    id: 100 + index,
    x: entry.kolumna * TILE + (TILE - ENEMY.szerokosc) / 2,
    y: top - ENEMY.wysokosc,
    w: ENEMY.szerokosc,
    h: ENEMY.wysokosc,
    dir: -1,
    zasiegRzutu: entry.zasiegRzutu,
    phase: 'schylona',
    phaseTimer: 0,
    state: 'zywy',
    timer: 0,
    animTime: 0,
    dead: false,
  };
}

function pickerInRange(e) {
  const dx = Math.abs(player.x + player.w / 2 - (e.x + e.w / 2));
  const dy = Math.abs(player.y + player.h - (e.y + e.h));
  return dx <= e.zasiegRzutu && dy <= PICKER.zasiegPionowy;
}

function throwBasket(e) {
  const k = PICKER.kosz;
  const ox = e.x + e.w / 2 + e.dir * 6;
  const oy = e.y + 6;
  const tx = player.x + player.w / 2;
  const ty = player.y + player.h - k.celWysokosc;
  const dx = tx - ox;
  const t = Math.max(k.minCzasLotu, Math.abs(dx) / k.predkosc);
  projectiles.push({
    owner: e.id,
    x: ox - k.rozmiar / 2,
    y: oy - k.rozmiar / 2,
    w: k.rozmiar,
    h: k.rozmiar,
    vx: dx / t,
    vy: (ty - oy - 0.5 * k.grawitacja * t * t) / t,
    rot: 0,
    omega: e.dir * k.obrotNaSekunde,
    dead: false,
  });
  playSfx('rzut');
}

function updatePicker(e, dt) {
  const toPlayer = Math.sign(player.x + player.w / 2 - (e.x + e.w / 2));
  if (toPlayer !== 0) e.dir = toPlayer;
  e.phaseTimer += dt;
  if (e.phase === 'schylona' && e.phaseTimer >= PICKER.czasSchylenia) {
    e.phase = 'zamach';
    e.phaseTimer = 0;
  } else if (e.phase === 'zamach' && e.phaseTimer >= PICKER.czasZamachu) {
    if (game.state === 'gra' && pickerInRange(e)) throwBasket(e);
    e.phase = 'schylona';
    e.phaseTimer = 0;
  }
}

function projectileHitsWorld(p) {
  const c0 = Math.floor(p.x / TILE);
  const c1 = Math.floor((p.x + p.w - PHYS.epsilon) / TILE);
  const r0 = Math.floor(p.y / TILE);
  const r1 = Math.floor((p.y + p.h - PHYS.epsilon) / TILE);
  for (let r = r0; r <= r1; r++) {
    for (let c = c0; c <= c1; c++) {
      if (isSolid(c, r)) return true;
      if (isPlatform(c, r) && p.y < r * TILE + PLAT.grubosc && p.y + p.h > r * TILE) return true;
    }
  }
  return false;
}

function findEnemy(id) {
  for (let i = 0; i < enemies.length; i++) {
    if (enemies[i].id === id) return enemies[i];
  }
  return undefined;
}

function stepProjectiles(dt) {
  const k = PICKER.kosz;
  for (const p of projectiles) {
    const owner = findEnemy(p.owner);
    if (!owner || owner.state !== 'zywy') {
      p.dead = true;
      continue;
    }
    p.vy += k.grawitacja * dt;
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.rot += p.omega * dt;
    if (projectileHitsWorld(p)) {
      p.dead = true;
      playSfx('uderzenieKosza');
      fxShake('uderzenieKosza', p.x + p.w / 2);
    }
  }
  let n = 0;
  for (let i = 0; i < projectiles.length; i++) {
    const p = projectiles[i];
    if (!p.dead && p.x > camX - 40 && p.x < camX + SCREEN_W + 40 && p.y < SCREEN_H + 40) projectiles[n++] = p;
  }
  projectiles.length = n;
}

function checkProjectileHits() {
  const tol = PICKER.kosz.tolerancja;
  for (const p of projectiles) {
    const hit = player.x < p.x + p.w - tol && player.x + player.w > p.x + tol && player.y < p.y + p.h - tol && player.y + player.h > p.y + tol;
    if (hit) {
      die();
      return;
    }
  }
}

let boss = null;
let bossShots = [];
let bossBaskets = [];
const bossParts = [];

function arenaLeftX() {
  return level.boss.arena * TILE;
}

function arenaRightX() {
  return (level.boss.arena + level.boss.szerokosc) * TILE;
}

function setArenaWall(on) {
  const A = level.boss;
  if (!A) return;
  const top = railTopY(A.arena) / TILE;
  for (let r = 0; r < top; r++) map[r][A.arena] = on ? T_WALL : T_EMPTY;
}

function surfaceTop(col) {
  for (let r = 0; r < ROWS; r++) {
    const t = map[r][col];
    if (t === T_RAIL || t === T_PLAT) return r * TILE;
  }
  return GROUND_Y;
}

function createBoss() {
  const A = level.boss;
  const col = A.arena + BOSS.startKolumna;
  let lo = (A.arena + 1) * TILE;
  let hi = (A.arena + A.szerokosc - 1) * TILE - BOSS.szerokosc;
  const mid = (A.arena + A.szerokosc / 2) * TILE;
  for (const p of level.platformy) {
    if (p.kolumna < A.arena) continue;
    const left = p.kolumna * TILE;
    const right = (p.kolumna + p.dlugosc) * TILE;
    if (right <= mid) lo = Math.max(lo, right + BOSS.odPokladu * TILE);
    else hi = Math.min(hi, left - BOSS.odPokladu * TILE - BOSS.szerokosc);
  }
  return {
    x: col * TILE,
    y: railTopY(col) - BOSS.wysokosc,
    w: BOSS.szerokosc,
    h: BOSS.wysokosc,
    hp: BOSS.zycia,
    stan: 'czeka',
    timer: 0,
    cooldown: BOSS.pierwszyAtak,
    licznik: 0,
    atak: '',
    dir: -1,
    animTime: 0,
    przenikalny: false,
    czasPokonania: 0,
    cel: 0,
    lo,
    hi,
  };
}

function resetArena() {
  bossShots = [];
  bossBaskets = [];
  bossParts.length = 0;
  game.arena = false;
  if (!level.boss) {
    boss = null;
    return;
  }
  setArenaWall(false);
  boss = createBoss();
}

function lockArena() {
  game.arena = true;
  setArenaWall(true);
  boss.stan = 'chod';
  showMessage(tx('bossPodpowiedz'));
}

function bossPhase() {
  return Math.min(BOSS.zycia - boss.hp, BOSS.predkosci.length - 1);
}

function playerDeck() {
  const col = Math.floor((player.x + player.w / 2) / TILE);
  for (const p of level.platformy) {
    if (p.kolumna < level.boss.arena || col < p.kolumna || col >= p.kolumna + p.dlugosc) continue;
    if (Math.abs(groundFeetY - (PLAT.rzadBazowy - p.wysokosc) * TILE) < 1) return p;
  }
  return null;
}

function bossAttack(b) {
  const face = Math.sign(player.x + player.w / 2 - (b.x + b.w / 2));
  if (face !== 0) b.dir = face;
  if (b.atak === 'kosze') {
    spawnBaskets();
    return;
  }
  const R = BOSS.rzut;
  const cfg = OBST.typy[b.atak];
  const size = cfg.srednica;
  const x0 = b.x + (b.w - size) / 2;
  const y0 = b.y - size;
  const deck = playerDeck();
  let tx;
  let ty;
  let t;
  if (deck) {
    const col = b.x > deck.kolumna * TILE ? deck.kolumna + deck.dlugosc - 1 : deck.kolumna;
    tx = col * TILE + (TILE - size) / 2;
    ty = (PLAT.rzadBazowy - deck.wysokosc) * TILE - size;
    t = R.czasLotuPoklad;
  } else {
    tx = b.dir > 0 ? b.x + b.w + R.przedSoba : b.x - R.przedSoba - size;
    const top = railTopY(Math.floor((tx + size / 2) / TILE));
    ty = (top === null ? b.y + b.h : top) - size;
    t = R.czasLotu;
  }
  bossShots.push({
    typ: b.atak,
    cfg,
    x: x0,
    y: y0,
    w: size,
    h: size,
    vx: (tx - x0) / t,
    vy: (ty - y0 - 0.5 * PHYS.grawitacja * t * t) / t,
    rot: 0,
    toczy: false,
    dir: b.dir,
    wiek: 0,
    dead: false,
  });
  playSfx('rzut');
}

function spawnBaskets() {
  const K = BOSS.kosze;
  const A = level.boss;
  const size = PICKER.kosz.rozmiar;
  const minCol = A.arena + 1;
  const maxCol = A.arena + A.szerokosc - 2;
  const c1 = Math.max(minCol, Math.min(maxCol, Math.floor((player.x + player.w / 2) / TILE)));
  const c2 = c1 + K.odstepKolumn <= maxCol ? c1 + K.odstepKolumn : c1 - K.odstepKolumn;
  for (const c of [c1, c2]) {
    bossBaskets.push({ col: c, x: c * TILE + (TILE - size) / 2, y: K.startY, w: size, h: size, top: surfaceTop(c), t: 0, rot: 0, dead: false });
  }
}

function updateBossParts(dt) {
  const R = BOSS.rozpad;
  for (const p of bossParts) {
    p.vy += R.grawitacja * dt;
    p.x += p.vx * dt;
    p.y += p.vy * dt;
  }
}

function updateBoss(dt) {
  const b = boss;
  const B = BOSS;
  if (b.stan === 'czeka') return;
  if (b.stan === 'smierc') {
    updateBossParts(dt);
    b.timer += dt;
    if (b.timer >= B.rozpad.czas) bossDefeated();
    return;
  }
  const phase = bossPhase();
  if (b.stan === 'ogluszony') {
    b.timer -= dt;
    if (b.timer <= 0) {
      b.stan = 'odwrot';
      const center = player.x + player.w / 2;
      b.cel = Math.abs(center - (b.lo + b.w / 2)) > Math.abs(center - (b.hi + b.w / 2)) ? b.lo : b.hi;
    }
    return;
  }
  if (b.stan === 'odwrot') {
    const diff = b.cel - b.x;
    const step = B.predkosci[phase] * B.mnoznikOdwrotu * dt;
    b.dir = diff > 0 ? 1 : -1;
    if (Math.abs(diff) > step) {
      b.x += b.dir * step;
      b.animTime += dt;
    } else {
      b.x = b.cel;
      b.stan = 'chod';
      b.cooldown = B.atakPoOdwrocie;
    }
    return;
  }
  if (b.stan === 'zapowiedz') {
    b.timer -= dt;
    if (b.timer <= 0) {
      bossAttack(b);
      b.stan = 'poAtaku';
      b.timer = B.czasPoAtaku;
    }
    return;
  }
  if (b.stan === 'poAtaku') {
    b.timer -= dt;
    if (b.timer <= 0) {
      b.stan = 'chod';
      b.cooldown = B.odstepyAtakow[phase];
    }
    return;
  }
  const center = player.x + player.w / 2;
  const target = Math.max(b.lo, Math.min(b.hi, center - b.w / 2));
  const diff = target - b.x;
  const step = B.predkosci[phase] * dt;
  if (Math.abs(diff) > step) {
    b.x += Math.sign(diff) * step;
    b.animTime += dt;
  } else {
    b.x = target;
    b.animTime = 0;
  }
  const face = Math.sign(center - (b.x + b.w / 2));
  if (face !== 0) b.dir = face;
  b.cooldown -= dt;
  const visible = b.x >= camX + B.marginesWidocznosci && b.x + b.w <= camX + SCREEN_W - B.marginesWidocznosci;
  if (b.cooldown <= 0 && visible && bossShots.length === 0 && bossBaskets.length === 0) {
    const list = B.ataki[phase];
    b.atak = list[b.licznik % list.length];
    b.licznik++;
    b.stan = 'zapowiedz';
    b.timer = B.czasZapowiedzi;
    b.animTime = 0;
    playSfx('zapowiedz');
  }
}

function shotLands(s, oldBottom) {
  const col = Math.floor((s.x + s.w / 2) / TILE);
  const row = Math.floor((s.y + s.h - PHYS.epsilon) / TILE);
  if (isSolid(col, row) || (isPlatform(col, row) && oldBottom <= row * TILE + PHYS.epsilon)) {
    s.y = row * TILE - s.h;
    s.vy = 0;
    return true;
  }
  return false;
}

function stepBossShots(dt) {
  const R = BOSS.rzut;
  for (const s of bossShots) {
    s.wiek += dt;
    s.rot -= s.dir * R.obrot * dt;
    s.x += s.vx * dt;
    if (s.toczy) {
      const leadCol = Math.floor((s.vx < 0 ? s.x : s.x + s.w - PHYS.epsilon) / TILE);
      const r0 = Math.floor(s.y / TILE);
      const r1 = Math.floor((s.y + s.h - PHYS.epsilon) / TILE);
      for (let r = r0; r <= r1; r++) {
        if (isSolid(leadCol, r)) s.dead = true;
      }
    }
    const oldBottom = s.y + s.h;
    s.vy = Math.min(s.vy + PHYS.grawitacja * dt, PHYS.maxPredkoscSpadania);
    s.y += s.vy * dt;
    if (s.vy > 0 && shotLands(s, oldBottom) && !s.toczy) {
      s.toczy = true;
      const d = Math.sign(player.x + player.w / 2 - (s.x + s.w / 2));
      if (d !== 0) s.dir = d;
      s.vx = s.dir * R.predkosci[s.typ];
    }
    if (s.wiek > R.zycie || s.y > SCREEN_H + 20 || s.x + s.w < arenaLeftX() || s.x > arenaRightX()) s.dead = true;
  }
  let n = 0;
  for (let i = 0; i < bossShots.length; i++) {
    if (!bossShots[i].dead) bossShots[n++] = bossShots[i];
  }
  bossShots.length = n;
}

function basketHitsPlayer(k) {
  const tol = PICKER.kosz.tolerancja;
  return player.x < k.x + k.w - tol && player.x + player.w > k.x + tol && player.y < k.y + k.h - tol && player.y + player.h > k.y + tol;
}

function stepBossBaskets(dt) {
  const K = BOSS.kosze;
  for (const k of bossBaskets) {
    k.t += dt;
    const fall = k.t - (K.ostrzezenie - K.czasSpadania);
    if (fall > 0) {
      const f = Math.min(1, fall / K.czasSpadania);
      k.y = K.startY + (k.top - k.h - K.startY) * f * f;
      k.rot += PICKER.kosz.obrotNaSekunde * dt;
    }
    if (k.t >= K.ostrzezenie) {
      k.y = k.top - k.h;
      if (game.state === 'gra' && basketHitsPlayer(k)) die();
      k.dead = true;
      playSfx('uderzenieKosza');
      fxDust('ladowanie', k.x + k.w / 2, k.top, 0);
      fxShake('uderzenieKosza', k.x + k.w / 2);
    }
  }
  let n = 0;
  for (let i = 0; i < bossBaskets.length; i++) {
    if (!bossBaskets[i].dead) bossBaskets[n++] = bossBaskets[i];
  }
  bossBaskets.length = n;
}

function updateArena(dt) {
  if (!boss) return;
  if (!game.arena && player.x + player.w / 2 >= (level.boss.arena + BOSS.wejscieKolumn) * TILE) lockArena();
  updateBoss(dt);
  if (game.state !== 'gra') return;
  stepBossShots(dt);
  stepBossBaskets(dt);
}

function hitBoss() {
  const b = boss;
  b.hp--;
  b.przenikalny = true;
  bossShots.length = 0;
  bossBaskets.length = 0;
  const left = arenaLeftX();
  for (const p of game.powerups) {
    if (p.x >= left) p.taken = false;
  }
  playSfx('bossTrafienie');
  fxShake('bossTrafienie');
  if (b.hp <= 0) {
    startBossDeath();
    return;
  }
  b.stan = 'ogluszony';
  b.timer = BOSS.czasOgluszenia;
}

function startBossDeath() {
  const b = boss;
  const R = BOSS.rozpad;
  b.stan = 'smierc';
  b.timer = 0;
  b.czasPokonania = game.time;
  bossParts.length = 0;
  const rows = BOSS_OGLUSZONY;
  const bx = snapPx(b.x);
  const by = snapPx(b.y);
  let n = 0;
  for (let iy = 0; iy < rows.length; iy++) {
    for (let ix = 0; ix < b.w; ix++) {
      const ch = rows[iy][b.dir > 0 ? ix : b.w - 1 - ix];
      if (ch === '.') continue;
      const h1 = hash(n * 7 + 911);
      const h2 = hash(n * 7 + 912);
      bossParts.push({
        x: bx + ix,
        y: by + iy,
        px: bx + ix,
        py: by + iy,
        vx: (ix - b.w / 2) * R.rozrzutX + (h1 % (2 * R.rozrzutLosowy + 1)) - R.rozrzutLosowy,
        vy: -(R.impuls + (h2 % (R.impulsLosowy + 1))) + (iy - b.h / 2),
        color: BOSS.paleta[ch],
      });
      n++;
    }
  }
  playSfx('bossSmierc');
  stopMusic();
}

function bossDefeated() {
  playSfx('fanfara');
  recordResult(boss.czasPokonania);
  game.finalWin = true;
  openCongrats();
}

function bossHitbox() {
  const H = BOSS.hitbox;
  return boss.x + H.x < player.x + player.w && player.x < boss.x + H.x + H.szerokosc && boss.y + H.y < player.y + player.h && player.y < boss.y + boss.h;
}

function checkBossHits() {
  if (!boss || boss.stan === 'czeka' || boss.stan === 'smierc') return;
  const overlap = bossHitbox();
  if (!overlap) {
    boss.przenikalny = false;
  } else if (boss.stan !== 'ogluszony' && !boss.przenikalny) {
    const vulnerable = boss.stan !== 'odwrot';
    if (player.vy > 0 && prevBottom <= boss.y + BOSS.tolerancjaLadowania) {
      player.y = boss.y - player.h;
      player.vy = -BOSS.odbicie;
      player.onGround = false;
      if (vulnerable) hitBoss();
      else playSfx('odbicie');
    } else if (vulnerable && hasEffect('zabijanieWrogow')) {
      hitBoss();
    } else {
      die();
      return;
    }
  }
  const tol = OBST.tolerancjaHitboxu;
  for (const s of bossShots) {
    const ox = s.x + tol;
    const oy = s.y + tol;
    const hit = player.x < ox + s.w - 2 * tol && player.x + player.w > ox && player.y < oy + s.h - 2 * tol && player.y + player.h > oy;
    if (!hit) continue;
    if (player.vy > 0 && prevBottom <= oy + OBST.marginesLadowania) {
      player.y = oy - player.h;
      player.vy = -OBST.odbicie;
      player.onGround = false;
      playSfx('odbicie');
    } else {
      die();
      return;
    }
  }
  const K = BOSS.kosze;
  for (const k of bossBaskets) {
    if (k.t < K.ostrzezenie - K.czasSpadania) continue;
    if (basketHitsPlayer(k)) {
      die();
      return;
    }
  }
}

function updateEnemy(e, dt) {
  if (e.state === 'splaszczony') {
    e.timer += dt;
    if (e.timer >= ENEMY.czasSplaszczenia) e.dead = true;
    return;
  }
  if (e.typ === 'grzybiarka') {
    updatePicker(e, dt);
    return;
  }
  e.animTime += dt;
  const move = e.dir * ENEMY.predkosc * dt;
  e.x += move;
  const leadX = e.dir > 0 ? e.x + e.w : e.x;
  const blocked = railTopY(Math.floor(leadX / TILE)) !== e.groundTop;
  if (blocked || e.x < e.minX || e.x + e.w > e.maxX) {
    e.x -= move;
    e.dir = -e.dir;
  }
}

function stepEnemies(dt) {
  for (const e of enemies) updateEnemy(e, dt);
  let n = 0;
  for (let i = 0; i < enemies.length; i++) {
    if (!enemies[i].dead) enemies[n++] = enemies[i];
  }
  enemies.length = n;
}

function checkEnemyHits() {
  const tol = ENEMY.tolerancjaHitboxu;
  for (const e of enemies) {
    if (e.state !== 'zywy') continue;
    const off = e.typ === 'grzybiarka' && e.phase === 'schylona' ? PICKER.zgiecie : 0;
    const ex = e.x + tol;
    const ey = e.y + off + tol;
    const ew = e.w - 2 * tol;
    const eh = e.h - off - 2 * tol;
    const hit = player.x < ex + ew && player.x + player.w > ex && player.y < ey + eh && player.y + player.h > ey;
    if (!hit) continue;
    if (player.vy > 0 && prevBottom <= e.y + off + ENEMY.tolerancjaLadowania) {
      e.state = 'splaszczony';
      e.timer = 0;
      player.y = e.y + off - player.h;
      player.vy = -ENEMY.odbicie;
      player.onGround = false;
      playSfx('zabicieSkok');
      fxShake('zabicieWroga');
    } else if (hasEffect('zabijanieWrogow')) {
      e.state = 'splaszczony';
      e.timer = 0;
      playSfx('zabicieBok');
      fxShake('zabicieWroga');
    } else {
      die();
      return;
    }
  }
}

function createPowerup(entry) {
  const top = entry.wysokosc !== undefined ? (PLAT.rzadBazowy - entry.wysokosc) * TILE : railTopY(entry.kolumna);
  if (top === null) return null;
  return {
    typ: entry.typ,
    cfg: POWER.typy[entry.typ],
    x: entry.kolumna * TILE + (TILE - POWER.szerokosc) / 2,
    y: top - POWER.wysokosc - POWER.unoszenie,
    w: POWER.szerokosc,
    h: POWER.wysokosc,
    taken: false,
  };
}

function anyPowerActive() {
  for (const typ in game.active) return true;
  return false;
}

function hasEffect(name) {
  for (const typ in game.active) {
    if (POWER.typy[typ].efekt === name) return true;
  }
  return false;
}

function multiplier(effect) {
  let m = 1;
  for (const typ in game.active) {
    const cfg = POWER.typy[typ];
    if (cfg.efekt === effect) m *= cfg.mnoznik;
  }
  return m;
}

function collectPowerups() {
  for (const p of game.powerups) {
    if (p.taken) continue;
    const hit = player.x < p.x + p.w && player.x + player.w > p.x && player.y < p.y + p.h && player.y + player.h > p.y;
    if (hit) {
      p.taken = true;
      game.active[p.typ] = p.cfg.czas * (easyActive() ? LATWY.mnoznikPowerupow : 1);
      playSfx(p.cfg.dzwiek);
      fxFlash(snapPx(p.x) + (p.w >> 1), snapPx(p.y) + (p.h >> 1), p.cfg.kolor);
    }
  }
}

function updateActivePowerups(dt) {
  for (const typ in game.active) {
    const before = game.active[typ];
    const after = before - dt;
    game.active[typ] = after;
    if (after > 0 && after < POWER.miganieOstatnieSekundy && Math.floor(before / SND.ostrzezenieCo) !== Math.floor(after / SND.ostrzezenieCo)) {
      playSfx('ostrzezenie');
    }
    if (after <= 0) delete game.active[typ];
  }
}

function applyLevel(index) {
  game.levelIndex = index;
  level = POZIOMY[index];
  map = buildLevel();
  LEVEL_COLS = map[0].length;
  LEVEL_W = LEVEL_COLS * TILE;
  FINISH_X = level.meta.kolumna * TILE;
  SPAWN_Y = level.odcinki[0].top * TILE - CHAR.wysokosc;
  const M = level.motyw;
  FOREST = USTAWIENIA.las.map((cfg, i) => {
    const themed = Object.assign({}, cfg, { kolor: M.las[i] }, M.lasWarstwy ? M.lasWarstwy[i] : null, M.miasto ? M.miasto.warstwy[i] : null);
    if (M.snieg && M.snieg.czapy) themed.czapa = M.snieg.czapy[i];
    if (M.miasto && i === M.miasto.warstwaNeonow) themed.neony = M.miasto;
    return { cfg: themed, variants: M.miasto ? makeBuildingVariants(themed, M.miasto) : makeTreeVariants(themed) };
  });
  RAIL = Object.assign({}, BARRIER, level.motyw.barierka);
  DECK = Object.assign({}, PLAT, level.motyw.wiadukt);
  LAMPS = findLampColumns();
  buildCars();
  buildStaticLayers();
}

function findLampColumns() {
  const L = level.motyw.latarnie;
  if (!L) return [];
  const cols = [];
  for (let c = L.przesuniecie; c < LEVEL_COLS; c += L.co) {
    if (railTopY(c) === null) continue;
    const covered = level.platformy.some(p => c + L.wolneKolumny >= p.kolumna && c - L.wolneKolumny < p.kolumna + p.dlugosc);
    if (!covered) cols.push(c);
  }
  return cols;
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(USTAWIENIA.postep.klucz);
    if (!raw) return;
    const data = JSON.parse(raw);
    const unlocked = Math.floor(Number(data.odblokowane));
    if (unlocked >= 1 && unlocked <= POZIOMY.length) progress.odblokowane = unlocked;
    if (Array.isArray(data.oceny)) {
      progress.oceny = POZIOMY.map((_, i) => (Number.isInteger(data.oceny[i]) && data.oceny[i] >= 1 && data.oceny[i] <= 3 ? data.oceny[i] : null));
    }
    if (Array.isArray(data.najlepsze)) {
      progress.najlepsze = POZIOMY.map((_, i) => (typeof data.najlepsze[i] === 'number' && data.najlepsze[i] > 0 ? data.najlepsze[i] : null));
    }
    if (Array.isArray(data.zgony)) {
      progress.zgony = POZIOMY.map((_, i) => (Number.isInteger(data.zgony[i]) && data.zgony[i] >= 0 ? data.zgony[i] : 0));
    }
    if (Array.isArray(data.odblaskiMax)) {
      progress.odblaskiMax = POZIOMY.map((_, i) => (Number.isInteger(data.odblaskiMax[i]) && data.odblaskiMax[i] >= 0 ? data.odblaskiMax[i] : null));
    }
    if (typeof data.czasGry === 'number' && data.czasGry >= 0 && isFinite(data.czasGry)) progress.czasGry = data.czasGry;
  } catch (err) {
    return;
  }
}

function saveProgress() {
  try {
    localStorage.setItem(USTAWIENIA.postep.klucz, JSON.stringify({ odblokowane: progress.odblokowane, najlepsze: progress.najlepsze, oceny: progress.oceny, zgony: progress.zgony, odblaskiMax: progress.odblaskiMax, czasGry: Math.round(progress.czasGry) }));
  } catch (err) {
    return;
  }
}

function openSelect() {
  if (game.started) saveProgress();
  stopMusic();
  game.pomoc = false;
  game.confirmReset = false;
  game.state = 'wybor';
  fxReset();
  game.cursor = Math.min(game.levelIndex, progress.odblokowane - 1);
  input.jumpPressed = false;
  input.anyPressed = false;
  for (const code in keys) keys[code] = false;
  releaseTouch();
}

function startLevel(index) {
  game.finalWin = false;
  applyLevel(index);
  ghostLoad();
  game.attempts = 1;
  game.punkt = -1;
  game.started = true;
  resetLevel();
}

function nextLevel() {
  if (game.levelIndex + 1 < POZIOMY.length) requestLevel(game.levelIndex + 1);
  else openCongrats();
}

function totalBestTime() {
  return progress.najlepsze.reduce((sum, t) => sum + (typeof t === 'number' ? t : 0), 0);
}

function openCongrats() {
  game.state = 'gratulacje';
  game.congratsAt = game.clock;
  input.jumpPressed = false;
  input.anyPressed = false;
  for (const code in keys) keys[code] = false;
  releaseTouch();
}

function congratsReady() {
  return game.clock - game.congratsAt >= FINISH.opoznienieRestartu;
}

function menuKey(code) {
  const n = progress.odblokowane;
  const cols = UI.wyborKolumny;
  if (code === 'ArrowLeft' || code === 'KeyA') game.cursor = (game.cursor + n - 1) % n;
  else if (code === 'ArrowRight' || code === 'KeyD') game.cursor = (game.cursor + 1) % n;
  else if ((code === 'ArrowUp' || code === 'KeyW') && game.cursor - cols >= 0) game.cursor -= cols;
  else if ((code === 'ArrowDown' || code === 'KeyS') && game.cursor + cols < n) game.cursor += cols;
  else if (code === 'Enter' || code === 'NumpadEnter') requestLevel(game.cursor);
}

function levelTileRect(i) {
  const cols = UI.wyborKolumny;
  const w = UI.wyborKafelSzerokosc;
  const h = UI.wyborKafelWysokosc;
  const g = UI.wyborKafelOdstep;
  const x0 = Math.round((SCREEN_W - cols * w - (cols - 1) * g) / 2);
  return { x: x0 + (i % cols) * (w + g), y: UI.wyborSiatkaY + Math.floor(i / cols) * (h + g), w, h };
}

function createReflector(entry, index) {
  const top = entry.wysokosc !== undefined ? (PLAT.rzadBazowy - entry.wysokosc) * TILE : railTopY(entry.kolumna);
  if (top === null) return null;
  return {
    index,
    kolor: entry.kolor,
    cfg: REFL.kolory[entry.kolor],
    x: entry.kolumna * TILE + (TILE - REFL.szerokosc) / 2,
    y: top - REFL.wysokosc - REFL.unoszenie,
    w: REFL.szerokosc,
    h: REFL.wysokosc,
    taken: false,
  };
}

function levelReflectors() {
  return REFL.rozmieszczenie[game.levelIndex + 1] || [];
}

function resetReflectors() {
  const previous = game.odblaski;
  game.odblaski = levelReflectors().map(createReflector).filter(r => r !== null);
  if (game.punkt < 0) return;
  for (const r of game.odblaski) {
    const old = previous.find(q => q.index === r.index);
    if (old && old.taken) r.taken = true;
  }
}

function collectReflectors() {
  const tol = REFL.tolerancja;
  for (const r of game.odblaski) {
    if (r.taken) continue;
    const hit = player.x < r.x + r.w + tol && player.x + player.w > r.x - tol && player.y < r.y + r.h + tol && player.y + player.h > r.y - tol;
    if (hit) {
      r.taken = true;
      playSfx(REFL.dzwiek);
      fxFlash(snapPx(r.x) + (r.w >> 1), snapPx(r.y) + (r.h >> 1), r.cfg.kolor);
    }
  }
}

function reflectorCount() {
  let n = 0;
  for (let i = 0; i < game.odblaski.length; i++) if (game.odblaski[i].taken) n++;
  return n;
}

function rateLevel() {
  const total = game.odblaski.length;
  const got = reflectorCount();
  const timeOk = game.time <= OCENA.czasyOdniesienia[game.levelIndex];
  const reflectorsOk = total === 0 || got / total >= OCENA.progOdblaskow;
  const noDeath = game.attempts === 1;
  const stars = Math.max(1, [timeOk, reflectorsOk, noDeath].filter(Boolean).length);
  return { gwiazdki: stars, czasOk: timeOk, odblaskiOk: reflectorsOk, bezSmierci: noDeath, zebrane: got, razem: total };
}

function resetLevel() {
  resetArena();
  game.powerups = level.powerupy.map(createPowerup).filter(p => p !== null);
  resetReflectors();
  game.active = {};
  enemies = level.wrogowie.map(createEnemy).concat(level.grzybiarki.map(createPicker)).filter(e => e !== null);
  projectiles = [];
  obstacles = [];
  game.spawned = level.przeszkody.map(() => false);
  game.particles = [];
  fxReset();
  if (game.punkt < 0) {
    game.time = 0;
    ghostReset();
  }
  game.deathTimer = 0;
  game.state = 'gra';
  input.jumpPressed = false;
  respawn();
  if (game.started) {
    stopMusic();
    startMusic();
  }
}

const LEFT_KEYS = ['ArrowLeft', 'KeyA'];
const RIGHT_KEYS = ['ArrowRight', 'KeyD'];
const JUMP_KEYS = ['Space', 'ArrowUp', 'KeyW'];
const DOWN_KEYS = ['ArrowDown', 'KeyS'];
const ALL_KEYS = [...LEFT_KEYS, ...RIGHT_KEYS, ...JUMP_KEYS, ...DOWN_KEYS];

const keys = {};
const input = { jumpPressed: false, anyPressed: false };

const touch = { aktywny: false, wskazniki: new Map() };

const TOUCH_ICONS = {
  lewo: ['....#..', '...##..', '..###..', '.####..', '..###..', '...##..', '....#..'],
  prawo: ['..#....', '..##...', '..###..', '..####.', '..###..', '..##...', '..#....'],
  pauza: ['.......', '.##.##.', '.##.##.', '.##.##.', '.##.##.', '.##.##.', '.......'],
  pomoc: ['..###..', '.#...#.', '.....#.', '....#..', '...#...', '.......', '...#...'],
  pelny: ['##...##', '#.....#', '.......', '.......', '.......', '#.....#', '##...##'],
};

function touchHeld(name) {
  for (const v of touch.wskazniki.values()) if (v === name) return true;
  return false;
}

function releaseTouch() {
  touch.wskazniki.clear();
}

function anyDown(list) {
  if (list.some(code => keys[code])) return true;
  const name = list === LEFT_KEYS ? 'lewo' : list === RIGHT_KEYS ? 'prawo' : list === JUMP_KEYS ? 'skok' : list === DOWN_KEYS ? 'kucnij' : null;
  return name !== null && touchHeld(name);
}

function fullscreenSupported() {
  const el = document.documentElement;
  return typeof el.requestFullscreen === 'function' || typeof el.webkitRequestFullscreen === 'function';
}

function canvasScale() {
  return canvas.getBoundingClientRect().width / SCREEN_W || 1;
}

function touchLayout() {
  const T = DOTYK;
  const s = canvasScale();
  const sz = (v, min) => Math.max(v, Math.ceil(min / s));
  const arrow = sz(T.strzalka, T.minRozmiarPx);
  const jump = Math.max(sz(T.skok, T.minRozmiarPx), arrow);
  const crouch = sz(T.kucnij, T.minRozmiarPx);
  const m = T.margines;
  const g = T.odstep;
  const bottom = SCREEN_H - m;
  const box = (x, y, w) => ({ x: Math.round(x), y: Math.round(y), w, h: w });
  const controls = {
    lewo: box(m, bottom - arrow, arrow),
    prawo: box(m + arrow + g, bottom - arrow, arrow),
    skok: box(SCREEN_W - m - jump, bottom - jump, jump),
  };
  controls.kucnij = box(controls.skok.x - g - crouch, bottom - crouch, crouch);
  const top = [];
  if (game.state !== 'pomoc' && game.state !== 'ogrze') {
    if (game.state !== 'wybor' && game.state !== 'gratulacje' && game.state !== 'ostrzezenie' && game.state !== 'statystyki') top.push('akcja');
    top.push('dzwiek');
    if (fullscreenSupported()) top.push('pelny');
  }
  const t = sz(T.gora.rozmiar, T.minRozmiarGornychPx);
  const total = top.length * t + (top.length - 1) * T.gora.odstep;
  const buttons = {};
  const x0 = game.state === 'wybor' || game.state === 'statystyki' || game.state === 'ostrzezenie' ? SCREEN_W - T.gora.margines - total : (SCREEN_W - total) / 2;
  top.forEach((name, i) => {
    buttons[name] = box(x0 + i * (t + T.gora.odstep), T.gora.margines, t);
  });
  return { controls, buttons };
}

function pauseLayout() {
  const P = DOTYK.pauza;
  const h = Math.max(P.wysokosc, Math.ceil(DOTYK.minRozmiarPx / canvasScale()));
  const x = Math.round((SCREEN_W - P.szerokosc) / 2);
  return {
    wznow: { x, y: P.y, w: P.szerokosc, h },
    wyjdz: { x, y: P.y + h + P.odstep, w: P.szerokosc, h },
  };
}

function hitButton(rects, p) {
  const pad = DOTYK.poleDotyku;
  let best = null;
  let bestDist = Infinity;
  for (const name in rects) {
    const r = rects[name];
    if (p.x < r.x - pad || p.x > r.x + r.w + pad || p.y < r.y - pad || p.y > r.y + r.h + pad) continue;
    const d = Math.hypot(p.x - (r.x + r.w / 2), p.y - (r.y + r.h / 2));
    if (d < bestDist) {
      best = name;
      bestDist = d;
    }
  }
  return best;
}

function pointerPos(e) {
  const rect = canvas.getBoundingClientRect();
  return { x: (e.clientX - rect.left) * SCREEN_W / rect.width, y: (e.clientY - rect.top) * SCREEN_H / rect.height };
}

function applyLanguage() {
  document.title = tx('tytulKarty');
  document.documentElement.lang = LANG;
  rotateOverlay.textContent = tx('obrocTelefon');
}

function toggleLanguage() {
  LANG = JEZ.dostepne[(JEZ.dostepne.indexOf(LANG) + 1) % JEZ.dostepne.length];
  applyLanguage();
  try {
    localStorage.setItem(JEZ.klucz, LANG);
  } catch (err) {
    return;
  }
}

function setPaused(on) {
  if (game.paused === on) return;
  game.paused = on;
  releaseTouch();
  input.jumpPressed = false;
  input.anyPressed = false;
  if (on) pauseAudio();
  else resumeAudio();
}

function toggleFullscreen() {
  const el = document.documentElement;
  if (document.fullscreenElement || document.webkitFullscreenElement) {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
  } else if (el.requestFullscreen) {
    el.requestFullscreen().catch(() => {});
  } else if (el.webkitRequestFullscreen) {
    el.webkitRequestFullscreen();
  }
}

function pointerInButton(b, p) {
  return p.x >= b.x && p.x <= b.x + b.szerokosc && p.y >= b.y && p.y <= b.y + b.wysokosc;
}

function gameplayActive() {
  return PAUSABLE_STATES.includes(game.state) && !game.paused;
}

function touchPress(name) {
  if (!gameplayActive()) return;
  input.anyPressed = true;
  if (name === 'skok') input.jumpPressed = true;
}

function topAction(name) {
  if (name === 'akcja') {
    if (game.state === 'start') game.state = 'pomoc';
    else if (PAUSABLE_STATES.includes(game.state)) setPaused(!game.paused);
  } else if (name === 'dzwiek') {
    toggleMute();
  } else if (name === 'pelny') {
    toggleFullscreen();
  }
}

function selectRowAt(p) {
  if (game.confirmReset && !touch.aktywny) return;
  if (game.confirmReset) {
    const choice = hitButton(confirmRects(), p);
    if (choice === 'tak') clearProgress();
    if (choice !== null) game.confirmReset = false;
    return;
  }
  const rb = resetButtonRect();
  const specialRects = { r: rb, b: flashButtonRect() };
  if (USTAWIENIA.statystyki.wlaczone) specialRects.s = statsButtonRect();
  const special = hitButton(specialRects, p);
  if (special === 's') {
    openStats();
    return;
  }
  if (special === 'r') {
    game.confirmReset = true;
    return;
  }
  if (special === 'b') {
    toggleFlashes();
    return;
  }
  const tiles = {};
  for (let i = 0; i < progress.odblokowane; i++) tiles[i] = levelTileRect(i);
  const hit = hitButton(tiles, p);
  if (hit === null) return;
  game.cursor = Number(hit);
  requestLevel(game.cursor);
}

function setTouchButton(id, name) {
  const previous = touch.wskazniki.get(id);
  if (previous === name) return;
  touch.wskazniki.set(id, name);
  if (name !== null) touchPress(name);
}

window.addEventListener('pointerdown', (e) => {
  if (game.portrait) return;
  if (game.blad) {
    recoverFromError();
    return;
  }
  if (game.pomoc) {
    game.pomoc = false;
    return;
  }
  const isTouch = e.pointerType !== 'mouse';
  if (isTouch) touch.aktywny = true;
  initAudio();
  const p = pointerPos(e);
  if (feedbackHit(p)) {
    openFeedback();
    return;
  }
  if (isTouch) {
    const layout = touchLayout();
    const top = hitButton(layout.buttons, p);
    if (top !== null) {
      topAction(top);
      return;
    }
    if (game.paused) {
      const choice = hitButton(pauseLayout(), p);
      if (choice === 'wznow') setPaused(false);
      else if (choice === 'wyjdz') {
        setPaused(false);
        openSelect();
      }
      return;
    }
    if (gameplayActive() && game.state !== 'meta') {
      setTouchButton(e.pointerId, hitButton(layout.controls, p));
      return;
    }
  }
  if (game.state === 'pomoc' || game.state === 'ogrze') game.state = 'start';
  else if (game.state === 'ostrzezenie') warningPointer(p);
  else if (game.state === 'statystyki') statsPointer(p);
  else if (game.state === 'gratulacje') {
    if (congratsReady()) openSelect();
  } else if (game.state === 'start') {
    if (pointerInButton(UI.przyciskPomocy, p)) game.state = 'pomoc';
    else if (pointerInButton(UI.przyciskOGrze, p)) game.state = 'ogrze';
    else if (pointerInButton(UI.przyciskJezyka, p)) toggleLanguage();
    else openSelect();
  } else if (isTouch || UI.wyborMysz) {
    if (game.state === 'wybor') selectRowAt(p);
    else if (game.state === 'meta' && isTouch) input.anyPressed = true;
  }
});

window.addEventListener('pointermove', (e) => {
  if (!touch.wskazniki.has(e.pointerId)) return;
  if (!gameplayActive() || game.state === 'meta') {
    touch.wskazniki.delete(e.pointerId);
    return;
  }
  setTouchButton(e.pointerId, hitButton(touchLayout().controls, pointerPos(e)));
});

function endPointer(e) {
  touch.wskazniki.delete(e.pointerId);
  if (e.type === 'pointerup' && e.pointerType !== 'mouse') initAudio();
}

window.addEventListener('pointerup', endPointer);
window.addEventListener('pointercancel', endPointer);
window.addEventListener('blur', releaseTouch);
window.addEventListener('orientationchange', releaseTouch);
document.addEventListener('visibilitychange', releaseTouch);
window.addEventListener('contextmenu', (e) => {
  if (touch.aktywny) e.preventDefault();
});
document.addEventListener('gesturestart', (e) => e.preventDefault());

function recoverFromError() {
  game.blad = false;
  game.paused = false;
  game.pomoc = false;
  accumulator = 0;
  lastTime = null;
  try {
    releaseTouch();
    openSelect();
  } catch (err) {
    location.reload();
  }
}

window.addEventListener('keydown', (e) => {
  if (touch.aktywny) {
    touch.aktywny = false;
    releaseTouch();
  }
  if (ALL_KEYS.includes(e.code) || e.code === 'Enter') e.preventDefault();
  if (game.blad) {
    if (!e.repeat && (e.code === 'Enter' || e.code === 'NumpadEnter' || e.code === 'Escape' || e.code === 'Space')) recoverFromError();
    return;
  }
  if (e.code === 'KeyM') {
    if (!e.repeat) toggleMute();
    return;
  }
  if (e.code === 'KeyF') {
    if (!e.repeat) toggleFullscreen();
    return;
  }
  if (e.code === 'KeyL') {
    if (!e.repeat) toggleLanguage();
    return;
  }
  if (e.code === 'KeyV') {
    if (!e.repeat) toggleEffects();
    return;
  }
  if (e.code === 'KeyX') {
    if (!e.repeat) saveScreenshot();
    return;
  }
  if (e.code === DIAG.klawisz) {
    if (!e.repeat) toggleDiagnostics();
    return;
  }
  if (e.code === DUCH.klawisz && DUCH.wlaczony) {
    if (!e.repeat) toggleGhost();
    return;
  }
  initAudio();
  if (game.pomoc) {
    if (!e.repeat && (e.code === 'KeyH' || e.code === 'Escape')) game.pomoc = false;
    return;
  }
  if (e.code === 'KeyP') {
    if (!e.repeat && PAUSABLE_STATES.includes(game.state)) setPaused(!game.paused);
    return;
  }
  if (e.code === 'KeyH' && PAUSABLE_STATES.includes(game.state)) {
    if (!e.repeat) {
      setPaused(true);
      game.pomoc = true;
    }
    return;
  }
  if (game.state === 'pomoc') {
    if (!e.repeat && (e.code === 'KeyH' || e.code === 'Escape')) game.state = 'start';
    return;
  }
  if (game.state === 'ogrze') {
    if (!e.repeat && (e.code === 'KeyI' || e.code === 'Escape')) game.state = 'start';
    return;
  }
  if (game.state === 'gratulacje') {
    if (!e.repeat && congratsReady()) openSelect();
    return;
  }
  if (game.state === 'start') {
    if (e.repeat) return;
    if (e.code === 'KeyH') game.state = 'pomoc';
    else if (e.code === 'KeyI') game.state = 'ogrze';
    else openSelect();
    return;
  }
  if (game.paused) {
    if (e.code === 'Escape' && !e.repeat) {
      setPaused(false);
      openSelect();
      return;
    }
    if (ALL_KEYS.includes(e.code)) keys[e.code] = true;
    return;
  }
  if (game.state === 'ostrzezenie') {
    if (!e.repeat) warningKey(e.code);
    return;
  }
  if (game.state === 'statystyki') {
    if (!e.repeat) statsKey(e.code);
    return;
  }
  if (game.state === 'wybor') {
    if (e.repeat) return;
    if (game.confirmReset) {
      if (e.code === 'Enter' || e.code === 'NumpadEnter' || e.code === 'KeyY') clearProgress();
      if (e.code === 'Enter' || e.code === 'NumpadEnter' || e.code === 'KeyY' || e.code === 'Escape' || e.code === 'KeyN') game.confirmReset = false;
    } else if (e.code === 'KeyK') game.confirmReset = true;
    else if (e.code === 'KeyB') toggleFlashes();
    else if (e.code === SKORY.klawisz) cycleSkin();
    else if (e.code === LATWY.klawisz) toggleEasy();
    else if (e.code === USTAWIENIA.statystyki.klawisz && USTAWIENIA.statystyki.wlaczone) openStats();
    else menuKey(e.code);
    return;
  }
  if (e.code === 'Escape' && !e.repeat) {
    openSelect();
    return;
  }
  if (!e.repeat) input.anyPressed = true;
  if (!e.repeat && JUMP_KEYS.includes(e.code)) input.jumpPressed = true;
  keys[e.code] = true;
});

window.addEventListener('keyup', (e) => {
  keys[e.code] = false;
});

window.addEventListener('blur', () => {
  for (const code in keys) keys[code] = false;
});

function setCrouch(on) {
  if (on === player.crouching) return;
  const newH = on ? CHAR.wysokoscKucania : CHAR.wysokosc;
  const newY = player.y + player.h - newH;
  if (!on && overlapsSolid(player.x, newY, player.w, newH)) return;
  player.y = newY;
  player.h = newH;
  player.crouching = on;
  if (on) playSfx('kucanie');
}

function moveX(dt) {
  player.x += player.vx * dt;

  if (player.x < 0) player.x = 0;
  if (player.x + player.w > LEVEL_W) player.x = LEVEL_W - player.w;

  const topRow = Math.floor(player.y / TILE);
  const bottomRow = Math.floor((player.y + player.h - PHYS.epsilon) / TILE);

  if (player.vx > 0) {
    const col = Math.floor((player.x + player.w - PHYS.epsilon) / TILE);
    for (let row = topRow; row <= bottomRow; row++) {
      if (isSolid(col, row)) {
        player.x = col * TILE - player.w;
        break;
      }
    }
  } else if (player.vx < 0) {
    const col = Math.floor(player.x / TILE);
    for (let row = topRow; row <= bottomRow; row++) {
      if (isSolid(col, row)) {
        player.x = (col + 1) * TILE;
        break;
      }
    }
  }
}

function moveY(dt) {
  const oldBottom = player.y + player.h;
  player.y += player.vy * dt;
  player.onGround = false;

  const leftCol = Math.floor(player.x / TILE);
  const rightCol = Math.floor((player.x + player.w - PHYS.epsilon) / TILE);

  if (player.vy > 0) {
    const row = Math.floor((player.y + player.h - PHYS.epsilon) / TILE);
    for (let col = leftCol; col <= rightCol; col++) {
      if (isSolid(col, row) || (isPlatform(col, row) && oldBottom <= row * TILE + PHYS.epsilon)) {
        player.y = row * TILE - player.h;
        player.vy = 0;
        player.onGround = true;
        break;
      }
    }
  } else if (player.vy < 0) {
    const row = Math.floor(player.y / TILE);
    for (let col = leftCol; col <= rightCol; col++) {
      if (isSolid(col, row)) {
        player.y = (row + 1) * TILE;
        player.vy = 0;
        break;
      }
    }
  }
}

let camX = 0;
let camY = 0;
let camXf = 0;
let camYf = 0;
let prevCamXf = 0;
let prevCamYf = 0;
let camMoving = false;
let groundFeetY = 0;

const view = { alpha: 1 };

function snapPx(v) {
  return Math.round(v);
}

function lerpView(prev, cur) {
  return prev === undefined || view.alpha >= 1 ? cur : prev + (cur - prev) * view.alpha;
}

function viewX(o) {
  return snapPx(lerpView(o.px, o.x));
}

function viewY(o) {
  return snapPx(lerpView(o.py, o.y));
}

function playerViewX() {
  return viewX(player);
}

function playerViewY() {
  if (player.pb === undefined || view.alpha >= 1) return snapPx(player.y);
  return snapPx(lerpView(player.pb, player.y + player.h) - player.h);
}

function rememberList(list) {
  for (let i = 0; i < list.length; i++) {
    const o = list[i];
    o.px = o.x;
    o.py = o.y;
  }
}

function rememberPositions() {
  player.px = player.x;
  player.pb = player.y + player.h;
  rememberList(enemies);
  rememberList(obstacles);
  rememberList(projectiles);
  rememberList(game.particles);
  rememberList(fx.czastki);
  if (boss) {
    boss.px = boss.x;
    boss.py = boss.y;
    rememberList(bossShots);
    rememberList(bossBaskets);
    rememberList(bossParts);
  }
  prevCamXf = camXf;
  prevCamYf = camYf;
}

function parallaxShift(cam, factor) {
  return snapPx(cam * factor);
}

function updateCamera(dt) {
  let target = player.x + player.w / 2 - SCREEN_W / 2;
  if (game.arena && boss && boss.stan !== 'smierc') {
    const lead = (boss.x + boss.w / 2 - player.x - player.w / 2) / 2;
    target += Math.max(-BOSS.przesuniecieKamery, Math.min(BOSS.przesuniecieKamery, lead));
  }
  const clamped = Math.max(game.arena ? arenaLeftX() : 0, Math.min(target, LEVEL_W - SCREEN_W));
  if (game.arena && dt !== undefined) camXf += (clamped - camXf) * (1 - Math.exp(-BOSS.wygladzanieKamery * dt));
  else camXf = clamped;
  camX = snapPx(camXf);

  if (player.onGround) groundFeetY = player.y + player.h;
  const targetY = Math.max(CAM.gora, Math.min(groundFeetY - CAM.kotwicaStopY, CAM.dol));
  if (dt === undefined) {
    camYf = targetY;
    camMoving = false;
    prevCamXf = camXf;
    prevCamYf = camYf;
  } else {
    const diff = targetY - camYf;
    if (!camMoving && Math.abs(diff) > CAM.martwaStrefa) camMoving = true;
    if (camMoving) {
      if (Math.abs(diff) <= CAM.koniecRuchu) {
        camYf = targetY;
        camMoving = false;
      } else {
        camYf += diff * (1 - Math.exp(-CAM.wygladzanie * dt));
      }
    }
  }
  camY = snapPx(camYf);
}

function createObstacle(entry, index) {
  const cfg = OBST.typy[entry.typ];
  const size = cfg.srednica;
  let y;
  if (entry.jezdnia) {
    y = OBST.jezdniaDolnaY - size;
  } else {
    const top = railTopY(entry.kolumna);
    if (top === null) return null;
    y = top - size;
  }
  return {
    index,
    cfg,
    jezdnia: !!entry.jezdnia,
    x: entry.kolumna * TILE,
    y,
    w: size,
    h: size,
    vx: -cfg.predkosc,
    vy: 0,
    rot: 0,
    dead: false,
  };
}

function spawnObstacles() {
  for (let i = 0; i < level.przeszkody.length; i++) {
    if (game.spawned[i]) continue;
    const entry = level.przeszkody[i];
    if (camX + SCREEN_W + OBST.marginesSpawnu < entry.kolumna * TILE) continue;
    game.spawned[i] = true;
    const o = createObstacle(entry, i);
    if (o) obstacles.push(o);
  }
}

function updateObstacle(o, dt) {
  o.rot -= (o.cfg.predkosc / (o.w / 2)) * dt;
  o.x += o.vx * dt;
  if (o.jezdnia) return;

  const leadCol = Math.floor(o.x / TILE);
  const topRow = Math.floor(o.y / TILE);
  const bottomRow = Math.floor((o.y + o.h - PHYS.epsilon) / TILE);
  for (let row = topRow; row <= bottomRow; row++) {
    if (isSolid(leadCol, row)) {
      o.dead = true;
      return;
    }
  }

  o.vy = Math.min(o.vy + PHYS.grawitacja * dt, PHYS.maxPredkoscSpadania);
  o.y += o.vy * dt;
  const centerCol = Math.floor((o.x + o.w / 2) / TILE);
  const row = Math.floor((o.y + o.h - PHYS.epsilon) / TILE);
  if (o.vy > 0 && isSolid(centerCol, row)) {
    o.y = row * TILE - o.h;
    o.vy = 0;
  }
}

function stepObstacles(dt) {
  for (const o of obstacles) updateObstacle(o, dt);
  let n = 0;
  for (let i = 0; i < obstacles.length; i++) {
    const o = obstacles[i];
    if (!o.dead && o.y < SCREEN_H + 40 && o.x + o.w > camX - 40) obstacles[n++] = o;
  }
  obstacles.length = n;
}

function checkObstacleHits() {
  const tol = OBST.tolerancjaHitboxu;
  for (const o of obstacles) {
    if (o.jezdnia) continue;
    const ox = o.x + tol;
    const oy = o.y + tol;
    const ow = o.w - 2 * tol;
    const oh = o.h - 2 * tol;
    const hit = player.x < ox + ow && player.x + player.w > ox && player.y < oy + oh && player.y + player.h > oy;
    if (!hit) continue;
    if (player.vy > 0 && prevBottom <= oy + OBST.marginesLadowania) {
      player.y = oy - player.h;
      player.vy = -OBST.odbicie;
      player.onGround = false;
      playSfx('odbicie');
    } else {
      die();
      return;
    }
  }
}

function forEachSpritePixel(parts, facing, fn) {
  const lastX = CHAR.szerokoscSprite - 1;
  for (const part of parts) {
    for (let iy = 0; iy < part.rows.length; iy++) {
      const row = part.rows[iy];
      for (let ix = 0; ix < row.length; ix++) {
        const ch = row[ix];
        if (ch === '.') continue;
        const sx = part.x + ix;
        fn(facing > 0 ? sx : lastX - sx, part.y + iy, PALETTE[ch]);
      }
    }
  }
}

function currentSprite() {
  if (player.crouching) return SPRITES.crouch;
  if (!player.onGround) return SPRITES.jump;
  if (player.vx !== 0) {
    const frame = Math.floor(player.animTime * CHAR.klatkiBieguNaSekunde) % SPRITES.run.length;
    return SPRITES.run[frame];
  }
  return SPRITES.stand;
}

const deathPool = [];
const deathList = [];

function buildParticles() {
  for (let i = 0; i < deathList.length; i++) deathPool.push(deathList[i]);
  deathList.length = 0;
  const px = snapPx(player.x) - SPRITE_OFFSET_X;
  const py = snapPx(player.y);
  const centerX = (CHAR.szerokoscSprite - 1) / 2;
  const centerY = player.h / 2;
  let n = 0;
  forEachSpritePixel(currentSprite(), player.facing, (dx, dy, color) => {
    const seed = n * 7 + game.attempts * 131;
    const h1 = hash(seed);
    const h2 = hash(seed + 1);
    const p = deathPool.length > 0 ? deathPool.pop() : { x: 0, y: 0, vx: 0, vy: 0, color: '', px: 0, py: 0 };
    p.x = px + dx;
    p.y = py + dy;
    p.px = p.x;
    p.py = p.y;
    p.vx = (dx - centerX) * DEATH.rozrzutX + (h1 % (DEATH.rozrzutLosowyX * 2 + 1)) - DEATH.rozrzutLosowyX;
    p.vy = -(DEATH.impulsGora + (h2 % (DEATH.impulsLosowyGora + 1))) + (dy - centerY) * DEATH.rozrzutY;
    p.color = skinColor(color, activeSkin());
    deathList.push(p);
    n++;
  });
  return deathList;
}

function die() {
  if (game.state !== 'gra') return;
  game.state = 'smierc';
  game.deathTimer = 0;
  progress.zgony[game.levelIndex]++;
  game.particles = buildParticles();
  game.active = {};
  playSfx('smierc');
  fxShake('smierc');
  stopMusic();
}

function recordBestReflectors() {
  const got = reflectorCount();
  const prev = progress.odblaskiMax[game.levelIndex];
  if (prev === null || prev === undefined || got > prev) progress.odblaskiMax[game.levelIndex] = got;
}

function recordResult(time) {
  game.time = time;
  game.finalTime = time;
  if (easyActive()) {
    game.rekord = false;
    game.ocena = rateLevel();
    game.ocena.nowa = false;
    game.ocena.latwy = true;
    progress.odblokowane = Math.max(progress.odblokowane, Math.min(game.levelIndex + 2, POZIOMY.length));
    saveProgress();
    return;
  }
  recordBestReflectors();
  const previous = progress.najlepsze[game.levelIndex];
  game.rekord = previous === null || previous === undefined || time < previous;
  if (game.rekord) {
    progress.najlepsze[game.levelIndex] = time;
    ghostSave();
  }
  game.ocena = rateLevel();
  const previousStars = progress.oceny[game.levelIndex] || 0;
  game.ocena.nowa = game.ocena.gwiazdki > previousStars;
  if (game.ocena.nowa) progress.oceny[game.levelIndex] = game.ocena.gwiazdki;
  progress.odblokowane = Math.max(progress.odblokowane, Math.min(game.levelIndex + 2, POZIOMY.length));
  saveProgress();
}

function finish() {
  game.state = 'meta';
  game.finalTime = game.time;
  game.finishTimer = 0;
  if (easyActive()) {
    recordResult(game.time);
    player.vx = 0;
    playSfx('meta');
    stopMusic();
    return;
  }
  const previous = progress.najlepsze[game.levelIndex];
  game.rekord = previous === null || previous === undefined || game.time < previous;
  if (game.rekord) {
    progress.najlepsze[game.levelIndex] = game.time;
    ghostSave();
  }
  game.ocena = rateLevel();
  const previousStars = progress.oceny[game.levelIndex] || 0;
  game.ocena.nowa = game.ocena.gwiazdki > previousStars;
  if (game.ocena.nowa) progress.oceny[game.levelIndex] = game.ocena.gwiazdki;
  progress.odblokowane = Math.max(progress.odblokowane, Math.min(game.levelIndex + 2, POZIOMY.length));
  recordBestReflectors();
  saveProgress();
  player.vx = 0;
  playSfx('meta');
  stopMusic();
}

function updateDying(dt) {
  input.jumpPressed = false;
  game.deathTimer += dt;
  for (const p of game.particles) {
    p.vy += DEATH.grawitacja * dt;
    p.x += p.vx * dt;
    p.y += p.vy * dt;
  }
  stepObstacles(dt);
  stepEnemies(dt);
  stepProjectiles(dt);
  if (game.deathTimer >= DEATH.czas) {
    game.attempts++;
    resetLevel();
  }
}

function updateFinished(dt) {
  game.finishTimer += dt;
  setCrouch(false);
  player.vx = 0;
  player.animTime = 0;
  player.vy = Math.min(player.vy + PHYS.grawitacja * dt, PHYS.maxPredkoscSpadania);
  moveX(dt);
  moveY(dt);
  const advance = input.anyPressed && game.finishTimer >= FINISH.opoznienieRestartu;
  input.jumpPressed = false;
  input.anyPressed = false;
  if (advance) nextLevel();
}

function crossCheckpoints() {
  const list = checkpoints();
  const center = player.x + player.w / 2;
  while (game.punkt + 1 < list.length && center >= list[game.punkt + 1].kolumna * TILE + TILE / 2) {
    game.punkt++;
    playSfx('punktKontrolny');
  }
}

function savedEffects() {
  try {
    const saved = localStorage.getItem(FX.klucz);
    return saved === null ? FX.wlaczone : saved === '1';
  } catch (err) {
    return FX.wlaczone;
  }
}

const fx = { aktywne: false, wlaczone: savedEffects(), czastki: [], licznik: 0, smugaCzas: 0, drzenieCzas: 0, drzenieAmp: 0, dx: 0, dy: 0 };
const fxPool = [];

function fxLive() {
  return fx.aktywne && fx.wlaczone;
}

function fxReset() {
  for (let i = 0; i < fx.czastki.length; i++) fxPool.push(fx.czastki[i]);
  fx.czastki.length = 0;
  fx.smugaCzas = 0;
  fx.drzenieCzas = 0;
  fx.drzenieAmp = 0;
  fx.dx = 0;
  fx.dy = 0;
}

function fxTake(kind, x, y) {
  if (fx.czastki.length >= FX.limitCzastek) return null;
  const p = fxPool.length > 0 ? fxPool.pop() : { kind: '', x: 0, y: 0, vx: 0, vy: 0, g: 0, rozmiar: 0, len: 0, t: 0, max: 0, color: '', px: 0, py: 0 };
  p.kind = kind;
  p.x = x;
  p.y = y;
  p.px = x;
  p.py = y;
  p.vx = 0;
  p.vy = 0;
  p.g = 0;
  p.t = 0;
  fx.czastki.push(p);
  return p;
}

function fxDust(kind, x, y, dir) {
  if (!fxLive()) return;
  const cfg = FX.pyl[kind];
  for (let i = 0; i < cfg.liczba; i++) {
    const h = hash(++fx.licznik);
    const side = dir !== 0 ? dir : i % 2 === 0 ? -1 : 1;
    const p = fxTake('pyl', x + side * (h % 3), y - 1);
    if (!p) continue;
    p.vx = side * cfg.predkosc * (0.4 + ((h >>> 4) % 60) / 100);
    p.vy = -cfg.wznies * (((h >>> 10) % 100) / 100);
    p.g = cfg.grawitacja;
    p.rozmiar = cfg.rozmiar;
    p.max = cfg.czas * (0.7 + ((h >>> 16) % 30) / 100);
  }
}

function fxFlash(x, y, color) {
  if (!fxLive()) return;
  const p = fxTake('blysk', x, y);
  if (!p) return;
  p.max = FX.blysk.czas;
  p.color = color;
}

function fxShake(kind, x) {
  if (!fxLive()) return;
  if (x !== undefined && (x < camX || x > camX + SCREEN_W)) return;
  const D = FX.drzenie;
  const left = fx.drzenieCzas > 0 ? fx.drzenieAmp * (fx.drzenieCzas / D.czas) : 0;
  fx.drzenieAmp = Math.max(left, D[kind]);
  fx.drzenieCzas = D.czas;
}

function fxSpawnStreak() {
  const S = FX.smugi;
  const h = hash(++fx.licznik);
  const len = S.dlugoscMin + ((h >>> 8) % (S.dlugoscMax - S.dlugoscMin + 1));
  const span = Math.max(1, player.h - 2 * S.zapas);
  const p = fxTake('smuga', player.facing > 0 ? player.x - len + 2 : player.x + player.w - 2, player.y + S.zapas + (h % span));
  if (!p) return;
  p.vx = -player.facing * S.dryf;
  p.len = len;
  p.max = S.czas;
}

function fxStep(dt) {
  const list = fx.czastki;
  let kept = 0;
  for (let i = 0; i < list.length; i++) {
    const p = list[i];
    p.t += dt;
    if (p.t >= p.max) {
      fxPool.push(p);
      continue;
    }
    if (p.kind !== 'blysk') {
      p.vy += p.g * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
    }
    list[kept++] = p;
  }
  list.length = kept;
  if (fxLive() && game.state === 'gra' && hasEffect('tempo') && player.vx !== 0) {
    fx.smugaCzas += dt;
    while (fx.smugaCzas >= FX.smugi.odstep) {
      fx.smugaCzas -= FX.smugi.odstep;
      fxSpawnStreak();
    }
  } else {
    fx.smugaCzas = 0;
  }
  fx.dx = 0;
  fx.dy = 0;
  if (fx.drzenieCzas > 0) {
    fx.drzenieCzas = Math.max(0, fx.drzenieCzas - dt);
    const a = Math.round(fx.drzenieAmp * (fx.drzenieCzas / FX.drzenie.czas));
    if (a > 0) {
      const h = hash(++fx.licznik);
      fx.dx = (h % (2 * a + 1)) - a;
      fx.dy = ((h >>> 8) % (2 * a + 1)) - a;
    }
  }
}

function feedbackUrl() {
  return 'mailto:' + USTAWIENIA.kontakt + '?subject=' + encodeURIComponent(USTAWIENIA.opinia.temat);
}

function openFeedback() {
  try {
    window.location.href = feedbackUrl();
  } catch (err) {
    return;
  }
}

function feedbackRect() {
  const y = UI.opiniaY[game.state];
  if (y === undefined || game.paused || game.pomoc) return null;
  const text = tx('opinia');
  const w = textWidth(text, 1);
  const m = UI.opiniaMargines;
  return { x: Math.round((SCREEN_W - w) / 2) - m, y: y - m, w: w + 2 * m, h: 5 + UI.opiniaPodkreslenie + 2 * m };
}

function feedbackHit(p) {
  const r = feedbackRect();
  return r !== null && p.x >= r.x && p.x <= r.x + r.w && p.y >= r.y && p.y <= r.y + r.h;
}

function screenshotName() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  const stamp = d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate()) + '-' + pad(d.getHours()) + pad(d.getMinutes()) + pad(d.getSeconds());
  return USTAWIENIA.zrzut.prefiks + '-' + stamp + '.png';
}

function saveScreenshot() {
  try {
    render(true);
    const big = document.createElement('canvas');
    big.width = SCREEN_W * USTAWIENIA.zrzut.skala;
    big.height = SCREEN_H * USTAWIENIA.zrzut.skala;
    const g = big.getContext('2d');
    g.imageSmoothingEnabled = false;
    g.drawImage(canvas, 0, 0, big.width, big.height);
    render();
    big.toBlob((blob) => {
      if (!blob) {
        showMessage(tx('zrzutBlad'));
        return;
      }
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = screenshotName();
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
      showMessage(tx('zrzutZapisany'));
    }, 'image/png');
  } catch (err) {
    showMessage(tx('zrzutBlad'));
  }
}

function toggleEffects() {
  fx.wlaczone = !fx.wlaczone;
  fxReset();
  showMessage(tx(!fx.wlaczone ? 'efektyWylaczone' : flashesOn() ? 'efektyWlaczone' : 'efektyBezBlyskow'));
  try {
    localStorage.setItem(FX.klucz, fx.wlaczone ? '1' : '0');
  } catch (err) {
    return;
  }
}

function loadFlashChoice() {
  try {
    const saved = localStorage.getItem(BLYSKI.klucz);
    return saved === null ? null : saved === '1';
  } catch (err) {
    return null;
  }
}

const flashes = { wybor: loadFlashChoice() };

function flashesOn() {
  return flashes.wybor === null ? BLYSKI.domyslnie : flashes.wybor;
}

function setFlashes(on) {
  flashes.wybor = on;
  try {
    localStorage.setItem(BLYSKI.klucz, on ? '1' : '0');
  } catch (err) {
    return;
  }
}

function toggleFlashes() {
  setFlashes(!flashesOn());
  showMessage(tx(flashesOn() ? 'blyskiWlaczone' : 'blyskiWylaczone'));
}

function levelHasFlashes(index) {
  return !!POZIOMY[index].motyw.burza;
}

function requestLevel(index) {
  if (BLYSKI.ostrzezenie && flashes.wybor === null && levelHasFlashes(index)) {
    openWarning(index);
    return;
  }
  startLevel(index);
}

function openWarning(index) {
  stopMusic();
  game.state = 'ostrzezenie';
  game.ostrzezeniePoziom = index;
  game.ostrzezenieWybor = 1;
  input.jumpPressed = false;
  input.anyPressed = false;
  for (const code in keys) keys[code] = false;
  releaseTouch();
}

function confirmWarning(choice) {
  setFlashes(choice === 0);
  startLevel(game.ostrzezeniePoziom);
}

function warningRects() {
  const B = BLYSKI;
  const h = touch.aktywny ? Math.max(B.przyciskWysokosc, Math.ceil(DOTYK.minRozmiarPx / canvasScale())) : B.przyciskWysokosc;
  const x = Math.round((SCREEN_W - 2 * B.przyciskSzerokosc - B.przyciskOdstep) / 2);
  return { 0: { x, y: B.przyciskiY, w: B.przyciskSzerokosc, h }, 1: { x: x + B.przyciskSzerokosc + B.przyciskOdstep, y: B.przyciskiY, w: B.przyciskSzerokosc, h } };
}

function warningKey(code) {
  if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'KeyA', 'KeyD', 'KeyW', 'KeyS'].includes(code)) game.ostrzezenieWybor = 1 - game.ostrzezenieWybor;
  else if (code === 'Enter' || code === 'NumpadEnter' || code === 'Space') confirmWarning(game.ostrzezenieWybor);
  else if (code === 'Escape') openSelect();
}

function warningPointer(p) {
  const hit = hitButton(warningRects(), p);
  if (hit === null) return;
  game.ostrzezenieWybor = Number(hit);
  confirmWarning(game.ostrzezenieWybor);
}

function flashButtonRect() {
  const b = BLYSKI.wyborPrzycisk;
  const h = touch.aktywny ? Math.max(b.wysokosc, Math.ceil(DOTYK.minRozmiarPx / canvasScale())) : b.wysokosc;
  return { x: SCREEN_W - b.margines - b.szerokosc - (touch.aktywny ? 0 : b.odstepOdGlosnika), y: SCREEN_H - b.margines - h, w: b.szerokosc, h };
}

function statsButtonRect() {
  const b = USTAWIENIA.statystyki.przycisk;
  const h = touch.aktywny ? Math.max(b.wysokosc, Math.ceil(DOTYK.minRozmiarPx / canvasScale())) : b.wysokosc;
  return { x: Math.round((SCREEN_W - b.szerokosc) / 2), y: SCREEN_H - b.margines - h, w: b.szerokosc, h };
}

function openStats() {
  saveProgress();
  game.state = 'statystyki';
}

function closeStats() {
  game.state = 'wybor';
}

function statsKey(code) {
  if (code === SKORY.klawisz) cycleSkin();
  else if (code === LATWY.klawisz) toggleEasy();
  else if (code === USTAWIENIA.statystyki.klawisz || code === 'Escape' || code === 'Enter' || code === 'NumpadEnter') closeStats();
}

function formatPlayTime(t) {
  const total = Math.floor(t);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const sec = total % 60;
  const pad = (n) => (n < 10 ? '0' : '') + n;
  return h + ':' + pad(m) + ':' + pad(sec);
}

function drawStatsScreen() {
  const S = USTAWIENIA.statystyki;
  ctx.fillStyle = UI.kolorTla;
  ctx.fillRect(0, 0, SCREEN_W, SCREEN_H);
  drawCentered(tx('statystyki'), S.naglowekY, UI.skalaTytulu, UI.kolorAkcentu);
  const heads = tx('statKolumny');
  const col = (i, str) => Math.round(S.kolumny[i] - textWidth(str, 1) / 2);
  heads.forEach((h, i) => drawTextShadow(h, col(i, h), S.tabelaY, 1, UI.kolorAkcentu));
  let deaths = 0;
  let done = 0;
  for (let i = 0; i < POZIOMY.length; i++) {
    const y = S.tabelaY + (i + 1) * S.odstep;
    const open = i < progress.odblokowane;
    const color = open ? UI.kolorTekstu : UI.kolorZablokowanego;
    const best = progress.najlepsze[i];
    if (typeof best === 'number') done++;
    deaths += progress.zgony[i] || 0;
    const refl = REFL.rozmieszczenie[i + 1] || [];
    const got = progress.odblaskiMax[i];
    const cells = [String(i + 1), typeof best === 'number' ? best.toFixed(2) : '---', null, got === null || got === undefined ? '---' : got + '/' + refl.length, String(progress.zgony[i] || 0)];
    cells.forEach((c, k) => {
      if (c !== null) drawText(c, col(k, c), y, 1, color);
    });
    drawStars(progress.oceny[i] || 0, S.kolumny[2], y, 1, 2);
  }
  drawCentered(tx('statCzasGry', { t: formatPlayTime(progress.czasGry) }), S.sumaY, 1, UI.kolorTekstu);
  drawCentered(tx('statZgony', { n: deaths, u: done, m: POZIOMY.length }), S.sumaY + S.sumaOdstep, 1, UI.kolorTekstu);
  drawSkinPreview();
  const rows = statsOptions();
  for (let i = 0; i < rows.length; i++) drawCentered(rows[i].tekst(), S.opcjeY + i * S.opcjeOdstep, 1, OCENA.ekran.kolorSpelnionego);
  drawCentered(tx(touch.aktywny ? 'statStopkaDotyk' : 'statStopka'), S.stopkaY, 1, UI.kolorTekstu);
}

function statsOptions() {
  const rows = [];
  if (DUCH.wlaczony) rows.push({ klawisz: DUCH.klawisz, akcja: toggleGhost, tekst: () => tx(touch.aktywny ? 'opcjaDuchDotyk' : 'opcjaDuch', { s: tx(ghost.on ? 'wl' : 'wyl') }) });
  if (LATWY.dostepny) rows.push({ klawisz: LATWY.klawisz, akcja: toggleEasy, tekst: () => tx(touch.aktywny ? 'opcjaLatwyDotyk' : 'opcjaLatwy', { s: tx(easy.on ? 'wl' : 'wyl') }) });
  if (SKORY.wlaczona) rows.push({ klawisz: SKORY.klawisz, akcja: cycleSkin, tekst: () => tx(touch.aktywny ? 'opcjaKolorDotyk' : 'opcjaKolor', { k: tx('kolory')[activeSkin()], n: unlockedSkins(), m: SKORY.warianty.length }) });
  return rows;
}

function statsPointer(p) {
  const S = USTAWIENIA.statystyki;
  const rows = statsOptions();
  for (let i = 0; i < rows.length; i++) {
    const y = S.opcjeY + i * S.opcjeOdstep;
    if (p.y >= y - 2 && p.y < y + S.opcjeOdstep - 2) {
      rows[i].akcja();
      return;
    }
  }
  closeStats();
}

function savedSkin() {
  try {
    const v = Number(localStorage.getItem(SKORY.klucz));
    return Number.isInteger(v) && v >= 0 && v < SKORY.warianty.length ? v : 0;
  } catch (err) {
    return 0;
  }
}

const skin = { wybor: savedSkin() };
const SKIN_NAMES = SKORY.warianty.map((_, i) => 'skora' + i);

function totalStars() {
  let n = 0;
  for (let i = 0; i < POZIOMY.length; i++) n += progress.oceny[i] || 0;
  return n;
}

function unlockedSkins() {
  const stars = totalStars();
  let n = 0;
  for (const v of SKORY.warianty) if (stars >= v.gwiazdki) n++;
  return Math.max(1, n);
}

function activeSkin() {
  if (!SKORY.wlaczona) return 0;
  return skin.wybor < unlockedSkins() ? skin.wybor : 0;
}

function skinColor(color, index) {
  if (index === 0) return color;
  const V = SKORY.warianty[index];
  if (color === PALETTE.c) return V.c;
  if (color === PALETTE.g) return V.g;
  return color;
}

function cycleSkin() {
  if (!SKORY.wlaczona) return;
  skin.wybor = (activeSkin() + 1) % unlockedSkins();
  const next = SKORY.warianty[unlockedSkins()];
  showMessage(unlockedSkins() > 1 || !next ? tx('kolorPostaci', { k: tx('kolory')[skin.wybor] }) : tx('kolorNastepny', { g: next.gwiazdki }));
  try {
    localStorage.setItem(SKORY.klucz, String(skin.wybor));
  } catch (err) {
    return;
  }
}

function drawSkinPreview() {
  if (!SKORY.wlaczona) return;
  drawRuns(playerSpriteRuns(SPRITES.stand, -1), SKORY.podgladX, SKORY.podgladY);
}

function savedGhostOn() {
  try {
    const saved = localStorage.getItem(DUCH.kluczWlaczenia);
    return saved === null ? true : saved === '1';
  } catch (err) {
    return true;
  }
}

const ghost = { on: savedGhostOn(), xs: [], ys: [], fs: [], play: null };

function ghostReset() {
  ghost.xs.length = 0;
  ghost.ys.length = 0;
  ghost.fs.length = 0;
}

function ghostSampleStep() {
  return DUCH.co * STEP;
}

function ghostRecord() {
  if (!DUCH.wlaczony) return;
  const index = Math.floor(game.time / ghostSampleStep() + 1e-6);
  if (index !== ghost.xs.length || index >= DUCH.maksProbek) return;
  ghost.xs.push(Math.round(player.x));
  ghost.ys.push(Math.round(player.y + player.h));
  ghost.fs.push((player.facing < 0 ? 1 : 0) | (player.crouching ? 2 : 0) | (player.onGround ? 0 : 4));
}

function ghostEncode() {
  const out = [];
  let px = 0;
  let py = 0;
  for (let i = 0; i < ghost.xs.length; i++) {
    out.push((ghost.xs[i] - px) + ',' + (ghost.ys[i] - py) + ',' + ghost.fs[i]);
    px = ghost.xs[i];
    py = ghost.ys[i];
  }
  return out.join(';');
}

function ghostDecode(text) {
  if (typeof text !== 'string' || text.length === 0) return null;
  const parts = text.split(';');
  const xs = new Int16Array(parts.length);
  const ys = new Int16Array(parts.length);
  const fs = new Uint8Array(parts.length);
  let px = 0;
  let py = 0;
  for (let i = 0; i < parts.length; i++) {
    const v = parts[i].split(',');
    if (v.length !== 3) return null;
    px += Number(v[0]);
    py += Number(v[1]);
    if (!isFinite(px) || !isFinite(py)) return null;
    xs[i] = px;
    ys[i] = py;
    fs[i] = Number(v[2]) & 7;
  }
  return { xs, ys, fs };
}

function ghostSave() {
  if (!DUCH.wlaczony || ghost.xs.length < 2) return;
  try {
    localStorage.setItem(DUCH.klucz + (game.levelIndex + 1), ghostEncode());
  } catch (err) {
    return;
  }
}

function ghostLoad() {
  ghost.play = null;
  if (!DUCH.wlaczony) return;
  try {
    ghost.play = ghostDecode(localStorage.getItem(DUCH.klucz + (game.levelIndex + 1)));
  } catch (err) {
    ghost.play = null;
  }
}

function toggleGhost() {
  ghost.on = !ghost.on;
  showMessage(tx(ghost.on ? 'duchWlaczony' : 'duchWylaczony'));
  try {
    localStorage.setItem(DUCH.kluczWlaczenia, ghost.on ? '1' : '0');
  } catch (err) {
    return;
  }
}

function drawGhost() {
  const G = ghost.play;
  if (!DUCH.wlaczony || !ghost.on || G === null || !PAUSABLE_STATES.includes(game.state)) return;
  const t = (view.alpha < 1 ? game.time - (1 - view.alpha) * STEP : game.time) / ghostSampleStep();
  const i = Math.floor(t);
  if (i < 0 || i + 1 >= G.xs.length) return;
  const k = t - i;
  const x = G.xs[i] + (G.xs[i + 1] - G.xs[i]) * k;
  const feet = G.ys[i] + (G.ys[i + 1] - G.ys[i]) * k;
  const f = G.fs[i];
  let parts = SPRITES.stand;
  let h = CHAR.wysokosc;
  if (f & 2) {
    parts = SPRITES.crouch;
    h = CHAR.wysokoscKucania;
  } else if (f & 4) parts = SPRITES.jump;
  else if (G.xs[i + 1] !== G.xs[i]) parts = SPRITES.run[Math.floor(t * DUCH.co * STEP * CHAR.klatkiBieguNaSekunde) % SPRITES.run.length];
  const px = snapPx(x) - camX - SPRITE_OFFSET_X;
  if (px < -CHAR.szerokoscSprite || px > SCREEN_W) return;
  ctx.globalAlpha = DUCH.alfa;
  drawRuns(playerSpriteRuns(parts, f & 1 ? -1 : 1, DUCH.kolor), px, snapPx(feet) - h);
  ctx.globalAlpha = 1;
}

function drawWarningScreen() {
  const B = BLYSKI;
  ctx.fillStyle = UI.kolorTla;
  ctx.fillRect(0, 0, SCREEN_W, SCREEN_H);
  drawCentered(tx('ostrzezenieTytul'), B.tytulY, UI.skalaTytulu, DIAG.kolorOstrzezenia);
  tx('ostrzezenieOpis').forEach((line, i) => drawCentered(line, B.opisY + i * B.opisOdstep, 1, UI.kolorTekstu));
  const r = warningRects();
  const labels = [tx('ostrzezenieWlacz'), tx('ostrzezenieWylacz')];
  for (let i = 0; i < 2; i++) {
    const selected = game.ostrzezenieWybor === i;
    drawMenuButton({ x: r[i].x, y: r[i].y, szerokosc: r[i].w, wysokosc: r[i].h, kolorRamki: selected ? UI.kolorAkcentu : UI.kolorRamkiKafla }, labels[i]);
    if (selected) {
      ctx.fillStyle = UI.kolorAkcentu;
      ctx.fillRect(r[i].x - 4, r[i].y + (r[i].h >> 1) - 1, 2, 3);
      ctx.fillRect(r[i].x + r[i].w + 2, r[i].y + (r[i].h >> 1) - 1, 2, 3);
    }
  }
  drawCentered(tx(touch.aktywny ? 'ostrzezeniePodpowiedzDotyk' : 'ostrzezeniePodpowiedz'), B.podpowiedzY, 1, UI.kolorTekstu);
  drawCentered(tx(touch.aktywny ? 'ostrzezenieNotkaDotyk' : 'ostrzezenieNotka'), B.notkaY, 1, UI.podtytulNazwyKolor);
}

function showMessage(text) {
  game.komunikat = { tekst: text, czas: UI.komunikat.czas };
}

function update(dt) {
  game.clock += dt;
  if (game.state === 'gra' || game.state === 'smierc') progress.czasGry += dt;
  if (game.state === 'start' || game.state === 'wybor' || game.state === 'gratulacje' || game.state === 'ostrzezenie' || game.state === 'statystyki') {
    input.jumpPressed = false;
    input.anyPressed = false;
    return;
  }
  if (game.state !== 'meta') input.anyPressed = false;
  if (game.state === 'smierc') {
    updateDying(dt);
    return;
  }
  if (game.state === 'meta') {
    updateFinished(dt);
    return;
  }

  prevBottom = player.y + player.h;

  if (anyDown(DOWN_KEYS)) {
    if (player.onGround) setCrouch(true);
  } else {
    setCrouch(false);
  }

  const wasRunning = player.vx !== 0;
  let dir = 0;
  if (anyDown(LEFT_KEYS)) dir -= 1;
  if (anyDown(RIGHT_KEYS)) dir += 1;
  const tempo = multiplier('tempo');
  const speed = player.crouching ? CHAR.predkoscKucania : CHAR.predkoscBiegu * tempo;
  player.vx = dir * speed;
  if (dir !== 0) player.facing = dir;
  if (dir !== 0 && !wasRunning && player.onGround && !player.crouching) fxDust('start', player.x + player.w / 2 - dir * 3, player.y + player.h, -dir);

  const jumpScale = Math.sqrt(multiplier('deska'));
  if (input.jumpPressed && player.onGround && player.crouching && platformBelow()) {
    player.y += 1;
    player.vy = PLAT.predkoscZeskoku;
    player.onGround = false;
  }
  if (input.jumpPressed && player.onGround && !player.crouching) {
    player.vy = -PHYS.predkoscSkoku * jumpScale;
    player.onGround = false;
    playSfx('skok');
  }
  input.jumpPressed = false;

  const cut = PHYS.predkoscUciecia * jumpScale;
  if (!anyDown(JUMP_KEYS) && player.vy < -cut) {
    player.vy = -cut;
  }

  player.vy = Math.min(player.vy + PHYS.grawitacja * dt, PHYS.maxPredkoscSpadania);

  const wasGround = player.onGround;
  const impact = player.vy;
  moveX(dt);
  moveY(dt);
  if (!wasGround && player.onGround && impact > SND.progLadowania) {
    playSfx('ladowanie');
    fxDust('ladowanie', player.x + player.w / 2, player.y + player.h, 0);
  }

  if (player.onGround && player.vx !== 0) {
    player.animTime += dt * tempo;
  } else {
    player.animTime = 0;
  }

  if (!boss || boss.stan !== 'smierc') game.time += dt;
  ghostRecord();
  updateActivePowerups(dt);
  updateCamera(dt);
  spawnObstacles();
  stepObstacles(dt);
  stepEnemies(dt);
  stepProjectiles(dt);
  if (level.boss) {
    updateArena(dt);
    if (game.state !== 'gra') return;
  }

  if (player.y + player.h > CHAR.limitUpadku) {
    die();
    return;
  }

  collectPowerups();
  collectReflectors();
  crossCheckpoints();
  checkEnemyHits();
  if (game.state !== 'gra') return;
  checkProjectileHits();
  if (game.state !== 'gra') return;
  checkObstacleHits();
  if (game.state !== 'gra') return;
  if (level.boss) {
    checkBossHits();
    return;
  }

  if (player.x + player.w / 2 >= FINISH_X + FINISH.szerokosc / 2) {
    finish();
  }
}

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;

function makeTree(kind, w, h, color, cap) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const g = c.getContext('2d');
  g.fillStyle = color;
  const cx = Math.floor(w / 2);

  if (kind === 'sosna') {
    const crownH = h - TREE.wysokoscPnia;
    const tiers = Math.max(3, Math.round(crownH / TREE.wysokoscPietra));
    const tierH = crownH / tiers;
    for (let r = 0; r < crownH; r++) {
      const t = Math.floor(r / tierH);
      const inTier = (r - t * tierH) / tierH;
      const frac = (r / crownH) * 0.6 + inTier * 0.4;
      const half = Math.max(1, Math.round((w / 2) * (0.15 + 0.85 * frac)));
      g.fillRect(cx - half, r, half * 2, 1);
      if (cap && r - Math.ceil(t * tierH) < 2) {
        g.fillStyle = cap;
        if (r - Math.ceil(t * tierH) === 0) g.fillRect(cx - half, r, half * 2, 1);
        else {
          g.fillRect(cx - half, r, 1, 1);
          g.fillRect(cx + half - 1, r, 1, 1);
        }
        g.fillStyle = color;
      }
    }
    g.fillRect(cx - 1, crownH, TREE.szerokoscPnia, TREE.wysokoscPnia);
  } else {
    const crownH = Math.round(h * TREE.koronaOkraglego);
    for (let r = 0; r < crownH; r++) {
      const dy = (r + 0.5 - crownH / 2) / (crownH / 2);
      const half = Math.round((w / 2) * Math.sqrt(Math.max(0, 1 - dy * dy)));
      if (half > 0) g.fillRect(cx - half, r, half * 2, 1);
      if (cap && half > 0 && r < 3) {
        g.fillStyle = cap;
        g.fillRect(cx - half, r, half * 2, 1);
        g.fillStyle = color;
      }
    }
    g.fillRect(cx - 1, crownH - 1, TREE.szerokoscPnia, h - crownH + 1);
  }
  return c;
}

function makeTreeVariants(cfg) {
  const variants = [];
  for (let k = 0; k < cfg.wariantow; k++) {
    const h = cfg.wysokoscMin + hash(k * 3 + cfg.ziarno) % (cfg.wysokoscMax - cfg.wysokoscMin + 1);
    const w = cfg.szerokoscMin + hash(k * 3 + 1 + cfg.ziarno) % (cfg.szerokoscMax - cfg.szerokoscMin + 1);
    const round = k % cfg.okraglyCo === cfg.okraglyCo - 1;
    variants.push(makeTree(round ? 'okragle' : 'sosna', w, h, cfg.kolor, cfg.czapa));
  }
  return variants;
}

function makeBuilding(w, h, cfg, M, seed) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const g = c.getContext('2d');
  g.fillStyle = cfg.kolor;
  const kind = seed % 3;
  let top = 0;
  if (kind === 1) {
    top = Math.max(4, Math.floor(h * M.uskok));
    g.fillRect(Math.floor(w / 4), 0, w - 2 * Math.floor(w / 4), top);
  } else if (kind === 2) {
    top = M.antena;
    g.fillRect(Math.floor(w / 2), 0, 1, top);
  }
  g.fillRect(0, top, w, h - top);
  g.globalAlpha = cfg.oknaAlfa;
  for (let y = top + 3; y < h - 3; y += M.oknaOdstepY) {
    for (let x = 2; x < w - 2; x += M.oknaOdstepX) {
      const hh = hash(seed * 7919 + x * 31 + y * 17);
      if (hh % M.oknaCo !== 0) continue;
      g.fillStyle = M.okna[(hh >>> 8) % M.okna.length];
      g.fillRect(x, y, M.oknoSzerokosc, M.oknoWysokosc);
    }
  }
  g.globalAlpha = 1;
  return c;
}

function makeBuildingVariants(cfg, M) {
  const variants = [];
  for (let k = 0; k < cfg.wariantow; k++) {
    const h = cfg.wysokoscMin + hash(k * 3 + cfg.ziarno) % (cfg.wysokoscMax - cfg.wysokoscMin + 1);
    const w = cfg.szerokoscMin + hash(k * 3 + 1 + cfg.ziarno) % (cfg.szerokoscMax - cfg.szerokoscMin + 1);
    variants.push(makeBuilding(w, h, cfg, M, k + cfg.ziarno * 13));
  }
  return variants;
}

let CARS = [];
let FOREST = [];
let RAIL = BARRIER;
let DECK = PLAT;
let LAMPS = [];

function patternColor(kind, u, v, r, k) {
  const dist = Math.hypot(u, v);
  if (kind === 'beczka') {
    if (dist > r) return null;
    if (Math.hypot(u - 0.55 * r, v) < 0.2 * r) return k.znak;
    if (Math.abs(v) < 0.1 * r) return k.obrecz;
    if (dist > 0.82 * r) return k.krawedz;
    if (dist > 0.5 * r && dist < 0.62 * r) return k.obrecz;
    return k.dno;
  }
  if (kind === 'opona') {
    if (dist > r) return null;
    if (dist > 0.45 * r) {
      if (dist > 0.78 * r) {
        const seg = Math.floor((Math.atan2(v, u) + Math.PI) / (Math.PI / 6));
        return seg % 2 === 0 ? k.bieznik : k.bieznikJasny;
      }
      return k.bok;
    }
    if (Math.abs(v) < 0.12 * r || Math.abs(u) < 0.12 * r) return k.felga;
    return null;
  }
  if (kind === 'kosz') {
    if (dist > r) return null;
    if (v < -0.1 * r) {
      return dist > 0.6 * r && dist < 0.9 * r ? k.raczka : null;
    }
    if (v < 0.3 * r) return k.obrecz;
    return (Math.floor(u + 10) + Math.floor(v + 10)) % 2 === 0 ? k.plecionka : k.plecionkaCiemna;
  }
  const s = Math.pow(Math.abs(u) / r, 4) + Math.pow(Math.abs(v) / r, 4);
  if (s > 1) return null;
  if (Math.abs(u - 0.4 * r) < 0.22 * r && Math.abs(v - 0.5 * r) < 0.2 * r) return k.etykieta;
  if (Math.abs(v) < 0.14 * r) return k.tasma;
  if (s > 0.7) return k.krawedz;
  return k.tektura;
}

function makeObstacleFrames(cfg) {
  const d = cfg.srednica;
  const r = d / 2;
  const frames = [];
  for (let k = 0; k < OBST.klatek; k++) {
    const c = document.createElement('canvas');
    c.width = d;
    c.height = d;
    const g = c.getContext('2d');
    const angle = (k / OBST.klatek) * Math.PI * 2;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    for (let j = 0; j < d; j++) {
      for (let i = 0; i < d; i++) {
        const u = i + 0.5 - r;
        const v = j + 0.5 - r;
        const color = patternColor(cfg.rodzaj, u * cos + v * sin, -u * sin + v * cos, r, cfg.kolory);
        if (color) {
          g.fillStyle = color;
          g.fillRect(i, j, 1, 1);
        }
      }
    }
    frames.push(c);
  }
  return frames;
}

const BASKET_FRAMES = makeObstacleFrames({ rodzaj: 'kosz', srednica: PICKER.kosz.rozmiar, kolory: PICKER.kosz.kolory });

const OBSTACLE_FRAMES = {};
for (const name in OBST.typy) OBSTACLE_FRAMES[name] = makeObstacleFrames(OBST.typy[name]);

function drawSky() {
  const colors = level.motyw.niebo;
  const bandH = Math.ceil(GROUND_Y / colors.length);
  const shift = parallaxShift(-camY, CAM.paralaksaNieba);
  ctx.fillStyle = colors[0];
  ctx.fillRect(0, shift - 100, SCREEN_W, bandH + 100);
  for (let i = 1; i < colors.length; i++) {
    ctx.fillStyle = colors[i];
    ctx.fillRect(0, i * bandH + shift, SCREEN_W, bandH);
  }
}

function fillDisc(g, cx, cy, r) {
  for (let dy = -r; dy <= r; dy++) {
    const half = Math.round(Math.sqrt(r * r - dy * dy));
    g.fillRect(cx - half, cy + dy, half * 2 + 1, 1);
  }
}

const statics = { gwiazdyX: null, gwiazdyY: null, slonce: null, slonceR: 0, kaluze: null };

function buildStars() {
  const S = level.motyw.gwiazdy;
  statics.gwiazdyX = null;
  statics.gwiazdyY = null;
  if (!S) return;
  statics.gwiazdyX = new Int16Array(S.liczba);
  statics.gwiazdyY = new Int16Array(S.liczba);
  for (let i = 0; i < S.liczba; i++) {
    const h = hash(i * 5 + S.ziarno);
    statics.gwiazdyX[i] = h % SCREEN_W;
    statics.gwiazdyY[i] = (h >>> 9) % S.wysokosc;
  }
}

function buildSun() {
  const S = level.motyw.slonce;
  statics.slonce = null;
  if (!S) return;
  let r = S.promien + 1;
  for (const ring of S.poswiata) r = Math.max(r, ring.promien);
  let bottom = r;
  if (S.pasy) {
    for (let y = S.pasy.od, k = 0; y <= S.promien; y += S.pasy.co + k, k++) bottom = Math.max(bottom, y + S.pasy.grubosc + Math.floor(k / 2));
  }
  const c = document.createElement('canvas');
  c.width = 2 * r + 1;
  c.height = r + bottom + 1;
  const g = c.getContext('2d');
  g.fillStyle = S.kolorPoswiaty;
  for (const ring of S.poswiata) {
    g.globalAlpha = ring.alfa;
    fillDisc(g, r, r, ring.promien);
  }
  g.globalAlpha = 1;
  g.fillStyle = S.kolor;
  fillDisc(g, r, r, S.promien);
  if (S.pasy) {
    g.fillStyle = S.pasy.kolor;
    for (let y = r + S.pasy.od, k = 0; y <= r + S.promien; y += S.pasy.co + k, k++) {
      g.fillRect(r - S.promien - 1, y, S.promien * 2 + 3, S.pasy.grubosc + Math.floor(k / 2));
    }
  }
  statics.slonce = c;
  statics.slonceR = r;
}

function buildPuddles() {
  const D = level.motyw.deszcz;
  statics.kaluze = null;
  if (!D) return;
  const asphaltH = SCREEN_H - GROUND_Y - ROAD.wysokoscPobocza;
  const cells = Math.floor(LEVEL_W / D.kaluzaKomorka) + 3;
  const table = new Int16Array(cells * 3);
  for (let k = 0; k < cells; k++) {
    const hh = hash((k - 1) * 7 + 3);
    if (hh % D.kaluzaCo !== 0) continue;
    table[k * 3] = D.kaluzaMin + (hh >>> 4) % D.kaluzaRozrzut;
    table[k * 3 + 1] = (hh >>> 8) % D.kaluzaKomorka;
    table[k * 3 + 2] = (hh >>> 12) % (asphaltH - 4);
  }
  statics.kaluze = table;
}

function buildStaticLayers() {
  buildStars();
  buildSun();
  buildPuddles();
}

function drawStars() {
  const S = level.motyw.gwiazdy;
  if (!S) return;
  const shift = parallaxShift(-camY, CAM.paralaksaNieba);
  const off = parallaxShift(camX, S.paralaksa);
  ctx.fillStyle = S.kolor;
  for (let i = 0; i < S.liczba; i++) {
    const x = (((statics.gwiazdyX[i] - off) % SCREEN_W) + SCREEN_W) % SCREEN_W;
    const y = statics.gwiazdyY[i] + shift;
    const twinkle = hash(Math.floor(game.clock * S.migotanie) * 13 + i) % 5 === 0 ? 0.35 : 1;
    ctx.globalAlpha = S.alfa * twinkle * (1 - (y - shift) / (S.wysokosc * 1.6)) * (i % 3 === 0 ? 1 : 0.6);
    ctx.fillRect(x, y, 1, 1);
    if (i % S.duzeCo === 0) {
      ctx.globalAlpha *= 0.5;
      ctx.fillRect(x - 1, y, 3, 1);
      ctx.fillRect(x, y - 1, 1, 3);
    }
  }
  ctx.globalAlpha = 1;
}

function drawSun() {
  const S = level.motyw.slonce;
  if (!S) return;
  const cy = S.y + parallaxShift(-camY, CAM.paralaksaNieba);
  ctx.drawImage(statics.slonce, S.x - statics.slonceR, cy - statics.slonceR);
}

function stormLevel() {
  const B = level.motyw.burza;
  if (!B || !fx.wlaczone || !flashesOn()) return 0;
  const n = Math.floor(game.clock / B.co);
  const start = ((hash(n * 13 + B.ziarno) % 1000) / 1000) * (B.co - B.czas);
  const k = (game.clock - n * B.co - start) / B.czas;
  if (k < 0 || k >= 1) return 0;
  if (k < 0.15) return 1;
  if (k < 0.3) return 0.25;
  return 0.8 * (1 - (k - 0.3) / 0.7);
}

function drawLightning() {
  const B = level.motyw.burza;
  if (!B) return;
  const s = stormLevel();
  if (s <= 0) return;
  const shift = parallaxShift(-camY, CAM.paralaksaNieba);
  ctx.fillStyle = B.kolor;
  ctx.globalAlpha = B.alfaNieba * s;
  ctx.fillRect(0, 0, SCREEN_W, GROUND_Y + shift);
  ctx.globalAlpha = 1;
  if (s < 0.5) return;
  const n = Math.floor(game.clock / B.co);
  let x = B.margines + (hash(n * 7 + 1) % (SCREEN_W - 2 * B.margines));
  let y = shift - 4;
  ctx.fillStyle = B.piorun;
  let k = 0;
  while (y < B.dlugoscPioruna + shift) {
    const h = hash(n * 31 + k);
    const dy = 3 + (h % 4);
    const dx = ((h >>> 4) % 7) - 3;
    for (let j = 0; j < dy; j++) ctx.fillRect(Math.round(x + (dx * j) / dy), y + j, k % 5 === 0 ? 2 : 1, 1);
    if (k === 4) {
      let bx = x, by = y;
      for (let j = 0; j < 14; j++) ctx.fillRect(Math.round(bx + j * 0.8), by + j, 1, 1);
    }
    x += dx;
    y += dy;
    k++;
  }
}

function drawStormFlash() {
  const B = level.motyw.burza;
  if (!B) return;
  const s = stormLevel();
  if (s <= 0) return;
  ctx.fillStyle = B.kolor;
  ctx.globalAlpha = B.alfaEkranu * s;
  ctx.fillRect(0, 0, SCREEN_W, SCREEN_H);
  ctx.globalAlpha = 1;
}

function tunnelFlicker(k) {
  const L = level.motyw.tunel.lampy;
  if (hash(k + L.ziarno) % L.migoczeCo !== 0) return 1;
  return hash(Math.floor(game.clock * L.migotanieSzybkosc) * 31 + k) % 10 < 2 ? L.migotanieMin : 1;
}

function drawTunnel() {
  const U = level.motyw.tunel;
  if (!U) return;
  const shift = parallaxShift(-camY, CAM.paralaksaNieba);
  const off = parallaxShift(camX, U.paralaksa);
  const bandH = Math.ceil(GROUND_Y / level.motyw.niebo.length);
  const ceil = U.strop + shift;
  ctx.fillStyle = U.kolorDolu;
  ctx.fillRect(0, level.motyw.niebo.length * bandH + shift, SCREEN_W, SCREEN_H);
  ctx.fillStyle = U.kolorSpoiny;
  for (let y = ceil + U.spoinaCo; y < SCREEN_H; y += U.spoinaCo) ctx.fillRect(0, y, SCREEN_W, 1);
  for (let x = -(off % U.panelCo); x < SCREEN_W; x += U.panelCo) ctx.fillRect(x, ceil, 1, SCREEN_H - ceil);
  if (U.pas) {
    const P = U.pas;
    for (let x = -(off % (P.dlugosc * 2)); x < SCREEN_W; x += P.dlugosc * 2) {
      ctx.fillStyle = P.kolor;
      ctx.fillRect(x, P.y + shift, P.dlugosc, P.wysokosc);
      ctx.fillStyle = P.kolorPrzerwy;
      ctx.fillRect(x + P.dlugosc, P.y + shift, P.dlugosc, P.wysokosc);
    }
  }
  const L = U.lampy;
  const first = Math.floor(off / L.co) - 1;
  const last = Math.floor((off + SCREEN_W) / L.co) + 1;
  for (let k = first; k <= last; k++) {
    const x = k * L.co - off + (L.co >> 1);
    const f = tunnelFlicker(k);
    ctx.fillStyle = L.kolorSwiatla;
    for (let r = 0; r < L.stozekDlugosc; r++) {
      const half = Math.round(L.szerokosc / 2 + (r / L.stozekDlugosc) * (L.stozekSzerokosc - L.szerokosc) / 2);
      ctx.globalAlpha = L.stozekAlfa * f * (1 - r / L.stozekDlugosc);
      ctx.fillRect(x - half, ceil + U.zebraWystaje + r, half * 2, 1);
    }
  }
  ctx.globalAlpha = 1;
  ctx.fillStyle = U.kolorStropu;
  ctx.fillRect(0, 0, SCREEN_W, ceil);
  ctx.fillStyle = U.kolorStropuJasny;
  ctx.fillRect(0, ceil - 3, SCREEN_W, 1);
  ctx.fillStyle = U.kolorKrawedzi;
  ctx.fillRect(0, ceil - 1, SCREEN_W, 1);
  for (let x = -(off % U.zebraCo); x < SCREEN_W; x += U.zebraCo) {
    ctx.fillStyle = U.kolorZebra;
    ctx.fillRect(x, 0, U.zebraSzerokosc, ceil + U.zebraWystaje);
    ctx.fillStyle = U.kolorStropuJasny;
    ctx.fillRect(x, 0, 1, ceil + U.zebraWystaje);
  }
  for (let k = first; k <= last; k++) {
    const x = k * L.co - off + (L.co >> 1);
    const f = tunnelFlicker(k);
    const y = ceil + U.zebraWystaje;
    ctx.fillStyle = L.kolorSwiatla;
    ctx.globalAlpha = L.poswiataAlfa * f;
    ctx.fillRect(x - (L.szerokosc >> 1) - 2, y - 2, L.szerokosc + 4, 6);
    ctx.globalAlpha = 1;
    ctx.fillStyle = L.kolorObudowy;
    ctx.fillRect(x - (L.szerokosc >> 1), y - 2, L.szerokosc, 2);
    ctx.fillStyle = L.kolor;
    ctx.globalAlpha = f;
    ctx.fillRect(x - (L.szerokosc >> 1) + 1, y, L.szerokosc - 2, 1);
    ctx.globalAlpha = 1;
  }
}

const NEON_REFLECTIONS = [];
let neonCount = 0;

function addNeonReflection(x, kolor, f, hh) {
  let n = NEON_REFLECTIONS[neonCount];
  if (n === undefined) n = NEON_REFLECTIONS[neonCount] = { x: 0, kolor: '', f: 0, hh: 0 };
  n.x = x;
  n.kolor = kolor;
  n.f = f;
  n.hh = hh;
  neonCount++;
}

function drawNeon(M, hh, x, y, w) {
  if (hh % M.neonyCo !== 0) return;
  const sw = Math.min(w - 4, M.neonSzerokosc + ((hh >>> 9) % 6));
  if (sw < 4) return;
  const sh = M.neonWysokosc;
  const nx = x + ((w - sw) >> 1);
  const ny = y + M.neonOdGory + ((hh >>> 13) % 8);
  const f = (hh >>> 3) % M.migoczeCo === 0 && hash(Math.floor(game.clock * M.migotanieSzybkosc) * 7 + hh) % 4 === 0 ? M.migotanieMin : 1;
  ctx.fillStyle = M.neony[(hh >>> 5) % M.neony.length];
  if (M.odbicia) addNeonReflection(nx + (sw >> 1), ctx.fillStyle, f, hh);
  ctx.globalAlpha = M.poswiataAlfa * f;
  ctx.fillRect(nx - 2, ny - 2, sw + 4, sh + 4);
  ctx.globalAlpha = M.neonAlfa * f;
  ctx.fillRect(nx, ny, sw, 1);
  ctx.fillRect(nx, ny + sh - 1, sw, 1);
  ctx.fillRect(nx, ny, 1, sh);
  ctx.fillRect(nx + sw - 1, ny, 1, sh);
  for (let k = 2; k < sw - 2; k += 2) {
    if (hash(hh + k) % 3 !== 0) ctx.fillRect(nx + k, ny + 2, 1, sh - 4);
  }
  ctx.globalAlpha = 1;
}

function drawFogVeil(alpha) {
  ctx.fillStyle = level.motyw.mgla.kolor;
  ctx.globalAlpha = alpha;
  ctx.fillRect(0, camY, SCREEN_W, SCREEN_H);
  ctx.globalAlpha = 1;
}

function drawFogBands() {
  const M = level.motyw.mgla;
  if (!M || !M.pasma) return;
  const P = M.pasma;
  const span = SCREEN_W + P.dlugosc * 2;
  ctx.fillStyle = M.kolor;
  for (let k = 0; k < P.liczba; k++) {
    const h = hash(k * 11 + 5);
    const x = ((((h % span) - camX * P.paralaksa + game.clock * P.predkosc) % span) + span) % span - P.dlugosc;
    const y = P.y + ((h >>> 8) % P.rozrzutY);
    for (let s = 0; s < 3; s++) {
      ctx.globalAlpha = P.alfa * (0.35 + s * 0.3);
      ctx.fillRect(Math.round(x) + s * 10, y - 3 + s * 2, P.dlugosc - s * 20, P.wysokosc + 6 - s * 4);
    }
  }
  ctx.globalAlpha = 1;
}

function drawSnow() {
  const S = level.motyw.snieg;
  if (!S) return;
  const span = SCREEN_W + S.margines * 2;
  const fall = SCREEN_H + 4;
  ctx.fillStyle = S.kolor;
  for (let i = 0; i < S.platki; i++) {
    const h1 = hash(i * 5 + 11);
    const h2 = hash(i * 5 + 12);
    const h3 = hash(i * 5 + 13);
    const speed = S.predkosc * (1 - S.rozrzutPredkosci * ((h3 % 100) / 100));
    const y = ((game.clock * speed + (h2 % fall)) % fall) - 2;
    const sway = Math.sin(game.clock * S.kolysanie + (h1 % 628) / 100) * S.amplituda;
    const x = ((((h1 % span) - camX * S.paralaksa + game.clock * S.wiatr + sway) % span) + span) % span - S.margines;
    const big = i % S.duzeCo === 0;
    ctx.globalAlpha = big ? S.alfa : S.alfa * 0.6;
    ctx.fillRect(Math.round(x), Math.round(y), big ? 2 : 1, big ? 2 : 1);
  }
  ctx.globalAlpha = 1;
}

function drawForestLayer(cfg, variants) {
  const offset = parallaxShift(camX, cfg.paralaksa);
  ctx.fillStyle = cfg.kolor;
  ctx.fillRect(0, cfg.podstawa, SCREEN_W, GROUND_Y - cfg.podstawa + CAM.dopelnienieLasu);

  const first = Math.floor(offset / cfg.odstep) - 1;
  const last = Math.floor((offset + SCREEN_W) / cfg.odstep) + 1;
  for (let i = first; i <= last; i++) {
    const hh = hash(i + cfg.ziarno);
    const tree = variants[hh % variants.length];
    const jitter = (hash(hh) % cfg.odstep) - (cfg.odstep >> 1);
    const x = i * cfg.odstep + jitter - offset - (tree.width >> 1);
    ctx.drawImage(tree, x, cfg.podstawa - tree.height);
    if (cfg.neony) drawNeon(cfg.neony, hh, x, cfg.podstawa - tree.height, tree.width);
  }
}

function drawForest() {
  if (level.motyw.tunel) return;
  neonCount = 0;
  const fog = level.motyw.mgla;
  FOREST.forEach((layerData, i) => {
    ctx.save();
    ctx.translate(0, parallaxShift(camY, 1 - layerData.cfg.paralaksaPionowa));
    drawForestLayer(layerData.cfg, layerData.variants);
    ctx.restore();
    if (fog) drawFogVeil(fog.warstwy[i]);
  });
}

function drawRoad() {
  const R = level.motyw.jezdnia;
  const asphaltTop = GROUND_Y + ROAD.wysokoscPobocza;
  const asphaltH = SCREEN_H - asphaltTop;

  ctx.fillStyle = R.kolorPobocza;
  ctx.fillRect(0, GROUND_Y, SCREEN_W, ROAD.wysokoscPobocza);
  ctx.fillStyle = R.kolorAsfaltu;
  ctx.fillRect(0, asphaltTop, SCREEN_W, asphaltH);

  const firstCell = Math.floor(camX / 4);
  const cells = SCREEN_W / 4 + 2;
  for (let i = firstCell; i < firstCell + cells; i++) {
    const hh = hash(i);
    const x = i * 4 - camX + (hh & 3);
    if (hh % 3 === 0) {
      ctx.fillStyle = R.kolorZwiru;
      ctx.fillRect(x, GROUND_Y + ((hh >>> 4) % ROAD.wysokoscPobocza), 1, 1);
    }
    if (((hh >>> 8) & 1) === 0) {
      ctx.fillStyle = ((hh >>> 20) & 1) ? R.kolorAsfaltuJasny : R.kolorAsfaltuCiemny;
      ctx.fillRect(x, asphaltTop + 1 + ((hh >>> 12) % (asphaltH - 1)), 1, 1);
    }
  }

  ctx.fillStyle = R.kolorZoltejLinii;
  ctx.fillRect(0, ROAD.zoltaLiniaY, SCREEN_W, 1);

  ctx.fillStyle = R.kolorBialejLinii;
  for (let x = -(camX % ROAD.okresKreski); x < SCREEN_W; x += ROAD.okresKreski) {
    ctx.fillRect(x, ROAD.srodkowaLiniaY, ROAD.dlugoscKreski, ROAD.srodkowaLiniaGrubosc);
  }
}

function mixHex(a, b, k) {
  const pa = parseInt(a.slice(1), 16);
  const pb = parseInt(b.slice(1), 16);
  const ch = (shift) => Math.round(((pa >> shift) & 255) * (1 - k) + ((pb >> shift) & 255) * k);
  return '#' + ((1 << 24) | (ch(16) << 16) | (ch(8) << 8) | ch(0)).toString(16).slice(1);
}

function buildCars() {
  const light = AUTA.poziomy[game.levelIndex + 1] || AUTA.poziomy[1];
  const tint = (c) => (light.odcien ? mixHex(c, light.odcien.kolor, light.odcien.sila) : c);
  const palette = {
    nadwozia: AUTA.nadwozia.map(tint),
    skrzynie: AUTA.skrzynie.map(tint),
    kabiny: AUTA.kabiny.map(tint),
    okna: tint(AUTA.okna),
    kola: tint(AUTA.kola),
  };
  CARS = AUTA.pasy.map((lane) => {
    const slot = AUTA.okres / lane.liczba;
    const px = (v) => Math.max(1, Math.round(v * lane.rozmiar));
    const cars = [];
    for (let k = 0; k < lane.liczba; k++) {
      const h = hash(k * 17 + lane.ziarno);
      const truck = (h % 100) / 100 < lane.ciezarowki;
      const T = truck ? AUTA.typy.ciezarowka : AUTA.typy.osobowe;
      const len = Math.max(8, px(T.dlugosc));
      const room = Math.max(0, slot - len - AUTA.przerwaMin);
      const car = { truck, len, offset: Math.round(k * slot + (((h >>> 12) % 100) / 100) * room), okna: palette.okna, kola: palette.kola };
      if (truck) {
        car.kabinaDlugosc = px(T.kabinaDlugosc);
        car.kabinaWysokosc = px(T.kabinaWysokosc);
        car.skrzyniaWysokosc = px(T.skrzyniaWysokosc);
        car.skrzynia = palette.skrzynie[(h >>> 8) % palette.skrzynie.length];
        car.kabina = palette.kabiny[(h >>> 16) % palette.kabiny.length];
        car.swiatloY = car.kabinaWysokosc > 4 ? 3 : 1;
      } else {
        car.nadwozie = px(T.nadwozie);
        car.dach = px(T.dach);
        car.dachStart = px(T.dachStart);
        car.dachDlugosc = px(T.dachDlugosc);
        car.kolor = palette.nadwozia[(h >>> 8) % palette.nadwozia.length];
        car.swiatloY = 1;
      }
      cars.push(car);
    }
    return { lane, cars, light };
  });
}

function carsVisible() {
  return AUTA.wlaczone && fx.wlaczone;
}

function drawCar(x, bottom, c, dir, light) {
  const front = (w) => (dir > 0 ? x + c.len - w : x);
  const rear = (w) => (dir > 0 ? x : x + c.len - w);
  const at = (offset, w) => (dir > 0 ? x + offset : x + c.len - offset - w);
  const wh = AUTA.kolaWysokosc;
  const ww = AUTA.kolaSzerokosc;
  let top;
  ctx.fillStyle = c.kola;
  if (c.truck) {
    const boxLen = c.len - c.kabinaDlugosc - 1;
    ctx.fillRect(at(1, ww), bottom - wh, ww, wh);
    ctx.fillRect(at(1 + ww + 1, ww), bottom - wh, ww, wh);
    ctx.fillRect(at(boxLen + 2, ww), bottom - wh, ww, wh);
    ctx.fillStyle = c.skrzynia;
    ctx.fillRect(at(0, boxLen), bottom - 1 - c.skrzyniaWysokosc, boxLen, c.skrzyniaWysokosc);
    ctx.fillStyle = c.kabina;
    ctx.fillRect(at(boxLen + 1, c.kabinaDlugosc), bottom - 1 - c.kabinaWysokosc, c.kabinaDlugosc, c.kabinaWysokosc);
    ctx.fillStyle = c.okna;
    ctx.fillRect(at(boxLen + 1 + c.kabinaDlugosc - 4, 3), bottom - c.kabinaWysokosc, 3, Math.max(1, Math.round(c.kabinaWysokosc / 3)));
    top = bottom - 1 - c.kabinaWysokosc;
  } else {
    ctx.fillRect(at(2, ww), bottom - wh, ww, wh);
    ctx.fillRect(at(c.len - 2 - ww, ww), bottom - wh, ww, wh);
    ctx.fillStyle = c.kolor;
    ctx.fillRect(x, bottom - 1 - c.nadwozie, c.len, c.nadwozie);
    ctx.fillRect(at(c.dachStart, c.dachDlugosc), bottom - 1 - c.nadwozie - c.dach, c.dachDlugosc, c.dach);
    ctx.fillStyle = c.okna;
    ctx.fillRect(at(c.dachStart + 1, c.dachDlugosc - 2), bottom - c.nadwozie - c.dach, c.dachDlugosc - 2, Math.max(1, c.dach - 1));
    top = bottom - 1 - c.nadwozie - c.dach;
  }
  const hy = (c.truck ? bottom - 1 - c.kabinaWysokosc : bottom - 1 - c.nadwozie) + c.swiatloY;
  const S = AUTA.swiatlo;
  const beam = Math.max(8, Math.round(S.wiazka * (c.len > S.progKrotkiejWiazki ? 1 : S.krotkaWiazka)));
  const seg = beam >> 2;
  ctx.fillStyle = S.kolorWiazki;
  for (let k = 0; k < 4; k++) {
    ctx.globalAlpha = S.alfaWiazki * light.reflektory * (1 - k * S.spadekWiazki);
    const bx = dir > 0 ? x + c.len + k * seg : x - (k + 1) * seg;
    ctx.fillRect(bx, hy - (k >> 1), seg, 2 + k);
  }
  ctx.globalAlpha = S.minimumReflektora + (1 - S.minimumReflektora) * light.reflektory;
  ctx.fillStyle = S.kolorReflektora;
  ctx.fillRect(front(1), hy, 1, 2);
  ctx.fillStyle = S.kolorTylnego;
  ctx.globalAlpha = S.poswiataTylnego * light.tylne;
  ctx.fillRect(rear(1) + (dir > 0 ? -1 : 1), hy - 1, 2, 4);
  ctx.globalAlpha = S.minimumTylnego + (1 - S.minimumTylnego) * light.tylne;
  ctx.fillRect(rear(1), hy, 1, 2);
  ctx.globalAlpha = 1;
  return top;
}

function drawCars() {
  if (!carsVisible()) return;
  const period = AUTA.okres;
  const reach = AUTA.swiatlo.wiazka + 4;
  for (const group of CARS) {
    const lane = group.lane;
    const travel = lane.kierunek * lane.predkosc * game.clock;
    for (const car of group.cars) {
      const base = ((((car.offset + travel - camX) % period) + period) % period) - period;
      for (let x = Math.round(base); x < SCREEN_W + reach; x += period) {
        if (x + car.len + reach < 0) continue;
        drawCar(x, lane.dol, car, lane.kierunek, group.light);
      }
    }
  }
}

function drawNeonReflections() {
  const M = level.motyw.miasto;
  if (!M || !M.odbicia || neonCount === 0) return;
  const O = M.odbicia;
  const asphaltTop = GROUND_Y + ROAD.wysokoscPobocza;
  const len = Math.min(O.dlugosc, SCREEN_H - asphaltTop - 1);
  for (let i = 0; i < neonCount; i++) {
    const n = NEON_REFLECTIONS[i];
    ctx.fillStyle = n.kolor;
    for (let r = 1; r < len; r++) {
      if ((r + Math.floor(game.clock * O.fale)) % 3 === 0) continue;
      const wob = Math.round(Math.sin(game.clock * O.falowanie + r * 0.8 + (n.hh % 7)));
      ctx.globalAlpha = O.alfa * (1 - r / len) * n.f;
      const w = r < O.szerokie ? 3 : 1 + (r % 2);
      ctx.fillRect(n.x - (w >> 1) + wob, asphaltTop + r, w, 1);
    }
  }
  ctx.globalAlpha = 1;
}

function drawLongShadows() {
  const S = level.motyw.cienie;
  if (!S) return;
  const first = Math.max(0, Math.floor((camX - S.slupekDlugosc * S.slupekNachylenie) / TILE));
  const last = Math.min(LEVEL_COLS - 1, Math.floor((camX + SCREEN_W + 2 * TILE) / TILE));
  const roadTop = GROUND_Y + ROAD.wysokoscPobocza;
  ctx.fillStyle = S.kolor;
  ctx.globalAlpha = S.alfa;
  for (let col = first; col <= last; col++) {
    const top = railTopY(col);
    if (top === null) continue;
    const h = GROUND_Y - top;
    ctx.fillRect(Math.round(col * TILE - camX - h * S.przesuniecie), Math.round(roadTop + h * S.glebokosc), TILE, S.grubosc);
    if (col % BARRIER.slupekCo !== 1) continue;
    const px = col * TILE + BARRIER.slupekOdsuniecie - camX;
    for (let i = 0; i < S.slupekDlugosc; i++) {
      ctx.fillRect(Math.round(px - i * S.slupekNachylenie), GROUND_Y + i, BARRIER.slupekSzerokosc, 1);
    }
  }
  ctx.globalAlpha = 1;
}

function lampFlicker(col) {
  const L = level.motyw.latarnie;
  if (hash(col + L.ziarnoMigotania) % L.migoczeCo !== 0) return 1;
  return hash(Math.floor(game.clock * L.migotanieSzybkosc) * 31 + col) % 10 < 2 ? L.migotanieMin : 1;
}

function drawWetRoad() {
  const D = level.motyw.deszcz;
  if (!D) return;
  const R = level.motyw.jezdnia;
  const asphaltTop = GROUND_Y + ROAD.wysokoscPobocza;
  const asphaltH = SCREEN_H - asphaltTop;
  const cell = D.kaluzaKomorka;
  const table = statics.kaluze;
  ctx.fillStyle = R.kolorKaluzy;
  for (let i = Math.floor(camX / cell) - 1; i <= Math.floor((camX + SCREEN_W) / cell) + 1; i++) {
    const k = (i + 1) * 3;
    if (k < 0 || k >= table.length || table[k] === 0) continue;
    ctx.fillRect(i * cell - camX + table[k + 1], asphaltTop + 3 + table[k + 2], table[k], 1);
  }

  const L = level.motyw.latarnie;
  if (L) {
    ctx.fillStyle = L.kolorSwiatla;
    const len = asphaltH - 1;
    for (const c of LAMPS) {
      const hx = c * TILE + TILE / 2 + L.wysiegnik - camX;
      if (hx < -8 || hx > SCREEN_W + 8) continue;
      const f = lampFlicker(c);
      for (let r = 1; r < len; r++) {
        if ((r + Math.floor(game.clock * L.odbicieFale)) % 3 === 0) continue;
        const wob = Math.round(Math.sin(game.clock * L.odbicieFalowanie + r * 0.8 + c));
        ctx.globalAlpha = L.odbicieAlfa * (1 - r / len) * f;
        const w = r < L.odbicieSzerokie ? 3 : 1 + (r % 2);
        ctx.fillRect(hx - (w >> 1) + wob, asphaltTop + r, w, 1);
      }
    }
    ctx.globalAlpha = 1;
  }

  ctx.fillStyle = D.kolorPlusku;
  ctx.globalAlpha = D.alfaPlusku;
  const tick = Math.floor(game.clock * D.pluskiNaSekunde);
  for (let k = 0; k < D.pluski; k++) {
    const hh = hash(tick * 97 + k);
    const x = hh % SCREEN_W;
    const col = Math.floor((x + camX) / TILE);
    const onRail = k % 2 === 0 && col >= 0 && col < LEVEL_COLS ? railTopY(col) : null;
    const y = onRail !== null ? onRail - 1 : asphaltTop + 2 + ((hh >>> 9) % (asphaltH - 3));
    ctx.fillRect(x, y - 1, 1, 1);
    ctx.fillRect(x - 1, y, 1, 1);
    ctx.fillRect(x + 1, y, 1, 1);
  }
  ctx.globalAlpha = 1;
}

function drawLampPosts() {
  const L = level.motyw.latarnie;
  if (!L) return;
  const top = GROUND_Y - L.wysokosc;
  for (const c of LAMPS) {
    const x = c * TILE + TILE / 2 - camX;
    if (x < -L.wysiegnik - 8 || x > SCREEN_W + 8) continue;
    const hx = x + L.wysiegnik;
    ctx.fillStyle = L.kolorSlupa;
    ctx.fillRect(x - 1, top, 2, L.wysokosc);
    ctx.fillRect(x, top - 1, L.wysiegnik, 1);
    ctx.fillRect(hx - 2, top - 1, 5, 2);
    ctx.fillStyle = L.kolorSlupaJasny;
    ctx.fillRect(x - 1, top, 1, L.wysokosc);
    ctx.fillRect(x - 2, GROUND_Y - 3, 4, 3);
    ctx.fillStyle = L.kolorKlosza;
    ctx.globalAlpha = lampFlicker(c);
    ctx.fillRect(hx - 1, top + 1, 3, 1);
    ctx.globalAlpha = 1;
  }
}

function drawLampLight() {
  const L = level.motyw.latarnie;
  if (!L) return;
  const y0 = GROUND_Y - L.wysokosc + 2;
  ctx.fillStyle = L.kolorSwiatla;
  for (const c of LAMPS) {
    const hx = c * TILE + TILE / 2 + L.wysiegnik - camX;
    if (hx < -L.stozekSzerokosc || hx > SCREEN_W + L.stozekSzerokosc) continue;
    const f = lampFlicker(c);
    const y1 = railTopY(c);
    ctx.globalAlpha = L.poswiataAlfa * f;
    ctx.fillRect(hx - 3, y0 - 2, 7, 4);
    for (let y = y0; y < y1; y++) {
      const half = 1 + Math.round(((y - y0) / (y1 - y0)) * L.stozekSzerokosc / 2);
      ctx.globalAlpha = L.stozekAlfa * f;
      ctx.fillRect(hx - half, y, half * 2 + 1, 1);
    }
    const half = L.stozekSzerokosc / 2;
    ctx.globalAlpha = L.plamaAlfa * f;
    ctx.fillRect(hx - half, y1, half * 2 + 1, 1);
    ctx.globalAlpha = L.plamaAlfa * 0.4 * f;
    ctx.fillRect(hx - half + 2, y1 + 1, half * 2 - 3, 2);
  }
  ctx.globalAlpha = 1;
}

function drawRain() {
  const D = level.motyw.deszcz;
  if (!D) return;
  const span = SCREEN_W + D.margines * 2;
  const fall = SCREEN_H + D.dlugosc;
  const slant = D.wiatr / D.predkosc;
  ctx.fillStyle = D.kolor;
  for (let i = 0; i < D.krople; i++) {
    const h1 = hash(i * 3 + 1);
    const h2 = hash(i * 3 + 2);
    const speed = D.predkosc * (1 - D.rozrzutPredkosci * ((hash(i * 3 + 3) % 100) / 100));
    const y = ((game.clock * speed + (h2 % fall)) % fall) - D.dlugosc;
    const x = ((((h1 % span) - camX * D.paralaksa + y * slant) % span) + span) % span - D.margines;
    ctx.globalAlpha = i % 3 === 0 ? D.alfa : D.alfa * 0.55;
    const top = Math.round(y);
    let runX = Math.round(x);
    let runStart = 0;
    for (let j = 1; j <= D.dlugosc; j++) {
      const jx = j < D.dlugosc ? Math.round(x + j * slant) : NaN;
      if (jx === runX) continue;
      ctx.fillRect(runX, top + runStart, 1, j - runStart);
      runX = jx;
      runStart = j;
    }
  }
  ctx.globalAlpha = 1;
}

function drawRailTile(x, y, hasPost) {
  ctx.fillStyle = RAIL.kolorSzynyGora; ctx.fillRect(x, y, TILE, 1);
  ctx.fillStyle = RAIL.kolorSzynyJasny; ctx.fillRect(x, y + 1, TILE, 2);
  ctx.fillStyle = RAIL.kolorSzynyRowek; ctx.fillRect(x, y + 3, TILE, 1);
  ctx.fillStyle = RAIL.kolorSzynyJasny; ctx.fillRect(x, y + 4, TILE, 3);
  ctx.fillStyle = RAIL.kolorSzynyRowek; ctx.fillRect(x, y + 7, TILE, 1);
  ctx.fillStyle = RAIL.kolorSzynySrodek; ctx.fillRect(x, y + 8, TILE, 2);
  ctx.fillStyle = RAIL.kolorSzynyCien; ctx.fillRect(x, y + 10, TILE, 2);
  if (hasPost) {
    ctx.fillStyle = RAIL.kolorSruby;
    ctx.fillRect(x + BARRIER.slupekOdsuniecie, y + 5, BARRIER.slupekSzerokosc, 1);
  }
}

function drawPostTile(x, y, isBase) {
  const px = x + BARRIER.slupekOdsuniecie;
  ctx.fillStyle = RAIL.kolorSlupka;
  ctx.fillRect(px, y, BARRIER.slupekSzerokosc - 1, TILE);
  ctx.fillStyle = RAIL.kolorSlupkaCien;
  ctx.fillRect(px + BARRIER.slupekSzerokosc - 1, y, 1, TILE);
  if (isBase) {
    ctx.fillStyle = RAIL.kolorGleby;
    ctx.fillRect(px - 2, GROUND_Y - 1, BARRIER.slupekSzerokosc + 4, 3);
  }
}

function drawTiles() {
  const firstCol = Math.max(0, Math.floor(camX / TILE));
  const lastCol = Math.min(LEVEL_COLS - 1, Math.floor((camX + SCREEN_W) / TILE));

  for (let col = firstCol; col <= lastCol; col++) {
    const x = col * TILE - camX;
    const hasPost = col % BARRIER.slupekCo === 1;
    for (let row = 0; row < ROWS; row++) {
      const type = map[row][col];
      if (type === T_RAIL) drawRailTile(x, row * TILE, hasPost);
      else if (type === T_POST && hasPost) drawPostTile(x, row * TILE, row === GROUND_ROW - 1);
    }
  }
}

function pillarColumns(p) {
  const cols = [];
  let last = -100;
  const end = p.kolumna + p.dlugosc - 2;
  for (let c = p.kolumna + 1; c <= end; c += PLAT.rozstawFilarow) {
    cols.push(c);
    last = c;
  }
  if (end - last >= 3) cols.push(end);
  return cols;
}

function drawViaductPillars() {
  const firstCol = Math.floor(camX / TILE) - 1;
  const lastCol = Math.floor((camX + SCREEN_W) / TILE) + 1;
  const bottom = GROUND_Y + ROAD.wysokoscPobocza;
  const w = PLAT.szerokoscFilaru;
  for (const p of level.platformy) {
    const top = (PLAT.rzadBazowy - p.wysokosc) * TILE + PLAT.grubosc;
    for (const c of pillarColumns(p)) {
      if (c < firstCol || c > lastCol) continue;
      const x = c * TILE - camX + (TILE - w) / 2;
      ctx.fillStyle = DECK.kolorFilaru;
      ctx.fillRect(x, top, w, bottom - top);
      ctx.fillStyle = DECK.kolorFilaruJasny;
      ctx.fillRect(x, top, 1, bottom - top);
      ctx.fillStyle = DECK.kolorFilaruCien;
      ctx.fillRect(x + w - 1, top, 1, bottom - top);
      ctx.fillStyle = DECK.kolorPodstawy;
      ctx.fillRect(x - 1, bottom - 2, w + 2, 2);
    }
  }
}

function drawViaductDecks() {
  const firstCol = Math.floor(camX / TILE) - 1;
  const lastCol = Math.floor((camX + SCREEN_W) / TILE) + 1;
  const th = PLAT.grubosc;
  for (const p of level.platformy) {
    const y = (PLAT.rzadBazowy - p.wysokosc) * TILE;
    const c0 = Math.max(p.kolumna, firstCol);
    const c1 = Math.min(p.kolumna + p.dlugosc - 1, lastCol);
    for (let c = c0; c <= c1; c++) {
      const x = c * TILE - camX;
      ctx.fillStyle = DECK.kolorGora; ctx.fillRect(x, y, TILE, 1);
      ctx.fillStyle = DECK.kolorCialo; ctx.fillRect(x, y + 1, TILE, th - 3);
      ctx.fillStyle = DECK.kolorCien; ctx.fillRect(x, y + th - 2, TILE, 2);
      if (c % 4 === 0) {
        ctx.fillStyle = DECK.kolorSzwu;
        ctx.fillRect(x, y + 1, 1, th - 3);
      }
    }
    if (c1 < c0) continue;
    const startX = Math.max(p.kolumna * TILE, camX - TILE);
    const endX = Math.min((p.kolumna + p.dlugosc) * TILE, camX + SCREEN_W + TILE);
    const rh = PLAT.wysokoscBarierki;
    ctx.fillStyle = DECK.kolorBarierkiJasny;
    ctx.fillRect(startX - camX, y - rh, endX - startX, 1);
    ctx.fillStyle = DECK.kolorBarierki;
    ctx.fillRect(startX - camX, y - Math.floor(rh / 2), endX - startX, 1);
    const step = PLAT.odstepSlupkowBarierki;
    for (let wx = Math.ceil(startX / step) * step; wx < endX; wx += step) {
      ctx.fillRect(wx - camX, y - rh, 1, rh);
    }
  }
}

function drawBarrierColumn(x, top, bottom) {
  const S = BOSS.sciana;
  ctx.fillStyle = S.kolorRamy;
  ctx.fillRect(x - 1, top, S.szerokosc + 2, bottom - top);
  for (let y = top, k = 0; y < bottom; y += S.pas, k++) {
    ctx.fillStyle = k % 2 === 0 ? S.kolorJasny : S.kolorCiemny;
    ctx.fillRect(x, y, S.szerokosc, Math.min(S.pas, bottom - y));
  }
}

function drawArenaWalls() {
  const A = level.boss;
  if (!A) return;
  const S = BOSS.sciana;
  const bottom = railTopY(A.arena);
  if (game.arena) drawBarrierColumn(A.arena * TILE + ((TILE - S.szerokosc) >> 1) - camX, S.gora, bottom);
  const endX = arenaRightX() - S.szerokosc - 1 - camX;
  if (endX < SCREEN_W) drawBarrierColumn(endX, S.gora, railTopY(A.arena + A.szerokosc - 1));
}

function bossRows(b) {
  if (b.stan === 'ogluszony') return BOSS_OGLUSZONY;
  if (b.stan === 'zapowiedz') return BOSS_ZAMACH;
  if (b.animTime > 0) return BOSS_CHOD[Math.floor(b.animTime * BOSS.klatkiChoduNaSekunde) % BOSS_CHOD.length];
  return BOSS_CHOD_A;
}

function drawBoss() {
  const b = boss;
  if (!b) return;
  if (b.stan === 'smierc') {
    const R = BOSS.rozpad;
    const left = R.czas - b.timer;
    ctx.globalAlpha = left < R.znikanie ? Math.max(0, left / R.znikanie) : 1;
    for (const p of bossParts) {
      ctx.fillStyle = p.color;
      ctx.fillRect(viewX(p) - camX, viewY(p), 1, 1);
    }
    ctx.globalAlpha = 1;
    return;
  }
  const px = viewX(b) - camX;
  const py = viewY(b);
  if (px < -b.w - 20 || px > SCREEN_W + 20) return;
  const hidden = b.stan === 'ogluszony' && Math.floor(game.clock * BOSS.miganieSzybkosc) % 2 === 0;
  if (!hidden) drawRuns(rowSprite(bossRows(b), BOSS.paleta, b.w, b.dir), px, py);
  if (b.stan !== 'zapowiedz') return;
  let signY = py;
  if (b.atak !== 'kosze') {
    const frames = OBSTACLE_FRAMES[b.atak];
    const size = OBST.typy[b.atak].srednica;
    signY = py - size + 2;
    ctx.drawImage(frames[0], px + ((b.w - size) >> 1), signY);
  }
  if (Math.floor(game.clock * BOSS.miganieSzybkosc) % 2 === 0) {
    const Z = BOSS.znak;
    drawTextShadow('!', px + (b.w >> 1) - Z.skala, signY - 5 * Z.skala - Z.odstep, Z.skala, Z.kolor);
  }
}

function drawBossShots() {
  const full = Math.PI * 2;
  for (const s of bossShots) {
    const turns = ((s.rot % full) + full) % full;
    const frame = Math.floor((turns / full) * OBST.klatek) % OBST.klatek;
    ctx.drawImage(OBSTACLE_FRAMES[s.typ][frame], viewX(s) - camX, viewY(s));
  }
}

function drawBossShadows() {
  const K = BOSS.kosze;
  for (const k of bossBaskets) {
    const f = Math.min(1, k.t / K.ostrzezenie);
    const w = 4 + Math.round(8 * f);
    const x = k.x + (k.w >> 1) - (w >> 1) - camX;
    ctx.globalAlpha = K.alfaCienia * (0.4 + 0.6 * f);
    ctx.fillStyle = K.kolorCienia;
    ctx.fillRect(x, k.top - 2, w, 2);
    ctx.fillRect(x + 1, k.top - 3, w - 2, 1);
    ctx.globalAlpha = 1;
    if (Math.floor(game.clock * BOSS.miganieSzybkosc) % 2 === 0) {
      ctx.fillStyle = K.kolorObwodki;
      ctx.fillRect(x - 1, k.top - 2, 1, 2);
      ctx.fillRect(x + w, k.top - 2, 1, 2);
    }
  }
}

function drawBossBaskets() {
  const K = BOSS.kosze;
  const full = Math.PI * 2;
  for (const k of bossBaskets) {
    if (k.t < K.ostrzezenie - K.czasSpadania) continue;
    const turns = ((k.rot % full) + full) % full;
    const frame = Math.floor((turns / full) * OBST.klatek) % OBST.klatek;
    ctx.drawImage(BASKET_FRAMES[frame], viewX(k) - camX, viewY(k));
  }
}

function bossBarY() {
  if (!touch.aktywny) return BOSS.pasek.y;
  const buttons = touchLayout().buttons;
  let bottom = 0;
  for (const name in buttons) bottom = Math.max(bottom, buttons[name].y + buttons[name].h);
  return bottom + BOSS.pasek.odstep;
}

function drawBossBar() {
  if (!boss || !game.arena || boss.stan === 'smierc') return;
  const P = BOSS.pasek;
  const label = tx('bossNazwa');
  const total = BOSS.zycia * P.szerokosc + (BOSS.zycia - 1) * P.odstep;
  const y = bossBarY();
  drawCentered(label, y, 1, UI.kolorTekstu);
  const x0 = Math.round((SCREEN_W - total) / 2);
  const by = y + 5 + P.napisOdstep;
  ctx.fillStyle = P.kolorRamki;
  ctx.fillRect(x0 - 1, by - 1, total + 2, P.wysokosc + 2);
  for (let i = 0; i < BOSS.zycia; i++) {
    const x = x0 + i * (P.szerokosc + P.odstep);
    ctx.fillStyle = i < boss.hp ? P.kolor : P.kolorPusty;
    ctx.fillRect(x, by, P.szerokosc, P.wysokosc);
    if (i < boss.hp) {
      ctx.fillStyle = P.kolorJasny;
      ctx.fillRect(x, by, P.szerokosc, 1);
    }
  }
}

function drawFinish() {
  if (level.boss) return;
  const x = FINISH_X - camX;
  if (x < -FINISH.szerokosc || x > SCREEN_W) return;
  const top = railTopY(level.meta.kolumna);
  if (top === null) return;
  const sq = FINISH.kwadrat;
  const cols = FINISH.szerokosc / sq;

  for (let j = 0; j < TILE / sq; j++) {
    for (let i = 0; i < cols; i++) {
      ctx.fillStyle = (i + j) % 2 === 0 ? FINISH.kolorJasny : FINISH.kolorCiemny;
      ctx.fillRect(x + i * sq, top + j * sq, sq, sq);
    }
  }

  ctx.fillStyle = FINISH.kolorSlupka;
  ctx.fillRect(x, top - FINISH.wysokosc, 2, FINISH.wysokosc);
  ctx.fillRect(x + FINISH.szerokosc - 2, top - FINISH.wysokosc, 2, FINISH.wysokosc);

  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < cols; i++) {
      ctx.fillStyle = (i + j) % 2 === 0 ? FINISH.kolorJasny : FINISH.kolorCiemny;
      ctx.fillRect(x + i * sq, top - FINISH.wysokosc + j * sq, sq, sq);
    }
  }
}

function drawCheckpoints() {
  const list = checkpoints();
  for (let i = 0; i < list.length; i++) {
    const col = list[i].kolumna;
    const x = col * TILE - camX + FLAG.przesuniecieX;
    if (x < -FLAG.szerokoscFlagi || x > SCREEN_W) continue;
    const top = railTopY(col);
    if (top === null) continue;
    const poleTop = top - FLAG.wysokoscDrazka;
    ctx.fillStyle = FLAG.kolorKonturu;
    ctx.fillRect(x - 1, poleTop - 1, FLAG.szerokoscDrazka + 2, FLAG.wysokoscDrazka + 1);
    ctx.fillStyle = FLAG.kolorDrazka;
    ctx.fillRect(x, poleTop, FLAG.szerokoscDrazka, FLAG.wysokoscDrazka);
    for (let j = 0; j < FLAG.wysokoscFlagi; j++) {
      const w = Math.max(1, Math.round(FLAG.szerokoscFlagi * (1 - j / FLAG.wysokoscFlagi)));
      ctx.fillStyle = FLAG.kolorKonturu;
      ctx.fillRect(x + FLAG.szerokoscDrazka, poleTop + j, w + 1, 1);
      ctx.fillStyle = i <= game.punkt ? FLAG.kolorAktywny : FLAG.kolorNieaktywny;
      ctx.fillRect(x + FLAG.szerokoscDrazka, poleTop + j, w, 1);
    }
  }
}

function drawReflectorShape(x, y, cfg, pulse) {
  ctx.fillStyle = cfg.kolor;
  ctx.globalAlpha = REFL.poswiata * (0.5 + 0.5 * pulse);
  ctx.fillRect(x - 2, y - 2, REFL.szerokosc + 4, REFL.wysokosc + 4);
  ctx.fillStyle = REFL.kontur;
  ctx.globalAlpha = REFL.konturAlfa;
  ctx.fillRect(x + 2, y - 1, 1, 7);
  ctx.fillRect(x + 1, y, 3, 5);
  ctx.fillRect(x - 1, y + 2, 7, 1);
  ctx.globalAlpha = 1;
  ctx.fillStyle = cfg.kolor;
  ctx.fillRect(x + 2, y, 1, 5);
  ctx.fillRect(x + 1, y + 1, 3, 3);
  ctx.fillRect(x, y + 2, 5, 1);
  ctx.fillStyle = cfg.kolorJasny;
  ctx.fillRect(x + 2, y + 2, 1, 1);
}

function drawReflectors() {
  for (const r of game.odblaski) {
    if (r.taken) continue;
    const x = snapPx(r.x) - camX;
    const y = snapPx(r.y);
    if (x < -r.w - 4 || x > SCREEN_W + 4) continue;
    const pulse = Math.sin(game.clock * REFL.pulsSzybkosc + r.index) * 0.5 + 0.5;
    drawReflectorShape(x, y, r.cfg, pulse);
  }
}

const STAR = [
  '..#..',
  '#####',
  '.###.',
  '.#.#.',
  '#...#',
];

function drawStar(x, y, scale, color) {
  ctx.fillStyle = color;
  for (let j = 0; j < STAR.length; j++) {
    for (let i = 0; i < STAR[j].length; i++) {
      if (STAR[j][i] === '#') ctx.fillRect(x + i * scale, y + j * scale, scale, scale);
    }
  }
}

function drawStars(count, cx, y, scale, gap) {
  const w = STAR[0].length * scale;
  const total = 3 * w + 2 * gap;
  const x0 = Math.round(cx - total / 2);
  for (let k = 0; k < 3; k++) drawStar(x0 + k * (w + gap), y, scale, k < count ? OCENA.gwiazda.kolorPelnej : OCENA.gwiazda.kolorPustej);
}

function drawObstacles(onRoad) {
  const full = Math.PI * 2;
  for (const o of obstacles) {
    if (o.jezdnia !== onRoad) continue;
    const turns = ((o.rot % full) + full) % full;
    const frame = Math.floor((turns / full) * OBST.klatek) % OBST.klatek;
    ctx.drawImage(OBSTACLE_FRAMES[o.cfg.rodzaj][frame], viewX(o) - camX, viewY(o));
  }
}

function pixelRuns(w, h, colorAt) {
  const xs = [];
  const ys = [];
  const ws = [];
  const colors = [];
  for (let y = 0; y < h; y++) {
    let x = 0;
    while (x < w) {
      const c = colorAt(x, y);
      if (c === null) {
        x++;
        continue;
      }
      let n = 1;
      while (x + n < w && colorAt(x + n, y) === c) n++;
      xs.push(x);
      ys.push(y);
      ws.push(n);
      colors.push(c);
      x += n;
    }
  }
  return { xs: Int16Array.from(xs), ys: Int16Array.from(ys), ws: Int16Array.from(ws), colors };
}

function drawRuns(runs, px, py) {
  const n = runs.colors.length;
  for (let i = 0; i < n; i++) {
    ctx.fillStyle = runs.colors[i];
    ctx.fillRect(px + runs.xs[i], py + runs.ys[i], runs.ws[i], 1);
  }
}

const rowSpriteCache = new Map();

function rowSprite(rows, palette, w, dir) {
  let entry = rowSpriteCache.get(rows);
  if (!entry) {
    entry = { p: null, l: null };
    rowSpriteCache.set(rows, entry);
  }
  const key = dir > 0 ? 'p' : 'l';
  if (entry[key] === null) {
    entry[key] = pixelRuns(w, rows.length, (x, y) => {
      const ch = rows[y][dir > 0 ? x : w - 1 - x];
      return ch === '.' ? null : palette[ch];
    });
  }
  return entry[key];
}

function drawEnemies() {
  for (const e of enemies) {
    const squashed = e.state === 'splaszczony';
    const picker = e.typ === 'grzybiarka';
    const palette = picker ? PICKER.paleta : ENEMY.paleta;
    let rows;
    if (picker) rows = squashed ? PICKER_SQUASHED : (e.phase === 'zamach' ? PICKER_RAISED : PICKER_BENT);
    else rows = squashed ? WORKER_SQUASHED : WORKER_FRAMES[Math.floor(e.animTime * ENEMY.klatkiNaSekunde) % WORKER_FRAMES.length];
    const px = viewX(e) - camX;
    const py = viewY(e) + (e.h - rows.length);
    if (px < -e.w || px > SCREEN_W) continue;
    drawRuns(rowSprite(rows, palette, e.w, e.dir), px, py);
  }
}

function drawProjectiles() {
  const full = Math.PI * 2;
  for (const p of projectiles) {
    const turns = ((p.rot % full) + full) % full;
    const frame = Math.floor((turns / full) * OBST.klatek) % OBST.klatek;
    ctx.drawImage(BASKET_FRAMES[frame], viewX(p) - camX, viewY(p));
  }
}

function drawPowerups() {
  const pulse = Math.sin(game.clock * POWER.pulsSzybkosc) * 0.5 + 0.5;
  for (const p of game.powerups) {
    if (p.taken) continue;
    const x = snapPx(p.x) - camX;
    const y = snapPx(p.y);
    if (x < -p.w - 8 || x > SCREEN_W + 8) continue;
    ctx.fillStyle = p.cfg.kolor;
    ctx.globalAlpha = 0.12 + 0.18 * pulse;
    ctx.fillRect(x - 3, y - 3, p.w + 6, p.h + 6);
    ctx.globalAlpha = 0.25 + 0.25 * pulse;
    ctx.fillRect(x - 1, y - 1, p.w + 2, p.h + 2);
    ctx.globalAlpha = 1;
    ctx.fillRect(x, y, p.w, p.h);
    ctx.fillStyle = p.cfg.kolorJasny;
    ctx.fillRect(x + 1, y + 1, 3, 3);
  }
}

function blinking(timeLeft) {
  return timeLeft < POWER.miganieOstatnieSekundy && Math.floor(game.clock * POWER.miganieSzybkosc) % 2 === 0;
}

function spriteLift() {
  if (!hasEffect('deska')) return 0;
  return currentSprite() === SPRITES.jump ? BOARD.length - 2 : BOARD.length;
}

const playerSpriteCache = new Map();

function playerSprite(parts) {
  let entry = playerSpriteCache.get(parts);
  if (!entry) {
    entry = { p: null, l: null, kolory: {}, pxp: null, pxl: null };
    playerSpriteCache.set(parts, entry);
  }
  return entry;
}

function playerSpriteRuns(parts, facing, overrideColor) {
  let entry = playerSprite(parts);
  const skinIndex = overrideColor ? 0 : activeSkin();
  if (overrideColor || skinIndex > 0) {
    const name = overrideColor || SKIN_NAMES[skinIndex];
    let byColor = entry.kolory[name];
    if (byColor === undefined) byColor = entry.kolory[name] = { p: null, l: null };
    entry = byColor;
  }
  const key = facing > 0 ? 'p' : 'l';
  if (entry[key] === null) {
    const w = CHAR.szerokoscSprite;
    const h = CHAR.wysokosc;
    const grid = new Array(w * h).fill(null);
    forEachSpritePixel(parts, facing, (dx, dy, color) => {
      grid[dy * w + dx] = overrideColor || skinColor(color, skinIndex);
    });
    entry[key] = pixelRuns(w, h, (x, y) => grid[y * w + x]);
  }
  return entry[key];
}

function playerSpritePixels(parts, facing) {
  const entry = playerSprite(parts);
  const key = facing > 0 ? 'pxp' : 'pxl';
  if (entry[key] === null) {
    const list = [];
    forEachSpritePixel(parts, facing, (dx, dy) => list.push(dx, dy));
    entry[key] = Int16Array.from(list);
  }
  return entry[key];
}

function drawAura() {
  const px = playerViewX() - camX - SPRITE_OFFSET_X;
  const py = playerViewY() - spriteLift();
  const r = POWER.aura.promien;
  const pulse = Math.sin(game.clock * POWER.pulsSzybkosc) * POWER.aura.amplituda;
  for (const typ in POWER.typy) {
    if (game.active[typ] === undefined || blinking(game.active[typ])) continue;
    ctx.fillStyle = POWER.typy[typ].kolor;
    ctx.globalAlpha = POWER.aura.przezroczystosc + pulse;
    const pixels = playerSpritePixels(currentSprite(), player.facing);
    for (let i = 0; i < pixels.length; i += 2) {
      ctx.fillRect(px + pixels[i] - r, py + pixels[i + 1] - r, 1 + 2 * r, 1 + 2 * r);
    }
    ctx.globalAlpha = 1;
  }
}

function drawPowerupBars() {
  const bar = POWER.pasek;
  let i = 0;
  for (const typ in POWER.typy) {
    const left = game.active[typ];
    if (left === undefined) continue;
    const cfg = POWER.typy[typ];
    const x = SCREEN_W - UI.margines - bar.szerokosc;
    const y = UI.margines + 1 + i * (bar.wysokosc + bar.odstep);
    i++;
    if (blinking(left)) continue;
    ctx.fillStyle = bar.kolorRamki;
    ctx.fillRect(x - 1, y - 1, bar.szerokosc + 2, bar.wysokosc + 2);
    ctx.fillStyle = cfg.kolor;
    ctx.fillRect(x, y, Math.max(1, Math.round(bar.szerokosc * Math.min(1, left / (cfg.czas * (easyActive() ? LATWY.mnoznikPowerupow : 1))))), bar.wysokosc);
  }
}

let boardRuns = null;

function boardSprite() {
  if (boardRuns === null) {
    boardRuns = pixelRuns(BOARD[0].length, BOARD.length, (x, y) => (BOARD[y][x] === '.' ? null : POWER.deska[BOARD[y][x]]));
  }
  return boardRuns;
}

function drawPlayer(overrideColor) {
  const px = playerViewX() - camX - SPRITE_OFFSET_X;
  const py = playerViewY();
  const lift = spriteLift();
  drawRuns(playerSpriteRuns(currentSprite(), player.facing, overrideColor), px, py - lift);
  if (lift > 0) drawRuns(boardSprite(), px, py + player.h - BOARD.length);
}

function drawParticles() {
  const fadeStart = DEATH.czas - DEATH.czasZnikania;
  let alpha = 1;
  if (game.deathTimer > fadeStart) alpha = Math.max(0, (DEATH.czas - game.deathTimer) / DEATH.czasZnikania);
  ctx.globalAlpha = alpha;
  for (const p of game.particles) {
    ctx.fillStyle = p.color;
    ctx.fillRect(viewX(p) - camX, viewY(p), 1, 1);
  }
  ctx.globalAlpha = 1;
}

function dustAlpha(p) {
  return 1 - p.t / p.max;
}

function drawFxBack() {
  if (!fxLive()) return;
  for (const p of fx.czastki) {
    if (p.kind === 'pyl') {
      ctx.globalAlpha = dustAlpha(p);
      ctx.fillStyle = FX.pyl.kolor;
      const size = p.t < p.max / 2 ? p.rozmiar : 1;
      ctx.fillRect(viewX(p) - camX, viewY(p) - size + 1, size, size);
    } else if (p.kind === 'smuga') {
      ctx.globalAlpha = FX.smugi.alfa * dustAlpha(p);
      ctx.fillStyle = FX.smugi.kolor;
      ctx.fillRect(viewX(p) - camX, viewY(p), p.len, 1);
    }
  }
  ctx.globalAlpha = 1;
}

function drawFxFront() {
  if (!fxLive()) return;
  const B = FX.blysk;
  for (const p of fx.czastki) {
    if (p.kind !== 'blysk') continue;
    const k = p.t / p.max;
    const cx = viewX(p) - camX;
    const cy = viewY(p);
    ctx.globalAlpha = 1 - k;
    const size = Math.max(1, Math.round(B.rozmiarSrodka * (1 - k)));
    ctx.fillStyle = B.kolorSrodka;
    ctx.fillRect(cx - (size >> 1), cy - (size >> 1), size, size);
    ctx.fillStyle = p.color;
    const r = Math.round(2 + k * (B.promien - 2));
    for (let i = 0; i < B.iskry; i++) {
      const angle = ((i + 0.5) / B.iskry) * Math.PI * 2;
      ctx.fillRect(cx + Math.round(Math.cos(angle) * r), cy + Math.round(Math.sin(angle) * r), 1, 1);
    }
  }
  ctx.globalAlpha = 1;
}

function applyShake() {
  if (!fxLive() || game.paused || (fx.dx === 0 && fx.dy === 0)) return;
  ctx.drawImage(canvas, fx.dx, fx.dy);
}

function drawMessage() {
  const M = UI.komunikat;
  if (!game.komunikat) return;
  const text = game.komunikat.tekst;
  const w = textWidth(text, M.skala);
  const x = Math.round((SCREEN_W - w) / 2);
  ctx.fillStyle = M.kolorTla;
  ctx.fillRect(x - M.margines, M.y - M.margines, w + 2 * M.margines, 5 * M.skala + 2 * M.margines);
  drawTextShadow(text, x, M.y, M.skala, UI.kolorTekstu);
}

function textWidth(str, scale) {
  return str.length * 4 * scale - scale;
}

const glyphRuns = {};

function makeGlyphRuns(ch) {
  const glyph = FONT[ACCENTED[ch] || ch];
  if (!glyph) return null;
  const runs = [];
  for (let gy = 0; gy < 5; gy++) {
    let gx = 0;
    while (gx < 3) {
      if (glyph[gy][gx] !== '#') {
        gx++;
        continue;
      }
      let w = 1;
      while (gx + w < 3 && glyph[gy][gx + w] === '#') w++;
      runs.push(gx, gy, w);
      gx += w;
    }
  }
  if (ACCENTED[ch]) runs.push(2, -1, 1);
  return Int8Array.from(runs);
}

function drawText(str, x, y, scale, color) {
  ctx.fillStyle = color;
  let cx = x;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    let runs = glyphRuns[ch];
    if (runs === undefined) runs = glyphRuns[ch] = makeGlyphRuns(ch);
    if (runs !== null) {
      for (let k = 0; k < runs.length; k += 3) ctx.fillRect(cx + runs[k] * scale, y + runs[k + 1] * scale, runs[k + 2] * scale, scale);
    }
    cx += 4 * scale;
  }
}

function drawTextShadow(str, x, y, scale, color) {
  drawText(str, x + scale, y + scale, scale, UI.kolorCienia);
  drawText(str, x, y, scale, color);
}

function drawCentered(str, y, scale, color) {
  drawTextShadow(str, Math.round((SCREEN_W - textWidth(str, scale)) / 2), y, scale, color);
}

function levelTitle(i) {
  const sub = tx('podtytuly')[i];
  const name = tx('poziom', { n: i + 1 });
  return sub ? name + ' - ' + sub : name;
}

const hudText = { lang: '', proba: -1, probaTekst: '', zebrane: -1, razem: -1, odblaskiTekst: '', latwy: false };

function hudStrings() {
  const got = reflectorCount();
  if (hudText.lang !== LANG || hudText.proba !== game.attempts) {
    hudText.probaTekst = tx('proba', { n: game.attempts }) + (easyActive() ? '   ' + tx('latwyZnacznik') : '');
    hudText.proba = game.attempts;
  }
  if (hudText.latwy !== easyActive()) {
    hudText.latwy = easyActive();
    hudText.lang = '';
    return hudStrings();
  }
  if (hudText.lang !== LANG || hudText.zebrane !== got || hudText.razem !== game.odblaski.length) {
    hudText.odblaskiTekst = tx('odblaski', { a: got, b: game.odblaski.length });
    hudText.zebrane = got;
    hudText.razem = game.odblaski.length;
  }
  hudText.lang = LANG;
  return hudText;
}

function drawHud() {
  const H = hudStrings();
  drawTextShadow(H.probaTekst, UI.margines, UI.margines + UI.skalaHud, UI.skalaHud, UI.kolorTekstu);
  if (game.odblaski.length === 0) return;
  const L = REFL.licznik;
  const y = UI.margines + UI.skalaHud + L.odstepY;
  drawReflectorShape(UI.margines, y - 1, REFL.kolory.bialy, 1);
  drawTextShadow(H.odblaskiTekst, UI.margines + L.ikonaOdstep, y, UI.skalaHud, UI.kolorTekstu);
}

function drawFinishScreen() {
  const E = OCENA.ekran;
  const o = game.ocena;
  ctx.fillStyle = UI.kolorTla;
  ctx.fillRect(0, 0, SCREEN_W, SCREEN_H);
  drawCentered(tx('metaTytul'), E.tytulY, UI.skalaTytulu, UI.kolorAkcentu);
  drawStars(o.gwiazdki, SCREEN_W / 2, E.gwiazdyY, E.gwiazdaSkala, E.gwiazdaOdstep);
  const ok = (flag) => (flag ? E.kolorSpelnionego : E.kolorNiespelnionego);
  const ref = OCENA.czasyOdniesienia[game.levelIndex];
  drawCentered(tx('metaCzas', { t: game.finalTime.toFixed(2), ref }), E.liniaCzasY, UI.skalaPodpisu, ok(o.czasOk));
  if (o.razem > 0) drawCentered(tx('odblaski', { a: o.zebrane, b: o.razem }), E.liniaOdblaskiY, UI.skalaPodpisu, ok(o.odblaskiOk));
  drawCentered(o.bezSmierci ? tx('metaBezSmierci') : tx('metaProby', { n: game.attempts }), E.liniaSmiercY, UI.skalaPodpisu, ok(o.bezSmierci));
  if (o.latwy) drawCentered(tx('latwyMeta'), E.nowaOcenaY, UI.skalaPodpisu, DIAG.kolorOstrzezenia);
  else if (o.nowa) drawCentered(tx('metaNowaOcena'), E.nowaOcenaY, UI.skalaPodpisu, UI.kolorAkcentu);
  const best = progress.najlepsze[game.levelIndex];
  if (game.rekord) drawCentered(tx('metaNowyRekord'), UI.rekordY, UI.skalaPodpisu, UI.kolorAkcentu);
  else drawCentered(tx('rekord', { t: formatTime(best) }), UI.rekordY, UI.skalaPodpisu, UI.kolorTekstu);
  if (game.finishTimer >= FINISH.opoznienieRestartu && Math.floor(game.finishTimer * 2) % 2 === 0) {
    drawCentered(touch.aktywny ? tx('metaDalejDotyk') : tx('metaDalej'), UI.dalejY, UI.skalaPodpisu, UI.kolorTekstu);
  }
}

function drawCongratsScreen() {
  ctx.fillStyle = UI.kolorTla;
  ctx.fillRect(0, 0, SCREEN_W, SCREEN_H);
  const F = UI.gratulacjeFinal;
  const fin = game.finalWin && game.ocena;
  drawCentered(tx('gratulacje'), fin ? F.naglowekY : UI.gratulacjeNaglowekY, UI.gratulacjeNaglowekSkala, UI.kolorAkcentu);
  if (fin) {
    drawCentered(tx('finalPokonany'), F.pokonanyY, UI.skalaPodpisu, DIAG.kolorOstrzezenia);
    drawCentered(tx('finalCzas', { t: game.finalTime.toFixed(2) }), F.czasY, UI.skalaPodpisu, UI.kolorTekstu);
    drawStars(game.ocena.gwiazdki, SCREEN_W / 2, F.gwiazdyY, F.gwiazdySkala, F.gwiazdyOdstep);
  }
  drawCentered(tx('gratulacjeOpis'), fin ? F.opisY : UI.gratulacjeOpisY, UI.skalaPodpisu, UI.kolorTekstu);
  drawCentered(tx('gratulacjeCzas', { t: totalBestTime().toFixed(2) }), fin ? F.czasLacznyY : UI.gratulacjeCzasY, UI.skalaTytulu, UI.kolorTekstu);
  drawCentered(tx('gratulacjePodpis'), fin ? F.podpisY : UI.gratulacjePodpisY, UI.skalaPodpisu, UI.kolorTekstu);
  if (congratsReady() && Math.floor(game.clock * 2) % 2 === 0) {
    drawCentered(touch.aktywny ? tx('metaDalejDotyk') : tx('metaDalej'), UI.dalejY, UI.skalaPodpisu, UI.kolorTekstu);
  }
}

function drawStartScreen() {
  ctx.fillStyle = UI.kolorTla;
  ctx.fillRect(0, 0, SCREEN_W, SCREEN_H);
  drawCentered(USTAWIENIA.nazwa, UI.nazwaY, UI.skalaNaglowka, UI.kolorAkcentu);
  drawCentered(tx('podtytulNazwy'), UI.podtytulNazwyY, 1, UI.podtytulNazwyKolor);
  if (Math.floor(game.clock * UI.miganiePodtytulu) % 2 === 0) {
    drawCentered(touch.aktywny ? tx('dotknijEkranu') : tx('nacisnij'), UI.nacisnijY, UI.skalaPodtytulu, UI.kolorTekstu);
  }
  drawMenuButton(UI.przyciskPomocy, tx(touch.aktywny ? 'przyciskPomocyDotyk' : 'przyciskPomocy'));
  drawMenuButton(UI.przyciskOGrze, tx(touch.aktywny ? 'przyciskOGrzeDotyk' : 'przyciskOGrze'));
  drawMenuButton(UI.przyciskJezyka, tx(touch.aktywny ? 'przyciskJezykaDotyk' : 'przyciskJezyka'));
}

function drawMenuButton(b, label) {
  ctx.fillStyle = UI.kolorZaznaczenia;
  ctx.fillRect(b.x, b.y, b.szerokosc, b.wysokosc);
  ctx.strokeStyle = b.kolorRamki;
  ctx.lineWidth = 1;
  ctx.strokeRect(b.x + 0.5, b.y + 0.5, b.szerokosc - 1, b.wysokosc - 1);
  const tx = b.x + Math.round((b.szerokosc - textWidth(label, 1)) / 2);
  drawTextShadow(label, tx, b.y + Math.round((b.wysokosc - 5) / 2), 1, UI.kolorTekstu);
}

function drawAboutScreen() {
  ctx.fillStyle = UI.kolorTla;
  ctx.fillRect(0, 0, SCREEN_W, SCREEN_H);
  drawCentered(tx('oGrze'), UI.oGrzeNaglowekY, UI.pomocNaglowekSkala, UI.kolorAkcentu);
  drawCentered(USTAWIENIA.nazwa, UI.oGrzeNazwaY, UI.oGrzeNazwaSkala, UI.kolorAkcentu);
  drawCentered(tx('wersja', { v: USTAWIENIA.wersja.toUpperCase() }), UI.oGrzeWersjaY, 1, UI.kolorTekstu);
  tx('oGrzeOpis').forEach((line, i) => drawCentered(line, UI.oGrzeOpisY + i * UI.oGrzeOdstep, 1, UI.kolorTekstu));
  drawCentered(tx('autor', { x: USTAWIENIA.autor.toUpperCase() }), UI.oGrzeAutorY, 1, UI.kolorTekstu);
  drawCentered(tx('kontakt', { x: USTAWIENIA.kontakt.toUpperCase() }), UI.oGrzeAutorY + UI.oGrzeOdstep, 1, UI.kolorTekstu);
  drawCentered(tx('oGrzeKod'), UI.oGrzeKodY, 1, UI.kolorAkcentu);
  drawCentered(tx('oGrzeBlyski'), UI.oGrzeBlyskiY, 1, UI.kolorTekstu);
  drawCentered(tx(touch.aktywny ? 'oGrzeStopkaDotyk' : 'oGrzeStopka'), UI.oGrzeStopkaY, 1, UI.kolorTekstu);
}

function clearProgress() {
  progress.odblokowane = 1;
  progress.najlepsze = POZIOMY.map(() => null);
  progress.oceny = POZIOMY.map(() => null);
  progress.zgony = POZIOMY.map(() => 0);
  progress.odblaskiMax = POZIOMY.map(() => null);
  progress.czasGry = 0;
  game.cursor = 0;
  try {
    localStorage.removeItem(USTAWIENIA.postep.klucz);
  } catch (err) {
    return;
  }
}

function resetButtonRect() {
  const b = UI.kasujPrzycisk;
  const h = touch.aktywny ? Math.max(b.wysokosc, Math.ceil(DOTYK.minRozmiarPx / canvasScale())) : b.wysokosc;
  return { x: b.x, y: SCREEN_H - b.margines - h, w: b.szerokosc, h };
}

function confirmRects() {
  const w = UI.kasujPrzyciskiSzerokosc;
  const h = touch.aktywny ? Math.max(UI.kasujPrzyciskiWysokosc, Math.ceil(DOTYK.minRozmiarPx / canvasScale())) : UI.kasujPrzyciskiWysokosc;
  const g = UI.kasujPrzyciskiOdstep;
  const x = Math.round((SCREEN_W - 2 * w - g) / 2);
  return { tak: { x, y: UI.kasujPrzyciskiY, w, h }, nie: { x: x + w + g, y: UI.kasujPrzyciskiY, w, h } };
}

function drawConfirmScreen() {
  ctx.fillStyle = UI.kolorTla;
  ctx.fillRect(0, 0, SCREEN_W, SCREEN_H);
  drawCentered(tx('kasujPytanie'), UI.kasujPytanieY, UI.kasujPytanieSkala, UI.kolorAkcentu);
  if (touch.aktywny) {
    const r = confirmRects();
    drawTouchBox(r.tak, false);
    drawTouchLabel(tx('tak'), r.tak);
    drawTouchBox(r.nie, false);
    drawTouchLabel(tx('nie'), r.nie);
    ctx.globalAlpha = 1;
  } else {
    drawCentered(tx('kasujPodpowiedz'), UI.kasujPodpowiedzY, 1, UI.kolorTekstu);
  }
}

function drawHelpScreen() {
  ctx.fillStyle = UI.kolorTla;
  ctx.fillRect(0, 0, SCREEN_W, SCREEN_H);
  drawCentered(tx('pomoc'), UI.pomocNaglowekY, UI.pomocNaglowekSkala, UI.kolorAkcentu);
  const lines = touch.aktywny ? tx('pomocDotyk').filter((l, i, all) => i < all.length - 1 || fullscreenSupported()) : tx('pomocSterowanie');
  lines.forEach((line, i) => {
    drawCentered(line, UI.pomocSterowaniePierwszyY + i * UI.pomocSterowanieOdstep, 1, UI.kolorTekstu);
  });
  drawCentered(tx('powerupy'), UI.pomocPowerupyNaglowekY, 1, UI.kolorAkcentu);
  const powerupLines = UI.pomocPowerupy.map(typ => tx('powerup')[typ].nazwa + ': ' + tx('powerup')[typ].opis);
  const widest = Math.max(...powerupLines.map(line => textWidth(line, 1)));
  const x = Math.round((SCREEN_W - UI.pomocPowerupyOdstepIkony - widest) / 2);
  UI.pomocPowerupy.forEach((typ, i) => {
    const cfg = POWER.typy[typ];
    const y = UI.pomocPowerupyPierwszyY + i * UI.pomocPowerupyOdstep;
    ctx.fillStyle = cfg.kolor;
    ctx.globalAlpha = 0.3;
    ctx.fillRect(x - 3, y - 3, POWER.szerokosc + 6, POWER.wysokosc + 6);
    ctx.globalAlpha = 0.5;
    ctx.fillRect(x - 1, y - 1, POWER.szerokosc + 2, POWER.wysokosc + 2);
    ctx.globalAlpha = 1;
    ctx.fillRect(x, y, POWER.szerokosc, POWER.wysokosc);
    ctx.fillStyle = cfg.kolorJasny;
    ctx.fillRect(x + 1, y + 1, 3, 3);
    drawTextShadow(powerupLines[i], x + UI.pomocPowerupyOdstepIkony, y + Math.round((POWER.wysokosc - 5) / 2), 1, UI.kolorTekstu);
  });
  drawCentered(tx(touch.aktywny ? 'pomocStopkaDotyk' : 'pomocStopka'), UI.pomocStopkaY, 1, UI.kolorTekstu);
}

function drawPauseScreen() {
  ctx.fillStyle = UI.kolorTla;
  ctx.fillRect(0, 0, SCREEN_W, SCREEN_H);
  drawCentered(tx('pauza'), UI.pauzaY, UI.pauzaSkala, UI.kolorAkcentu);
  if (touch.aktywny) {
    const layout = pauseLayout();
    drawTouchBox(layout.wznow, false);
    drawTouchLabel(tx('pauzaWznow'), layout.wznow);
    drawTouchBox(layout.wyjdz, false);
    drawTouchLabel(tx('pauzaWyjdz'), layout.wyjdz);
    ctx.globalAlpha = 1;
  } else {
    drawCentered(tx('pauzaPodpis'), UI.pauzaPodpisY, 1, UI.kolorTekstu);
  }
}

function formatTime(t) {
  return t === null || t === undefined ? '---' : t.toFixed(2) + ' S';
}

function drawLevelTile(i) {
  const r = levelTileRect(i);
  const open = i < progress.odblokowane;
  const selected = open && i === game.cursor;
  if (selected) {
    ctx.fillStyle = UI.kolorZaznaczenia;
    ctx.fillRect(r.x, r.y, r.w, r.h);
  }
  ctx.strokeStyle = selected ? UI.kolorAkcentu : open ? UI.kolorRamkiKafla : UI.kolorZablokowanego;
  ctx.lineWidth = 1;
  ctx.strokeRect(r.x + 0.5, r.y + 0.5, r.w - 1, r.h - 1);
  const num = String(i + 1);
  const s = UI.wyborSkalaNumeru;
  const color = selected ? UI.kolorAkcentu : open ? UI.kolorTekstu : UI.kolorZablokowanego;
  const nx = r.x + Math.round((r.w - textWidth(num, s)) / 2);
  if (open) drawTextShadow(num, nx, r.y + UI.wyborNumerY, s, color);
  else drawText(num, nx, r.y + UI.wyborNumerY, s, color);
  if (!open) return;
  const t = progress.najlepsze[i];
  const label = t === null || t === undefined ? '---' : t.toFixed(2);
  drawText(label, r.x + Math.round((r.w - textWidth(label, 1)) / 2), r.y + UI.wyborCzasY, 1, color);
  const stars = progress.oceny[i];
  if (stars) drawStars(stars, r.x + r.w / 2, r.y + OCENA.kafel.y, OCENA.kafel.skala, OCENA.kafel.odstep);
}

function progressSummary() {
  let stars = 0;
  let done = 0;
  for (let i = 0; i < POZIOMY.length; i++) {
    stars += progress.oceny[i] || 0;
    if (typeof progress.najlepsze[i] === 'number') done++;
  }
  return { gwiazdki: stars, maks: POZIOMY.length * 3, procent: Math.round((done / POZIOMY.length) * 100) };
}

function drawSelectScreen() {
  ctx.fillStyle = UI.kolorTla;
  ctx.fillRect(0, 0, SCREEN_W, SCREEN_H);
  drawCentered(tx('wyborNaglowek'), UI.wyborNaglowekY, UI.skalaTytulu, UI.kolorAkcentu);
  if (UI.wyborPodsumowanie) {
    const sum = progressSummary();
    drawCentered(tx('wyborPodsumowanieTekst', { g: sum.gwiazdki, m: sum.maks, p: sum.procent }), UI.wyborPodsumowanieY, 1, OCENA.gwiazda.kolorPelnej);
  }
  for (let i = 0; i < POZIOMY.length; i++) drawLevelTile(i);
  drawCentered(levelTitle(game.cursor), UI.wyborOpisY, UI.skalaPodpisu, UI.kolorAkcentu);
  drawCentered(tx('rekord', { t: formatTime(progress.najlepsze[game.cursor]) }), UI.wyborRekordY, UI.skalaPodpisu, UI.kolorTekstu);
  if (!touch.aktywny || UI.wyborPodpowiedzY + 6 < resetButtonRect().y) drawCentered(tx(touch.aktywny ? 'wyborPodpowiedzDotyk' : 'wyborPodpowiedz'), UI.wyborPodpowiedzY, UI.skalaPodpisu, UI.kolorTekstu);
  const r = resetButtonRect();
  drawMenuButton({ x: r.x, y: r.y, szerokosc: r.w, wysokosc: r.h, kolorRamki: UI.kasujPrzycisk.kolorRamki }, tx(touch.aktywny ? 'kasujDotyk' : 'kasuj'));
  if (USTAWIENIA.statystyki.wlaczone) {
    const sb = statsButtonRect();
    drawMenuButton({ x: sb.x, y: sb.y, szerokosc: sb.w, wysokosc: sb.h, kolorRamki: USTAWIENIA.statystyki.przycisk.kolorRamki }, tx(touch.aktywny ? 'przyciskStatDotyk' : 'przyciskStat'));
  }
  const fb = flashButtonRect();
  drawMenuButton({ x: fb.x, y: fb.y, szerokosc: fb.w, wysokosc: fb.h, kolorRamki: BLYSKI.wyborPrzycisk.kolorRamki }, tx(touch.aktywny ? 'przyciskBlyskiDotyk' : 'przyciskBlyski', { s: tx(flashesOn() ? 'wl' : 'wyl') }));
  if (game.confirmReset) drawConfirmScreen();
}

function drawSpeakerIcon(px, py) {
  const x = px === undefined ? SCREEN_W - UI.margines - 10 : px;
  const y = py === undefined ? SCREEN_H - UI.margines - 7 : py;
  ctx.fillStyle = UI.kolorCienia;
  ctx.fillRect(x - 1, y - 1, 12, 9);
  ctx.fillStyle = audio.muted ? UI.kolorIkonyWyciszonej : UI.kolorIkony;
  ctx.fillRect(x, y + 2, 2, 3);
  ctx.fillRect(x + 2, y + 1, 1, 5);
  ctx.fillRect(x + 3, y, 1, 7);
  if (audio.muted) {
    for (let i = 0; i < 5; i++) {
      ctx.fillRect(x + 5 + i, y + 1 + i, 1, 1);
      ctx.fillRect(x + 5 + i, y + 5 - i, 1, 1);
    }
  } else {
    ctx.fillRect(x + 5, y + 2, 1, 3);
    ctx.fillRect(x + 7, y + 1, 1, 5);
    ctx.fillRect(x + 9, y, 1, 7);
  }
}

function drawTouchBox(r, pressed) {
  ctx.globalAlpha = pressed ? DOTYK.przezroczystoscWcisniety : DOTYK.przezroczystosc;
  ctx.fillStyle = pressed ? DOTYK.kolorWcisnietego : DOTYK.kolorTla;
  ctx.fillRect(r.x + 1, r.y, r.w - 2, r.h);
  ctx.fillRect(r.x, r.y + 1, r.w, r.h - 2);
  ctx.globalAlpha = DOTYK.przezroczystoscIkony;
  ctx.fillStyle = pressed ? DOTYK.kolorWcisnietego : DOTYK.kolorRamki;
  ctx.fillRect(r.x + 1, r.y, r.w - 2, 1);
  ctx.fillRect(r.x + 1, r.y + r.h - 1, r.w - 2, 1);
  ctx.fillRect(r.x, r.y + 1, 1, r.h - 2);
  ctx.fillRect(r.x + r.w - 1, r.y + 1, 1, r.h - 2);
}

function drawTouchIcon(icon, r) {
  const scale = Math.max(1, Math.floor(r.w * 0.6 / 7));
  const ox = r.x + Math.round((r.w - 7 * scale) / 2);
  const oy = r.y + Math.round((r.h - 7 * scale) / 2);
  ctx.globalAlpha = DOTYK.przezroczystoscIkony;
  ctx.fillStyle = DOTYK.kolorIkony;
  for (let y = 0; y < 7; y++) {
    for (let x = 0; x < 7; x++) {
      if (icon[y][x] === '#') ctx.fillRect(ox + x * scale, oy + y * scale, scale, scale);
    }
  }
  ctx.globalAlpha = 1;
}

function drawTouchLabel(text, r) {
  ctx.globalAlpha = DOTYK.przezroczystoscIkony;
  drawText(text, r.x + Math.round((r.w - textWidth(text, 1)) / 2), r.y + Math.round((r.h - 5) / 2), 1, DOTYK.kolorIkony);
  ctx.globalAlpha = 1;
}

function drawTouchControls() {
  const { controls } = touchLayout();
  drawTouchBox(controls.lewo, touchHeld('lewo'));
  drawTouchIcon(TOUCH_ICONS.lewo, controls.lewo);
  drawTouchBox(controls.prawo, touchHeld('prawo'));
  drawTouchIcon(TOUCH_ICONS.prawo, controls.prawo);
  drawTouchBox(controls.skok, touchHeld('skok'));
  drawTouchLabel(tx('skok'), controls.skok);
  drawTouchBox(controls.kucnij, touchHeld('kucnij'));
  drawTouchLabel(tx('kucnij'), controls.kucnij);
  ctx.globalAlpha = 1;
}

function drawTouchTopButtons() {
  const { buttons } = touchLayout();
  for (const name in buttons) {
    const r = buttons[name];
    drawTouchBox(r, false);
    if (name === 'akcja') drawTouchIcon(game.state === 'start' ? TOUCH_ICONS.pomoc : TOUCH_ICONS.pauza, r);
    else if (name === 'pelny') drawTouchIcon(TOUCH_ICONS.pelny, r);
    else drawSpeakerIcon(r.x + Math.round((r.w - 10) / 2), r.y + Math.round((r.h - 7) / 2));
  }
  ctx.globalAlpha = 1;
}

function drawFeedbackLink() {
  const r = feedbackRect();
  if (r === null) return;
  const m = UI.opiniaMargines;
  const text = tx('opinia');
  drawTextShadow(text, r.x + m, r.y + m, 1, UI.opiniaKolor);
  ctx.fillStyle = UI.opiniaKolor;
  ctx.fillRect(r.x + m, r.y + m + 7, textWidth(text, 1), 1);
}

function render(clean) {
  if (view.alpha >= 1) {
    renderScene(clean);
    return;
  }
  const realCamX = camX;
  const realCamY = camY;
  const realClock = game.clock;
  camX = snapPx(lerpView(prevCamXf, camXf));
  camY = snapPx(lerpView(prevCamYf, camYf));
  game.clock = realClock - (1 - view.alpha) * STEP;
  try {
    renderScene(clean);
  } finally {
    camX = realCamX;
    camY = realCamY;
    game.clock = realClock;
  }
}

function renderScene(clean) {
  drawSky();
  drawStars();
  drawSun();
  drawLightning();
  drawTunnel();
  ctx.save();
  ctx.translate(0, -camY);
  drawForest();
  drawRoad();
  drawNeonReflections();
  drawCars();
  drawLongShadows();
  drawFogBands();
  drawWetRoad();
  drawViaductPillars();
  drawObstacles(true);
  drawLampPosts();
  drawTiles();
  drawViaductDecks();
  drawLampLight();
  drawFinish();
  drawCheckpoints();
  if (level.boss) {
    drawArenaWalls();
    drawBossShadows();
  }
  drawGhost();
  drawEnemies();
  if (level.boss) drawBoss();
  drawProjectiles();
  drawPowerups();
  drawReflectors();
  drawObstacles(false);
  if (level.boss) {
    drawBossShots();
    drawBossBaskets();
  }
  drawFxBack();
  if (game.state === 'smierc') {
    if (game.deathTimer < DEATH.blysk) drawPlayer(DEATH.kolorBlysku);
    else drawParticles();
  } else {
    drawAura();
    drawPlayer();
  }
  drawFxFront();
  ctx.restore();
  drawRain();
  drawSnow();
  drawStormFlash();
  if (!clean) applyShake();
  if (!['start', 'wybor', 'pomoc', 'ogrze', 'gratulacje', 'ostrzezenie', 'statystyki'].includes(game.state)) {
    drawHud();
    drawPowerupBars();
    if (level.boss) drawBossBar();
  }
  if (game.state === 'meta') drawFinishScreen();
  if (game.state === 'gratulacje') drawCongratsScreen();
  if (game.state === 'start') drawStartScreen();
  if (game.state === 'wybor') drawSelectScreen();
  if (game.state === 'ostrzezenie') drawWarningScreen();
  if (game.state === 'statystyki') drawStatsScreen();
  if (game.state === 'pomoc') drawHelpScreen();
  if (game.state === 'ogrze') drawAboutScreen();
  drawFeedbackLink();
  if (touch.aktywny && !clean && !game.paused && (game.state === 'gra' || game.state === 'smierc')) drawTouchControls();
  if (game.paused) drawPauseScreen();
  if (game.pomoc) drawHelpScreen();
  if (clean) return;
  if (touch.aktywny) drawTouchTopButtons();
  else drawSpeakerIcon();
  drawMessage();
  if (diag.wlaczona) drawDiagnostics();
}

const diag = {
  wlaczona: diagnosticsFromUrl(),
  delty: new Float32Array(DIAG.probki),
  kroki: new Uint8Array(DIAG.probki),
  rendery: new Float32Array(DIAG.probki),
  sortowane: new Float32Array(DIAG.probki),
  i: 0,
  n: 0,
  odswiez: 0,
  linie: [],
  ostrzezenie: -1,
};

function diagnosticsFromUrl() {
  try {
    return new RegExp('[?&]' + DIAG.parametr + '=1(&|$)').test(location.search);
  } catch (err) {
    return false;
  }
}

function toggleDiagnostics() {
  diag.wlaczona = !diag.wlaczona;
  diag.odswiez = 0;
  showMessage(tx(diag.wlaczona ? 'diagWlaczona' : 'diagWylaczona'));
}

function diagRecord(delta, steps, renderMs) {
  diag.delty[diag.i] = delta;
  diag.kroki[diag.i] = steps;
  diag.rendery[diag.i] = renderMs;
  diag.i = (diag.i + 1) % DIAG.probki;
  diag.n = Math.min(diag.n + 1, DIAG.probki);
}

function nearestRefresh(hz) {
  let best = Math.round(hz);
  let bestDiff = Infinity;
  for (const r of DIAG.typoweOdswiezania) {
    const d = Math.abs(r - hz);
    if (d < bestDiff && d <= r * 0.06) {
      best = r;
      bestDiff = d;
    }
  }
  return best;
}

function diagLines() {
  const n = diag.n;
  let sum = 0;
  let longest = 0;
  let renderSum = 0;
  let zero = 0;
  let one = 0;
  let more = 0;
  for (let i = 0; i < n; i++) {
    const d = diag.delty[i];
    sum += d;
    if (d > longest) longest = d;
    renderSum += diag.rendery[i];
    const k = diag.kroki[i];
    if (k === 0) zero++;
    else if (k === 1) one++;
    else more++;
  }
  for (let i = 0; i < n; i++) diag.sortowane[i] = diag.delty[i];
  const sorted = diag.sortowane.subarray(0, n).sort();
  const median = n > 0 ? sorted[n >> 1] : 0;
  const dpr = window.devicePixelRatio || 1;
  diag.ostrzezenie = median > 0 && longest > 2.5 * median ? 1 : -1;
  const lines = [
    tx('diagFps', { a: sum > 0 ? (n / sum).toFixed(1) : '-', b: longest > 0 ? (1 / longest).toFixed(1) : '-' }),
    tx('diagKlatka', { t: (longest * 1000).toFixed(1) }),
    tx('diagKroki', { a: zero, b: one, c: more }),
    tx('diagEkran', { h: median > 0 ? nearestRefresh(1 / median) : '-' }),
    tx('diagDpr', { d: Number(dpr.toFixed(2)), s: Number(canvasFit.skala.toFixed(2)) }),
    tx('diagBufor', { w: SCREEN_W, h: SCREEN_H, cw: canvasFit.szerokosc, ch: canvasFit.wysokosc }),
    tx('diagRender', { t: n > 0 ? (renderSum / n).toFixed(2) : '-' }),
  ];
  return lines;
}

function drawDiagnostics() {
  if (diag.odswiez <= 0) {
    diag.linie = diagLines();
    diag.odswiez = 10;
  }
  diag.odswiez--;
  const lines = diag.linie;
  let w = 0;
  for (const line of lines) w = Math.max(w, textWidth(line, 1));
  const m = DIAG.margines;
  ctx.fillStyle = DIAG.kolorTla;
  ctx.fillRect(DIAG.x, DIAG.y, w + 2 * m, lines.length * DIAG.odstep + 2 * m - 2);
  for (let i = 0; i < lines.length; i++) {
    drawText(lines[i], DIAG.x + m, DIAG.y + m + i * DIAG.odstep, 1, i === diag.ostrzezenie ? DIAG.kolorOstrzezenia : DIAG.kolorTekstu);
  }
}

let lastTime = null;
let accumulator = 0;

function drawErrorScreen() {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.globalAlpha = 1;
  ctx.fillStyle = UI.bladTlo;
  ctx.fillRect(0, 0, SCREEN_W, SCREEN_H);
  drawCentered(tx('blad'), UI.bladNapisY, UI.bladNapisSkala, UI.bladKolor);
  drawCentered(tx(touch.aktywny ? 'bladPodpisDotyk' : 'bladPodpis'), UI.bladPodpisY, 1, UI.kolorTekstu);
}

function frame(now) {
  try {
    fx.aktywne = true;
    if (lastTime === null) lastTime = now;
    const raw = Math.max(0, (now - lastTime) / 1000);
    lastTime = now;
    const delta = Math.min(raw, PETLA.maxDelta);
    if (game.komunikat) {
      game.komunikat.czas -= delta;
      if (game.komunikat.czas <= 0) game.komunikat = null;
    }
    checkResize(now);

    if (game.blad) {
      accumulator = 0;
      drawErrorScreen();
    } else {
      if (game.paused) accumulator = 0;
      else accumulator += delta;
      let steps = 0;
      while (accumulator >= STEP && steps < PETLA.maxKrokow) {
        rememberPositions();
        update(STEP);
        fxStep(STEP);
        accumulator -= STEP;
        steps++;
      }
      if (accumulator >= STEP) accumulator %= STEP;
      view.alpha = PETLA.interpolacja && !game.paused ? Math.min(1, accumulator / STEP) : 1;
      const t0 = performance.now();
      render();
      diagRecord(raw, steps, performance.now() - t0);
    }
  } catch (err) {
    game.blad = true;
    accumulator = 0;
    try {
      drawErrorScreen();
    } catch (err2) {
      game.blad = true;
    }
  }
  requestAnimationFrame(frame);
}

const coarsePointer = window.matchMedia('(pointer: coarse)');

const rotateOverlay = document.createElement('div');
Object.assign(rotateOverlay.style, {
  position: 'fixed',
  left: '0',
  top: '0',
  right: '0',
  bottom: '0',
  display: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  background: DOTYK.obrotTlo,
  color: DOTYK.obrotKolor,
  fontSize: DOTYK.obrotRozmiar,
  fontFamily: DOTYK.obrotCzcionka,
  fontWeight: 'bold',
  zIndex: '10',
});
document.body.appendChild(rotateOverlay);
applyLanguage();

function updateOrientation() {
  const portrait = (touch.aktywny || coarsePointer.matches) && window.innerHeight > window.innerWidth;
  if (portrait === game.portrait) return;
  game.portrait = portrait;
  rotateOverlay.style.display = portrait ? 'flex' : 'none';
  releaseTouch();
  if (portrait) {
    autoPause();
    pauseAudio();
  } else {
    resumeAudio();
  }
}

const canvasFit = { dpr: 1, skala: 1, szerokosc: SCREEN_W, wysokosc: SCREEN_H, zadanie: -1 };

function fitCanvas() {
  const dpr = window.devicePixelRatio || 1;
  const cs = getComputedStyle(document.body);
  const availW = document.body.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
  const availH = document.body.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
  const raw = Math.min(availW * dpr / SCREEN_W, availH * dpr / SCREEN_H);
  const scale = OKNO.calkowiteSkalowanie && raw >= 1 ? Math.floor(raw) : raw;
  canvas.style.width = (SCREEN_W * scale / dpr) + 'px';
  canvas.style.height = (SCREEN_H * scale / dpr) + 'px';
  canvasFit.dpr = dpr;
  canvasFit.skala = scale;
  canvasFit.szerokosc = Math.round(SCREEN_W * scale);
  canvasFit.wysokosc = Math.round(SCREEN_H * scale);
  canvasFit.zadanie = -1;
  updateOrientation();
}

function requestFit() {
  canvasFit.zadanie = 0;
}

function checkResize(now) {
  if ((window.devicePixelRatio || 1) !== canvasFit.dpr && canvasFit.zadanie < 0) canvasFit.zadanie = 0;
  if (canvasFit.zadanie === 0) canvasFit.zadanie = now;
  if (canvasFit.zadanie > 0 && now - canvasFit.zadanie >= PETLA.opoznienieRozmiaru * 1000) fitCanvas();
}

window.addEventListener('resize', requestFit);
window.addEventListener('orientationchange', requestFit);
window.addEventListener('pointerdown', updateOrientation);
document.addEventListener('fullscreenchange', requestFit);
document.addEventListener('webkitfullscreenchange', requestFit);
fitCanvas();

loadProgress();
applyLevel(0);
resetLevel();
game.state = 'start';
requestAnimationFrame(frame);
