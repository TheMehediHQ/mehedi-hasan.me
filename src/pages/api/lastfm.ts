import type { APIRoute } from "astro";

export const prerender = false;

const IMAGE_SIZE_PRIORITY = ["extralarge", "large", "medium", "small"];

function getLargestAlbumArt(images: any[]) {
  if (!Array.isArray(images) || images.length === 0) return undefined;
  for (const size of IMAGE_SIZE_PRIORITY) {
    const img = images.find((i) => i && i.size === size);
    const url = img && img["#text"] ? img["#text"].trim() : "";
    if (url) return url;
  }
  const fallback = images.find((i) => i && i["#text"] && i["#text"].trim());
  return fallback ? fallback["#text"].trim() : undefined;
}

function jsonResponse(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}

export const GET: APIRoute = async () => {
  const username = import.meta.env.LASTFM_USERNAME;
  const apiKey = import.meta.env.LASTFM_API_KEY;

  if (!username || !apiKey) {
    return jsonResponse({ error: "Last.fm not configured" }, 500);
  }

  try {
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`;
    const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
    const data = await res.json();

    const recentTrack = data?.recenttracks?.track?.[0];
    if (!recentTrack) {
      return jsonResponse({ track: null });
    }

    const isPlaying = recentTrack["@attr"]?.nowplaying === "true";
    const title = recentTrack.name || "Unknown Track";
    const artist =
      typeof recentTrack.artist === "string"
        ? recentTrack.artist
        : recentTrack.artist?.["#text"] || recentTrack.artist?.name || "Unknown Artist";
    const trackUrl = recentTrack.url;
    let albumArtUrl = getLargestAlbumArt(recentTrack.image);

    if (!albumArtUrl) {
      try {
        const query = encodeURIComponent(`${artist} ${title}`);
        const itunesRes = await fetch(
          `https://itunes.apple.com/search?term=${query}&entity=song&limit=1`,
          { signal: AbortSignal.timeout(5000) },
        );
        const itunesData = await itunesRes.json();
        if (itunesData.results?.[0]?.artworkUrl100) {
          albumArtUrl = itunesData.results[0].artworkUrl100.replace("100x100bb", "600x600bb");
        }
      } catch (e) {
        console.error("iTunes album art fetch failed:", e);
      }
    }

    return jsonResponse({
      track: {
        title,
        artist,
        isPlaying,
        trackUrl,
        albumArtUrl,
      },
    });
  } catch (err) {
    console.error("Last.fm API error:", err);
    return jsonResponse({ error: "Failed to fetch track" }, 502);
  }
};
