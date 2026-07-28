import Link from "next/link"
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function JapanPage() {
  return (
    <main className="min-h-svh bg-muted/45">
      <div className="mx-auto flex min-h-svh w-full max-w-2xl flex-col px-4 py-8 sm:px-6 sm:py-12">
        <Link
          href="/2026"
          className="mb-8 inline-flex min-h-11 w-fit items-center gap-2 text-sm font-semibold text-primary underline decoration-primary/25 underline-offset-4 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <ArrowLeft className="size-4" />
          2026 destinations
        </Link>

        <header className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            2026 · Destination
          </p>
          <h1 className="mt-2 text-4xl font-black tracking-[-0.04em]">Japan</h1>
          <p className="mt-2 text-muted-foreground">Choose a city guide.</p>
        </header>

        <nav aria-label="Japan city guides">
          <Link href="/2026/tokyo" className="group block rounded-xl focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
            <Card className="transition-colors group-hover:border-primary/40 group-hover:bg-primary/[0.03]">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <MapPin className="size-5 text-primary" />
                  Tokyo
                </CardTitle>
                <CardDescription>August 6–13, 2026 · Food-first itinerary</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between pt-0 text-sm font-semibold text-primary">
                <span>Open guide</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </CardContent>
            </Card>
          </Link>
        </nav>
      </div>
    </main>
  )
}
