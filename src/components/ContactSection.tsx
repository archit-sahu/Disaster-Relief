import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import GovernmentSeal from "./GovernmentSeal";

const contactInfo = [
  {
    icon: Phone,
    title: "Emergency Helpline",
    value: "011-24363260",
    subtitle: "Toll-free, 24/7 available",
  },
  {
    icon: Mail,
    title: "Email Support",
    value: "relief@gov.in",
    subtitle: "Response within 24 hours",
  },
  {
    icon: MapPin,
    title: "Head Office",
    value: "National Disaster Management Authority",
    subtitle: "New Delhi, India",
  },
  {
    icon: Clock,
    title: "Office Hours",
    value: "24/7 Emergency Services",
    subtitle: "Admin: Mon-Sat 9AM-6PM",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
              Contact & Support
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              For emergencies, please call our 24/7 helpline immediately. 
              For general inquiries, use the contact form or email us.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-primary font-medium">{item.value}</p>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="mt-10 p-6 bg-secondary rounded-xl">
              <h4 className="font-serif font-bold text-lg text-foreground mb-4">
                Important Links
              </h4>
              <div className="space-y-3">
                {[
                  "National Disaster Management Authority",
                  "State Disaster Management",
                  "Emergency Response Guidelines",
                  "Disaster Preparedness Resources",
                ].map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-government p-8">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
              Send us a Message
            </h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="input-government"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="input-government"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="input-government"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <select className="input-government">
                  <option value="">Select inquiry type</option>
                  <option value="emergency">Emergency Report</option>
                  <option value="relief">Relief Assistance</option>
                  <option value="volunteer">Volunteer Registration</option>
                  <option value="compensation">Compensation Query</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your query or concern..."
                  className="input-government resize-none"
                  required
                />
              </div>

              <button type="submit" className="btn-government w-full py-4">
                Submit Inquiry
              </button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
