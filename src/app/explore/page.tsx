// app/explore/page.tsx
import { allColors } from "@/lib/colors";
import ColorPaletteSection from "@/components/ColorPaletteSection";
import Layout from "@/components/Layout";

export const metadata = {
  title: "Explore All HTML Color Names and Codes | GetColorCodes",
  description:
    "Discover all 140+ named HTML colors along with their HEX, RGB, and HSL values. Find, preview, and copy color codes easily with GetColorCodes.com.",
  keywords:
    "HTML color codes, color names, HEX codes, RGB values, HSL colors, CSS colors, web color palette, getcolorcodes",
  openGraph: {
    title: "Explore All HTML Color Names and Codes | GetColorCodes",
    description:
      "Browse all HTML color names with their HEX, RGB, and HSL formats. Use them in your web projects or design work easily.",
    url: "https://www.getcolorcodes.com/explore",
    siteName: "GetColorCodes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore All HTML Color Names and Codes | GetColorCodes",
    description:
      "Discover and copy 140+ HTML color names with HEX, RGB, and HSL values in one click.",
  },
};

export default function ExplorePage() {
  return (
    <Layout>
      <div className="text-center py-10 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">
          Explore All HTML Color Names & Codes
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Browse the full list below and use them in your HTML or CSS using their name, HEX code, RGB, or HSL values. Ideal for designers, developers, and anyone working with web colors.
        </p>

        <div className="space-y-16">
          <ColorPaletteSection allColors={allColors} />
        </div>
      </div>
    </Layout>
  );
}
