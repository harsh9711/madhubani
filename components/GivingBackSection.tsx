import { Button } from "@/components/ui/button";

export default function GivingBackSection() {
  return (
    <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 items-center">
        <img
          src="https://web-resource.allip.io/makhana/img/indian-farmer.jpg"
          alt="Farmer in field"
          className="w-full lg:w-1/3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
        <div className="w-full lg:w-2/3">
          <h2 className="text-4xl font-extrabold text-white mb-4 animate-fade-in">
            Giving Back
          </h2>
          <h3 className="text-2xl font-semibold text-gray-300 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-400 mb-6">
            We are committed to giving back to the Makhana farming community in
            Bihar. Our family's heritage and long association with Madhubani and
            Bihar state mean we have a deep and lasting relationship with our
            farmers and supply chain network. We are determined to bring about
            change and help improve the lives of all those involved in Makhana
            production.
          </p>
          <Button className="bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
}
