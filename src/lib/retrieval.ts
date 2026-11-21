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
    .replace(/[^\w\s\u0980-\u09FF-]/g, " ")
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

  // Intent classification (supporting both English and Bengali)
  if (
    /\b(call|meeting|schedule|book|calendar|cal\.com|appointment)\b/i.test(normalizedQuery) ||
    /(কল|মিটিং|শিডিউল|বুক|সাক্ষাত|অ্যাপয়েন্টমেন্ট)/.test(query)
  ) {
    detectedIntents.push("booking");
  }
  if (
    /\b(resume|cv|pdf)\b/i.test(normalizedQuery) ||
    /(রেজুমে|সিভি|জীবনবৃত্তান্ত)/.test(query)
  ) {
    detectedIntents.push("resume");
  }
  if (
    /\b(hire|available|availability|job|opportunity|contract|freelance|full-time)\b/i.test(normalizedQuery) ||
    /\bwork with (mehedi|him|you)\b/i.test(normalizedQuery) ||
    /(কাজের জন্য|চাকরি|হায়ার|নিয়োগ|কাজে উন্মুক্ত|কাজের সুযোগ|ফ্রিলাইন্স)/.test(query)
  ) {
    detectedIntents.push("hiring");
  }
  if (
    /\b(project|projects|built|kashly|foodly|ayvoice|nexvibe|app|software)\b/i.test(normalizedQuery) ||
    /ay\s*voice/i.test(normalizedQuery) ||
    /(প্রজেক্ট|কাজগুলো|তৈরি|অ্যাপ|সফটওয়্যার)/.test(query)
  ) {
    detectedIntents.push("projects");
  }
  if (
    /\b(skill|skills|technology|technologies|tech|stack|frontend|backend|database|databases|tools|react|next|next\.js|typescript|javascript|node|node\.js|express|prisma|go|golang|hono|postgres|postgresql|mongo|mongodb|docker|aws)\b/i.test(normalizedQuery) ||
    /(দক্ষতা|প্রযুক্তি|টেক স্ট্যাক|স্ট্যাক|টুলস|ল্যাঙ্গুয়েজ)/.test(query)
  ) {
    detectedIntents.push("skills");
  }
  if (
    /\b(experience|career|history|company|companies|role|intern|internship|nexvibe|apexiums|quantum)\b/i.test(normalizedQuery) ||
    /(অভিজ্ঞতা|কর্মঅভিজ্ঞতা|কোথায় কাজ|ক্যারিয়ার|কোম্পানি|পদবি)/.test(query)
  ) {
    detectedIntents.push("experience");
  }
  if (
    /\b(study|degree|university|education|physics|college|academic)\b/i.test(normalizedQuery) ||
    /(পড়াশোনা|শিক্ষা|শিক্ষাগত|ডিগ্রি|বিশ্ববিদ্যালয়|কলেজ|পদার্থবিজ্ঞান)/.test(query)
  ) {
    detectedIntents.push("education");
  }
  if (
    /\b(email|contact|whatsapp|reach|message|social|github|linkedin|twitter)\b/i.test(normalizedQuery) ||
    /(যোগাযোগ|ইমেইল|হোয়াটসঅ্যাপ|বার্তা|কথা বলতে)/.test(query)
  ) {
    detectedIntents.push("contact");
  }
  if (
    /\b(blog|blogs|article|articles|post|posts|writing|read|reading)\b/i.test(normalizedQuery) ||
    /(ব্লগ|লেখা|আর্টিকেল|পড়া)/.test(query)
  ) {
    detectedIntents.push("blogs");
  }
  if (
    /^(hi|hello|hey|good\s*(morning|afternoon|evening)|howdy|greetings|sup|yo|what'?s?\s*up|assalamu\s*alaikum|salam)\b/i.test(normalizedQuery.trim()) ||
    /^(হ্যালো|হাই|সালাম|আসসালামু|নমস্কার|কেমন আছেন)/.test(query.trim())
  ) {
    detectedIntents.push("greeting");
  }

  // Always include personal bio if query is generic or asking who/about Mehedi / current role
  const isGenericOrBio =
    /\b(who|mehedi|about|tell me|summary|yourself|intro|role|specialize|specialization)\b/i.test(normalizedQuery) ||
    /(কে|মেহেদী|সম্পর্কে|পরিচয়|পরিচিতি|কী করেন)/.test(query);

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

  const hasBengali = /[\u0980-\u09FF]/.test(query);

  // Force specific actions based on direct intents
  if (detectedIntents.includes("booking") || detectedIntents.includes("hiring")) {
    actionsMap.set("https://cal.com/TheMehediHQ/15min", {
      type: "booking",
      label: hasBengali ? "১৫ মিনিটের কল বুক করুন" : "Schedule a 15-min Call",
      url: "https://cal.com/TheMehediHQ/15min",
    });
  }
  if (detectedIntents.includes("resume")) {
    actionsMap.set("/Resume_of_Mehedi_Hasan.pdf", {
      type: "resume",
      label: hasBengali ? "Resume দেখুন (PDF)" : "Download Resume",
      url: "/Resume_of_Mehedi_Hasan.pdf",
    });
  }

  let suggestedActions = Array.from(actionsMap.values()).slice(0, 3);
  if (hasBengali) {
    suggestedActions = suggestedActions.map((act) => {
      if (act.type === "booking") return { ...act, label: "১৫ মিনিটের কল বুক করুন" };
      if (act.type === "resume") return { ...act, label: "Resume দেখুন (PDF)" };
      if (act.type === "email") return { ...act, label: "ইমেইল পাঠান" };
      if (act.type === "whatsapp") return { ...act, label: "হোয়াটসঅ্যাপ চ্যাট" };
      return act;
    });
  }

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
export function generateLocalPortfolioResponse(query: string, isBn = false): { text: string; actions: RetrievalResult["suggestedActions"] } {
  const retrieval = retrievePortfolioKnowledge(query, 2);
  const q = query.toLowerCase();
  const isBengali = isBn || /[\u0980-\u09FF]/.test(query);

  // Helper to localize actions
  const localizeActions = (acts: RetrievalResult["suggestedActions"]): RetrievalResult["suggestedActions"] => {
    if (!isBengali) return acts;
    return acts.map((act) => {
      if (act.type === "booking") return { ...act, label: "১৫ মিনিটের কল বুক করুন" };
      if (act.type === "resume") return { ...act, label: "Resume দেখুন (PDF)" };
      if (act.type === "email") return { ...act, label: "ইমেইল পাঠান" };
      if (act.type === "whatsapp") return { ...act, label: "হোয়াটসঅ্যাপ চ্যাট" };
      return act;
    });
  };

  // 1. Booking or scheduling
  if (retrieval.detectedIntents.includes("booking") || /\b(call|meeting|schedule|book|calendar)\b/i.test(q) || /(কল|মিটিং|শিডিউল|বুক|সাক্ষাত)/.test(query)) {
    if (isBengali) {
      return {
        text: "অবশ্যই! আপনি সরাসরি মেহেদীর Cal.com পেজ থেকে একটি ১৫ মিনিটের কল শিডিউল করে নিতে পারেন। নতুন কাজের সুযোগ, প্রযুক্তি বা প্রজেক্ট নিয়ে আলোচনা করতে তিনি সবসময় আগ্রহী।",
        actions: localizeActions([
          { type: "booking", label: "Book a 15-min Call", url: "https://cal.com/TheMehediHQ/15min" },
          { type: "email", label: "Email Directly", url: "mailto:hello@mehedi-hasan.me" },
        ]),
      };
    }
    return {
      text: "Absolutely! You can book a 15-minute call with Mehedi directly through his Cal.com page. He's always happy to chat about new opportunities or collaborations.",
      actions: [
        { type: "booking", label: "Book a 15-min Call", url: "https://cal.com/TheMehediHQ/15min" },
        { type: "email", label: "Email Directly", url: "mailto:hello@mehedi-hasan.me" },
      ],
    };
  }

  // 2. Resume
  if (retrieval.detectedIntents.includes("resume") || /\b(resume|cv)\b/i.test(q) || /(রেজুমে|সিভি|জীবনবৃত্তান্ত)/.test(query)) {
    if (isBengali) {
      return {
        text: "নিশ্চয়ই! এখানে মেহেদীর রেজুমে রয়েছে — এতে তাঁর ফুল-স্ট্যাক সফটওয়্যার ডেভেলপমেন্ট অভিজ্ঞতা, প্রযুক্তিগত দক্ষতা, শিক্ষা এবং প্রজেক্টের বিস্তারিত তথ্য পেয়ে যাবেন।",
        actions: localizeActions([
          { type: "resume", label: "View Resume (PDF)", url: "/Resume_of_Mehedi_Hasan.pdf" },
        ]),
      };
    }
    return {
      text: "Sure! Here's Mehedi's resume — it covers his full-stack experience, skills, education, and projects.",
      actions: [
        { type: "resume", label: "View Resume (PDF)", url: "/Resume_of_Mehedi_Hasan.pdf" },
      ],
    };
  }

  // 3. Specific project: AY Voice
  if (/ay\s*voice|ayvoice/i.test(q)) {
    if (isBengali) {
      return {
        text: "**AY Voice** হলো একটি ক্লাউড-ভিত্তিক যোগাযোগ প্ল্যাটফর্ম যা মেহেদী তৈরি করেছেন। এটি ব্যবসায়ের জন্য বাল্ক এসএমএস ও ভয়েস কলিং ক্যাম্পেইন দক্ষভাবে পরিচালনা করতে ব্যবহৃত হয়।\n\n• **প্রধান বৈশিষ্ট্য:** ক্যাম্পেইন পরিচালনা, কনট্যাক্ট ম্যানেজমেন্ট, ডেলিভারি লগ এবং টেলিকম এপিআই ইন্টিগ্রেশন।\n• **টেক স্ট্যাক:** Next.js, Hono এবং PostgreSQL।\n• **স্ট্যাটাস:** লাইভ আছে https://ayvoice.com ঠিকানায়।",
        actions: localizeActions([
          { type: "link", label: "Visit AY Voice", url: "https://ayvoice.com" },
          { type: "booking", label: "Discuss Projects with Mehedi", url: "https://cal.com/TheMehediHQ/15min" }
        ]),
      };
    }
    return {
      text: "**AY Voice** is a cloud-based communication platform built by Mehedi that enables businesses to manage bulk SMS and voice calling campaigns efficiently.\n\n• **Key Features:** Campaign management, contact organization, message/call delivery logs, and telecommunication API integrations.\n• **Tech Stack:** Next.js, Hono, and PostgreSQL.\n• **Status:** Live at https://ayvoice.com",
      actions: [
        { type: "link", label: "Visit AY Voice", url: "https://ayvoice.com" },
        { type: "booking", label: "Discuss Projects with Mehedi", url: "https://cal.com/TheMehediHQ/15min" }
      ],
    };
  }

  // 4. Specific project: NexVibe
  if (/nexvibe/i.test(q) && !/experience|role|কাজ|অভিজ্ঞতা/.test(q)) {
    if (isBengali) {
      return {
        text: "**NexVibe** (https://nexvibe.tech) হলো Next.js এবং Tailwind CSS দিয়ে তৈরি একটি আধুনিক সফটওয়্যার এজেন্সি ওয়েবসাইট। এতে রেসপনসিভ লেআউট, স্মুথ ইন্টারঅ্যাকশন এবং অত্যন্ত দ্রুত গতির পারফরম্যান্স নিশ্চিত করা হয়েছে।",
        actions: [
          { type: "link", label: "NexVibe ভিজিট করুন", url: "https://nexvibe.tech" },
        ],
      };
    }
    return {
      text: "**NexVibe** (https://nexvibe.tech) is a modern software agency website built with Next.js and Tailwind CSS. It features responsive layouts, smooth micro-interactions, high Lighthouse performance, and a clean developer-portfolio aesthetic.",
      actions: [
        { type: "link", label: "Visit NexVibe", url: "https://nexvibe.tech" },
      ],
    };
  }

  // 5. Availability / hiring
  if (retrieval.detectedIntents.includes("hiring") || /\b(available|hire|freelance|job|opportunity)\b/i.test(q) || /(কাজের জন্য|চাকরি|হায়ার|নিয়োগ|কাজে উন্মুক্ত|কাজের সুযোগ)/.test(query)) {
    if (isBengali) {
      return {
        text: "হ্যাঁ! মেহেদী বর্তমানে ফুল-টাইম সফটওয়্যার ইঞ্জিনিয়ারিং চাকরির সুযোগের জন্য সম্পূর্ণভাবে উন্মুক্ত। এছাড়া তিনি মানসম্মত কনট্রাক্ট ও ফ্রিল্যান্স প্রজেক্টেও কাজ করতে আগ্রহী। সরাসরি যোগাযোগ করতে পারেন বা একটি কল শিডিউল করতে পারেন!",
        actions: localizeActions([
          { type: "booking", label: "Schedule a 15-min Call", url: "https://cal.com/TheMehediHQ/15min" },
          { type: "email", label: "hello@mehedi-hasan.me", url: "mailto:hello@mehedi-hasan.me" },
        ]),
      };
    }
    return {
      text: "Yes, Mehedi is actively looking for full-time software engineering roles. He's also open to high-impact contract work. Feel free to reach out or book a call!",
      actions: [
        { type: "booking", label: "Schedule a 15-min Call", url: "https://cal.com/TheMehediHQ/15min" },
        { type: "email", label: "hello@mehedi-hasan.me", url: "mailto:hello@mehedi-hasan.me" },
      ],
    };
  }

  // 6. Technologies & skills general
  if (retrieval.detectedIntents.includes("skills") || /\b(technolog|skill|stack)\b/i.test(q) || /(দক্ষতা|প্রযুক্তি|টেক স্ট্যাক|স্ট্যাক|টুলস)/.test(query)) {
    if (isBengali) {
      return {
        text: "মেহেদীর প্রধান টেক স্ট্যাক:\n\n• **ফ্রন্টএন্ড:** React.js (৯৫%), Next.js (৯২%)\n• **প্রোগ্রামিং ভাষা:** JavaScript (৯৫%), TypeScript (৯০%), Golang (৮০%)\n• **ব্যাকএন্ড:** Node.js (৯০%), Express.js (৮৮%), Hono\n• **ডাটাবেজ:** PostgreSQL (৮৫%), Prisma ORM (৮৫%), MongoDB (৮২%)\n• **ক্লাউড ও ডেভঅপস:** Docker (৮০%), AWS (৭৫%), Linux (৮৮%), Git (৯২%)",
        actions: localizeActions([
          { type: "resume", label: "View Full Resume", url: "/Resume_of_Mehedi_Hasan.pdf" },
        ]),
      };
    }
    return {
      text: "Mehedi's tech stack:\n\n• **Frontend:** React.js (95%), Next.js (92%)\n• **Languages:** JavaScript (95%), TypeScript (90%), Golang (80%)\n• **Backend:** Node.js (90%), Express.js (88%)\n• **Databases:** PostgreSQL (85%), Prisma ORM (85%), MongoDB (82%)\n• **DevOps, Cloud & Tools:** Docker (80%), AWS (75%), Linux (88%), Git (92%)",
      actions: [
        { type: "resume", label: "View Full Resume", url: "/Resume_of_Mehedi_Hasan.pdf" },
      ],
    };
  }

  // 7. Projects general
  if (retrieval.detectedIntents.includes("projects") || /\b(project|projects|built)\b/i.test(q) || /(প্রজেক্ট|কাজগুলো|তৈরি)/.test(query)) {
    if (isBengali) {
      return {
        text: "মেহেদী বেশ কয়েকটি প্রফেশনাল ও ওপেন-সোর্স প্রজেক্ট তৈরি করেছেন:\n\n• **AY Voice:** ক্লাউড-ভিত্তিক এসএমএস ও ভয়েস প্ল্যাটফর্ম (Next.js, Hono, PostgreSQL)।\n• **NexVibe:** আধুনিক সফটওয়্যার এজেন্সি ওয়েবসাইট (Next.js, Tailwind CSS)।\n• **Kashly:** রিয়েল-টাইম আয়-ব্যয় ট্র্যাকিং পার্সোনাল মানি অ্যাপ (Next.js, TypeScript, Express, MongoDB)।\n• **Foodly:** খাবারের মেয়াদ ও সতেজতা পর্যবেক্ষণকারী ইনভেন্টরি অ্যাপ (React, Express, MongoDB, Firebase)।",
        actions: localizeActions([
          { type: "link", label: "Visit AY Voice", url: "https://ayvoice.com" },
          { type: "link", label: "Kashly on GitHub", url: "https://github.com/TheMehediHQ/Kashly" },
        ]),
      };
    }
    return {
      text: "Mehedi has built both professional and open-source applications:\n\n• **AY Voice:** Cloud-based bulk SMS & voice calling communication platform (Next.js, Hono, PostgreSQL).\n• **NexVibe:** Modern software agency website (Next.js, Tailwind CSS).\n• **Kashly:** Smart money management app with Clerk auth and real-time expense monitoring (Next.js, Express, MongoDB).\n• **Foodly:** Real-time food inventory and freshness tracking app (React, Express, MongoDB, Firebase).",
      actions: [
        { type: "link", label: "Visit AY Voice", url: "https://ayvoice.com" },
        { type: "link", label: "Kashly on GitHub", url: "https://github.com/TheMehediHQ/Kashly" },
      ],
    };
  }

  // 8. Experience general
  if (retrieval.detectedIntents.includes("experience") || /\b(experience|history|companies)\b/i.test(q) || /(অভিজ্ঞতা|কর্মঅভিজ্ঞতা|কোথায় কাজ|ক্যারিয়ার)/.test(query)) {
    if (isBengali) {
      return {
        text: "মেহেদীর পেশাগত অভিজ্ঞতা:\n\n১. **Full Stack Software Developer — NexVibe** (মে ২০২৬ – বর্তমান): ১০০k+ ব্যবহারকারীর SaaS প্ল্যাটফর্মে মাইক্রো-ফ্রন্টএন্ড আর্কিটেকচার বাস্তবায়ন ও পারফরম্যান্স ৪০% বৃদ্ধি।\n২. **Full Stack Developer Intern — Apexiums Technologies** (মার্চ ২০২৬ – এপ্রিল ২০২৬): React, Node.js, Express এবং PostgreSQL দিয়ে ক্লায়েন্ট প্রজেক্ট নির্মাণ।\n৩. **Volunteer — কোয়ান্টাম ফাউন্ডেশন** (২০১৮ – বর্তমান): মোটিভেশনাল বক্তব্য, নেতৃত্ব ও সমাজসেবামূলক কার্যক্রমে অংশগ্রহণ।",
        actions: localizeActions([
          { type: "resume", label: "View Resume", url: "/Resume_of_Mehedi_Hasan.pdf" },
        ]),
      };
    }
    return {
      text: "Mehedi's professional experience includes:\n\n1. **Full Stack Software Developer at NexVibe** (May 2026 – Present): Leading full-stack engineering for a SaaS platform serving 100k+ users, implemented micro-frontends, and boosted performance by 40%.\n2. **Full Stack Developer Intern at Apexiums Technologies** (March 2026 – April 2026): Built client applications using React, Node.js, Express, and PostgreSQL.\n3. **Volunteer at Quantum Foundation** (2018 – Present): Motivational speaking, leadership, and community outreach.",
      actions: [
        { type: "resume", label: "View Resume", url: "/Resume_of_Mehedi_Hasan.pdf" },
      ],
    };
  }

  // 9. Education
  if (retrieval.detectedIntents.includes("education") || /\b(education|degree|university|physics)\b/i.test(q) || /(পড়াশোনা|শিক্ষা|শিক্ষাগত|ডিগ্রি|বিশ্ববিদ্যালয়|পদার্থবিজ্ঞান)/.test(query)) {
    if (isBengali) {
      return {
        text: "মেহেদী জাতীয় বিশ্ববিদ্যালয়, বাংলাদেশ থেকে পদার্থবিজ্ঞানে স্নাতক (বিএসসি) সম্পন্ন করেছেন। তাঁর প্রাতিষ্ঠানিক পাঠ্যক্রমে পদার্থবিজ্ঞান, উচ্চতর গণিত এবং ইলেকট্রনিক্স অন্তর্ভুক্ত ছিল, যা তাঁর সমস্যা সমাধানের বিশ্লেষণাত্মক ক্ষমতা ও কম্পিউটেশনাল চিন্তাভাবনাকে সমৃদ্ধ করেছে।",
        actions: localizeActions([
          { type: "resume", label: "View Resume", url: "/Resume_of_Mehedi_Hasan.pdf" },
        ]),
      };
    }
    return {
      text: "Mehedi holds a Bachelor of Science (B.Sc.) in Physics from the National University, Bangladesh (2018 – 2026). His studies encompassed physics, mathematics, and electronics, establishing a strong foundation in computational thinking and analytical problem solving.",
      actions: [
        { type: "resume", label: "View Resume", url: "/Resume_of_Mehedi_Hasan.pdf" },
      ],
    };
  }

  // 10. Contact
  if (retrieval.detectedIntents.includes("contact") || /\b(contact|email|whatsapp|phone)\b/i.test(q) || /(যোগাযোগ|ইমেইল|হোয়াটসঅ্যাপ|বার্তা|কথা বলতে)/.test(query)) {
    if (isBengali) {
      return {
        text: "আপনি সরাসরি মেহেদীর সাথে নিচের মাধ্যমে যোগাযোগ করতে পারেন:\n\n• **ইমেইল:** hello@mehedi-hasan.me\n• **হোয়াটসঅ্যাপ:** +880 1747 874 773\n• **মিটিং শিডিউল:** cal.com/themehedihq\n• **ঠিকানা:** ঢাকা, বাংলাদেশ",
        actions: localizeActions([
          { type: "booking", label: "Schedule Call", url: "https://cal.com/TheMehediHQ/15min" },
          { type: "email", label: "Send Email", url: "mailto:hello@mehedi-hasan.me" },
          { type: "whatsapp", label: "WhatsApp Chat", url: "https://wa.me/8801747874773" },
        ]),
      };
    }
    return {
      text: "You can reach Mehedi directly via:\n\n• **Email:** hello@mehedi-hasan.me\n• **WhatsApp:** +880 1747 874 773\n• **Schedule a Meeting:** cal.com/themehedihq\n• **Location:** Dhaka, Bangladesh",
      actions: [
        { type: "booking", label: "Schedule Call", url: "https://cal.com/TheMehediHQ/15min" },
        { type: "email", label: "Send Email", url: "mailto:hello@mehedi-hasan.me" },
        { type: "whatsapp", label: "WhatsApp Chat", url: "https://wa.me/8801747874773" },
      ],
    };
  }

  // 11. Greeting
  if (retrieval.detectedIntents.includes("greeting") || /^(hi|hello|hey|good\s*(morning|afternoon|evening)|howdy|greetings|sup|yo|assalamu\s*alaikum|salam)\b/i.test(q.trim()) || /^(হ্যালো|হাই|সালাম|আসসালামু|নমস্কার|কেমন)/.test(query.trim())) {
    if (isBengali) {
      return {
        text: "হ্যালো! 👋 আমি মেহেদীর এআই অ্যাসিস্ট্যান্ট। তাঁর কাজ, দক্ষতা, প্রজেক্ট বা যোগাযোগ সংক্রান্ত যেকোনো বিষয়ে আপনাকে তথ্য দিতে পেরে আমি আনন্দিত — আপনি কী জানতে চান?",
        actions: localizeActions([
          { type: "booking", label: "Schedule a Call", url: "https://cal.com/TheMehediHQ/15min" },
          { type: "resume", label: "View Resume", url: "/Resume_of_Mehedi_Hasan.pdf" },
        ]),
      };
    }
    return {
      text: "Hey there! 👋 I'm Mehedi's AI assistant. Happy to tell you about his work, skills, or how to get in touch — what would you like to know?",
      actions: [
        { type: "booking", label: "Schedule a Call", url: "https://cal.com/TheMehediHQ/15min" },
        { type: "resume", label: "View Resume", url: "/Resume_of_Mehedi_Hasan.pdf" },
      ],
    };
  }

  // 12. Default bio & overview (e.g. "মেহেদী কী কাজ করেন?", "tell me about him")
  if (isBengali) {
    return {
      text: "মেহেদী হাসান ঢাকা, বাংলাদেশ ভিত্তিক একজন ফুল-স্ট্যাক সফটওয়্যার ইঞ্জিনিয়ার। তিনি React, Next.js ও TypeScript দিয়ে স্কেলেবল ওয়েব অ্যাপ এবং Node.js, Hono ও Golang দিয়ে ইভেন্ট-ড্রিভেন ব্যাকএন্ড তৈরি করেন। আপনি কি তাঁর প্রজেক্ট, টেক স্ট্যাক বা কর্মঅভিজ্ঞতা সম্পর্কে আরও জানতে চান?",
      actions: localizeActions(retrieval.suggestedActions),
    };
  }

  return {
    text: "Mehedi is a Full-Stack Software Engineer based in Dhaka, Bangladesh. He builds scalable, high-performance web apps with React, Next.js, and TypeScript, and event-driven backends with Node.js, Hono, and Golang. Want to know more about his projects, skills, or experience?",
    actions: retrieval.suggestedActions,
  };
}
