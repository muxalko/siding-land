import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-siding.jpg";

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-hero-overlay/90 to-hero-overlay/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-background mb-6 leading-tight">
            Professional Siding Installation in Vancouver & Lower Mainland
          </h1>

          <p className="text-xl md:text-2xl text-background/90 mb-8 leading-relaxed max-w-2xl">
            Transform your home with premium siding installation. Quality
            craftsmanship, competitive prices, and exceptional service
            guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              onClick={scrollToContact}
              variant="hero"
              size="lg"
              className="text-lg px-8 py-6 h-auto"
            >
              Get Free Estimate
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("gallery");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              variant="hero-outline"
              size="lg"
              className="text-lg px-8 py-6 h-auto"
            >
              View Our Work
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-slide-up">
            <div className="flex items-center gap-3 text-background">
              <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-3 text-background">
              <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
              <span className="font-medium">15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-3 text-background">
              <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
              <span className="font-medium">Warranty Included</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-sm font-semibold text-muted-foreground">
              TRUSTED BY HOMEOWNERS ACROSS GREATER VANCOUVER AREA & LOWER
              MAINLAND
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
