"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Technical",
    skills: [
      "TypeScript, JavaScript, Python",
      "React, Next.js",
      "n8n automation pipelines",
      "LLM prompt engineering",
      "API design & systems integration"
    ]
  },
  {
    title: "Product & Systems",
    skills: [
      "0→1 product development",
      "Product design & strategy",
      "Launch execution & coordination",
      "Creative direction"
    ]
  },
  {
    title: "Crypto / AI Ecosystems",
    skills: [
      "Crypto tooling development (Solana + EVM fundamentals)",
      "Crypto fundamentals & ecosystem understanding",
      "Token mechanism design",
      "AI image-generation pipelines"
    ]
  }
];

const SkillCard = ({ category, index }: { category: SkillCategory; index: number }) => {
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
    <motion.div
      ref={setRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
      whileHover={{ y: -2 }}
      className="border border-border bg-[#1A1B1D] p-6 md:p-8 transition-all hover:border-accent"
    >
      <h3 className="font-heading text-xl md:text-2xl font-semibold text-primary mb-6 uppercase tracking-wide">
        {category.title}
      </h3>
      
      <ul className="space-y-3">
        {category.skills.map((skill, skillIndex) => (
          <li key={skillIndex} className="flex items-start">
            <span className="text-accent mr-3 mt-1">—</span>
            <span className="text-secondary leading-relaxed">{skill}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            Capabilities
          </h2>
          <p className="text-secondary text-lg">
            Core competencies across technical, product, and ecosystem domains.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

