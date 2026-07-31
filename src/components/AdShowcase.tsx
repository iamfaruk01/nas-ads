"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  IPhoneFrame,
  DesktopFrame,
  InstagramAdContent,
  FacebookAdContent,
} from "./DeviceMockups";

const EASE = [0.21, 0.47, 0.32, 0.98] as [number, number, number, number];

export default function AdShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const iPhoneY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const desktopY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      id="showcase"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* Background accent */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(124,58,237,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="divider-gradient mb-16 mx-auto max-w-xl" />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-4 block">
            Ad Creative Showcase
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Ads That Stop the{" "}
            <span className="text-gradient-brand">Scroll.</span>
          </h2>
          <p className="text-white/40 text-lg mt-4 max-w-xl mx-auto">
            Combining precision targeting with creatives engineered for conversion
            across Instagram and Facebook feeds.
          </p>
        </motion.div>

        {/* Devices grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* Left — iPhone / Instagram */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex items-center gap-2 glass px-4 py-1.5 rounded-full">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500" />
              <span className="text-white/60 text-xs font-medium tracking-wide">Instagram Feed Ad</span>
            </div>

            <motion.div className="animate-float-device-a" style={{ y: iPhoneY }}>
              <IPhoneFrame>
                <InstagramAdContent />
              </IPhoneFrame>
            </motion.div>

            <div className="flex gap-3">
              {[
                { label: "CTR", value: "4.8%" },
                { label: "CPC", value: "$0.32" },
                { label: "Conv.", value: "12.4%" },
              ].map((m) => (
                <div key={m.label} className="glass px-3 py-2 rounded-xl text-center">
                  <p className="text-white font-bold text-sm font-display">{m.value}</p>
                  <p className="text-white/40 text-[10px]">{m.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Desktop / Facebook */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex items-center gap-2 glass px-4 py-1.5 rounded-full">
              <div className="w-2 h-2 rounded-full bg-[#1877F2]" />
              <span className="text-white/60 text-xs font-medium tracking-wide">Facebook Feed Ad</span>
            </div>

            <motion.div className="w-full animate-float-device-b" style={{ y: desktopY }}>
              <DesktopFrame>
                <FacebookAdContent />
              </DesktopFrame>
            </motion.div>

            <div className="flex gap-3">
              {[
                { label: "ROAS", value: "5.1×" },
                { label: "CPM", value: "$7.40" },
                { label: "Reach", value: "480K" },
              ].map((m) => (
                <div key={m.label} className="glass px-3 py-2 rounded-xl text-center">
                  <p className="text-white font-bold text-sm font-display">{m.value}</p>
                  <p className="text-white/40 text-[10px]">{m.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
