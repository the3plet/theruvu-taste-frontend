import { Search, MapPin, Heart, Star } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Browse Curated Collections",
    description: "Explore our handpicked list of affordable, tasty local food spots — sorted by locality, cuisine, and average cost."
  },
  {
    step: "02", 
    icon: MapPin,
    title: "Discover Hidden Gems",
    description: "Find authentic street-style vendors and small eateries trusted by locals — no fancy ads, just real good food."
  },
  {
    step: "03",
    icon: Heart,
    title: "Visit & Experience",
    description: "Get directions, opening hours, and photos. Drop by the spot to taste food yourself — no middleman or inflated prices."
  },
  {
    step: "04",
    icon: Star,
    title: "Rate & Help Others",
    description: "Share your experience to help others who've just moved to the city. Your feedback makes discovery easier for the next person."
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Simple Steps to Your
            <span className="text-primary block">Delicious Discovery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Finding great local food has never been easier. Follow these simple steps to discover your next favorite meal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center group animate-fade-in hover:scale-105 transition-transform duration-300" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-8">
                <div className="flex items-center justify-center w-20 h-20 bg-primary rounded-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};