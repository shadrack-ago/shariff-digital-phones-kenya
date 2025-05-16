
import { useParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory, products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type CategoryParams = {
  category: string;
};

const CategoryPage = () => {
  const { category } = useParams<CategoryParams>();
  const [filter, setFilter] = useState<"All" | "New" | "Ex UK">("All");
  
  const displayCategory = category === "samsung" ? "Samsung" : "iPhone";
  const categoryProducts = category 
    ? getProductsByCategory(displayCategory) 
    : products;

  const filteredProducts = filter === "All" 
    ? categoryProducts 
    : categoryProducts.filter(product => product.condition === filter);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">{displayCategory} Phones</h1>
      
      <div className="mb-8">
        <div className="flex space-x-2">
          <Button 
            variant={filter === "All" ? "default" : "outline"} 
            onClick={() => setFilter("All")}
          >
            All
          </Button>
          <Button 
            variant={filter === "New" ? "default" : "outline"} 
            onClick={() => setFilter("New")}
          >
            Brand New
          </Button>
          <Button 
            variant={filter === "Ex UK" ? "default" : "outline"} 
            onClick={() => setFilter("Ex UK")}
          >
            Ex UK
          </Button>
        </div>
      </div>
      
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-2">No products found</h2>
          <p className="text-gray-500">Try changing your filter selection</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
