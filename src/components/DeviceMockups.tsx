"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
   INSTAGRAM POST AD CONTENT (INTERACTIVE & SCROLLABLE)
   ============================================================ */

const INSTAGRAM_POSTS = [
  {
    id: "post-1",
    author: "NasiurMedia",
    avatarText: "NR",
    tagline: "Sponsored",
    title: "3× Your ROAS",
    subtitle: "in 90 days — guaranteed",
    highlightPill: "$2.4M+ Revenue Generated",
    emoji: "🚀",
    bgGradient: "from-violet-950 via-purple-900 to-indigo-950",
    glow1: "bg-violet-500/30",
    glow2: "bg-blue-500/25",
    ctaText: "Book a Free Audit",
    initialLikes: 2847,
    caption: "Tired of burning ad budget? We engineer high-converting Meta Ads scaling systems built for predictable e-commerce growth. 🎯",
    badge: "SCALE SYSTEM",
  },
  {
    id: "post-2",
    author: "NasiurMedia",
    avatarText: "NR",
    tagline: "Sponsored",
    title: "Creative Strategy That Converts",
    subtitle: "Stop losing revenue on low-CTR ads",
    highlightPill: "4.8× Avg ROAS Across 45 DTC Brands",
    emoji: "🎨",
    bgGradient: "from-slate-950 via-cyan-950 to-emerald-950",
    glow1: "bg-emerald-500/30",
    glow2: "bg-cyan-500/25",
    ctaText: "Get Creative Audit",
    initialLikes: 1932,
    caption: "High-performing ads start with high-converting hooks. Our creative audit uncovers the exact angles your audience responds to.",
    badge: "CREATIVE AUDIT",
  },
  {
    id: "post-3",
    author: "NasiurMedia",
    avatarText: "NR",
    tagline: "Sponsored",
    title: "$0 ➔ $500k/mo E-com Scale",
    subtitle: "Full-funnel Meta Ads framework",
    highlightPill: "+312% Revenue Growth in 90 Days",
    emoji: "📈",
    bgGradient: "from-orange-950 via-amber-950 to-slate-950",
    glow1: "bg-amber-500/30",
    glow2: "bg-orange-500/25",
    ctaText: "Read Full Case Study",
    initialLikes: 4120,
    caption: "Case Study Breakdown: How we took a apparel brand from $15k/mo to $500k/mo using scientific ad testing & retargeting matrix. 📊",
    badge: "CASE STUDY",
  },
  {
    id: "post-4",
    author: "NasiurMedia",
    avatarText: "NR",
    tagline: "Sponsored",
    title: "15M+ High-Intent Impressions",
    subtitle: "Rated 5.0★ by DTC Founders",
    highlightPill: "Proven Acquisition Funnels",
    emoji: "🏆",
    bgGradient: "from-indigo-950 via-blue-950 to-purple-950",
    glow1: "bg-blue-500/30",
    glow2: "bg-violet-500/25",
    ctaText: "See Client Reviews",
    initialLikes: 3450,
    caption: "“Nasiur doubled our ROAS in 30 days while lowering CAC by 35%. Best investment we made this year.” — DTC Brand Founder ⭐⭐⭐⭐⭐",
    badge: "CLIENT PROOF",
  },
  {
    id: "post-5",
    author: "NasiurMedia",
    avatarText: "NR",
    tagline: "Sponsored",
    title: "Free 20-Min Growth Audit",
    subtitle: "Uncover hidden ad account profit gaps",
    highlightPill: "Only 2 Spots Left This Week",
    emoji: "🔥",
    bgGradient: "from-rose-950 via-purple-950 to-slate-950",
    glow1: "bg-rose-500/30",
    glow2: "bg-purple-500/25",
    ctaText: "Claim Your Free Spot",
    initialLikes: 5612,
    caption: "Ready to scale? Book a 1-on-1 audit where we analyze your ad setup, creative hooks, and bidding strategy live. ⚡",
    badge: "LIMITED AUDIT",
  },
];

const STORIES_HIGHLIGHTS = [
  { label: "Results", icon: "📈", gradient: "from-amber-500 via-rose-500 to-purple-600" },
  { label: "Audit", icon: "🔍", gradient: "from-blue-500 via-indigo-500 to-purple-600" },
  { label: "Strategy", icon: "⚡", gradient: "from-emerald-400 via-teal-500 to-cyan-600" },
  { label: "Creative", icon: "🎬", gradient: "from-pink-500 via-purple-500 to-indigo-600" },
  { label: "Wins", icon: "🏆", gradient: "from-yellow-400 via-orange-500 to-red-500" },
];

export function InstagramAdContent() {
  const [likes, setLikes] = useState<Record<string, boolean>>({});
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>(() =>
    INSTAGRAM_POSTS.reduce((acc, p) => ({ ...acc, [p.id]: p.initialLikes }), {})
  );
  const [bookmarks, setBookmarks] = useState<Record<string, boolean>>({});
  const [heartPops, setHeartPops] = useState<Record<string, boolean>>({});
  const [activeStory, setActiveStory] = useState<string | null>(null);

  const toggleLike = (postId: string) => {
    setLikes((prev) => {
      const isCurrentlyLiked = prev[postId];
      const nextState = !isCurrentlyLiked;
      setLikeCounts((cPrev) => ({
        ...cPrev,
        [postId]: cPrev[postId] + (nextState ? 1 : -1),
      }));
      return { ...prev, [postId]: nextState };
    });
  };

  const toggleBookmark = (postId: string) => {
    setBookmarks((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  const handleDoubleTap = (postId: string) => {
    if (!likes[postId]) {
      setLikes((prev) => ({ ...prev, [postId]: true }));
      setLikeCounts((cPrev) => ({ ...cPrev, [postId]: cPrev[postId] + 1 }));
    }
    setHeartPops((prev) => ({ ...prev, [postId]: true }));
    setTimeout(() => {
      setHeartPops((prev) => ({ ...prev, [postId]: false }));
    }, 800);
  };

  return (
    <div
      className="bg-white flex flex-col h-[470px] select-none"
      style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      {/* 1. Status bar (Fixed) */}
      <div className="bg-white flex items-center justify-between px-4 pt-2 pb-1 flex-shrink-0 z-20 border-b border-gray-50">
        <span className="text-[10px] font-semibold text-black">9:41 AM</span>
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
            {[1, 0, 1, 1].map((f, i) => (
              <div key={i} className={`rounded-sm ${f ? "bg-black" : "bg-gray-300"}`} style={{ width: 3, height: 10 }} />
            ))}
          </div>
        </div>
      </div>

      {/* 2. Instagram top header bar (Fixed) */}
      <div className="bg-white flex items-center justify-between px-3.5 py-1.5 border-b border-gray-100 flex-shrink-0 z-20">
        <div className="flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="black" />
          </svg>
          <span className="font-semibold text-xs text-black tracking-tight font-serif italic">Instagram</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Heart className="w-4 h-4 text-black cursor-pointer hover:opacity-70 transition-opacity" />
          <Send className="w-4 h-4 text-black cursor-pointer hover:opacity-70 transition-opacity" />
        </div>
      </div>

      {/* 3. SCROLLABLE FEED AREA */}
      <div
        className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* Interactive Scroll Hint Badge */}
        <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white text-[9px] font-medium py-1 px-3 text-center flex items-center justify-center gap-1.5 shadow-inner">
          <span className="animate-pulse">📱</span>
          <span>Interactive Feed — Scroll to view all 5 posts</span>
          <span className="text-[8px] opacity-80">(Double-tap to like)</span>
        </div>

        {/* Stories reel bar */}
        <div className="flex items-center gap-3 px-3 py-2 border-b border-gray-100 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {STORIES_HIGHLIGHTS.map((story) => (
            <button
              key={story.label}
              onClick={() => setActiveStory(story.label)}
              className="flex flex-col items-center gap-1 flex-shrink-0 group cursor-pointer"
              type="button"
            >
              <div
                className={`p-[1.5px] rounded-full bg-gradient-to-tr ${story.gradient} transition-transform ${
                  activeStory === story.label ? "scale-105 ring-2 ring-violet-400 ring-offset-1" : "hover:scale-105"
                }`}
              >
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-sm shadow-sm border border-white">
                  {story.icon}
                </div>
              </div>
              <span className="text-[8px] font-medium text-gray-700 leading-none">{story.label}</span>
            </button>
          ))}
        </div>

        {/* Posts List */}
        <div className="divide-y divide-gray-100">
          {INSTAGRAM_POSTS.map((post) => {
            const isLiked = !!likes[post.id];
            const isSaved = !!bookmarks[post.id];
            const currentLikes = likeCounts[post.id];
            const isHeartPopping = !!heartPops[post.id];

            return (
              <article key={post.id} className="bg-white">
                {/* Post Header */}
                <div className="flex items-center justify-between px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 flex items-center justify-center text-white text-[9px] font-bold shadow-sm flex-shrink-0">
                      {post.avatarText}
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <p className="text-[11px] font-semibold text-black leading-tight">{post.author}</p>
                        <span className="bg-violet-100 text-violet-700 text-[7px] font-bold px-1 rounded">PRO</span>
                      </div>
                      <p className="text-[9px] text-gray-500 leading-none mt-0.5">{post.tagline}</p>
                    </div>
                  </div>
                  <MoreHorizontal className="w-4 h-4 text-gray-500 cursor-pointer" />
                </div>

                {/* Post Graphic / Image (Double-tap to like) */}
                <div
                  onDoubleClick={() => handleDoubleTap(post.id)}
                  className={`relative bg-gradient-to-br ${post.bgGradient} aspect-square flex items-center justify-center overflow-hidden cursor-pointer group`}
                >
                  {/* Glow Orbs */}
                  <div className={`absolute top-4 right-4 w-20 h-20 rounded-full ${post.glow1} blur-xl pointer-events-none`} />
                  <div className={`absolute bottom-4 left-4 w-24 h-24 rounded-full ${post.glow2} blur-xl pointer-events-none`} />

                  {/* Top Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-white/10 backdrop-blur-md border border-white/20 px-2 py-0.5 rounded-full">
                    <span className="text-[8px] font-bold tracking-wider text-white uppercase">{post.badge}</span>
                  </div>

                  {/* Graphic Content */}
                  <div className="text-center px-4 z-10">
                    <div className="text-3xl mb-1.5 transition-transform group-hover:scale-110 duration-300">
                      {post.emoji}
                    </div>
                    <p className="text-white font-black text-base sm:text-lg leading-tight tracking-tight drop-shadow-md">
                      {post.title}
                    </p>
                    <p className="text-white/80 text-[11px] mt-1 font-medium">{post.subtitle}</p>
                    <div className="mt-2.5 bg-white/15 backdrop-blur-md border border-white/20 rounded-lg px-2.5 py-1 inline-block shadow-lg">
                      <p className="text-white text-[9px] font-bold tracking-wide">{post.highlightPill}</p>
                    </div>
                  </div>

                  {/* Double Tap Heart Pop Animation */}
                  <AnimatePresence>
                    {isHeartPopping && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.3 }}
                        animate={{ opacity: 1, scale: 1.2 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
                        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none bg-black/20"
                      >
                        <Heart className="w-16 h-16 fill-red-500 text-red-500 drop-shadow-2xl" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Double Tap Hint overlay on hover */}
                  <div className="absolute bottom-2 text-center text-white/50 text-[7px] opacity-0 group-hover:opacity-100 transition-opacity">
                    Double-tap to like ❤️
                  </div>
                </div>

                {/* Interactive CTA Banner */}
                <a
                  href="#contact"
                  className="bg-[#1877F2] hover:bg-[#166fe5] transition-colors flex items-center justify-between px-3 py-1.5 cursor-pointer text-white"
                >
                  <span className="text-[10px] font-semibold tracking-wide">{post.ctaText}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-white" />
                </a>

                {/* Actions & Engagement Bar */}
                <div className="px-3 py-2">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => toggleLike(post.id)}
                        className="focus:outline-none cursor-pointer transition-transform active:scale-125"
                        type="button"
                        aria-label="Like post"
                      >
                        <Heart
                          className={`w-4 h-4 transition-colors ${
                            isLiked ? "fill-red-500 text-red-500" : "text-black hover:text-gray-600"
                          }`}
                        />
                      </button>
                      <MessageCircle className="w-4 h-4 text-black cursor-pointer hover:text-gray-600 transition-colors" />
                      <Send className="w-4 h-4 text-black cursor-pointer hover:text-gray-600 transition-colors" />
                    </div>
                    <button
                      onClick={() => toggleBookmark(post.id)}
                      className="focus:outline-none cursor-pointer transition-transform active:scale-110"
                      type="button"
                      aria-label="Save post"
                    >
                      <Bookmark
                        className={`w-4 h-4 transition-colors ${
                          isSaved ? "fill-black text-black" : "text-black hover:text-gray-600"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Likes Count */}
                  <p className="text-[10px] font-bold text-black">
                    {currentLikes.toLocaleString()} likes
                  </p>

                  {/* Caption */}
                  <p className="text-[9px] text-gray-900 leading-tight mt-0.5">
                    <span className="font-semibold text-black">{post.author}</span>{" "}
                    {post.caption}
                  </p>
                </div>
              </article>
            );
          })}

          {/* Feed Footer */}
          <div className="p-4 text-center bg-gray-50 flex flex-col items-center gap-1 border-t border-gray-100">
            <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 text-xs font-bold">
              ✓
            </div>
            <p className="text-[10px] font-semibold text-gray-800">You&apos;re All Caught Up</p>
            <p className="text-[8px] text-gray-500">You&apos;ve seen all 5 agency campaign posts</p>
          </div>
        </div>
      </div>

      {/* 4. Instagram Bottom Navigation Bar (Fixed) */}
      <div className="bg-white border-t border-gray-200 px-4 py-1.5 flex items-center justify-between flex-shrink-0 z-20">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-black" aria-label="Home">
          <path d="M22 23h-7v-7h-6v7H1V10h-1L12 0l12 10h-1v13z" />
        </svg>
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-black" strokeWidth={2} aria-label="Search">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <div className="w-4 h-4 border-2 border-black rounded-md flex items-center justify-center text-[10px] font-bold">
          +
        </div>
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-black" strokeWidth={2} aria-label="Reels">
          <rect x="2" y="2" width="20" height="20" rx="4" />
          <polygon points="10 8 16 12 10 16 10 8" fill="black" />
        </svg>
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white text-[7px] font-bold border border-black">
          NR
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   FACEBOOK AD CONTENT
   ============================================================ */
export function FacebookAdContent({ compact = false }: { compact?: boolean }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm" style={{ fontFamily: "system-ui, sans-serif" }}>
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

      {/* Copy — hidden in compact mode */}
      {!compact && (
        <div className="px-3 pb-2">
          <p className="text-sm text-gray-800 leading-snug">
            🔥 <strong>Stop guessing. Start scaling.</strong> Our data-driven Meta Ads strategy generated $2.4M in revenue last quarter.
            <span className="text-[#1877F2]"> See More</span>
          </p>
        </div>
      )}

      {/* Ad image */}
      <div className="relative bg-gradient-to-br from-slate-900 via-violet-950 to-indigo-900 h-48 flex items-center justify-center overflow-hidden">
        <div className="text-center">
          <div className="text-4xl mb-2">📈</div>
          <p className="text-white font-bold text-xl">4.2× Average ROAS</p>
          <p className="text-white/60 text-sm mt-1">120+ Campaigns Scaled</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute top-2 right-2 text-xs text-white/40 bg-white/10 rounded px-2 py-0.5">nasiurmedia.com</div>
      </div>

      {/* Link preview bar */}
      <div className="bg-gray-50 border-t border-gray-200 px-3 py-2 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase text-gray-400 tracking-wide">nasiurmedia.com</p>
          <p className="text-sm font-semibold text-gray-900 leading-tight">Book Your Free Meta Ads Audit</p>
          <p className="text-xs text-gray-500">Limited spots — apply now</p>
        </div>
        <button className="bg-[#1877F2] text-white text-sm font-semibold px-4 py-1.5 rounded-md whitespace-nowrap ml-3" type="button">
          Book Now
        </button>
      </div>

      {/* Reactions — hidden in compact mode */}
      {!compact && (
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
              <button key={label} className="flex items-center gap-1.5 text-gray-500 text-xs font-semibold flex-1 justify-center py-1 rounded-md hover:bg-gray-100 transition-colors" type="button">
                <Icon className="w-4 h-4" aria-hidden="true" />
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


/* ============================================================
   iPHONE FRAME
   ============================================================ */
export function IPhoneFrame({ children, scale = 260 / 220 }: { children: React.ReactNode; scale?: number }) {
  const widthPx = 220 * scale;
  return (
    <div
      className="relative mx-auto max-w-full"
      style={{
        width: widthPx,
        borderRadius: 36 * scale,
        padding: `${10 * scale}px ${8 * scale}px`,
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
      <div className="absolute -left-[3px] rounded-l-sm" style={{ top: 70 * scale, width: 3, height: 28 * scale, background: "#333" }} />
      <div className="absolute -left-[3px] rounded-l-sm" style={{ top: 110 * scale, width: 3, height: 48 * scale, background: "#333" }} />
      <div className="absolute -left-[3px] rounded-l-sm" style={{ top: 168 * scale, width: 3, height: 48 * scale, background: "#333" }} />
      <div className="absolute -right-[3px] rounded-r-sm" style={{ top: 115 * scale, width: 3, height: 58 * scale, background: "#333" }} />

      {/* Screen */}
      <div style={{ borderRadius: 28 * scale, overflow: "hidden", background: "#fff", position: "relative" }}>
        {/* Dynamic Island Pill Notch */}
        <div
          className="absolute top-[8px] left-1/2 -translate-x-1/2 z-30 bg-black rounded-full flex items-center justify-end px-1.5 shadow-md pointer-events-none"
          style={{ width: 68 * scale, height: 14 * scale }}
        >
          <div className="w-2 h-2 rounded-full bg-[#161618] border border-white/10" />
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   DESKTOP / BROWSER FRAME
   ============================================================ */
export function DesktopFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative w-full"
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

      {/* Facebook nav */}
      <div className="bg-white">
        <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
          <svg viewBox="0 0 24 24" className="w-6 h-6" aria-label="Facebook" aria-hidden="true">
            <path fill="#1877F2" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
          </svg>
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
}
