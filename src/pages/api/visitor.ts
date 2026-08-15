import type { APIRoute } from "astro";
import { Redis } from "@upstash/redis";

export const prerender = false;

const redis = new Redis({
  url: import.meta.env.UPSTASH_REDIS_REST_URL,
  token: import.meta.env.UPSTASH_REDIS_REST_TOKEN,
});

const REDIS_KEY = "last_visitor";
const COOKIE_NAME = "visitor_cooldown";
const COOLDOWN_SECONDS = 30 * 60;

interface LastVisitor {
  city: string;
  country: string;
  countryCode: string;
  visitedAt: string;
}

function getIP(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "127.0.0.1";
}

function hasCooldownCookie(request: Request): boolean {
  const cookieHeader = request.headers.get("cookie") || "";
  return cookieHeader.includes(`${COOKIE_NAME}=`);
}

function cooldownCookieHeader(): string {
  return `${COOKIE_NAME}=1; Path=/; Max-Age=${COOLDOWN_SECONDS}; SameSite=Lax; Secure`;
}

async function geolocate(
  ip: string,
): Promise<{ city: string; country: string; countryCode: string } | null> {
  try {
    const base =
      import.meta.env.IP_GEOLOCATION_API_URL ||
      "http://ip-api.com/json";
    const apiKey = import.meta.env.IP_GEOLOCATION_API_KEY;

    const url = `${base}/${ip}?fields=city,country,countryCode`;
    const headers: Record<string, string> = {};
    if (apiKey) headers["Authorization"] = `Bearer ${apiKey}`;

    const res = await fetch(url, { headers, signal: AbortSignal.timeout(5000) });
    if (!res.ok) return null;

    const data = await res.json();
    if (data.status === "fail" || !data.city) return null;

    return {
      city: data.city || "Unknown",
      country: data.country || "Unknown",
      countryCode: (data.countryCode || "XX").toUpperCase(),
    };
  } catch {
    return null;
  }
}

async function recordVisitor(request: Request): Promise<LastVisitor | null> {
  const ip = getIP(request);
  const geo = await geolocate(ip);
  if (!geo) return null;

  const visitor: LastVisitor = {
    city: geo.city,
    country: geo.country,
    countryCode: geo.countryCode,
    visitedAt: new Date().toISOString(),
  };

  await redis.set(REDIS_KEY, visitor);
  return visitor;
}

async function getLastVisitor(): Promise<LastVisitor | null> {
  return redis.get<LastVisitor>(REDIS_KEY);
}

function jsonResponse(data: unknown, status = 200, extraHeaders?: Record<string, string>) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      ...extraHeaders,
    },
  });
}

export const GET: APIRoute = async ({ request }) => {
  try {
    let visitor = await getLastVisitor();

    if (!hasCooldownCookie(request)) {
      const recorded = await recordVisitor(request);
      if (recorded) visitor = recorded;
      return jsonResponse({ visitor }, 200, {
        "Set-Cookie": cooldownCookieHeader(),
      });
    }

    return jsonResponse({ visitor });
  } catch (err) {
    console.error("Visitor API error:", err);
    return jsonResponse({ visitor: null }, 200);
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    if (hasCooldownCookie(request)) {
      const visitor = await getLastVisitor();
      return jsonResponse({ visitor });
    }

    const visitor = await recordVisitor(request);
    return jsonResponse({ visitor }, 200, {
      "Set-Cookie": cooldownCookieHeader(),
    });
  } catch (err) {
    console.error("Visitor API error:", err);
    return jsonResponse({ visitor: null }, 200);
  }
};
