import type { Metadata } from "next";
import HexCmykConverter from "@/components/converters/HexCmykConverter";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
    title: "HEX to HSL & CMYK to HEX Converter | GetColorCodes",
    description:
        "Convert HEX to HSL and CMYK to HEX instantly with live preview and easy copy. Use GetColorCodes for quick color format conversions.",
    keywords: [
        "hex to hsl",
        "cmyk to hex",
        "color converter",
        "html color codes",
        "getcolorcodes",
        "rgb hsl hex tools",
    ],
};

export default function Page() {
    return (
        <Layout>
        <main className="max-w-3xl mx-auto px-4 py-10 space-y-10">
            <HexCmykConverter />
        </main>
        </Layout>
    );
}
