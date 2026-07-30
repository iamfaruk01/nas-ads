"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Showcase", href: "#showcase" },
  { label: "Results", href: "#metrics" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  const navY = useTransform(scrollY, [0, 100], [0, 0]);

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 50));
    return unsub;
  }, [scrollY]);

  return (
    <motion.header
      style={{ y: navY }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    >
      <div
        className="mx-4 mt-4 rounded-2xl transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(5,5,5,0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          border: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div className="container mx-auto px-5 py-3.5 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="flex items-center gap-2.5 group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-900/50">
              <span className="text-white text-xs font-extrabold font-display">N</span>
            </div>
            <span className="text-white font-semibold text-sm tracking-wide font-display">
              Nasiur<span className="text-violet-400">Media</span>
            </span>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/50 hover:text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <MagneticButton
                id="nav-cta"
                variant="primary"
                className="text-sm py-2.5 px-6"
                href="#contact"
              >
                Book a Call
              </MagneticButton>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-white/60 hover:text-white transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5 px-5 py-4 flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/60 hover:text-white py-2 text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <MagneticButton
              id="nav-mobile-cta"
              variant="primary"
              className="mt-2 w-full justify-center text-sm py-3"
              href="#contact"
            >
              Book a Call
            </MagneticButton>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
