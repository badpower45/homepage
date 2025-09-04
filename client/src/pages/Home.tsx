import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import WhyEgySafary from "@/components/WhyEgySafary";
import PlannerSection from "@/components/PlannerSection";
import ExploreSection from "@/components/ExploreSection";
import PackagesSection from "@/components/PackagesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AdsSection from "@/components/AdsSection";
import PartnersSection from "@/components/PartnersSection";

export default function Home() {
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
      <HeroSection />
      <WhyEgySafary />
      <PlannerSection />
      <ExploreSection />
      <PackagesSection />
      <TestimonialsSection />
      <AdsSection />
      <PartnersSection />
    </div>
  );
}
