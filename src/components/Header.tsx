"use client";
import { motion } from "framer-motion";
import Link from "next/link";

// Wordmark and nav items
const title = "ColorCodes";
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

// Nice dynamic colors (can be shuffled or cycled)
const colorPalette = [
  "#EF4444", // red
  "#F59E0B", // amber
  "#10B981", // green
  "#3B82F6", // blue
  "#8B5CF6", // purple
  "#EC4899", // pink
  "#F43F5E", // rose
  "#22D3EE", // cyan
  "#A855F7", // violet
  "#14B8A6", // teal
];

// Animation variants
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      type: "spring",
      stiffness: 300,
    },
  }),
};

const hoverEffect = {
  scale: 1.3,
  rotate: [0, -5, 5, 0],
  transition: {
    type: "tween",
    duration: 0.4,
    ease: "easeInOut",
  },
};

export default function Header() {
  const renderAnimatedWord = (word: string) =>
    word.split("").map((char, index) => (
      <motion.span
        key={index}
        custom={index}
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        whileHover={hoverEffect}
        className="inline-block cursor-pointer"
        style={{ color: colorPalette[index % colorPalette.length] }}
      >
        {char}
      </motion.span>
    ));

  return (
    <header className="bg-white shadow p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold flex">
          {renderAnimatedWord(title)}
        </h1>

        <nav className="flex gap-6">
          {navLinks.map(({ label, href }, navIndex) => (
            <Link key={label} href={href} className="text-lg font-bold flex">
              {renderAnimatedWord(label)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
