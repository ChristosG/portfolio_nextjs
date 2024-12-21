"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-black/90 backdrop-blur-md sticky top-0 z-50"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/">
          <span className="text-2xl font-bold text-lime-400 hover:text-lime-300 transition-colors">
            Chris’s Portfolio
          </span>
        </Link>
        <div className="flex space-x-6">
          <Link href="/about" className="hover:text-lime-400 transition-colors">
            About
          </Link>
          <Link href="/portfolio" className="hover:text-lime-400 transition-colors">
            Portfolio
          </Link>
          <Link href="/contact" className="hover:text-lime-400 transition-colors">
            Contact
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
