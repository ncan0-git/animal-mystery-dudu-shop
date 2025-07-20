import { useState } from "react";
import { Button } from "@/components/ui/button";
import { VideoPlayer } from "@/components/VideoPlayer";
import mysteryBoxImage from "/lovable-uploads/f9f9d6a3-856b-45a4-b956-007e7c3422a9.png";

export const ProductGallery = () => {
  const productImages = [
    "/lovable-uploads/b14f9f5d-c73c-440d-b5e3-e7926411ae74.png", 
    "/lovable-uploads/6ff44741-be38-4e0b-9605-316f7a60bd82.png"
  ];

  const [selectedImage, setSelectedImage] = useState(0);
  const [showVideo, setShowVideo] = useState(true);

  const goToProduct = () => {
    window.location.href = '/product';
  };

  const scrollToAnimals = () => {
    document.getElementById('animals')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" className="py-16 px-4 bg-gradient-to-br from-white to-green-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            DuDu Animal Party Box 🎁
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover the magic of surprise with our adorable DuDu Animals! Each mystery box contains one randomly selected kawaii keychain companion, carefully crafted with premium materials for endless cuddles and joy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={goToProduct}
              size="lg" 
              className="bg-primary-green hover:bg-primary-green-dark text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Your Mystery Box! ✨
            </Button>
            <Button 
              onClick={scrollToAnimals}
              variant="outline" 
              size="lg"
              className="border-2 border-primary-green text-primary-green-dark hover:bg-primary-green/5 font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300"
            >
              Meet the Animals 🐾
            </Button>
          </div>
          <p className="text-sm text-gray-500 italic">Only $19.99 + Free Shipping Worldwide! 🌍</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Main Display Area */}
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {showVideo ? (
                <VideoPlayer
                  thumbnailSrc={mysteryBoxImage}
                  videoSrc="/placeholder-video.mp4"
                  alt="DuDu Animals Mystery Box"
                  className="w-full"
                />
              ) : (
                <img
                  src={productImages[selectedImage]}
                  alt="DuDu Animal dolls"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              )}
            </div>
          </div>

          {/* Controls and Gallery */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="flex gap-4 justify-center md:justify-start">
              <Button
                onClick={() => setShowVideo(true)}
                variant={showVideo ? "default" : "outline"}
                className="px-4 py-2"
              >
                Video
              </Button>
              <Button
                onClick={() => setShowVideo(false)}
                variant={!showVideo ? "default" : "outline"}
                className="px-4 py-2"
              >
                Photos
              </Button>
            </div>

            {!showVideo && (
              <>
                <h3 className="text-2xl font-semibold text-gray-800 text-center md:text-left">
                  Real Product Photos ✨
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                        selectedImage === index
                          ? "ring-4 ring-primary scale-105 shadow-lg"
                          : "hover:scale-105 hover:shadow-md"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`DuDu Animals ${index + 1}`}
                        className="w-full h-24 object-cover"
                      />
                      {selectedImage === index && (
                        <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                          <span className="text-white font-bold">✓</span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}

            <div className="bg-green-100 p-4 rounded-xl">
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-semibold">What you get:</span> One surprise DuDu Animal keychain with soft, fluffy texture and adorable kawaii design. Perfect for bags, keys, or as a desk companion! 🧸
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};