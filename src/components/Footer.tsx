import { Shield, Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
import GovernmentSeal from "./GovernmentSeal";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      "Report Disaster",
      "Relief Camps",
      "Medical Aid",
      "Supply Distribution",
      "Volunteer Portal",
      "Compensation Claims",
    ],
    resources: [
      "Emergency Guidelines",
      "Preparedness Tips",
      "Safety Protocols",
      "Training Programs",
      "Publications",
      "FAQs",
    ],
    about: [
      "About DRCS",
      "Our Mission",
      "Leadership",
      "Careers",
      "Press Releases",
      "Contact Us",
    ],
    legal: [
      "Privacy Policy",
      "Terms of Service",
      "Accessibility",
      "RTI Act",
      "Disclaimer",
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-6 lg:mb-0">
            <div className="flex items-center gap-3 mb-6">
              <GovernmentSeal />
              <div>
                <h3 className="font-serif font-bold text-lg">DRCS</h3>
                <p className="text-primary-foreground/70 text-xs">
                  Government of India
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-6 leading-relaxed">
              The Disaster Relief Coordination System is an official government initiative 
              to streamline emergency response and relief operations across the nation.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Youtube, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">About</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>
              © {currentYear} Disaster Relief Coordination System. Government of India. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span>Designed & Developed by National Informatics Centre</span>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent" />
                <span>Secure Portal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
