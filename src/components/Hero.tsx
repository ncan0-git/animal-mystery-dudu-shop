import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gift, Sparkles, Star } from "lucide-react";
import { VideoPlayer } from "./VideoPlayer";
import mysteryBoxImage from "/lovable-uploads/f9f9d6a3-856b-45a4-b956-007e7c3422a9.png";
import { useState, useEffect } from "react";
export const Hero = () => {
  const backgroundImages = [
    '/lovable-uploads/d55c8168-4595-454a-93c8-00c4cb778a79.png',
    '/lovable-uploads/1bfa77ec-5f71-4826-83ac-ea7bc94f3018.png',
    '/lovable-uploads/8c6a013c-ff8d-4013-b5d1-161c8fa7f971.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const scrollToAnimals = () => {
    document.getElementById('products')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToPurchase = () => {
    document.getElementById('purchase')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const goToProduct = () => {
    window.location.href = '/product';
  };
  return <section className="min-h-[75vh] bg-gradient-hero relative shadow-lg">
      {/* Background image with blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out" 
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`
        }} 
      />
      {/* Content overlay */}
      <div className="relative z-10">
        {/* Header with Logo */}
        <header className="w-full relative bg-background shadow-lg border-b border-border/20">
          <div className="container mx-auto px-6 py-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img src="/lovable-uploads/6aacc559-e50e-4077-be46-bbbf240bf7a8.png" alt="DuDu Animal Party Logo" className="h-8 sm:h-10 lg:h-12 w-auto drop-shadow-sm" />
              </div>
              <nav className="flex items-center gap-8">
                <button onClick={scrollToProducts} className="text-foreground/70 hover:text-primary-green-dark transition-colors duration-300 font-medium text-sm lg:text-base">
                  Products
                </button>
                <button onClick={scrollToContact} className="text-foreground/70 hover:text-primary-green-dark transition-colors duration-300 font-medium text-sm lg:text-base">
                  Contact Us
                </button>
              </nav>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8 lg:py-12">
          <div className="flex justify-center items-center min-h-[45vh]">
            
            {/* Combined content in white rectangle */}
            <div className="text-center space-y-6 lg:space-y-8 relative py-6 px-8 max-w-4xl mx-auto">
              {/* Background rectangle */}
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-background/95 border border-border/50 rounded-2xl drop-shadow-lg -z-10"></div>
              
              {/* DuDu Animal Party video player */}
              <div className="flex justify-center">
                <VideoPlayer 
                  thumbnailSrc="/lovable-uploads/c7749d54-7bab-40f5-9cf4-0f1450486f89.png"
                  videoSrc="/path-to-your-video.mp4"
                  alt="DuDu Animal Party Characters"
                  className="w-full max-w-xs lg:max-w-sm"
                />
              </div>
              
              {/* Description */}
              <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 leading-relaxed max-w-2xl mx-auto text-center">Discover the magic of surprise with our adorable mystery box! Each box contains one of seven cute DuDu Animal dolls waiting to become your new friend.</p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary-green hover:bg-primary-green-dark text-black-cat font-semibold px-6 py-4 lg:px-8 lg:py-6 text-sm lg:text-lg shadow-card hover:shadow-hover transition-all duration-300" onClick={goToProduct}>
                  <Gift className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                  Get Your Mystery Box
                </Button>
                
                <Button size="lg" className="bg-primary-green hover:bg-primary-green-dark text-black-cat font-semibold px-6 py-4 lg:px-8 lg:py-6 text-base lg:text-lg shadow-card hover:shadow-hover transition-all duration-300" onClick={scrollToAnimals}>
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
                  <span>7 Possible Animals</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-fox rounded-full"></div>
                  <span>Surprise Inside</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};