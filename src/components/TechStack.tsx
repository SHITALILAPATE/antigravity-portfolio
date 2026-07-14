"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js (Learning)"],
  },
  {
    category: "Backend",
    items: ["Python", "Flask", "Agentic AI (Learning)"],
  },
  {
    category: "Database & Tools",
    items: ["SQL", "MongoDB", "Git", "GitHub", "VS Code"],
  },
  {
    category: "Exploring",
    items: ["Data Analysis", "Agentic AI", "Cinematic Motion"],
  },
];

export default function TechStack() {
  return (
    <section id="about" className="relative z-20 bg-background py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-primaryText mb-4">
            Tech Stack
          </h2>
          <p className="text-secondaryText text-lg max-w-xl">
            Tools and technologies I use to build intelligent applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-surface border border-border p-8 rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm hover:border-accent/50 transition-colors"
            >
              <h3 className="text-xl font-medium text-primaryText mb-6 tracking-tight">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="text-secondaryText hover:text-accent transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
