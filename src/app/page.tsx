import Hero from "@/components/Hero";
import ActionCards from "@/components/ActionCards";
import SemiChips from "@/components/SemiChips";
import WarrantyBanner from "@/components/WarrantyBanner";
import WhyEastcord from "@/components/WhyEastcord";
import LocationSection from "@/components/LocationSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ActionCards />
      <SemiChips />
      <WarrantyBanner />
      <WhyEastcord />
      <LocationSection />
    </main>
  );
}
