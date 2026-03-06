// "use client";
// import { motion } from "framer-motion";

// export default function Navbar() {
//   return (
//     <motion.nav
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-gray-800 px-8 py-4 flex justify-between items-center"

//     >
//       <h1 className="text-xl font-bold">Portfolio_(2025-26)</h1>

//       <ul className="flex gap-8 text-lg font-semibold">
//         <li><a href="#home" className="hover:text-blue-600">Home</a></li>
//         <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
//         <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
//         <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
//       </ul>
//     </motion.nav>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="
        fixed top-0 w-full z-50
        bg-black/70 backdrop-blur
        border-b border-gray-800
        px-4 sm:px-6 md:px-12 py-4
      "
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* LOGO */}
        <h1 className="text-lg sm:text-xl font-bold">
          Portfolio_(2025-26)
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-lg font-semibold">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* HAMBURGER (MOBILE) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="
            md:hidden mt-4
            flex flex-col gap-4
            text-lg font-semibold
            px-4
          "
        >
          <li><a onClick={() => setOpen(false)} href="#home">Home</a></li>
          <li><a onClick={() => setOpen(false)} href="#skills">Skills</a></li>
          <li><a onClick={() => setOpen(false)} href="#projects">Projects</a></li>
          <li><a onClick={() => setOpen(false)} href="#contact">Contact</a></li>
        </motion.ul>
      )}
    </motion.nav>
  );
}
