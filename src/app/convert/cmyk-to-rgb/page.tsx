import type { Metadata } from "next";
import CmykToRgbConverterClient from "@/components/converters/CmykToRgbConverterClient";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
    title: "CMYK to RGB Converter | GetColorCodes",
    description:
        "Convert CMYK color values to RGB format instantly with live preview and copy-to-clipboard support. Try the CMYK to RGB tool at GetColorCodes.",
    keywords: ["cmyk to rgb", "color converter", "html color tool", "print to web color", "getcolorcodes"],
};

export default function Page() {
    return (
        <Layout>
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-10">
                <CmykToRgbConverterClient />
            </main>
        </Layout>
    );
}
