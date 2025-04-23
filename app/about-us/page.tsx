import AboutUsSection from "../components/about-us/AboutUsSection";
import CTA from "../components/general/CTA";
import FAQ from "../components/home/FAQ";

export default function AboutUsPage() {
  return (
    <div className="pt-20">
      <AboutUsSection
        title="Who We Are"
        description="Meshwar is reshaping the ride-hailing experience in Egypt by putting both passengers and drivers at the heart of everything we do. We ensure transparent pricing with no surge fees, reliable rides with A/C-equipped vehicles, and unmatched safety with every trip being recorded for your peace of mind."
        description2="Our mission is to support the community by offering secure incomes for drivers and seamless, tech-driven experiences for passengers. From AI-enhanced routing to female-friendly driver options, Meshwar is more than a ride — it's a movement toward smarter, safer, and more equitable transportation."
        vatNumber="VAT Reg Number: 764-599-089"
        imageSrc="/identity/logo/blue-logo.png"
        imageRight={false}
      />

      <FAQ />
      <CTA />

    </div>
  );
}
