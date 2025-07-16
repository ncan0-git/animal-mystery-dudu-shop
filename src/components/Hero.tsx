
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gift, Sparkles, Star } from "lucide-react";
import mysteryBoxImage from "/lovable-uploads/f9f9d6a3-856b-45a4-b956-007e7c3422a9.png";

export const Hero = () => {
  const scrollToAnimals = () => {
    document.getElementById('animals')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPurchase = () => {
    document.getElementById('purchase')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToProduct = () => {
    window.location.href = '/product';
  };

  return (
    <section className="min-h-screen bg-gradient-hero">
      {/* Header with Logo */}
      <div className="w-full">
        <div className="container mx-auto px-4 pt-8 pb-4">
          <div className="flex justify-between items-center">
            <img 
              src="/lovable-uploads/6aacc559-e50e-4077-be46-bbbf240bf7a8.png" 
              alt="DuDu Animal Party Logo" 
              className="h-12 sm:h-16 lg:h-20 xl:h-24 w-auto"
            />
            <nav className="flex gap-6">
              <button 
                onClick={scrollToProducts}
                className="text-foreground/80 hover:text-primary-green-dark transition-colors cursor-pointer font-medium"
              >
                Products
              </button>
              <button 
                onClick={scrollToContact}
                className="text-foreground/80 hover:text-primary-green-dark transition-colors cursor-pointer font-medium"
              >
                Contact Us
              </button>
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
          
          {/* Mystery box image - shows first on mobile */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-sm lg:max-w-md">
              <img 
                src={mysteryBoxImage} 
                alt="DuDu Animal Party Mystery Box" 
                className="w-full h-auto rounded-lg shadow-soft object-contain"
              />
            </div>
          </div>

          {/* Text content - shows second on mobile */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1">
            
            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 leading-relaxed max-w-2xl mx-auto text-center">
              Discover the magic of surprise with our adorable mystery box! 
              Each box contains one of eight cute DuDu Animal dolls waiting to become your new friend.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary-green hover:bg-primary-green-dark text-black-cat font-semibold px-6 py-4 lg:px-8 lg:py-6 text-sm lg:text-lg shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105"
                onClick={goToProduct}
              >
                <Gift className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                Get Your Mystery Box - $20
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-green-dark text-primary-green-dark hover:bg-primary-green hover:text-black-cat px-6 py-4 lg:px-8 lg:py-6 text-base lg:text-lg transition-all duration-300"
                onClick={scrollToAnimals}
              >
                <Star className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                Meet the Animals
              </Button>
            </div>

            {/* Feature indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-frog rounded-full"></div>
                <span>Free Shipping Included</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-elephant rounded-full"></div>
                <span>8 Possible Animals</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-fox rounded-full"></div>
                <span>Surprise Inside</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
