import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Contact Hero */}
      <section className="py-20 px-6 bg-gradient-to-br from-brand to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl leading-relaxed opacity-90">
            Ready to take your business to the next level? Get in touch with our
            expert team today.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Main Contact Information */}
            <div className="space-y-8">
              <Card className="border-2 border-brand/20">
                <CardHeader>
                  <CardTitle className="text-brand text-2xl">
                    Get in Touch
                  </CardTitle>
                  <CardDescription className="text-lg">
                    We're here to help and answer any questions you might have.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-xl mb-4 text-brand">
                        Contact Person
                      </h3>
                      <p className="text-lg font-medium text-gray-900 mb-4">
                        Sanjiv Ranchod
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">📧</span>
                          </div>
                          <div>
                            <p className="font-medium">Email</p>
                            <p className="text-brand">
                              info@ranchodconsulting.co.za
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">📞</span>
                          </div>
                          <div>
                            <p className="font-medium">Telephone</p>
                            <p className="text-gray-700">+27 (0)41 368 5700</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">📱</span>
                          </div>
                          <div>
                            <p className="font-medium">Mobile</p>
                            <p className="text-gray-700">+27 (0)83 629 4050</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">📠</span>
                          </div>
                          <div>
                            <p className="font-medium">Fax</p>
                            <p className="text-gray-700">086 512 4870</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Why Choose Us */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-brand text-2xl">
                    Why Choose Ranchod Consulting?
                  </CardTitle>
                  <CardDescription>
                    Over 20 years of experience in business consulting
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-brand rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Expert team with years of industry experience in SMME
                        sector
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-brand rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Tailored solutions for your specific business needs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-brand rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Proven track record of successful projects since 2003
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-brand rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Comprehensive business advisory services
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-brand rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Ongoing support and business partnership
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-brand rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Strong network of associates and industry connections
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-brand text-xl">
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <span className="font-medium">Monday - Friday:</span> 8:00
                      AM - 5:00 PM
                    </p>
                    <p>
                      <span className="font-medium">Saturday:</span> By
                      appointment
                    </p>
                    <p>
                      <span className="font-medium">Sunday:</span> Closed
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
