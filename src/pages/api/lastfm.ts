// import type { APIRoute } from "astro";

// export const prerender = false;

// const IMAGE_SIZE_PRIORITY = ["extralarge", "large", "medium", "small"];

// function getLargestAlbumArt(images: any[]) {
//   if (!Array.isArray(images) || images.length === 0) return undefined;
//   for (const size of IMAGE_SIZE_PRIORITY) {
//     const img = images.find((i) => i && i.size === size);
//     const url = img && img["#text"] ? img["#text"].trim() : "";
//     if (url) return url;
//   }
//   const fallback = images.find((i) => i && i["#text"] && i["#text"].trim());
//   return fallback ? fallback["#text"].trim() : undefined;
// }

// function jsonResponse(data: unknown, status = 200) {
//   return new Response(JSON.stringify(data), {
//     status,
//     headers: {
//       "Content-Type": "application/json",
//       "Cache-Control": "no-store",
//     },
//   });
// }

// export const GET: APIRoute = async () => {
//   const username = import.meta.env.LASTFM_USERNAME;
//   const apiKey = import.meta.env.LASTFM_API_KEY;

//   if (!username || !apiKey) {
//     return jsonResponse({ error: "Last.fm not configured" }, 500);
//   }

//   try {
//     const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`;
//     const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
//     const data = await res.json();

//     const recentTrack = data?.recenttracks?.track?.[0];
//     if (!recentTrack) {
//       return jsonResponse({ track: null });
//     }

//     const isPlaying = recentTrack["@attr"]?.nowplaying === "true";
//     const title = recentTrack.name || "Unknown Track";
//     const artist =
//       typeof recentTrack.artist === "string"
//         ? recentTrack.artist
//         : recentTrack.artist?.["#text"] || recentTrack.artist?.name || "Unknown Artist";
//     const trackUrl = recentTrack.url;
//     let albumArtUrl = getLargestAlbumArt(recentTrack.image);

//     if (!albumArtUrl) {
//       try {
//         const query = encodeURIComponent(`${artist} ${title}`);
//         const itunesRes = await fetch(
//           `https://itunes.apple.com/search?term=${query}&entity=song&limit=1`,
//           { signal: AbortSignal.timeout(5000) },
//         );
//         const itunesData = await itunesRes.json();
//         if (itunesData.results?.[0]?.artworkUrl100) {
//           albumArtUrl = itunesData.results[0].artworkUrl100.replace("100x100bb", "600x600bb");
//         }
//       } catch (e) {
//         console.error("iTunes album art fetch failed:", e);
//       }
//     }

//     return jsonResponse({
//       track: {
//         title,
//         artist,
//         isPlaying,
//         trackUrl,
//         albumArtUrl,
//       },
//     });
//   } catch (err) {
//     console.error("Last.fm API error:", err);
//     return jsonResponse({ error: "Failed to fetch track" }, 502);
//   }
// };



import type { APIRoute } from "astro";

export const prerender = false;

const IMAGE_SIZE_PRIORITY = [
  "extralarge",
  "large",
  "medium",
  "small",
];

const CACHE_TTL = 30_000;

let cachedTrack: any = null;
let cachedAt = 0;

function getLargestAlbumArt(images: any[]) {
  if (!Array.isArray(images) || images.length === 0) {
    return undefined;
  }

  for (const size of IMAGE_SIZE_PRIORITY) {
    const img = images.find(
      (item) =>
        item &&
        item.size === size &&
        typeof item["#text"] === "string" &&
        item["#text"].trim(),
    );

    if (img) {
      return img["#text"].trim();
    }
  }

  const fallback = images.find(
    (item) =>
      item &&
      typeof item["#text"] === "string" &&
      item["#text"].trim(),
  );

  return fallback ? fallback["#text"].trim() : undefined;
}

function cleanImageUrl(url?: string) {
  if (!url) return undefined;

  const value = url.trim();

  if (!value) return undefined;

  // Last.fm sometimes returns protocol-relative URLs
  if (value.startsWith("//")) {
    return `https:${value}`;
  }

  if (!value.startsWith("http://") && !value.startsWith("https://")) {
    return undefined;
  }

  return value;
}

function jsonResponse(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      // Small cache to avoid hitting Last.fm on every request.
      "Cache-Control":
        "public, max-age=15, s-maxage=30, stale-while-revalidate=60",
    },
  });
}

async function getItunesAlbumArt(artist: string, title: string) {
  try {
    const query = encodeURIComponent(`${artist} ${title}`);

    const url =
      `https://itunes.apple.com/search?` +
      `term=${query}&entity=song&limit=1`;

    const response = await fetch(url, {
      signal: AbortSignal.timeout(4000),
    });

    if (!response.ok) {
      return undefined;
    }

    const data = await response.json();

    const artwork = data?.results?.[0]?.artworkUrl100;

    if (!artwork) {
      return undefined;
    }

    return artwork
      .replace("100x100bb", "600x600bb")
      .replace("100x100-75", "600x600-75");
  } catch (error) {
    console.error("iTunes album art fetch failed:", error);
    return undefined;
  }
}

export const GET: APIRoute = async () => {
  const username = import.meta.env.LASTFM_USERNAME;
  const apiKey = import.meta.env.LASTFM_API_KEY;

  if (!username || !apiKey) {
    return jsonResponse(
      { error: "Last.fm not configured" },
      500,
    );
  }

  // Return cached track quickly.
  if (
    cachedTrack &&
    Date.now() - cachedAt < CACHE_TTL
  ) {
    return jsonResponse({
      track: cachedTrack,
    });
  }

  try {
    const params = new URLSearchParams({
      method: "user.getrecenttracks",
      user: username,
      api_key: apiKey,
      format: "json",
      limit: "1",
    });

    const url = `https://ws.audioscrobbler.com/2.0/?${params.toString()}`;

    const res = await fetch(url, {
      signal: AbortSignal.timeout(6000),
    });

    if (!res.ok) {
      throw new Error(`Last.fm returned ${res.status}`);
    }

    const data = await res.json();

    const recentTrack = data?.recenttracks?.track?.[0];

    if (!recentTrack) {
      return jsonResponse({ track: null });
    }

    const isPlaying =
      recentTrack["@attr"]?.nowplaying === "true";

    const title =
      recentTrack.name || "Unknown Track";

    const artist =
      typeof recentTrack.artist === "string"
        ? recentTrack.artist
        : recentTrack.artist?.["#text"] ||
          recentTrack.artist?.name ||
          "Unknown Artist";

    const trackUrl = recentTrack.url;

    // 1. Try Last.fm artwork first
    let albumArtUrl = cleanImageUrl(
      getLargestAlbumArt(recentTrack.image),
    );

    // 2. If Last.fm doesn't provide artwork, use iTunes
    if (!albumArtUrl) {
      albumArtUrl = await getItunesAlbumArt(
        artist,
        title,
      );
    }

    const track = {
      title,
      artist,
      isPlaying,
      trackUrl,
      albumArtUrl,
    };

    // Cache successful result.
    cachedTrack = track;
    cachedAt = Date.now();

    return jsonResponse({
      track,
    });
  } catch (err) {
    console.error("Last.fm API error:", err);

    // If Last.fm temporarily fails, return previous
    // successful track instead of breaking the UI.
    if (cachedTrack) {
      return jsonResponse({
        track: cachedTrack,
      });
    }

    return jsonResponse(
      { error: "Failed to fetch track" },
      502,
    );
  }
};