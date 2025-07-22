import { Smartphone, Mail, MapPin, Users } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Theeruvu Taste</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Connecting food lovers with authentic, budget-friendly local food spots. 
              Discover the hidden gems in your neighborhood.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#features" className="hover:text-background transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-background transition-colors">How it Works</a></li>
              <li><a href="#testimonials" className="hover:text-background transition-colors">Reviews</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Community Guidelines</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/70">
              © 2024 Theeruvu Taste. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-background/70">
                <Mail className="w-4 h-4" />
                <span>hello@theeruvutaste.com</span>
              </div>
              <div className="flex items-center space-x-2 text-background/70">
                <MapPin className="w-4 h-4" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};