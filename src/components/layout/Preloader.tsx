"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw } from "lucide-react";
import { useLenis } from "lenis/react";

const STATUS_MESSAGES = [
  "MOUNTING_FILESYSTEM...",
  "INITIALIZING_WEBGL_CONTEXT...",
  "DECRYPTING_ASSETS...",
  "COMPILING_SHADERS...",
  "VERIFYING_INTEGRITY...",
];

export function Preloader() {
  const [complete, setComplete] = useState(false);
  const [statusIndex, setStatusIndex] = useState(0);
  const lenis = useLenis();

  useEffect(() => {
    if (!complete) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      lenis?.start();
    }
  }, [complete, lenis]);

  useEffect(() => {
    // Cycle status messages
    const statusInterval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % STATUS_MESSAGES.length);
    }, 800); // 0.8s per message to match CSS animation duration approximately

    // End preloader after 2.5s (slightly longer than the 2s bar load)
    const timer = setTimeout(() => {
      setComplete(true);
    }, 2500);

    return () => {
      clearInterval(statusInterval);
      clearTimeout(timer);
      // Ensure scroll is restored when component unmounts
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [lenis]);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-[100] bg-mono-black flex flex-col items-center justify-center overflow-hidden cursor-wait"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none blueprint-grid"></div>
          <div className="absolute inset-0 scanlines opacity-40 pointer-events-none z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] z-0 pointer-events-none"></div>

          {/* Big Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
            <div className="text-[35vw] font-black wireframe-text tracking-tighter animate-spin-slow select-none opacity-50 font-display">
              V9.2
            </div>
          </div>

          {/* Glitch Blocks */}
          <div className="absolute top-1/4 left-10 w-24 h-2 bg-hazard/20 animate-glitch-block"></div>
          <div
            className="absolute bottom-1/3 right-20 w-32 h-1 bg-white/10 animate-glitch-block"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div className="absolute top-10 right-10 w-4 h-4 border border-hazard/50 animate-spin"></div>

          {/* Header Info */}
          <div className="absolute top-0 left-0 p-6 md:p-8 w-full flex justify-between items-start z-20">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-hazard animate-pulse"></div>
                <span className="text-hazard font-bold tracking-[0.2em] text-sm animate-pulse">
                  SYSTEM_BOOT
                </span>
              </div>
              <div className="text-[10px] text-gray-500 font-mono tracking-widest">
                {"//"} BIOS_CHECK_PASS
              </div>
              <div className="text-[10px] text-gray-500 font-mono tracking-widest">
                {"//"} KERNEL_PANIC_PREVENTION_MODE
              </div>
            </div>
            <div className="text-right hidden md:block opacity-60">
              <div className="text-[10px] text-gray-500">
                MEM_ALLOC: 0x8841A
              </div>
              <div className="text-[10px] text-gray-500">
                CPU_THREAD: OPTIMIZED
              </div>
              <div className="text-[10px] text-gray-500">VRAM: 8192MB</div>
            </div>
          </div>

          {/* Main Loading Block */}
          <div className="relative z-30 w-full max-w-2xl px-8 flex flex-col gap-2">
            <div className="flex justify-between items-end mb-2 font-mono">
              <span className="text-hazard text-xs md:text-sm font-bold tracking-widest uppercase min-w-[200px]">
                {STATUS_MESSAGES[statusIndex]}
              </span>
              <span className="text-white text-4xl md:text-6xl font-bold tracking-tighter mix-blend-difference font-display">
                88<span className="text-base align-top text-hazard">%</span>
              </span>
            </div>

            <div className="h-8 md:h-12 w-full border border-mono-gray bg-mono-dark/50 p-1 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5 z-10 animate-pulse"></div>
              {/* Progress Bar Fill with Animation */}
              <div className="h-full progress-bar-fill relative animate-bar-load w-[88%]">
                <div className="absolute top-0 right-0 h-full w-2 bg-white/50 blur-[2px] animate-ping"></div>
              </div>
            </div>

            <div className="flex justify-between mt-1 font-mono text-[10px] text-gray-600 uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <RefreshCw className="w-3 h-3 text-hazard animate-spin" />
                Syncing_Packets
              </span>
              <span>Est_Time: 0.04s</span>
            </div>
          </div>

          {/* Footer Log */}
          <div className="absolute bottom-12 left-6 md:left-12 p-4 border-l-2 border-hazard/30 text-[10px] text-gray-600 font-mono hidden md:block max-w-md">
            <p className="mb-1 opacity-50">&gt; mounting_drive_C: success</p>
            <p className="mb-1 opacity-70">&gt; allocating_buffers... done</p>
            <p className="mb-1 opacity-90 text-gray-400">
              &gt; initializing_chaos_engine...{" "}
              <span className="text-hazard blink">active</span>
            </p>
            <p className="text-hazard/80 animate-pulse mt-2">
              _WAITING_FOR_USER_INPUT
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
