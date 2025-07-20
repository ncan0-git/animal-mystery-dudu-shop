import { AnimalGrid } from "@/components/AnimalGrid";
import { ProductGallery } from "@/components/ProductGallery";
import { PurchaseSection } from "@/components/PurchaseSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ProductGallery />
      <AnimalGrid />
      <PurchaseSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
