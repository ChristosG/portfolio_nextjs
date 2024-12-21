// src/app/portfolio/page.tsx
"use client";

import { useState } from "react";
import projects from "@/data/projects";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Link from "next/link";
import Image from "next/image"; 

// Generate categories from the projects array
// We'll also add "all" for the filter
function getAllCategories() {
  const cats = projects.map((p) => p.category);
  const uniqueCats = Array.from(new Set(cats));
  return ["all", ...uniqueCats];
}

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = getAllCategories();

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

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

      {/* Category Filters with horizontal scroll on mobile */}
      <motion.div
        className="flex space-x-4 mb-8 overflow-x-auto whitespace-nowrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-semibold shrink-0 transition-colors ${
              selectedCategory === cat
                ? "bg-lime-400 text-black"
                : "bg-neutral-800 hover:bg-neutral-700"
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <p className="text-gray-400">
          No projects found in <strong>{selectedCategory}</strong> category.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProjects.map((p, i) => {
          // find first image block for the card
          const imageBlock = p.layout.find((b) => b.type === "image");
          // snippet from the first text block if you want
          const textBlock = p.layout.find((b) => b.type === "text");
          const snippet = textBlock?.content?.substring(0, 50) ?? "";

          return (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
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
                  <div className="w-full h-48 md:h-64 overflow-hidden">
                  <Image
  src={imageBlock?.src || "/images/placeholder.jpg"}
  alt={p.title}
  width={500} // Adjust width as per your design
  height={300} // Adjust height as per your design
  className="object-cover w-full h-full hover:scale-105 transition-transform"
/>
                  </div>
                  <div className="p-4 min-h-[150px] flex flex-col justify-between">
                    <h3 className="text-xl font-bold text-lime-300 line-clamp-1">
                      {p.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                      {snippet}...
                    </p>
                  </div>
                </Tilt>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
