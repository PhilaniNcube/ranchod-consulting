import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";

export default function ResourcesPage() {
  const resources = [
    {
      category: "Whitepapers",
      items: [
        {
          title: "Digital Transformation Best Practices",
          description:
            "A comprehensive guide to successful digital transformation strategies.",
          type: "PDF",
          readTime: "15 min read",
        },
        {
          title: "Strategic Planning Framework",
          description:
            "Essential frameworks for effective strategic planning and execution.",
          type: "PDF",
          readTime: "20 min read",
        },
      ],
    },
    {
      category: "Case Studies",
      items: [
        {
          title: "Manufacturing Efficiency Improvement",
          description:
            "How we helped a manufacturing company increase efficiency by 35%.",
          type: "Case Study",
          readTime: "10 min read",
        },
        {
          title: "Retail Digital Transformation",
          description:
            "Successful digital transformation journey of a retail chain.",
          type: "Case Study",
          readTime: "12 min read",
        },
      ],
    },
    {
      category: "Blog Articles",
      items: [
        {
          title: "The Future of Business Consulting",
          description:
            "Trends and predictions shaping the consulting industry.",
          type: "Article",
          readTime: "8 min read",
        },
        {
          title: "Change Management in the Digital Age",
          description:
            "Strategies for effective change management in modern organizations.",
          type: "Article",
          readTime: "6 min read",
        },
      ],
    },
    {
      category: "Tools & Templates",
      items: [
        {
          title: "SWOT Analysis Template",
          description: "Ready-to-use template for comprehensive SWOT analysis.",
          type: "Template",
          readTime: "Tool",
        },
        {
          title: "Project Planning Checklist",
          description:
            "Essential checklist for successful project planning and execution.",
          type: "Checklist",
          readTime: "Tool",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Resources</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access our collection of insights, tools, and resources to help
            drive your business forward.
          </p>
        </div>

        <div className="space-y-12">
          {resources.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="text-2xl font-semibold mb-6">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg leading-tight pr-4">
                          {item.title}
                        </CardTitle>
                        <Badge variant="secondary" className="flex-shrink-0">
                          {item.type}
                        </Badge>
                      </div>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {item.readTime}
                        </span>
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Need More Information?
          </h2>
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? Get in touch with our team.
          </p>
          <Button size="lg">Contact Us</Button>
        </div>
      </div>
    </div>
  );
}
