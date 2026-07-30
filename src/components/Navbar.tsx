import Link from "next/link";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl tracking-tighter">
          NASIUR<span className="text-primary">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-muted-foreground">
          <Link href="#services" className="hover:text-foreground transition-colors">
            Services
          </Link>
          <Link href="#work" className="hover:text-foreground transition-colors">
            Case Studies
          </Link>
          <Link href="#results" className="hover:text-foreground transition-colors">
            Results
          </Link>
        </div>
        <Button className="rounded-full px-6 font-semibold shadow-[0_0_20px_rgba(var(--primary),0.3)]">
          Let's Talk
        </Button>
      </div>
    </nav>
  );
}
