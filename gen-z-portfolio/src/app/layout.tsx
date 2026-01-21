import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Preloader } from "@/components/layout/Preloader";
import { CommandPalette } from "@/components/ui/CommandPalette";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anilmagar.dev"),
  title: "Anil Magar | Backend Developer & AI Enthusiast",
  description:
    "Backend Developer, AI Enthusiast, and 2025 ICT Award Rising Star Finalist. Building the future of tech in Nepal with MERN stack, Django, and AI-driven solutions.",
  keywords: [
    "Anil Magar",
    "Backend Developer",
    "AI Enthusiast",
    "Nepal",
    "MERN Stack",
    "Django",
    "Agro Connect",
    "ICT Award",
    "Full Stack Developer",
  ],
  authors: [{ name: "Anil Magar", url: "https://github.com/AnilRana675" }],
  creator: "Anil Magar",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Anil Magar | Backend Developer & AI Enthusiast",
    description:
      "Backend Developer, AI Enthusiast, and 2025 ICT Award Rising Star Finalist. Building the future of tech in Nepal.",
    siteName: "Anil Magar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anil Magar - Backend Developer & AI Enthusiast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anil Magar | Backend Developer & AI Enthusiast",
    description:
      "Backend Developer, AI Enthusiast, and 2025 ICT Award Rising Star Finalist.",
    creator: "@itsboymystogan",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-zinc-950 text-stone-50 antialiased font-sans`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          <CommandPalette />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
