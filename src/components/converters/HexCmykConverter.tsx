"use client";

import { useState } from "react";
import { colord } from "colord";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { Copy, CheckCircle } from "lucide-react";

export default function HexCmykConverter() {
    const [hex, setHex] = useState("#FF5733");
    const [cmyk, setCmyk] = useState("0, 66, 80, 0"); // C,M,Y,K
    const [hsl, setHsl] = useState("");
    const [cmykToHex, setCmykToHex] = useState("");

    const convertHexToHsl = (hex: string) => {
        const color = colord(hex);
        if (!color.isValid()) return setHsl("Invalid HEX");
        const { h, s, l } = color.toHsl();
        setHsl(`hsl(${h.toFixed(0)}, ${s.toFixed(0)}%, ${l.toFixed(0)}%)`);
    };

    const convertCmykToHex = (cmykStr: string) => {
        const parts = cmykStr
            .split(",")
            .map((n) => parseFloat(n.trim()))
            .filter((n) => !isNaN(n));

        if (parts.length !== 4) return setCmykToHex("Invalid CMYK");

        const [c, m, y, k] = parts.map((v) => v / 100);
        const r = 255 * (1 - c) * (1 - k);
        const g = 255 * (1 - m) * (1 - k);
        const b = 255 * (1 - y) * (1 - k);
        const hex = colord({ r, g, b }).toHex().toUpperCase();
        setCmykToHex(hex);
    };

    const handleCopy = (label: string, value: string) => {
        navigator.clipboard.writeText(value);
        toast(`${label} copied!`, {
            icon: <CheckCircle className="text-green-500 w-4 h-4" />,
        });
    };

    return (
        <div className="space-y-10">
            {/* HEX to HSL */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900">Convert HEX to HSL</h2>
                <Input
                    value={hex}
                    onChange={(e) => setHex(e.target.value)}
                    placeholder="#FF5733"
                    maxLength={7}
                />
                <Button onClick={() => convertHexToHsl(hex)}>Convert to HSL</Button>
                {hsl && (
                    <div className="flex items-center gap-2 font-mono">
                        <span>{hsl}</span>
                        <Button variant="ghost" size="icon" onClick={() => handleCopy("HSL", hsl)}>
                            <Copy className="w-4 h-4 text-gray-500" />
                        </Button>
                    </div>
                )}
            </div>

            {/* CMYK to HEX */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900">Convert CMYK to HEX</h2>
                <Input
                    value={cmyk}
                    onChange={(e) => setCmyk(e.target.value)}
                    placeholder="0, 66, 80, 0"
                />
                <Button onClick={() => convertCmykToHex(cmyk)}>Convert to HEX</Button>
                {cmykToHex && (
                    <div className="flex items-center gap-2 font-mono">
                        <span>{cmykToHex}</span>
                        <Button variant="ghost" size="icon" onClick={() => handleCopy("HEX", cmykToHex)}>
                            <Copy className="w-4 h-4 text-gray-500" />
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
