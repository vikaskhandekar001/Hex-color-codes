"use client";

import { useState, useEffect } from "react";
import { colord } from "colord";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import  toast  from "react-hot-toast";
import { Copy, X, CheckCircle } from "lucide-react";

export default function HexToHslConverterClient() {
  const [hex, setHex] = useState("#FF5733");
  const [hsl, setHsl] = useState("");

  useEffect(() => {
    const color = colord(hex);
    if (!color.isValid()) {
      setHsl("Invalid HEX");
      return;
    }

    const { h, s, l } = color.toHsl();
    setHsl(`hsl(${h.toFixed(0)}, ${s.toFixed(0)}%, ${l.toFixed(0)}%)`);
  }, [hex]);

  const handleCopy = () => {
    navigator.clipboard.writeText(hsl);
    toast("HSL copied!", {
      icon: <CheckCircle className="text-green-500 w-4 h-4" />,
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">HEX to HSL Converter</h1>
      <p className="text-gray-600">
        Paste a HEX color code below to convert it to HSL. Live preview and copy supported.
      </p>

      <div className="relative max-w-md">
        <Input
          value={hex}
          onChange={(e) => setHex(e.target.value)}
          placeholder="#FF5733"
          maxLength={7}
          className="pr-10"
        />
        {hex && (
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setHex("")}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {hsl && (
        <div className="flex items-center gap-4 font-mono text-lg">
          <div className="bg-gray-100 px-3 py-1 rounded">{hsl}</div>
          {hsl !== "Invalid HEX" && (
            <Button onClick={handleCopy} variant="secondary" size="sm">
              <Copy className="w-4 h-4 mr-1" /> Copy HSL
            </Button>
          )}
        </div>
      )}

      <div
        className="w-24 h-24 rounded border border-gray-300"
        style={{ backgroundColor: colord(hex).isValid() ? hex : "#fff" }}
      />
    </div>
  );
}
