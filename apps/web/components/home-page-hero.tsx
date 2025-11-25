import { Button } from "@workspace/ui/components/button";
import Link from "next/link";
import React from "react";

const HomePageHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/horses.jpg')",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-lg lg:text-4xl font-bold mb-6 leading-tight">
          Ranchod Consulting and its associates are professional consultants for
          the SMME business sector
        </h1>
        <p className="text-md mb-8 leading-relaxed opacity-90">
          We employ cutting edge methodology and techniques and use creative
          ideas to give our clients the most appropriate solutions to their
          specific challenges.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services">
            <Button
              size="lg"
              className="bg-green-800 rounded-full hover:bg-green-700 text-white px-8 py-3 text-lg"
            >
              View Services
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className=" text-white rounded-full px-8 py-3 text-lg bg-[#1e3a8a]"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePageHero;
