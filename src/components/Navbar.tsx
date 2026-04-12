import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import GovernmentSeal from "./GovernmentSeal";
import LoginModal from "./LoginModal";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [loginType, setLoginType] = useState<"user" | "admin">("user");

  const handleOpenLogin = (type: "user" | "admin") => {
    setLoginType(type);
    setLoginModalOpen(true);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Report Disaster", href: "#report" },
    { label: "Resources", href: "#resources" },
    { label: "Relief Camps", href: "#camps" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-government shadow-lg">
        {/* Emergency Banner */}
        <div className="bg-emergency text-emergency-foreground py-1.5 px-4 text-center text-sm font-medium">
          <Phone className="inline-block w-4 h-4 mr-2" />
          24/7 Emergency Helpline: <span className="font-bold">011-24363260</span>
        </div>

        {/* Main Navigation */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Title */}
            <div className="flex items-center gap-3">
              <GovernmentSeal />
              <div className="hidden sm:block">
                <h1 className="text-primary-foreground font-serif font-bold text-lg leading-tight">
                  ReliefConnect
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="nav-link">
                  {link.label}
                </a>
              ))}
            </div>

            {/* Login Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                className="bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90"
                onClick={() => handleOpenLogin("user")}
              >
                User Login
              </Button>
              <Button
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                onClick={() => handleOpenLogin("admin")}
              >
                Admin Login
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-primary-foreground p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-primary border-t border-primary-foreground/10">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-primary-foreground py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-primary-foreground/10 space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  onClick={() => handleOpenLogin("user")}
                >
                  User Login
                </Button>
                <Button
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                  onClick={() => handleOpenLogin("admin")}
                >
                  Admin Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        type={loginType}
      />
    </>
  );
};

export default Navbar;
