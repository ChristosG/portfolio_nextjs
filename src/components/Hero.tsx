"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

// Optional simple typed effect without extra libraries:
const messages = ["Artist", "Game Designer", "Illustrator", "UX/UI Enthusiast"];

export default function Hero() {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden text-white">
      {/* Animated / swirling background */}
      <div className="absolute inset-0 bg-black">
        {/* Subtle radial gradient swirling */}
        <div className="absolute inset-0 animate-pulse-slow bg-[radial-gradient(ellipse_at_center,_rgba(0,255,128,0.1),_transparent_70%)]" />
      </div>

      <div className="relative z-10 text-center p-4">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-lime-400 mb-4 leading-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to My World
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl text-gray-300 font-semibold h-8 overflow-hidden mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <span className="inline-block animate-pulse-fast text-lime-300">
            {messages[currentMessage]}
          </span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I’m Chris, bringing bold illustrations, captivating board games,
          and intuitive user experiences—straight to your screen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link
            href="/portfolio"
            className="inline-block px-8 py-3 text-lg font-semibold text-black bg-lime-400 hover:bg-lime-300 rounded-full transition-transform"
          >
            Explore My Portfolio
          </Link>
        </motion.div>
      </div>

      {/* Wavy SVG Separator */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[50px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M985.66,30.14C911.05,52.36,836.45,74.58,733,69.86c-66.84-3-115.31-17.64-152.92-29.31-46.11-13.67-90.58-30-178.4-33.44C274.29,2.08,158.07,27.69,0,89.55V120H1200V95.43C1132.89,63.35,1060.13,7.77,985.66,30.14Z"
            fill="#000000"
          />
        </svg>
      </div>
    </section>
  );
}


// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// // Optional simple typed effect without extra libraries:
// const messages = ["Artist", "Game Designer", "Illustrator", "UX/UI Enthusiast"];

// export default function Hero() {
//   const [currentMessage, setCurrentMessage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentMessage((prev) => (prev + 1) % messages.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden text-white">
//       {/* Swirling animated background (CSS-based) */}
//       <div className="absolute inset-0 bg-black">
//         {/* Add swirl or wave gradient using Tailwind or custom CSS */}
//         <div className="absolute inset-0 animate-pulse-slow bg-[radial-gradient(ellipse_at_center,_rgba(0,255,128,0.1),_transparent_70%)]" />
//       </div>

//       <div className="relative z-10 text-center p-4">
//         <motion.h1
//           className="text-5xl md:text-7xl font-extrabold text-lime-400 mb-4 leading-tight"
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Welcome to My World
//         </motion.h1>

//         <motion.h2
//           className="text-2xl md:text-3xl text-gray-300 font-semibold h-8 overflow-hidden mb-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 1 }}
//         >
//           {/* Simple typed effect */}
//           <span className="inline-block animate-pulse-fast text-lime-300">
//             {messages[currentMessage]}
//           </span>
//         </motion.h2>

//         <motion.p
//           className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//         >
//           I’m Chris, bringing bold illustrations, captivating board games,
//           and intuitive user experiences—straight to your screen.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 1, duration: 0.8 }}
//         >
//           <Link
//             href="/portfolio"
//             className="inline-block px-8 py-3 text-lg font-semibold text-black bg-lime-400 hover:bg-lime-300 rounded-full transition-transform"
//           >
//             Explore My Portfolio
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
