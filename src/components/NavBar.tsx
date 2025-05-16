
import { Link } from "react-router-dom";
import { ShoppingCart, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/edcefe39-13ba-43fc-91df-c5302c644f8b.png" 
              alt="Shariff Digital Logo" 
              className="h-12"
            />
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/samsung" className="text-gray-700 hover:text-blue-600">Samsung</Link>
            <Link to="/iphone" className="text-gray-700 hover:text-blue-600">iPhone</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            <Link to="/deals" className="text-gray-700 hover:text-blue-600 flex items-center">
              <Tag className="mr-1 h-4 w-4 text-red-500" />
              Crazy Deals
            </Link>
            <Button variant="outline" size="sm" className="flex items-center">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Cart (0)
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
