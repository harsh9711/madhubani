import { Button } from "@/components/ui/button";

export default function NewsletterSection() {
  return (
    <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4 animate-fade-in">
            Stay Updated!
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Enter your e-mail address to receive regular updates, news on
            upcoming events, and special offers.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="your email..."
              className="flex-1 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-lg bg-gray-700 text-white placeholder-gray-400"
            />
            <Button className="bg-green-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
