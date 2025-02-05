import { Check } from "lucide-react";

export default function WhyUsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-white animate-fade-in">
          Why Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-green-400">
              Heritage
            </h3>
            <p className="text-gray-300 mb-4">
              Given our heritage, knowledge, and experience, we are doing our
              utmost to lead and bring about change to benefit all involved in
              Makhana manufacturing & business.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-green-400">
              Quality
            </h3>
            <p className="text-gray-300 mb-4">
              Our consistent quality, long-established supply chain, and ethical
              business practices have made us the preferred choice as a Makhana
              manufacturer and wholesale supplier in Madhubani, Bihar, India.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-green-400">Trust</h3>
            <p className="text-gray-300 mb-4">
              We are the leading manufacturer and wholesale supplier of Makhana
              worldwide. As the original pioneer of Makhana production, we know
              what we are talking about, you can rely upon us!
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col md:flex-row items-start">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-400 mr-2" />
                <span>Competitive Pricing</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-400 mr-2" />
                <span>Quality testing and control at every level</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-400 mr-2" />
                <span>Efficient and experienced workforce</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-400 mr-2" />
                <span>Customised packaging</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-400 mr-2" />
                <span>
                  Ability to handle small to bulk orders - all on time
                </span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-400 mr-2" />
                <span>Spacious and well-connected warehouse</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-400 mr-2" />
                <span>
                  Ethical and sustainable business and harvesting practices
                </span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-400 mr-2" />
                <span>
                  Our relationship with farmers & commitment to fair wages
                </span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-400 mr-2" />
                <span>
                  Fully collaborative supply chain using the latest technology
                </span>
              </li>
            </ul>
            <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105">
              Learn more
            </button>
          </div>
          <div className="flex-1 mt-8 md:mt-0 md:ml-8">
            <img
              src="https://web-resource.allip.io/makhana/img/makhana-bowl-2.jpg"
              alt="Makhana"
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
