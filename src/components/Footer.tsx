import {  Mail, MapPin } from "lucide-react";
import icon from '@/assets/icon.png'

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="container mx-auto">
        <div className="flex justify-between md:flex-col gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
                {/* <Smartphone className="w-5 h-5 text-primary-foreground" /> */}
                              <img src={icon} className="rounded-xl" alt="logo"/>

              </div>
              <span className="text-xl font-bold">Theeruvu Taste</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Connecting food lovers with authentic, budget-friendly local food spots. 
              Discover the hidden gems in your neighborhood.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Product</h3>
            <ul className="text-background/70 md:flex gap-2 items-center">
              <li><a href="#features" className="hover:text-background transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-background transition-colors">How it Works</a></li>
              <li><a href="#testimonials" className="hover:text-background transition-colors">Reviews</a></li>
              {/* <li><a href="#" className="hover:text-background transition-colors">Pricing</a></li> */}
            </ul>
          </div>

         

          
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/70">
              © 2025 Theeruvu Taste. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-background/70">
                <Mail className="w-4 h-4" />
                <span>soorajp2002@gmail.com</span>
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