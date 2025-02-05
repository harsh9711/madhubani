import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Leaf, Check, Mail } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhyUsSection from "@/components/WhyUsSection";
import AboutMakhanaSection from "@/components/AboutMakhanaSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import GivingBackSection from "@/components/GivingBackSection";

export default function Home() {
  return (
    <main className="bg-white">
      <Navigation />
      <HeroSection />
      <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl font-extrabold text-white mb-4 animate-fade-in">
      Experience Authentic Makhana from Madhubani!
    </h2>
    <p className="text-lg text-gray-300 mb-6">
      Don’t settle for anything less than the best!
    </p>
    <button className="bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105">
      Shop Now
    </button>
  </div>
</section>
      <WhyUsSection />
      <AboutMakhanaSection />
      <NewsletterSection />
      <GivingBackSection />
      <Footer />
    </main>
  );
}
