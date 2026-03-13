import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import CommitteeSection from "@/components/CommitteeSection";
import GallerySection from "@/components/GallerySection";
import HistorySection from "@/components/HistorySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--towers-navy)]">
      <HeroSection />
      <EventsSection />
      <CommitteeSection />
      <GallerySection />
      <HistorySection />
      <Footer />
    </main>
  );
}
