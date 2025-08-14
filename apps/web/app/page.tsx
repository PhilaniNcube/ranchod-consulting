import HomePageHero from "@/components/home-page-hero";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

export default function HomePage() {
  const features = [
    {
      title: "Strategic Consulting",
      description:
        "Expert guidance to drive your business strategy and growth.",
    },
    {
      title: "Operational Excellence",
      description:
        "Optimize your operations for maximum efficiency and results.",
    },
    {
      title: "Digital Transformation",
      description:
        "Navigate the digital landscape with confidence and expertise.",
    },
  ];

  return (
    <div className="min-h-screen">
      <HomePageHero />

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Professional Excellence for Small & Medium Enterprises
          </h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              Ranchod Consulting and its associates are professional consultants
              for the SMME business sector. We employ cutting edge methodology
              and techniques and use creative ideas to give our clients the most
              appropriate solutions to their specific challenges.
            </p>
            <p>
              Our approach combines industry expertise with innovative thinking,
              ensuring that every solution is tailored to drive your business
              forward with momentum and purpose.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Strategic Solutions
              </h3>
              <p className="text-gray-600">
                Tailored strategies that address your unique business challenges
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Creative Innovation
              </h3>
              <p className="text-gray-600">
                Fresh perspectives and innovative approaches to business growth
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Track record of success with SMME businesses across industries
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
