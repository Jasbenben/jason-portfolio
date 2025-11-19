"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Technical Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern - top left */}
        <div className="absolute top-12 left-12 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        {/* Hexagon - top right */}
        <div className="absolute top-20 right-24 w-16 h-16 opacity-30">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-border"/>
          </svg>
        </div>

        {/* Corner brackets - bottom left */}
        <div className="absolute bottom-32 left-16 w-12 h-12 opacity-40">
          <svg viewBox="0 0 50 50" className="w-full h-full">
            <path d="M 0 15 L 0 0 L 15 0" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent"/>
            <path d="M 35 50 L 50 50 L 50 35" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent"/>
          </svg>
        </div>

        {/* Circular target - bottom right */}
        <div className="absolute bottom-20 right-32 w-20 h-20 opacity-25">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" className="text-border"/>
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" className="text-border"/>
            <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" className="text-border"/>
            <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-border"/>
            <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-border"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-start">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col relative pt-0 lg:pt-4"
          >
            {/* Corner accent - top left of text block */}
            <div className="absolute -top-8 -left-4 w-8 h-8 opacity-60">
              <svg viewBox="0 0 50 50" className="w-full h-full">
                <path d="M 0 20 L 0 0 L 20 0" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"/>
              </svg>
            </div>

            {/* Label with hexagon icon */}
            <div className="flex items-center gap-3 mb-8">
              <svg width="12" height="12" viewBox="0 0 100 100" className="text-accent opacity-60">
                <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" fill="none" stroke="currentColor" strokeWidth="8"/>
              </svg>
              <span className="text-xs font-mono text-secondary uppercase tracking-wider">
                PROFILE
              </span>
              <span className="text-secondary">·</span>
              <span className="text-xs font-mono text-secondary uppercase tracking-wider">
                JASON BENNETT
              </span>
            </div>

            {/* Name */}
            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold text-primary mb-6 tracking-tight">
              Jason Bennett
            </h1>

            {/* Subheading */}
            <h2 className="text-xl md:text-2xl text-accent font-light mb-8 tracking-wide">
              AI · Automation · Systems Builder
            </h2>

            {/* Belief Statement */}
            <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-xl">
            I build things that interest me: creative tools, technical experiments, and systems that feel refreshing and original. I like ideas that break patterns, and I enjoy turning them into real, working software. Some of my work explores new formats, some simplifies complex tasks, but all of it comes from curiosity.
            </p>
          </motion.div>

          {/* Right Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col lg:items-end"
          >
            <div className="w-full max-w-sm space-y-6">
              {/* Profile Image */}
              <div className="aspect-[3/4] bg-[#0D0E0F] border border-border relative overflow-hidden">
                <Image
                  src="/profile.jpeg"
                  alt="Jason Bennett"
                  fill
                  className="object-cover"
                  style={{ objectPosition: '50% 30%' }}
                  priority
                />
              </div>

              {/* Metadata Block */}
              <div className="font-mono text-sm space-y-2">
                <div className="flex">
                  <span className="text-secondary mr-4">STATUS:</span>
                  <span className="text-primary">ACTIVE</span>
                </div>
                <div className="flex">
                  <span className="text-secondary mr-4">LOCATION:</span>
                  <span className="text-primary">ISR</span>
                </div>
                <div className="flex">
                  <span className="text-secondary mr-4">ALIGNMENT:</span>
                  <span className="text-primary">BUILDER CLASS</span>
                </div>
                <div className="flex">
                  <span className="text-secondary mr-4">FUNCTION:</span>
                  <span className="text-primary">AI / AUTOMATION ENGINEER · CRYPTOGRAPHER</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

