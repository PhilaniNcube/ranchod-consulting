"use client";

import { services } from "@/utils/services";
import { useState } from "react";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-brand text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Comprehensive consulting solutions tailored to empower your SMME
              business with cutting-edge methodology and creative strategies.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-amber-400">
                Our Approach
              </h2>
              <p className="text-slate-200 leading-relaxed text-lg mb-6">
                Our approach is two-pronged – both personal and professional. We
                rate one-on-one interaction with our clients as a priority
                whilst maintaining a professional approach when it comes to
                creating a turnkey solution that is tailor made to best suit the
                client.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-amber-400">
                Clifton Strengths Finder
              </h3>
              <p className="text-slate-200 leading-relaxed mb-6">
                One of our preferred tools is the Clifton Strengths Finder that
                measures the presence of talent in 34 "themes." That include:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-300 mb-2">
                    Strategic Theme
                  </h4>
                  <p className="text-slate-300 text-sm">
                    Enables you to sort through the clutter and find the best
                    route.
                  </p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-300 mb-2">
                    Responsibility Theme
                  </h4>
                  <p className="text-slate-300 text-sm">
                    Forces you to take psychological ownership for anything you
                    commit to.
                  </p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-300 mb-2">
                    Analytical Theme
                  </h4>
                  <p className="text-slate-300 text-sm">
                    Challenges other people: "Prove it. Show me why what you are
                    claiming is true."
                  </p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-300 mb-2">
                    Deliberative Theme
                  </h4>
                  <p className="text-slate-300 text-sm">
                    Leads you to identify the dangers, weigh their relative
                    impact, and then choose your direction deliberately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tab Navigation */}
          <div className="mb-8">
            <div className="border-b border-slate-200">
              <nav className="flex flex-wrap gap-2 -mb-px">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-4 py-3 text-sm font-medium rounded-t-lg transition-all duration-200 ${
                      activeTab === index
                        ? "bg-brand text-white border-b-2 border-brand"
                        : "text-slate-600 hover:text-brand hover:bg-slate-50"
                    }`}
                  >
                    {service.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm">
            {services[activeTab] && (
              <>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-brand mb-4">
                    {services[activeTab].title}
                  </h3>
                </div>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-700 leading-relaxed text-lg">
                    {services[activeTab].description}
                  </p>
                </div>
              </>
            )}
          </div>
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
