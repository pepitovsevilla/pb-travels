import Link from "next/link"
import { ArrowRight, CalendarDays } from "lucide-react"

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

        <nav aria-label="Travel guide years" className="grid gap-4">
          <Link href="/2026" className="group block rounded-xl focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
            <Card className="transition-colors group-hover:border-primary/40 group-hover:bg-primary/[0.03]">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <CalendarDays className="size-5 text-primary" />
                  2026
                </CardTitle>
                <CardDescription>Japan travel guides</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between pt-0 text-sm font-semibold text-primary">
                <span>Open year</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </CardContent>
            </Card>
          </Link>
        </nav>
      </div>
    </main>
  )
}
