// app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "JSONDreams | Cinematic AI Storytelling",
  description: "We turn history and geopolitics into cinematic AI stories.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jsondreams.vercel.app",
    siteName: "JSONDreams",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${serif.variable} ${sans.variable} bg-background text-foreground antialiased`}
      >
        <div className="relative min-h-screen overflow-hidden bg-cinematic-gradient">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
