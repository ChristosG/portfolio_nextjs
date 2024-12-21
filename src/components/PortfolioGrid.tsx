"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // Import the Next.js Image component

type Project = {
  title: string;
  image: string;
  description: string;
};

const mockProjects: Project[] = [
  {
    title: "Epic Fantasy Board Game Art",
    image: "/images/fantasy-board-game.jpg",
    description: "Characters, landscapes, and card designs for a fantasy-themed board game.",
  },
  {
    title: "Sci-Fi Game Interface",
    image: "/images/scifi-ui.jpg",
    description: "High-tech user interface designs for a futuristic game concept.",
  },
  // ... more projects
];

export default function PortfolioGrid() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-black">
      <h2 className="text-3xl font-bold mb-8 text-lime-400">My Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {mockProjects.map((p, i) => (
          <motion.div
            key={i}
            className="bg-neutral-900 p-4 rounded-lg overflow-hidden group"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="aspect-w-16 aspect-h-9 mb-4 relative">
              <Image
                src={p.image}
                alt={p.title}
                layout="fill" // Ensure the image fills the container
                className="object-cover rounded group-hover:scale-105 transition-transform"
                priority={i === 0} // Prioritize the first image for faster loading
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
            <p className="text-gray-400 text-sm">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
