import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Star } from "lucide-react";
import { useState, useEffect } from "react";
const animals = [{
  name: "Pink Bunny",
  emoji: "🐰",
  color: "bg-pink-bunny",
  borderColor: "border-pink-bunny-dark",
  description: "Soft and cuddly with the sweetest smile",
  personality: "Gentle & Caring"
}, {
  name: "White Panda",
  emoji: "🐼",
  color: "bg-white-panda",
  borderColor: "border-white-panda-dark",
  description: "Wise and peaceful bamboo lover",
  personality: "Calm & Wise"
}, {
  name: "Green Frog",
  emoji: "🐸",
  color: "bg-green-frog",
  borderColor: "border-green-frog-dark",
  description: "Energetic hopper with a big heart",
  personality: "Energetic & Fun"
}, {
  name: "Blue Elephant",
  emoji: "🐘",
  color: "bg-blue-elephant",
  borderColor: "border-blue-elephant-dark",
  description: "Never forgets a friend or a hug",
  personality: "Loyal & Strong"
}, {
  name: "Orange Fox",
  emoji: "🦊",
  color: "bg-orange-fox",
  borderColor: "border-orange-fox-dark",
  description: "Clever and quick with endless curiosity",
  personality: "Smart & Playful"
}, {
  name: "Black Cat",
  emoji: "🐱",
  color: "bg-black-cat",
  borderColor: "border-black-cat-light",
  description: "Mysterious and elegant night wanderer",
  personality: "Mysterious & Elegant"
}, {
  name: "Brown Bear",
  emoji: "🐻",
  color: "bg-brown-bear",
  borderColor: "border-brown-bear-dark",
  description: "Big hugs and even bigger heart",
  personality: "Warm & Protective"
}, {
  name: "Mystery Friend",
  emoji: "❓",
  color: "bg-gradient-to-br from-purple-400 to-pink-400",
  borderColor: "border-purple-400",
  description: "Who knows what surprise awaits you?",
  personality: "??? & ???"
}];
export const AnimalGrid = () => {
  const [likedAnimals, setLikedAnimals] = useState<Set<string>>(new Set());

  // Load liked animals from cookies on component mount
  useEffect(() => {
    const savedLikes = document.cookie.split('; ').find(row => row.startsWith('likedAnimals='))?.split('=')[1];
    if (savedLikes) {
      try {
        const parsedLikes = JSON.parse(decodeURIComponent(savedLikes));
        setLikedAnimals(new Set(parsedLikes));
      } catch (e) {
        console.log('Error parsing liked animals from cookie:', e);
      }
    }
  }, []);

  // Save liked animals to cookies whenever the set changes
  const updateLikedAnimals = (animalName: string) => {
    setLikedAnimals(prev => {
      const newSet = new Set(prev);
      if (newSet.has(animalName)) {
        newSet.delete(animalName);
      } else {
        newSet.add(animalName);
      }

      // Save to cookie (expires in 1 year)
      const expires = new Date();
      expires.setFullYear(expires.getFullYear() + 1);
      document.cookie = `likedAnimals=${encodeURIComponent(JSON.stringify(Array.from(newSet)))}; expires=${expires.toUTCString()}; path=/`;
      return newSet;
    });
  };
  return <section id="animals" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Seven Adorable Animals
            </span>
          </h2>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Each mystery box contains one of these seven cute companions. 
            Which one will you discover? The excitement is part of the magic!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {animals.map((animal, index) => <Card key={animal.name} className={`group relative overflow-hidden border-2 ${animal.borderColor} bg-gradient-card shadow-card hover:shadow-hover transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer`} style={{
          animationDelay: `${index * 100}ms`
        }} onClick={() => updateLikedAnimals(animal.name)}>
              <CardContent className="p-0">
                {/* Animal Emoji */}
                <div className={`relative ${animal.color} p-8 flex items-center justify-center`}>
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
                    {animal.emoji}
                  </div>
                  <div className="absolute top-2 right-2">
                    <Heart className={`w-6 h-6 group-hover:scale-125 transition-all duration-300 ${likedAnimals.has(animal.name) ? 'text-red-500 fill-red-500' : 'text-white/80 group-hover:text-red-500'}`} />
                  </div>
                </div>

                {/* Animal Info */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-center text-foreground">
                    {animal.name}
                  </h3>
                  
                  <Badge variant="outline" className="w-full justify-center py-1 text-sm border-current">
                    {animal.personality}
                  </Badge>
                  
                  <p className="text-sm text-foreground/70 text-center leading-relaxed">
                    {animal.description}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
              </CardContent>
            </Card>)}
        </div>

        
      </div>
    </section>;
};