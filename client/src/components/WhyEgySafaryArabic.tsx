import { Shield, Sparkles, Calendar, LifeBuoy } from "lucide-react";

export default function WhyEgySafaryArabic() {
  const pillars = [
    {
      icon: Shield,
      title: "الأمان أولاً",
      description: "كل شريك معتمد ومراقب عشان راحة بالك",
      badge: "معتمد",
      badgeColor: "bg-accent-teal",
      delay: "0s"
    },
    {
      icon: Sparkles,
      title: "الأصالة",
      description: "تجارب محلية حقيقية اختارها خبراء بورسعيد",
      badge: "معتمد", 
      badgeColor: "bg-accent-gold",
      delay: "0.1s"
    },
    {
      icon: Calendar,
      title: "تخطيط ذكي",
      description: "توصيات بالذكاء الاصطناعي مصممة على تفضيلاتك",
      badge: "معتمد",
      badgeColor: "bg-accent-lilac",
      delay: "0.2s"
    },
    {
      icon: LifeBuoy,
      title: "دعم ٢٤/٧",
      description: "موجودين معاك دايماً، بعدة لغات",
      badge: "معتمد",
      badgeColor: "bg-accent-pink", 
      delay: "0.3s"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-ghayaty font-bold text-4xl lg:text-5xl mb-6 text-foreground" data-testid="section-title-ar">
            ليه تختار <span className="text-gradient">إيجي سفاري</span>؟
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="section-subtitle-ar">
            التزامنا بالتميز يخلي تجربتك في بورسعيد لا تُنسى
          </p>
        </div>
        
        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="scroll-reveal bg-card hover-lift rounded-2xl p-8 shadow-lg border border-border" 
              style={{animationDelay: pillar.delay}}
              data-testid={`pillar-card-ar-${index}`}
            >
              <div className="mb-6">
                <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <span className={`inline-block px-3 py-1 ${pillar.badgeColor} text-white text-xs font-semibold rounded-full`}>
                  {pillar.badge}
                </span>
              </div>
              <h3 className="font-ghayaty font-bold text-2xl mb-4 text-foreground">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}