import Link from "next/link"
import { ArrowRight, CalendarDays, MapPin } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function HomePage() {
  return (
    <main className="min-h-svh bg-muted/45">
      <div className="mx-auto flex min-h-svh w-full max-w-2xl flex-col px-4 py-8 sm:px-6 sm:py-12">
        <header className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Pepito + Bianca
          </p>
          <h1 className="mt-2 text-4xl font-black tracking-[-0.04em]">
            Travel guides
          </h1>
          <p className="mt-2 max-w-md text-muted-foreground">
            Private trip plans, organized by year and destination.
          </p>
        </header>

        <nav aria-label="Travel guides" className="grid gap-4">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <CalendarDays className="size-5 text-primary" />
                2026
              </CardTitle>
              <CardDescription>Japan travel guides</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Link href="/2026/tokyo" className="group block rounded-lg border bg-muted/35 p-3.5 transition-colors hover:border-primary/40 hover:bg-primary/[0.03] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="flex items-center gap-2 font-semibold">
                      <MapPin className="size-4 text-primary" />
                      Tokyo
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      August 6–13, 2026 · Food-first itinerary
                    </p>
                  </div>
                  <ArrowRight className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </CardContent>
          </Card>
        </nav>
      </div>
    </main>
  )
}
