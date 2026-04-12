import { 
  AlertTriangle, 
  Home, 
  Heart, 
  Truck, 
  Users, 
  FileText,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: AlertTriangle,
    title: "Report Disaster",
    description: "Immediately report natural disasters, accidents, or emergencies in your area for rapid response.",
    color: "emergency",
    href: "#report",
  },
  {
    icon: Home,
    title: "Relief Camps",
    description: "Find nearest relief camps, temporary shelters, and safe zones with real-time availability.",
    color: "success",
    href: "#camps",
  },
  {
    icon: Heart,
    title: "Medical Aid",
    description: "Access emergency medical services, hospitals, and health camps during crisis situations.",
    color: "emergency",
    href: "#medical",
  },
  {
    icon: Truck,
    title: "Supply Distribution",
    description: "Track relief material distribution, request essential supplies, and donation centers.",
    color: "warning",
    href: "#supplies",
  },
  {
    icon: Users,
    title: "Volunteer Portal",
    description: "Register as a volunteer, join rescue teams, and contribute to relief operations.",
    color: "primary",
    href: "#volunteer",
  },
  {
    icon: FileText,
    title: "Compensation Claims",
    description: "File compensation claims, track application status, and access financial aid programs.",
    color: "accent",
    href: "#claims",
  },
];

const ServicesSection = () => {
  return (
    <section id="resources" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Comprehensive Relief Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Integrated disaster management services designed to provide immediate relief, 
            rehabilitation, and recovery assistance to affected citizens.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-government p-6 group cursor-pointer"
            >
              <div 
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${
                  service.color === 'emergency' ? 'bg-emergency/10 text-emergency' :
                  service.color === 'success' ? 'bg-success/10 text-success' :
                  service.color === 'warning' ? 'bg-warning/10 text-warning' :
                  service.color === 'accent' ? 'bg-accent/20 text-accent-foreground' :
                  'bg-primary/10 text-primary'
                }`}
              >
                <service.icon className="w-7 h-7" />
              </div>
              
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-5 leading-relaxed">
                {service.description}
              </p>
              
              <a 
                href={service.href}
                className="inline-flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="btn-government text-lg px-8 py-6">
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
