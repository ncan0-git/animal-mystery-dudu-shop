import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Truck, Shield, Heart, Sparkles, Star } from "lucide-react";

const features = [
  {
    icon: Gift,
    title: "Mystery Surprise",
    description: "One of 7 adorable DuDu Animals waiting inside"
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Delivered right to your door at no extra cost"
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Premium plush materials, soft and huggable"
  },
  {
    icon: Heart,
    title: "Collectible Fun",
    description: "Start your DuDu Animal collection today"
  }
];

export const PurchaseSection = () => {
  const goToProduct = () => {
    window.location.href = '/product';
  };

  return (
    <section id="purchase" className="pt-12 pb-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary-green-dark animate-bounce-gentle" />
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-gradient-primary text-white">
              Ready for Your Surprise?
            </Badge>
            <Sparkles className="w-6 h-6 text-primary-green-dark animate-bounce-gentle" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Get Your DuDu Animal Party Box
            </span>
          </h2>
          
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Each mystery box is carefully packed with love and contains one adorable DuDu Animal doll. 
            The excitement starts the moment you open it!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Features */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 border-none"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gradient-primary rounded-full">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-foreground/70">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Purchase Card */}
          <Card className="bg-gradient-card shadow-hover border-2 border-primary-green-dark relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
            
            <CardHeader className="text-center relative z-10">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-5 h-5 text-orange-fox animate-wiggle" />
                <Badge className="bg-orange-fox text-white">Limited Time</Badge>
                <Star className="w-5 h-5 text-orange-fox animate-wiggle" />
              </div>
              
              <CardTitle className="text-3xl font-bold">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  DuDu Animal Party
                </span>
              </CardTitle>
              
              <div className="text-4xl font-bold text-foreground mt-2">
                $20
                <span className="text-lg font-normal text-foreground/60 ml-2">
                  (shipping included)
                </span>
              </div>
            </CardHeader>

            <CardContent className="space-y-6 relative z-10">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-foreground/80">
                  <div className="w-2 h-2 bg-green-frog rounded-full"></div>
                  <span>One mystery DuDu Animal doll</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/80">
                  <div className="w-2 h-2 bg-blue-elephant rounded-full"></div>
                  <span>Premium plush materials</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/80">
                  <div className="w-2 h-2 bg-pink-bunny rounded-full"></div>
                  <span>Beautiful gift packaging</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/80">
                  <div className="w-2 h-2 bg-orange-fox rounded-full"></div>
                  <span>Free shipping worldwide</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-gradient-primary hover:opacity-90 text-white font-bold py-6 text-base lg:text-lg shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 group px-4"
                onClick={goToProduct}
              >
                <Gift className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3 group-hover:animate-bounce-gentle" />
                <span className="flex-1">Order Your Mystery Box Now</span>
                <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 ml-2 lg:ml-3 group-hover:animate-wiggle" />
              </Button>

              <p className="text-xs text-center text-foreground/60">
                Secure checkout • Fast worldwide shipping • 30-day satisfaction guarantee
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
            <Heart className="w-5 h-5 text-primary-green-dark" />
            <span className="text-foreground/80">
              Join thousands of happy collectors worldwide!
            </span>
            <Heart className="w-5 h-5 text-primary-green-dark" />
          </div>
        </div>
      </div>
    </section>
  );
};