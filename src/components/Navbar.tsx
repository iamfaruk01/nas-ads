"use client";

import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#showcase" },
  { label: "Results", href: "#metrics" },
  { label: "Company", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contacts", href: "#contact" },
];

/* Underline that slides in from left on hover */
function NavLink({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      className="relative text-white/75 hover:text-white text-[15px] font-normal tracking-[-0.01em] transition-colors duration-300 py-1"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
      <motion.span
        className="absolute bottom-0 left-0 h-px bg-white w-full origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.32, 0, 0.67, 0] }}
      />
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 60));
    return unsub;
  }, [scrollY]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        transition: "background 0.5s ease, border-color 0.5s ease",
        background: scrolled ? "rgba(5,5,5,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-8 md:px-12 lg:px-16 h-[68px] flex items-center justify-between">

        {/* ── Logo wordmark ── */}
        <a
          href="#"
          aria-label="Home"
          className="group flex items-center gap-0 select-none"
        >
          {/* Animated logomark icon */}
          <motion.span
            className="inline-block mr-1 text-white"
            whileHover={{ rotate: -10, scale: 1.15 }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            aria-hidden="true"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 2C6.029 2 2 6.029 2 11s4.029 9 9 9 9-4.029 9-9"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <path
                d="M14.5 2.5C14.5 2.5 20 5 20 11"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
                opacity="0.4"
              />
            </svg>
          </motion.span>

          <span
            className="text-white text-[17px] font-semibold tracking-[-0.04em] leading-none"
            style={{ fontFamily: "var(--font-syne), var(--font-inter), sans-serif" }}
          >
            nasiur
          </span>
        </a>

        {/* ── Desktop nav links ── */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <NavLink key={link.href + link.label} {...link} />
          ))}
        </nav>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden flex flex-col items-end gap-[5px] group"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <motion.span
            className="block h-[1.5px] bg-white rounded-full"
            animate={{
              width: menuOpen ? 24 : 24,
              rotate: menuOpen ? 45 : 0,
              y: menuOpen ? 6.5 : 0,
            }}
            transition={{ duration: 0.25, ease: [0.32, 0, 0.67, 0] }}
            style={{ width: 24 }}
          />
          <motion.span
            className="block h-[1.5px] bg-white rounded-full"
            animate={{
              width: menuOpen ? 0 : 16,
              opacity: menuOpen ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
            style={{ width: 16 }}
          />
          <motion.span
            className="block h-[1.5px] bg-white rounded-full"
            animate={{
              width: menuOpen ? 24 : 20,
              rotate: menuOpen ? -45 : 0,
              y: menuOpen ? -6.5 : 0,
            }}
            transition={{ duration: 0.25, ease: [0.32, 0, 0.67, 0] }}
            style={{ width: 20 }}
          />
        </button>
      </div>

      {/* ── Mobile full-screen menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.32, 0, 0.67, 0] }}
            className="md:hidden absolute top-full left-0 right-0"
            style={{
              background: "rgba(5,5,5,0.97)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <nav className="flex flex-col px-8 py-6 gap-1" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href + link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/70 hover:text-white text-2xl font-semibold tracking-tight py-3 border-b border-white/5 last:border-0 transition-colors duration-200"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
