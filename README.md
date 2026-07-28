# PB Travels

Private, mobile-first travel guides for Pepito and Bianca.

## Guide navigation

The guide index is organized as:

```text
/                 all years
/2026             destinations for 2026
/2026/japan       Japan city guides
/2026/tokyo       Tokyo itinerary
```

## Tokyo 2026

The Tokyo guide is available at:

```text
/2026/tokyo
```

It is built with Next.js 16, React 19, Tailwind CSS 4, and shadcn/ui.

## Local setup

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

Replace both placeholder values in `.env.local`, then start the app:

```bash
npm run dev
```

Open `http://localhost:3000/`. The browser will show its native Basic Auth prompt before displaying the guide index.

## Basic Auth on Vercel

The entire site is protected by `src/proxy.ts`. It reads two server-only variables:

- `BASIC_AUTH_USER`
- `BASIC_AUTH_PASSWORD`

In Vercel:

1. Import the GitHub repository as a new project.
2. Open **Project Settings → Environment Variables**.
3. Add both variables to **Production** and **Preview**.
4. Use a long, random password.
5. Redeploy after adding or changing either variable.

Do not prefix these variables with `NEXT_PUBLIC_`, and never commit `.env.local`.

If either variable is missing, the protected route returns `503` instead of accidentally becoming public.

## Checks

```bash
npm run lint
npm run build
```
