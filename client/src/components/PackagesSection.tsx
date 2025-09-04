import { useState } from "react";
import { Crown, Compass, Map, Car, Check, Shield, Grid3X3, List } from "lucide-react";

export default function PackagesSection() {
  const [viewMode, setViewMode] = useState<'cards' | 'compare'>('cards');

  const packages = [
    {
      icon: Crown,
      name: "VIP Voyager",
      description: "Ultimate luxury experience",
      price: 450,
      currency: "EGP",
      badge: "Most Popular",
      badgeColor: "bg-accent-gold",
      borderColor: "border-accent-gold",
      inclusions: [
        "Premium hotel accommodation",
        "VIP restaurant reservations",
        "Private guided tours",
        "Premium safety coverage"
      ],
      premium: true
    },
    {
      icon: Compass,
      name: "Adventurer",
      description: "Perfect balance of comfort & exploration",
      price: 250,
      currency: "EGP",
      badge: "Best Value",
      badgeColor: "bg-accent-teal",
      borderColor: "border-border",
      inclusions: [
        "3-star hotel booking",
        "Restaurant recommendations",
        "Interactive maps & guides",
        "Standard safety coverage"
      ],
      premium: true
    },
    {
      icon: Map,
      name: "Explorer",
      description: "Budget-friendly discovery",
      price: 200,
      currency: "EGP",
      badge: null,
      badgeColor: "",
      borderColor: "border-border",
      inclusions: [
        "City maps & directions",
        "Budget dining suggestions",
        "Transport assistance",
        "Basic safety coverage"
      ],
      premium: false
    },
    {
      icon: Car,
      name: "Alex Day Trip",
      description: "Alexandria adventure package",
      price: 399,
      currency: "EGP",
      badge: null,
      badgeColor: "",
      borderColor: "border-border",
      inclusions: [
        "Round-trip transportation",
        "Alexandria city tour",
        "Lunch included",
        "Travel insurance included"
      ],
      premium: false
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-jakarta font-bold text-4xl lg:text-5xl mb-6 text-foreground" data-testid="packages-title">
            <span className="text-gradient">Your Journey</span>, Your Way
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="packages-subtitle">
            Choose from our carefully crafted packages designed for every traveler
          </p>
        </div>
        
        {/* View Toggle */}
        <div className="flex justify-center mb-12 scroll-reveal">
          <div className="bg-card rounded-xl p-2 shadow-lg border border-border">
            <div className="flex">
              <button 
                onClick={() => setViewMode('cards')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  viewMode === 'cards' 
                    ? 'gradient-primary text-white' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                data-testid="toggle-cards-view"
              >
                <Grid3X3 className="w-4 h-4 inline mr-2" />
                Cards View
              </button>
              <button 
                onClick={() => setViewMode('compare')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  viewMode === 'compare' 
                    ? 'gradient-primary text-white' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                data-testid="toggle-compare-view"
              >
                <List className="w-4 h-4 inline mr-2" />
                Compare
              </button>
            </div>
          </div>
        </div>
        
        {/* Packages Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`scroll-reveal bg-card hover-lift rounded-2xl overflow-hidden shadow-xl border-2 ${pkg.borderColor} relative`}
              style={{animationDelay: `${index * 0.1}s`}}
              data-testid={`package-card-${index}`}
            >
              {pkg.name === "VIP Voyager" && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent-gold"></div>
              )}
              {pkg.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 ${pkg.badgeColor} text-white text-xs font-bold rounded-full`}>
                    {pkg.badge}
                  </span>
                </div>
              )}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                    <pkg.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-jakarta font-bold text-2xl text-card-foreground">{pkg.name}</h3>
                    <p className="text-muted-foreground text-sm">{pkg.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-card-foreground">{pkg.price}</span>
                    <span className="text-lg text-muted-foreground">{pkg.currency}</span>
                    <span className="text-sm text-muted-foreground">per person</span>
                  </div>
                </div>
                
                {/* Inclusions */}
                <div className="space-y-3 mb-8">
                  {pkg.inclusions.map((inclusion, inclusionIndex) => (
                    <div key={inclusionIndex} className="flex items-center gap-3 text-sm">
                      {inclusion.includes("safety coverage") || inclusion.includes("insurance") ? (
                        <Shield className="w-4 h-4 text-accent-gold" />
                      ) : (
                        <Check className="w-4 h-4 text-accent-teal" />
                      )}
                      <span className={inclusion.includes("safety coverage") || inclusion.includes("insurance") ? "font-semibold" : ""}>
                        {inclusion}
                      </span>
                    </div>
                  ))}
                </div>
                
                <button 
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all hover-lift shadow-lg ${
                    pkg.premium 
                      ? 'gradient-primary text-white' 
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                  data-testid={`button-choose-${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {pkg.name === "VIP Voyager" ? "Choose VIP Experience" :
                   pkg.name === "Adventurer" ? "Start Adventure" :
                   pkg.name === "Explorer" ? "Start Exploring" :
                   "Book Day Trip"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
