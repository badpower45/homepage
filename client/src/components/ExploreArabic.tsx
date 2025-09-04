import { Utensils, ShoppingBag, Landmark, Star, ArrowLeft } from "lucide-react";

export default function ExploreArabic() {
  const restaurants = [
    {
      name: "ابن حميدو",
      description: "مطعم المأكولات البحرية التقليدي",
      rating: 4.8,
      image: "https://i.postimg.cc/BnkV6jgs/476448144-1028783965953841-6448972743175736685-n.jpg",
      badges: ["اختيار المحرر", "جديد"]
    },
    {
      name: "أسماك سيتي",
      description: "تخصصات المأكولات البحرية المتوسطية",
      rating: 4.6,
      image: "https://i.postimg.cc/Px3ZXwWQ/485729605-1069499708549498-1959922569899581041-n.jpg",
      badges: []
    },
    {
      name: "عبده سالم",
      description: "المطبخ المحلي الأصيل",
      rating: 4.7,
      image: "https://i.postimg.cc/kXhj12L8/480969069-1045383804286691-6539337838710740832-n.jpg",
      badges: ["المفضل محلياً"]
    },
    {
      name: "سيتي كريب",
      description: "الكريب الفرنسي بلمسة محلية",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      badges: []
    }
  ];

  const shopping = [
    {
      name: "نتس جينز",
      description: "مجموعة الجينز المميزة",
      image: "https://i.postimg.cc/7YV4fnG4/311574864-493009316175920-8157584742326155656-n.jpg",
      badges: ["ماركة محلية", "خصم ٢٠٪"]
    },
    {
      name: "أبو علاء أكتيف",
      description: "ماركة الموضة المحلية",
      image: "https://i.postimg.cc/MpvLq71d/465187391-985206483638982-7945889023653170387-n.jpg",
      badges: ["رائج"]
    },
    {
      name: "توب جينز",
      description: "متخصص الجينز المحلي",
      image: "https://i.postimg.cc/CxQWqPw3/327211586-556721933054505-9124816171449876841-n.jpg",
      badges: ["ماركة محلية"]
    }
  ];

  const landmarks = [
    {
      name: "نقطة مراقبة قناة السويس",
      description: "شاهد التاريخ البحري في العمل",
      image: "https://i.postimg.cc/MGwphpQZ/20250222-135243.jpg",
      badges: ["لازم تشوفه"],
      link: "#canal-viewpoint"
    },
    {
      name: "حديقة فريال",
      description: "مكان مثالي للعائلات",
      image: "https://i.postimg.cc/pV5yh4RH/20250310-131350.jpg",
      badges: ["عائلي"],
      link: "#ferial-park"
    },
    {
      name: "تراث بورسعيد",
      description: "التراث الثقافي الغني لبورسعيد",
      image: "https://i.postimg.cc/7Z8zZD2d/fabulous.jpg",
      badges: ["ثقافي"],
      link: "#heritage-sites"
    }
  ];

  return (
    <section className="py-20 bg-background" dir="rtl">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-ghayaty font-bold text-4xl lg:text-5xl mb-6 text-foreground" data-testid="explore-title-ar">
            مُختار لك: <span className="text-gradient">أفضل ما في بورسعيد</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="explore-subtitle-ar">
            اتمتع بالمشهد النابض بالحياة في بورسعيد مع توصياتنا المتخصصة
          </p>
        </div>
        
        {/* Restaurants & Cafés */}
        <div className="mb-20 scroll-reveal">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-ghayaty font-bold text-3xl text-foreground flex items-center gap-3" data-testid="restaurants-title-ar">
              <Utensils className="w-8 h-8 text-accent-gold" />
              مطاعم وكافيهات
            </h3>
            <button className="text-primary hover:text-primary-600 font-semibold flex items-center gap-2" data-testid="button-view-all-restaurants-ar">
              شوف الكل <ArrowLeft className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {restaurants.map((restaurant, index) => (
              <div key={index} className="bg-card hover-lift rounded-2xl overflow-hidden shadow-lg border border-border" data-testid={`restaurant-card-ar-${index}`}>
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
                          className={`px-3 py-1 text-xs font-bold rounded-full border ${
                            badge === "اختيار المحرر" ? "bg-accent-gold text-white border-accent-gold" :
                            badge === "جديد" ? "bg-accent-teal text-white border-accent-teal" :
                            badge === "المفضل محلياً" ? "bg-accent-pink text-white border-accent-pink" :
                            "bg-accent-lilac text-white border-accent-lilac"
                          }`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-2">
                    <button className="flex-1 border border-border hover:bg-secondary text-foreground py-2 px-4 rounded-lg font-medium text-sm transition-colors" data-testid={`button-view-menu-ar-${index}`}>
                      شوف المنيو
                    </button>
                    <button className="flex-1 gradient-primary text-white py-2 px-4 rounded-lg font-medium text-sm transition-all hover-lift" data-testid={`button-book-ar-${index}`}>
                      احجز دلوقتي
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
            <h3 className="font-ghayaty font-bold text-3xl text-foreground flex items-center gap-3" data-testid="shopping-title-ar">
              <ShoppingBag className="w-8 h-8 text-accent-lilac" />
              تسوق وماركات محلية
            </h3>
            <button className="text-accent-teal hover:text-accent-lilac font-semibold flex items-center gap-2" data-testid="button-discover-stores-ar">
              اكتشف المحلات <ArrowLeft className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {shopping.map((store, index) => (
              <div key={index} className="bg-card hover-lift rounded-2xl overflow-hidden shadow-lg border border-border" data-testid={`shopping-card-ar-${index}`}>
                <img src={store.image} alt={store.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-ghayaty font-bold text-xl text-foreground mb-2">{store.name}</h4>
                    <p className="text-muted-foreground text-sm">{store.description}</p>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    {store.badges.map((badge, badgeIndex) => (
                      <span 
                        key={badgeIndex}
                        className={`px-3 py-1 text-xs font-bold rounded-full border ${
                          badge === "ماركة محلية" ? "bg-accent-gold text-white border-accent-gold" :
                          badge === "خصم ٢٠٪" ? "bg-accent-teal text-white border-accent-teal" :
                          badge === "رائج" ? "bg-accent-lilac text-white border-accent-lilac" :
                          "bg-accent-pink text-white border-accent-pink"
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <button className="w-full gradient-primary text-white py-2 px-4 rounded-lg font-semibold transition-all hover-lift" data-testid={`button-visit-store-ar-${index}`}>
                    زور المحل
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Landmarks & Activities */}
        <div className="scroll-reveal">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-ghayaty font-bold text-3xl text-foreground flex items-center gap-3" data-testid="landmarks-title-ar">
              <Landmark className="w-8 h-8 text-accent-teal" />
              معالم وأنشطة
            </h3>
            <button className="text-accent-teal hover:text-accent-lilac font-semibold flex items-center gap-2" data-testid="button-more-places-ar">
              أماكن أكتر <ArrowLeft className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {landmarks.map((landmark, index) => (
              <div key={index} className="bg-card hover-lift rounded-2xl overflow-hidden shadow-lg border border-border" data-testid={`landmark-card-ar-${index}`}>
                <img src={landmark.image} alt={landmark.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="font-ghayaty font-bold text-xl text-foreground mb-2">{landmark.name}</h4>
                  <p className="text-muted-foreground text-sm mb-3">{landmark.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    {landmark.badges.map((badge, badgeIndex) => (
                      <span 
                        key={badgeIndex}
                        className={`px-3 py-1 text-xs font-bold rounded-full border ${
                          badge === "لازم تشوفه" ? "bg-accent-gold text-white border-accent-gold" :
                          badge === "عائلي" ? "bg-accent-pink text-white border-accent-pink" :
                          "bg-accent-lilac text-white border-accent-lilac"
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <button className="w-full gradient-primary text-white py-2 px-4 rounded-lg font-semibold transition-all hover-lift" data-testid={`button-visit-landmark-ar-${index}`}>
                    زور المكان
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}