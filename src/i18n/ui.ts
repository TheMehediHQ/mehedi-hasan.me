export const languages = {
  en: "English",
  bn: "বাংলা",
} as const;

export type SupportedLanguage = keyof typeof languages;

export const defaultLang: SupportedLanguage = "en";

export const ui = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "nav.blog": "Blog",
    "nav.certificates": "Certificates",
    "nav.inspiration": "Inspiration",
    "nav.more": "More",
    "nav.menu": "Menu",
    "nav.close": "Close",

    // Section Titles
    "section.experience": "Experience",
    "section.projects": "Projects",
    "section.skills": "Tech Stack",
    "section.education": "Education",
    "section.github": "GitHub Activity",
    "section.contact": "Contact Me",

    // Contact Section
    "contact.availability": "I'm currently available for full‑time opportunities. Feel free to reach out.",
    "contact.email": "Email",
    "contact.location": "Location",
    "contact.locationValue": "Dhaka, Bangladesh",
    "contact.whatsapp": "WhatsApp",
    "contact.scheduleCall": "Schedule a Call",
    "contact.social": "Social",
    "contact.name": "Name",
    "contact.namePlaceholder": "Your name",
    "contact.emailLabel": "Email",
    "contact.emailPlaceholder": "your@email.com",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Tell me about the position or project...",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Message sent successfully! I'll get back to you within 24–48 hours.",
    "contact.errorRequired": "All fields are required",
    "contact.errorEmail": "Please enter a valid email address",
    "contact.errorNetwork": "Network error. Please try again.",
    "contact.errorGeneric": "Failed to send message",

    // Blog
    "blog.title": "Blog",
    "blog.subtitle": "Writing code and sharing the journey.",
    "blog.searchPlaceholder": "Search articles...",
    "blog.all": "All",
    "blog.readTime": "min read",
    "blog.noArticles": "No articles found.",
    "blog.readArticle": "Read article",
    "blog.readMore": "Read more",
    "blog.emptyTitle": "No posts found",
    "blog.emptySubtitle": "Try a different search term or category.",

    // Newsletter
    "newsletter.title": "Subscribe to the Newsletter",
    "newsletter.subtitle": "Get notified when I publish new blog posts. No spam, unsubscribe anytime.",
    "newsletter.placeholder": "your@email.com",
    "newsletter.btn": "Subscribe",
    "newsletter.sending": "Subscribing...",
    "newsletter.success": "Thank you for subscribing! Please check your inbox.",

    // Footer & Misc
    "footer.copyright": "© 2026 Mehedi Hasan",
    "footer.lastVisitor": "Last visitor",
    "footer.justNow": "just now",
    "footer.minAgo": "min ago",
    "footer.hoursAgo": "h ago",
    "footer.daysAgo": "d ago",

    // 404
    "404.title": "404 — Page Not Found",
    "404.description": "The page you're looking for doesn't exist.",
    "404.notFound": "not found",
    "404.message": "The page you're looking for is no longer available.",
    "404.contactMe": "Contact me",
    "404.index": "Index",

    // Chatbot
    "chatbot.askMe": "Ask Me",
    "chatbot.title": "AI Portfolio Assistant",
    "chatbot.grounded": "Grounded in Mehedi's portfolio",
    "chatbot.welcome": "Hey there! 👋 I'm Mehedi's AI assistant. Ask me anything about his work, skills, projects, or how to get in touch — I'm here to help!",
    "chatbot.thinking": "Thinking...",
    "chatbot.placeholder": "Ask about skills, projects, experience...",
    "chatbot.groundedNote": "Answers are grounded in Mehedi's actual portfolio data.",
    "chatbot.prompt1": "What does Mehedi do?",
    "chatbot.prompt2": "What's his tech stack?",
    "chatbot.prompt3": "Show me his projects",
    "chatbot.prompt4": "Where has he worked?",
    "chatbot.prompt5": "Is he available for hire?",
    "chatbot.prompt6": "Can I book a call?",

    // Projects UI
    "project.liveDemo": "Live Demo",
    "project.github": "GitHub",
  },
  bn: {
    // Navigation
    "nav.home": "হোম",
    "nav.experience": "অভিজ্ঞতা",
    "nav.projects": "প্রজেক্ট",
    "nav.skills": "দক্ষতা",
    "nav.education": "শিক্ষা",
    "nav.contact": "যোগাযোগ",
    "nav.blog": "ব্লগ",
    "nav.certificates": "সার্টিফিকেট",
    "nav.inspiration": "অনুপ্রেরণা",
    "nav.more": "আরও",
    "nav.menu": "মেনু",
    "nav.close": "বন্ধ",

    // Section Titles
    "section.experience": "অভিজ্ঞতা",
    "section.projects": "প্রজেক্ট",
    "section.skills": "টেক স্ট্যাক",
    "section.education": "শিক্ষা",
    "section.github": "গিটহাব অ্যাক্টিভিটি",
    "section.contact": "যোগাযোগ",

    // Contact Section
    "contact.availability": "আমি বর্তমানে ফুল-টাইম কাজের সুযোগের জন্য উন্মুক্ত। যেকোনো প্রয়োজনে নির্দ্বিধায় যোগাযোগ করতে পারেন।",
    "contact.email": "ইমেইল",
    "contact.location": "ঠিকানা",
    "contact.locationValue": "ঢাকা, বাংলাদেশ",
    "contact.whatsapp": "হোয়াটসঅ্যাপ",
    "contact.scheduleCall": "মিটিং শিডিউল করুন",
    "contact.social": "সোশ্যাল মিডিয়া",
    "contact.name": "নাম",
    "contact.namePlaceholder": "আপনার নাম",
    "contact.emailLabel": "ইমেইল",
    "contact.emailPlaceholder": "আপনার ইমেইল ঠিকানা",
    "contact.message": "বার্তা",
    "contact.messagePlaceholder": "কাজের সুযোগ বা প্রজেক্ট সম্পর্কে লিখুন...",
    "contact.send": "বার্তা পাঠান",
    "contact.sending": "পাঠানো হচ্ছে...",
    "contact.success": "বার্তা সফলভাবে পাঠানো হয়েছে! আগামী ২৪–৪৮ ঘণ্টার মধ্যে উত্তর দেওয়া হবে।",
    "contact.errorRequired": "সবগুলো ঘর পূরণ করা আবশ্যক",
    "contact.errorEmail": "দয়া করে সঠিক ইমেইল ঠিকানা দিন",
    "contact.errorNetwork": "নেটওয়ার্ক ত্রুটি। দয়া করে আবার চেষ্টা করুন।",
    "contact.errorGeneric": "বার্তা পাঠাতে ব্যর্থ হয়েছে",

    // Blog
    "blog.title": "ব্লগ",
    "blog.subtitle": "প্রযুক্তি, কোডিং এবং জীবনের নানা অভিজ্ঞতা।",
    "blog.searchPlaceholder": "লেখা খুঁজুন...",
    "blog.all": "সব",
    "blog.readTime": "মিনিট পাঠ",
    "blog.noArticles": "কোনো লেখা পাওয়া যায়নি।",
    "blog.readArticle": "পড়ুন",
    "blog.readMore": "পড়ুন",
    "blog.emptyTitle": "কোনো লেখা পাওয়া যায়নি",
    "blog.emptySubtitle": "অন্য কোনো শব্দ বা ক্যাটাগরি দিয়ে আবার চেষ্টা করুন।",

    // Newsletter
    "newsletter.title": "নিউজ লেটারে যুক্ত থাকুন",
    "newsletter.subtitle": "নতুন কোনো লেখা প্রকাশিত হলে সাথে সাথে ইমেইলে পেয়ে যাবেন। কোনো স্প্যাম নেই।",
    "newsletter.placeholder": "আপনার ইমেইল ঠিকানা দিন",
    "newsletter.btn": "সাবস্ক্রাইব করুন",
    "newsletter.sending": "যুক্ত করা হচ্ছে...",
    "newsletter.success": "সাবস্ক্রাইব করার জন্য ধন্যবাদ! অনুগ্রহ করে ইনবক্স চেক করুন।",

    // Footer & Misc
    "footer.copyright": "© 2026 Mehedi Hasan",
    "footer.lastVisitor": "Last visitor",
    "footer.justNow": "just now",
    "footer.minAgo": "min ago",
    "footer.hoursAgo": "h ago",
    "footer.daysAgo": "d ago",

    // 404
    "404.title": "৪০৪ — পাতাটি খুঁজে পাওয়া যায়নি",
    "404.description": "আপনি যে পাতাটি খুঁজছেন তা বিদ্যমান নেই।",
    "404.notFound": "পাওয়া যায়নি",
    "404.message": "আপনি যে পাতাটি খুঁজছেন তা আর পাওয়া যাচ্ছে না।",
    "404.contactMe": "যোগাযোগ করুন",
    "404.index": "হোমে ফিরে যান",

    // Chatbot
    "chatbot.askMe": "জিজ্ঞাসা করুন",
    "chatbot.title": "এআই পোর্টফোলিও অ্যাসিস্ট্যান্ট",
    "chatbot.grounded": "মেহেদীর পোর্টফোলিওর তথ্যের ওপর ভিত্তি করে",
    "chatbot.welcome": "হ্যালো! 👋 আমি মেহেদীর এআই অ্যাসিস্ট্যান্ট। তাঁর কাজ, দক্ষতা, প্রজেক্ট বা যোগাযোগ সংক্রান্ত যেকোনো বিষয়ে আমাকে প্রশ্ন করতে পারেন!",
    "chatbot.thinking": "চিন্তা করছে...",
    "chatbot.placeholder": "দক্ষতা, প্রজেক্ট বা অভিজ্ঞতা সম্পর্কে জিজ্ঞাসা করুন...",
    "chatbot.groundedNote": "উত্তরগুলো মেহেদীর পোর্টফোলিওর তথ্যের ওপর ভিত্তি করে তৈরি।",
    "chatbot.prompt1": "মেহেদী কী কাজ করেন?",
    "chatbot.prompt2": "তাঁর টেক স্ট্যাক কী কী?",
    "chatbot.prompt3": "তাঁর প্রজেক্টগুলো দেখাও",
    "chatbot.prompt4": "তিনি কোথায় কাজ করেছেন?",
    "chatbot.prompt5": "তিনি কি কাজের জন্য উন্মুক্ত?",
    "chatbot.prompt6": "কীভাবে তাঁর সাথে কল বুক করব?",

    // Projects UI
    "project.liveDemo": "লাইভ ডেমো",
    "project.github": "গিটহাব",
  },
} as const;

export function useTranslations(lang?: string) {
  const currentLang = (lang === "bn" ? "bn" : "en") as SupportedLanguage;
  return function t(key: keyof (typeof ui)["en"]): string {
    return ui[currentLang]?.[key] ?? ui[defaultLang][key];
  };
}
