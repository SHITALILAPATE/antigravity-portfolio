"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";
import { preloadImages } from "@/lib/preloadImages";

const FRAME_COUNT = 120;

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    const loadAssets = async () => {
      const urls: string[] = [];
      for (let i = 0; i < FRAME_COUNT; i++) {
        const indexStr = i.toString().padStart(3, "0");
        urls.push(`/sequence/frame_${indexStr}_delay-0.066s.png`);
      }

      try {
        await preloadImages(urls, (p) => setProgress(p));
        // Add a small delay for a smoother transition
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "";
        }, 500);
      } catch (error) {
        console.error("Failed to preload images", error);
        setIsLoading(false);
        document.body.style.overflow = "";
      }
    };

    loadAssets();

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-background text-primaryText selection:bg-accent selection:text-white">
      <Loader progress={progress} isLoading={isLoading} />
      
      <Navbar />
      <div className="relative w-full">
        <ScrollyCanvas />
        <Overlay />
      </div>
      <Projects />
      <TechStack />
      <Footer />
    </main>
  );
}
