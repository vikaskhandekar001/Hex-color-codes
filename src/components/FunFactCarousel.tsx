"use client"
import React, { useEffect, useState } from 'react';

const funFacts = [

    "#FF5733 was used in NASA’s early UI for highlighting errors.",
    "#1DA1F2 is Twitter’s iconic blue.",
    "#A2AAAD represents Apple's MacBook silver.",
    "#1877F2 is Facebook blue, chosen due to red-green colorblindness.",
    "#E50914 is Netflix's signature red.",
    "#F5F5DC (Beige) is a classic interior design color.",
    "#39FF14 is a common neon green in sci-fi UIs.",
    "#81D8D0 is Tiffany Blue, a trademarked color.",
    "#FF6700 (Safety Orange) is used on construction vests.",
    "#191970 (Midnight Blue) resembles the night sky.",
    "#FFFFE0 (Light Yellow) is said to boost memory.",
    "#FFD700 (Gold) is historically tied to royalty.",
    "#ADD8E6 (Light Blue) is used in ice themes.",
    "#800080 (Purple) was more valuable than gold in Rome.",
    "#228B22 (Forest Green) is used in military camo.",
    "#DC143C (Crimson) appeared in Soviet insignia.",
    "#708090 (Slate Gray) is popular in modern UIs.",
    "#FFB6C1 (Light Pink) is used for cartoon characters.",
    "#0D1117 is GitHub’s dark theme background.",
    "#FF69B4 (Hot Pink) rose to fame in 2000s fashion.",
    "#00CED1 (Dark Turquoise) was common in 90s design.",
    "#4B0082 (Indigo) symbolizes deep spirituality.",
    "#25D366 is the color of WhatsApp’s brand.",
    "#6A0DAD is a bold grape-like purple.",
    "#9ACD32 is often used in green energy dashboards.",
    "#9932CC is a magical tone used in fantasy UIs.",
    "#FFE4B5 (Moccasin) is a favorite in recipe apps.",
    "#FFEB3B is similar to Hufflepuff’s yellow.",
    "#30D5C8 is like Ariel’s tail in The Little Mermaid.",
    "#7FFF00 (Chartreuse) glows like alien slime.",
    "#0057B7 is used in IMAX themes.",
    "#1E90FF (Dodger Blue) is used by marine websites.",
    "#00BFFF (Deep Sky Blue) appears in tropical branding.",
    "#FA8072 (Salmon) is a common blush shade.",
    "#D40000 is Ferrari’s racing red.",
    "#FF7518 is classic pumpkin orange.",
    "#7851A9 (Royal Purple) is regal and majestic.",
    "#CCCCFF (Periwinkle) is soft and dreamy.",
    "#00FF00 is pure green and often means 'go'.",
    "#FFDAB9 (Peach Puff) is often seen in baby brands.",
    "#8B4513 (Saddle Brown) resembles chocolate.",
    "#F0E68C (Khaki) is great for nature themes.",
    "#C71585 (Medium Violet Red) is striking in UI alerts.",
    "#FF6347 (Tomato) is often used for warning buttons.",
    "#E6E6FA (Lavender) is common in wellness apps.",
    "#FF8C00 (Dark Orange) has a fiery edge.",
    "#98FB98 (Pale Green) is peaceful and soft.",
    "#FFD700 is also the hex for Olympic Gold.",
    "#F08080 (Light Coral) is gentle and friendly.",
    "#FDF5E6 (Old Lace) is elegant and vintage inspired.",
    "#F7DF1E is the signature yellow used by JavaScript logos.",
    "#3178C6 represents TypeScript and is known for strong typings.",
    "#E34F26 is the official color of the HTML5 badge.",
    "#61DAFB is React's signature cyan-blue.",
    "#764ABC is the purple used by the Redux logo.",
    "#24292E is GitHub's interface background color.",
    "#38B2AC is Tailwind CSS teal, a popular utility-first style.",
    "#FF9900 is the brand orange of Amazon and AWS.",
    "#2D2D2D is a common background color in code editors like VS Code.",
    "#00ADB5 is popular in dashboard UI themes.",

];

export default function FunFactCarousel() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % funFacts.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const fact = funFacts[index];
    const match = fact.match(/(#[0-9A-Fa-f]{6})/);
    const hex = match ? match[1] : null;
    const label = fact.replace(hex ?? '', '').trim();

    return (
        <div className="h-10 flex items-center justify-center text-sm font-bold italic mb-6 transition-opacity duration-700">
            💡 Fun Fact: {hex && (
                <span
                    className="px-2 py-1 rounded text-white font-mono mx-1"
                    style={{ backgroundColor: hex }}
                >
                    {hex}
                </span>
            )} {label}
        </div>
    );
}
