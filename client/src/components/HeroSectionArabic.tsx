import { MapPin, Rocket, Compass, ShieldCheck, CheckCircle, Headphones } from "lucide-react";

export default function HeroSectionArabic() {
  return (
    <section className="relative h-screen min-h-[90vh] w-full overflow-hidden" dir="rtl">
      {/* Background Video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover z-0" 
        autoPlay 
        muted 
        loop
        playsInline
      >
        <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
      </video>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-video-overlay z-10"></div>
      
      {/* Grid Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-8 z-20" 
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)",
          backgroundSize: "20px 20px"
        }}
      ></div>
      
      {/* Hero Content */}
      <div className="relative z-30 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
        {/* Eyebrow */}
        <div className="scroll-reveal mb-4" data-testid="hero-eyebrow-ar">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium tracking-wide uppercase glass-card text-white">
            <MapPin className="w-4 h-4 text-accent-teal" />
            بورسعيد / مصر
          </span>
        </div>
        
        {/* Main Headline */}
        <div className="scroll-reveal mb-6" style={{animationDelay: "0.1s"}}>
          <h1 className="font-ghayaty font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 text-white" data-testid="hero-title-ar">
            إيجي سفاري: رفيقك الآمن<br />
            لقلب <span className="text-gradient">بورسعيد</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed" data-testid="hero-subtitle-ar">
            استكشاف سلس، تجارب أصيلة، ذكريات لا تُنسى.<br />
            <span className="text-accent-teal font-semibold">أمانك أولويتنا.</span>
          </p>
        </div>
        
        {/* CTAs */}
        <div className="scroll-reveal flex flex-col sm:flex-row gap-4 mb-8" style={{animationDelay: "0.2s"}}>
          <button 
            className="group gradient-primary hover-lift px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all duration-150 shadow-lg flex items-center gap-3 animate-pulse-slow"
            data-testid="button-plan-adventure-ar"
          >
            <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            خطط رحلتك الآمنة
          </button>
          <button 
            className="group glass-card hover-lift px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all duration-150 shadow-lg flex items-center gap-3"
            data-testid="button-discover-ar"
          >
            <Compass className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            اكتشف بورسعيد
          </button>
        </div>
        
        {/* Trust Strip */}
        <div className="scroll-reveal flex flex-wrap justify-center gap-6" style={{animationDelay: "0.3s"}}>
          <div className="glass-card px-4 py-3 rounded-full flex items-center gap-2 text-white hover-lift" data-testid="trust-secure-ar">
            <ShieldCheck className="w-5 h-5 text-accent-teal" />
            <span className="text-sm font-medium">آمن</span>
          </div>
          <div className="glass-card px-4 py-3 rounded-full flex items-center gap-2 text-white hover-lift" data-testid="trust-verified-ar">
            <CheckCircle className="w-5 h-5 text-accent-gold" />
            <span className="text-sm font-medium">شركاء معتمدين</span>
          </div>
          <div className="glass-card px-4 py-3 rounded-full flex items-center gap-2 text-white hover-lift" data-testid="trust-support-ar">
            <Headphones className="w-5 h-5 text-accent-lilac" />
            <span className="text-sm font-medium">دعم ٢٤/٧</span>
          </div>
        </div>
      </div>
    </section>
  );
}