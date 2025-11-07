import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin, Printer } from "lucide-react";
import pralumexLogo from "@/assets/pralumex-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <NavLink to="/" className="inline-block mb-4">
              <img 
                src={pralumexLogo} 
                alt="Pralumex - For your plastic waste solution" 
                className="h-12 w-auto"
              />
            </NavLink>
            <p className="text-sm text-muted-foreground">
              Your trusted partner in sustainable plastic recycling solutions for over three decades.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <NavLink to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </NavLink>
              <NavLink to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </NavLink>
              <NavLink to="/mission" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Mission & Vision
              </NavLink>
              <NavLink to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Services
              </NavLink>
              <NavLink to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </NavLink>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://maps.google.com/?q=20258+Carrey+Road,+Walnut,+CA+91789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>20258 Carrey Road<br />Walnut, CA 91789<br />United States</span>
              </a>
              <a
                href="tel:+19095947070"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+1 (909) 594-7070</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Printer className="w-4 h-4 flex-shrink-0" />
                <span>+1 (909) 594-7575</span>
              </div>
              <a
                href="mailto:plastic@pralumex.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>plastic@pralumex.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Copyright © {currentYear} Pralumex, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
