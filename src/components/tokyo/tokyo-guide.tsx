"use client"

import Link from "next/link"
import { useState, type ComponentType } from "react"
import {
  Activity,
  ArrowLeft,
  BriefcaseBusiness,
  CalendarDays,
  CakeSlice,
  ExternalLink,
  Footprints,
  Luggage,
  Map as MapIcon,
  MapPin,
  MoonStar,
  Plane,
  Snowflake,
  Sparkles,
  Utensils,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import {
  hotel,
  itadakiHealthyMap,
  morningRuns,
  pastryStops,
  referenceMaps,
  reservations,
  tokyoDays,
  tripDetails,
  tokyoMap,
  type PlaceLink,
  type TimelineItem,
} from "@/data/tokyo"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

const timelineIcons: Record<
  TimelineItem["icon"],
  ComponentType<{ className?: string }>
> = {
  run: Activity,
  luggage: Luggage,
  meal: Utensils,
  walk: Footprints,
  dessert: CakeSlice,
  work: BriefcaseBusiness,
  cool: Snowflake,
  evening: MoonStar,
  flight: Plane,
}

function PlaceLinks({
  links,
  compact = false,
}: {
  links: PlaceLink[]
  compact?: boolean
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((item) => {
        const PrimaryIcon = item.kind === "map" ? MapPin : ExternalLink
        const instagramName =
          item.label === "Open in Maps" ? "this food spot" : item.label

        return (
          <div
            key={`${item.label}-${item.href}`}
            className="flex flex-wrap gap-2"
          >
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex min-h-11 items-center gap-1.5 rounded-lg border border-primary/15 bg-primary/5 px-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                compact && "px-2.5 text-xs"
              )}
            >
              <PrimaryIcon className="size-3.5 shrink-0" />
              {item.label}
              <ExternalLink className="size-3 opacity-55" />
            </a>
            {item.instagram ? (
              <a
                href={item.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${instagramName} on Instagram`}
                className={cn(
                  "inline-flex min-h-11 items-center gap-1.5 rounded-lg border border-pink-200 bg-pink-50 px-3 text-sm font-semibold text-pink-700 transition-colors hover:bg-pink-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  compact && "px-2.5 text-xs"
                )}
              >
                <InstagramIcon className="size-3.5 shrink-0" />
                Instagram
                <ExternalLink className="size-3 opacity-55" />
              </a>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

function FoodValue({
  links,
  fallback,
}: {
  links: PlaceLink[]
  fallback?: string
}) {
  if (!links.length) {
    return <span className="text-sm text-muted-foreground">{fallback ?? "—"}</span>
  }

  return (
    <div className="grid gap-2">
      {links.map((item) => (
        <div
          key={item.href}
          className="rounded-lg border bg-background/80 px-3 py-2.5"
        >
          <p className="font-semibold text-foreground">{item.label}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-md border border-primary/15 bg-primary/5 px-3 text-xs font-semibold text-primary"
            >
              <MapPin className="size-3.5" />
              Maps
            </a>
            {item.instagram ? (
              <a
                href={item.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1.5 rounded-md border border-pink-200 bg-pink-50 px-3 text-xs font-semibold text-pink-700"
              >
                <InstagramIcon className="size-3.5" />
                Instagram
              </a>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  )
}

function ReferenceAccordion() {
  return (
    <Accordion
      multiple
      className="overflow-hidden rounded-2xl border bg-card shadow-sm"
    >
      <AccordionItem value="food" className="px-4">
        <AccordionTrigger className="min-h-14 py-3 text-base hover:no-underline">
          <span className="flex items-center gap-2">
            <Utensils className="size-4 text-primary" />
            Food spots
          </span>
        </AccordionTrigger>
        <AccordionContent className="pb-4">
          <div className="space-y-3">
            {tokyoDays.map((day) => (
              <div
                key={day.id}
                className="rounded-xl border bg-background/65 p-3.5"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold">
                      <span className="text-primary">Day {day.day}</span>
                      <span className="text-border"> · </span>
                      {day.date}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{day.area}</p>
                  </div>
                  {day.day === 6 ? (
                    <Badge variant="secondary">Mountain Day</Badge>
                  ) : null}
                </div>
                <dl className="grid gap-3">
                  <div className="grid gap-1 sm:grid-cols-[4.5rem_1fr] sm:gap-3">
                    <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Lunch
                    </dt>
                    <dd>
                      <FoodValue
                        links={day.lunch}
                        fallback={
                          day.day === 8
                            ? "Repeat a favorite — choose during the trip"
                            : undefined
                        }
                      />
                    </dd>
                  </div>
                  <div className="grid gap-1 sm:grid-cols-[4.5rem_1fr] sm:gap-3">
                    <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Dinner
                    </dt>
                    <dd>
                      <FoodValue
                        links={day.dinner}
                        fallback={day.day === 4 ? "CEO dinner" : undefined}
                      />
                    </dd>
                  </div>
                  <div className="grid gap-1 sm:grid-cols-[4.5rem_1fr] sm:gap-3">
                    <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Dessert
                    </dt>
                    <dd>
                      <FoodValue
                        links={day.dessert}
                        fallback={day.dessertText}
                      />
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="reservations" className="px-4">
        <AccordionTrigger className="min-h-14 py-3 text-base hover:no-underline">
          <span className="flex items-center gap-2">
            <CalendarDays className="size-4 text-primary" />
            Reservations
          </span>
        </AccordionTrigger>
        <AccordionContent className="pb-4">
          <div className="divide-y">
            {reservations.map((reservation) => (
              <div key={reservation.title} className="py-3 first:pt-0">
                <p className="font-semibold">{reservation.title}</p>
                <p className="mb-2 text-sm text-muted-foreground">
                  {reservation.meta}
                </p>
                <PlaceLinks links={reservation.links} compact />
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            No reservation is needed for Masaka, T’s Tantan, or Tokyo Vegan Bakes.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="pastries" className="px-4">
        <AccordionTrigger className="min-h-14 py-3 text-base hover:no-underline">
          <span className="flex items-center gap-2">
            <CakeSlice className="size-4 text-primary" />
            Pastry pass-bys
          </span>
        </AccordionTrigger>
        <AccordionContent className="pb-4">
          <div className="divide-y">
            {pastryStops.map((stop) => (
              <div key={stop.place.href} className="grid gap-2 py-3 first:pt-0">
                <div>
                  <p className="font-semibold">{stop.place.label}</p>
                  <p className="text-xs text-muted-foreground">{stop.area}</p>
                </div>
                <p className="text-sm text-muted-foreground">{stop.note}</p>
                <PlaceLinks links={[stop.place]} compact />
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="runs" className="px-4">
        <AccordionTrigger className="min-h-14 py-3 text-base hover:no-underline">
          <span className="flex items-center gap-2">
            <Activity className="size-4 text-primary" />
            Runs
          </span>
        </AccordionTrigger>
        <AccordionContent className="pb-4">
          <div className="divide-y">
            {morningRuns.map((run) => (
              <div key={run.day} className="py-3 first:pt-0">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-semibold">{run.day}</p>
                  <Badge variant="outline">{run.distance}</Badge>
                </div>
                <p className="mt-1 text-xs font-medium text-primary">{run.time}</p>
                <p className="mt-1 text-sm text-muted-foreground">{run.route}</p>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="details" className="px-4">
        <AccordionTrigger className="min-h-14 py-3 text-base hover:no-underline">
          <span className="flex items-center gap-2">
            <Plane className="size-4 text-primary" />
            Trip details
          </span>
        </AccordionTrigger>
        <AccordionContent className="pb-4">
          <dl className="divide-y">
            {tripDetails.map((item) => (
              <div key={item.label} className="grid gap-1 py-3 first:pt-0 sm:grid-cols-[8rem_1fr]">
                <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </dt>
                <dd className="text-sm">{item.value}</dd>
              </div>
            ))}
          </dl>
          <Separator className="my-3" />
          <PlaceLinks links={[hotel, ...referenceMaps]} compact />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

function MapAccordion() {
  return (
    <Accordion
      multiple
      className="mb-4 overflow-hidden rounded-2xl border bg-card shadow-sm"
    >
      <AccordionItem value="map" className="px-4">
        <AccordionTrigger className="min-h-14 py-3 text-base hover:no-underline">
          <span className="flex items-center gap-2">
            <MapIcon className="size-4 text-primary" />
            Our Tokyo map
          </span>
        </AccordionTrigger>
        <AccordionContent className="pb-4">
          <p className="mb-3 text-sm text-muted-foreground">
            Your saved food, hotel, and sightseeing pins in Google My Maps.
          </p>
          <div className="overflow-hidden rounded-xl border bg-muted">
            <iframe
              title="Tokyo 2026 Google My Maps"
              src={tokyoMap.embed}
              loading="lazy"
              allowFullScreen
              className="h-[22rem] w-full border-0"
            />
          </div>
          <a
            href={tokyoMap.viewer}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary underline decoration-primary/25 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Open map in Google Maps
            <ExternalLink className="size-3.5 opacity-60" />
          </a>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="itadakihealthy" className="px-4">
        <AccordionTrigger className="min-h-14 py-3 text-base hover:no-underline">
          <span className="flex items-center gap-2">
            <MapIcon className="size-4 text-primary" />
            Itadakihealthy map
          </span>
        </AccordionTrigger>
        <AccordionContent className="pb-4">
          <p className="text-sm text-muted-foreground">
            {itadakiHealthyMap.description}
          </p>
          <a
            href={itadakiHealthyMap.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-lg border border-primary/15 bg-primary/5 px-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Open Itadakihealthy map
            <ExternalLink className="size-3.5 opacity-60" />
          </a>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

function TimelineEntry({ item, last }: { item: TimelineItem; last: boolean }) {
  const Icon = timelineIcons[item.icon]

  return (
    <div className="relative grid grid-cols-[2.75rem_minmax(0,1fr)] gap-3">
      {!last ? (
        <span
          aria-hidden="true"
          className="absolute bottom-[-1.5rem] left-[1.34rem] top-10 w-px bg-border"
        />
      ) : null}
      <div
        className={cn(
          "relative z-10 grid size-11 place-items-center rounded-full border bg-card text-muted-foreground shadow-sm",
          item.tone === "meal" && "border-primary/30 bg-primary/10 text-primary",
          item.tone === "work" &&
            "border-amber-300 bg-amber-50 text-amber-800"
        )}
      >
        <Icon className="size-4.5" />
      </div>
      <div className="min-w-0 pb-6">
        <div className="mb-2 flex min-h-11 flex-wrap items-center gap-2">
          <p
            className={cn(
              "text-xs font-extrabold uppercase tracking-[0.1em] text-muted-foreground",
              item.tone === "meal" && "text-primary",
              item.tone === "work" && "text-amber-800"
            )}
          >
            {item.label}
          </p>
          {item.badge ? <Badge>{item.badge}</Badge> : null}
        </div>
        <Card
          className={cn(
            "gap-3 py-4",
            item.tone === "meal" && "border-l-4 border-l-primary"
          )}
        >
          {item.title ? (
            <CardHeader className="px-4">
              <CardTitle className="text-[1.05rem] font-bold">
                {item.title}
              </CardTitle>
              {item.description ? (
                <CardDescription className="leading-relaxed">
                  {item.description}
                </CardDescription>
              ) : null}
            </CardHeader>
          ) : null}
          <CardContent className="space-y-3 px-4">
            {!item.title && item.description ? (
              <p className="leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            ) : null}
            {item.bullets?.length ? (
              <ul className="space-y-2 text-sm leading-relaxed">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-[0.62em] size-1.5 shrink-0 rounded-full bg-primary/55" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {item.links?.length ? <PlaceLinks links={item.links} /> : null}
            {item.callout ? (
              <Alert className="border-amber-200 bg-amber-50 text-amber-950">
                <Sparkles className="size-4" />
                <AlertDescription className="text-amber-900">
                  {item.callout}
                </AlertDescription>
              </Alert>
            ) : null}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function DaySection({ day }: { day: (typeof tokyoDays)[number] }) {
  return (
    <section id={day.id} className="scroll-mt-6 border-t py-8 first:border-0">
      <header className="mb-6 px-1">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="rounded-md">Day {day.day}</Badge>
          {day.day === 6 ? (
            <Badge variant="secondary">Mountain Day</Badge>
          ) : null}
        </div>
        <h2 className="mt-3 text-2xl font-bold tracking-tight">{day.date}</h2>
        <p className="mt-1 text-muted-foreground">{day.subtitle}</p>
      </header>
      <div>
        {day.timeline.map((item, index) => (
          <TimelineEntry
            key={`${day.id}-${item.label}-${index}`}
            item={item}
            last={index === day.timeline.length - 1}
          />
        ))}
      </div>
    </section>
  )
}

function DateNavigator() {
  const [open, setOpen] = useState(false)

  function navigateTo(id: string) {
    setOpen(false)
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      window.history.replaceState(null, "", `#${id}`)
    })
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <Button
        type="button"
        size="icon"
        aria-label="Open trip calendar"
        onClick={() => setOpen(true)}
        className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] left-[max(1rem,env(safe-area-inset-left))] z-40 size-14 rounded-full shadow-[0_8px_28px_rgba(13,109,100,.32)]"
      >
        <CalendarDays className="size-5" />
      </Button>
      <SheetContent
        side="bottom"
        className="max-h-[85svh] overflow-y-auto rounded-t-3xl px-0 pb-[calc(1rem+env(safe-area-inset-bottom))]"
      >
        <div className="mx-auto w-full max-w-2xl">
          <SheetHeader className="px-5 pb-2">
            <SheetTitle className="text-xl">Tokyo dates</SheetTitle>
            <SheetDescription>August 6–13, 2026</SheetDescription>
          </SheetHeader>
          <div className="px-5 pb-2">
            <div className="mb-3 grid grid-cols-2 gap-2">
              <Button
                type="button"
                variant="outline"
                className="h-11"
                onClick={() => navigateTo("top")}
              >
                Top
              </Button>
              <Button
                type="button"
                variant="outline"
                className="h-11"
                onClick={() => navigateTo("overview")}
              >
                Overview
              </Button>
            </div>
            <div className="grid grid-cols-7 gap-1.5 text-center">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <span
                  key={day}
                  className="py-1 text-[0.65rem] font-bold uppercase tracking-wider text-muted-foreground"
                >
                  {day}
                </span>
              ))}
              {[3, 4, 5].map((date) => (
                <span
                  key={date}
                  className="grid aspect-square min-h-11 place-items-center rounded-lg text-sm text-muted-foreground/40"
                >
                  {date}
                </span>
              ))}
              {tokyoDays.slice(0, 4).map((day) => (
                <button
                  key={day.id}
                  type="button"
                  className="grid aspect-square min-h-11 place-items-center rounded-lg border bg-background text-base font-semibold transition-colors hover:bg-muted focus:outline-none"
                  onClick={(event) => {
                    event.currentTarget.blur()
                    navigateTo(day.id)
                  }}
                  aria-label={`Go to ${day.date}`}
                >
                  {day.day + 5}
                </button>
              ))}
              {tokyoDays.slice(4).map((day) => (
                <button
                  key={day.id}
                  type="button"
                  className="grid aspect-square min-h-11 place-items-center rounded-lg border bg-background text-base font-semibold transition-colors hover:bg-muted focus:outline-none"
                  onClick={(event) => {
                    event.currentTarget.blur()
                    navigateTo(day.id)
                  }}
                  aria-label={`Go to ${day.date}`}
                >
                  {day.day + 5}
                </button>
              ))}
              {[14, 15, 16].map((date) => (
                <span
                  key={date}
                  className="grid aspect-square min-h-11 place-items-center rounded-lg text-sm text-muted-foreground/40"
                >
                  {date}
                </span>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export function TokyoGuide() {
  return (
    <main id="top" className="min-h-svh bg-muted/45 pb-28">
      <header className="border-b bg-card">
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6">
          <Link
            href="/"
            className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ArrowLeft className="size-4" />
            All guides
          </Link>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Pepito + Bianca
          </p>
          <h1 className="mt-1 text-4xl font-black tracking-[-0.04em]">Tokyo</h1>
          <p className="mt-1 text-muted-foreground">August 6–13, 2026</p>
          <a
            href={hotel.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary underline decoration-primary/25 underline-offset-4"
          >
            <MapPin className="size-4" />
            {hotel.label}
            <ExternalLink className="size-3.5 opacity-60" />
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <section id="overview" className="scroll-mt-6 py-8">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Food leads each day, with indoor breaks for the August heat.
            </p>
          </div>
          <ReferenceAccordion />
          <div className="mt-4">
            <MapAccordion />
          </div>
        </section>

        <section
          id="itinerary"
          className="scroll-mt-6 border-t pb-2 pt-8"
        >
          <h2 className="text-2xl font-bold tracking-tight">Daily itinerary</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Tap the calendar at any time to jump between days.
          </p>
        </section>

        {tokyoDays.map((day) => (
          <DaySection key={day.id} day={day} />
        ))}
      </div>

      <DateNavigator />
    </main>
  )
}
