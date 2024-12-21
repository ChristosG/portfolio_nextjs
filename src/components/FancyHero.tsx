"use client"; 
import { motion } from "framer-motion";

export default function FancyHero() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-purple-500 to-pink-500 p-10 rounded-md"
    >
      <h1 className="text-white text-4xl font-bold">Welcome to My World!</h1>
    </motion.div>
  );
}
