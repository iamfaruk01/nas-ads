"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  ChevronRight,
  ThumbsUp,
  Share2,
} from "lucide-react";

/* ============================================================
   INSTAGRAM POST AD MOCKUP (inside iPhone frame)
   ============================================================ */
function InstagramAdContent() {
  return (
    <div className="bg-white flex flex-col" style={{ fontFamily: "system-ui, sans-serif" }}>
      {/* Status bar */}
      <div className="bg-white flex items-center justify-between px-4 pt-2 pb-1">
        <span className="text-[10px] font-semibold text-black">5:22 PM</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5">
            {[3, 4, 5].map((h) => (
              <div key={h} className="bg-black rounded-sm" style={{ width: 3, height: h }} />
            ))}
          </div>
          <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="flex gap-px">
            {[1,0,1,1].map((f,i) => (
              <div key={i} className={`rounded-sm ${f ? 'bg-black' : 'bg-gray-300'}`} style={{ width: 3, height: 10 }} />
            ))}
          </div>
        </div>
      </div>

      {/* Instagram top bar */}
      <div className="bg-white flex items-center justify-between px-4 py-2 border-b border-gray-100">
        <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="black"/>
        </svg>
        <Send className="w-5 h-5 text-black" />
      </div>

      {/* Post header */}
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0">
            NR
          </div>
          <div>
            <p className="text-[11px] font-semibold text-black leading-tight">NasiurMedia</p>
            <p className="text-[9px] text-gray-500">Sponsored</p>
          </div>
        </div>
        <MoreHorizontal className="w-4 h-4 text-gray-600" />
      </div>

      {/* Ad image */}
      <div className="relative bg-gradient-to-br from-violet-900 via-blue-900 to-indigo-950 aspect-square flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <div className="text-3xl mb-2">🚀</div>
            <p className="text-white font-bold text-base leading-tight">3× Your ROAS</p>
            <p className="text-white/70 text-xs mt-1">in 90 days — guaranteed</p>
            <div className="mt-3 bg-white/10 rounded-lg px-3 py-1.5 inline-block">
              <p className="text-white text-[10px] font-semibold">$2.4M+ Revenue Generated</p>
            </div>
          </div>
        </div>
        {/* Decorative orbs */}
        <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-violet-500/20 blur-xl" />
        <div className="absolute bottom-4 left-4 w-20 h-20 rounded-full bg-blue-500/20 blur-xl" />
      </div>

      {/* CTA banner */}
      <div className="bg-[#1877F2] flex items-center justify-between px-3 py-2">
        <span className="text-white text-[11px] font-semibold">Book a Free Audit</span>
        <ChevronRight className="w-4 h-4 text-white" />
      </div>

      {/* Actions */}
      <div className="px-3 py-2">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex gap-3">
            <Heart className="w-5 h-5 text-black" />
            <MessageCircle className="w-5 h-5 text-black" />
            <Send className="w-5 h-5 text-black" />
          </div>
          <Bookmark className="w-5 h-5 text-black" />
        </div>
        <p className="text-[10px] font-semibold text-black">2,847 likes</p>
        <p className="text-[9px] text-black leading-relaxed">
          <span className="font-semibold">NasiurMedia</span>{" "}
          Tired of burning budget with no results? Let's build a Meta Ads system that actually scales. 🎯
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   FACEBOOK AD MOCKUP (desktop card style)
   ============================================================ */
function FacebookAdContent() {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-sm"
      style={{ fontFamily: "system-ui, sans-serif" }}
    >
      {/* Post header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
            NR
          </div>
          <div>
            <p className="text-sm font-semibold text-black leading-tight">Nasiur Rahman</p>
            <p className="text-xs text-gray-500">Sponsored · <span className="text-[#1877F2]">🌐</span></p>
          </div>
        </div>
        <MoreHorizontal className="w-5 h-5 text-gray-500" />
      </div>

      {/* Copy */}
      <div className="px-3 pb-2">
        <p className="text-sm text-gray-800 leading-snug">
          🔥 <strong>Stop guessing. Start scaling.</strong> Our data-driven Meta Ads strategy generated $2.4M in revenue for e-commerce brands last quarter.
          <span className="text-[#1877F2]"> See More</span>
        </p>
      </div>

      {/* Ad image */}
      <div className="relative bg-gradient-to-br from-slate-900 via-violet-950 to-indigo-900 h-48 flex items-center justify-center overflow-hidden">
        <div className="text-center">
          <div className="text-4xl mb-2">📈</div>
          <p className="text-white font-bold text-xl">4.2× Average ROAS</p>
          <p className="text-white/60 text-sm mt-1">120+ Campaigns Scaled</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        {/* Decorative */}
        <div className="absolute top-2 right-2 text-xs text-white/40 bg-white/10 rounded px-2 py-0.5">nasiurmedia.com</div>
      </div>

      {/* Link preview bar */}
      <div className="bg-gray-50 border-t border-gray-200 px-3 py-2 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase text-gray-400 tracking-wide">nasiurmedia.com</p>
          <p className="text-sm font-semibold text-gray-900 leading-tight">Book Your Free Meta Ads Audit</p>
          <p className="text-xs text-gray-500">Limited spots — apply now</p>
        </div>
        <button
          className="bg-[#1877F2] text-white text-sm font-semibold px-4 py-1.5 rounded-md whitespace-nowrap ml-3"
          type="button"
        >
          Book Now
        </button>
      </div>

      {/* Reactions */}
      <div className="px-3 py-2 border-t border-gray-100">
        <div className="flex items-center justify-between text-gray-500 text-xs mb-2">
          <div className="flex items-center gap-1">
            <span>❤️👍😮</span>
            <span>5,231</span>
          </div>
          <span>847 comments · 320 shares</span>
        </div>
        <div className="flex items-center justify-around border-t border-gray-100 pt-2 gap-1">
          {[
            { icon: ThumbsUp, label: "Like" },
            { icon: MessageCircle, label: "Comment" },
            { icon: Share2, label: "Share" },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="flex items-center gap-1.5 text-gray-500 text-xs font-semibold flex-1 justify-center py-1 rounded-md hover:bg-gray-100 transition-colors"
              type="button"
            >
              <Icon className="w-4 h-4" aria-hidden="true" />
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   iPhone FRAME WRAPPER
   ============================================================ */
function IPhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative mx-auto"
      style={{
        width: 220,
        borderRadius: 36,
        padding: "10px 8px",
        background: "linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 40%, #2d2d2d 100%)",
        boxShadow: `
          inset 0 0 0 1px rgba(255,255,255,0.12),
          inset 0 2px 4px rgba(255,255,255,0.06),
          0 30px 60px rgba(0,0,0,0.7),
          0 10px 20px rgba(0,0,0,0.5)
        `,
      }}
    >
      {/* Side buttons */}
      <div
        className="absolute -left-[3px] top-20 rounded-l-sm"
        style={{ width: 3, height: 28, background: "#333", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)" }}
      />
      <div
        className="absolute -left-[3px] top-32 rounded-l-sm"
        style={{ width: 3, height: 50, background: "#333" }}
      />
      <div
        className="absolute -left-[3px] top-44 rounded-l-sm"
        style={{ width: 3, height: 50, background: "#333" }}
      />
      <div
        className="absolute -right-[3px] top-28 rounded-r-sm"
        style={{ width: 3, height: 60, background: "#333" }}
      />

      {/* Screen container */}
      <div
        style={{
          borderRadius: 28,
          overflow: "hidden",
          background: "#fff",
          position: "relative",
        }}
      >
        {/* Dynamic island */}
        <div
          className="absolute top-2 left-1/2 -translate-x-1/2 z-10 bg-black rounded-full"
          style={{ width: 80, height: 20 }}
        />
        <div className="pt-6">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Desktop / Browser FRAME WRAPPER
   ============================================================ */
function DesktopFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative w-full max-w-sm mx-auto"
      style={{
        borderRadius: 16,
        overflow: "hidden",
        background: "#1c1c1e",
        boxShadow: `
          0 0 0 1px rgba(255,255,255,0.1),
          0 30px 60px rgba(0,0,0,0.7),
          0 10px 30px rgba(0,0,0,0.5)
        `,
      }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#2a2a2c] border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 bg-[#3a3a3c] rounded-md px-3 py-1 flex items-center gap-2">
          <svg className="w-3 h-3 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span className="text-[10px] text-white/30">facebook.com</span>
        </div>
      </div>

      {/* Facebook chrome */}
      <div className="bg-white">
        {/* FB Nav */}
        <div
          className="flex items-center justify-between px-3 py-2 shadow-sm"
          style={{ borderBottom: "1px solid #e5e5e5" }}
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6" aria-label="Facebook" aria-hidden="true">
            <path fill="#1877F2" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
          </svg>
          <div className="flex gap-2">
            {[
              <path key="home" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />,
              <circle key="notif" cx="12" cy="12" r="10" />,
            ].map((p, i) => (
              <div key={i} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  {p}
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Feed content */}
        <div className="p-2">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   MAIN SHOWCASE SECTION
   ============================================================ */
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
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
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
            transition={{ duration: 0.9, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col items-center gap-6"
          >
            {/* Label */}
            <div className="flex items-center gap-2 glass px-4 py-1.5 rounded-full">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500" />
              <span className="text-white/60 text-xs font-medium tracking-wide">Instagram Feed Ad</span>
            </div>

            {/* Floating iPhone */}
            <motion.div
              className="animate-float-device-a"
              style={{ y: iPhoneY }}
            >
              <IPhoneFrame>
                <InstagramAdContent />
              </IPhoneFrame>
            </motion.div>

            {/* Metrics pill under device */}
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
            transition={{ duration: 0.9, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col items-center gap-6"
          >
            {/* Label */}
            <div className="flex items-center gap-2 glass px-4 py-1.5 rounded-full">
              <div className="w-2 h-2 rounded-full bg-[#1877F2]" />
              <span className="text-white/60 text-xs font-medium tracking-wide">Facebook Feed Ad</span>
            </div>

            {/* Floating desktop */}
            <motion.div
              className="w-full animate-float-device-b"
              style={{ y: desktopY }}
            >
              <DesktopFrame>
                <FacebookAdContent />
              </DesktopFrame>
            </motion.div>

            {/* Metrics pill under device */}
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
