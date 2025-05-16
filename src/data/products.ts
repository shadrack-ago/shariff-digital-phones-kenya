
import { ProductProps } from "@/components/ProductCard";

export const products: ProductProps[] = [
  {
    id: "1",
    name: "Samsung Galaxy S23 Ultra",
    price: 145000,
    image: "https://images.unsplash.com/photo-1519923834699-ef0b7cde4712",
    category: "Samsung",
    condition: "New"
  },
  {
    id: "2",
    name: "Samsung Galaxy Z Fold 5",
    price: 200000,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2",
    category: "Samsung",
    condition: "New"
  },
  {
    id: "3",
    name: "Samsung Galaxy S22",
    price: 75000,
    image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7",
    category: "Samsung",
    condition: "Ex UK"
  },
  {
    id: "4",
    name: "iPhone 15 Pro Max",
    price: 180000,
    image: "https://images.unsplash.com/photo-1603921326210-6edd2d60ca68",
    category: "iPhone",
    condition: "New"
  },
  {
    id: "5",
    name: "iPhone 14",
    price: 100000,
    image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a",
    category: "iPhone",
    condition: "New"
  },
  {
    id: "6",
    name: "iPhone 13 Pro",
    price: 85000,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5",
    category: "iPhone",
    condition: "Ex UK"
  },
  {
    id: "7",
    name: "Samsung Galaxy A54",
    price: 45000,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
    category: "Samsung",
    condition: "Ex UK"
  },
  {
    id: "8",
    name: "iPhone 12 Mini",
    price: 60000,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0",
    category: "iPhone",
    condition: "Ex UK"
  },
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductsByCondition = (condition: "New" | "Ex UK") => {
  return products.filter(product => product.condition === condition);
};

export const getFeaturedProducts = () => {
  return products.slice(0, 4);
};
