import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ranchodconsulting.com"),
  title: {
    default: "Ranchod Consulting - Professional Business Solutions for SMMEs",
    template: "%s | Ranchod Consulting",
  },
  description:
    "Professional consulting services for small and medium enterprises. We provide strategic solutions, business development, and innovative approaches to drive your business forward.",
  keywords: [
    "business consulting",
    "SMME consulting",
    "small business solutions",
    "business strategy",
    "business development",
    "professional consulting",
    "South Africa business consulting",
  ],
  authors: [{ name: "Ranchod Consulting" }],
  creator: "Ranchod Consulting",
  publisher: "Ranchod Consulting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ranchodconsulting.com",
    siteName: "Ranchod Consulting",
    title: "Ranchod Consulting - Professional Business Solutions for SMMEs",
    description:
      "Professional consulting services for small and medium enterprises. We provide strategic solutions, business development, and innovative approaches to drive your business forward.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ranchod Consulting - Professional Business Solutions for SMMEs",
    description:
      "Professional consulting services for small and medium enterprises. Strategic solutions for business growth.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>
          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
