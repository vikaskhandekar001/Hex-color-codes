import type { Metadata } from "next";
import HomeClient from "./HomeClient";

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
    "web design colors",
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
  },
};

export default function HomePage() {
  return <HomeClient />;
}
