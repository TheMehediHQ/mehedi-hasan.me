/**
 * Structured Portfolio Knowledge Base
 * 
 * Source of truth for Mehedi Hasan's AI Portfolio Assistant.
 * Grounded strictly in actual portfolio content.
 * Does NOT expose private secrets, credentials, or confidential data.
 */

export interface KnowledgeSection {
  id: string;
  category: "personal" | "experience" | "projects" | "skills" | "education" | "contact" | "blogs" | "availability";
  title: string;
  keywords: string[];
  content: string;
  actions?: Array<{
    type: "booking" | "resume" | "email" | "whatsapp" | "link";
    label: string;
    url: string;
  }>;
}

export const PORTFOLIO_KNOWLEDGE: KnowledgeSection[] = [
  {
    id: "personal-bio",
    category: "personal",
    title: "About Mehedi Hasan & Summary",
    keywords: [
      "mehedi", "hasan", "who", "about", "bio", "title", "developer", "engineer", "location", "bangladesh", "dhaka", "intro"
    ],
    content: `Mehedi Hasan is an AI/LLM Developer and Full Stack Software Developer based in Dhaka, Bangladesh.
He specializes in building modern, scalable, high-performance web applications and intelligent AI-powered solutions.
Core expertise: React, Next.js, TypeScript, Node.js, Python, FastAPI, PostgreSQL, MongoDB, OpenAI, and modern AI/LLM integrations (RAG, AI agents, LLM APIs).
Professional Title: "AI/LLM Developer" and Software Developer.
Location: Dhaka, Bangladesh (Timezone: GMT+6 / BST).
Current Focus:
- Building high-performance, scalable software systems
- Developing modern web applications with Next.js and TypeScript
- Building AI-powered applications with Python, OpenAI, and LLM APIs
- Exploring RAG (Retrieval-Augmented Generation), AI agents, and AI automation
- Improving backend architecture, REST/RPC APIs, and cloud deployment.`,
    actions: [
      { type: "resume", label: "Read Resume", url: "/Resume_of_Mehedi_Hasan.pdf" },
      { type: "booking", label: "Schedule a Call", url: "https://cal.com/TheMehediHQ/15min" }
    ]
  },
  {
    id: "technical-skills",
    category: "skills",
    title: "Technical Skills & Technologies",
    keywords: [
      "skills", "tech", "technologies", "stack", "frontend", "backend", "database", "tools", "languages",
      "react", "next.js", "nextjs", "typescript", "javascript", "node", "nodejs", "python", "openai",
      "fastapi", "postgresql", "postgres", "mongodb", "docker", "aws", "git", "linux", "ai", "llm", "ml"
    ],
    content: `Mehedi's technical skills and proficiencies:
- Frontend:
  * React (Proficiency: 95%) - Component architecture, hooks, state management, modern UI/UX
  * Next.js (Proficiency: 92%) - App Router, Server Components, SSR/SSG, server actions, performance optimization
- Programming Languages:
  * JavaScript (Proficiency: 95%) - ES6+, asynchronous patterns, event loop, DOM manipulation
  * TypeScript (Proficiency: 90%) - Strong typing, type safety, generics, modern standards
  * Python (Proficiency: 75%) - AI/ML development, scripting, data processing
- Backend & APIs:
  * Node.js (Proficiency: 90%) - Scalable server runtimes, event-driven services
  * FastAPI (Proficiency: 72%) - High-performance Python API framework, async endpoints
- AI/LLM:
  * OpenAI (Proficiency: 78%) - GPT APIs, prompt engineering, function calling, embeddings
- Databases:
  * PostgreSQL (Proficiency: 85%) - Relational data modeling, SQL queries, indexing
  * MongoDB (Proficiency: 82%) - Document schemas, aggregation pipelines, NoSQL
- DevOps, Cloud & Tools:
  * Linux (Proficiency: 88%) - Server administration, command line, bash scripting
  * Git (Proficiency: 92%) - Version control, code reviews, collaboration
  * Docker (Proficiency: 80%) - Containerization, dev/prod environments
  * AWS (Proficiency: 75%) - Cloud deployment, storage, serverless services`
  },
  {
    id: "work-experience",
    category: "experience",
    title: "Work Experience & History",
    keywords: [
      "experience", "work", "career", "job", "history", "nexvibe", "apexiums", "quantum", "role", "company", "companies"
    ],
    content: `Professional work experience:
1. NexVibe — Full Stack Developer
   Period: May 2026 – Present
   Website: https://www.nexvibe.tech
   Highlights:
   - Leading full-stack development for a SaaS platform serving 100k+ active users.
   - Designed and implemented micro-frontend architecture.
   - Improved platform performance and load speeds by 40%.
   - Tech stack: React, Next.js, TypeScript, PostgreSQL, Node.js.

2. Apexiums Technologies — Full Stack Developer Intern
   Period: March 2026 – April 2026
   Website: https://www.apexiumstechnologies.com
   Highlights:
   - Built and maintained multiple client projects from initial concept through production deployment.
   - Specialized in modern React ecosystems and clean RESTful API design.
   - Tech stack: React, Node.js, Express, PostgreSQL, AWS.

3. Quantum Foundation — Volunteer
   Period: February 2018 – Present
   Website: https://quantummethod.org
   Highlights:
   - Active volunteer contributing to motivational initiatives and community outreach programs to inspire and uplift people.
   - Areas: Motivational Speaking, Community Outreach, Leadership, Public Speaking.`
  },
  {
    id: "projects-professional",
    category: "projects",
    title: "Professional Projects (AY Voice & NexVibe)",
    keywords: [
      "projects", "ay voice", "ayvoice", "nexvibe", "professional", "client", "commercial", "sms", "voice", "platform", "agency"
    ],
    content: `Professional projects built by Mehedi:
1. AY Voice (Live at https://ayvoice.com)
   Type: Professional Software Application
   Description: A cloud-based bulk SMS and voice calling communication platform that empowers businesses to manage campaigns, contacts, and customer outreach efficiently.
   Key Features:
   - Campaign management for mass SMS and voice calls.
   - Comprehensive contact organization and delivery tracking.
   - Message and call history logs with detailed metrics.
   - Third-party telecommunication API integration.
   Tech Stack: Next.js, Hono, PostgreSQL.

2. NexVibe Website (Live at https://nexvibe.tech)
   Type: Professional Agency Platform
   Description: A modern software agency website showcasing services, portfolio items, and business digital solutions.
   Key Features:
   - Fast, SEO-optimized business platform.
   - Clean, responsive layouts with smooth micro-interactions.
   - High Lighthouse performance scores and premium UX design.
   Tech Stack: Next.js, Tailwind CSS.`
  },
  {
    id: "projects-personal",
    category: "projects",
    title: "Open Source & Personal Projects (Kashly, Treely, Foodly)",
    keywords: [
      "kashly", "treely", "foodly", "personal", "open source", "finance", "plants", "food", "inventory", "clerk", "mongodb"
    ],
    content: `Open Source & Personal Projects:
1. Kashly (https://kashly.mehedi-hasan.me | GitHub: https://github.com/TheMehediHQ/Kashly)
   Type: Personal / Open Source Full-Stack App
   Description: A modern money management application helping users track income and expenses, set monthly budgets, and achieve financial goals with real-time dashboards.
   Features: Secure authentication via Clerk, real-time expense monitoring, smart budgeting, categorized transaction history, responsive UI.
   Tech Stack: Next.js, TypeScript, Express, MongoDB, Tailwind CSS.

2. Treely (https://treely.mehedi-hasan.me | GitHub: https://github.com/TheMehediHQ/Treely)
   Type: Personal / Open Source Full-Stack App
   Description: A plant care tracking and management web application helping gardeners and enthusiasts manage plant collections, read care guides, and track watering schedules.
   Features: Clerk authentication, collection management, plant care guides, automated watering schedules.
   Tech Stack: React, Express, MongoDB, Firebase, Tailwind CSS.

3. Foodly (https://foodly.mehedi-hasan.me | GitHub: https://github.com/TheMehediHQ/Foodly)
   Type: Personal / Open Source Full-Stack App
   Description: A smart food inventory tracking application that monitors expiry dates, tracks item freshness, and prevents food waste in real-time.
   Features: Clerk authentication, expiry date alerts, freshness monitoring, waste prevention metrics.
   Tech Stack: React, Express, MongoDB, Firebase, Tailwind CSS.`,
    actions: [
      { type: "link", label: "Kashly GitHub", url: "https://github.com/TheMehediHQ/Kashly" },
      { type: "link", label: "Treely GitHub", url: "https://github.com/TheMehediHQ/Treely" },
      { type: "link", label: "Foodly GitHub", url: "https://github.com/TheMehediHQ/Foodly" }
    ]
  },
  {
    id: "education-academics",
    category: "education",
    title: "Education & Academic Background",
    keywords: [
      "education", "degree", "university", "physics", "national university", "study", "academic", "bachelor", "college"
    ],
    content: `Academic Background:
- Degree: Bachelor of Science (B.Sc.) in Physics
- Institution: National University, Bangladesh
- Period: 2018 – 2026
- Core Subjects: Physics, Mathematics, Electronics
- Details: Studied fundamental physical principles, scientific problem-solving, mathematical analysis, and electronics, which fostered deep analytical and computational thinking applied to software engineering.`
  },
  {
    id: "availability-hiring",
    category: "availability",
    title: "Availability & Work Inquiries",
    keywords: [
      "available", "availability", "hire", "hiring", "work", "job", "contract", "freelance", "full-time", "remote", "opportunity", "schedule", "call", "meet"
    ],
    content: `Availability & Hiring:
- Mehedi is actively available for full-time software engineering and AI/LLM developer opportunities.
- He is open to remote worldwide roles, high-impact contract projects, and forward-thinking engineering teams.
- Primary working focus: Full Stack Development (Next.js/React/Node/TypeScript) and AI/LLM Application Engineering.
- Interested recruiters, founders, or clients can schedule a direct 15-minute introductory call or email him directly.`,
    actions: [
      { type: "booking", label: "Book a 15-min Call", url: "https://cal.com/TheMehediHQ/15min" },
      { type: "email", label: "Email Mehedi", url: "mailto:hello@mehedi-hasan.me" }
    ]
  },
  {
    id: "contact-socials",
    category: "contact",
    title: "Contact Information & Social Profiles",
    keywords: [
      "contact", "email", "phone", "whatsapp", "call", "message", "social", "github", "linkedin", "twitter", "x", "reach"
    ],
    content: `Public Contact & Social Links:
- Email: hello@mehedi-hasan.me
- WhatsApp: +880 1747 874 773 (Direct link: https://wa.me/8801747874773)
- Schedule a Call: https://cal.com/TheMehediHQ/15min
- GitHub: https://github.com/themehedihq
- LinkedIn: https://linkedin.com/in/themehedihq
- X / Twitter: https://twitter.com/themehedihq
- Location: Dhaka, Bangladesh
- Resume: /Resume_of_Mehedi_Hasan.pdf`,
    actions: [
      { type: "booking", label: "Schedule Call on Cal.com", url: "https://cal.com/TheMehediHQ/15min" },
      { type: "email", label: "Send Email", url: "mailto:hello@mehedi-hasan.me" },
      { type: "whatsapp", label: "WhatsApp Message", url: "https://wa.me/8801747874773" },
      { type: "resume", label: "Download Resume", url: "/Resume_of_Mehedi_Hasan.pdf" }
    ]
  },
  {
    id: "blog-articles",
    category: "blogs",
    title: "Blog Posts & Technical Writing",
    keywords: [
      "blog", "article", "posts", "writing", "es6", "interview", "reading", "books", "meditation"
    ],
    content: `Published articles on Mehedi's portfolio blog (/blog):
1. "ES6 Interview Questions & Answers — Complete Guide"
   Category: JavaScript / Interview Prep
   A comprehensive guide covering modern ECMAScript features, arrow functions, promises, async/await, closures, and destructuring.
2. "My Journey Through Failure and Meditation"
   Category: Personal Development / Reflections
   Personal reflections on overcoming setbacks, building resilience, and mindfulness through meditation.
3. "Books That Shaped My Reading Journey"
   Category: Reading / Books
   Discussion of influential books on mindset, philosophy, and personal growth.
4. "My 2026 Reading List"
   Category: Reading
   Curated book selections and reading goals for personal and technical growth.`,
    actions: [
      { type: "link", label: "Visit Blog", url: "/blog" }
    ]
  }
];
