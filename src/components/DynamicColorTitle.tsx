// components/DynamicColoredTitle.tsx
'use client';

import { useEffect, useState } from 'react';

const colors = [
  '#FF5733', '#1DA1F2', '#FFD700', '#4B0082', '#00CED1',
  '#FF69B4', '#008080', '#00FF7F', '#FF4500', '#6A5ACD'
];

export default function DynamicColoredTitle({ text }: { text: string }) {
  const [color, setColor] = useState(colors[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * colors.length);
      setColor(colors[random]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      className="text-4xl md:text-5xl font-bold mb-4 transition-colors duration-500"
      style={{ color }}
    >
      {text}
    </h1>
  );
}
