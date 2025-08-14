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
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Ranchod
          <span className="block text-brand">Consulting</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
          Empowering SMME businesses with cutting-edge solutions and creative
          strategies
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-brand hover:bg-brand/85 text-white px-8 py-3 text-lg"
            >
              Get Started
            </Button>
          </Link>
          <Link href="/about">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePageHero;
