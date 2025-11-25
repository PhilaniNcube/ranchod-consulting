"use client";

import { services } from "@/utils/services";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function ServiceCard({
  service,
}: {
  service: { title: string; description: string };
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-brand">{service.title}</h3>
          {isExpanded ? (
            <ChevronUp className="w-6 h-6 text-brand" />
          ) : (
            <ChevronDown className="w-6 h-6 text-brand" />
          )}
        </div>
        <div
          className={`prose prose-slate max-w-none transition-all duration-300 ${
            isExpanded ? "bg-slate-50 p-6 rounded-lg" : "bg-white"
          }`}
        >
          <p
            className={`text-slate-700 leading-relaxed text-lg ${
              !isExpanded ? "line-clamp-1" : ""
            }`}
          >
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 uppercase tracking-wide">
            Services
          </h1>
          <p className="text-xl md:text-2xl italic font-light">
            "Success is where preparation and opportunity meet"
          </p>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-16 bg-white text-slate-700">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <p className="text-lg leading-relaxed">
            Our approach is two-pronged – both personal and professional. We
            rate one-on-one interaction with our clients as a priority whilst
            maintaining a professional approach when it comes to creating a
            turnkey solution that is tailor made to best suit the client.
          </p>
          <p className="text-lg leading-relaxed">
            One of our preferred tools is the Clifton Strengths Finder that
            measures the presence of talent in 34 "themes." That include: A
            Strategic Theme that enables you to sort through the clutter and
            find the best route. A Responsibility Theme which forces you to take
            psychological ownership for anything you commit to. An Analytical
            Theme that challenges other people: "Prove it. Show me why what you
            are claiming is true." A Deliberative Theme which leads you to
            identify the dangers, weigh their relative impact, and then choose
            your direction deliberately.
          </p>
        </div>
      </section>
      <section className="bg-linear-to-r from-green-700 via-green-900 to-green-700">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-white text-2xl lg:text-3xl font-bold text-center py-8 text-balance">
            Over the years, we have grown our service portfolio and offer the
            following consulting services:
          </h2>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-brand mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Let's discuss how our expertise can help you achieve your business
            objectives.
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
