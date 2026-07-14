"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Landing Page",
    description: "SkyAnimeLabs Landing Page",
    image: "/project/project2.png",
    link: "https://github.com/SHITALILAPATE/SkyAnimeLabs-Landing-Page",
    color: "from-accent/20 to-transparent",
  },
  {
    title: "Game",
    description: "Kiki's Delivery Game",
    image: "/project/project.png",
    link: "https://github.com/SHITALILAPATE/Kiki-s-Delivery-Game-",
    color: "from-accent2/20 to-transparent",
  },
  {
    title: "Netflix Clone",
    description: "Modern streaming platform UI clone",
    image: "/project/project5.png",
    link: "https://github.com/yourusername/project3",
    color: "from-blue-500/20 to-transparent",
  },
  {
    title: "Calculator",
    description: "Minimal modern calculator app",
    image: "/project/project3.png",
    link: "https://github.com/SHITALILAPATE/Calculator",
    color: "from-purple-500/20 to-transparent",
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="relative z-20 bg-background py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-primaryText mb-6">
            Selected Work
          </h2>

          <p className="text-secondaryText text-lg md:text-xl max-w-2xl leading-relaxed">
           Creative frontend experiences crafted with HTML, CSS, and JavaScript.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className={`group relative overflow-hidden rounded-[32px]
              border border-white/10 bg-white/[0.03]
              backdrop-blur-xl p-5 md:p-6
              hover:border-accent/40 transition-all duration-700
              ${
                index % 2 === 1 ? "md:translate-y-20" : ""
              }`}
            >
              {/* Hover Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color}
                opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              {/* Content */}
              <div className="relative z-10">
                
                {/* Image */}
                <div className="relative w-full h-[260px] overflow-hidden rounded-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Bottom Content */}
                <div className="flex items-start justify-between mt-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-primaryText">
                      {project.title}
                    </h3>

                    <p className="text-secondaryText text-base md:text-lg mt-3 max-w-md leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div
                    className="w-11 h-11 rounded-full
                    bg-white/10 flex items-center justify-center
                    group-hover:bg-accent group-hover:text-white
                    transition-all duration-300"
                  >
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}