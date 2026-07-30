"use client";

import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import FloatingOrbs from "./FloatingOrbs";
import MagneticButton from "./MagneticButton";
import { ArrowRight, Zap } from "lucide-react";

const EASE = [0.21, 0.47, 0.32, 0.98] as [number, number, number, number];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: EASE,
    },
  }),
};

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* Background radial gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Floating orbs */}
      <FloatingOrbs />

      {/* Grid lines overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center max-w-5xl pt-24 pb-20">
        {/* Eyebrow badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="glass px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-white/60 flex items-center gap-2">
            <Zap className="w-3 h-3 text-violet-400" aria-hidden="true" />
            Meta Ads Specialist
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for New Clients
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.03] tracking-[-0.04em] text-white mb-6"
        >
          Scaling{" "}
          <span className="relative inline-block">
            <span className="text-gradient-brand">E-commerce</span>
          </span>{" "}
          Brands
          <br />
          with{" "}
          <span className="text-gradient-warm">Data-Driven</span>
          <br />
          Meta Ads.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          custom={2}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-white/50 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-12 font-inter"
        >
          I architect high-performance paid social funnels on Facebook & Instagram
          that turn cold audiences into loyal customers — with measurable,
          repeatable ROAS.
        </motion.p>

        {/* CTA group */}
        <motion.div
          custom={3}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton
            id="hero-cta-primary"
            variant="primary"
            className="text-lg py-5 px-10 shadow-2xl shadow-violet-900/40"
            href="#contact"
          >
            Scale Your Brand
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </MagneticButton>

          <MagneticButton
            id="hero-cta-secondary"
            variant="secondary"
            href="#showcase"
          >
            View My Work
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          custom={5}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-white/20 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-violet-500/50 to-transparent"
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
