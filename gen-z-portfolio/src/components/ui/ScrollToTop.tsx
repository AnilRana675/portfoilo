"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Scroll to top"
        >
          <div className="relative">
            {/* Background with glitch effect on hover */}
            <div className="absolute inset-0 bg-hazard opacity-0 group-hover:opacity-20 blur-lg transition-opacity" />
            
            {/* Main button */}
            <div className="relative flex items-center justify-center w-12 h-12 bg-mono-dark border border-mono-gray group-hover:border-hazard transition-colors">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-hazard" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-hazard" />
              
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-hazard transition-colors" />
              </motion.div>
            </div>

            {/* Label on hover */}
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-hazard text-black text-[10px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
            >
              SCROLL_UP
            </motion.span>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
