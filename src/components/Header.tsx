import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary">
              <span className="text-accent">Siding</span> Land
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:+13683990984"
              className="hidden sm:flex items-center gap-2 text-primary font-semibold"
            >
              <Phone className="w-5 h-5" />
              <span>+1 (368) 399-0984</span>
            </a>
            <Button
              onClick={() => scrollToSection("contact")}
              className="font-semibold"
            >
              Free Estimate
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
