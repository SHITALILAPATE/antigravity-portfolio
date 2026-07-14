"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

const links = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shital-ilpate-0223852a3/",
    icon: <Linkedin size={20} />,
  },
  {
    name: "GitHub",
    url: "https://github.com/SHITALILAPATE",
    icon: <Github size={20} />,
  },
  {
    name: "Portfolio",
    url: "https://shitalilpateeee.onrender.com",
    icon: <Globe size={20} />,
  },
  {
    name: "Email",
    url: "shitalilpate.contact@gmail.com",
    icon: <Mail size={20} />,
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative z-20 bg-background border-t border-border pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-light text-primaryText tracking-tight mb-2">
            Shital Ilpate
          </h2>
          <p className="text-secondaryText text-sm uppercase tracking-wider">
            Self-Taught Full Stack Developer
          </p>
        </div>

        <div className="flex gap-4">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-secondaryText hover:text-accent hover:border-accent/50 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.02)]"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-16 text-center md:text-left text-xs text-border">
        © {new Date().getFullYear()} Shital Ilpate. All rights reserved.
      </div>
    </footer>
  );
}
