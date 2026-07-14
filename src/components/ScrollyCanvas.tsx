"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { drawImageCover } from "@/lib/drawImageCover";

const FRAME_COUNT = 120; // 0 to 119

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // We assume images are already preloaded by Loader, 
    // but we need to instantiate image objects here to draw them.
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const indexStr = i.toString().padStart(3, '0');
      img.src = `/sequence/frame_${indexStr}_delay-0.066s.png`;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawFrame = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const img = images[Math.floor(index)];
    if (!img || !img.complete) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvasRef.current.getBoundingClientRect();
    
    // Check if canvas size needs update to prevent unnecessary clear/draw
    if (canvasRef.current.width !== rect.width * dpr || canvasRef.current.height !== rect.height * dpr) {
        canvasRef.current.width = rect.width * dpr;
        canvasRef.current.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
    } else {
        // Just reset transform before drawing
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
    }

    drawImageCover(ctx, img, rect.width, rect.height);
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    requestAnimationFrame(() => drawFrame(latest));
  });

  useEffect(() => {
    const handleResize = () => {
      drawFrame(frameIndex.get());
    };
    window.addEventListener("resize", handleResize);
    
    if (images.length > 0) {
      // Draw frame 0 immediately when images state updates
      const img = images[0];
      if (img.complete) {
        drawFrame(0);
      } else {
        img.onload = () => drawFrame(0);
      }
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [images]);

  return (
    <div ref={containerRef} className="relative w-full h-[500vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
          style={{ width: "100%", height: "100%" }}
        />
        {/* Soft vignette effect */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,#0B0B0F_100%)] opacity-80" />
      </div>
    </div>
  );
}
