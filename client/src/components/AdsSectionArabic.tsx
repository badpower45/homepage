export default function AdsSectionArabic() {
  const offers = [
    {
      title: "دايموند بلو هوتيل",
      description: "إقامة فاخرة مع مرافق حصرية وإطلالة على البحر",
      discount: "خصم ٢٥٪",
      image: "https://i.postimg.cc/vBRkP4gX/455348224-122100092078476219-671852229544513773-n.jpg",
      ctaText: "احجز دلوقتي",
      borderColor: "border-accent-gold",
      badgeColor: "bg-accent-gold",
      discountColor: "text-accent-gold",
      delay: "0s"
    },
    {
      title: "قرية النورس",
      description: "ملاذ هادئ مع ضيافة مصرية أصيلة",
      discount: "خصم ٢٠٪",
      image: "https://i.postimg.cc/kXn33Rjp/326774877-1511605362667077-7649389515364575669-n.jpg",
      ctaText: "احجز",
      borderColor: "border-accent-teal",
      badgeColor: "bg-accent-teal",
      discountColor: "text-accent-teal",
      delay: "0.1s"
    },
    {
      title: "جراند هوتيل",
      description: "إقامة مميزة في قلب بورسعيد",
      discount: "خصم ١٥٪",
      image: "https://i.postimg.cc/JzZbNt8R/484029555-122153777804476219-4437031621081582764-n.jpg",
      ctaText: "احجز الإقامة",
      borderColor: "border-accent-pink",
      badgeColor: "bg-accent-pink",
      discountColor: "text-accent-pink",
      delay: "0.2s"
    },
    {
      title: "🤖 جديد: مساعد السفر الذكي",
      description: "احصل على توصيات شخصية مع مرشدنا الذكي - قريباً!",
      discount: "قريباً",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      ctaText: "انضم للقائمة",
      borderColor: "border-accent-lilac",
      badgeColor: "bg-accent-lilac", 
      discountColor: "text-accent-lilac",
      delay: "0.3s"
    }
  ];

  return (
    <section className="py-20 bg-background" dir="rtl">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-ghayaty font-bold text-4xl lg:text-5xl mb-6 text-foreground" data-testid="ads-title-ar">
            <span className="text-gradient">عروض حصرية</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="ads-subtitle-ar">
            عروض محدودة المدة من شركائنا المميزين
          </p>
        </div>
        
        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <div 
              key={index}
              className={`scroll-reveal bg-card hover-lift rounded-2xl overflow-hidden shadow-lg border-2 ${offer.borderColor} border-opacity-30 relative`}
              style={{animationDelay: offer.delay}}
              data-testid={`offer-card-ar-${index}`}
            >
              <div className="absolute top-4 right-4 z-10">
                <span className={`px-3 py-1 ${offer.badgeColor} text-white text-xs font-bold rounded-full`}>
                  برعاية
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
                    data-testid={`button-ar-${index}`}
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