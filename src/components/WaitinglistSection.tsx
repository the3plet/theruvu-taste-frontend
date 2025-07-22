import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate waitlist signup
    setIsSubmitted(true);
   toast.success("Welcome to the waitlist! 🎉", {
  description: "You'll be the first to know when Theruvu Taste launches.",
});

   
    setEmail("");
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-primary to-primary-light">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Discover Your City's
            <span className="block">Hidden Food Gems?</span>
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of food lovers waiting for the launch. Be the first to explore 
            budget-friendly food spots in your neighborhood.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 rounded-2xl border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-primary-foreground/40 focus:scale-105 transition-transform duration-200"
                required
              />
              <Button 
                type="submit" 
                variant="waitlist" 
                size="lg"
                className="bg-background text-primary hover:bg-background/90 whitespace-nowrap hover:scale-105 transition-all duration-300 group"
              >
                Join Waitlist
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center space-x-3 text-primary-foreground">
              <CheckCircle className="w-8 h-8" />
              <span className="text-xl font-medium">You're on the list! We'll be in touch soon.</span>
            </div>
          )}

          <div className="mt-8 grid grid-cols-3 gap-8 max-w-lg mx-auto text-primary-foreground/80">
            <div>
              <div className="text-2xl font-bold">2000+</div>
              <div className="text-sm">Food Spots</div>
            </div>
            <div>
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm">Cities</div>
            </div>
            <div>
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-sm">Waitlist</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};