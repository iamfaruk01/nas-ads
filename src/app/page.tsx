import { Navbar } from "@/components/Navbar";
import { FadeIn } from "@/components/animations/FadeIn";
import { GlowingCard } from "@/components/ui/glowing-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Target, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Accepting New Clients for Q3
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1]">
              Scale Your Brand With <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                Data-Driven Meta Ads
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Stop guessing. Start scaling. I help direct-to-consumer brands achieve predictable, profitable growth through elite media buying and creative strategy.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full text-base px-8 h-14 w-full sm:w-auto shadow-[0_0_30px_rgba(var(--primary),0.3)]">
                Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base px-8 h-14 w-full sm:w-auto border-border/50 bg-background/50 backdrop-blur-sm hover:bg-muted/50">
                View Case Studies
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 border-y border-border/40 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-border/40 text-center">
            <FadeIn delay={0.1} className="flex flex-col items-center justify-center p-4">
              <h3 className="text-5xl md:text-6xl font-bold tracking-tighter mb-2 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50">$5M+</h3>
              <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">Ad Spend Managed</p>
            </FadeIn>
            <FadeIn delay={0.2} className="flex flex-col items-center justify-center p-4">
              <h3 className="text-5xl md:text-6xl font-bold tracking-tighter mb-2 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50">4.2x</h3>
              <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">Average ROAS</p>
            </FadeIn>
            <FadeIn delay={0.3} className="flex flex-col items-center justify-center p-4">
              <h3 className="text-5xl md:text-6xl font-bold tracking-tighter mb-2 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50">12+</h3>
              <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">Brands Scaled</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-2xl mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">What I Do</h2>
              <p className="text-muted-foreground text-lg">A holistic approach to paid social that turns clicks into loyal customers.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <GlowingCard className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Media Buying</h3>
                  <p className="text-muted-foreground">End-to-end campaign management, audience testing, and aggressive scaling using advanced account structures.</p>
                </div>
              </GlowingCard>
            </FadeIn>

            <FadeIn delay={0.2}>
              <GlowingCard className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Creative Strategy</h3>
                  <p className="text-muted-foreground">Data-backed creative direction. I tell your brand story through high-converting UGC and static ads.</p>
                </div>
              </GlowingCard>
            </FadeIn>

            <FadeIn delay={0.3}>
              <GlowingCard className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Funnel Optimization</h3>
                  <p className="text-muted-foreground">Traffic is useless if it doesn't convert. I analyze your landing pages and offer suggestions to maximize CR and AOV.</p>
                </div>
              </GlowingCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="work" className="py-32 bg-card/30 border-t border-border/40">
        <div className="container mx-auto px-6">
           <FadeIn>
            <div className="max-w-2xl mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Proven Results</h2>
              <p className="text-muted-foreground text-lg">Real numbers from recent client campaigns.</p>
            </div>
          </FadeIn>

          <div className="space-y-12">
            {[1, 2].map((item, i) => (
              <FadeIn key={item} delay={0.1 * i} direction="up">
                <div className="group relative rounded-3xl overflow-hidden border border-border/50 bg-background flex flex-col md:flex-row">
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10">
                    <div className="mb-6 flex gap-4">
                      <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">E-Commerce</div>
                      <div className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-semibold uppercase tracking-wider">Apparel</div>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Scaled from $10k to $100k/mo profitably</h3>
                    <p className="text-muted-foreground mb-8">Revamped the entire creative strategy, focusing on unboxing experiences and direct response copy, resulting in a 3x drop in CPA.</p>
                    <div className="grid grid-cols-2 gap-6 mt-auto">
                      <div>
                        <p className="text-4xl font-bold text-white mb-1">5.8x</p>
                        <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">ROAS</p>
                      </div>
                      <div>
                        <p className="text-4xl font-bold text-white mb-1">-65%</p>
                        <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">CPA</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 bg-muted relative min-h-[300px]">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent md:block hidden" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent md:hidden block" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 relative overflow-hidden border-t border-border/40">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Ready to scale?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">Let's audit your current ad account and uncover the hidden revenue you're leaving on the table.</p>
            <Button size="lg" className="rounded-full text-base px-10 h-16 shadow-[0_0_40px_rgba(var(--primary),0.4)]">
              Book Your Free Audit
            </Button>
          </FadeIn>
        </div>
      </section>
      
      <footer className="py-8 border-t border-border/40 text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Nasiur. All rights reserved.</p>
      </footer>
    </main>
  );
}
