import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Star, DollarSign } from "lucide-react";
import heroImage from "@/assets/hero-phone-mockup.jpg";

export const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-background via-accent/20 to-secondary/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium animate-scale-in">
                <MapPin className="w-4 h-4" />
                <span>For New City Explorers</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Find Amazing
                <span className="text-primary block">Street Food</span>
                 Near You
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Discover budget-friendly, tasty food spots in your area that don't appear on delivery apps. Perfect for students, newcomers, and anyone on a tight budget.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <a href="#waitinglist">
              <Button variant="hero" size="lg" className="group w-full">

                Join Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
                </a>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-2xl mx-auto mb-2">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Budget Friendly</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-2xl mx-auto mb-2">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Quality Food</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-2xl mx-auto mb-2">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Hidden Gems</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-3xl blur-3xl"></div>
              <img 
                src={heroImage} 
                alt="Theeruvu Taste App Preview" 
                className="relative rounded-3xl shadow-2xl w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};