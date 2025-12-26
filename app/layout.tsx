import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

// 1. Define Global SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://daybuild.vercel.app"), // CHANGE THIS to your actual domain
  title: {
    default: "DayBuild | Launch Your Website in 24 Hours",
    template: "%s | DayBuild",
  },
  description:
    "Stop waiting weeks for developers. Get a modern, high-performance website built and deployed in just one business day. Guaranteed.",
  keywords: [
    "web development",
    "fast website builder",
    "startup website",
    "next.js developers",
    "24 hour website",
  ],
  authors: [{ name: "DayBuild Team" }],
  creator: "DayBuild",
  publisher: "DayBuild Inc.",
  themeColor: "#020617",

  // 2. Open Graph (How it looks on WhatsApp/LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://daybuild.vercel.app",
    title: "DayBuild - Your Website. Live in 24 Hours.",
    description:
      "Get a premium, mobile-first website built by experts in just one day. No freelancers. No delays.",
    siteName: "DayBuild",
    images: [
      {
        url: "/og-image.jpg", // You need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "DayBuild Hero Image",
      },
    ],
  },

  // 3. Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "DayBuild - Website in 24 Hours",
    description:
      "The fastest way to launch your startup. High-performance code, zero drag-and-drop.",
    images: ["/og-image.jpg"],
    creator: "@daybuild",
  },

  // 4. Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 5. Structured Data (JSON-LD) for Google Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DayBuild",
    image: "https://daybuild.com/logo.png",
    description:
      "Professional web development service delivering websites in 24 hours.",
    url: "https://daybuild.com",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <html lang="en" scroll-behavior="smooth">
      <head>
        {/* Inject JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
