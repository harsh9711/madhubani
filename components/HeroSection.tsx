import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-black bg-opacity-80 sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl shadow-2xl rounded-2xl">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl animate-fade-in-up">
                <span className="block">AI-Powered Makhana</span>
                <span className="block text-green-400">
                  Revolutionizing Quality
                </span>
              </h1>
              <h2 className="mt-6 text-2xl text-gray-300 font-semibold">
                Innovation Meets Tradition
              </h2>
              <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
                Experience the future of Makhana with cutting-edge AI technology
                ensuring the highest quality and taste.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <Button className="bg-green-600 hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-110 shadow-lg">
                  Discover More
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="relative h-64 sm:h-72 md:h-96 lg:h-full animate-slide-in-right">
          <Image
            src="https://web-resource.allip.io/makhana/img/makhana-bowls.png"
            alt="Makhana products"
            fill
            className="object-cover rounded-2xl shadow-2xl"
            priority
          />
        </div>
      </div>
    </div>
  );
}
