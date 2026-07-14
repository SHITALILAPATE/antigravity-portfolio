"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
      className="fixed top-0 left-0 w-full z-40 p-6 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
        <div className="text-primaryText font-medium text-lg tracking-tight bg-surface backdrop-blur-md px-4 py-2 rounded-full border border-border cursor-pointer hover:border-accent/50 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.05)]">
          Shital Ilpate
        </div>
        <div className="flex gap-6 bg-surface backdrop-blur-md px-6 py-2 rounded-full border border-border shadow-[0_0_15px_rgba(255,255,255,0.05)]">
          {["Work", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-secondaryText hover:text-primaryText text-sm uppercase tracking-wider transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
