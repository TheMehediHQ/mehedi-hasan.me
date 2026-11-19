import type { InspirationItem } from "@/types";

export const inspirationItems: InspirationItem[] = [
  {
    id: "1",
    type: "book",
    author: "Paulo Coelho",
    authorRole: "Novelist & Author of The Alchemist",
    authorImage: "/authors/paulo-coelho.webp",
    quote: "When you want something, all the universe conspires in helping you to achieve it.",
    sourceOrContext: "The Alchemist",
    reflection: "A timeless reminder of purpose and conviction. Pursuing ambitious engineering milestones and building meaningful products demands faith in the journey and relentless dedication through setbacks.",
    tags: ["Destiny", "Belief", "Perseverance", "The Alchemist"],
  },
  {
    id: "2",
    type: "philosophy",
    author: "Jalaluddin Rumi",
    authorRole: "13th-Century Sufi Mystic & Master Poet",
    authorImage: "/authors/jalaluddin-rumi.webp",
    quote: "The wound is the place where the Light enters you.",
    sourceOrContext: "The Masnavi",
    reflection: "Hardships, bugs, and failures are not defeats — they are transformative teachers that deepen wisdom, empathy, patience, and character both in engineering and in life.",
    tags: ["Mindfulness", "Spiritual Growth", "Resilience", "Inner Peace"],
  },
  {
    id: "3",
    type: "book",
    author: "Haruki Murakami",
    authorRole: "Novelist & Literary Master",
    authorImage: "/authors/haruki-murakami.webp",
    quote: "Pain is inevitable. Suffering is optional.",
    sourceOrContext: "What I Talk About When I Talk About Running",
    reflection: "Whether running long distances or debugging intricate distributed systems late into the night, discipline and positive mental framing transform hardship into steady, quiet progress.",
    tags: ["Discipline", "Endurance", "Mindset", "Craftsmanship"],
  },
];
