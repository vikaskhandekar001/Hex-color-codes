"use client";

import { useState, useEffect } from "react";
import { colord } from "colord";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { Copy, CheckCircle } from "lucide-react";

export default function CmykToRgbConverterClient() {
    const [cmykInput, setCmykInput] = useState("0, 66, 80, 0");
    const [rgb, setRgb] = useState("");
    const [swatch, setSwatch] = useState("#FFFFFF");

    useEffect(() => {
        convertCmykToRgb(cmykInput);
    }, [cmykInput]);

    const convertCmykToRgb = (cmykStr: string) => {
        const parts = cmykStr
            .split(",")
            .map((n) => parseFloat(n.trim()))
            .filter((n) => !isNaN(n));

        if (parts.length !== 4) {
            setRgb("Invalid CMYK");
            setSwatch("#ffffff");
            return;
        }

        const [c, m, y, k] = parts.map((v) => v / 100);

        const r = Math.round(255 * (1 - c) * (1 - k));
        const g = Math.round(255 * (1 - m) * (1 - k));
        const b = Math.round(255 * (1 - y) * (1 - k));

        const rgbStr = `rgb(${r}, ${g}, ${b})`;
        setRgb(rgbStr);
        setSwatch(colord({ r, g, b }).toHex());
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(rgb);
        toast(`${rgb} copied!`, {
            icon: <CheckCircle className="text-green-500 w-4 h-4" />,
        });
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">CMYK to RGB Converter</h1>
            <p className="text-gray-600">Enter CMYK values (0–100) like <code>0, 66, 80, 0</code>.</p>

            <Input
                value={cmykInput}
                onChange={(e) => setCmykInput(e.target.value)}
                placeholder="0, 66, 80, 0"
            />

            {rgb && (
                <div className="flex items-center gap-4 font-mono text-lg">
                    <div className="bg-gray-100 px-3 py-1 rounded">{rgb}</div>
                    {rgb !== "Invalid CMYK" && (
                        <Button onClick={handleCopy} variant="secondary" size="sm">
                            <Copy className="w-4 h-4 mr-1" /> Copy RGB
                        </Button>
                    )}
                </div>
            )}

            <div
                className="w-24 h-24 rounded border border-gray-300"
                style={{ backgroundColor: swatch }}
            />
        </div>
    );
}
