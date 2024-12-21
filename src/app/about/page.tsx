"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-12 py-12">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-lime-400 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>
      
      <motion.p
        className="max-w-3xl text-gray-300 text-lg md:text-xl mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Hey there! I’m Chris—an artist and game designer with a passion for 
        creating immersive worlds, vibrant characters, and intuitive user 
        experiences. I thrive on bringing imaginations to life, whether it’s 
        through board games, video game art, or polished interfaces.
      </motion.p>

      {/* Timeline / Skills / Highlights */}
      <div className="flex flex-col space-y-8">
        {[
          {
            year: "2018",
            title: "Began Freelance Illustration",
            desc: "I started providing illustration and concept art services to indie devs and tabletop enthusiasts."
          },
          {
            year: "2020",
            title: "Expanded into Board Game Design",
            desc: "Launched my first board game concept, focusing on narrative-driven gameplay and striking visuals."
          },
          {
            year: "2022",
            title: "UX/UI Passion",
            desc: "I realized the power of user-centric design, integrating UX/UI solutions into my projects."
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="border-l-4 border-l-lime-400 pl-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-lime-400">
              {item.year}
            </h3>
            <h4 className="text-lg md:text-xl font-semibold text-white mt-1">
              {item.title}
            </h4>
            <p className="text-gray-400 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
