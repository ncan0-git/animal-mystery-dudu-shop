
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

  const goToProduct = () => {
    window.location.href = '/product';
  };

  return (
    <section className="min-h-screen bg-gradient-hero">
      {/* Header with Logo */}
      <div className="container mx-auto px-4 pt-8">
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/6aacc559-e50e-4077-be46-bbbf240bf7a8.png" 
            alt="DuDu Animal Party Logo" 
            className="h-20 sm:h-24 lg:h-32 xl:h-36 w-auto"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-2 lg:py-4">
        <div className="flex justify-center min-h-[70vh]">
          
          {/* Text content */}
          <div className="text-center space-y-6 lg:space-y-8 max-w-4xl">
            
            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 leading-relaxed max-w-2xl mx-auto text-center">
              Discover the magic of surprise with our adorable mystery box! 
              Each box contains one of eight cute DuDu Animal dolls waiting to become your new friend.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-foreground/60">
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
