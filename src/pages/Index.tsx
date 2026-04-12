import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import EmergencyBanner from "@/components/EmergencyBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <EmergencyBanner />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
