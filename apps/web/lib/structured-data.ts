export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Ranchod Consulting",
  description:
    "Professional consulting services for small and medium enterprises. We provide strategic solutions, business development, and innovative approaches to drive your business forward.",
  url: "https://ranchodconsulting.com",
  logo: "https://ranchodconsulting.com/logo.png",
  foundingDate: "2003",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    availableLanguage: ["English"],
  },
  areaServed: {
    "@type": "Country",
    name: "South Africa",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Consulting Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Strategy Consulting",
          description: "Strategic planning and business development services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Financial Management",
          description: "Financial planning and management consulting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Operations Optimization",
          description: "Process improvement and operational efficiency",
        },
      },
    ],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ranchod Consulting",
  url: "https://ranchodconsulting.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://ranchodconsulting.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
