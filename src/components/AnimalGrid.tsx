import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Star } from "lucide-react";

// Import animal images
import pinkBunnyImg from "@/assets/animals/pink-bunny.png";
import whitePandaImg from "@/assets/animals/white-panda.png";
import greenFrogImg from "@/assets/animals/green-frog.png";
import blueElephantImg from "@/assets/animals/blue-elephant.png";
import orangeFoxImg from "@/assets/animals/orange-fox.png";
import blackCatImg from "@/assets/animals/black-cat.png";
import brownBearImg from "@/assets/animals/brown-bear.png";
import mysteryFriendImg from "@/assets/animals/mystery-friend.png";

const animals = [
  {
    name: "Pink Bunny",
    image: pinkBunnyImg,
    color: "bg-pink-bunny",
    borderColor: "border-pink-bunny-dark",
    description: "Soft and cuddly with the sweetest smile",
    personality: "Gentle & Caring"
  },
  {
    name: "White Panda",
    image: whitePandaImg,
    color: "bg-white-panda",
    borderColor: "border-white-panda-dark",
    description: "Wise and peaceful bamboo lover",
    personality: "Calm & Wise"
  },
  {
    name: "Green Frog",
    image: greenFrogImg,
    color: "bg-green-frog",
    borderColor: "border-green-frog-dark",
    description: "Energetic hopper with a big heart",
    personality: "Energetic & Fun"
  },
  {
    name: "Blue Elephant",
    image: blueElephantImg,
    color: "bg-blue-elephant",
    borderColor: "border-blue-elephant-dark",
    description: "Never forgets a friend or a hug",
    personality: "Loyal & Strong"
  },
  {
    name: "Orange Fox",
    image: orangeFoxImg,
    color: "bg-orange-fox",
    borderColor: "border-orange-fox-dark",
    description: "Clever and quick with endless curiosity",
    personality: "Smart & Playful"
  },
  {
    name: "Black Cat",
    image: blackCatImg,
    color: "bg-black-cat",
    borderColor: "border-black-cat-light",
    description: "Mysterious and elegant night wanderer",
    personality: "Mysterious & Elegant"
  },
  {
    name: "Brown Bear",
    image: brownBearImg,
    color: "bg-brown-bear",
    borderColor: "border-brown-bear-dark",
    description: "Big hugs and even bigger heart",
    personality: "Warm & Protective"
  },
  {
    name: "Mystery Friend",
    image: mysteryFriendImg,
    color: "bg-gradient-to-br from-purple-400 to-pink-400",
    borderColor: "border-purple-400",
    description: "Who knows what surprise awaits you?",
    personality: "??? & ???"
  }
];

export const AnimalGrid = () => {
  return (
    <section id="animals" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Eight Adorable Animals
            </span>
          </h2>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Each mystery box contains one of these eight cute companions. 
            Which one will you discover? The excitement is part of the magic!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {animals.map((animal, index) => (
            <Card 
              key={animal.name}
              className={`group relative overflow-hidden border-2 ${animal.borderColor} bg-gradient-card shadow-card hover:shadow-hover transition-all duration-500 hover:scale-105 hover:-translate-y-2`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                {/* Animal Image */}
                <div className={`relative ${animal.color} p-8 flex items-center justify-center`}>
                  <img 
                    src={animal.image} 
                    alt={animal.name}
                    className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2">
                    <Heart className="w-6 h-6 text-white/80 group-hover:text-red-500 group-hover:scale-125 transition-all duration-300" />
                  </div>
                </div>

                {/* Animal Info */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-center text-foreground">
                    {animal.name}
                  </h3>
                  
                  <Badge 
                    variant="outline" 
                    className="w-full justify-center py-1 text-sm border-current"
                  >
                    {animal.personality}
                  </Badge>
                  
                  <p className="text-sm text-foreground/70 text-center leading-relaxed">
                    {animal.description}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-card rounded-full shadow-soft">
            <Star className="w-5 h-5 text-orange-fox" />
            <span className="text-lg font-semibold text-foreground">
              Which friend will you get? It's a surprise! 🎁
            </span>
            <Star className="w-5 h-5 text-orange-fox" />
          </div>
        </div>
      </div>
    </section>
  );
};