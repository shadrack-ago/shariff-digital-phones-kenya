
import { Tag, Gift } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/data/products";

const DealsPage = () => {
  // Using featured products as placeholder for deals
  const dealProducts = getFeaturedProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-center mb-8">
        <Tag className="h-8 w-8 text-red-500 mr-3" />
        <h1 className="text-3xl font-bold text-center">Crazy Deals</h1>
        <Gift className="h-8 w-8 text-red-500 ml-3" />
      </div>
      
      <div className="bg-red-50 border border-red-100 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-red-600 mb-2">Limited Time Offers!</h2>
        <p className="text-gray-700">
          Check out our exclusive crazy deals with discounts up to 30% off on selected phones. 
          These offers are only available while stock lasts!
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dealProducts.map((product) => (
          <div key={product.id} className="relative">
            <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-3 py-1 text-sm font-bold z-10">
              -{Math.floor(Math.random() * 30) + 10}%
            </div>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsPage;
