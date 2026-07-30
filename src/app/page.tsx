import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AdShowcase from "@/components/AdShowcase";
import MetricsSection from "@/components/MetricsSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="noise relative">
      <Navbar />
      <HeroSection />
      <AdShowcase />
      <MetricsSection />
      <Footer />
    </main>
  );
}
