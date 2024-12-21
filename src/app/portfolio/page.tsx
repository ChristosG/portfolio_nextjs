"use client";
// ^ Because we use React state and Framer Motion in a Next.js App Router

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

type Project = {
  title: string;
  slug: string;      // used for the dynamic route
  category: string;
  image: string;     // path or URL to image
  description: string;
};

const allProjects: Project[] = [
  {
    title: "Epic Fantasy Board Game Art",
    slug: "epic-fantasy",
    category: "board-game",
    image: "/images/fantasy-board-game.jpg",
    description: "Immersive fantasy characters & environments for a tabletop RPG.",
  },
  {
    title: "Sci-Fi Game Interface",
    slug: "scifi-interface",
    category: "ux-ui",
    image: "/images/scifi-ui.jpg",
    description: "Futuristic UI designs for a space exploration video game.",
  },
  {
    title: "Cartoon Character Illustrations",
    slug: "cartoon-characters",
    category: "illustration",
    image: "/images/cartoon-illustrations.jpg",
    description: "Playful, vibrant illustrations for a kids’ board game.",
  },
  {
    title: "Dungeon Crawler Concept",
    slug: "dungeon-crawler",
    category: "board-game",
    image: "/images/dungeon-crawler.jpg",
    description: "Dark, gritty board game design for deep dungeon quests.",
  },
  {
    title: "Minimalist Mobile UI",
    slug: "minimalist-mobile",
    category: "ux-ui",
    image: "/images/minimalist-mobile-ui.jpg",
    description: "Sleek, user-friendly interface for iOS and Android devices.",
  },
  {
    title: "Cyberpunk Poster Art",
    slug: "cyberpunk-poster",
    category: "illustration",
    image: "/images/cyberpunk-art.jpg",
    description: "High-contrast, neon-lit illustrations inspired by cyberpunk vibes.",
  },
  // ...add as many as you like!
];

const categories = ["all", "illustration", "board-game", "ux-ui"];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter logic
  const filteredProjects =
    selectedCategory === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6 md:px-12">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-lime-400 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Work
      </motion.h1>

      {/* Category Filters */}
      <motion.div
        className="flex space-x-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-semibold transition-colors ${
              selectedCategory === cat
                ? "bg-lime-400 text-black"
                : "bg-neutral-800 hover:bg-neutral-700"
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProjects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            {/* 3D tilt effect + link to detail page */}
            <Link href={`/portfolio/${p.slug}`}>
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor="#00FF7F"
                glarePosition="all"
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className="bg-neutral-900 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Image */}
                <div className="w-full h-48 md:h-64 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform"
                  />
                </div>

                {/* Text */}
                <div className="p-4 min-h-[150px] flex flex-col justify-between">
                  <h3 className="text-xl font-bold text-lime-300 line-clamp-1">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                    {p.description}
                  </p>
                </div>
              </Tilt>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


// "use client";
// import FancyHero from "@/components/FancyHero";

// import { motion } from "framer-motion";
// import PortfolioGrid from "@/components/PortfolioGrid";

// export default function Portfolio() {
//   return (
//     <>
//     <PortfolioGrid />
//   </>

//   );
// }
