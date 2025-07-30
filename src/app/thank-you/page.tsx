import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Thank You | GetColorCodes",
    description: "Thank you for contacting GetColorCodes. We'll get back to you shortly.",
};

export default function ThankYouPage() {
    return (
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold text-green-600 mb-4">Thank You!</h1>
            <p className="text-lg text-gray-700 mb-6">
                Your message has been sent successfully. We'll get back to you soon.
            </p>
            <Link href="/">
                <Button className="text-white bg-primary-600 hover:bg-primary-700">
                    Back to Home
                </Button>
            </Link>
        </div>
    );
}
