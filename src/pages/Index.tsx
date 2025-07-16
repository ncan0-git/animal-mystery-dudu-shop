import { Hero } from "@/components/Hero";
import { AnimalGrid } from "@/components/AnimalGrid";
import { ProductGallery } from "@/components/ProductGallery";
import { PurchaseSection } from "@/components/PurchaseSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductGallery />
      <AnimalGrid />
      <PurchaseSection />
      <Footer />
    </div>
  );
};

export default Index;
