// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import icon from "astro-icon";
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://mehedi-hasan.me",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "bn"],
    routing: {
      prefixDefaultLocale: false,
      fallbackType: "rewrite",
    },
    fallback: {
      bn: "en",
    },
  },

  redirects: {
    "/inspiration": "/quotes",
    "/bn/inspiration": "/bn/quotes",
  },

  alias: {
    "@": "./src",
  },

  adapter: vercel(),
  integrations: [
    mdx(),
    sitemap(),
    icon({
      include: {
        lucide: ["*"],
        "fa6-brands": ["*"],
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
    {
      provider: fontProviders.local(),
      name: "Atkinson",
      cssVariable: "--font-atkinson",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/atkinson-regular.woff"],
            weight: "400",
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/atkinson-bold.woff"],
            weight: "700",
            style: "normal",
            display: "swap",
          },
        ],
      },
    },
  ],
});
