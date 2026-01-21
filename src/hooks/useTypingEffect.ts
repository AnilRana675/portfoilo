"use client";

import { useState, useEffect } from "react";

interface UseTypingEffectOptions {
  speed?: number;
  delay?: number;
  loop?: boolean;
  loopDelay?: number;
}

export function useTypingEffect(
  text: string,
  options: UseTypingEffectOptions = {}
) {
  const { speed = 80, delay = 0, loop = false, loopDelay = 2000 } = options;
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;

    const startTyping = () => {
      setIsTyping(true);
      setIsComplete(false);
      setDisplayedText("");
      currentIndex = 0;

      const typeNextChar = () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
          timeout = setTimeout(typeNextChar, speed);
        } else {
          setIsTyping(false);
          setIsComplete(true);
          
          if (loop) {
            timeout = setTimeout(() => {
              startTyping();
            }, loopDelay);
          }
        }
      };

      timeout = setTimeout(typeNextChar, delay);
    };

    startTyping();

    return () => {
      clearTimeout(timeout);
    };
  }, [text, speed, delay, loop, loopDelay]);

  return { displayedText, isTyping, isComplete };
}
