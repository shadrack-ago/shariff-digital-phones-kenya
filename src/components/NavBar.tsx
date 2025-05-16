
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Tag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
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

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <Link to="/deals" className="text-red-500 flex items-center">
              <Tag className="h-5 w-5" />
            </Link>
            <Button variant="outline" size="sm" className="flex items-center">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Drawer direction="right" open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Shariff Digitals</DrawerTitle>
                  <DrawerClose className="absolute right-4 top-4">
                    <X className="h-4 w-4" />
                  </DrawerClose>
                </DrawerHeader>
                <div className="flex flex-col items-center gap-4 p-4">
                  <Link 
                    to="/" 
                    className="w-full text-center py-2 hover:bg-gray-100 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/samsung" 
                    className="w-full text-center py-2 hover:bg-gray-100 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Samsung
                  </Link>
                  <Link 
                    to="/iphone" 
                    className="w-full text-center py-2 hover:bg-gray-100 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    iPhone
                  </Link>
                  <Link 
                    to="/contact" 
                    className="w-full text-center py-2 hover:bg-gray-100 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link 
                    to="/deals" 
                    className="w-full text-center py-2 hover:bg-gray-100 rounded-md flex items-center justify-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Tag className="mr-2 h-4 w-4 text-red-500" />
                    Crazy Deals
                  </Link>
                </div>
                <DrawerFooter>
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Cart (0)
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
