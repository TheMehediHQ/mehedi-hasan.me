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

export default function InsightsContext() {
  const [dhakaTime, setDhakaTime] = useState<string>("");
  const [track, setTrack] = useState<TrackInfo | null>(null);
  const [loadingTrack, setLoadingTrack] = useState<boolean>(true);

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

  // 2. Fetch Real Track Data from Last.fm API
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

        const recentTrack = data?.recenttracks?.track?.[0];

        if (recentTrack) {
          const isPlaying = recentTrack["@attr"]?.nowplaying === "true";
          const title = recentTrack.name;
          const artist = recentTrack.artist["#text"] || recentTrack.artist.name;
          const trackUrl = recentTrack.url; // 👈 নির্দিষ্ট গানের URL

          const images = recentTrack.image || [];
          const albumArtUrl =
            images.find((img: { size: string; "#text": string }) => img.size === "extralarge")?.["#text"] ||
            images.find((img: { size: string; "#text": string }) => img.size === "large")?.["#text"] ||
            images.find((img: { size: string; "#text": string }) => img.size === "medium")?.["#text"] ||
            images[images.length - 1]?.["#text"] ||
            "";

          setTrack({
            title,
            artist,
            albumArt: albumArtUrl.trim() !== "" ? albumArtUrl : undefined,
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

  // Fallback URL: গান লোড না থাকলে সরাসরি আপনার প্রোফাইলের রিফ্রেশ্ড লাস্ট ট্র্যাক লিস্টে যাবে
  const fallbackUrl = `https://www.last.fm/user/${LASTFM_USERNAME}`;

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto">
       
       
          <SectionTitle
                  title="Insights & Context"
                  subtitle=""
                />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* 1. MAP / LOCATION CARD */}
          <div className="relative h-[220px] rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-[#181818]">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-90"
              style={{
                backgroundImage: `url('/profile/dhaka.png')`,
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Glowing Map Pin Dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-5 w-5 bg-blue-500 border-2 border-white shadow-md" />
              </div>
            </div>

            {/* Location Tag (Wikipedia Link) */}
            <a
              href="https://en.wikipedia.org/wiki/Dhaka"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 bg-black/70 hover:bg-black/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-medium text-gray-200 transition-all duration-200 hover:scale-105"
            >
              Dhaka, BD
            </a>
          </div>

          {/* 2. 🎵 SPOTIFY / LAST.FM MUSIC CARD */}
          <a
            href={track?.url || fallbackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-[220px] rounded-2xl p-5 bg-[#181818] border border-white/10 shadow-lg flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:border-white/20"
          >
            {/* Dynamic Background Blur */}
            {track?.albumArt && (
              <div 
                className="absolute inset-0 bg-cover bg-center blur-2xl opacity-25 pointer-events-none scale-150 transition-all duration-700"
                style={{ backgroundImage: `url(${track.albumArt})` }}
              />
            )}

            {/* Top Bar: Spotify Icon & Vinyl Record Album Cover */}
            <div className="relative z-10 flex items-start justify-between">
              <svg className="w-8 h-8 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.899 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.019zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.18-.1.2-.78-.42-.6-.18-.6-.6.18-.78 4.2-1.26 11.28-1.02 15.72 1.62.54.3.719 1.02.419 1.56-.299.421-1.02.599-1.439.3z"/>
              </svg>

              {/* Album Art Container */}
              <div className="relative">
                {/* Vinyl Record Behind */}
                <div className={`absolute top-0 right-3 w-16 h-16 rounded-full bg-black border-2 border-neutral-800 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-3 ${track?.isPlaying ? 'animate-spin-slow' : ''}`}>
                  <div className="w-5 h-5 rounded-full bg-amber-600 border border-black flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  </div>
                </div>

                {/* Cover Image */}
                <div className="relative z-10 w-16 h-16 rounded-lg overflow-hidden border border-white/10 bg-neutral-900 shadow-md flex items-center justify-center">
                  {track?.albumArt ? (
                    <img 
                      src={track.albumArt} 
                      alt={track.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center p-1 bg-gradient-to-br from-neutral-800 to-neutral-900">
                      <span className="text-[10px] font-medium text-neutral-400 leading-tight">No Cover</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Info */}
            <div className="relative z-10">
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="flex h-2 w-2 relative">
                  {track?.isPlaying && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1DB954] opacity-75"></span>
                  )}
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${track?.isPlaying ? 'bg-[#1DB954]' : 'bg-gray-400'}`}></span>
                </span>
                <span className="text-xs font-medium text-[#1DB954] tracking-wide">
                  {loadingTrack ? "Loading..." : track?.isPlaying ? "Now playing" : "Last played"}
                </span>
              </div>

              {track ? (
                <div>
                  <h3 className="font-bold text-lg text-white truncate leading-snug group-hover:underline" title={track.title}>
                    {track.title}
                  </h3>
                  <p className="text-sm text-neutral-400 truncate font-medium" title={track.artist}>
                    {track.artist}
                  </p>
                </div>
              ) : (
                <div>
                  <h3 className="font-bold text-base text-neutral-300">Off Endz</h3>
                  <p className="text-sm text-neutral-400">Raf Saperra</p>
                </div>
              )}
            </div>
          </a>

          {/* 3. DHAKA TIME CARD */}
          <div className="relative h-[220px] rounded-2xl p-5 bg-[#181818] border border-white/10 shadow-lg flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Local Time
              </span>
              <Globe2 className="w-5 h-5 text-neutral-400" />
            </div>

            <div>
              <div className="text-3xl font-bold text-white tracking-tight font-mono">
                {dhakaTime ? dhakaTime.split(" ")[0] : "--:--:--"}
                <span className="text-sm text-neutral-400 ml-2 font-sans font-normal">
                  {dhakaTime ? dhakaTime.split(" ")[1] : ""}
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-1">Dhaka, Bangladesh (GMT+6)</p>
            </div>

            <div className="pt-3 border-t border-white/10 text-xs text-neutral-400 flex justify-between items-center">
              <span>Status</span>
              <span className="text-emerald-400 font-medium">● Active</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}