import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GiftCardsSection from "@/components/GiftCardsSection";
import InstructionsSection from "@/components/InstructionsSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <GiftCardsSection />
      <InstructionsSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
