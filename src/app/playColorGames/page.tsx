"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import Layout from "@/components/Layout";

const COLOR_LEVELS = [
  // Level 0
  [
    { name: "Red", hex: "#FF0000" },
    { name: "Green", hex: "#008000" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Yellow", hex: "#FFFF00" },
    { name: "Orange", hex: "#FFA500" },
    { name: "Purple", hex: "#800080" },
    { name: "Pink", hex: "#FFC0CB" },
    { name: "Brown", hex: "#A52A2A" },
    { name: "Black", hex: "#000000" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Gray", hex: "#808080" },
    { name: "Cyan", hex: "#00FFFF" },
    { name: "Magenta", hex: "#FF00FF" },
    { name: "Turquoise", hex: "#40E0D0" },
    { name: "Navy", hex: "#000080" },
    { name: "Beige", hex: "#F5F5DC" },
    { name: "Ivory", hex: "#FFFFF0" },
    { name: "Sky Blue", hex: "#87CEEB" },
    { name: "Mint", hex: "#98FF98" },
    { name: "Peach", hex: "#FFDAB9" },
  ],
  // Level 1
  [
    { name: "Maroon", hex: "#800000" },
    { name: "Olive", hex: "#808000" },
    { name: "Silver", hex: "#C0C0C0" },
    { name: "Lime", hex: "#00FF00" },
    { name: "Aqua", hex: "#00FFFF" },
    { name: "Fuchsia", hex: "#FF00FF" },
    { name: "Coral", hex: "#FF7F50" },
    { name: "Khaki", hex: "#F0E68C" },
    { name: "Teal", hex: "#008080" },
    { name: "Indigo", hex: "#4B0082" },
  ],
  // Level 2
  [
    { name: "Ocean Deep", hex: "#005577" },
    { name: "Celestial Cyan", hex: "#00FFFF" },
    { name: "Royal Purple", hex: "#7851A9" },
    { name: "Sunset Orange", hex: "#FF4500" },
    { name: "Midnight Blue", hex: "#191970" },
    { name: "Olive Drab", hex: "#6B8E23" },
    { name: "Firebrick", hex: "#B22222" },
    { name: "Slate Gray", hex: "#708090" },
    { name: "Periwinkle", hex: "#CCCCFF" },
    { name: "Salmon", hex: "#FA8072" },
  ],
];

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function ColorGuesserGame({
  isKidsMode: initialKidsMode = false,
}: {
  isKidsMode?: boolean;
}) {
  const [isKidsMode, setIsKidsMode] = useState(initialKidsMode);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(0);
  const [mode, setMode] = useState<"guess-hex" | "guess-name">("guess-hex");

  const [remaining, setRemaining] = useState<any[]>([]);
  const [options, setOptions] = useState<any[]>([]);
  const [target, setTarget] = useState<any>(null);

  const [feedback, setFeedback] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Initialize the game
  useEffect(() => {
    const initial = shuffle(COLOR_LEVELS[0]);
    const opts = initial.slice(0, isKidsMode ? 2 : 4);
    setRemaining(initial);
    setOptions(opts);
    setTarget(opts[Math.floor(Math.random() * opts.length)]);
  }, [isKidsMode]);

  // Handle level up
  useEffect(() => {
    if (remaining.length < (isKidsMode ? 2 : 4) && level + 1 < COLOR_LEVELS.length) {
      const nextLevel = level + 1;
      setLevel(nextLevel);
      const nextSet = shuffle(COLOR_LEVELS[nextLevel]);
      const nextOptions = nextSet.slice(0, isKidsMode ? 2 : 4);
      setRemaining(nextSet);
      setOptions(nextOptions);
      setTarget(nextOptions[Math.floor(Math.random() * nextOptions.length)]);
    }
  }, [remaining]);

  const handleGuess = (guess: string) => {
    const isMatch = mode === "guess-hex" ? guess === target.hex : guess === target.name;
    if (isMatch) {
      setFeedback("🎉 Correct!");
      setIsCorrect(true);
      setScore((s) => s + 1);
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      const updated = remaining.filter((c) => c.hex !== target.hex);
      const nextOptions = shuffle(updated).slice(0, isKidsMode ? 2 : 4);
      setRemaining(updated);
      setOptions(nextOptions);
      if (nextOptions.length) {
        setTarget(nextOptions[Math.floor(Math.random() * nextOptions.length)]);
      }
    } else {
      setFeedback(
        `❌ Oops! It was ${mode === "guess-hex" ? target.hex : target.name}`
      );
      setIsCorrect(false);
    }
  };

  if (!target || options.length === 0) {
    return (
      <Layout>
        <div className="text-center p-6">Loading game...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-md mx-auto p-4">
        <h2 className="text-xl font-bold mb-4 text-center">
          {mode === "guess-hex" ? (
            <>
              Guess the Hex for <span className="underline">{target.name}</span>
            </>
          ) : (
            <>
              Guess the Color Name for{" "}
              <span className="underline">{target.hex}</span>
            </>
          )}
        </h2>

        <div className="flex justify-center gap-2 mb-4">
          <Button
            variant={isKidsMode ? "default" : "outline"}
            onClick={() => setIsKidsMode(true)}
          >
            Kids Mode
          </Button>
          <Button
            variant={!isKidsMode ? "default" : "outline"}
            onClick={() => setIsKidsMode(false)}
          >
            Standard Mode
          </Button>
        </div>

        <div className="flex justify-center gap-2 mb-4">
          <Button
            variant={mode === "guess-hex" ? "default" : "outline"}
            onClick={() => setMode("guess-hex")}
          >
            Guess Hex
          </Button>
          <Button
            variant={mode === "guess-name" ? "default" : "outline"}
            onClick={() => setMode("guess-name")}
          >
            Guess Name
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          {options.map((color) => (
            <motion.div
              key={color.hex}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card
                className="cursor-pointer overflow-hidden"
                onClick={() =>
                  handleGuess(mode === "guess-hex" ? color.hex : color.name)
                }
              >
                <div
                  className="h-24 w-full"
                  style={{ backgroundColor: color.hex }}
                />
                <CardContent className="text-center py-3 text-md font-medium">
                  {mode === "guess-hex" ? color.hex : color.name}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {feedback && (
            <motion.div
              key={feedback}
              className={`text-center text-2xl font-bold mb-4 ${
                isCorrect ? "text-green-600" : "text-red-500"
              }`}
              initial={{ opacity: 0, scale: 0.5, y: -20 }}
              animate={{ opacity: 1, scale: 1.2, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              {feedback}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="w-full bg-gray-200 h-2 rounded mb-4 overflow-hidden">
          <div
            className="h-full bg-green-500 transition-all"
            style={{
              width: `${
                100 -
                (remaining.length / COLOR_LEVELS[level]?.length) * 100 || 0
              }%`,
            }}
          />
        </div>

        <div className="text-center text-md mt-2">Score: {score}</div>
        <div className="text-center text-xs text-muted-foreground">
          Level: {level + 1} / {COLOR_LEVELS.length}
        </div>
      </div>
    </Layout>
  );
}
