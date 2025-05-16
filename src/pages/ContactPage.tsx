
import { MapPin, Phone as PhoneIcon, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="mb-4">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              <div className="mb-4">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+254 7XX XXX XXX" />
              </div>
              <div className="mb-6">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  rows={5}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
        
        <div>
          <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-bold mb-4">Store Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p>123 Tom Mboya Street, Nairobi, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <PhoneIcon className="h-6 w-6 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>+254 712 345 678</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>info@shariffdigitals.co.ke</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Business Hours</h3>
                  <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Why Choose Us?</h2>
            <ul className="space-y-2">
              <li>✓ Quality phones - brand new and Ex UK</li>
              <li>✓ Competitive prices in Nairobi</li>
              <li>✓ Expert advice on choosing the right device</li>
              <li>✓ After-sales support</li>
              <li>✓ Genuine accessories available</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
