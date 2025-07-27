'use client';

import Layout from "../components/Layout";
import { palettes } from "../lib/colors";
import Head from "next/head";
import { HexColorPicker } from "react-colorful";
import Link from "next/link";
import { colord } from "colord";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import DynamicColoredTitle from "@/components/DynamicColorTitle";
import { Card, CardContent } from "@/components/ui/card";
import FunFactCarousel from "@/components/FunFactCarousel";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "GetColorCodes",
  "url": "https://www.getcolorcodes.com/",
  "description":
    "Discover beautiful color codes, names, and palettes. Use our color picker and copy hex values easily.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.getcolorcodes.com/explore?query={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const funFacts = [
  "#FF5733 was used in NASA’s early UI for highlighting errors.",
  "#1DA1F2 is Twitter’s iconic blue.",
  "#A2AAAD represents Apple's MacBook silver.",
  "#1877F2 is Facebook blue, chosen due to red-green colorblindness.",
  "#E50914 is Netflix's signature red.",
  "#F5F5DC (Beige) is a classic interior design color.",
  "#39FF14 is a common neon green in sci-fi UIs.",
  "#81D8D0 is Tiffany Blue, a trademarked color.",
  "#FF6700 (Safety Orange) is used on construction vests.",
  "#191970 (Midnight Blue) resembles the night sky.",
  "#FFFFE0 (Light Yellow) is said to boost memory.",
  "#FFD700 (Gold) is historically tied to royalty.",
  "#ADD8E6 (Light Blue) is used in ice themes.",
  "#800080 (Purple) was more valuable than gold in Rome.",
  "#228B22 (Forest Green) is used in military camo.",
  "#DC143C (Crimson) appeared in Soviet insignia.",
  "#708090 (Slate Gray) is popular in modern UIs.",
  "#FFB6C1 (Light Pink) is used for cartoon characters.",
  "#0D1117 is GitHub’s dark theme background.",
  "#FF69B4 (Hot Pink) rose to fame in 2000s fashion.",
  "#00CED1 (Dark Turquoise) was common in 90s design.",
  "#4B0082 (Indigo) symbolizes deep spirituality.",
  "#25D366 is the color of WhatsApp’s brand.",
  "#6A0DAD is a bold grape-like purple.",
  "#9ACD32 is often used in green energy dashboards.",
  "#9932CC is a magical tone used in fantasy UIs.",
  "#FFE4B5 (Moccasin) is a favorite in recipe apps.",
  "#FFEB3B is similar to Hufflepuff’s yellow.",
  "#30D5C8 is like Ariel’s tail in The Little Mermaid.",
  "#7FFF00 (Chartreuse) glows like alien slime.",
  "#0057B7 is used in IMAX themes.",
  "#1E90FF (Dodger Blue) is used by marine websites.",
  "#00BFFF (Deep Sky Blue) appears in tropical branding.",
  "#FA8072 (Salmon) is a common blush shade.",
  "#D40000 is Ferrari’s racing red.",
  "#FF7518 is classic pumpkin orange.",
  "#7851A9 (Royal Purple) is regal and majestic.",
  "#CCCCFF (Periwinkle) is soft and dreamy.",
  "#00FF00 is pure green and often means 'go'.",
  "#FFDAB9 (Peach Puff) is often seen in baby brands.",
  "#8B4513 (Saddle Brown) resembles chocolate.",
  "#F0E68C (Khaki) is great for nature themes.",
  "#C71585 (Medium Violet Red) is striking in UI alerts.",
  "#FF6347 (Tomato) is often used for warning buttons.",
  "#E6E6FA (Lavender) is common in wellness apps.",
  "#FF8C00 (Dark Orange) has a fiery edge.",
  "#98FB98 (Pale Green) is peaceful and soft.",
  "#FFD700 is also the hex for Olympic Gold.",
  "#F08080 (Light Coral) is gentle and friendly.",
  "#FDF5E6 (Old Lace) is elegant and vintage inspired."
];


export default function HomeClient() {
  const [color, setColor] = useState("#aabbcc");
  const [factIndex, setFactIndex] = useState(0);

  const handleCopy = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      toast.success(`Copied ${hex} to clipboard!`);
    } catch (err) {
      toast.error("Failed to copy!");
    }
  };

  const parsed = colord(color);
  const rgb = parsed.toRgb();
  const hsl = parsed.toHsl();


  useEffect(() => {
    const interval = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 4000); // rotates every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const dailyFunFact = funFacts[factIndex];

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Layout>
        <div className="text-center py-10 px-4 max-w-6xl mx-auto">

          <FunFactCarousel />

          {/* <DynamicColoredTitle text={dailyFunFact} /> */}

          <DynamicColoredTitle text="Explore Beautiful Color Codes" />

          <p className="text-gray-700 text-lg mb-6">
            Discover thousands of color names and hex codes. Copy with one click and use them in your next project.
          </p>

          <Link
            href="/explore"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition mb-12"
          >
            Browse All Colors
          </Link>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-left text-blue-700 mb-4">Color Picker</h2>
            <p className="text-sm font-bold text-gray-600 mb-4">Double-click the picker or click the color info panel to copy the hex code.</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="w-full" onDoubleClick={() => handleCopy(color)}>
                <HexColorPicker color={color} onChange={setColor} className="w-full h-full min-h-[400px] min-w-[500px] rounded shadow-lg" />
              </div>
              <div
                className="text-left text-sm font-mono space-y-2 p-4 rounded shadow cursor-pointer hover:shadow-lg transition"
                style={{ backgroundColor: color }}
                onClick={() => handleCopy(color)}
              >
                <div className="text-gray-800"><strong>#</strong> {color.toUpperCase()}</div>
                <div className="text-gray-800"><strong>R</strong> {rgb.r} <strong>G</strong> {rgb.g} <strong>B</strong> {rgb.b}</div>
                <div className="text-gray-800"><strong>H</strong> {Math.round(hsl.h)} <strong>S</strong> {Math.round(hsl.s)}% <strong>L</strong> {Math.round(hsl.l)}%</div>
              </div>
            </div>
          </div>

          <div className="space-y-16">
            {palettes.map((palette) => (
              <div key={palette.name}>
                <h2 className="text-3xl font-bold text-left text-blue-700 mb-6">{palette.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {palette.colors.map((c) => (
                    <div
                      key={c.hex}
                      className="p-4 rounded shadow-md border hover:scale-105 transition cursor-pointer"
                      onClick={() => handleCopy(c.hex)}
                      title={funFacts.find(f => f.includes(c.hex.toUpperCase())) || ""}
                    >
                      <div
                        className="h-24 rounded mb-3"
                        style={{ backgroundColor: c.hex }}
                      ></div>
                      <div className="font-semibold text-gray-700 mb-1">{c.name}</div>
                      <div className="text-sm font-mono text-gray-500">{c.hex}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
