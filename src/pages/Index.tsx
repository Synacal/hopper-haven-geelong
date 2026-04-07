import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import OrderSection from "@/components/OrderSection";
import SocialSection from "@/components/SocialSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <OrderSection />
      <SocialSection />
      <FooterSection />
    </main>
  );
};

export default Index;
