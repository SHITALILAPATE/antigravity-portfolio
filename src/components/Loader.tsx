"use client";

import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  progress: number;
  isLoading: boolean;
}

export default function Loader({ progress, isLoading }: LoaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center">
            <div className="text-secondaryText text-sm tracking-widest uppercase mb-4">
              Loading Experience
            </div>
            <div className="text-primaryText text-6xl font-light tracking-tighter">
              {Math.round(progress * 100)}%
            </div>
            <div className="w-48 h-[1px] bg-border mt-8 overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${progress * 100}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
