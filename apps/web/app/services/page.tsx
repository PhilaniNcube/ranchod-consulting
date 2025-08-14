import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

export default function ServicesPage() {
  const services = [
    {
      title: "Strategic Consulting",
      description:
        "Comprehensive business strategy development and implementation guidance.",
      features: [
        "Business strategy development",
        "Market analysis and positioning",
        "Competitive intelligence",
        "Growth planning",
      ],
    },
    {
      title: "Operational Excellence",
      description:
        "Optimize your operations for maximum efficiency and effectiveness.",
      features: [
        "Process optimization",
        "Performance improvement",
        "Quality management",
        "Cost reduction strategies",
      ],
    },
    {
      title: "Digital Transformation",
      description:
        "Navigate the digital landscape with confidence and expertise.",
      features: [
        "Technology strategy",
        "Digital process automation",
        "Change management",
        "Digital adoption",
      ],
    },
    {
      title: "Financial Advisory",
      description:
        "Expert financial guidance to drive profitability and growth.",
      features: [
        "Financial planning",
        "Investment strategy",
        "Risk management",
        "Performance analysis",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive consulting services designed to help your
            business thrive in today's competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6">
            Contact us today to discuss how we can help your business succeed.
          </p>
          <Button size="lg">Get Started</Button>
        </div>
      </div>
    </div>
  );
}
