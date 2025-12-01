import sidingExample1 from "@/assets/siding-example-1.jpg";
import sidingExample2 from "@/assets/siding-example-2.jpg";
import sidingExample3 from "@/assets/siding-example-3.jpg";

const projects = [
  {
    image: sidingExample1,
    title: "Modern Gray Siding",
    description: "Complete exterior transformation with premium gray vinyl siding",
  },
  {
    image: sidingExample2,
    title: "Premium Materials",
    description: "High-quality siding materials built to last decades",
  },
  {
    image: sidingExample3,
    title: "Classic White Elegance",
    description: "Timeless white siding installation on beautiful Ontario home",
  },
];

export const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Recent Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the quality and craftsmanship we bring to every project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hero-overlay/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-background/90">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
