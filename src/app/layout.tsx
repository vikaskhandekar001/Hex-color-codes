import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hexadecimal Color Codes | HTML Color Explorer",
  description:
    "Explore, pick, and copy HTML hex color codes instantly. Browse beautifully curated color palettes including Flat UI, Material Design, and more.",
  keywords: [
    "hex color codes",
    "HTML color codes",
    "color picker",
    "CSS color codes",
    "flat UI colors",
    "material colors",
    "color palette",
    "web design colors"
  ],
  openGraph: {
    title: "Hexadecimal Color Codes | HTML Color Explorer",
    description:
      "Find and copy your favorite hex color codes. Choose from Flat UI, Material, and custom palettes. Free and fast.",
    url: "https://getcolorcodes.com",
    siteName: "Hex Color Explorer",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hexadecimal Color Codes",
    description: "Find and copy the best hex color codes for your design.",
    images: ["https://getcolorcodes.com/color_code_logo.png"],
  },
  other: {
    'google-site-verification': 'tHXnhNBddvE7AOVtTFw-uMTaf7NLOJiyruFEXRBwZ44'
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-right" />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
