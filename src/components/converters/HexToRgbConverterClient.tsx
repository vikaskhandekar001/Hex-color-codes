"use client";

import { useState, useEffect } from "react";
import { colord } from "colord";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { Copy, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReferenceColorCards from "./ReferenceColorCards";
import { X } from "lucide-react";

export default function HexToFullConverterClient() {
    const [hex, setHex] = useState("#FF5733");
    const [formats, setFormats] = useState<any>({});

    useEffect(() => {
        handleHexChange(hex);
    }, [hex]);

    const convertHexToCmyk = (hex: string) => {
        const { r, g, b } = colord(hex).toRgb();
        const rF = r / 255;
        const gF = g / 255;
        const bF = b / 255;

        const k = 1 - Math.max(rF, gF, bF);
        const c = (1 - rF - k) / (1 - k) || 0;
        const m = (1 - gF - k) / (1 - k) || 0;
        const y = (1 - bF - k) / (1 - k) || 0;

        return `cmyk(${(c * 100).toFixed(0)}%, ${(m * 100).toFixed(0)}%, ${(y * 100).toFixed(0)}%, ${(k * 100).toFixed(0)}%)`;
    };

    const handleHexChange = (val: string) => {
        setHex(val);
        const c = colord(val);
        if (!c.isValid()) {
            setFormats({});
            return;
        }

        const { r, g, b } = c.toRgb();
        const hsl = c.toHsl();
        const hsv = c.toHsv();

        setFormats({
            rgb: c.toRgbString(),
            hsl: `hsl(${hsl.h.toFixed(0)}, ${hsl.s.toFixed(0)}%, ${hsl.l.toFixed(0)}%)`,
            hsv: `hsv(${hsv.h.toFixed(0)}, ${hsv.s.toFixed(0)}%, ${hsv.v.toFixed(0)}%)`,
            cmyk: convertHexToCmyk(val),
        });
    };

    const handleCopy = (value: string, label: string) => {
        navigator.clipboard.writeText(value);
        toast(`${value} copied!`, {
            icon: <CheckCircle className="text-green-500 w-4 h-4" />,
        });
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">HEX to All Formats Converter</h1>
            <ReferenceColorCards onSelect={(colorHex) => handleHexChange(colorHex)} selectedHex={hex} />
            <div className="relative w-full">
                <Input
                    value={hex}
                    onChange={(e) => handleHexChange(e.target.value)}
                    placeholder="#FF5733"
                    maxLength={7}
                    className="pr-10"
                />

                {hex.length > 0 && (
                    <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => handleHexChange("")}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-500"
                    >
                        <X className="w-4 h-4" />
                    </Button>
                )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm font-mono">
                {Object.entries({ HEX: hex, ...formats }).map(([label, value]) => (
                    <div
                        key={label}
                        className="flex justify-between items-center border rounded-md p-3 shadow-sm bg-white"
                    // style={{ backgroundColor: value }}
                    >
                        <span className="font-semibold  drop-shadow">{label}:</span>
                        <div className="flex items-center gap-2 text-right">
                            <span className="drop-shadow">{value}</span>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleCopy(value, label)}
                            >
                                <Copy className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-24 h-24 rounded-lg border border-gray-300" style={{ backgroundColor: hex }} />
        </div>
    );
}
