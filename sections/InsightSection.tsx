"use client";

import { useEffect, useState } from "react";
import { Globe2 } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

// ==========================================
// ⚙️ Configurations
// ==========================================
const LASTFM_USERNAME = "themehedihq";
const LASTFM_API_KEY = "3d105f75746c8a720a34f4a6df3e0088";

interface TrackInfo {
  title: string;
  artist: string;
  albumArt?: string;
  isPlaying: boolean;
  url?: string;
}

// ==========================================
// 🎧 Last.fm API Types
// ==========================================
interface LastFmImage {
  size?: string;
  "#text"?: string;
}

interface LastFmArtist {
  name?: string;
  "#text"?: string;
}

interface LastFmTrack {
  name?: string;
  artist?: LastFmArtist | string;
  url?: string;
  image?: LastFmImage[];
  "@attr"?: {
    nowplaying?: string;
  };
}

const IMAGE_SIZE_PRIORITY = ["extralarge", "large", "medium", "small"];

function getLargestAlbumArt(images: LastFmImage[] = []): string | undefined {
  if (!Array.isArray(images) || images.length === 0) return undefined;

  for (const size of IMAGE_SIZE_PRIORITY) {
    const url = images.find((img) => img?.size === size)?.["#text"]?.trim();
    if (url) return url;
  }

  const fallbackUrl = images.find((img) => img?.["#text"]?.trim())?.["#text"]?.trim();
  return fallbackUrl || undefined;
}

export default function InsightsContext() {
  const [dhakaTime, setDhakaTime] = useState<string>("");
  const [track, setTrack] = useState<TrackInfo | null>(null);
  const [loadingTrack, setLoadingTrack] = useState<boolean>(true);
  const [imgError, setImgError] = useState<boolean>(false);

  // 1. Real-time Clock (Dhaka Time)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Dhaka",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setDhakaTime(formattedTime);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // 2. Fetch Real Track Data with iTunes Fallback
  useEffect(() => {
    async function fetchLastFmTrack() {
      if (!LASTFM_USERNAME || !LASTFM_API_KEY) {
        setLoadingTrack(false);
        return;
      }

      try {
        const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=1`;
        const res = await fetch(url);
        const data = await res.json();

        const recentTrack: LastFmTrack | undefined = data?.recenttracks?.track?.[0];

        if (recentTrack) {
          const isPlaying = recentTrack["@attr"]?.nowplaying === "true";
          const title = recentTrack.name || "Unknown Track";
          const artist =
            typeof recentTrack.artist === "string"
              ? recentTrack.artist
              : recentTrack.artist?.["#text"] || recentTrack.artist?.name || "Unknown Artist";
          const trackUrl = recentTrack.url;

          // 1. Try Last.fm image first
          let albumArtUrl = getLargestAlbumArt(recentTrack.image);

          // 2. Fallback to iTunes Search API if Last.fm image is missing
          if (!albumArtUrl) {
            try {
              const query = encodeURIComponent(`${artist} ${title}`);
              const itunesRes = await fetch(
                `https://itunes.apple.com/search?term=${query}&entity=song&limit=1`
              );
              const itunesData = await itunesRes.json();

              if (itunesData.results?.[0]?.artworkUrl100) {
                albumArtUrl = itunesData.results[0].artworkUrl100.replace(
                  "100x100bb",
                  "600x600bb"
                );
              }
            } catch (e) {
              console.error("iTunes album art fetch failed:", e);
            }
          }

          setImgError(false);

          setTrack({
            title,
            artist,
            albumArt: albumArtUrl,
            isPlaying,
            url: trackUrl,
          });
        }
      } catch (error) {
        console.error("Failed to fetch Last.fm track:", error);
      } finally {
        setLoadingTrack(false);
      }
    }

    fetchLastFmTrack();
    const interval = setInterval(fetchLastFmTrack, 30000);
    return () => clearInterval(interval);
  }, []);

  const fallbackUrl = `https://www.last.fm/user/${LASTFM_USERNAME}`;

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Live Signals" subtitle="" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* 1. MAP / LOCATION CARD */}
          <div className="relative h-[220px] rounded-2xl overflow-hidden border border-(--color-border) shadow-lg bg-neutral-900">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-90"
              style={{
                backgroundImage: `url('/profile/dhaka.png')`,
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-5 w-5 bg-blue-500 border-2 border-white shadow-md" />
              </div>
            </div>

            <a
              href="https://en.wikipedia.org/wiki/Dhaka"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 bg-black/70 hover:bg-black/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-(--color-border) text-xs font-medium text-gray-200 transition-all duration-200 hover:scale-105"
            >
              Dhaka, BD
            </a>
          </div>

          {/* 2. 🎵 SPOTIFY / LAST.FM MUSIC CARD */}
          <a
            href={track?.url || fallbackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-[220px] rounded-2xl p-5 bg-[#181818] border border-(--color-border) shadow-lg flex flex-col justify-between overflow-hidden group transition-all duration-300 no-underline select-none"
          >
            {/* Dynamic Background Blur (Optimized for both Light & Dark view) */}
            {track?.albumArt && (
              <div
                className="absolute inset-0 bg-cover bg-center blur-3xl opacity-35 dark:opacity-25 pointer-events-none scale-150 transition-all duration-700"
                style={{ backgroundImage: `url(${track.albumArt})` }}
              />
            )}

            {/* Subtle Overlay to enhance text readability */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] pointer-events-none" />

            {/* Top Bar: Spotify Icon & Vinyl Record Album Cover */}
            <div className="relative z-10 flex items-start justify-between">
              <svg className="w-8 h-8 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.899 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.019zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.18-.1.2-.78-.42-.6-.18-.6-.6.18-.78 4.2-1.26 11.28-1.02 15.72 1.62.54.3.719 1.02.419 1.56-.299.421-1.02.599-1.439.3z" />
              </svg>

              {/* Album Art Container */}
              <div className="relative flex items-center justify-end">
                {/* Vinyl Record Behind */}
                {/* <div
                  className={`absolute top-1.25 right-10 w-22 h-22 rounded-full bg-black border-2 border-neutral-800 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-3 shadow-md ${
                    track?.isPlaying ? "animate-spin-slow" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-amber-600 border border-black flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  </div>
                </div> */}

{/* Vinyl Record Behind */}
<div
  className="absolute top-1.25 right-10 w-18 h-18 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-3 shadow-xl animate-spin overflow-hidden"
  style={{ animationDuration: '6s' }} /* আপনার পছন্দমতো গতি কমাতে/বাড়াতে পারেন */
>
  {/* Asymmetric Light Glossy Reflection - static অনুভব দূর করবে */}
  <div 
    className="absolute inset-0 rounded-full opacity-60 pointer-events-none"
    style={{
      background: `
        conic-gradient(
          from 0deg,
          transparent 0deg,
          rgba(255, 255, 255, 0.35) 30deg,
          transparent 70deg,
          transparent 180deg,
          rgba(255, 255, 255, 0.25) 210deg,
          transparent 250deg
        )
      `
    }}
  />

  {/* Outer Vinyl Grooves Ring */}
  <div className="w-18 h-18 rounded-full border border-neutral-700/50 flex items-center justify-center relative">
    
    {/* Vinyl Lines / Grooves */}
    <div className="absolute inset-1 rounded-full border border-neutral-800/80" />
    <div className="absolute inset-3 rounded-full border border-neutral-800/60" />

    {/* Center Label (Assymetric detail for obvious 360 spin) */}
    <div className="w-6 h-6 rounded-full bg-amber-600 border border-black/80 flex items-center justify-center shadow-inner relative">
      {/* Label Accent (এই ছোট ডট থাকার কারণে 360° ঘূর্ণন স্পষ্ট বোঝা যায়) */}
      {/* <div className="absolute top-1 w-1.5 h-1.5 bg-black/70 rounded-full" /> */}
      
      {/* Center Hole */}
      <div className="w-2.5 h-2.5 rounded-full bg-black border border-neutral-800" />
    </div>
  </div>
</div>
                {/* Cover Image */}
                <div className="relative z-10 w-20 h-20 rounded-xl overflow-hidden border border-(--color-border) bg-neutral-900 shadow-lg flex items-center justify-center">
                  {track?.albumArt && !imgError ? (
                    <img
                      src={track.albumArt}
                      alt={track.title}
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center p-1 bg-gradient-to-br from-neutral-800 to-neutral-900">
                      <span className="text-[10px] font-medium text-neutral-400 leading-tight">
                        No Cover
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Info */}
            <div className="relative z-10">
              {/* Sound Wave Bars / Status Icon */}
              <div className="flex items-center gap-2 mb-1.5">
                <div className="flex items-end gap-[2px] h-3.5">
                  <span
                    className={`w-[2.5px] bg-[#1DB954] rounded-full ${
                      track?.isPlaying ? "animate-bounce h-3" : "h-2"
                    }`}
                  />
                  <span
                    className={`w-[2.5px] bg-[#1DB954] rounded-full ${
                      track?.isPlaying ? "animate-bounce delay-100 h-3.5" : "h-3.5"
                    }`}
                  />
                  <span
                    className={`w-[2.5px] bg-[#1DB954] rounded-full ${
                      track?.isPlaying ? "animate-bounce delay-200 h-2" : "h-1.5"
                    }`}
                  />
                </div>
                <span className="text-xs font-medium text-[#1DB954] tracking-wide">
                  {loadingTrack
                    ? "Loading..."
                    : track?.isPlaying
                    ? "Now playing"
                    : "Last played"}
                </span>
              </div>

              {/* Track Details */}
              <div>
                <h3
                  className="font-bold text-lg text-white truncate leading-snug"
                  title={track?.title || "Off Endz"}
                >
                  {track?.title || "Off Endz"}
                </h3>
                <p
                  className="text-sm text-neutral-300 truncate font-medium"
                  title={track?.artist || "Raf Saperra"}
                >
                  {track?.artist || "Raf Saperra"}
                </p>
              </div>
            </div>
          </a>

          {/* 3. DHAKA TIME CARD */}
          <div className="relative h-[220px] rounded-2xl p-6 bg-gradient-to-b from-[#1E1E1E] to-[#141414] border border-(--color-border) shadow-xl flex flex-col justify-between overflow-hidden group">
            {/* Ambient Background Glow Effect */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/20 transition-all duration-500" />

            {/* Top Bar: Title & Icon */}
            <div className="flex items-center justify-between relative z-10">
              <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400/90 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Local Time
              </span>
              <Globe2 className="w-5 h-5 text-neutral-400 group-hover:text-blue-400 transition-colors duration-300 animate-spin-slow" />
            </div>

            {/* Main Time Display */}
            <div className="my-auto relative z-10">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white tracking-tight font-mono drop-shadow-md">
                  {dhakaTime ? dhakaTime.split(" ")[0] : "--:--:--"}
                </span>
                {dhakaTime && (
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-md backdrop-blur-sm">
                    {dhakaTime.split(" ")[1]}
                  </span>
                )}
              </div>
              <p className="text-xs font-medium text-neutral-400 mt-2 flex items-center gap-1.5">
                <span>Dhaka, Bangladesh</span>
                <span className="text-neutral-600">•</span>
                <span className="text-neutral-500 font-mono">GMT+6</span>
              </p>
            </div>

            {/* Bottom Bar: Status */}
            <div className="pt-3 border-t border-(--color-border) text-xs text-neutral-400 flex justify-between items-center relative z-10">
              <span className="font-medium text-neutral-500">Status</span>
              <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400 font-medium text-[11px] tracking-wide">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}