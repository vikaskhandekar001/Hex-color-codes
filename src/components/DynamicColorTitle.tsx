import React from "react";

const safeColors = [
  "#e6194b", "#3cb44b", "#ffe119", "#4363d8", "#f58231", "#911eb4",
  "#46f0f0", "#f032e6", "#bcf60c", "#fabebe", "#008080", "#e6beff",
  "#9a6324", "#fffac8", "#800000", "#aaffc3", "#808000", "#ffd8b1",
  "#000075", "#808080", "#000000"
].filter((hex) => {
  const [r, g, b] = hexToRgb(hex);
  // Skip too light colors
  return r + g + b < 700;
});

function hexToRgb(hex: string) {
  const bigint = parseInt(hex.replace("#", ""), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}

interface Props {
  text: string;
  className?: string;
}

const DynamicColoredTitle: React.FC<Props> = ({ text, className = "" }) => {
  return (
    <h1 className={`text-4xl font-bold mb-4 ${className}`}>
      {text.split("").map((char, index) => {
        const color = safeColors[index % safeColors.length];
        return (
          <span key={index} style={{ color }}>
            {char}
          </span>
        );
      })}
    </h1>
  );
};

export default DynamicColoredTitle;
