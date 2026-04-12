import { ArrowRight, AlertTriangle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-disaster-relief.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Emergency Badge */}
          <div className="inline-flex items-center gap-2 bg-emergency/20 backdrop-blur-sm border border-emergency/40 text-emergency-foreground px-4 py-2 rounded-full mb-8 animate-pulse-slow">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-semibold">Active Emergency Response Operations</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 text-shadow-lg animate-fadeInUp">
            Disaster Relief
            <span className="block text-accent mt-2">Coordination System</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 text-shadow animate-fadeInUp delay-200">
            Official Government Portal for coordinating disaster response, relief operations, 
            and emergency assistance across the nation. Together, we rebuild stronger.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp delay-300">
            <Button 
              size="lg" 
              className="bg-emergency text-emergency-foreground font-bold text-lg px-8 py-6 shadow-lg hover:bg-emergency/90 group"
            >
              <AlertTriangle className="w-5 h-5 mr-2" />
              Report Emergency
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 text-lg px-8 py-6"
            >
              <PhoneCall className="w-5 h-5 mr-2" />
              Request Assistance
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fadeInUp delay-400">
            {[
              { value: "24/7", label: "Active Support" },
              { value: "50K+", label: "Lives Saved" },
              { value: "500+", label: "Relief Camps" },
              { value: "100%", label: "Coverage" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/20"
              >
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
