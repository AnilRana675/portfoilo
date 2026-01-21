"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Mail, Award, FileText } from "lucide-react";
import { WordRotate, HyperText, GradualSpacing } from "@/components/ui/TextAnimations";
import { heroContainerVariants, heroItemVariants } from "@/lib/animations";

const visualVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.5 },
  },
};

const nameVariants = {
  hidden: { opacity: 0, x: 50, clipPath: "inset(0 100% 0 0)" },
  visible: {
    opacity: 1,
    x: 0,
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.8 },
  },
};

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/AnilRana675",
    label: "GitHub",
  },
  {
    icon: Twitter,
    href: "https://x.com/itsboymystogan",
    label: "Twitter",
  },
  {
    icon: Mail,
    href: "mailto:amagar675@gmail.com",
    label: "Email",
  },
];

export function Hero() {
  return (
    <section className="min-h-[90vh] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-32 relative pt-20 overflow-hidden px-6 lg:px-12">
      {/* Social Links - Left Sidebar */}
      <motion.div
        className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group relative p-2 border border-mono-gray hover:border-hazard transition-colors bg-mono-black/50 backdrop-blur-sm"
            whileHover={{ scale: 1.1, x: 5 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 + index * 0.1 }}
            aria-label={link.label}
          >
            <link.icon className="w-4 h-4 text-gray-400 group-hover:text-hazard transition-colors" />
            <span className="absolute left-full ml-3 px-2 py-1 bg-hazard text-black text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {link.label}
            </span>
          </motion.a>
        ))}
        <div className="w-px h-20 bg-gradient-to-b from-mono-gray to-transparent mx-auto mt-2" />
      </motion.div>

      {/* Left Column - Content */}
      <motion.div
        className="lg:col-span-5 flex flex-col justify-center pb-8 relative lg:pl-8"
        initial="hidden"
        animate="visible"
        variants={heroContainerVariants}
      >
        {/* Corner Accent */}
        <motion.div
          className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-hazard"
          variants={heroItemVariants}
        />

        {/* Identifier */}
        <motion.div className="mb-6" variants={heroItemVariants}>
          <p className="text-hazard text-xs md:text-sm font-mono font-bold tracking-[0.3em]">
            {"//"} ANIL_MAGAR
          </p>
        </motion.div>

        {/* Main Title with Word Rotate Effect */}
        <motion.div className="mb-8" variants={heroItemVariants}>
          <WordRotate
            words={["Builder", "AI Enthusiast", "Engineer", "Problem Solver"]}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white uppercase leading-[0.95] tracking-tight"
          />
        </motion.div>

        {/* ICT Award Badge */}
        <motion.div
          className="mb-8"
          variants={heroItemVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-2 border border-hazard/50 bg-hazard/10 backdrop-blur-sm"
            whileHover={{ scale: 1.02, borderColor: "#FF4500" }}
          >
            <Award className="w-4 h-4 text-hazard" />
            <span className="text-[10px] md:text-xs font-mono text-hazard tracking-widest">
              ICT AWARD 2025 FINALIST
            </span>
          </motion.div>
        </motion.div>

        {/* Status Info */}
        <motion.div
          className="space-y-3 text-xs font-mono text-gray-500 border-l-2 border-hazard pl-4 mb-8"
          variants={heroItemVariants}
        >
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            STATUS: <span className="text-white">BUILDING</span>
          </p>
          <p>
            PROJECTS: <span className="text-white">4+</span>
          </p>
          <p>
            LOC: <span className="text-white">NEPAL</span>
          </p>
        </motion.div>

        {/* Bio */}
        <motion.p
          className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md"
          variants={heroItemVariants}
        >
          &quot;I don&apos;t just write code; I engineer solutions that solve real
          problems. Bridging the gap between traditional agriculture and modern
          AI.&quot;
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 mt-8"
          variants={heroItemVariants}
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-3 bg-hazard text-black font-mono text-sm font-bold hover:bg-hazard-bright transition-all hover:translate-x-1"
          >
            <FileText className="w-4 h-4" />
            DOWNLOAD_CV
            <motion.span
              className="inline-block"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              &gt;
            </motion.span>
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-3 border border-mono-gray text-gray-300 font-mono text-sm hover:border-hazard hover:text-hazard transition-all"
          >
            VIEW_PROJECTS
          </a>
        </motion.div>

        {/* Mobile Social Links */}
        <motion.div
          className="flex gap-4 mt-8 lg:hidden"
          variants={heroItemVariants}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="p-3 border border-mono-gray hover:border-hazard hover:text-hazard transition-colors"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Column - Visual */}
      <motion.div
        className="lg:col-span-7 relative h-[50vh] lg:h-[70vh] flex items-center justify-center overflow-hidden border border-mono-gray bg-mono-dark"
        initial="hidden"
        animate="visible"
        variants={visualVariants}
      >
        {/* Dot Pattern Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

        {/* Version Watermark */}
        <h2 className="text-[15vw] lg:text-[12vw] font-black text-mono-gray/20 absolute z-0 select-none tracking-tighter font-display">
          2026
        </h2>

        {/* Orbitals */}
        <motion.div
          className="relative w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 border border-hazard/50 rounded-full animate-spin-slow z-10 flex items-center justify-center"
          initial={{ opacity: 0, rotate: -180, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
        >
          {/* Outer Rings */}
          <div className="absolute inset-0 border border-white/10 rounded-full animate-spin-reverse scale-125" />
          <div className="absolute inset-0 border border-white/5 rounded-full animate-spin-super-slow scale-150" />

          {/* Inner Diamond Shapes */}
          <div className="w-full h-full relative perspective-1000">
            <div className="absolute inset-0 border border-hazard opacity-50 rotate-45 transform-style-3d animate-pulse" />
            <div className="absolute inset-0 border border-white opacity-20 -rotate-45 transform-style-3d" />

            {/* Center Label */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-hazard font-mono text-[10px] tracking-widest bg-black px-3 py-1 border border-hazard/30">
              SYS.INIT
            </div>
          </div>

          {/* Orbital Dots */}
          <motion.div
            className="absolute w-3 h-3 bg-hazard rounded-full"
            style={{ top: "0%", left: "50%", transform: "translate(-50%, -50%)" }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{ bottom: "10%", right: "10%" }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>

        {/* Name - Bottom Right */}
        <motion.div
          className="absolute bottom-6 right-6 md:bottom-8 md:right-8 text-right z-20"
          initial="hidden"
          animate="visible"
          variants={nameVariants}
        >
          <HyperText
            text="ANIL"
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mix-blend-difference justify-end"
          />
          <div className="flex justify-end mt-2">
            <GradualSpacing
              text="ARCHITECTING THE FUTURE"
              className="text-hazard font-mono text-[10px] md:text-xs tracking-[0.3em]"
            />
          </div>
        </motion.div>

        {/* Top Left Corner Info */}
        <div className="absolute top-4 left-4 text-[10px] font-mono text-gray-600">
          <p>FRAME: 001</p>
          <p>RES: 1920x1080</p>
        </div>

        {/* Bottom Left Corner Info */}
        <div className="absolute bottom-4 left-4 text-[10px] font-mono text-gray-600">
          <p>RENDER_MODE: REALTIME</p>
        </div>
      </motion.div>
    </section>
  );
}
