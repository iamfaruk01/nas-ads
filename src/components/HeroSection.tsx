"use client";

import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import FloatingOrbs from "./FloatingOrbs";
import MagneticButton from "./MagneticButton";
import { ArrowRight } from "lucide-react";
import {
  IPhoneFrame,
  DesktopFrame,
  InstagramAdContent,
  FacebookAdContent,
} from "./DeviceMockups";

const EASE = [0.21, 0.47, 0.32, 0.98] as [number, number, number, number];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.14, duration: 0.9, ease: EASE },
  }),
};



export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
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

      {/* 3-column layout */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-8 lg:gap-6">

          {/* ── LEFT: iPhone / Instagram ad ── */}
          <motion.div
            className="hidden lg:flex justify-end pr-4"
            initial={{ opacity: 0, x: -120 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.4, ease: EASE }}
          >
            <div
              className="flex flex-col items-center"
              style={{
                filter:
                  "drop-shadow(0 30px 60px rgba(124,58,237,0.4)) drop-shadow(0 60px 120px rgba(59,130,246,0.15))",
              }}
            >
              <div className="flex items-center gap-1.5 mb-3 bg-violet-950/70 backdrop-blur-md border border-violet-500/30 px-3 py-1 rounded-full shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                </span>
                <span className="text-[10px] font-bold tracking-wider text-violet-200 uppercase">
                  Interactive · Scroll Phone 📱
                </span>
              </div>
              <IPhoneFrame scale={260 / 220}>
                <InstagramAdContent />
              </IPhoneFrame>
            </div>
          </motion.div>

          {/* ── CENTER: Text content ── */}
          <div className="flex flex-col items-center text-center min-w-0 lg:min-w-[340px] xl:min-w-[420px]">
            {/* Bullet dot */}
            <motion.div
              custom={0}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="flex justify-center mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-white/40 inline-block" aria-hidden="true" />
            </motion.div>

            {/* Main headline — 2 lines */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="font-display font-black leading-[1.05] tracking-[-0.03em] text-white mb-8"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
                fontFamily: "var(--font-syne), sans-serif",
              }}
            >
              <span className="block">
                Scaling{" "}
                <span className="text-gradient-brand">E-commerce</span>
              </span>
              <span className="block">
                with{" "}
                <span className="text-gradient-warm">Meta Ads.</span>
              </span>
            </motion.h1>

            {/* Sub-headline — exactly 2 lines */}
            <motion.p
              custom={2}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-white/45 mx-auto text-center"
              style={{
                fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
                maxWidth: "580px",
                lineHeight: 1.6,
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
              }}
            >
              High-performance Meta Ads that turn cold audiences
              <br />
              into loyal customers — with repeatable ROAS.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
            >
              <MagneticButton
                id="hero-cta-primary"
                variant="primary"
                className="text-base py-4 px-9 shadow-2xl shadow-violet-900/40"
                href="#contact"
              >
                Scale Your Brand
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
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
              custom={4}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="mt-16 flex flex-col items-center gap-2"
            >
              <span className="text-white/20 text-[10px] tracking-[0.2em] uppercase">
                Scroll
              </span>
              <motion.div
                className="w-px h-10 bg-gradient-to-b from-violet-500/40 to-transparent"
                animate={{ scaleY: [0, 1, 0], originY: "top" }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>

          {/* ── RIGHT: Desktop / Facebook ad ── */}
          <motion.div
            className="hidden lg:flex justify-start pl-4"
            initial={{ opacity: 0, x: 120 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.5, ease: EASE }}
          >
            <div
              style={{
                width: 260,
                filter:
                  "drop-shadow(0 30px 60px rgba(249,115,22,0.3)) drop-shadow(0 60px 120px rgba(236,72,153,0.12))",
              }}
            >
              <DesktopFrame>
                <FacebookAdContent compact />
              </DesktopFrame>
            </div>
          </motion.div>

        </div>

        {/* Mobile: show devices stacked below text */}
        <div className="lg:hidden mt-12 flex flex-col items-center justify-center gap-10 w-full max-w-[320px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
            className="flex flex-col items-center w-full"
          >
            <div className="flex items-center gap-1.5 mb-3 bg-violet-950/70 backdrop-blur-md border border-violet-500/30 px-3 py-1 rounded-full shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              <span className="text-[10px] font-bold tracking-wider text-violet-200 uppercase">
                Interactive · Scroll Phone 📱
              </span>
            </div>
            <IPhoneFrame scale={260 / 220}>
              <InstagramAdContent />
            </IPhoneFrame>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
            className="w-full max-w-[280px]"
          >
            <div>
              <DesktopFrame>
                <FacebookAdContent compact />
              </DesktopFrame>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
