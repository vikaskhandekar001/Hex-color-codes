import Layout from "../../components/Layout";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | GetColorCodes",
    description:
        "Learn more about GetColorCodes.com – your go-to platform for exploring HTML, HEX, RGB, and HSL color codes. Designed for developers, designers, and creatives.",
};

export default function About() {
    return (
        <Layout>
            <main className="max-w-4xl mx-auto px-4 py-10">
                <h1 className="text-4xl font-bold text-blue-800 mb-6">About Us</h1>

                <p className="text-lg text-gray-700 mb-5">
                    <strong>GetColorCodes.com</strong> is your trusted resource for exploring and using
                    HTML color codes with ease. Whether you're a web developer, designer, or content
                    creator, we provide a simple and elegant way to find, preview, and copy color values.
                </p>

                <p className="text-lg text-gray-700 mb-5">
                    Our mission is to empower creators with the tools they need to work with color
                    efficiently. From HEX codes to RGB and HSL formats, every detail is crafted to save you
                    time and enhance your workflow.
                </p>

                <h2 className="text-2xl font-semibold text-blue-700 mb-3">What We Offer</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                    <li>Complete list of 140+ named HTML colors</li>
                    <li>Copy-friendly HEX, RGB, and HSL formats</li>
                    <li>Live color previews and clean UI</li>
                    <li>Fast-loading, accessible, mobile-friendly design</li>
                </ul>

                <p className="text-lg text-gray-700 mb-5">
                    We’re committed to keeping the platform fast, user-friendly, and up-to-date. If you
                    have suggestions or feedback, feel free to reach out. Thank you for being a part of
                    our growing community!
                </p>

                <p className="text-base text-gray-500">— The GetColorCodes Team</p>
            </main>
        </Layout>
    );
}