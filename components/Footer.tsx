import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>123 Makhana Street</li>
              <li>Madhubani, Bihar</li>
              <li>India</li>
              <li>contact@madhubani.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-yellow-400 transition duration-300"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:text-yellow-400 transition duration-300"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:text-yellow-400 transition duration-300"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:text-yellow-400 transition duration-300"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Certifications</h3>
            <p className="text-sm text-gray-400">
              ISO 9001:2015 Certified
              <br />
              FSSAI Registered
              <br />
              GMP Certified
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Madhubani Makhana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
