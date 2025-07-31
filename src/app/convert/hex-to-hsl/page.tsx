import type { Metadata } from "next";
import HexToHslConverterClient from "@/components/converters/HexToHslConverterClient";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
    title: "HEX to HSL Converter | GetColorCodes",
    description:
        "Easily convert HEX color codes to HSL format with live preview and copy functionality. Try the HEX to HSL converter now on GetColorCodes.",
    keywords: ["hex to hsl", "color converter", "html color tool", "css color format", "getcolorcodes"],
};

export default function Page() {
    return (
        <Layout>
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-10">
                <HexToHslConverterClient />
            </main>
        </Layout>
    );
}
