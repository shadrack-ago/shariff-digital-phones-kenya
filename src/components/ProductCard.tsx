
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  condition: "New" | "Ex UK";
}

const ProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          <img 
            src={product.image} 
            alt={product.name}
            className="h-full w-full object-cover transition-transform hover:scale-105" 
          />
          <span className="absolute right-2 top-2 rounded-full bg-blue-600 px-2 py-1 text-xs font-bold text-white">
            {product.condition}
          </span>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="line-clamp-1 text-lg">{product.name}</CardTitle>
        <p className="mt-2 text-lg font-bold text-blue-600">Ksh {product.price.toLocaleString()}</p>
        <p className="text-sm text-gray-500">{product.category}</p>
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0">
        <Button variant="outline" size="sm">Details</Button>
        <Button size="sm">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
