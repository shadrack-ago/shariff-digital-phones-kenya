import { MapPin, ShoppingCart, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/data/products";
import { Link } from "react-router-dom";

const HomePage = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Shariff Digitals
            </h1>
            <p className="text-xl mb-6">
              Your trusted source for brand new and Ex UK Samsung and iPhone devices in Nairobi, Kenya.
            </p>
            <div className="flex space-x-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Shop Samsung
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                Shop iPhone
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-white/20 rounded-2xl blur"></div>
              <div className="bg-blue-700 p-6 rounded-2xl relative">
                <img 
                  src="/lovable-uploads/edcefe39-13ba-43fc-91df-c5302c644f8b.png" 
                  alt="Shariff Digital Logo" 
                  className="h-32 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              View All Products
              <ShoppingCart className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Crazy Deals Banner */}
      <section className="py-10 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center mb-4">
              <Tag className="h-8 w-8 text-red-500 mr-2" />
              <h2 className="text-3xl font-bold">Crazy Deals</h2>
            </div>
            <p className="text-lg mb-6 max-w-2xl">
              Don't miss our limited time offers with discounts up to 30% on selected phones!
            </p>
            <Button size="lg" className="bg-red-500 hover:bg-red-600" asChild>
              <Link to="/deals">View Deals</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Samsung</h3>
              <p className="mb-6">Explore our collection of Samsung phones, from the latest Galaxy S and Z series to budget-friendly A series.</p>
              <Button>View Samsung</Button>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4">iPhone</h3>
              <p className="mb-6">Check out our iPhone collection, featuring the newest models as well as affordable Ex UK options.</p>
              <Button>View iPhone</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Store Information */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Visit Our Store</h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10">
            <div className="flex items-center">
              <MapPin className="h-10 w-10 mr-4" />
              <div>
                <h3 className="text-xl font-bold">Nairobi Store</h3>
                <p>123 Tom Mboya Street, Nairobi, Kenya</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Store Hours</h3>
              <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Shariff Digitals</h3>
              <p>Your trusted mobile phone store in Nairobi, Kenya.</p>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul>
                <li className="mb-2"><a href="#" className="hover:text-blue-300">Home</a></li>
                <li className="mb-2"><a href="#" className="hover:text-blue-300">Samsung</a></li>
                <li className="mb-2"><a href="#" className="hover:text-blue-300">iPhone</a></li>
                <li className="mb-2"><a href="#" className="hover:text-blue-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>123 Tom Mboya Street</p>
              <p>Nairobi, Kenya</p>
              <p>Phone: +254 712 345 678</p>
              <p>Email: info@shariffdigitals.co.ke</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} Shariff Digitals. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
