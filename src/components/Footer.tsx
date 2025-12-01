export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-accent">Siding</span> Land
            </h3>
            <p className="text-primary-foreground/80">
              Vancouver's trusted siding installation experts. Quality
              craftsmanship and exceptional service since 2008.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a
                  href="#services"
                  className="hover:text-accent transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-accent transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-accent transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Service Areas</h4>
            <p className="text-primary-foreground/80 mb-4">
              Proudly serving Lower Mainland and the Greater Vancouver Area
            </p>
            <p className="text-sm text-primary-foreground/60">
              Licensed & Insured Contractor
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Siding Land. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
