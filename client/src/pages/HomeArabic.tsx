import { useEffect } from "react";
import { Link } from "wouter";
import { Globe } from "lucide-react";
import HeroSectionArabic from "@/components/HeroSectionArabic";
import WhyEgySafary from "@/components/WhyEgySafary";
import PlannerSection from "@/components/PlannerSection";
import ExploreArabic from "@/components/ExploreArabic";
import PackagesSection from "@/components/PackagesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AdsSection from "@/components/AdsSection";
import PartnersSection from "@/components/PartnersSection";

export default function HomeArabic() {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, index * 60);
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Language Switcher */}
      <div className="fixed top-6 left-6 z-50" dir="ltr">
        <Link href="/">
          <button className="glass-card px-4 py-2 rounded-full text-white hover-lift flex items-center gap-2" data-testid="button-switch-english">
            <Globe className="w-4 h-4" />
            English
          </button>
        </Link>
      </div>
      
      <HeroSectionArabic />
      <WhyEgySafary />
      <PlannerSection />
      <ExploreArabic />
      <PackagesSection />
      <TestimonialsSection />
      <AdsSection />
      <PartnersSection />
    </div>
  );
}