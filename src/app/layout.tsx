import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Force dynamic rendering to prevent static generation issues
export const dynamic = 'force-dynamic';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SEOJack - Expert Custom Websites",
    template: "%s | SEOJack"
  },
  description: "Get a professional, SEO-ready website built by experts. No contracts, unlimited revisions, 14-day money-back guarantee. Starter ($97), Standard ($197), Pro ($297) plans.",
  keywords: [
    "website design",
    "custom websites",
    "SEO",
    "web development",
    "affordable websites",
    "UK",
    "website builder",
    "professional websites",
    "responsive design",
    "e-commerce websites",
    "business websites",
    "web design agency",
    "website maintenance",
    "hosting",
    "domain registration"
  ],
  authors: [{ name: "SEOJack", url: "https://seojack.net" }],
  creator: "SEOJack",
  publisher: "SEOJack",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://seojack.net"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://seojack.net",
    siteName: "SEOJack",
    title: "SEOJack - Expert Custom Websites",
    description: "Get a professional, SEO-ready website built by experts. No contracts, unlimited revisions, 14-day money-back guarantee. Starter ($97), Standard ($197), Pro ($297) plans.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@seojack",
    creator: "@seojack",
    title: "SEOJack - Expert Custom Websites",
    description: "Get a professional, SEO-ready website built by experts. No contracts, unlimited revisions, 14-day money-back guarantee. Starter ($97), Standard ($197), Pro ($297) plans.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  classification: "Business",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/seojack-icon-1025-6b7885d0.webp", sizes: "any", type: "image/webp" },
    ],
    apple: [
      { url: "/seojack-icon-1025-6b7885d0.webp", sizes: "180x180", type: "image/webp" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth w-full" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/seojack-icon-1025-6b7885d0.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/seojack-icon-1025-6b7885d0.webp" />
        <script
          src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.1/dist/dotlottie-wc.js"
          type="module"
          async
        ></script>
      </head>
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col w-full m-0 p-0`}
      >
        <Navbar />
        <main className="flex-1 m-0 p-0">
          {children}
        </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
