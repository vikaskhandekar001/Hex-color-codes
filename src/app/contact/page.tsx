import { Metadata } from "next";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Contact Us | GetColorCodes",
    description:
        "Have questions, feedback, or suggestions? Get in touch with the team at GetColorCodes through our contact form.",
};

export default function ContactPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-2 text-gray-900">Contact Us</h1>
            <p className="text-gray-700 mb-6">
                We'd love to hear from you! Whether you have a question about colors, need help with a tool, want to suggest a new feature,
                or just want to say hello — feel free to reach out using the form below.
            </p>

            <Card className="shadow-md border border-gray-200">
                <CardContent className="p-6 space-y-5">
                    <form
                        action="https://formsubmit.io/send/3553138e8df5497d58301a94d516f57b"
                        method="POST"
                        className="space-y-5"
                    >
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="text" name="3553138e8df5497d58301a94d516f57b" style={{ display: "none" }} />

                        <input type="hidden" name="_redirect" value="https://www.getcolorcodes.com/thank-you" />

                        <Input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                        />
                        <Input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                        />
                        <Textarea
                            name="message"
                            placeholder="Your Message"
                            rows={5}
                            required
                        />
                        <Button type="submit" className="w-full">
                            Send Message
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
