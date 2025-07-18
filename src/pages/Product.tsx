import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Shield, Truck, Gift, ArrowLeft, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Product = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const price = 20;

  const productImages = [
    "/lovable-uploads/c13b008c-5519-4157-8fca-89433ff9c5d5.png",
    "/lovable-uploads/a30870f6-f983-44f9-8476-3cbcea895534.png",
    "/lovable-uploads/b14f9f5d-c73c-440d-b5e3-e7926411ae74.png", 
    "/lovable-uploads/6ff44741-be38-4e0b-9605-316f7a60bd82.png"
  ];

  const [selectedImage, setSelectedImage] = useState(0);

  const handlePurchase = () => {
    // Save cart items to localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const newItem = {
      id: 'dudu-mystery-box',
      name: 'DuDu Animal Party Mystery Box',
      price: price,
      quantity: quantity,
      image: productImages[0]
    };
    
    // Check if item already exists in cart
    const existingItemIndex = existingCart.findIndex((item: any) => item.id === newItem.id);
    
    if (existingItemIndex > -1) {
      // Update quantity if item exists
      existingCart[existingItemIndex].quantity += quantity;
    } else {
      // Add new item to cart
      existingCart.push(newItem);
    }
    
    localStorage.setItem('cart', JSON.stringify(existingCart));
    
    // Show success toast
    toast({
      title: "Added to Cart! 🎉",
      description: `${quantity} DuDu Mystery Box${quantity > 1 ? 'es' : ''} added to your cart`,
    });
  };

  const handleBuyNow = () => {
    handlePurchase();
    // For now, just redirect to the same page or could redirect to a checkout page
    toast({
      title: "Redirecting to Checkout...",
      description: "Taking you to secure payment",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Logo */}
      <div className="w-full relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/60 to-transparent h-32"></div>
        <div className="container mx-auto px-4 pt-8 pb-4 relative z-10">
          <div className="flex justify-between items-center">
            <img 
              src="/lovable-uploads/6aacc559-e50e-4077-be46-bbbf240bf7a8.png" 
              alt="DuDu Animal Party Logo" 
              className="h-10 sm:h-12 lg:h-16 xl:h-20 w-auto"
            />
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="hover:bg-primary-green/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Product Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative bg-white rounded-3xl p-8 shadow-card">
              <img
                src={productImages[selectedImage]}
                alt="DuDu Animal Party Mystery Box"
                className="w-full h-auto rounded-2xl object-contain max-h-96"
              />
              <div className="absolute top-4 right-4">
                <Heart className="w-8 h-8 text-gray-300 hover:text-pink-bunny cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                    selectedImage === index
                      ? "ring-4 ring-primary-green scale-105 shadow-lg"
                      : "hover:scale-105 hover:shadow-md"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-20 object-cover bg-white"
                  />
                  {selectedImage === index && (
                    <div className="absolute inset-0 bg-primary-green/20 flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge className="bg-orange-fox text-white">Mystery Box</Badge>
                <Badge variant="outline" className="border-green-frog text-green-frog">
                  Limited Edition
                </Badge>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  DuDu Animal Party
                </span>
              </h1>
              
              <p className="text-xl text-foreground/70 leading-relaxed">
                Discover the magic of surprise with our adorable mystery box! 
                Each box contains one of seven cute DuDu Animal keychains waiting to become your new friend.
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-fox text-orange-fox" />
                ))}
              </div>
              <span className="text-foreground/70">(128 reviews)</span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-primary-green">${price}</span>
                <span className="text-lg text-foreground/50 line-through">$29.99</span>
                <Badge className="bg-red-500 text-white">33% OFF</Badge>
              </div>
              <p className="text-sm text-foreground/60">Free shipping included!</p>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-3">
              <label className="text-lg font-semibold">Quantity</label>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10"
                >
                  -
                </Button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10"
                >
                  +
                </Button>
              </div>
            </div>

            {/* Purchase Button */}
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full bg-primary-green hover:bg-primary-green-dark text-black-cat font-semibold py-6 text-lg shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105"
                onClick={handlePurchase}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="w-full border-primary-green-dark text-primary-green-dark hover:bg-primary-green hover:text-black-cat py-6 text-lg transition-all duration-300"
                onClick={handleBuyNow}
              >
                <Gift className="w-5 h-5 mr-2" />
                Buy Now
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="p-4 text-center border-green-frog/20">
                <CardContent className="p-0 space-y-2">
                  <Truck className="w-8 h-8 text-green-frog mx-auto" />
                  <p className="text-sm font-semibold">Free Shipping</p>
                  <p className="text-xs text-foreground/60">Worldwide delivery</p>
                </CardContent>
              </Card>
              
              <Card className="p-4 text-center border-blue-elephant/20">
                <CardContent className="p-0 space-y-2">
                  <Shield className="w-8 h-8 text-blue-elephant mx-auto" />
                  <p className="text-sm font-semibold">Satisfaction Guarantee</p>
                  <p className="text-xs text-foreground/60">30-day returns</p>
                </CardContent>
              </Card>
              
              <Card className="p-4 text-center border-orange-fox/20">
                <CardContent className="p-0 space-y-2">
                  <Gift className="w-8 h-8 text-orange-fox mx-auto" />
                  <p className="text-sm font-semibold">Surprise Inside</p>
                  <p className="text-xs text-foreground/60">7 possible animals</p>
                </CardContent>
              </Card>
            </div>

            {/* Product Details */}
            <Card className="p-6 bg-gradient-card">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-semibold">What's Inside?</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-orange-fox" />
                    One surprise DuDu Animal keychain
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-orange-fox" />
                    Soft, fluffy texture with kawaii design
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-orange-fox" />
                    Perfect for bags, keys, or desk companion
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-orange-fox" />
                    7 possible animals to collect
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;