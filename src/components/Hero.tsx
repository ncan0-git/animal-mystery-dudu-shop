import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gift, Sparkles, Star } from "lucide-react";
import mysteryBoxImage from "@/assets/mystery-box.jpg";

export const Hero = () => {
  const scrollToAnimals = () => {
    document.getElementById('animals')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPurchase = () => {
    document.getElementById('purchase')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-pink-bunny-dark">
                <Sparkles className="w-6 h-6 animate-bounce-gentle" />
                <span className="text-lg font-semibold">Mystery Awaits!</span>
                <Sparkles className="w-6 h-6 animate-bounce-gentle" />
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  DuDu Animal Party
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-foreground/80 leading-relaxed">
                Discover the magic of surprise with our adorable mystery box! 
                Each box contains one of seven cute DuDu Animal dolls waiting to become your new friend.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-pink-bunny hover:bg-pink-bunny-dark text-black-cat font-semibold px-8 py-6 text-lg shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105"
                onClick={scrollToPurchase}
              >
                <Gift className="w-5 h-5 mr-2" />
                Get Your Mystery Box - $20
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-pink-bunny-dark text-pink-bunny-dark hover:bg-pink-bunny hover:text-black-cat px-8 py-6 text-lg transition-all duration-300"
                onClick={scrollToAnimals}
              >
                <Star className="w-5 h-5 mr-2" />
                Meet the Animals
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-frog rounded-full"></div>
                <span>Free Shipping Included</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-elephant rounded-full"></div>
                <span>7 Possible Animals</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-fox rounded-full"></div>
                <span>Surprise Inside</span>
              </div>
            </div>
          </div>

          {/* Right side - Mystery box image */}
          <div className="flex justify-center">
            <Card className="relative p-8 bg-gradient-card shadow-card hover:shadow-hover transition-all duration-500 hover:scale-105 group">
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-lg group-hover:opacity-20 transition-opacity duration-500"></div>
              <img 
                src={mysteryBoxImage} 
                alt="DuDu Animal Party Mystery Box" 
                className="relative z-10 w-full max-w-md mx-auto rounded-lg shadow-soft"
              />
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-orange-fox rounded-full flex items-center justify-center shadow-card animate-bounce-gentle">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-green-frog rounded-full animate-wiggle"></div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};