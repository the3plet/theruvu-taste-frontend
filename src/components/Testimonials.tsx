import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "College Student",
    location: "Bangalore",
    rating: 5,
    content: "As a student on a tight budget, Theeruvu Taste has been a lifesaver! I discovered amazing dosa places near my hostel that I never knew existed. The prices are perfect for my budget.",
    avatar: "PS"
  },
  {
    name: "Rajesh Kumar", 
    role: "Software Engineer",
    location: "Hyderabad",
    rating: 5,
    content: "Just moved to the city and had no idea where to find good, affordable food. This app helped me find authentic biryani spots that locals love. No more expensive delivery apps!",
    avatar: "RK"
  },
  {
    name: "Meera Nair",
    role: "Working Professional", 
    location: "Chennai",
    rating: 5,
    content: "The community reviews are so helpful! I found the best breakfast spots near my office through Theeruvu Taste. The vendors are genuine and the food quality is excellent.",
    avatar: "MN"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Reviews that speak for
            <span className="text-primary block">themselves</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of food lovers who have discovered their favorite local spots through our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card rounded-3xl p-8 border border-border relative hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current hover:scale-110 transition-transform duration-200" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground font-semibold hover:scale-110 transition-transform duration-300">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role} • {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};