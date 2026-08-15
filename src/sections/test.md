---
import { Icon } from "astro-icon/components";
import SectionTitle from "@/components/ui/SectionTitle.astro";

const LASTFM_USERNAME = "themehedihq";
const LASTFM_API_KEY = "3d105f75746c8a720a34f4a6df3e0088";
const fallbackUrl = `https://www.last.fm/user/${LASTFM_USERNAME}`;
---

<section class="px-4 sm:px-8 lg:px-16 py-8 sm:py-12">
  <div class="max-w-4xl mx-auto">
    <SectionTitle title="Live Signals" subtitle="" />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

      <!-- 1. DHAKA TIME CARD -->
      <div class="relative h-[220px] rounded-2xl p-6 bg-gradient-to-b from-[#1E1E1E] to-[#141414] border border-(--color-border) shadow-xl flex flex-col justify-between overflow-hidden group">
        <div class="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/20 transition-all duration-500"></div>

        <div class="flex items-center justify-between relative z-10">
          <span class="text-[11px] font-bold uppercase tracking-widest text-neutral-400/90 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            Local Time
          </span>
          <Icon name="lucide:globe" class="w-5 h-5 text-neutral-400 group-hover:text-blue-400 transition-colors duration-300" />
        </div>

        <div class="my-auto relative z-10">
          <div class="flex items-baseline gap-2">
            <span id="dhaka-time" class="text-4xl font-extrabold text-white tracking-tight font-mono drop-shadow-md">
              --:--:--
            </span>
            <span id="dhaka-ampm" class="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-md backdrop-blur-sm hidden">
            </span>
          </div>
          <p class="text-xs font-medium text-neutral-400 mt-2 flex items-center gap-1.5">
            <span>Dhaka, Bangladesh</span>
            <span class="text-neutral-600">•</span>
            <span class="text-neutral-500 font-mono">GMT+6</span>
          </p>
        </div>

        <div class="pt-3 border-t border-(--color-border) text-xs text-neutral-400 flex justify-between items-center relative z-10">
          <span class="font-medium text-neutral-500">Status</span>
          <div class="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span class="text-emerald-400 font-medium text-[11px] tracking-wide">Active</span>
          </div>
        </div>
      </div>

      <!-- 2. MAP / LOCATION CARD -->
      <div class="relative h-[220px] rounded-2xl overflow-hidden border border-(--color-border) shadow-lg bg-neutral-900">
        <div class="absolute inset-0 bg-cover bg-center opacity-90" style="background-image: url('/profile/dhaka.png');"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="relative flex items-center justify-center">
            <span class="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-blue-500 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-5 w-5 bg-blue-500 border-2 border-white shadow-md"></span>
          </div>
        </div>
        <a
          href="https://en.wikipedia.org/wiki/Dhaka"
          target="_blank"
          rel="noopener noreferrer"
          class="absolute bottom-3 right-3 bg-black/70 hover:bg-black/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-(--color-border) text-xs font-medium text-gray-200 transition-all duration-200 hover:scale-105"
        >
          Dhaka, BD
        </a>
      </div>

      <!-- 3. LAST.FM MUSIC CARD -->
      <a
        id="music-card"
        href={fallbackUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="relative h-[220px] rounded-2xl p-5 bg-[#181818] border border-(--color-border) shadow-lg flex flex-col justify-between overflow-hidden group transition-all duration-300 no-underline select-none"
      >
        <div id="music-bg-blur" class="absolute inset-0 bg-cover bg-center blur-3xl opacity-35 dark:opacity-25 pointer-events-none scale-150 transition-all duration-700"></div>
        <div class="absolute inset-0 bg-black/40 backdrop-blur-[2px] pointer-events-none"></div>

        <div class="relative z-10 flex items-start justify-between">
          <Icon name="fa6-brands:spotify" size={32} class="text-[#1DB954]" />

          <!-- Vinyl + Album Art -->
          <div class="relative flex items-center justify-end">
            <div class="absolute top-2 right-12 w-18 h-18 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shadow-xl overflow-hidden" style="animation: spin 6s linear infinite;">
              <div class="absolute inset-0 rounded-full opacity-60 pointer-events-none" style="background: conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.35) 30deg, transparent 70deg, transparent 180deg, rgba(255,255,255,0.25) 210deg, transparent 250deg);"></div>
              <div class="w-18 h-18 rounded-full border border-neutral-700/50 flex items-center justify-center relative">
                <div class="absolute inset-1 rounded-full border border-neutral-800/80"></div>
                <div class="absolute inset-3 rounded-full border border-neutral-800/60"></div>
                <div class="w-6 h-6 rounded-full bg-amber-600 border border-black/80 flex items-center justify-center shadow-inner relative">
                  <div class="w-2.5 h-2.5 rounded-full bg-black border border-neutral-800"></div>
                </div>
              </div>
            </div>
            <div class="relative z-10 w-22 h-22 rounded-xl overflow-hidden border border-(--color-border) bg-neutral-900 shadow-lg flex items-center justify-center">
              <img id="album-art" src="" alt="" class="w-full h-full object-cover hidden" />
              <div id="no-cover" class="w-full h-full flex flex-col items-center justify-center text-center p-1 bg-gradient-to-br from-neutral-800 to-neutral-900">
                <span class="text-[10px] font-medium text-neutral-400 leading-tight">No Cover</span>
              </div>
            </div>
          </div>
        </div>

        <div class="relative z-10">
          <div class="flex items-center gap-2 mb-1.5">
            <div class="flex items-end gap-[2px] h-3.5">
              <span id="bar1" class="w-[2.5px] bg-[#1DB954] rounded-full h-2"></span>
              <span id="bar2" class="w-[2.5px] bg-[#1DB954] rounded-full h-3.5"></span>
              <span id="bar3" class="w-[2.5px] bg-[#1DB954] rounded-full h-1.5"></span>
            </div>
            <span id="music-status" class="text-xs font-medium text-[#1DB954] tracking-wide">Loading...</span>
          </div>
          <div>
            <h3 id="track-title" class="font-bold text-lg text-white truncate leading-snug" title="Off Endz">Off Endz</h3>
            <p id="track-artist" class="text-sm text-neutral-300 truncate font-medium" title="Raf Saperra">Raf Saperra</p>
          </div>
        </div>
      </a>

    </div>
  </div>
</section>

<style>
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
</style>

<script>
  const LASTFM_USERNAME = "themehedihq";
  const LASTFM_API_KEY = "3d105f75746c8a720a34f4a6df3e0088";

  // 1. Dhaka Time Clock
  function updateTime() {
    const timeEl = document.getElementById("dhaka-time");
    const ampmEl = document.getElementById("dhaka-ampm");
    if (!timeEl) return;

    const now = new Date();
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Dhaka",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const parts = formatter.formatToParts(now);
    const hour = parts.find((p) => p.type === "hour")?.value || "--";
    const minute = parts.find((p) => p.type === "minute")?.value || "--";
    const second = parts.find((p) => p.type === "second")?.value || "--";
    const dayPeriod = parts.find((p) => p.type === "dayPeriod")?.value || "";

    timeEl.textContent = `${hour}:${minute}:${second}`;
    if (ampmEl && dayPeriod) {
      ampmEl.textContent = dayPeriod;
      ampmEl.classList.remove("hidden");
    }
  }

  // 2. Last.fm Track
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

  async function fetchLastFmTrack() {
    if (!LASTFM_USERNAME || !LASTFM_API_KEY) return;

    try {
      const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=1`;
      const res = await fetch(url);
      const data = await res.json();

      const recentTrack = data?.recenttracks?.track?.[0];
      if (!recentTrack) return;

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
          const itunesRes = await fetch(`https://itunes.apple.com/search?term=${query}&entity=song&limit=1`);
          const itunesData = await itunesRes.json();
          if (itunesData.results?.[0]?.artworkUrl100) {
            albumArtUrl = itunesData.results[0].artworkUrl100.replace("100x100bb", "600x600bb");
          }
        } catch (e) {
          console.error("iTunes album art fetch failed:", e);
        }
      }

      const musicCard = document.getElementById("music-card") as HTMLAnchorElement | null;
      const albumArt = document.getElementById("album-art") as HTMLImageElement | null;
      const noCover = document.getElementById("no-cover");
      const bgBlur = document.getElementById("music-bg-blur");
      const statusEl = document.getElementById("music-status");
      const titleEl = document.getElementById("track-title");
      const artistEl = document.getElementById("track-artist");
      const bar1 = document.getElementById("bar1");
      const bar2 = document.getElementById("bar2");
      const bar3 = document.getElementById("bar3");

      if (musicCard && trackUrl) musicCard.href = trackUrl;
      if (titleEl) { titleEl.textContent = title; titleEl.title = title; }
      if (artistEl) { artistEl.textContent = artist; artistEl.title = artist; }
      if (statusEl) statusEl.textContent = isPlaying ? "Now playing" : "Last played";

      if (albumArt && albumArtUrl) {
        albumArt.src = albumArtUrl;
        albumArt.alt = title;
        albumArt.classList.remove("hidden");
        albumArt.onerror = () => {
          albumArt.classList.add("hidden");
          if (noCover) noCover.classList.remove("hidden");
        };
        if (noCover) noCover.classList.add("hidden");
        if (bgBlur) bgBlur.style.backgroundImage = `url(${albumArtUrl})`;
      }

      if (isPlaying) {
        if (bar1) { bar1.classList.add("animate-bounce"); bar1.style.height = "0.75rem"; }
        if (bar2) { bar2.classList.add("animate-bounce"); bar2.style.height = "0.875rem"; }
        if (bar3) { bar3.classList.add("animate-bounce"); bar3.style.height = "0.5rem"; }
      }
    } catch (error) {
      console.error("Failed to fetch Last.fm track:", error);
    }
  }

  // 3. Lifecycle Initialization & View Transition Handling
  function initLiveSignals() {
    updateTime();
    const clockInterval = setInterval(updateTime, 1000);
    fetchLastFmTrack();
    const musicInterval = setInterval(fetchLastFmTrack, 30000);

    document.addEventListener(
      "astro:before-swap",
      () => {
        clearInterval(clockInterval);
        clearInterval(musicInterval);
      },
      { once: true }
    );
  }

  document.addEventListener("astro:page-load", initLiveSignals);
  if (document.readyState === "complete" || document.readyState === "interactive") {
    initLiveSignals();
  } else {
    document.addEventListener("DOMContentLoaded", initLiveSignals);
  }
</script>