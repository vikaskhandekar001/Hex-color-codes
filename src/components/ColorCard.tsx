interface ColorCardProps {
  hex: string;
  name: string;
  onCopy: (value: string) => void;
}

export const ColorCard = ({ hex, name, onCopy }: ColorCardProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.dataset.copy === 'name') {
      onCopy(name?.toLowerCase());
    } else {
      onCopy(hex);
    }
  };

  const hexToRgb = (hex: string): [number, number, number] => {
    const bigint = parseInt(hex.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
  };

  const rgbToHsl = (r: number, g: number, b: number): [number, number, number] => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h: number = 0, s: number, l: number = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
  };

  const [r, g, b] = hexToRgb(hex);
  const [h, s, l] = rgbToHsl(r, g, b);

  return (
    <div
      className="p-4 rounded shadow-md border hover:scale-105 transition cursor-pointer"
      onClick={handleClick}
    >
      <div
        className="h-24 font-semibold rounded mb-3"
        style={{ backgroundColor: hex }}
      ></div>
      <div
        className="font-semibold text-gray-700 mb-1"
        data-copy="name"
      >
        {name}
      </div>
      <div className="text-sm font-semibold text-gray-500">{hex}</div>
      <div className="text-sm font-semibold text-gray-600 mt-2">RGB: rgb({r}, {g}, {b})</div>
      <div className="text-sm font-semibold text-gray-500 mt-2">HSL: hsl({h}, {s}%, {l}%)</div>
    </div>
  );
};
