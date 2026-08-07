export type PlaceLink = {
  label: string
  href: string
  kind?: "map" | "external"
  instagram?: string
}

export type TimelineItem = {
  label: string
  title?: string
  icon:
    | "run"
    | "luggage"
    | "meal"
    | "walk"
    | "dessert"
    | "work"
    | "cool"
    | "evening"
    | "flight"
  tone?: "default" | "meal" | "work"
  badge?: string
  description?: string
  bullets?: string[]
  links?: PlaceLink[]
  callout?: string
}

export type TokyoDay = {
  id: string
  day: number
  date: string
  shortDate: string
  subtitle: string
  area: string
  lunch: PlaceLink[]
  dinner: PlaceLink[]
  dessert: PlaceLink[]
  dessertText?: string
  status?: "completed" | "current"
  timeline: TimelineItem[]
}

const instagramByPlace: Record<string, string> = {
  "Vegan Bistro Jangara Harajuku": "https://www.instagram.com/veganbistro_jangara/",
  "Vegan Izakaya Masaka Shibuya": "https://www.instagram.com/vegan_izakaya_masaka/",
  "I'm donut Gluten-Free Vegan 5-53-4 Jingumae": "https://www.instagram.com/im.donut.gluten.free/",
  "AIN SOPH Journey Shinjuku": "https://www.instagram.com/ainsoph.journey/",
  "marbre vegan Shinjuku": "https://www.instagram.com/marbre_vegan/",
  "Zen Okonomiyaki Shinjuku": "https://www.instagram.com/okonomi.zen/",
  "Marugoto Vegan Dining Asakusa": "https://www.instagram.com/marugotovegan_dining/",
  "Asakusa GURAKU Taiyaki": "https://www.instagram.com/asakusa.taiyaki.guraku/",
  "Hatoya's Vegan Fruit Sandwiches Asakusa": "https://www.instagram.com/asakusa_hatoya/",
  "Vegan Izakaya Nowhere": "https://www.instagram.com/veganizakayanowhere/",
  "Matcha Passport Shimokitazawa": "https://www.instagram.com/matchapassport/",
  "Vegan Soba Tokyo Ayler": "https://www.instagram.com/__ayler__/",
  "Tokyo Vegan Bakes Shimokitazawa": "https://www.instagram.com/tokyoveganbakes/",
  "Universal Bakes and Cafe": "https://www.instagram.com/universalbakes_tokyo/",
  "THE NUTS EXCHANGE Tomigaya": "https://www.instagram.com/the_nuts_exchange/",
  "All-Day Dining OASIS GARDEN": "https://www.instagram.com/princegallerytokyokioicho/",
  "Menya Shichisai Hatchobori": "https://www.instagram.com/menya_shichisai/",
  "te cor gentil vegan bakes Azabu Juban": "https://www.instagram.com/tecorgentil/",
  "2foods Ginza Loft": "https://www.instagram.com/2foods.official/",
  "KOMEDA is Higashi Ginza": "https://www.instagram.com/komeda_is/",
  "AIN SOPH. Ginza": "https://www.instagram.com/ainsoph.ginza/",
  "The Vegan Marshmallooow Ginza": "https://www.instagram.com/theveganmarshmallooow/",
  "Ginza Tsuboyaki Imo": "https://www.instagram.com/tsubo_yakiimo/",
  "Jikasei MENSHO Shibuya PARCO": "https://www.instagram.com/menya_shono/",
  "Tsukemen Zuppa Suidobashi": "https://www.instagram.com/zuppa.suidoubashi/",
  "T's Tantan Ecute Ueno": "https://www.instagram.com/ts_tantan_jp/",
  "NEOShinjuku Atsushi": "https://www.instagram.com/neoshinjukuatsushi/",
  "T's Tantan Narita Airport Terminal 2": "https://www.instagram.com/ts_tantan_jp/",
}

const maps = (label: string, query: string): PlaceLink => ({
  label,
  href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`,
  kind: "map",
  ...(instagramByPlace[query] ? { instagram: instagramByPlace[query] } : {}),
})

const link = (label: string, href: string): PlaceLink => ({
  label,
  href,
  kind: "external",
})

export const hotel = maps(
  "Tosei Hotel Cocone Ueno Okachimachi",
  "Tosei Hotel Cocone Ueno Okachimachi"
)

export const tokyoDays: TokyoDay[] = [
  {
    id: "day-2026-08-06",
    day: 1,
    date: "Thursday, August 6",
    shortDate: "Aug 6",
    subtitle: "Completed · early check-in, work, and Shibuya",
    area: "Ueno · Shibuya",
    status: "completed",
    lunch: [maps("Vegan Bistro Jangara", "Vegan Bistro Jangara Harajuku")],
    dinner: [maps("Masaka", "Vegan Izakaya Masaka Shibuya")],
    dessert: [maps("I’m donut?", "I'm donut Gluten-Free Vegan 5-53-4 Jingumae")],
    timeline: [
      {
        label: "Morning",
        icon: "work",
        title: "Early check-in + work",
        description: "Checked in early. Pepito worked in the morning.",
      },
      {
        label: "Lunch",
        icon: "meal",
        tone: "meal",
        title: "Vegan Bistro Jangara",
        links: [maps("Open in Maps", "Vegan Bistro Jangara Harajuku")],
      },
      {
        label: "Afternoon",
        icon: "walk",
        title: "Shibuya walk + I’m donut?",
        description: "Walked around Shibuya and bought donuts.",
        links: [maps("I’m donut?", "I'm donut Gluten-Free Vegan 5-53-4 Jingumae")],
      },
      {
        label: "Dinner",
        icon: "meal",
        tone: "meal",
        title: "Masaka",
        description: "Vegan izakaya dinner in Shibuya.",
        links: [maps("Open in Maps", "Vegan Izakaya Masaka Shibuya")],
      },
    ],
  },
  {
    id: "day-2026-08-07",
    day: 2,
    date: "Friday, August 7",
    shortDate: "Aug 7",
    subtitle: "Completed · work, Shinjuku, and vegan comfort food",
    area: "Ueno · Shinjuku",
    status: "completed",
    lunch: [maps("AIN SOPH. Journey", "AIN SOPH Journey Shinjuku")],
    dinner: [maps("Zen", "Zen Okonomiyaki Shinjuku")],
    dessert: [maps("marbre vegan", "marbre vegan Shinjuku")],
    timeline: [
      {
        label: "Morning",
        icon: "work",
        title: "Work + ASICS run",
        description: "Pepito worked in the morning. Bianca completed the ASICS run.",
      },
      {
        label: "Lunch",
        icon: "meal",
        tone: "meal",
        title: "AIN SOPH. Journey",
        links: [maps("Open in Maps", "AIN SOPH Journey Shinjuku")],
      },
      {
        label: "Afternoon",
        icon: "dessert",
        title: "Shinjuku walk + marbre vegan",
        description: "Walked in Shinjuku and bought dessert from marbre vegan.",
        links: [maps("Open in Maps", "marbre vegan Shinjuku")],
      },
      {
        label: "Dinner",
        icon: "meal",
        tone: "meal",
        title: "Zen",
        description: "Vegan okonomiyaki dinner.",
        links: [maps("Open in Maps", "Zen Okonomiyaki Shinjuku")],
      },
    ],
  },
  {
    id: "day-2026-08-08",
    day: 3,
    date: "Saturday, August 8",
    shortDate: "Aug 8",
    subtitle: "Shimokitazawa, Carrot Tower, Harajuku, and Meiji Jingu",
    area: "Shimokitazawa · Sangenjaya · Harajuku · Meiji Jingu · hotel reset · Skytree",
    status: "current",
    lunch: [maps("Vegan Soba Tokyo Ayler", "Vegan Soba Tokyo Ayler")],
    dinner: [maps("Vegan Izakaya Nowhere", "Vegan Izakaya Nowhere")],
    dessert: [
      maps("Matcha Passport", "Matcha Passport Shimokitazawa"),
      maps("Tokyo Vegan Bakes", "Tokyo Vegan Bakes Shimokitazawa"),
      maps("Universal Bakes", "Universal Bakes and Cafe"),
    ],
    timeline: [
      {
        label: "First stop",
        icon: "dessert",
        title: "Matcha Passport",
        description: "Start here for matcha in Shimokitazawa. Opens at 10:00 AM.",
        links: [maps("Open in Maps", "Matcha Passport Shimokitazawa")],
      },
      {
        label: "Before lunch",
        icon: "dessert",
        title: "Shimokitazawa pastries",
        bullets: [
          "Start at Tokyo Vegan Bakes for the best selection.",
          "Continue to Universal Bakes only if you still want more pastries.",
          "Browse Shimokitazawa’s small shops between stops.",
        ],
        links: [
          maps("Tokyo Vegan Bakes", "Tokyo Vegan Bakes Shimokitazawa"),
          maps("Universal Bakes", "Universal Bakes and Cafe"),
        ],
      },
      {
        label: "Lunch",
        icon: "meal",
        tone: "meal",
        title: "Vegan Soba Tokyo Ayler",
        description: "Fully vegan soba and tempura near Shimokitazawa.",
        callout: "Aim for 12:30 PM. Check Ayler’s Instagram before leaving: current Saturday listings conflict.",
        links: [maps("Open in Maps", "Vegan Soba Tokyo Ayler")],
      },
      {
        label: "After lunch",
        icon: "walk",
        title: "Carrot Tower",
        description: "Free 26th-floor Sky Carrot view. Take the elevator to floor 2, then the dedicated elevator upstairs.",
        callout: "Best for Fuji only if the sky is clear. The lobby is open 9:30 AM–10:00 PM today.",
        links: [maps("Open in Maps", "Carrot Tower Sky Carrot Observation Lobby")],
      },
      {
        label: "After lunch",
        icon: "walk",
        title: "Harajuku",
        description: "Use the indoor shops and Cat Street before going to the shrine.",
        links: [maps("Open in Maps", "Harajuku Station")],
      },
      {
        label: "After lunch",
        icon: "walk",
        title: "Meiji Jingu",
        description: "Walk to the shrine from Harajuku.",
        links: [maps("Open in Maps", "Meiji Jingu")],
      },
      {
        label: "Reset",
        icon: "cool",
        title: "Hotel",
        description: "Return to Ueno after lunch. Rest and go out fresh for dinner.",
      },
      {
        label: "Dinner",
        icon: "meal",
        tone: "meal",
        title: "Vegan Izakaya Nowhere",
        description: "Fully vegan comfort-food izakaya near Skytree.",
        callout: "Go for 5:00–5:30 PM or reserve a later table.",
        links: [
          maps("Open in Maps", "Vegan Izakaya Nowhere"),
          link("Nowhere official site", "https://veganizakayanowhere.com/"),
        ],
      },
    ],
  },
  {
    id: "day-2026-08-09",
    day: 4,
    date: "Sunday, August 9",
    shortDate: "Aug 9",
    subtitle: "Asakusa food day, then CEO dinner",
    area: "Asakusa · hotel reset · Kioicho",
    lunch: [maps("Marugoto Vegan Dining", "Marugoto Vegan Dining Asakusa")],
    dinner: [maps("OASIS GARDEN", "All-Day Dining OASIS GARDEN")],
    dessert: [
      maps("GURAKU", "Asakusa GURAKU Taiyaki"),
      maps("Hatoya", "Hatoya's Vegan Fruit Sandwiches Asakusa"),
    ],
    timeline: [
      {
        label: "Morning",
        icon: "walk",
        title: "Asakusa",
        description: "Walk Kaminarimon, Nakamise, Senso-ji, and Asakusa Shrine before lunch.",
        links: [
          maps("Kaminarimon", "Kaminarimon Asakusa"),
          maps("Senso-ji", "Senso-ji"),
          maps("Imado Shrine", "Imado Shrine"),
        ],
      },
      {
        label: "Lunch",
        icon: "meal",
        tone: "meal",
        title: "Marugoto Vegan Dining",
        description: "Fully vegan, gluten-free Japanese and Western dishes.",
        callout: "Lunch ends at 3:00 PM.",
        links: [maps("Open in Maps", "Marugoto Vegan Dining Asakusa")],
      },
      {
        label: "After lunch",
        icon: "dessert",
        title: "GURAKU + Hatoya",
        bullets: [
          "Get ready-made vegan taiyaki from GURAKU.",
          "Buy Hatoya’s fruit sandwich only if you can eat it immediately.",
        ],
        links: [
          maps("GURAKU", "Asakusa GURAKU Taiyaki"),
          maps("Hatoya", "Hatoya's Vegan Fruit Sandwiches Asakusa"),
        ],
      },
      {
        label: "After lunch",
        icon: "cool",
        title: "Free 8F Asakusa view",
        description: "See Senso-ji and Skytree from the Culture Tourist Information Center before returning to the hotel.",
        links: [maps("Open in Maps", "Asakusa Culture Tourist Information Center")],
      },
      {
        label: "Reset",
        icon: "cool",
        title: "Hotel",
        description: "Return after lunch. Shower, rest, and change before dinner.",
      },
      {
        label: "Dinner · 8:00 PM",
        icon: "meal",
        tone: "meal",
        title: "CEO dinner · OASIS GARDEN",
        description: "36F, The Prince Gallery Tokyo Kioicho.",
        callout: "Leave the hotel with time to spare. Smart casual.",
        links: [maps("Open in Maps", "All-Day Dining OASIS GARDEN")],
      },
    ],
  },
  {
    id: "day-2026-08-10",
    day: 5,
    date: "Monday, August 10",
    shortDate: "Aug 10",
    subtitle: "Morning work, Hatchobori ramen, and Azabu-Juban pastries",
    area: "Ueno · Hatchobori · Azabu-Juban · hotel reset · Ginza",
    lunch: [maps("Menya Shichisai", "Menya Shichisai Hatchobori")],
    dinner: [maps("2foods Ginza Loft", "2foods Ginza Loft")],
    dessert: [maps("Te cor gentil", "te cor gentil vegan bakes Azabu Juban")],
    timeline: [
      {
        label: "Morning work",
        icon: "work",
        tone: "work",
        title: "Hotel work block",
        description: "Work in the hotel before Pepito’s 12:00 PM meeting.",
      },
      {
        label: "12:00 PM",
        icon: "work",
        tone: "work",
        title: "Meeting",
        description: "Keep the start of the day clear until it ends.",
      },
      {
        label: "Late lunch",
        icon: "meal",
        tone: "meal",
        title: "Menya Shichisai",
        description: "Handmade ramen with a vegan option in Hatchobori.",
        callout: "Confirm the vegan bowl before travelling. Holiday lunch service ends at 3:00 PM.",
        links: [maps("Open in Maps", "Menya Shichisai Hatchobori")],
      },
      {
        label: "After lunch",
        icon: "dessert",
        title: "Te cor gentil + Tokyo Tower exterior",
        description: "Eat fragile pastries at Te cor gentil, then walk through Zojo-ji for a ground-level Tokyo Tower view.",
        callout: "Aim to reach Te cor gentil before 5:00 PM.",
        links: [
          maps("Te cor gentil", "te cor gentil vegan bakes Azabu Juban"),
          maps("Zojo-ji", "Zojo-ji Temple"),
        ],
      },
      {
        label: "Reset",
        icon: "cool",
        title: "Hotel",
        description: "Return to Ueno before dinner.",
      },
      {
        label: "Dinner",
        icon: "meal",
        tone: "meal",
        title: "2foods Ginza Loft",
        description: "Casual fully plant-based burgers, curry, omurice, and desserts.",
        callout: "Last order is 8:15 PM.",
        links: [maps("Open in Maps", "2foods Ginza Loft")],
      },
    ],
  },
  {
    id: "day-2026-08-11",
    day: 6,
    date: "Tuesday, August 11",
    shortDate: "Aug 11",
    subtitle: "Mountain Day · Tomigaya lunch and a Jikasei dinner mission",
    area: "Tomigaya · hotel reset · Shibuya",
    lunch: [maps("THE NUTS EXCHANGE", "THE NUTS EXCHANGE Tomigaya")],
    dinner: [maps("Jikasei MENSHO", "Jikasei MENSHO Shibuya PARCO")],
    dessert: [],
    dessertText: "Return to Ginza another day for desserts",
    timeline: [
      {
        label: "Before lunch",
        icon: "cool",
        title: "Tomigaya",
        description: "Go straight to THE NUTS EXCHANGE for lunch, then return to the hotel.",
      },
      {
        label: "Lunch",
        icon: "meal",
        tone: "meal",
        title: "THE NUTS EXCHANGE",
        description: "Get the fully vegan ECC muffin sandwich.",
        callout: "Indoor seating is limited.",
        links: [maps("Open in Maps", "THE NUTS EXCHANGE Tomigaya")],
      },
      {
        label: "Reset",
        icon: "cool",
        title: "Hotel",
        description: "Return to Ueno before dinner.",
      },
      {
        label: "Dinner",
        icon: "meal",
        tone: "meal",
        title: "Jikasei MENSHO",
        description: "Vegan ramen in Shibuya PARCO. Go for the food; skip a second Shibuya sightseeing loop.",
        callout: "Go around 6:00 PM. It is open daily until 11:00 PM.",
        links: [maps("Open in Maps", "Jikasei MENSHO Shibuya PARCO")],
      },
    ],
  },
  {
    id: "day-2026-08-12",
    day: 7,
    date: "Wednesday, August 12",
    shortDate: "Aug 12",
    subtitle: "Ueno meeting, Suidobashi lunch, and a Shinjuku dinner",
    area: "Ueno · Suidobashi · hotel reset · Shinjuku",
    lunch: [
      maps("Tsukemen Zuppa", "Tsukemen Zuppa Suidobashi"),
      maps("KOMEDA is ☐", "KOMEDA is Higashi Ginza"),
      maps("T’s Tantan backup", "T's Tantan Ecute Ueno"),
    ],
    dinner: [maps("NEOShinjuku Atsushi", "NEOShinjuku Atsushi")],
    dessert: [],
    dessertText: "Repeat a Ginza pastry if you want one",
    timeline: [
      {
        label: "Morning",
        icon: "work",
        title: "Colleague meeting",
        description: "Meet around Ueno.",
      },
      {
        label: "Lunch",
        icon: "meal",
        tone: "meal",
        title: "Tsukemen Zuppa or KOMEDA is ☐",
        description: "Pick Zuppa for vegan tsukemen near Suidobashi; pick KOMEDA for a fully plant-based Ginza lunch.",
        callout: "Check Zuppa’s Instagram before leaving. If it is closed, use KOMEDA or T’s Tantan Ueno.",
        links: [
          maps("Tsukemen Zuppa", "Tsukemen Zuppa Suidobashi"),
          maps("KOMEDA is ☐", "KOMEDA is Higashi Ginza"),
          maps("T’s Tantan", "T's Tantan Ecute Ueno"),
        ],
      },
      {
        label: "After lunch",
        icon: "cool",
        title: "Tokyo Dome City",
        description: "Use the indoor complex to cool down, or return to the hotel early.",
      },
      {
        label: "Reset",
        icon: "cool",
        title: "Hotel",
        description: "Return to Ueno before dinner.",
      },
      {
        label: "Dinner",
        icon: "meal",
        tone: "meal",
        title: "NEOShinjuku Atsushi",
        description: "Vegan tantanmen, burgers, gyoza, and karaage in Shinjuku.",
        links: [maps("Open in Maps", "NEOShinjuku Atsushi")],
      },
    ],
  },
  {
    id: "day-2026-08-13",
    day: 8,
    date: "Thursday, August 13",
    shortDate: "Aug 13",
    subtitle: "Ueno, a repeat favorite, and departure",
    area: "Ueno · Narita",
    lunch: [],
    dinner: [maps("T’s Tantan Narita", "T's Tantan Narita Airport Terminal 2")],
    dessert: [],
    dessertText: "Buy carryable airport snacks",
    timeline: [
      {
        label: "Morning",
        icon: "luggage",
        title: "Checkout and luggage",
        description: "Check out by 10:00 AM and leave luggage with the hotel.",
      },
      {
        label: "Lunch",
        icon: "meal",
        tone: "meal",
        title: "Repeat a favorite near Ueno",
        callout: "Collect your luggage and leave Ueno around 2:30 PM.",
      },
      {
        label: "Dinner",
        icon: "meal",
        tone: "meal",
        title: "T’s Tantan Narita Terminal 2",
        callout: "Eat around 4:00–4:30 PM before security, then walk to Terminal 3.",
        links: [maps("Open in Maps", "T's Tantan Narita Airport Terminal 2")],
      },
      {
        label: "Departure",
        icon: "flight",
        description: "Flight departs Narita at 7:40 PM.",
      },
    ],
  },
]

export const pastryStops = [
  { area: "Shimokitazawa", place: maps("Tokyo Vegan Bakes", "Tokyo Vegan Bakes Shimokitazawa"), note: "Pastries, donuts, and bread" },
  { area: "Setagaya-Daita", place: maps("Universal Bakes and Cafe", "Universal Bakes and Cafe"), note: "Vegan bread and pastries" },
  { area: "Asakusa", place: maps("Hatoya Vegan Fruit Sandwiches", "Hatoya's Vegan Fruit Sandwiches Asakusa"), note: "Eat immediately" },
  { area: "Asakusa", place: maps("Asakusa GURAKU", "Asakusa GURAKU Taiyaki"), note: "Ready-made vegan taiyaki" },
  { area: "Ginza", place: maps("AIN SOPH. Ginza", "AIN SOPH. Ginza"), note: "Pudding, tiramisu, and raisin sandwiches" },
  { area: "Ginza", place: maps("The Vegan Marshmallooow", "The Vegan Marshmallooow Ginza"), note: "Ginza Mitsukoshi B2" },
  { area: "Ginza", place: maps("Ginza Tsuboyaki-imo", "Ginza Tsuboyaki Imo"), note: "Hot or chilled roasted sweet potato" },
  { area: "Azabu-Juban", place: maps("Te cor gentil", "te cor gentil vegan bakes Azabu Juban"), note: "Eat chilled items there" },
]

export const reservations = [
  {
    title: "CEO dinner · OASIS GARDEN",
    meta: "Sunday, August 9 · 8:00 PM",
    links: [maps("Open in Maps", "All-Day Dining OASIS GARDEN")],
  },
  {
    title: "Marugoto Vegan Dining",
    meta: "Saturday, August 8 · lunch",
    links: [link("TableCheck", "https://www.tablecheck.com/shops/marugoto-vegan-asakusa/reserve")],
  },
]

export const morningRuns = [
  { day: "Sun Aug 9", time: "5:00 AM", route: "Ueno Park → Yanaka Cemetery", distance: "About 6 km" },
  { day: "Mon Aug 10", time: "5:00 AM", route: "Kanda Myojin → Shinobazu Pond", distance: "About 5 km" },
  { day: "Tue Aug 11", time: "5:00 AM", route: "Shinobazu Pond → Nezu Shrine", distance: "About 5 km" },
]

export const tripDetails = [
  { label: "Hotel", value: "Tosei Hotel Cocone Ueno Okachimachi" },
  { label: "CEO dinner", value: "Sunday, August 9 · 8:00 PM · OASIS GARDEN" },
  { label: "Colleague meeting", value: "Wednesday, August 12 morning · Ueno area" },
  { label: "Departure", value: "Thursday, August 13 · Narita 7:40 PM" },
]

export const referenceMaps = [
  link("Tokyo 2026 Google My Maps", "https://www.google.com/maps/d/viewer?mid=1DZa9FPxP4NEecF3sXLAhtooC40B25X4&usp=sharing"),
  link("Additional map reference", "https://maps.app.goo.gl/fSFT8q3fmAKtsWor6"),
]

export const tokyoMap = {
  embed: "https://www.google.com/maps/d/embed?mid=1DZa9FPxP4NEecF3sXLAhtooC40B25X4",
  viewer: "https://www.google.com/maps/d/viewer?mid=1DZa9FPxP4NEecF3sXLAhtooC40B25X4&usp=sharing",
}

export const itadakiHealthyMap = {
  label: "Itadakihealthy · Vegan in Japan",
  href: "https://maps.app.goo.gl/fSFT8q3fmAKtsWor6",
  description: "A shared Google Maps list with vegan and vegan-friendly places across Japan.",
}
