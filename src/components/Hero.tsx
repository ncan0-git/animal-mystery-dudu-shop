
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
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-green/5 via-transparent to-blue-elephant/5" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-green-frog/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-orange-fox/10 rounded-full blur-3xl" />
      
      {/* Header with Logo */}
      <div className="relative z-20 w-full bg-background/80 backdrop-blur-sm border-b border-border/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <img 
              src="/lovable-uploads/6aacc559-e50e-4077-be46-bbbf240bf7a8.png" 
              alt="DuDu Animal Party Logo" 
              className="h-14 sm:h-18 lg:h-22 xl:h-26 w-auto transition-all duration-300 hover:scale-105"
            />
            <nav className="flex gap-8">
              <button 
                onClick={scrollToProducts}
                className="text-foreground/80 hover:text-primary-green-dark transition-all duration-300 font-semibold text-lg tracking-wide hover:scale-105"
              >
                Products
              </button>
              <button 
                onClick={scrollToContact}
                className="text-foreground/80 hover:text-primary-green-dark transition-all duration-300 font-semibold text-lg tracking-wide hover:scale-105"
              >
                Contact Us
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Text content */}
          <div className="space-y-10 lg:pr-8">
            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-primary-green-dark">Magical</span>{" "}
                <span className="text-foreground">Mystery</span>{" "}
                <span className="bg-gradient-to-r from-orange-fox to-pink-bunny bg-clip-text text-transparent">
                  Awaits
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl lg:text-3xl text-foreground/70 leading-relaxed font-light">
                Discover the magic of surprise with our adorable mystery box! 
                Each box contains one of seven cute DuDu Animal dolls waiting to become your new friend.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary-green to-primary-green-dark hover:from-primary-green-dark hover:to-primary-green text-background font-bold px-10 py-6 text-xl rounded-2xl shadow-elegant hover:shadow-glow transform hover:scale-105 transition-all duration-300"
                onClick={goToProduct}
              >
                <Gift className="w-6 h-6 mr-3" />
                Get Your Mystery Box
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary-green-dark text-primary-green-dark hover:bg-primary-green/10 px-10 py-6 text-xl rounded-2xl font-semibold transform hover:scale-105 transition-all duration-300"
                onClick={scrollToAnimals}
              >
                <Star className="w-6 h-6 mr-3" />
                Meet the Animals
              </Button>
            </div>

            {/* Feature indicators */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              <Card className="p-6 text-center border-green-frog/20 bg-green-frog/5 hover:bg-green-frog/10 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-green-frog rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-background" />
                </div>
                <span className="font-semibold text-foreground">Free Shipping</span>
              </Card>
              
              <Card className="p-6 text-center border-blue-elephant/20 bg-blue-elephant/5 hover:bg-blue-elephant/10 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-blue-elephant rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Star className="w-6 h-6 text-background" />
                </div>
                <span className="font-semibold text-foreground">7 Animals</span>
              </Card>
              
              <Card className="p-6 text-center border-orange-fox/20 bg-orange-fox/5 hover:bg-orange-fox/10 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-orange-fox rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Gift className="w-6 h-6 text-background" />
                </div>
                <span className="font-semibold text-foreground">Surprise Inside</span>
              </Card>
            </div>
          </div>

          {/* DuDu Animal Party image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-green/20 to-orange-fox/20 rounded-3xl blur-2xl scale-110" />
              
              <img 
                src="/lovable-uploads/c7749d54-7bab-40f5-9cf4-0f1450486f89.png" 
                alt="DuDu Animal Party Characters" 
                className="relative z-10 w-full max-w-lg xl:max-w-xl h-auto object-contain rounded-3xl shadow-elegant hover:shadow-glow transform hover:scale-105 transition-all duration-500"
              />
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-bunny rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-frog rounded-full animate-pulse delay-300" />
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-elephant rounded-full animate-pulse delay-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
