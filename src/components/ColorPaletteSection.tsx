"use client";

import { toast } from "react-hot-toast";

type Color = {
  name: string;
  hex: string;
  rgb?: string;
  hsl?: string;
};

type CategoryGroup = {
  category: string;
  colors: Color[];
};

type Props = {
  allColors: CategoryGroup[];
};

export default function ColorPaletteSection({ allColors }: Props) {
  const handleCopy = (label: string, value: string) => {
    navigator.clipboard.writeText(value).then(() => {
      toast.success(`${value} copied to clipboard!`);
    });
  };

  return (
    <div className="p-4 space-y-10">
      {allColors.map((categoryGroup) => (
        <div key={categoryGroup.category}>
          <h2 className="text-2xl font-bold mb-4">{categoryGroup.category}</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {categoryGroup.colors.map((color) => (
              <div
                key={color.name}
                className="rounded-lg border overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
                onClick={() => handleCopy("HEX", color.hex)}
              >
                <div
                  className="h-24"
                  style={{ backgroundColor: color.hex }}
                />

                <div className="p-2">
                  <p
                    className="font-semibold text-sm hover:underline"
                    onClick={(e) => {
                      e.stopPropagation(); // prevent hex copy
                      handleCopy("Name", color.name);
                    }}
                  >
                    {color.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{color.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
