import { MapPin, Users, DollarSign, Clock, Star, Shield } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Discover Nearby Gems",
    description:
      "Skip weeks of trial and error. Find authentic local spots trusted by people who understand tight budgets.",
  },
  {
    icon: DollarSign,
    title: "Budget-Friendly Options",
    description:
      "Every spot is verified by fellow newcomers who know what it's like to count every rupee.",
  },
  {
    icon: Users,
    title: "Fellow Relocators",
    description:
      "Reviews from students and employees who've been in your shoes — honest, budget-conscious, and helpful.",
  },
  {
    icon: Clock,
    title: "Real-Time Updates",
    description:
      "Know before you walk. Check if your chosen spot is open and serving.",
  },
  {
    icon: Star,
    title: "Authenticity Over Marketing",
    description:
      "No fancy ads, just real food from small vendors who care about taste and value.",
  },
  {
    icon: Shield,
    title: "Trusted Platform",
    description:
      "Safe, reliable recommendations from a community that understands your needs.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-16 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Built for City Newcomers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We understand the struggle of finding good, affordable food in a new
            city. Our platform connects you with local food gems that care about
            quality and value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
