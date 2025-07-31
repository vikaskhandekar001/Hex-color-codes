"use client";

import { colord } from "colord";

type ReferenceColor = {
  name: string;
  hex: string;
};

const referenceColors: ReferenceColor[] = [
  { name: "Red", hex: "#FF0000" },
  { name: "Green", hex: "#00FF00" },
  { name: "Blue", hex: "#0000FF" },
];

type Props = {
  onSelect: (hex: string) => void;
  selectedHex: string;
};

function getColorConversions(hex: string) {
  const c = colord(hex);
  if (!c.isValid()) return [];

  const hsv = c.toHsv();
  const { r, g, b } = c.toRgb();
  const hsl = c.toHsl();
  const cmyk = hexToCmyk(hex);

  return [
    { label: "HEX", value: hex },
    { label: "RGB", value: `rgb(${r}, ${g}, ${b})` },
    { label: "HSL", value: `hsl(${hsl.h.toFixed(0)}, ${hsl.s.toFixed(0)}%, ${hsl.l.toFixed(0)}%)` },
    { label: "HSV", value: `hsv(${hsv.h.toFixed(0)}, ${hsv.s.toFixed(0)}%, ${hsv.v.toFixed(0)}%)` },
    { label: "CMYK", value: cmyk },
  ];
}

function hexToCmyk(hex: string) {
  const { r, g, b } = colord(hex).toRgb();
  const rF = r / 255;
  const gF = g / 255;
  const bF = b / 255;

  const k = 1 - Math.max(rF, gF, bF);
  const c = (1 - rF - k) / (1 - k) || 0;
  const m = (1 - gF - k) / (1 - k) || 0;
  const y = (1 - bF - k) / (1 - k) || 0;

  return `cmyk(${(c * 100).toFixed(0)}%, ${(m * 100).toFixed(0)}%, ${(y * 100).toFixed(0)}%, ${(k * 100).toFixed(0)}%)`;
}

export default function ReferenceColorCards({ onSelect, selectedHex }: Props) {

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
      {referenceColors.map(({ name, hex }) => {
        const values = getColorConversions(hex);
        const isSelected = selectedHex.toLowerCase() === hex.toLowerCase();

        return (
          <button
            key={hex}
            onClick={() => onSelect(hex)}
            className={`rounded-xl p-5 text-left space-y-4 transition-all border ${isSelected
                ? "border-2 border-blue-500 shadow-md"
                : "border border-gray-300 hover:ring-2 hover:ring-blue-300"
              } bg-white`}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">{name}</h2>
              <div
                className="w-8 h-8 rounded-full border border-gray-300"
                style={{ backgroundColor: hex }}
              />
            </div>

            <div className="space-y-2 font-mono text-sm">
              {values.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex justify-between border rounded px-2 py-1"
                // style={{ backgroundColor: value }}
                >
                  <span className="font-semibold drop-shadow">{label}:</span>
                  <span className="drop-shadow">{value}</span>
                </div>
              ))}
            </div>
          </button>
        );
      })}
    </section>
  );
}
