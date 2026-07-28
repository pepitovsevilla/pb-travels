import type { Metadata } from "next"

import { TokyoGuide } from "@/components/tokyo/tokyo-guide"

export const metadata: Metadata = {
  title: "Tokyo · August 6–13, 2026",
  description: "Pepito and Bianca’s food-first Tokyo itinerary.",
}

export default function TokyoPage() {
  return <TokyoGuide />
}
