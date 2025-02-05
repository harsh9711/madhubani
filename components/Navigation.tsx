import { Leaf } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-bold text-white">Madhubani</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              News & Media
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Buy Now
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Why Us
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
