# Mehedi Hasan — Personal Portfolio

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, open-source personal portfolio and blog built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and TypeScript. Deployed on [Vercel](https://vercel.com).

**Live:** [mehedi-hasan.me](https://mehedi-hasan.me)

---

## Features

- 🎨 **Clean & Responsive Design** — Tailored UI built with Tailwind CSS 4
- 📝 **Blog with MDX** — Write posts in Markdown with JSX component support
- 🌙 **Dark / Light Mode** — Theme toggle with persistent preference
- 📡 **Live Signals** — Real-time Last.fm integration showing currently playing music
- 👤 **Visitor Tracking** — Live visitor counter powered by Upstash Redis
- 📬 **Contact Form** — Serverless contact form via Resend API
- 📰 **Newsletter** — Blog newsletter subscription powered by Buttondown
- 🗺️ **Sitemap & RSS** — Auto-generated sitemap and RSS feed for blog posts
- 🔍 **SEO Optimized** — Canonical URLs, Open Graph tags, and structured metadata
- 🖼️ **Optimized Images** — Sharp-powered image processing
- 📄 **Resume Download** — Direct PDF resume access
- ⚡ **100/100 Lighthouse** — Built for performance out of the box

## Sections

| Section       | Description                                      |
| ------------- | ------------------------------------------------ |
| Home          | Hero landing with introduction                   |
| About         | Personal background and bio                      |
| Experience    | Work history and professional journey             |
| Education     | Academic background                              |
| Skills        | Technical skills and toolset                     |
| Projects      | Showcase of personal and professional projects   |
| GitHub        | GitHub activity and contributions                |
| Insights      | Blog posts and writing                           |
| Contact       | Contact form and social links                    |

## Tech Stack

- **Framework:** [Astro 7](https://astro.build)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com)
- **Language:** TypeScript
- **Icons:** [astro-icon](https://github.com/natemoo-re/astro-icon) (Lucide, Font Awesome)
- **Fonts:** Atkinson (self-hosted)
- **Blog:** MDX with content collections
- **Deployment:** [Vercel](https://vercel.com)
- **APIs:** Resend (email), Last.fm (music), Upstash Redis (visitor tracking), Buttondown (newsletter)

## Project Structure

```text
├── public/                 # Static assets (images, resume, icons)
├── src/
│   ├── assets/             # Fonts and media
│   ├── components/         # Reusable UI components
│   │   ├── layout/         # Header, footer, navigation
│   │   ├── live-signals/   # Last.fm & visitor widgets
│   │   └── ui/             # Base UI primitives
│   ├── content/blog/       # MDX blog posts
│   ├── data/               # Typed data files (projects, skills, etc.)
│   ├── layouts/            # Page layouts
│   ├── lib/                # Utility functions
│   ├── pages/              # Routes and API endpoints
│   │   └── api/            # Serverless API routes
│   ├── sections/           # Page section components
│   ├── styles/             # Global styles
│   └── types/              # TypeScript type definitions
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 22.12.0
- [Bun](https://bun.sh/) (recommended) or npm

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mehedi-hasan/www.mehedi-hasan.me.git
   cd www.mehedi-hasan.me
   ```

2. **Install dependencies:**

   ```bash
   bun install
   ```

3. **Set up environment variables:**

   ```bash
   cp .env.example .env
   ```

   Then edit `.env` and fill in your API keys:

   | Variable                   | Description                        | Required |
   | -------------------------- | ---------------------------------- | -------- |
   | `LASTFM_USERNAME`          | Your Last.fm username              | No       |
   | `LASTFM_API_KEY`           | Last.fm API key                    | No       |
   | `RESEND_API_KEY`           | Resend API key for contact form    | No       |
   | `UPSTASH_REDIS_REST_URL`   | Upstash Redis REST URL             | No       |
   | `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis REST token           | No       |
   | `IP_GEOLOCATION_API_URL`   | IP geolocation API endpoint        | No       |
   | `IP_GEOLOCATION_API_KEY`   | IP geolocation API key             | No       |
   | `BUTTONDOWN_API_KEY`       | Buttondown API key for newsletter  | No       |

4. **Start the dev server:**

   ```bash
   bun dev
   ```

   Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build for Production

```bash
bun build
bun preview   # Preview the production build locally
```

## Customization

All personal data is centralized in `src/data/`:

| File            | Content                |
| --------------- | ---------------------- |
| `personalInfo.ts` | Name, title, bio, etc. |
| `projects.ts`   | Portfolio projects     |
| `skills.ts`     | Technical skills       |
| `experience.ts` | Work experience        |
| `education.ts`  | Education history      |
| `socials.ts`    | Social media links     |
| `navItems.ts`   | Navigation menu items  |

Edit these files to personalize the portfolio with your own information.

## Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <a href="https://mehedi-hasan.me">Mehedi Hasan</a>
</p>
