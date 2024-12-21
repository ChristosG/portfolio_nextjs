"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-12">
      {/* Left Side: CTA / Info */}
      <motion.div
        className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-lime-400 mb-4">
          Let’s Connect!
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
          I’m excited to hear about your project or collaboration ideas. 
          Whether it’s a new game concept, illustration gig, or UX/UI challenge, 
          drop me a line below and let's create something epic together.
        </p>
      </motion.div>

      {/* Right Side: Form */}
      <motion.form
        className="md:w-1/2 bg-neutral-900 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-medium text-lime-400">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full p-2 border border-neutral-700 rounded bg-black focus:outline-none focus:border-lime-400 transition-colors"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium text-lime-400">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-2 border border-neutral-700 rounded bg-black focus:outline-none focus:border-lime-400 transition-colors"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 font-medium text-lime-400">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-2 border border-neutral-700 rounded bg-black focus:outline-none focus:border-lime-400 transition-colors"
            rows={5}
            placeholder="Describe your project or say hi..."
          />
        </div>

        <button
          type="submit"
          className="bg-lime-400 text-black font-semibold px-6 py-3 rounded hover:bg-lime-300 transition-colors w-full md:w-auto"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
}
