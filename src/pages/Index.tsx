import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { WaitlistSection } from "@/components/WaitinglistSection";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">

      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Index;
