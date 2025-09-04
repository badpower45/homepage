export default function AdsSection() {
  const offers = [
    {
      title: "Hotel Stay 20% Off",
      description: "Book premium accommodations at Panorama Hotel with exclusive discounts",
      discount: "20% OFF",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      ctaText: "Claim Offer",
      borderColor: "border-accent-gold",
      badgeColor: "bg-accent-gold",
      discountColor: "text-accent-gold",
      delay: "0s"
    },
    {
      title: "Crafts Discount",
      description: "Authentic Port Said handicrafts and souvenirs with special pricing",
      discount: "15% OFF",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      ctaText: "Shop Now",
      borderColor: "border-accent-teal",
      badgeColor: "bg-accent-teal",
      discountColor: "text-accent-teal",
      delay: "0.1s"
    },
    {
      title: "Seafood Feast Tonight",
      description: "Special dinner menu at Ibn Hamidou with fresh daily catch",
      discount: "Tonight Only",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      ctaText: "Reserve Table",
      borderColor: "border-accent-pink",
      badgeColor: "bg-accent-pink",
      discountColor: "text-accent-pink",
      delay: "0.2s"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-jakarta font-bold text-4xl lg:text-5xl mb-6 text-foreground" data-testid="ads-title">
            <span className="text-gradient">Exclusive Offers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="ads-subtitle">
            Limited-time deals from our premium partners
          </p>
        </div>
        
        {/* Offers Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div 
              key={index}
              className={`scroll-reveal bg-card hover-lift rounded-2xl overflow-hidden shadow-lg border-2 ${offer.borderColor} border-opacity-30 relative`}
              style={{animationDelay: offer.delay}}
              data-testid={`offer-card-${index}`}
            >
              <div className="absolute top-4 left-4 z-10">
                <span className={`px-3 py-1 ${offer.badgeColor} text-white text-xs font-bold rounded-full`}>
                  Sponsored
                </span>
              </div>
              <img 
                src={offer.image} 
                alt={offer.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-jakarta font-bold text-2xl mb-3 text-card-foreground">{offer.title}</h3>
                <p className="text-muted-foreground mb-4">{offer.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-2xl font-bold ${offer.discountColor}`}>{offer.discount}</span>
                  <button 
                    className="gradient-primary text-white py-2 px-6 rounded-lg font-semibold transition-all hover-lift"
                    data-testid={`button-${offer.ctaText.toLowerCase().replace(/\s+/g, '-')}-${index}`}
                  >
                    {offer.ctaText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
