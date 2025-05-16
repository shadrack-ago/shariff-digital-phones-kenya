
import { Link } from "react-router-dom";
import { Phone, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Phone className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">Shariff Digitals</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/samsung" className="text-gray-700 hover:text-blue-600">Samsung</Link>
            <Link to="/iphone" className="text-gray-700 hover:text-blue-600">iPhone</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
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
