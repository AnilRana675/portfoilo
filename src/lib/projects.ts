export interface Project {
  slug: string;
  id: string;
  title: string;
  tagline: string;
  tags: string[];
  year: string;
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  description: string;
  features: string[];
  techStack: string[];
}

export const projects: Project[] = [
  {
    slug: "agro-connect",
    id: "01_",
    title: "Agro_Connect",
    tagline: "AI-powered agriculture support for Nepali farmers",
    tags: ["TypeScript", "AI/ML", "Node.js"],
    year: "2025",
    role: "Founder & Lead Developer",
    githubUrl: "https://github.com/AnilRana675/AgroConnect-backend",
    description:
      "A revolutionary platform empowering Nepalese farmers with AI-driven insights and direct market access. Bridging the gap between traditional agriculture and modern technology.",
    features: [
      "AI-powered crop disease detection",
      "Real-time market price analytics",
      "Weather-based farming recommendations",
      "Direct farmer-to-consumer marketplace",
      "Multilingual support (Nepali/English)",
    ],
    techStack: ["Node.js", "Express", "MongoDB", "TensorFlow", "React Native"],
  },
  {
    slug: "shelly-bot",
    id: "02_",
    title: "Shelly_Bot",
    tagline: "Sentient AI Discord bot with personality",
    tags: ["Python", "AI", "Discord"],
    year: "2025",
    role: "Creator",
    githubUrl: "https://github.com/AnilRana675/Shelly-Bot",
    description:
      "A sophisticated, sentient AI Discord bot powered by Google Gemini 2.5 Flash. Features a unique personality system, long-term memory, proactive engagement, and powerful tools.",
    features: [
      "Unique personality system with emotional states",
      "Long-term memory for context awareness",
      "Proactive engagement and conversation",
      "Multi-tool integration",
      "Natural language processing",
    ],
    techStack: ["Python", "Discord.py", "Google Gemini", "MongoDB", "FastAPI"],
  },
  {
    slug: "yeti-nova",
    id: "03_",
    title: "Yeti_Nova",
    tagline: "Modern web application built with TypeScript",
    tags: ["TypeScript", "Next.js", "Vercel"],
    year: "2026",
    role: "Developer",
    liveUrl: "https://yeti-nova.vercel.app",
    githubUrl: "https://github.com/AnilRana675/YetiNova",
    description:
      "A cutting-edge web application showcasing modern development practices with TypeScript and Next.js. Deployed on Vercel for optimal performance.",
    features: [
      "Server-side rendering",
      "Type-safe development",
      "Optimized performance",
      "Modern UI/UX design",
      "Responsive across devices",
    ],
    techStack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Vercel"],
  },
  {
    slug: "bingo",
    id: "04_",
    title: "Bingo_App",
    tagline: "Print-first classroom Bingo application",
    tags: ["JavaScript", "React", "Print"],
    year: "2025",
    role: "Developer",
    liveUrl: "https://bingo-xi-pearl.vercel.app",
    githubUrl: "https://github.com/AnilRana675/bingo",
    description:
      "A modern, print-first Bingo application designed for classrooms. Features a Card Generator for printing unique batches of cards and a Game Runner for playing and verifying winners.",
    features: [
      "Unique card batch generation",
      "Print-optimized card layouts",
      "Interactive game runner",
      "Winner verification system",
      "Classroom-friendly interface",
    ],
    techStack: ["JavaScript", "React", "CSS", "Vercel"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
