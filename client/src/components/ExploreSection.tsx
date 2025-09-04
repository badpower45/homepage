import { Utensils, ShoppingBag, Landmark, Star, ArrowRight } from "lucide-react";

export default function ExploreSection() {
  const restaurants = [
    {
      name: "Ibn Hamidou",
      description: "Traditional seafood restaurant",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      badges: ["Editor's Pick", "New"]
    },
    {
      name: "El Borg",
      description: "Mediterranean seafood specialties",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      badges: []
    },
    {
      name: "Bianca Cafe",
      description: "Premium coffee & pastries",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      badges: ["Popular"]
    },
    {
      name: "City Crepe",
      description: "French crepes with local twist",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      badges: []
    }
  ];

  const shopping = [
    {
      name: "Golden Zone",
      description: "Premium shopping mall",
      icon: "building",
      badges: ["Luxury", "20% Off"]
    },
    {
      name: "Abu Alaa Active",
      description: "Local fashion brand",
      icon: "shirt",
      badges: ["Trending"]
    },
    {
      name: "Top Jeans",
      description: "Local denim specialist",
      icon: "crown",
      badges: ["Local Brand"]
    }
  ];

  const landmarks = [
    {
      name: "Suez Canal Viewpoint",
      description: "Witness maritime history in action",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      badges: ["Must See"]
    },
    {
      name: "Ferial Park",
      description: "Perfect for family outings",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      badges: ["Family Friendly"]
    },
    {
      name: "Military Museum",
      description: "Rich Egyptian military heritage",
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      badges: ["Cultural"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-ghayaty font-bold text-4xl lg:text-5xl mb-6 text-foreground" data-testid="explore-title">
            Curated for You: <span className="text-gradient">Port Said's Best</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="explore-subtitle">
            Dive into Port Said's vibrant scene with our expert recommendations
          </p>
        </div>
        
        {/* Restaurants & Cafés */}
        <div className="mb-20 scroll-reveal">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-ghayaty font-bold text-3xl text-foreground flex items-center gap-3" data-testid="restaurants-title">
              <Utensils className="w-8 h-8 text-accent-gold" />
              Restaurants & Cafés
            </h3>
            <button className="text-primary hover:text-primary-600 font-semibold flex items-center gap-2" data-testid="button-view-all-restaurants">
              View All <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {restaurants.map((restaurant, index) => (
              <div key={index} className="bg-card hover-lift rounded-2xl overflow-hidden shadow-lg border border-border" data-testid={`restaurant-card-${index}`}>
                <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-ghayaty font-bold text-xl text-card-foreground">{restaurant.name}</h4>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-accent-gold fill-current" />
                      <span className="text-sm font-semibold">{restaurant.rating}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{restaurant.description}</p>
                  {restaurant.badges.length > 0 && (
                    <div className="flex items-center gap-2 mb-4">
                      {restaurant.badges.map((badge, badgeIndex) => (
                        <span 
                          key={badgeIndex}
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            badge === "Editor's Pick" ? "bg-accent-gold bg-opacity-20 text-accent-gold" :
                            badge === "New" ? "bg-accent-teal bg-opacity-20 text-accent-teal" :
                            "bg-accent-lilac bg-opacity-20 text-accent-lilac"
                          }`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-2">
                    <button className="flex-1 border border-border hover:bg-secondary text-foreground py-2 px-4 rounded-lg font-medium text-sm transition-colors" data-testid={`button-view-menu-${index}`}>
                      View Menu
                    </button>
                    <button className="flex-1 gradient-primary text-white py-2 px-4 rounded-lg font-medium text-sm transition-all hover-lift" data-testid={`button-book-${index}`}>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Shopping & Local Finds */}
        <div className="mb-20 scroll-reveal">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-ghayaty font-bold text-3xl text-foreground flex items-center gap-3" data-testid="shopping-title">
              <ShoppingBag className="w-8 h-8 text-accent-lilac" />
              Shopping & Local Finds
            </h3>
            <button className="text-accent-teal hover:text-accent-lilac font-semibold flex items-center gap-2" data-testid="button-discover-stores">
              Discover Stores <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {shopping.map((store, index) => (
              <div key={index} className="bg-card hover-lift rounded-2xl p-6 shadow-lg border border-border" data-testid={`shopping-card-${index}`}>
                <div className="mb-4">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-3">
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-ghayaty font-bold text-xl text-foreground">{store.name}</h4>
                  <p className="text-muted-foreground text-sm">{store.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  {store.badges.map((badge, badgeIndex) => (
                    <span 
                      key={badgeIndex}
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        badge === "Luxury" ? "bg-accent-gold bg-opacity-30 text-accent-gold" :
                        badge === "20% Off" ? "bg-accent-teal bg-opacity-30 text-accent-teal" :
                        badge === "Trending" ? "bg-accent-lilac bg-opacity-30 text-accent-lilac" :
                        "bg-accent-pink bg-opacity-30 text-accent-pink"
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Landmarks & Activities */}
        <div className="scroll-reveal">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-ghayaty font-bold text-3xl text-foreground flex items-center gap-3" data-testid="landmarks-title">
              <Landmark className="w-8 h-8 text-accent-teal" />
              Landmarks & Activities
            </h3>
            <button className="text-accent-teal hover:text-accent-lilac font-semibold flex items-center gap-2" data-testid="button-learn-more">
              Learn More <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {landmarks.map((landmark, index) => (
              <div key={index} className="bg-card hover-lift rounded-2xl overflow-hidden shadow-lg border border-border" data-testid={`landmark-card-${index}`}>
                <img src={landmark.image} alt={landmark.name} className="w-full h-32 object-cover" />
                <div className="p-6">
                  <h4 className="font-ghayaty font-bold text-xl text-foreground mb-2">{landmark.name}</h4>
                  <p className="text-muted-foreground text-sm mb-3">{landmark.description}</p>
                  <div className="flex items-center gap-2">
                    {landmark.badges.map((badge, badgeIndex) => (
                      <span 
                        key={badgeIndex}
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          badge === "Must See" ? "bg-accent-gold bg-opacity-30 text-accent-gold" :
                          badge === "Family Friendly" ? "bg-accent-pink bg-opacity-30 text-accent-pink" :
                          "bg-accent-lilac bg-opacity-30 text-accent-lilac"
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
