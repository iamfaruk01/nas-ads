"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Globe, AtSign, Play, MessageCircle, Calendar } from "lucide-react";
import MagneticButton from "./MagneticButton";

const socials = [
  { icon: Globe, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: AtSign, label: "Instagram", href: "https://instagram.com" },
  { icon: Play, label: "Facebook", href: "https://facebook.com" },
  { icon: MessageCircle, label: "X / Twitter", href: "https://twitter.com" },
];

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer
      id="contact"
      className="relative overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* Gradient divider top */}
      <div className="divider-gradient" />

      {/* CTA block */}
      <section
        ref={ref}
        className="relative py-32"
      >
        {/* Background glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 80%, rgba(124,58,237,0.12) 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* Badge */}
            <span className="glass inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white/50 tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Now Accepting New Clients
            </span>

            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Ready to{" "}
              <span className="text-gradient-warm">Multiply</span>
              <br />
              Your Revenue?
            </h2>

            <p className="text-white/40 text-xl max-w-lg mx-auto mb-12 leading-relaxed">
              Let's audit your current Meta Ads setup and build a roadmap to 3–5× your ROAS.
              First call is completely free.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <MagneticButton
                id="footer-cta-primary"
                variant="primary"
                className="text-lg py-5 px-10 shadow-2xl shadow-violet-900/40"
                href="https://calendly.com"
              >
                <Calendar className="w-5 h-5" aria-hidden="true" />
                Book a Free Consultation
              </MagneticButton>

              <MagneticButton
                id="footer-cta-email"
                variant="secondary"
                href="mailto:nasirmarinkhan@gmail.com"
              >
                Or Send an Email
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </MagneticButton>
            </div>

            {/* Socials */}
            <div className="flex items-center justify-center gap-4">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 glass rounded-xl flex items-center justify-center group transition-all duration-300 hover:scale-110"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Icon
                    className="w-5 h-5 text-white/50 group-hover:text-white transition-colors duration-300"
                    style={{ color: undefined }}
                    aria-hidden="true"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-sm">
            © {new Date().getFullYear()} Nasiur Rahman. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms", "Work With Me"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/25 hover:text-white/60 text-sm transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
