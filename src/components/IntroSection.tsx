"use client";
import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="bg-neutral-900 text-lime-200 py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Hey, Im Chris
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-8 max-w-3xl leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I create awesome illustrations, game designs, board games, and provide
          top-notch UX/UI solutions. Take a peek below to see how I blend
          immersive visuals and user-centric thinking to bring epic experiences
          to life!
        </motion.p>
      </div>
    </section>
  );
}
