export default function AdsSection() {
  const offers = [
    {
      title: "Diamond Blue Hotel",
      description: "Luxury stay with exclusive amenities and waterfront views",
      discount: "25% OFF",
      image: "https://i.postimg.cc/vBRkP4gX/455348224-122100092078476219-671852229544513773-n.jpg",
      ctaText: "Book Now",
      borderColor: "border-accent-gold",
      badgeColor: "bg-accent-gold",
      discountColor: "text-accent-gold",
      delay: "0s"
    },
    {
      title: "El Nours Village",
      description: "Peaceful retreat with authentic Egyptian hospitality",
      discount: "20% OFF",
      image: "https://i.postimg.cc/kXn33Rjp/326774877-1511605362667077-7649389515364575669-n.jpg",
      ctaText: "Reserve",
      borderColor: "border-accent-teal",
      badgeColor: "bg-accent-teal",
      discountColor: "text-accent-teal",
      delay: "0.1s"
    },
    {
      title: "Grand Hotel",
      description: "Premium accommodations in the heart of Port Said",
      discount: "15% OFF",
      image: "https://i.postimg.cc/JzZbNt8R/484029555-122153777804476219-4437031621081582764-n.jpg",
      ctaText: "Book Stay",
      borderColor: "border-accent-pink",
      badgeColor: "bg-accent-pink",
      discountColor: "text-accent-pink",
      delay: "0.2s"
    },
    {
      title: "🤖 NEW: AI Travel Assistant",
      description: "Get personalized recommendations with our smart AI guide - launching soon!",
      discount: "Coming Soon",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      ctaText: "Join Waitlist",
      borderColor: "border-accent-lilac",
      badgeColor: "bg-accent-lilac",
      discountColor: "text-accent-lilac",
      delay: "0.3s"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-ghayaty font-bold text-4xl lg:text-5xl mb-6 text-foreground" data-testid="ads-title">
            <span className="text-gradient">Exclusive Offers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="ads-subtitle">
            Limited-time deals from our premium partners
          </p>
        </div>
        
        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <h3 className="font-ghayaty font-bold text-2xl mb-3 text-card-foreground">{offer.title}</h3>
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
