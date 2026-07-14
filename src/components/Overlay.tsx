"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1 - Intro (0% to 30%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  // Section 2 - Identity (30% to 60%)
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.35, 0.55], [100, 0, -100]);

  // Section 3 - Philosophy (60% to 100%)
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.65, 0.9, 1], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.65, 1], [100, 0, -100]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-6">
        <div className="max-w-7xl mx-auto w-full relative h-full">
          
          {/* Section 1 - Intro */}
          <motion.div
            style={{ opacity: opacity1, y: y1 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          >
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-primaryText mb-4 drop-shadow-2xl">
              Shital Ilpate
            </h1>
            <p className="text-secondaryText text-lg md:text-xl drop-shadow-md tracking-wider uppercase">
              Creative Developer
            </p>
          </motion.div>

          {/* Section 2 - Identity */}
          <motion.div
            style={{ opacity: opacity2, y: y2 }}
            className="absolute inset-0 flex flex-col items-start justify-center text-left"
          >
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-primaryText mb-6 drop-shadow-2xl max-w-2xl leading-tight">
            Self-taught developer building meaningful digital experiences.
            </h2>
            <p className="text-secondaryText text-lg md:text-2xl max-w-2xl drop-shadow-md leading-relaxed">
              Exploring Python, Data Analysis, and Agentic AI to build smarter solutions.
            </p>
          </motion.div>

          {/* Section 3 - Philosophy */}
          <motion.div
            style={{ opacity: opacity3, y: y3 }}
            className="absolute inset-0 flex flex-col items-end justify-center text-right"
          >
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-accent mb-6 drop-shadow-2xl max-w-2xl">
             
            </h2>
            <p className="text-secondaryText text-xl md:text-3xl max-w-lg drop-shadow-md leading-tight text-primaryText">
             Creating digital experiences that feel alive.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
