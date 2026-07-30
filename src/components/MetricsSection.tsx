"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { TrendingUp, DollarSign, BarChart3, Users } from "lucide-react";

interface MetricProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  delay?: number;
  color: string;
}

function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  label,
  sublabel,
  icon: Icon,
  delay = 0,
  color,
}: MetricProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20, mass: 0.8 });

  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        motionVal.set(value);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay, motionVal]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => {
      if (displayRef.current) {
        // Format based on magnitude
        let display: string;
        if (value >= 1000000) {
          display = `${prefix}${(v / 1000000).toFixed(1)}M${suffix}`;
        } else if (value >= 1000) {
          display = `${prefix}${(v / 1000).toFixed(0)}K${suffix}`;
        } else if (Number.isInteger(value) && value < 100) {
          display = `${prefix}${v.toFixed(1)}${suffix}`;
        } else {
          display = `${prefix}${Math.round(v)}${suffix}`;
        }
        displayRef.current.textContent = display;
      }
    });
    return unsubscribe;
  }, [spring, value, prefix, suffix]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: delay / 1000,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="card-gradient-border p-8 group hover:scale-[1.02] transition-transform duration-500"
    >
      {/* Icon with glow */}
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 relative"
        style={{ background: `${color}20` }}
      >
        <Icon className="w-6 h-6" style={{ color }} aria-hidden="true" />
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
          style={{ background: `${color}30` }}
        />
      </div>

      {/* Number */}
      <p className="counter-value mb-2" style={{ color: "white" }}>
        <span ref={displayRef}>{prefix}0{suffix}</span>
      </p>

      {/* Label */}
      <p className="text-white font-semibold text-lg mb-1 font-display">{label}</p>
      <p className="text-white/40 text-sm">{sublabel}</p>

      {/* Gradient accent line */}
      <div
        className="mt-6 h-0.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
      />
    </motion.div>
  );
}

const metrics: MetricProps[] = [
  {
    value: 5000000,
    prefix: "$",
    suffix: "+",
    label: "Ad Spend Managed",
    sublabel: "Profitably deployed across Meta platforms",
    icon: DollarSign,
    delay: 0,
    color: "#a855f7",
  },
  {
    value: 4.2,
    suffix: "×",
    label: "Average ROAS",
    sublabel: "Return on ad spend across all clients",
    icon: TrendingUp,
    delay: 150,
    color: "#3b82f6",
  },
  {
    value: 120,
    suffix: "+",
    label: "Campaigns Scaled",
    sublabel: "From launch to 6-figure monthly budgets",
    icon: BarChart3,
    delay: 300,
    color: "#f97316",
  },
  {
    value: 42,
    suffix: "+",
    label: "Brands Grown",
    sublabel: "E-commerce, SaaS, and D2C verticals",
    icon: Users,
    delay: 450,
    color: "#ec4899",
  },
];

export default function MetricsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="metrics"
      className="relative py-32 overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* Subtle gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 100%, rgba(59,130,246,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="divider-gradient mb-20 mx-auto max-w-xl" />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-4 block">
            Proven Results
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Numbers That{" "}
            <span className="text-gradient-brand">Speak.</span>
          </h2>
          <p className="text-white/40 text-lg mt-4 max-w-lg mx-auto">
            Every dollar tracked. Every campaign optimized. Every result documented.
          </p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <AnimatedCounter key={metric.label} {...metric} />
          ))}
        </div>

        {/* Testimonial quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-16 max-w-2xl mx-auto text-center"
        >
          <div className="glass rounded-3xl p-8 relative">
            <div className="text-5xl text-violet-500/40 font-serif leading-none mb-4">"</div>
            <p className="text-white/70 text-lg leading-relaxed italic">
              Nasiur scaled our Meta Ads from $3K/month to $85K/month in under 6 months,
              while maintaining a 4.8× ROAS throughout. Absolutely transformative.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                SA
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-sm">Sarah A.</p>
                <p className="text-white/40 text-xs">CEO, LumineCosmetics.com</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
