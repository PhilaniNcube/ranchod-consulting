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
            </div>

            {/* Professional Qualifications */}
            <div className="bg-gray-50 p-8 rounded-lg">
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
              "Automotive Industry Development Centre",
              "East Cape Automotive Industry Cluster (DEDEAT)",
              "Imizi Housing Utility",
              "Automotive Industry Development Centre (AIDC - EC)",
              "South African National Parks",
              "PriceWaterhouse Coopers (PWC)",
              "Kalan Truck and Driver",
              "Volkswagen of SA",
              "Nelson Mandela Metropolitan Municipality Fleet management assessment",
              "East Cape Dept. of Health Pharma distribution and outsourcing",
              "Nelspruit Municipality Fleet management review",
              "Footloose Shoes (CC)",
              "NYDA (National Youth Development Agency)",
              "East Cape Legislature",
              "NMU (Nelson Mandela University)",
              "Engeli Enterprise Development",
              "IDC",
              "NYDA",
              "ECDC",
              "NEFCORP",
              "SEFDA",
            ].map((company, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-600 hover:shadow-md transition-shadow"
              >
                <p className="text-gray-700 text-sm font-medium">{company}</p>
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
