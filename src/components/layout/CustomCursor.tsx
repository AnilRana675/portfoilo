"use client";
import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorVariant = "default" | "link" | "project" | "text" | "button";

export const CustomCursor = () => {
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    },
    [cursorX, cursorY]
  );

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleElementHover = () => {
      const updateCursor = (e: MouseEvent) => {
        const target = e.target as HTMLElement;

        // Check for data-cursor attribute first
        const cursorType = target.closest("[data-cursor]")?.getAttribute("data-cursor") as CursorVariant | null;
        if (cursorType) {
          setVariant(cursorType);
          return;
        }

        // Check for interactive elements
        if (target.closest("a, button, [role='button']")) {
          setVariant("link");
        } else if (target.closest("article")) {
          setVariant("project");
        } else if (target.closest("p, span, h1, h2, h3, h4, h5, h6")) {
          setVariant("text");
        } else {
          setVariant("default");
        }
      };

      document.addEventListener("mouseover", updateCursor);
      return () => document.removeEventListener("mouseover", updateCursor);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const cleanup = handleElementHover();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cleanup?.();
    };
  }, [handleMouseMove, handleMouseLeave, handleMouseEnter]);

  const getVariantStyles = () => {
    switch (variant) {
      case "link":
        return {
          width: 64,
          height: 64,
          backgroundColor: "rgba(255, 69, 0, 0.15)",
          border: "2px solid #FF4500",
          boxShadow: "0 0 20px rgba(255, 69, 0, 0.4), inset 0 0 20px rgba(255, 69, 0, 0.1)",
        };
      case "project":
        return {
          width: 90,
          height: 90,
          backgroundColor: "rgba(255, 69, 0, 0.1)",
          border: "2px solid #FF4500",
          boxShadow: "0 0 30px rgba(255, 69, 0, 0.3)",
        };
      case "text":
        return {
          width: 6,
          height: 6,
          backgroundColor: "#FF4500",
          boxShadow: "0 0 10px rgba(255, 69, 0, 0.8)",
        };
      case "button":
        return {
          width: 56,
          height: 56,
          backgroundColor: "rgba(255, 69, 0, 0.2)",
          border: "2px solid #FF4500",
          boxShadow: "0 0 25px rgba(255, 69, 0, 0.5)",
        };
      default:
        return {
          width: 24,
          height: 24,
          backgroundColor: "transparent",
          border: "2px solid #FF4500",
          boxShadow: "0 0 15px rgba(255, 69, 0, 0.5)",
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <>
      {/* Outer ring / Main cursor */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: styles.width,
          height: styles.height,
          backgroundColor: styles.backgroundColor,
          opacity: isVisible ? 1 : 0,
          border: styles.border || "none",
          boxShadow: styles.boxShadow || "none",
        }}
        transition={{ duration: 0.15 }}
      >
        {variant === "link" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-mono text-hazard font-bold tracking-wider"
            style={{ textShadow: "0 0 8px rgba(255, 69, 0, 0.8)" }}
          >
            CLICK
          </motion.span>
        )}
        {variant === "project" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center"
          >
            <span
              className="text-[10px] font-mono text-hazard font-bold tracking-wider"
              style={{ textShadow: "0 0 8px rgba(255, 69, 0, 0.8)" }}
            >
              VIEW
            </span>
            <span className="text-[8px] font-mono text-hazard/70">PROJECT</span>
          </motion.div>
        )}
      </motion.div>

      {/* Inner dot - always visible for better tracking */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[101]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: variant === "text" ? 0 : 6,
          height: variant === "text" ? 0 : 6,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="w-full h-full bg-hazard rounded-full"
          style={{ boxShadow: "0 0 8px rgba(255, 69, 0, 0.9)" }}
        />
      </motion.div>

      {/* Crosshair lines for default state */}
      {variant === "default" && (
        <>
          <motion.div
            className="fixed pointer-events-none z-[99]"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{ opacity: isVisible ? 0.6 : 0 }}
          >
            {/* Horizontal line */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-px bg-hazard"
              style={{ boxShadow: "0 0 4px rgba(255, 69, 0, 0.8)" }}
            />
            {/* Vertical line */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-8 bg-hazard"
              style={{ boxShadow: "0 0 4px rgba(255, 69, 0, 0.8)" }}
            />
          </motion.div>
        </>
      )}
    </>
  );
};
