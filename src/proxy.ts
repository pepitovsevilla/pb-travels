import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const encoder = new TextEncoder()

function safeEqual(actual: string, expected: string) {
  const actualBytes = encoder.encode(actual)
  const expectedBytes = encoder.encode(expected)
  const length = Math.max(actualBytes.length, expectedBytes.length)
  let mismatch = actualBytes.length ^ expectedBytes.length

  for (let index = 0; index < length; index += 1) {
    mismatch |= (actualBytes[index] ?? 0) ^ (expectedBytes[index] ?? 0)
  }

  return mismatch === 0
}

function readCredentials(header: string | null) {
  if (!header?.startsWith("Basic ")) return null

  try {
    const decoded = atob(header.slice(6))
    const separator = decoded.indexOf(":")

    if (separator < 0) return null

    return {
      username: decoded.slice(0, separator),
      password: decoded.slice(separator + 1),
    }
  } catch {
    return null
  }
}

export function proxy(request: NextRequest) {
  const expectedUsername = process.env.BASIC_AUTH_USER
  const expectedPassword = process.env.BASIC_AUTH_PASSWORD

  if (!expectedUsername || !expectedPassword) {
    return new Response("Basic Auth is not configured.", {
      status: 503,
      headers: {
        "Cache-Control": "no-store",
        "Content-Type": "text/plain; charset=utf-8",
      },
    })
  }

  const credentials = readCredentials(request.headers.get("authorization"))
  const authenticated =
    credentials !== null &&
    safeEqual(credentials.username, expectedUsername) &&
    safeEqual(credentials.password, expectedPassword)

  if (!authenticated) {
    return new Response("Authentication required.", {
      status: 401,
      headers: {
        "Cache-Control": "no-store",
        "Content-Type": "text/plain; charset=utf-8",
        "WWW-Authenticate": 'Basic realm="PB Travels", charset="UTF-8"',
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/2026/tokyo/:path*"],
}
