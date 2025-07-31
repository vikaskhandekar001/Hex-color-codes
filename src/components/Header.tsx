"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Palette, Droplet, Pipette, PaintBucket } from "lucide-react";

// Wordmark and nav items
const title = "ColorCodes";

const navLinks = [
  { label: "Play Color Guesser", href: "/playColorGames" },
  // { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const convertLinks = [
  { label: "HEX to RGB", href: "/convert/hex-to-rgb" },
  { label: "RGB to HEX", href: "/convert/rgb-to-hex" },
  { label: "HEX to HSL", href: "/convert/hex-to-hsl" },
  { label: "CMYK to RGB", href: "/convert/cmyk-to-rgb" },
];

const colorPalette = [
  "#EF4444", "#F59E0B", "#10B981", "#3B82F6",
  "#8B5CF6", "#EC4899", "#F43F5E", "#22D3EE",
  "#A855F7", "#14B8A6",
];

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
        key={index + char}
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
        <Link href={'/'}>
          <h1 className="text-xl font-bold flex">
            {renderAnimatedWord(title)}
          </h1>
        </Link>

        <nav className="flex gap-6 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-lg font-bold flex items-center gap-1 cursor-pointer border-none bg-transparent outline-none">
              {renderAnimatedWord("Convert")}
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              {convertLinks.map(({ label, href }) => {
                let icon = <Palette className="w-4 h-4 mr-2" />;
                if (label.includes("RGB")) icon = <Droplet className="w-4 h-4 mr-2" />;
                if (label.includes("HEX")) icon = <Pipette className="w-4 h-4 mr-2" />;
                if (label.includes("CMYK")) icon = <PaintBucket className="w-4 h-4 mr-2" />;

                return (
                  <DropdownMenuItem key={href} asChild>
                    <Link href={href} className="flex items-center">
                      {icon}
                      {label}
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
          {navLinks.map(({ label, href }) => (
            <Link key={label} href={href} className="text-lg font-bold flex">
              {renderAnimatedWord(label)}
            </Link>
          ))}

          {/* ✅ Convert Dropdown */}

        </nav>
      </div>
    </header>
  );
}
