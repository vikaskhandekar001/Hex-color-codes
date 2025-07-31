"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { Copy, CheckCircle } from "lucide-react";

function rgbToHex(r: number, g: number, b: number): string {
    return (
        "#" +
        [r, g, b]
            .map((val) =>
                Math.max(0, Math.min(255, val))
                    .toString(16)
                    .padStart(2, "0")
            )
            .join("")
            .toUpperCase()
    );
}

export default function RgbToHexConverterClient() {
    const [r, setR] = useState("255");
    const [g, setG] = useState("87");
    const [b, setB] = useState("51");
    const [hex, setHex] = useState("#FF5733");

    useEffect(() => {
        const rNum = parseInt(r) || 0;
        const gNum = parseInt(g) || 0;
        const bNum = parseInt(b) || 0;
        setHex(rgbToHex(rNum, gNum, bNum));
    }, [r, g, b]);

    const handleCopy = () => {
        navigator.clipboard.writeText(hex);
        toast("HEX copied!", {
            icon: <CheckCircle className="text-green-500 w-4 h-4" />,
        });
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">RGB to HEX Converter</h1>
            <p className="text-gray-600">Enter RGB values to get the HEX code and live preview.</p>

            <div className="grid grid-cols-3 gap-4 max-w-xs">
                <Input
                    value={r}
                    onChange={(e) => setR(e.target.value)}
                    type="number"
                    placeholder="R"
                    min={0}
                    max={255}
                />
                <Input
                    value={g}
                    onChange={(e) => setG(e.target.value)}
                    type="number"
                    placeholder="G"
                    min={0}
                    max={255}
                />
                <Input
                    value={b}
                    onChange={(e) => setB(e.target.value)}
                    type="number"
                    placeholder="B"
                    min={0}
                    max={255}
                />
            </div>

            <div className="flex items-center gap-4 font-mono text-lg">
                <div className="bg-gray-100 px-3 py-1 rounded">{hex}</div>
                <Button onClick={handleCopy} variant="secondary" size="sm">
                    <Copy className="w-4 h-4 mr-1" /> Copy HEX
                </Button>
            </div>

            <div
                className="w-24 h-24 rounded border border-gray-300"
                style={{ backgroundColor: hex }}
            />
        </div>
    );
}
