import { useState } from "react";

export const ProductGallery = () => {
  const productImages = [
    "/lovable-uploads/a30870f6-f983-44f9-8476-3cbcea895534.png",
    "/lovable-uploads/b14f9f5d-c73c-440d-b5e3-e7926411ae74.png", 
    "/lovable-uploads/6ff44741-be38-4e0b-9605-316f7a60bd82.png"
  ];

  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white to-green-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Meet Your DuDu Friends! 🎁
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These adorable keychains are waiting to become your companions. Each mystery box contains one special friend!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Main Image Display */}
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={productImages[selectedImage]}
                alt="DuDu Animal dolls"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="order-1 md:order-2 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 text-center md:text-left">
              Real Product Photos ✨
            </h3>
            <div className="grid grid-cols-3 gap-4">
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