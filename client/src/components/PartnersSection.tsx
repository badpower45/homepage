import { Building, Utensils, Coffee, ShoppingCart, Shirt, Anchor, Rocket } from "lucide-react";

export default function PartnersSection() {
  const partners = [
    { icon: Building, name: "Panorama Hotel", delay: "0s" },
    { icon: Utensils, name: "Ibn Hamidou", delay: "0.1s" },
    { icon: Coffee, name: "Bianca Cafe", delay: "0.2s" },
    { icon: ShoppingCart, name: "Golden Zone", delay: "0.3s" },
    { icon: Shirt, name: "Abu Alaa Active", delay: "0.4s" },
    { icon: Anchor, name: "Port Authority", delay: "0.5s" }
  ];

  return (
    <section className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 scroll-reveal">
          <h3 className="font-jakarta font-bold text-2xl text-card-foreground mb-2" data-testid="partners-title">
            Trusted by 30+ Verified Partners
          </h3>
          <p className="text-muted-foreground" data-testid="partners-subtitle">
            Working with Port Said's finest establishments
          </p>
        </div>
        
        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="scroll-reveal flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover-lift" 
              style={{animationDelay: partner.delay}}
              data-testid={`partner-${index}`}
            >
              <div className="text-center">
                <partner.icon className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <span className="text-xs text-muted-foreground font-medium">{partner.name}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Final CTA */}
        <div className="text-center mt-16 scroll-reveal">
          <button 
            className="gradient-primary hover-lift px-10 py-4 rounded-xl text-white font-bold text-lg transition-all duration-150 shadow-lg flex items-center gap-3 mx-auto"
            data-testid="button-start-adventure-final"
          >
            <Rocket className="w-6 h-6" />
            Start Your Port Said Adventure
          </button>
        </div>
      </div>
    </section>
  );
}
