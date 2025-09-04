import { useState } from "react";
import { ChevronRight, ChevronLeft, CheckCircle } from "lucide-react";

export default function TestimonialsSectionArabic() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "أحمد حسن",
      location: "القاهرة، مصر",
      quote: "إيجي سفاري خلت رحلتنا لبورسعيد سحرية تماماً. كل التوصيات كانت مظبوطة!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      flag: "🇪🇬",
      delay: "0s"
    },
    {
      name: "مارى دوبوا",
      location: "باريس، فرنسا", 
      quote: "خصائص الأمان أعطتني الثقة عشان أستكشف. منصة أنصح بها بشدة!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      flag: "🇫🇷",
      delay: "0.1s"
    },
    {
      name: "عمر الراشد",
      location: "دبي، الإمارات",
      quote: "شركاء محليين رائعين وتجارب أصيلة. عائلتنا حبت كل لحظة!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      flag: "🇦🇪",
      delay: "0.2s"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-700 to-primary-500 relative overflow-hidden" dir="rtl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="white"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>')`,
            backgroundSize: "50px 50px"
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-ghayaty font-bold text-4xl lg:text-5xl mb-6 text-white" data-testid="testimonials-title-ar">
            أصوات <span className="text-accent-teal">المسافرين</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto" data-testid="testimonials-subtitle-ar">
            تجارب حقيقية من مسافرين اكتشفوا بورسعيد معانا
          </p>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="scroll-reveal glass-card hover-lift rounded-2xl p-8 text-center shadow-2xl" 
              style={{animationDelay: testimonial.delay}}
              data-testid={`testimonial-card-ar-${index}`}
            >
              <div className="mb-6">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name} testimonial`} 
                  className="w-20 h-20 rounded-full mx-auto border-4 border-accent-gold object-cover"
                />
                <div className="flex justify-center mt-3 text-2xl">
                  {testimonial.flag}
                </div>
              </div>
              <blockquote className="text-white mb-4 text-lg leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <footer className="text-gray-300">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm flex items-center justify-center gap-2 mt-1">
                  <span>{testimonial.location}</span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-accent-teal bg-opacity-30 text-accent-teal text-xs rounded-full">
                    <CheckCircle className="w-3 h-3" />
                    رحلة معتمدة
                  </span>
                </div>
              </footer>
            </div>
          ))}
        </div>
        
        {/* Carousel Navigation */}
        <div className="flex justify-center mt-12 gap-4">
          <button 
            onClick={nextSlide}
            className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-white hover-lift"
            data-testid="button-next-testimonial-ar"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <button 
            onClick={prevSlide}
            className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-white hover-lift"
            data-testid="button-prev-testimonial-ar"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}