import { Award, Users, Clock, ThumbsUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Happy Clients",
  },
  {
    icon: Clock,
    value: "15+",
    label: "Years Experience",
  },
  {
    icon: Award,
    value: "100%",
    label: "Satisfaction Rate",
  },
  {
    icon: ThumbsUp,
    value: "5-Star",
    label: "Reviews",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-right">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Elite Siding?
            </h2>
            <p className="text-lg mb-6 text-primary-foreground/90">
              With over 15 years of experience serving Toronto and Ontario, we've built our reputation on quality workmanship, competitive pricing, and exceptional customer service.
            </p>
            <p className="text-lg mb-6 text-primary-foreground/90">
              Our team of licensed professionals uses only premium materials and follows industry best practices to ensure your siding installation exceeds expectations.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span>Licensed, bonded, and fully insured for your peace of mind</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span>Comprehensive warranties on all materials and workmanship</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span>Free, no-obligation estimates with transparent pricing</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span>Dedicated project manager for seamless communication</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-primary-foreground/20 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-primary-foreground/80">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
