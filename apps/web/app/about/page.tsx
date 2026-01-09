"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* About Hero */}
      <section className="py-20 px-6 bg-gradient-to-br from-brand to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About Ranchod Consulting</h1>

          <p className="text-xl leading-relaxed opacity-90">
            Professional consultants for the SMME business sector, established
            in 2003 with a commitment to excellence and innovation.
          </p>
        </div>
      </section>

      {/* Company Foundation */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Company History */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Our Foundation
              </h2>
             
              <Image
                src="/images/profile.webp"
                alt="Company Foundation"
                width={800}
                height={500}
                className="w-full aspect-[1/1.5] object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Professional Qualifications */}
            <div className="bg-gray-50 p-8 rounded-lg">
               <p className="text-gray-700 leading-relaxed">
                The consultancy was established by Sanjiv Ranchod in 2003 after
                gaining valuable experience in many sectors of the business
                world. We offer added value to clients through our strong skill
                sets in oral and written communication; team facilitation and
                time management; research and analytics, as well as, exceptional
                knowledge and experience in the automotive, small business
                (SMME) and supply chain management fields.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Combined with our network of associates, we have a highly
                diverse range of skills, competence and experience that enables
                us to provide comprehensive solutions tailored to each client's
                unique needs.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Professional Qualifications
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Diploma in Mechanical Engineering
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Diploma in Sales and Marketing
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Certificate in Project management
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Certificate – Train the Trainer
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Coaching qualifications with SEDA and MBCi
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    B – Tech Business Administration
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">MBA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Professional Experience
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Sanjiv's vast professional business experience was gained by
              playing an integral part in the advancement of these
              organizations:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
           
              { name: "East Cape Automotive Industry Cluster (DEDEAT)", logo: "/images/company-logos/DEDEAT.webp" },
              { name: "Imizi Housing Utility", logo: "/images/company-logos/imizi.webp" },
              { name: "Automotive Industry Development Centre (AIDC - EC)", logo: "/images/company-logos/aidc-ec.webp" },
              { name: "South African National Parks", logo: "/images/company-logos/sanparks.webp" },
              { name: "PriceWaterhouse Coopers (PWC)", logo: "/images/company-logos/pwc.webp" },
              { name: "Kalan Truck and Driver", logo: "/images/company-logos/Kalan.png" },
              { name: "Volkswagen of SA", logo: "/images/company-logos/vw.jpg" },
              { name: "Nelson Mandela Metropolitan Municipality Fleet management assessment", logo: "/images/company-logos/nmbm.webp" },
              { name: "East Cape Dept. of Health Pharma distribution and outsourcing", logo: "/images/company-logos/ecdh.webp" },
              { name: "Footloose Shoes (CC)", logo: "/images/company-logos/footloose.webp" },
              { name: "NYDA (National Youth Development Agency)", logo: "/images/company-logos/nyda.webp" },
              { name: "East Cape Legislature", logo: "/images/company-logos/ec-legislature.webp" },
              { name: "NMU (Nelson Mandela University)", logo: "/images/company-logos/nmu.webp" },
              { name: "Engeli Enterprise Development", logo: "/images/company-logos/engeli.webp" },
              { name: "IDC (Industrial Development Corporation)", logo: "/images/company-logos/idc.webp" },
              { name: "ECDC (East Cape Development Corporation)", logo: "/images/company-logos/ecdc.webp" },
              { name: "NEFCORP (NEF)", logo: "/images/company-logos/nerfcorp.webp" },
              { name: "SEDFA (SEDA/SEFA)", logo: "/images/company-logos/sefda.webp" },
              { name: "Nelson Mandela University Investment Company", logo: "/images/company-logos/investment.webp" },
            ].map((company, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all hover:border-amber-600 group"
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-1/2 relative flex items-center justify-center rounded-lg overflow-hidden group-hover:bg-amber-50 transition-colors">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={600}
                      height={400}
                      className="w-full h-full object-contain p-2"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(company.name.split(' ')[0] || company.name)}&background=D97706&color=fff&size=128`;
                      }}
                    />
                  </div>
                  <p className="text-gray-700 text-sm font-medium text-center leading-tight">
                    {company.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Import/Export Specialization */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Import & Export Solutions
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Ranchod Consulting specializes in connecting South African
                importers with reliable suppliers worldwide, creating pathways
                for business growth and expansion. We have cultivated strong
                relationships with international companies eager to collaborate,
                with India serving as a key focus area given its strategic
                importance as a trading partner for South Africa.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through annual participation at prominent trade shows including
                IESS and ELECRAMA, we continuously expand our network and
                identify the most promising suppliers tailored to your specific
                requirements. Whether you're seeking alternative supply chains
                or exploring new partnership opportunities, our expertise guides
                you through every step of the international trade process.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Our Global Network
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Reliable International Partnerships
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Established relationships with verified suppliers
                      worldwide
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Strategic Trade Show Presence
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Annual attendance at IESS, ELECRAMA, and other key events
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      India Market Expertise
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Specialized knowledge of South Africa-India trade dynamics
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Supply Chain Alternatives
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Comprehensive solutions for diversifying your supplier
                      base
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
