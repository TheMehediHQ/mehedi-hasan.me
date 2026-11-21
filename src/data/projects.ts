import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "AY Voice",
    description:
      "A cloud-based SMS and voice platform for businesses to manage campaigns, contacts, and bulk communications efficiently.",
    image: "/projects/ayvoice.webp",
    technologies: ["Next.js", "Hono", "PostgreSQL", "Docker"],
    github: "https://github.com/TheMehediHQ/ayvoice-case-study",
    liveDemo: "https://ayvoice.com",
    details:
      "Developed a communication platform with campaign management, contact organization, message history, and third-party API integration for bulk SMS and voice call services.",
    type: "professional",
  },
  {
    id: "2",
    title: "Kashly",
    description:
      "A modern money management app for tracking income, expenses, budgets, and financial goals with real-time dashboards.",
    image: "/projects/kashly.webp",
    technologies: [
      "Next.js",
      "TypeScript",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    github: "https://github.com/TheMehediHQ/Kashly",
    liveDemo: "https://kashly.mehedi-hasan.me",
    details:
      "Built a full-stack financial tracking platform with secure authentication via Clerk, real-time expense monitoring, smart budgeting, categorized transaction history, and a responsive UI using Next.js, Express, and MongoDB.",
    type: "personal",
  },
  {
    id: "3",
    title: "Foodly",
    description:
      "Foodly is a smart food inventory app that tracks expiry dates, monitors freshness, and helps prevent food waste.",
    image: "/projects/foodly.webp",
    technologies: [
      "React",
      "Express",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
    ],
    github: "https://github.com/TheMehediHQ/Foodly",
    liveDemo: "https://foodly.mehedi-hasan.me",
    details:
      "Built a full-stack food inventory application with secure authentication via Clerk, expiry date tracking, freshness monitoring, waste prevention, and a responsive UI using React, Express, MongoDB, Firebase, and Tailwind CSS.",
    type: "personal",
  }
];

export const projectsBn: Project[] = [
  {
    id: "1",
    title: "AY Voice",
    description:
      "ব্যবসায়িক ক্যাম্পেইন, কনট্যাক্ট তালিকা এবং বাল্ক যোগাযোগ দক্ষভাবে পরিচালনার জন্য ক্লাউড-ভিত্তিক এসএমএস ও ভয়েস প্ল্যাটফর্ম।",
    image: "/projects/ayvoice.webp",
    technologies: ["Next.js", "Hono", "PostgreSQL", "Docker"],
    github: "https://github.com/TheMehediHQ/ayvoice-case-study",
    liveDemo: "https://ayvoice.com",
    details:
      "ক্যাম্পেইন পরিচালনা, কনট্যাক্ট ম্যানেজমেন্ট এবং বাল্ক এসএমএস ও ভয়েস কল সার্ভিসের জন্য এপিআই ইন্টিগ্রেশনসহ একটি পূর্ণাঙ্গ যোগাযোগ প্ল্যাটফর্ম তৈরি।",
    type: "professional",
  },
  {
    id: "2",
    title: "Kashly",
    description:
      "আয়, ব্যয়, বাজেট এবং আর্থিক লক্ষ্য রিয়েল-টাইম ড্যাশবোর্ডে ট্র্যাক করার জন্য একটি আধুনিক পার্সোনাল মানি ম্যানেজমেন্ট অ্যাপ।",
    image: "/projects/kashly.webp",
    technologies: [
      "Next.js",
      "TypeScript",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    github: "https://github.com/TheMehediHQ/Kashly",
    liveDemo: "https://kashly.mehedi-hasan.me",
    details:
      "নিরাপদ অথেনটিকেশন, রিয়েল-টাইম খরচ ট্র্যাকিং এবং স্মার্ট বাজেট ক্যাটাগরি নিয়ে তৈরি ফুল-স্ট্যাক আর্থিক ট্র্যাকিং প্ল্যাটফর্ম।",
    type: "personal",
  },
  {
    id: "3",
    title: "Foodly",
    description:
      "খাবারের মেয়াদোত্তীর্ণ তারিখ ট্র্যাক, সতেজতা পর্যবেক্ষণ এবং খাদ্য অপচয় রোধে সহায়তাকারী একটি স্মার্ট ফুড ইনভেন্টরি অ্যাপ।",
    image: "/projects/foodly.webp",
    technologies: [
      "React",
      "Express",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
    ],
    github: "https://github.com/TheMehediHQ/Foodly",
    liveDemo: "https://foodly.mehedi-hasan.me",
    details:
      "মেয়াদোত্তীর্ণ হওয়ার তারিখ ট্র্যাকিং, স্মার্ট সতর্কতা এবং অপচয় রোধের সুবিধাসহ তৈরি ফুল-স্ট্যাক ফুড ইনভেন্টরি অ্যাপ্লিকেশন।",
    type: "personal",
  }
];
