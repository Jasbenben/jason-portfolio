"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData, type ProjectData } from "@/types/project";

const ProjectCard = ({ project, onClick }: { project: ProjectData; onClick: () => void }) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        ref={setRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ y: -2 }}
        className="border border-border bg-[#1A1B1D] overflow-hidden cursor-pointer transition-colors hover:border-accent group relative"
      >
        {/* Subtle arrow indicator in corner */}
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            className="text-accent"
          >
            <path 
              d="M5 15L15 5M15 5H7M15 5V13" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Image preview */}
        <div className="relative w-full h-44 border-b border-border bg-black/40 overflow-hidden">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text content */}
        <div className="p-5 md:p-6">
          <h3 className="font-heading text-xl md:text-2xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          
          <p className="text-secondary text-sm md:text-base mb-6 leading-relaxed">
            {project.tagline}
          </p>

          <div className="font-mono text-xs text-secondary flex flex-wrap gap-x-4 gap-y-1">
            <div>
              <span className="text-secondary/60">ROLE:</span> {project.role}
            </div>
            <div>
              <span className="text-secondary/60">YEAR:</span> {project.year}
            </div>
            <div>
              <span className="text-secondary/60">TYPE:</span> {project.type}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            Selected Projects
          </h2>
          <p className="text-secondary text-lg">
            Systems, marketplaces, and tools I&apos;ve shipped. Click to explore each project.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onClick={() => {}}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

