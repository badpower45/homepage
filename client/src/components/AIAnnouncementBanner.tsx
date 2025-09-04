import { Bot, Sparkles, ArrowRight, Zap } from "lucide-react";

export default function AIAnnouncementBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-accent-lilac via-primary-500 to-accent-teal relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white bg-opacity-5 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent-gold bg-opacity-10 rounded-full animate-pulse-slow" style={{animationDelay: "1s"}}></div>
      </div>
      
      {/* Floating Sparkles */}
      <div className="absolute inset-0">
        <Sparkles className="absolute top-20 left-1/4 w-6 h-6 text-accent-gold animate-pulse opacity-60" />
        <Sparkles className="absolute bottom-20 right-1/4 w-4 h-4 text-white animate-pulse opacity-40" style={{animationDelay: "0.5s"}} />
        <Sparkles className="absolute top-1/3 right-1/3 w-5 h-5 text-accent-teal animate-pulse opacity-50" style={{animationDelay: "1.5s"}} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* AI Badge */}
          <div className="scroll-reveal mb-6" data-testid="ai-badge">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full border border-white border-opacity-30">
              <div className="w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center animate-pulse">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-sm uppercase tracking-wider">🚀 جديد - ذكاء اصطناعي</span>
            </div>
          </div>
          
          {/* Main Announcement */}
          <div className="scroll-reveal mb-8" style={{animationDelay: "0.1s"}}>
            <h2 className="font-ghayaty font-black text-3xl md:text-5xl lg:text-6xl mb-6 text-white leading-tight" data-testid="ai-title">
              🤖 New AI Travel Assistant<br />
              <span className="text-accent-gold animate-pulse">Coming Soon!</span>
            </h2>
            <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed font-semibold" data-testid="ai-subtitle">
              Discover Port Said intelligently with your personal Egy Safary assistant<br />
              <span className="text-accent-teal">Instant Recommendations • Smart Planning • Personalized Experience</span>
            </p>
          </div>
          
          {/* Features Preview */}
          <div className="scroll-reveal grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto" style={{animationDelay: "0.2s"}}>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover-lift">
              <Zap className="w-10 h-10 text-accent-gold mb-4 mx-auto" />
              <h3 className="font-ghayaty font-bold text-xl text-white mb-2">Instant Recommendations</h3>
              <p className="text-gray-200 text-sm">Ask any question and get smart answers about Port Said</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover-lift">
              <Bot className="w-10 h-10 text-accent-teal mb-4 mx-auto" />
              <h3 className="font-ghayaty font-bold text-xl text-white mb-2">Personal Assistant</h3>
              <p className="text-gray-200 text-sm">Learns your preferences and suggests the best places for you</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover-lift">
              <Sparkles className="w-10 h-10 text-accent-pink mb-4 mx-auto" />
              <h3 className="font-ghayaty font-bold text-xl text-white mb-2">Smart Planning</h3>
              <p className="text-gray-200 text-sm">Plan your trip in seconds with AI assistance</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="scroll-reveal flex flex-col sm:flex-row gap-6 justify-center items-center" style={{animationDelay: "0.3s"}}>
            <button className="group bg-accent-gold hover:bg-accent-gold/90 text-white font-black text-xl px-10 py-5 rounded-2xl shadow-2xl hover-lift transition-all duration-200 flex items-center gap-4" data-testid="button-join-ai-waitlist">
              <Bot className="w-7 h-7 group-hover:rotate-12 transition-transform" />
              Join AI Waitlist
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="text-white text-center">
              <div className="text-lg font-bold mb-1">🔥 Limited Offer</div>
              <div className="text-sm opacity-90">First 100 users get 1 month free access!</div>
            </div>
          </div>
          
          {/* Coming Soon Badge */}
          <div className="scroll-reveal mt-8" style={{animationDelay: "0.4s"}}>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent-gold bg-opacity-20 backdrop-blur-sm rounded-full border border-accent-gold border-opacity-50">
              <div className="w-3 h-3 bg-accent-gold rounded-full animate-pulse"></div>
              <span className="text-white font-semibold">Coming Soon - January 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}