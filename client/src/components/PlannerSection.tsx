import { useState } from "react";
import { CalendarDays, Package, Utensils, ShoppingBag, Landmark, Users, Wand2 } from "lucide-react";

export default function PlannerSection() {
  const [currentStep] = useState(1);
  const [selectedVibe, setSelectedVibe] = useState<string | null>(null);

  const vibes = [
    { icon: Utensils, label: "Food", color: "text-accent-gold" },
    { icon: ShoppingBag, label: "Shopping", color: "text-accent-lilac" },
    { icon: Landmark, label: "Culture", color: "text-accent-teal" },
    { icon: Users, label: "Family", color: "text-accent-pink" }
  ];

  const progressPercentage = (currentStep / 3) * 100;

  return (
    <section className="py-20 bg-gradient-to-br from-primary-700 to-primary-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>')`,
            backgroundSize: "100px 100px"
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-ghayaty font-bold text-4xl lg:text-5xl mb-6 text-white" data-testid="planner-title">
            Plan Your <span className="text-accent-teal">Safe Adventure</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto" data-testid="planner-subtitle">
            Our smart planner helps you create the perfect Port Said experience in minutes
          </p>
        </div>
        
        {/* Planner Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-white mb-2">
                <span>Step {currentStep} of 3</span>
                <span>{Math.round(progressPercentage)}%</span>
              </div>
              <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                <div 
                  className="bg-accent-teal h-2 rounded-full transition-all duration-500 ease-out" 
                  style={{width: `${progressPercentage}%`}}
                  data-testid="progress-bar"
                ></div>
              </div>
            </div>
            
            {/* Step 1: Choose Your Vibe */}
            <div className="mb-8">
              <h3 className="font-ghayaty font-bold text-2xl text-white mb-6" data-testid="step-title">
                What's your vibe?
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {vibes.map((vibe, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedVibe(vibe.label)}
                    className={`group bg-white bg-opacity-10 hover:bg-opacity-20 rounded-xl p-6 text-center transition-all duration-150 hover-lift border border-white border-opacity-20 ${
                      selectedVibe === vibe.label ? 'bg-opacity-30 border-opacity-50' : ''
                    }`}
                    data-testid={`vibe-${vibe.label.toLowerCase()}`}
                  >
                    <vibe.icon className={`w-8 h-8 ${vibe.color} mb-3 mx-auto group-hover:scale-110 transition-transform`} />
                    <span className="block text-white font-medium">{vibe.label}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Next Steps Preview */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white bg-opacity-5 rounded-xl p-4 border border-white border-opacity-10">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <CalendarDays className="w-5 h-5" />
                  Step 2: Select Date & Time
                </h4>
                <p className="text-gray-300 text-sm">Choose your perfect visit time</p>
              </div>
              <div className="bg-white bg-opacity-5 rounded-xl p-4 border border-white border-opacity-10">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Step 3: Pick Your Package
                </h4>
                <p className="text-gray-300 text-sm">From budget to VIP experiences</p>
              </div>
            </div>
            
            {/* Build Plan Button */}
            <div className="text-center">
              <button 
                className="gradient-pop hover-lift px-10 py-4 rounded-xl text-white font-bold text-lg transition-all duration-150 shadow-lg flex items-center gap-3 mx-auto"
                data-testid="button-build-plan"
              >
                <Wand2 className="w-6 h-6" />
                Build My Safe Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
