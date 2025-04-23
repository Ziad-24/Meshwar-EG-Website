import CTA from "./components/general/CTA";
import Benefits from "./components/home/benefits/Benefits";
import FAQ from "./components/home/FAQ";
import Hero from "./components/home/hero";
import MobileAppPreview from "./components/home/MobileAppPreview";

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <Benefits />
      <FAQ />
      <MobileAppPreview />
      <CTA />
    </div>

  );
}
