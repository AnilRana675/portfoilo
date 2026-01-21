"use client";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0, filter: "blur(10px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      exit={{ y: -20, opacity: 0, filter: "blur(5px)" }}
      transition={{ 
        ease: [0.25, 0.46, 0.45, 0.94], 
        duration: 0.6,
        filter: { duration: 0.4 }
      }}
    >
      {children}
    </motion.div>
  );
}
