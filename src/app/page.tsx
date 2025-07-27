import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Hexadecimal Color Codes & Guessing Game | HTML Color Explorer",
  description:
    "Explore, pick, and copy HTML hex color codes instantly. Play the color guessing game to test your knowledge of hex codes and color names!",
  keywords: [
    "hex color code",
    "HTML color codes",
    "color guessing game",
    "color picker",
    "kids color game",
    "CSS color codes",
    "flat UI colors",
    "material colors",
    "color palette",
    "web design colors",
    "hex color game",
    "learn colors",
  ],
  openGraph: {
    title: "Hexadecimal Color Codes & Game | HTML Color Explorer",
    description:
      "Find and copy your favorite hex color codes. Play a fun color guessing game and learn while exploring palettes like Flat UI and Material.",
    url: "https://getcolorcodes.com",
    siteName: "Hex Color Explorer | Color Guessing game",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://getcolorcodes.com/color_code_logo.png",
        width: 1200,
        height: 630,
        alt: "GetColorCodes - HTML Color Explorer | Color Guessing game ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hexadecimal Color Codes & Fun Game",
    description:
      "Discover beautiful hex color codes and test yourself with a fun and educational color guessing game.",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
