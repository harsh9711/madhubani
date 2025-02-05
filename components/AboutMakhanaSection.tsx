import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutMakhanaSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-6 text-white animate-fade-in">
              About Makhana
            </h2>
            <div className="space-y-4">
              <p className="text-gray-300">
                Makhana, also known as fox nuts, is a superfood cherished for
                generations. Rich in proteins, carbohydrates, and minerals, it's
                the perfect healthy snack for modern lifestyles.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  <span>High in protein and fiber</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  <span>Low in calories</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  <span>Rich in antioxidants</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  <span>Gluten-free</span>
                </li>
              </ul>
              <Button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative h-96 animate-slide-in-left">
            <Image
              src="https://web-resource.allip.io/makhana/img/healthy-family.png"
              alt="Makhana benefits"
              fill
              className="h-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
