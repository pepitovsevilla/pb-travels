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
  timeline: TimelineItem[]
}

const instagramByPlace: Record<string, string> = {
  "T's Tantan Ecute Ueno": "https://www.instagram.com/ts_tantan_jp/",
  "Vegan Izakaya Masaka Shibuya":
    "https://www.instagram.com/vegan_izakaya_masaka/",
  "Marugoto Vegan Dining Asakusa":
    "https://www.instagram.com/marugotovegan_dining/",
  "Vegan Bistro Jangara Harajuku":
    "https://www.instagram.com/veganbistro_jangara/",
  "Asakusa GURAKU Taiyaki":
    "https://www.instagram.com/asakusa.taiyaki.guraku/",
  "Hatoya's Vegan Fruit Sandwiches Asakusa":
    "https://www.instagram.com/asakusa_hatoya/",
  "I'm donut Gluten-Free Vegan 5-53-4 Jingumae":
    "https://www.instagram.com/im.donut.gluten.free/",
  "Jikasei MENSHO Shibuya PARCO":
    "https://www.instagram.com/menya_shono/",
  "Tokyo Vegan Bakes Shimokitazawa":
    "https://www.instagram.com/tokyoveganbakes/",
  "Universal Bakes and Cafe":
    "https://www.instagram.com/universalbakes_tokyo/",
  "THE NUTS EXCHANGE Tomigaya":
    "https://www.instagram.com/the_nuts_exchange/",
  "MORETHAN BAKERY Shinjuku":
    "https://www.instagram.com/morethan_bakery/",
  "AIN SOPH Journey Shinjuku":
    "https://www.instagram.com/ainsoph.journey/",
  "Vegan Izakaya Nowhere":
    "https://www.instagram.com/veganizakayanowhere/",
  "marbre vegan Shinjuku": "https://www.instagram.com/marbre_vegan/",
  "KOMEDA is Higashi Ginza": "https://www.instagram.com/komeda_is/",
  "T's Tantan Tokyo Station": "https://www.instagram.com/ts_tantan_jp/",
  "The Vegan Marshmallooow Ginza":
    "https://www.instagram.com/theveganmarshmallooow/",
  "Ginza Tsuboyaki Imo": "https://www.instagram.com/tsubo_yakiimo/",
  "2foods Ginza Loft": "https://www.instagram.com/2foods.official/",
  "NEOShinjuku Atsushi":
    "https://www.instagram.com/neoshinjukuatsushi/",
  "Zen Okonomiyaki Shinjuku": "https://www.instagram.com/okonomi.zen/",
  "Shochikuen Cafe Asakusa":
    "https://www.instagram.com/shochikuen_vegan/",
  "T's Tantan Narita Airport Terminal 2":
    "https://www.instagram.com/ts_tantan_jp/",
  "hal okada vegan patisserie Hiroo":
    "https://www.instagram.com/halokada_vegan_patisserie/",
}

const maps = (label: string, query: string): PlaceLink => {
  const instagram = instagramByPlace[query]

  return {
    label,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`,
    kind: "map",
    ...(instagram ? { instagram } : {}),
  }
}

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
    subtitle: "Arrival, Ueno, and Shibuya",
    area: "Ueno · Shibuya",
    lunch: [maps("T’s Tantan Ecute Ueno", "T's Tantan Ecute Ueno")],
    dinner: [maps("Masaka Vegan Izakaya", "Vegan Izakaya Masaka Shibuya")],
    dessert: [],
    dessertText: "Konbini snacks near the hotel",
    timeline: [
      {
        label: "Arrival",
        icon: "flight",
        title: "Narita to Ueno",
        bullets: [
          "Jetstar GK40 lands at Narita at 6:10 AM.",
          "Take the Skyliner to Nippori, then the Yamanote Line to Ueno.",
          "Leave your luggage at the hotel before lunch.",
        ],
      },
      {
        label: "Lunch",
        icon: "meal",
        tone: "meal",
        title: "T’s Tantan Ecute Ueno",
        description:
          "Third floor inside Ueno Station’s paid JR area. It opens at 10:00 AM.",
        callout: "Eat by 11:00 AM to avoid the lunch rush.",
        links: [maps("Open in Maps", "T's Tantan Ecute Ueno")],
      },
      {
        label: "Afternoon",
        icon: "walk",
        bullets: [
          "Keep sightseeing light: Ameyoko, Okachimachi, or the edge of Ueno Park.",
          "Check in after 3:00 PM, then rest.",
        ],
      },
      {
        label: "Cool down",
        icon: "cool",
        description:
          "Matsuzakaya Ueno, PARCO_ya, Tokyo National Museum, or the National Museum of Nature and Science.",
      },
      {
        label: "Dinner",
        icon: "meal",
        tone: "meal",
        title: "Masaka Vegan Izakaya",
        description: "Casual shared dishes at a fully vegan izakaya in Shibuya.",
        callout: "Arrive by 5:00 PM to avoid the queue. Masaka does not take reservations.",
        bullets: ["After dinner, visit Shibuya PARCO or Shibuya Crossing."],
        links: [maps("Open in Maps", "Vegan Izakaya Masaka Shibuya")],
      },
    ],
  },
  {
    id: "day-2026-08-07",
    day: 2,
    date: "Friday, August 7",
    shortDate: "Aug 7",
    subtitle: "Asakusa and work",
    area: "Asakusa · Harajuku",
    lunch: [maps("Marugoto Vegan Dining", "Marugoto Vegan Dining Asakusa")],
    dinner: [maps("Vegan Bistro Jangara", "Vegan Bistro Jangara Harajuku")],
    dessert: [
      maps("GURAKU", "Asakusa GURAKU Taiyaki"),
      maps("Hatoya", "Hatoya's Vegan Fruit Sandwiches Asakusa"),
      maps("I’m donut?", "I'm donut Gluten-Free Vegan 5-53-4 Jingumae"),
    ],
    timeline: [
      {
        label: "5:00 AM run",
        icon: "run",
        title: "Shinobazu Pond + Ueno Park",
        description: "About 4 km from the hotel.",
        links: [maps("Route area", "Shinobazu Pond")],
      },
      {
        label: "Morning",
        icon: "walk",
        bullets: [
          "Walk through Kaminarimon, Nakamise, Senso-ji, and Asakusa Shrine before the crowds and heat build.",
          "Return via Denboin Street. After 9:00 AM, visit the free 8F viewpoint at the Asakusa Culture Tourist Information Center.",
          "Continue to Imado Shrine to make a shared wish.",
        ],
        links: [
          maps("Kaminarimon", "Kaminarimon Asakusa"),
          maps("Senso-ji", "Senso-ji"),
          maps("Free viewpoint", "Asakusa Culture Tourist Information Center"),
          maps("Imado Shrine", "Imado Shrine"),
        ],
      },
      {
        label: "Lunch",
        icon: "meal",
        tone: "meal",
        title: "Marugoto Vegan Dining",
        badge: "Reserve 11:30 AM",
        description: "Lunch ends at 3:00 PM.",
        links: [maps("Open in Maps", "Marugoto Vegan Dining Asakusa")],
      },
      {
        label: "Dessert",
        icon: "dessert",
        title: "GURAKU + Hatoya",
        bullets: [
          "At GURAKU, buy ready-made vegan taiyaki with red bean, matcha, or chili-taco filling.",
          "Buy a fruit sandwich at Hatoya if stock remains, and eat it there.",
        ],
        links: [
          maps("GURAKU", "Asakusa GURAKU Taiyaki"),
          maps("Hatoya", "Hatoya's Vegan Fruit Sandwiches Asakusa"),
        ],
      },
      {
        label: "Work · 2:30–5:30 PM",
        icon: "work",
        tone: "work",
        title: "Hotel work block",
        description: "Both work in the hotel room.",
      },
      {
        label: "Cool down",
        icon: "cool",
        description: "Asakusa ROX, EKIMISE, or the hotel.",
      },
      {
        label: "Dinner",
        icon: "meal",
        tone: "meal",
        title: "Vegan Bistro Jangara",
        callout: "Arrive around 6:00 PM. Last order is 9:00 PM.",
        bullets: [
          "Take the train to Harajuku after work.",
          "Pass I’m donut? Gluten-Free & Vegan; use only the storefront marked グルテンフリー＆ヴィーガン.",
        ],
        links: [
          maps("Jangara", "Vegan Bistro Jangara Harajuku"),
          maps("I’m donut?", "I'm donut Gluten-Free Vegan 5-53-4 Jingumae"),
        ],
      },
    ],
  },
  {
    id: "day-2026-08-08",
    day: 3,
    date: "Saturday, August 8",
    shortDate: "Aug 8",
    subtitle: "Shimokitazawa, Shibuya, and a summer evening",
    area: "Shimokitazawa · Shibuya",
    lunch: [maps("Jikasei MENSHO", "Jikasei MENSHO Shibuya PARCO")],
    dinner: [maps("Masaka", "Vegan Izakaya Masaka Shibuya")],
    dessert: [
      maps("Tokyo Vegan Bakes", "Tokyo Vegan Bakes Shimokitazawa"),
      maps("Universal Bakes", "Universal Bakes and Cafe"),
    ],
    timeline: [
      {
        label: "5:00 AM run",
        icon: "run",
        title: "Kuramae → Sumida River → Asakusa",
        description: "About 6 km, returning to the hotel.",
        links: [maps("Route area", "Sumida River Terrace Kuramae")],
      },
      {
        label: "Morning",
        icon: "dessert",
        title: "Shimokitazawa bakeries",
        bullets: [
          "Reach Tokyo Vegan Bakes by 9:30 AM for the best selection.",
          "Continue to nearby Universal Bakes for more carryable pastries, then browse Shimokitazawa.",
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
        title: "Jikasei MENSHO",
        description: "B1F of Shibuya PARCO. Order vegan tantanmen or spicy vegan miso ramen.",
        callout: "Aim for 1:30 PM, after the main lunch rush. A short line is still possible.",
        links: [maps("Open in Maps", "Jikasei MENSHO Shibuya PARCO")],
      },
      {
        label: "Afternoon",
        icon: "walk",
        bullets: [
          "Browse Nintendo TOKYO and the Pokémon Center inside PARCO.",
          "Walk through Center Gai and Mega Donki, then see Hachiko and Shibuya Crossing.",
          "Visit the free 11F Sky Lobby at Shibuya Hikarie, then return to PARCO by 5:00 PM.",
        ],
      },
      {
        label: "Cool down",
        icon: "cool",
        description:
          "Shibuya PARCO, Shibuya Hikarie, MIYASHITA PARK’s indoor shops, or Seibu Shibuya.",
      },
      {
        label: "Dinner",
        icon: "meal",
        tone: "meal",
        title: "Masaka",
        callout: "Arrive by 5:00 PM. Waits around 6:30 PM can exceed an hour.",
        links: [maps("Open in Maps", "Vegan Izakaya Masaka Shibuya")],
      },
      {
        label: "Summer evening",
        icon: "evening",
        bullets: [
          "Best fit: Shibuya Bon Odori around SHIBUYA109, 6:00–9:30 PM. Free and directly on the route.",
          "Alternative: Jingu Gaien Fireworks at 7:30 PM. Expect large crowds, outdoor waiting, and packed trains.",
          "Heat or rain: stay in Shibuya PARCO, then see the crossing after sunset.",
        ],
        links: [
          link(
            "Shibuya Bon Odori",
            "https://summer.walkerplus.com/odekake/detail_e/ar0313e557931/"
          ),
          link("Jingu fireworks", "https://www.jinguhanabi.com/about.html"),
        ],
      },
    ],
  },
  {
    id: "day-2026-08-09",
    day: 4,
    date: "Sunday, August 9",
    shortDate: "Aug 9",
    subtitle: "Sunday pastries and CEO dinner",
    area: "Shinjuku · Tomigaya",
    lunch: [maps("THE NUTS EXCHANGE", "THE NUTS EXCHANGE Tomigaya")],
    dinner: [],
    dessert: [maps("MORETHAN BAKERY", "MORETHAN BAKERY Shinjuku")],
    timeline: [
      {
        label: "5:00 AM run",
        icon: "run",
        title: "Ueno Park → Yanaka Cemetery",
        description: "About 6 km, returning to the hotel.",
        links: [maps("Yanaka Cemetery", "Yanaka Cemetery")],
      },
      {
        label: "Morning",
        icon: "dessert",
        title: "MORETHAN BAKERY",
        callout: "Arrive by 9:00 AM for the best SUNDAY VEGAN selection.",
        bullets: [
          "Choose products marked SUNDAY VEGAN.",
          "After 9:30 AM, visit the free indoor South Observatory at the Tokyo Metropolitan Government Building.",
          "Walk through Shinjuku Central Park if the weather is comfortable.",
        ],
        links: [
          maps("MORETHAN", "MORETHAN BAKERY Shinjuku"),
          maps("Free observatory", "Tokyo Metropolitan Government Building South Observatory"),
        ],
      },
      {
        label: "Lunch",
        icon: "meal",
        tone: "meal",
        title: "THE NUTS EXCHANGE",
        description: "Order the fully vegan ECC muffin sandwich.",
        callout: "Arrive around 11:00 AM. The shop has about ten indoor seats.",
        links: [maps("Open in Maps", "THE NUTS EXCHANGE Tomigaya")],
      },
      {
        label: "Afternoon",
        icon: "cool",
        description: "Return to the hotel early, rest, and prepare for dinner.",
      },
      {
        label: "Cool down",
        icon: "cool",
        description:
          "NEWoMan, Shinjuku Takashimaya, Isetan Shinjuku, or Ueno department stores.",
      },
      {
        label: "Dinner",
        icon: "meal",
        tone: "meal",
        title: "CEO dinner",
      },
    ],
  },
  {
    id: "day-2026-08-10",
    day: 5,
    date: "Monday, August 10",
    shortDate: "Aug 10",
    subtitle: "Shinjuku garden, cakes, work, and vegan izakaya",
    area: "Shinjuku · Skytree",
    lunch: [maps("AIN SOPH. Journey", "AIN SOPH Journey Shinjuku")],
    dinner: [
      maps("Vegan Izakaya Nowhere", "Vegan Izakaya Nowhere"),
      maps("Masaka backup", "Vegan Izakaya Masaka Shibuya"),
    ],
    dessert: [maps("marbre vegan", "marbre vegan Shinjuku")],
    timeline: [
      {
        label: "5:00 AM run",
        icon: "run",
        title: "Akihabara → Kanda Myojin → Shinobazu",
        description: "About 5 km, returning to the hotel.",
        links: [maps("Kanda Myojin", "Kanda Myojin")],
      },
      {
        label: "Morning",
        icon: "walk",
        bullets: [
          "Enter Shinjuku Gyoen at 9:00 AM and leave if the heat becomes uncomfortable.",
          "Continue through Hanazono Shrine, Godzilla Head, and the 3D Cat billboard.",
        ],
        links: [
          maps("Shinjuku Gyoen", "Shinjuku Gyoen"),
          maps("Hanazono Shrine", "Hanazono Shrine"),
          maps("Godzilla Head", "Godzilla Head Shinjuku"),
          maps("3D Cat", "Cross Shinjuku Vision"),
        ],
      },
      {
        label: "Lunch",
        icon: "meal",
        tone: "meal",
        title: "AIN SOPH. Journey",
        badge: "Reserve 11:30 AM",
        links: [maps("Open in Maps", "AIN SOPH Journey Shinjuku")],
      },
      {
        label: "Pastry",
        icon: "dessert",
        title: "marbre vegan",
        description: "Stop after lunch and eat chilled cakes there.",
        links: [maps("Open in Maps", "marbre vegan Shinjuku")],
      },
      {
        label: "Work · 2:30–5:30 PM",
        icon: "work",
        tone: "work",
        title: "Hotel work block",
        description: "Both work in the hotel room.",
      },
      {
        label: "Cool down",
        icon: "cool",
        description: "Shinjuku Takashimaya, NEWoMan, Isetan Shinjuku, or the hotel.",
      },
      {
        label: "Dinner",
        icon: "meal",
        tone: "meal",
        title: "Vegan Izakaya Nowhere",
        badge: "Reserve 6:30 PM",
        description: "Near Skytree. It opens at 5:00 PM on Monday.",
        bullets: ["If Nowhere is unavailable, repeat Masaka in Shibuya."],
        links: [
          maps("Open in Maps", "Vegan Izakaya Nowhere"),
          link("Official site", "https://veganizakayanowhere.com/"),
          maps("Masaka backup", "Vegan Izakaya Masaka Shibuya"),
        ],
      },
    ],
  },
  {
    id: "day-2026-08-11",
    day: 6,
    date: "Tuesday, August 11",
    shortDate: "Aug 11",
    subtitle: "Mountain Day: Nezu, Akihabara, and Ginza",
    area: "Nezu · Akihabara · Ginza",
    lunch: [maps("KOMEDA is ☐", "KOMEDA is Higashi Ginza")],
    dinner: [maps("2foods Ginza Loft", "2foods Ginza Loft")],
    dessert: [
      maps("Marshmallooow", "The Vegan Marshmallooow Ginza"),
      maps("Tsuboyaki-imo", "Ginza Tsuboyaki Imo"),
    ],
    timeline: [
      {
        label: "5:00 AM run",
        icon: "run",
        title: "Shinobazu Pond → Nezu Shrine",
        description: "About 5 km, returning to the hotel.",
        links: [maps("Nezu Shrine", "Nezu Shrine")],
      },
      {
        label: "Morning",
        icon: "walk",
        bullets: [
          "Visit Nezu Shrine early and make a shared wish.",
          "Continue to Kanda Myojin before lunch if the heat and timing allow.",
          "Visit Akihabara after Kanda Myojin, then continue to Higashi-Ginza.",
        ],
        links: [
          maps("Nezu Shrine", "Nezu Shrine"),
          maps("Kanda Myojin", "Kanda Myojin"),
        ],
      },
      {
        label: "Lunch",
        icon: "meal",
        tone: "meal",
        title: "KOMEDA is ☐ Higashi-Ginza",
        description: "Fully plant-based café lunch.",
        callout: "Arrive around 11:30 AM before the Mountain Day rush.",
        bullets: [
          "If KOMEDA is ☐ closes, eat at T’s Tantan Tokyo Station, then continue to Ginza.",
        ],
        links: [
          maps("KOMEDA is ☐", "KOMEDA is Higashi Ginza"),
          maps("T’s Tantan backup", "T's Tantan Tokyo Station"),
        ],
      },
      {
        label: "Afternoon",
        icon: "dessert",
        bullets: [
          "The Vegan Marshmallooow is on Ginza Mitsukoshi B2. Eat cream-filled items in the ninth-floor rest area.",
          "Ginza Tsuboyaki-imo serves roasted sweet potato.",
          "For a free sunset or night view, visit KITTE Garden beside Tokyo Station. It closes at 10:00 PM and may close in bad weather.",
        ],
        links: [
          maps("Marshmallooow", "The Vegan Marshmallooow Ginza"),
          maps("Tsuboyaki-imo", "Ginza Tsuboyaki Imo"),
          maps("KITTE Garden", "KITTE Garden Tokyo"),
        ],
      },
      {
        label: "Cool down",
        icon: "cool",
        description:
          "Yodobashi Akiba, Akihabara UDX, Ginza Mitsukoshi, Ginza Loft, or GINZA SIX.",
      },
      {
        label: "Dinner",
        icon: "meal",
        tone: "meal",
        title: "2foods Ginza Loft",
        description:
          "Casual, fully plant-based burgers, curry, omurice, doughnuts, and desserts.",
        callout: "Last order is 8:15 PM.",
        links: [maps("Open in Maps", "2foods Ginza Loft")],
      },
    ],
  },
  {
    id: "day-2026-08-12",
    day: 7,
    date: "Wednesday, August 12",
    shortDate: "Aug 12",
    subtitle: "Ueno meeting and okonomiyaki",
    area: "Ueno · Shinjuku",
    lunch: [
      maps("NEOShinjuku Atsushi", "NEOShinjuku Atsushi"),
      maps("T’s Tantan Ueno", "T's Tantan Ecute Ueno"),
    ],
    dinner: [maps("Zen", "Zen Okonomiyaki Shinjuku")],
    dessert: [maps("Shochikuen", "Shochikuen Cafe Asakusa")],
    timeline: [
      {
        label: "5:00 AM run",
        icon: "run",
        title: "Ueno Park + Shinobazu Pond",
        description: "About 3 km.",
      },
      {
        label: "Morning",
        icon: "walk",
        title: "Colleague meeting",
        description: "Meet around Ueno.",
      },
      {
        label: "Lunch",
        icon: "meal",
        tone: "meal",
        title: "NEOShinjuku Atsushi or T’s Tantan Ueno",
        callout: "Aim for NEO around 1:30 PM.",
        bullets: [
          "At NEO, choose tantanmen, burgers, gyoza, or vegan karaage.",
          "If the meeting runs long, eat at T’s Tantan in Ueno.",
        ],
        links: [
          maps("NEOShinjuku Atsushi", "NEOShinjuku Atsushi"),
          maps("T’s Tantan Ueno", "T's Tantan Ecute Ueno"),
        ],
      },
      {
        label: "Dessert",
        icon: "dessert",
        title: "Shochikuen Cafe",
        description: "Choose cake or tiramisu.",
        links: [maps("Open in Maps", "Shochikuen Cafe Asakusa")],
      },
      {
        label: "Afternoon",
        icon: "cool",
        description: "Return to the hotel after lunch and rest.",
      },
      {
        label: "Cool down",
        icon: "cool",
        description:
          "Ueno PARCO_ya, Matsuzakaya, the National Museum of Nature and Science, or Isetan Shinjuku before dinner.",
      },
      {
        label: "Dinner",
        icon: "meal",
        tone: "meal",
        title: "Zen",
        badge: "Reserve 6:30 PM",
        bullets: [
          "Take the Oedo Line from Ueno-okachimachi to Higashi-shinjuku, then walk to Zen.",
          "Order from the separate vegan okonomiyaki menu and confirm that both meals should be vegan.",
          "Walk through Golden Gai and Omoide Yokocho on the way back to see the lights.",
        ],
        links: [maps("Open in Maps", "Zen Okonomiyaki Shinjuku")],
      },
    ],
  },
  {
    id: "day-2026-08-13",
    day: 8,
    date: "Thursday, August 13",
    shortDate: "Aug 13",
    subtitle: "Ueno and departure",
    area: "Ueno · Narita",
    lunch: [],
    dinner: [maps("T’s Tantan Narita Terminal 2", "T's Tantan Narita Airport Terminal 2")],
    dessert: [],
    dessertText: "Repeat a favorite or buy airport snacks",
    timeline: [
      {
        label: "5:00 AM run",
        icon: "run",
        title: "Shinobazu Pond short loop",
        description: "About 3 km before checkout.",
      },
      {
        label: "Morning",
        icon: "luggage",
        title: "Checkout and luggage",
        callout: "Check out before 10:00 AM and leave your luggage at the hotel.",
      },
      {
        label: "Lunch",
        icon: "meal",
        tone: "meal",
        title: "Repeat a favorite",
        callout: "Collect your luggage and leave Ueno around 2:30 PM.",
      },
      {
        label: "Cool down",
        icon: "cool",
        description: "PARCO_ya, Matsuzakaya Ueno, or the airport terminal.",
      },
      {
        label: "Dinner",
        icon: "meal",
        tone: "meal",
        title: "T’s Tantan Narita Terminal 2",
        callout:
          "Eat around 4:00–4:30 PM on Terminal 2’s fourth floor before security.",
        links: [maps("Open in Maps", "T's Tantan Narita Airport Terminal 2")],
      },
      {
        label: "Departure",
        icon: "flight",
        bullets: [
          "Walk about six minutes to Jetstar’s Terminal 3, then complete check-in and security.",
          "Airport snacks: fruit, nuts, edamame, soy drinks, and clearly labeled vegan bread or sweets.",
          "Jetstar GK41 departs Narita at 7:40 PM and arrives in Manila at 11:40 PM.",
        ],
      },
    ],
  },
]

export const pastryStops = [
  {
    area: "Shimokitazawa",
    place: maps("Tokyo Vegan Bakes", "Tokyo Vegan Bakes Shimokitazawa"),
    note: "Pastries, donuts, and bread",
  },
  {
    area: "Setagaya-Daita",
    place: maps("Universal Bakes and Cafe", "Universal Bakes and Cafe"),
    note: "Wednesday–Sunday, 8:30 AM–6:00 PM",
  },
  {
    area: "Asakusa",
    place: maps("Hatoya Vegan Fruit Sandwiches", "Hatoya's Vegan Fruit Sandwiches Asakusa"),
    note: "May sell out; eat immediately",
  },
  {
    area: "Asakusa",
    place: maps("Asakusa GURAKU", "Asakusa GURAKU Taiyaki"),
    note: "Ready-made vegan red-bean, matcha, or chili-taco taiyaki",
  },
  {
    area: "Shinjuku Gyoen",
    place: maps("marbre vegan", "marbre vegan Shinjuku"),
    note: "Cakes and pastries; check for irregular closures",
  },
  {
    area: "Shinjuku",
    place: maps("MORETHAN BAKERY", "MORETHAN BAKERY Shinjuku"),
    note: "Choose products marked SUNDAY VEGAN",
  },
  {
    area: "Tomigaya",
    place: maps("THE NUTS EXCHANGE", "THE NUTS EXCHANGE Tomigaya"),
    note: "ECC muffin sandwich; closed Monday",
  },
  {
    area: "Harajuku / Omotesando",
    place: maps("I’m donut? Gluten-Free & Vegan", "I'm donut Gluten-Free Vegan 5-53-4 Jingumae"),
    note: "Only the グルテンフリー＆ヴィーガン branch at 5-53-4 Jingumae",
  },
  {
    area: "Ginza",
    place: maps("The Vegan Marshmallooow", "The Vegan Marshmallooow Ginza"),
    note: "Ginza Mitsukoshi B2",
  },
  {
    area: "Ginza",
    place: maps("Ginza Tsuboyaki-imo", "Ginza Tsuboyaki Imo"),
    note: "Hot or chilled roasted sweet potato",
  },
  {
    area: "Hiroo / Ebisu",
    place: maps("hal okada vegan patisserie", "hal okada vegan patisserie Hiroo"),
    note: "Closed Wednesday",
  },
]

export const reservations = [
  {
    title: "Marugoto Vegan Dining",
    meta: "Friday, August 7 · 11:30 AM lunch",
    links: [
      link("Official site", "https://dining.marugotovegan.com/"),
      link("TableCheck", "https://www.tablecheck.com/shops/marugoto-vegan-asakusa/reserve"),
    ],
  },
  {
    title: "Vegan Izakaya Nowhere",
    meta: "Monday, August 10 · 6:30 PM dinner",
    links: [link("Official site", "https://veganizakayanowhere.com/")],
  },
  {
    title: "Zen",
    meta: "Wednesday, August 12 · 6:30 PM dinner",
    links: [link("Official site", "https://zen-shinjuku.com/en")],
  },
]

export const morningRuns = [
  { day: "Day 1 · Thu Aug 6", route: "No run — arrival morning", distance: "—" },
  {
    day: "Day 2 · Fri Aug 7",
    route: "Shinobazu Pond + Ueno Park loop",
    distance: "About 4 km",
  },
  {
    day: "Day 3 · Sat Aug 8",
    route: "Kuramae → Sumida River Terrace → Asakusa → hotel",
    distance: "About 6 km",
  },
  {
    day: "Day 4 · Sun Aug 9",
    route: "Ueno Park → Yanaka Cemetery → hotel",
    distance: "About 6 km",
  },
  {
    day: "Day 5 · Mon Aug 10",
    route: "Akihabara → Kanda Myojin → Shinobazu Pond → hotel",
    distance: "About 5 km",
  },
  {
    day: "Day 6 · Tue Aug 11",
    route: "Shinobazu Pond → Nezu Shrine → hotel",
    distance: "About 5 km",
  },
  {
    day: "Day 7 · Wed Aug 12",
    route: "Ueno Park + Shinobazu Pond short loop",
    distance: "About 3 km",
  },
  {
    day: "Day 8 · Thu Aug 13",
    route: "Shinobazu Pond short loop before checkout",
    distance: "About 3 km",
  },
]

export const tripDetails = [
  { label: "Check-in", value: "Thursday, August 6 after 3:00 PM" },
  { label: "Check-out", value: "Thursday, August 13 before 10:00 AM" },
  { label: "Arrival", value: "Jetstar GK40 · Manila 12:40 AM → Narita 6:10 AM" },
  { label: "Departure", value: "Jetstar GK41 · Narita 7:40 PM → Manila 11:40 PM" },
  { label: "CEO dinner", value: "Sunday, August 9 evening" },
  { label: "Colleague meeting", value: "Wednesday, August 12 morning, likely around Ueno" },
]

export const referenceMaps = [
  link(
    "Tokyo 2026 Google My Maps",
    "https://www.google.com/maps/d/viewer?mid=1DZa9FPxP4NEecF3sXLAhtooC40B25X4&usp=sharing"
  ),
  link("Additional map reference", "https://maps.app.goo.gl/fSFT8q3fmAKtsWor6"),
]

export const tokyoMap = {
  embed:
    "https://www.google.com/maps/d/embed?mid=1DZa9FPxP4NEecF3sXLAhtooC40B25X4",
  viewer:
    "https://www.google.com/maps/d/viewer?mid=1DZa9FPxP4NEecF3sXLAhtooC40B25X4&usp=sharing",
}

export const itadakiHealthyMap = {
  label: "Itadakihealthy · Vegan in Japan",
  href: "https://maps.app.goo.gl/fSFT8q3fmAKtsWor6",
  description:
    "A shared Google Maps list with 2,280 vegan and vegan-friendly places across Japan.",
}
