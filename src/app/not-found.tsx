"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft, Terminal } from "lucide-react";

const glitchVariants = {
  animate: {
    textShadow: [
      "0 0 0 transparent",
      "2px 0 #FF4500, -2px 0 #00FF00",
      "-2px 0 #FF4500, 2px 0 #00FF00",
      "0 0 0 transparent",
    ],
    x: [0, -2, 2, 0],
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Background Effects */}
      <div className="fixed inset-0 w-full h-full bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none z-0" />
      <div className="fixed inset-0 w-full h-full scanlines z-10 mix-blend-overlay opacity-30 pointer-events-none" />

      {/* Floating Glitch Blocks */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-2 bg-hazard/30"
        animate={{
          x: [0, 100, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-48 h-1 bg-white/20"
        animate={{
          x: [0, -80, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-2 h-24 bg-hazard/40"
        animate={{
          y: [0, 50, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-20 text-center max-w-2xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Error Code */}
        <motion.div className="relative mb-8" variants={itemVariants}>
          <motion.h1
            className="text-[150px] md:text-[200px] font-black text-transparent leading-none select-none"
            style={{
              WebkitTextStroke: "2px rgba(255, 69, 0, 0.5)",
            }}
            variants={glitchVariants}
            animate="animate"
          >
            404
          </motion.h1>

          {/* Glitch Overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center overflow-hidden"
            animate={{
              clipPath: [
                "inset(0 0 100% 0)",
                "inset(30% 0 40% 0)",
                "inset(60% 0 20% 0)",
                "inset(0 0 100% 0)",
              ],
            }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
          >
            <span className="text-[150px] md:text-[200px] font-black text-hazard leading-none">
              404
            </span>
          </motion.div>
        </motion.div>

        {/* Terminal Style Message */}
        <motion.div
          className="bg-mono-dark border border-mono-gray p-6 mb-8 text-left font-mono"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-mono-gray">
            <Terminal className="w-4 h-4 text-hazard" />
            <span className="text-xs text-gray-500">terminal://error</span>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-gray-500">
              <span className="text-hazard">$</span> locate page
            </p>
            <p className="text-red-400">
              ERROR: Page not found in filesystem
            </p>
            <p className="text-gray-500">
              <span className="text-hazard">$</span> status
            </p>
            <p className="text-yellow-400">
              WARN: The requested resource has been moved or deleted
            </p>
            <p className="text-gray-500">
              <span className="text-hazard">$</span> suggest
            </p>
            <p className="text-green-400">
              OK: Redirecting to homepage recommended
            </p>
            <p className="text-gray-400 flex items-center gap-1">
              <span className="text-hazard">$</span>
              <span className="w-2 h-4 bg-hazard animate-pulse" />
            </p>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-xl md:text-2xl font-bold text-white mb-4"
          variants={itemVariants}
        >
          SYSTEM_MALFUNCTION
        </motion.h2>

        <motion.p
          className="text-gray-400 text-sm md:text-base mb-8 max-w-md mx-auto"
          variants={itemVariants}
        >
          The page you&apos;re looking for has glitched out of existence or never
          existed in this dimension.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-hazard text-black font-mono text-sm font-bold hover:bg-hazard-bright transition-colors"
          >
            <Home className="w-4 h-4" />
            RETURN_HOME
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              &gt;
            </motion.span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 border border-mono-gray text-gray-300 font-mono text-sm hover:border-hazard hover:text-hazard transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            GO_BACK
          </button>
        </motion.div>

        {/* Debug Info */}
        <motion.div
          className="mt-12 text-[10px] font-mono text-gray-600"
          variants={itemVariants}
        >
          <p>ERROR_CODE: 0x404</p>
          <p>TIMESTAMP: {new Date().toISOString()}</p>
          <p>STATUS: LOST_IN_THE_VOID</p>
        </motion.div>
      </motion.div>

      {/* Corner Decorations */}
      <div className="fixed top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-hazard/50" />
      <div className="fixed top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-hazard/50" />
      <div className="fixed bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-hazard/50" />
      <div className="fixed bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-hazard/50" />
    </main>
  );
}
