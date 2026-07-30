"use client";

import { motion } from "framer-motion";

const orbs = [
  {
    id: "orb-1",
    className: "w-[600px] h-[600px] top-[-200px] left-[-100px]",
    gradient: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
    duration: 18,
    delay: 0,
  },
  {
    id: "orb-2",
    className: "w-[500px] h-[500px] top-[10%] right-[-150px]",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
    duration: 22,
    delay: -6,
  },
  {
    id: "orb-3",
    className: "w-[400px] h-[400px] top-[50%] left-[30%]",
    gradient: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)",
    duration: 16,
    delay: -10,
  },
  {
    id: "orb-4",
    className: "w-[350px] h-[350px] bottom-[5%] right-[20%]",
    gradient: "radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)",
    duration: 20,
    delay: -4,
  },
];

export default function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full ${orb.className}`}
          style={{ background: orb.gradient }}
          animate={{
            y: [0, -30, 10, -15, 0],
            x: [0, 15, -10, 5, 0],
            scale: [1, 1.08, 0.97, 1.03, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Geometric rings */}
      <motion.div
        className="absolute top-[15%] right-[10%] w-32 h-32 rounded-full"
        style={{
          border: "1px solid rgba(124,58,237,0.25)",
          boxShadow: "0 0 30px rgba(124,58,237,0.1) inset",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-[15%] right-[10%] w-48 h-48 rounded-full -translate-x-8 -translate-y-8"
        style={{
          border: "1px solid rgba(59,130,246,0.15)",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      />

      {/* Small glowing dots */}
      {[
        { id: "dot-1", top: "20%", left: "15%", color: "rgba(124,58,237,0.8)", size: 4, dur: 3 },
        { id: "dot-2", top: "60%", left: "80%", color: "rgba(59,130,246,0.8)", size: 3, dur: 4 },
        { id: "dot-3", top: "75%", left: "25%", color: "rgba(249,115,22,0.8)", size: 5, dur: 5 },
        { id: "dot-4", top: "35%", left: "70%", color: "rgba(236,72,153,0.7)", size: 3, dur: 3.5 },
      ].map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            background: dot.color,
            boxShadow: `0 0 ${dot.size * 4}px ${dot.color}`,
          }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.4, 0.8] }}
          transition={{ duration: dot.dur, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
