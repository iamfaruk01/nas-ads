"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  id?: string;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  variant = "primary",
  id,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 15, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  /* Inner text slight offset for extra magnetism feel */
  const textX = useTransform(springX, (v) => v * 0.4);
  const textY = useTransform(springY, (v) => v * 0.4);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    x.set(deltaX * 0.35);
    y.set(deltaY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const baseClasses = "relative cursor-pointer select-none inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300";

  const variantClasses = {
    primary:
      "px-8 py-4 rounded-2xl text-white text-base tracking-wide overflow-hidden",
    secondary:
      "px-7 py-3.5 rounded-xl border border-white/15 text-white/80 hover:text-white text-sm glass",
    ghost:
      "px-6 py-3 text-white/60 hover:text-white text-sm",
  };

  const content = (
    <motion.div
      ref={ref}
      id={id}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
    >
      {variant === "primary" && (
        <>
          {/* Animated gradient background */}
          <span
            className="absolute inset-0 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, #7c3aed, #3b82f6, #ec4899, #7c3aed)",
              backgroundSize: "300% 300%",
              animation: isHovered
                ? "shimmer-bg 2s linear infinite"
                : "none",
            }}
          />
          {/* Hover glow ring */}
          <motion.span
            className="absolute inset-0 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, #7c3aed, #3b82f6, #ec4899)",
              opacity: 0,
              filter: "blur(12px)",
            }}
            animate={{ opacity: isHovered ? 0.6 : 0 }}
            transition={{ duration: 0.3 }}
          />
          {/* Static gradient (fallback) */}
          {!isHovered && (
            <span
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
              }}
            />
          )}
        </>
      )}

      <motion.span className="relative z-10 flex items-center gap-2" style={{ x: textX, y: textY }}>
        {children}
      </motion.span>
    </motion.div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
