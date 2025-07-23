'use client';

import Layout from "../components/Layout";
import { palettes } from "../lib/colors";
import { HexColorPicker } from "react-colorful";
import { colord } from "colord";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const [color, setColor] = useState("#aabbcc");

  const handleCopy = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      toast.success(`Copied ${hex} to clipboard!`);
    } catch (err) {
      toast.error("Failed to copy!");
    }
  };

  const parsed = colord(color);
  const rgb = parsed.toRgb();
  const hsl = parsed.toHsl();

  return (
    <Layout>
      <div className="text-center py-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Explore Beautiful Color Codes</h1>
        <p className="text-gray-700 text-lg mb-6">
          Discover thousands of color names and hex codes. Copy with one click and use them in your next project.
        </p>
        <a
          href="/colors"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition mb-12"
        >
          Browse All Colors
        </a>

        {/* Color Picker on top */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-left text-blue-800  mb-4">Color Picker</h2>
          <p className="text-sm font-bold text-gray-600 mb-4">Double-click the picker or click the color info panel to copy the hex code.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="w-full" onDoubleClick={() => handleCopy(color)}>
              <HexColorPicker color={color} onChange={setColor} className="w-full h-full min-h-[400px] min-w-[500px] rounded shadow-lg" />
            </div>
            <div
              className="text-left text-sm font-mono space-y-2 p-4 rounded shadow cursor-pointer hover:shadow-lg transition"
              style={{ backgroundColor: color }}
              onClick={() => handleCopy(color)}
            >
              <div className="text-gray-800"><strong>#</strong> {color.toUpperCase()}</div>
              <div className="text-gray-800"><strong>R</strong> {rgb.r} <strong>G</strong> {rgb.g} <strong>B</strong> {rgb.b}</div>
              <div className="text-gray-800"><strong>H</strong> {Math.round(hsl.h)} <strong>S</strong> {Math.round(hsl.s)}% <strong>L</strong> {Math.round(hsl.l)}%</div>
            </div>
          </div>
        </div>

        {/* Palettes below picker */}
        <div className="space-y-16">
          {palettes.map((palette) => (
            <div key={palette.name}>
              <h2 className="text-3xl font-bold text-left text-blue-800  mb-6">{palette.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {palette.colors.map((c) => (
                  <div
                    key={c.hex}
                    className="p-4 rounded shadow-md border hover:scale-105 transition cursor-pointer"
                    onClick={() => handleCopy(c.hex)}
                  >
                    <div
                      className="h-24 rounded mb-3"
                      style={{ backgroundColor: c.hex }}
                    ></div>
                    <div className="font-semibold text-gray-700 mb-1">{c.name}</div>
                    <div className="text-sm font-mono text-gray-500">{c.hex}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}