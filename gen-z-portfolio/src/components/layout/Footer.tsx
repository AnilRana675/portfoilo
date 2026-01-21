"use client";

import { motion } from "framer-motion";
import { Github, Mail, Twitter } from "lucide-react";

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
    transition: { duration: 0.5, ease: "easeOut" as const }
  },
};

export function Footer() {
  const currentDate = new Date().toISOString().split('T')[0].replace(/-/g, '_');
  
  return (
    <motion.footer 
      className="bg-[#0000aa] text-white p-8 md:p-20 font-mono relative overflow-hidden mb-8 shadow-2xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_2px,3px_100%]"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-8 text-center md:text-left">
          <span className="bg-white text-[#0000aa] px-2 py-1 font-bold text-xl">
            FATAL ERROR
          </span>
        </div>

        <p className="mb-8 text-lg">
          A problem has been detected and the system has been halted to prevent
          damage to your computer.
          <br />
          <br />
          ERROR_CODE: PROJECT_COMPLETED_SUCCESSFULLY
          <br />
          <br />
          If this is the first time you&apos;ve seen this stop error screen,
          restart your computer. If this screen appears again, follow these
          steps:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 border-t border-white/30 pt-8">
          <div>
            <h4 className="mb-4 underline decoration-2 underline-offset-4">
              Technical Information:
            </h4>
            <ul className="space-y-2 text-sm text-white/80 list-disc pl-5">
              <li>*** STOP: 0x0000001 (EMAIL_ME)</li>
              <li>*** GV3.sys - Address FFFFF8800</li>
              <li>*** DateStamp: {currentDate}</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 underline decoration-2 underline-offset-4">
              Recovery Options:
            </h4>
<div className="flex flex-col gap-3 items-start">
              <motion.a
                href="mailto:amagar675@gmail.com"
                className="hover:bg-white hover:text-[#0000aa] px-2 py-1 transition-colors flex items-center gap-2"
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <Mail className="w-4 h-4" />
                &gt; INITIATE_EMAIL_PROTOCOL.exe
              </motion.a>
              <motion.a
                href="https://x.com/itsboymystogan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-white hover:text-[#0000aa] px-2 py-1 transition-colors flex items-center gap-2"
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <Twitter className="w-4 h-4" />
                &gt; RUN_X_DIAGNOSTICS.bat
              </motion.a>
              <motion.a
                href="https://github.com/AnilRana675"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-white hover:text-[#0000aa] px-2 py-1 transition-colors flex items-center gap-2"
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <Github className="w-4 h-4" />
                &gt; OPEN_GITHUB_SAFE_MODE.cmd
              </motion.a>
            </div>
          </div>
        </div>

        <p className="text-center text-sm animate-pulse">
          Press any key to continue _
        </p>
      </div>
    </motion.footer>
  );
}
