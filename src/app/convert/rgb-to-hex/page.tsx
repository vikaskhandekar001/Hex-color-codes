import type { Metadata } from "next";
import RgbToHexConverterClient from "@/components/converters/RgbToHexConverterClient";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
    title: "RGB to HEX Converter | GetColorCodes",
    description:
        "Convert RGB color values to HEX code instantly. Live preview and copy support included.",
};

export default function Page() {
    return (
        <Layout>
            <main className="max-w-3xl mx-auto px-4 py-10">
                <RgbToHexConverterClient />
            </main>
        </Layout>
    );
}