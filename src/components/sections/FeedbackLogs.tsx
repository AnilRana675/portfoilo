"use client";
import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const noteVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8, 
    rotateX: -20,
    y: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    y: 0,
    transition: { 
      duration: 0.7, 
      ease: "easeOut" as const,
    },
  },
};

export function FeedbackLogs() {
  return (
    <section className="mb-40 relative py-20 border-y border-dashed border-gray-800 bg-[#080808] overflow-hidden">
      <motion.div
        className="absolute top-4 left-4 font-mono text-xs text-gray-600 uppercase tracking-widest"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {"//"} USER_FEEDBACK_LOGS
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-8 md:gap-16 relative perspective-1000"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Note 1 */}
        <motion.div
          className="sticky-note w-64 h-64 bg-[#f0f0f0] text-black p-6 font-mono text-sm leading-relaxed flex flex-col rotate-[-2deg] cursor-grab active:cursor-grabbing"
          variants={noteVariants}
          whileHover={{ 
            scale: 1.05, 
            rotate: -4,
            boxShadow: "8px 8px 0px rgba(255, 69, 0, 0.6)",
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="mb-4 text-xs text-gray-400 border-b border-gray-300 pb-2">
            Log_ID: #8821
          </div>
          <p className="flex-grow font-medium">
            &quot;The most chaotic yet functional interface I&apos;ve ever seen.
            It breaks every rule but somehow works perfectly.&quot;
          </p>
          <div className="mt-auto pt-4 flex items-center gap-2">
            <div className="w-6 h-6 bg-black rounded-full"></div>
            <span className="text-xs font-bold uppercase">Sarah Jenkins</span>
          </div>
        </motion.div>

        {/* Note 2 */}
        <motion.div
          className="sticky-note w-64 h-64 bg-hazard text-black p-6 font-mono text-sm leading-relaxed flex flex-col rotate-[3deg] cursor-grab active:cursor-grabbing z-10"
          variants={noteVariants}
          whileHover={{ 
            scale: 1.08, 
            rotate: 0,
            boxShadow: "8px 8px 0px rgba(0, 0, 0, 0.4)",
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="mb-4 text-xs text-black/50 border-b border-black/20 pb-2">
            Log_ID: #9942
          </div>
          <p className="flex-grow font-bold text-lg uppercase">
            &quot;ABSOLUTE VISUAL OVERLOAD. I LOVE IT.&quot;
          </p>
          <div className="mt-auto pt-4 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-xs font-bold uppercase">Design Weekly</span>
          </div>
        </motion.div>

        {/* Note 3 */}
        <motion.div
          className="sticky-note w-64 h-64 bg-[#e5e5e5] text-black p-6 font-mono text-sm leading-relaxed flex flex-col rotate-[-1deg] cursor-grab active:cursor-grabbing"
          variants={noteVariants}
          whileHover={{ 
            scale: 1.05, 
            rotate: 2,
            boxShadow: "8px 8px 0px rgba(255, 69, 0, 0.6)",
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="mb-4 text-xs text-gray-400 border-b border-gray-300 pb-2">
            Log_ID: #1102
          </div>
          <p className="flex-grow font-medium">
            &quot;Technically impressive. The WebGL implementation runs at 60fps
            even on my toaster.&quot;
          </p>
          <div className="mt-auto pt-4 flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
            <span className="text-xs font-bold uppercase">Dev_01</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
