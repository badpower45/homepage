import { useState } from "react";
import { Crown, Compass, Map, Car, Check, Shield, Grid3X3, List } from "lucide-react";

export default function PackagesSectionArabic() {
  const [viewMode, setViewMode] = useState<'cards' | 'compare'>('cards');

  const packages = [
    {
      icon: Crown,
      name: "VIP فويجر",
      description: "تجربة الرفاهية المطلقة",
      price: 450,
      currency: "جنيه",
      badge: "الأكثر شعبية",
      badgeColor: "bg-accent-gold",
      borderColor: "border-accent-gold",
      inclusions: [
        "إقامة فنادق مميزة",
        "حجوزات VIP في المطاعم",
        "جولات خاصة مع مرشد",
        "تغطية أمان مميزة"
      ],
      premium: true
    },
    {
      icon: Compass,
      name: "المغامر",
      description: "توازن مثالي بين الراحة والاستكشاف",
      price: 250,
      currency: "جنيه",
      badge: "أفضل قيمة",
      badgeColor: "bg-accent-teal",
      borderColor: "border-border",
      inclusions: [
        "حجز فنادق ٣ نجوم",
        "توصيات المطاعم",
        "خرائط تفاعلية ومرشدين",
        "تغطية أمان عادية"
      ],
      premium: true
    },
    {
      icon: Map,
      name: "المستكشف",
      description: "اكتشاف اقتصادي",
      price: 200,
      currency: "جنيه",
      badge: null,
      badgeColor: "",
      borderColor: "border-border",
      inclusions: [
        "خرائط المدينة والاتجاهات",
        "اقتراحات أكل اقتصادية",
        "مساعدة في المواصلات",
        "تغطية أمان أساسية"
      ],
      premium: false
    },
    {
      icon: Car,
      name: "رحلة الإسكندرية اليومية",
      description: "باقة مغامرة الإسكندرية",
      price: 399,
      currency: "جنيه",
      badge: null,
      badgeColor: "",
      borderColor: "border-border",
      inclusions: [
        "مواصلات ذهاب وإياب",
        "جولة مدينة الإسكندرية",
        "الغداء مشمول",
        "تأمين السفر مشمول"
      ],
      premium: false
    }
  ];

  return (
    <section className="py-20 bg-secondary" dir="rtl">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-ghayaty font-bold text-4xl lg:text-5xl mb-6 text-foreground" data-testid="packages-title-ar">
            <span className="text-gradient">رحلتك</span>، على طريقتك
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="packages-subtitle-ar">
            اختار من باقاتنا المصممة بعناية لكل مسافر
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
                data-testid="toggle-cards-view-ar"
              >
                <Grid3X3 className="w-4 h-4 inline ml-2" />
                عرض كروت
              </button>
              <button 
                onClick={() => setViewMode('compare')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  viewMode === 'compare' 
                    ? 'gradient-primary text-white' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                data-testid="toggle-compare-view-ar"
              >
                <List className="w-4 h-4 inline ml-2" />
                مقارنة
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
              data-testid={`package-card-ar-${index}`}
            >
              {pkg.name === "VIP فويجر" && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent-gold"></div>
              )}
              {pkg.badge && (
                <div className="absolute top-4 left-4 z-10">
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
                    <h3 className="font-ghayaty font-bold text-2xl text-card-foreground">{pkg.name}</h3>
                    <p className="text-muted-foreground text-sm">{pkg.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-card-foreground">{pkg.price}</span>
                    <span className="text-lg text-muted-foreground">{pkg.currency}</span>
                    <span className="text-sm text-muted-foreground">للشخص</span>
                  </div>
                </div>
                
                {/* Inclusions */}
                <div className="space-y-3 mb-8">
                  {pkg.inclusions.map((inclusion, inclusionIndex) => (
                    <div key={inclusionIndex} className="flex items-center gap-3 text-sm">
                      {inclusion.includes("تغطية أمان") || inclusion.includes("تأمين") ? (
                        <Shield className="w-4 h-4 text-accent-gold" />
                      ) : (
                        <Check className="w-4 h-4 text-accent-teal" />
                      )}
                      <span className={inclusion.includes("تغطية أمان") || inclusion.includes("تأمين") ? "font-semibold" : ""}>
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
                  data-testid={`button-choose-ar-${index}`}
                >
                  {pkg.name === "VIP فويجر" ? "اختار تجربة VIP" :
                   pkg.name === "المغامر" ? "ابدأ المغامرة" :
                   pkg.name === "المستكشف" ? "ابدأ الاستكشاف" :
                   "احجز الرحلة"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}