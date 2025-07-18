import { Heart, Star, Gift } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-black-cat text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          {/* Logo and tagline */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                DuDu Animal Party
              </span>
            </h3>
            <p className="text-white/70 max-w-md mx-auto">
              Bringing joy and surprises through adorable collectible animals that become lifelong friends.
            </p>
          </div>

          {/* Decorative elements */}
          <div className="flex items-center justify-center gap-4 text-white/50">
            <Star className="w-4 h-4" />
            <Gift className="w-5 h-5 text-pink-bunny" />
            <Star className="w-4 h-4" />
            <Heart className="w-5 h-5 text-orange-fox" />
            <Star className="w-4 h-4" />
            <Gift className="w-5 h-5 text-blue-elephant" />
            <Star className="w-4 h-4" />
          </div>

          {/* Contact and info */}
          <div className="space-y-2 text-sm text-white/60">
            <p>Questions? Contact us for more information about your DuDu Animal Party!</p>
            <p>Made with ❤️ for animal lovers worldwide</p>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-6 text-xs text-white/50">
            <p>&copy; 2025 DuDu Animal Party. All rights reserved. Bringing smiles, one mystery box at a time.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};