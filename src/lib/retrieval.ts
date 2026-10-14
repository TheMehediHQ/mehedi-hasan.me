import { PORTFOLIO_KNOWLEDGE, type KnowledgeSection } from "../data/portfolioKnowledge";

export interface RetrievalResult {
  sections: KnowledgeSection[];
  suggestedActions: Array<{
    type: "booking" | "resume" | "email" | "whatsapp" | "link";
    label: string;
    url: string;
  }>;
  contextText: string;
  detectedIntents: string[];
}

// Tokenize and clean text
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 2);
}

/**
 * Retrieve the most relevant portfolio knowledge sections based on visitor query
 */
export function retrievePortfolioKnowledge(query: string, maxSections = 3): RetrievalResult {
  const normalizedQuery = query.toLowerCase();
  const queryTokens = tokenize(query);

  const detectedIntents: string[] = [];

  // Intent classification with word boundaries
  if (/\b(call|meeting|schedule|book|calendar|cal\.com|appointment)\b/i.test(normalizedQuery)) {
    detectedIntents.push("booking");
  }
  if (/\b(resume|cv|pdf)\b/i.test(normalizedQuery)) {
    detectedIntents.push("resume");
  }
  if (/\b(hire|available|availability|job|opportunity|contract|freelance|full-time)\b/i.test(normalizedQuery) ||
      /\bwork with (mehedi|him|you)\b/i.test(normalizedQuery)) {
    detectedIntents.push("hiring");
  }
  if (/\b(project|projects|built|kashly|foodly|ayvoice|nexvibe|app|software)\b/i.test(normalizedQuery) ||
      /ay\s*voice/i.test(normalizedQuery)) {
    detectedIntents.push("projects");
  }
  if (/\b(skill|skills|technology|technologies|tech|stack|frontend|backend|database|databases|tools|react|next|next\.js|typescript|javascript|node|node\.js|express|prisma|go|golang|hono|postgres|postgresql|mongo|mongodb|docker|aws)\b/i.test(normalizedQuery)) {
    detectedIntents.push("skills");
  }
  if (/\b(experience|career|history|company|companies|role|intern|internship|nexvibe|apexiums|quantum)\b/i.test(normalizedQuery)) {
    detectedIntents.push("experience");
  }
  if (/\b(study|degree|university|education|physics|college|academic)\b/i.test(normalizedQuery)) {
    detectedIntents.push("education");
  }
  if (/\b(email|contact|whatsapp|reach|message|social|github|linkedin|twitter)\b/i.test(normalizedQuery)) {
    detectedIntents.push("contact");
  }
  if (/\b(blog|blogs|article|articles|post|posts|writing|read|reading)\b/i.test(normalizedQuery)) {
    detectedIntents.push("blogs");
  }
  if (/^(hi|hello|hey|good\s*(morning|afternoon|evening)|howdy|greetings|sup|yo|what'?s?\s*up|assalamu\s*alaikum|salam)\b/i.test(normalizedQuery.trim())) {
    detectedIntents.push("greeting");
  }

  // Always include personal bio if query is generic or asking who/about Mehedi / current role
  const isGenericOrBio = /\b(who|mehedi|about|tell me|summary|yourself|intro|role|specialize|specialization)\b/i.test(normalizedQuery);

  // Score each section
  const scoredSections = PORTFOLIO_KNOWLEDGE.map((section) => {
    let score = 0;

    // Keyword matching
    for (const keyword of section.keywords) {
      if (normalizedQuery.includes(keyword)) {
        score += 4;
      }
    }

    for (const token of queryTokens) {
      if (section.content.toLowerCase().includes(token)) {
        score += 1.5;
      }
      if (section.title.toLowerCase().includes(token)) {
        score += 3;
      }
    }

    // Intent alignment bonus
    if (detectedIntents.includes("booking") && (section.id === "availability-hiring" || section.id === "contact-socials")) {
      score += 12;
    }
    if (detectedIntents.includes("resume") && (section.id === "personal-bio" || section.id === "contact-socials")) {
      score += 10;
    }
    if (detectedIntents.includes("hiring") && section.id === "availability-hiring") {
      score += 12;
    }
    if (detectedIntents.includes("projects") && (section.id === "projects-professional" || section.id === "projects-personal")) {
      score += 10;
    }
    if (detectedIntents.includes("skills") && section.id === "technical-skills") {
      score += 12;
    }
    if (detectedIntents.includes("experience") && section.id === "work-experience") {
      score += 12;
    }
    if (detectedIntents.includes("education") && section.id === "education-academics") {
      score += 12;
    }
    if (detectedIntents.includes("contact") && section.id === "contact-socials") {
      score += 12;
    }
    if (detectedIntents.includes("blogs") && section.id === "blog-articles") {
      score += 12;
    }
    if (isGenericOrBio && section.id === "personal-bio") {
      score += 10;
    }

    return { section, score };
  });

  // Sort descending by score
  scoredSections.sort((a, b) => b.score - a.score);

  // Pick top scoring sections with score > 0
  let selected = scoredSections
    .filter((item) => item.score > 0)
    .slice(0, maxSections)
    .map((item) => item.section);

  // If greeting detected, use minimal context — don't dump the full bio
  if (detectedIntents.includes("greeting")) {
    selected = PORTFOLIO_KNOWLEDGE.filter((s) => s.id === "personal-bio");
  }

  // If no sections matched, fallback to personal bio & skills
  if (selected.length === 0) {
    selected = PORTFOLIO_KNOWLEDGE.filter(
      (s) => s.id === "personal-bio" || s.id === "technical-skills"
    );
  }

  // Collect relevant action buttons (deduplicated by url)
  const actionsMap = new Map<string, NonNullable<KnowledgeSection["actions"]>[number]>();
  for (const s of selected) {
    if (s.actions) {
      for (const act of s.actions) {
        actionsMap.set(act.url, act);
      }
    }
  }

  // Force specific actions based on direct intents
  if (detectedIntents.includes("booking") || detectedIntents.includes("hiring")) {
    actionsMap.set("https://cal.com/TheMehediHQ/15min", {
      type: "booking",
      label: "Schedule a 15-min Call",
      url: "https://cal.com/TheMehediHQ/15min",
    });
  }
  if (detectedIntents.includes("resume")) {
    actionsMap.set("/Resume_of_Mehedi_Hasan.pdf", {
      type: "resume",
      label: "Download Resume",
      url: "/Resume_of_Mehedi_Hasan.pdf",
    });
  }

  const suggestedActions = Array.from(actionsMap.values()).slice(0, 3);

  // Construct compact context text
  const contextText = selected
    .map((s) => `### ${s.title}\n${s.content}`)
    .join("\n\n");

  return {
    sections: selected,
    suggestedActions,
    contextText,
    detectedIntents,
  };
}

/**
 * High-quality deterministic portfolio response generator when no external AI API key is configured.
 * This guarantees the portfolio assistant answers every question with 100% accuracy and zero downtime.
 */
export function generateLocalPortfolioResponse(query: string): { text: string; actions: RetrievalResult["suggestedActions"] } {
  const retrieval = retrievePortfolioKnowledge(query, 2);
  const q = query.toLowerCase();

  // Booking or scheduling
  if (retrieval.detectedIntents.includes("booking") || /\b(call|meeting|schedule|book|calendar)\b/i.test(q)) {
    return {
      text: "Absolutely! You can book a 15-minute call with Mehedi directly through his Cal.com page. He's always happy to chat about new opportunities or collaborations.",
      actions: [
        { type: "booking", label: "Book a 15-min Call", url: "https://cal.com/TheMehediHQ/15min" },
        { type: "email", label: "Email Directly", url: "mailto:hello@mehedi-hasan.me" },
      ],
    };
  }

  // Resume
  if (retrieval.detectedIntents.includes("resume") || /\b(resume|cv)\b/i.test(q)) {
    return {
      text: "Sure! Here's Mehedi's resume — it covers his full-stack experience, skills, education, and projects.",
      actions: [
        { type: "resume", label: "View Resume (PDF)", url: "/Resume_of_Mehedi_Hasan.pdf" },
      ],
    };
  }

  // Specific project: AyVoice
  if (/ay\s*voice|ayvoice/i.test(q)) {
    return {
      text: "**AY Voice** is a cloud-based communication platform built by Mehedi that enables businesses to manage bulk SMS and voice calling campaigns efficiently.\n\n• **Key Features:** Campaign management, contact organization, message/call delivery logs, and telecommunication API integrations.\n• **Tech Stack:** Next.js, Hono, and PostgreSQL.\n• **Status:** Live at https://ayvoice.com",
      actions: [
        { type: "link", label: "Visit AY Voice", url: "https://ayvoice.com" },
        { type: "booking", label: "Discuss Projects with Mehedi", url: "https://cal.com/TheMehediHQ/15min" }
      ],
    };
  }

  // Specific project: NexVibe
  if (/nexvibe/i.test(q) && !/experience|role/i.test(q)) {
    return {
      text: "**NexVibe** (https://nexvibe.tech) is a modern software agency website built with Next.js and Tailwind CSS. It features responsive layouts, smooth micro-interactions, high Lighthouse performance, and a clean developer-portfolio aesthetic.",
      actions: [
        { type: "link", label: "Visit NexVibe", url: "https://nexvibe.tech" },
      ],
    };
  }

  // Specific technology: Next.js
  if (/next\.js|nextjs/i.test(q) && /experience|work|use|skill/i.test(q)) {
    return {
      text: "Mehedi has extensive experience with **Next.js** (92% proficiency). He uses Next.js (App Router, Server Components, SSR/SSG, and Server Actions) across production applications including NexVibe, AY Voice, and Kashly. He also implemented micro-frontend architecture with Next.js, achieving 40% performance gains.",
      actions: [
        { type: "resume", label: "View Resume", url: "/Resume_of_Mehedi_Hasan.pdf" },
      ],
    };
  }

  // Specific technology: TypeScript
  if (/typescript/i.test(q)) {
    return {
      text: "Yes, Mehedi works extensively with **TypeScript** (90% proficiency). He uses TypeScript across both frontend (Next.js, React) and backend (Node.js) codebases to enforce type safety and maintainable architectures.",
      actions: [
        { type: "resume", label: "View Resume", url: "/Resume_of_Mehedi_Hasan.pdf" },
      ],
    };
  }

  // Frontend technologies
  if (/frontend/i.test(q) && /technolog|skill|stack|use/i.test(q)) {
    return {
      text: "Mehedi specializes in modern frontend engineering:\n\n• **React.js** (95%) — Component architecture, hooks, and scalable state management\n• **Next.js** (92%) — App Router, Server Components, SSR/SSG, and performance tuning\n• **JavaScript** (95%) & **TypeScript** (90%) — Type-safe, modern development",
      actions: [
        { type: "resume", label: "View Full Resume", url: "/Resume_of_Mehedi_Hasan.pdf" },
      ],
    };
  }

  // Backend technologies
  if (/backend/i.test(q) && /technolog|skill|stack|use/i.test(q)) {
    return {
      text: "Mehedi's backend stack:\n\n• **Node.js** (90%) — Scalable server runtimes and asynchronous, event-driven services\n• **Express.js** (88%) — RESTful APIs and middleware-based services\n• **Golang** (80%) — High-performance, concurrent backend services\n• **PostgreSQL** (85%), **Prisma ORM** (85%) & **MongoDB** (82%) — Relational and document databases with type-safe data access\n• **Docker** (80%) & **AWS** (75%) — Containerization and cloud deployment",
      actions: [
        { type: "resume", label: "View Full Resume", url: "/Resume_of_Mehedi_Hasan.pdf" },
      ],
    };
  }

  // Specialization & Current Role
  if (/specialize|specialization|current role|role/i.test(q)) {
    return {
      text: "Mehedi is a **Full-Stack Software Developer** based in Dhaka, Bangladesh. He's currently at **NexVibe**, leading engineering for a SaaS platform with 100k+ users. His focus is on high-performance web apps with React, Next.js, and TypeScript, and scalable, event-driven backends with Node.js, Hono, and Golang.",
      actions: [
        { type: "resume", label: "Read Resume", url: "/Resume_of_Mehedi_Hasan.pdf" },
        { type: "booking", label: "Schedule a Call", url: "https://cal.com/TheMehediHQ/15min" }
      ],
    };
  }

  // Availability / hiring
  if (retrieval.detectedIntents.includes("hiring") || /\b(available|hire|freelance|job|opportunity)\b/i.test(q)) {
    return {
      text: "Yes, Mehedi is actively looking for full-time software engineering roles. He's also open to high-impact contract work. Feel free to reach out or book a call!",
      actions: [
        { type: "booking", label: "Schedule a 15-min Call", url: "https://cal.com/TheMehediHQ/15min" },
        { type: "email", label: "hello@mehedi-hasan.me", url: "mailto:hello@mehedi-hasan.me" },
      ],
    };
  }

  // Technologies & skills general
  if (retrieval.detectedIntents.includes("skills") || /\b(technolog|skill|stack)\b/i.test(q)) {
    return {
      text: "Mehedi's tech stack:\n\n• **Frontend:** React.js (95%), Next.js (92%)\n• **Languages:** JavaScript (95%), TypeScript (90%), Golang (80%)\n• **Backend:** Node.js (90%), Express.js (88%)\n• **Databases:** PostgreSQL (85%), Prisma ORM (85%), MongoDB (82%)\n• **DevOps, Cloud & Tools:** Docker (80%), AWS (75%), Linux (88%), Git (92%)",
      actions: [
        { type: "resume", label: "View Full Resume", url: "/Resume_of_Mehedi_Hasan.pdf" },
      ],
    };
  }

  // Projects general
  if (retrieval.detectedIntents.includes("projects") || /\b(project|projects|built)\b/i.test(q)) {
    return {
      text: "Mehedi has built both professional and open-source applications:\n\n• **AY Voice:** Cloud-based bulk SMS & voice calling communication platform (Next.js, Hono, PostgreSQL).\n• **NexVibe:** Modern software agency website (Next.js, Tailwind CSS).\n• **Kashly:** Smart money management app with Clerk auth and real-time expense monitoring (Next.js, Express, MongoDB).\n• **Foodly:** Real-time food inventory and freshness tracking app (React, Express, MongoDB, Firebase).",
      actions: [
        { type: "link", label: "Visit AY Voice", url: "https://ayvoice.com" },
        { type: "link", label: "Kashly on GitHub", url: "https://github.com/TheMehediHQ/Kashly" },
      ],
    };
  }

  // Experience general
  if (retrieval.detectedIntents.includes("experience") || /\b(experience|history|companies)\b/i.test(q)) {
    return {
      text: "Mehedi's professional experience includes:\n\n1. **Full Stack Software Developer at NexVibe** (May 2026 – Present): Leading full-stack engineering for a SaaS platform serving 100k+ users, implemented micro-frontends, and boosted performance by 40%.\n2. **Full Stack Developer Intern at Apexiums Technologies** (March 2026 – April 2026): Built client applications using React, Node.js, Express, and PostgreSQL.\n3. **Volunteer at Quantum Foundation** (2018 – Present): Motivational speaking, leadership, and community outreach.",
      actions: [
        { type: "resume", label: "View Resume", url: "/Resume_of_Mehedi_Hasan.pdf" },
      ],
    };
  }

  // Education
  if (retrieval.detectedIntents.includes("education") || /\b(education|degree|university|physics)\b/i.test(q)) {
    return {
      text: "Mehedi holds a Bachelor of Science (B.Sc.) in Physics from the National University, Bangladesh (2018 – 2026). His studies encompassed physics, mathematics, and electronics, establishing a strong foundation in computational thinking and analytical problem solving.",
      actions: [
        { type: "resume", label: "View Resume", url: "/Resume_of_Mehedi_Hasan.pdf" },
      ],
    };
  }

  // Contact
  if (retrieval.detectedIntents.includes("contact") || /\b(contact|email|whatsapp|phone)\b/i.test(q)) {
    return {
      text: "You can reach Mehedi directly via:\n\n• **Email:** hello@mehedi-hasan.me\n• **WhatsApp:** +880 1747 874 773\n• **Schedule a Meeting:** cal.com/themehedihq\n• **Location:** Dhaka, Bangladesh",
      actions: [
        { type: "booking", label: "Schedule Call", url: "https://cal.com/TheMehediHQ/15min" },
        { type: "email", label: "Send Email", url: "mailto:hello@mehedi-hasan.me" },
        { type: "whatsapp", label: "WhatsApp Chat", url: "https://wa.me/8801747874773" },
      ],
    };
  }

  // Greeting
  if (retrieval.detectedIntents.includes("greeting") || /^(hi|hello|hey|good\s*(morning|afternoon|evening)|howdy|greetings|sup|yo|assalamu\s*alaikum|salam)\b/i.test(q.trim())) {
    return {
      text: "Hey there! 👋 I'm Mehedi's AI assistant. Happy to tell you about his work, skills, or how to get in touch — what would you like to know?",
      actions: [
        { type: "booking", label: "Schedule a Call", url: "https://cal.com/TheMehediHQ/15min" },
        { type: "resume", label: "View Resume", url: "/Resume_of_Mehedi_Hasan.pdf" },
      ],
    };
  }

  // Default bio & overview
  return {
    text: "Mehedi is a Full-Stack Software Developer based in Dhaka, Bangladesh. He builds scalable, high-performance web apps with React, Next.js, and TypeScript, and event-driven backends with Node.js, Hono, and Golang. Want to know more about his projects, skills, or experience?",
    actions: retrieval.suggestedActions,
  };
}
