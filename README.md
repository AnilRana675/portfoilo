# Anil Magar | Portfolio

A modern, cyberpunk-themed developer portfolio built with Next.js 16, React 19, and Framer Motion. Features smooth animations, a command palette, and a distinctive terminal-inspired design.

![Next.js](https://img.shields.io/badge/Next.js-16.1.3-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)

## Features

- **Cyberpunk/Terminal Aesthetic** - Dark theme with hazard yellow accents and monospace typography
- **Smooth Animations** - Powered by Framer Motion with staggered reveals and scroll-triggered effects
- **Command Palette** - Press `Ctrl+K` (or `Cmd+K`) to quickly navigate anywhere
- **Custom Cursor** - Interactive cursor with contextual states (hover, click, view)
- **Smooth Scrolling** - Lenis-powered buttery smooth scroll experience
- **Fully Responsive** - Mobile-first design that works on all devices
- **Accessible** - Semantic HTML, ARIA labels, keyboard navigation, skip links
- **SEO Optimized** - Comprehensive metadata, OpenGraph, and Twitter cards
- **Error Boundaries** - Graceful error handling with themed error pages

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion 12 |
| Icons | Lucide React |
| Smooth Scroll | Lenis |
| Fonts | Space Grotesk, JetBrains Mono |

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with fonts, metadata
│   ├── page.tsx            # Home page
│   ├── error.tsx           # Error boundary
│   ├── global-error.tsx    # Global error boundary
│   └── projects/
│       └── [slug]/         # Dynamic project pages
├── components/
│   ├── layout/             # Layout components
│   │   ├── Navbar.tsx      # Fixed navigation bar
│   │   ├── Footer.tsx      # Site footer
│   │   ├── CustomCursor.tsx # Interactive cursor
│   │   ├── Preloader.tsx   # Loading animation
│   │   └── SmoothScroll.tsx # Lenis wrapper
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx        # Hero section with typing effect
│   │   ├── About.tsx       # About/skills section
│   │   ├── ProjectIndex.tsx # Projects list
│   │   ├── ProjectDetail.tsx # Individual project view
│   │   ├── ExperimentLab.tsx # Experiments section
│   │   ├── FeedbackLogs.tsx # Testimonials
│   │   └── Contact.tsx     # Contact form
│   └── ui/                 # Reusable UI components
│       ├── CommandPalette.tsx # Ctrl+K command menu
│       ├── NoiseBackground.tsx # Noise texture overlay
│       └── ScrollToTop.tsx # Scroll to top button
├── hooks/
│   └── useTypingEffect.ts  # Typing animation hook
└── lib/
    ├── animations.ts       # Shared Framer Motion variants
    ├── projects.ts         # Project data and helpers
    └── utils.ts            # Utility functions (cn)
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/AnilRana675/gen-z-portfolio.git
cd gen-z-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Customization

### Personal Information

Update these files with your own information:

1. **`src/app/layout.tsx`** - Update metadata (name, description, social links)
2. **`src/components/sections/Hero.tsx`** - Update name, title, bio, social links
3. **`src/components/sections/About.tsx`** - Update skills, interests, background
4. **`src/components/sections/Contact.tsx`** - Update Formspree endpoint
5. **`src/lib/projects.ts`** - Add your own projects
6. **`src/components/ui/CommandPalette.tsx`** - Update social links

### Theming

The color scheme is defined in `src/app/globals.css`:

```css
:root {
  --hazard: #FFD93D;      /* Primary accent (yellow) */
  --mono-black: #0a0a0a;  /* Background */
  --mono-dark: #141414;   /* Card backgrounds */
  --mono-gray: #2a2a2a;   /* Borders */
}
```

### Adding Projects

Edit `src/lib/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    slug: "my-project",
    title: "My Project",
    tagline: "A brief description",
    tags: ["React", "Node.js"],
    year: "2024",
    role: "Full Stack Developer",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/...",
    description: "Detailed description...",
    features: ["Feature 1", "Feature 2"],
    techStack: ["React", "Node.js", "MongoDB"],
  },
  // ... more projects
];
```

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AnilRana675/gen-z-portfolio)

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- **Netlify** - Use the Next.js adapter
- **Railway** - Auto-detects Next.js
- **Docker** - Use the included Dockerfile (if added)

## Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Bundle Size**: Optimized with tree-shaking and code splitting
- **Font Loading**: Uses `next/font` for zero layout shift

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - feel free to use this template for your own portfolio.

## Author

**Anil Magar**
- GitHub: [@AnilRana675](https://github.com/AnilRana675)
- Twitter: [@itsboymystogan](https://x.com/itsboymystogan)
- Email: amagar675@gmail.com

---

Built with Next.js and deployed on Vercel.
