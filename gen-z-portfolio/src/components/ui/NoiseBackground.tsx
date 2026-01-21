"use client";

import { useEffect, useRef } from "react";

export function NoiseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let frame = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 255;
        data[i] = noise;     // R
        data[i + 1] = noise; // G
        data[i + 2] = noise; // B
        data[i + 3] = 8;     // A (very subtle)
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const addScanlines = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.03)";
      for (let y = 0; y < canvas.height; y += 4) {
        ctx.fillRect(0, y, canvas.width, 2);
      }
    };

    const addVignette = () => {
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 1.5
      );
      gradient.addColorStop(0, "transparent");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.4)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const addGlitchLine = () => {
      if (Math.random() > 0.98) {
        const y = Math.random() * canvas.height;
        const height = Math.random() * 3 + 1;
        ctx.fillStyle = `rgba(255, 69, 0, ${Math.random() * 0.1})`;
        ctx.fillRect(0, y, canvas.width, height);
      }
    };

    const animate = () => {
      frame++;
      
      // Only update noise every 3 frames for performance
      if (frame % 3 === 0) {
        generateNoise();
        addScanlines();
        addVignette();
        addGlitchLine();
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] mix-blend-overlay opacity-60"
      style={{ imageRendering: "pixelated" }}
    />
  );
}
