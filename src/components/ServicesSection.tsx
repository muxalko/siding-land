import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Home, Hammer, Shield, Sparkles } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Vinyl Siding Installation",
    description:
      "Premium vinyl siding that enhances your home's curb appeal and provides lasting protection against the elements.",
  },
  {
    icon: Hammer,
    title: "Siding Repair & Replacement",
    description:
      "Expert repair services for damaged or worn siding. We match existing materials perfectly for seamless results.",
  },
  {
    icon: Shield,
    title: "Weather Protection",
    description:
      "Superior insulation and weatherproofing to keep your home comfortable year-round while reducing energy costs.",
  },
  {
    icon: Sparkles,
    title: "Custom Color Options",
    description:
      "Wide selection of colors and styles to match your vision. Create the perfect look for your home.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Siding Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive siding solutions tailored to your home's unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
