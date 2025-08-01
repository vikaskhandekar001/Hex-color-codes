import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Hexadecimal Color Codes & Guessing Game | HTML Color Explorer | Color Guessing game for kids",
  description:
    "Explore, pick, and copy HTML hex color codes instantly. Play the color guessing game to test your knowledge of hex codes and color names!",
  keywords: [
    "kids color game",
    "hex color code",
    "HTML color codes",
    "color guessing game",
    "color picker",
    "CSS color codes",
    "flat UI colors",
    "material colors",
    "color palette",
    "web design colors",
    "hex color game",
    "learn colors",
  ],
  alternates: {
    canonical: 'https://www.getcolorcodes.com/',
  },
  openGraph: {
    title: "Hexadecimal Color Codes & Game | HTML Color Explorer",
    description:
      "Find and copy your favorite hex color codes. Play a fun color guessing game and learn while exploring palettes like Flat UI and Material.",
    url: "https://getcolorcodes.com",
    siteName: "Hex Color Explorer | Color Guessing game for kids",
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
  }
};

export default function HomePage() {
  return <HomeClient />;
}
