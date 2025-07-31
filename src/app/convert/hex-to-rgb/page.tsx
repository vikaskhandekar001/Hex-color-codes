import type { Metadata } from "next";
import HexToRgbConverterClient from "@/components/converters/HexToRgbConverterClient"; // move logic here
import Layout from "@/components/Layout";

export const metadata: Metadata = {
    title: "HEX to RGB Converter | GetColorCodes",
    description:
        "Convert HEX color codes to RGB format instantly with our easy-to-use tool. Preview the color and copy the RGB value easily.",
    keywords: [
        "hex to rgb",
        "color converter",
        "html color tool",
        "css hex rgb converter",
        "getcolorcodes",
    ],
};

export default function Page() {
    return (
        <Layout>
            <main className="max-w-2xl mx-auto px-4 py-10 space-y-8">

                <HexToRgbConverterClient />


            </main>
        </Layout>
    );
}
