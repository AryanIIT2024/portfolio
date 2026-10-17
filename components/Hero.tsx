// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <motion.section
//       id="home"
//       initial="hidden"
//       animate="visible"
//       variants={{
//         hidden: { opacity: 0 },
//         visible: { opacity: 1 },
//       }}
//       transition={{ duration: 1.2 }}
//       className="min-h-[110vh] pt-28 px-10 
//       flex flex-col md:flex-row 
//       items-center justify-between gap-16"
//     >
//       {/* LEFT SIDE : TEXT + EXPERIENCE */}
//       <motion.div
//         variants={{
//           hidden: { opacity: 0, x: -50 },
//           visible: { opacity: 1, x: 0 },
//         }}
//         transition={{ duration: 0.9 }}
//         className="max-w-2xl"
//       >
//         <h1 className="text-6xl md:text-7xl font-extrabold 
//                     bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 
//                     bg-clip-text text-transparent animate-gradient">
//             Aryan <br/>Srivastava
//                   </h1>


//         <p className="mt-6 text-xl text-gray-400">
//           ECE Student | Embedded Systems | ESP32 | IoT
//         </p>

//         {/* EXPERIENCE TEXT */}
//         <p className="mt-6 text-gray-400 leading-relaxed">
//           I am an Electronics & Communication Engineering student with hands-on
//           experience in<motion.span
//   initial={{ backgroundSize: "0% 100%" }}
//   animate={{ backgroundSize: "100% 100%" }}
//   transition={{ delay: 1, duration: 1 }}
//   className="bg-gradient-to-r from-blue-500 to-purple-500 
//   bg-no-repeat bg-left-bottom text-white px-1"
// >
//   Embedded Systems
// </motion.span>
// ,{" "}
//           <span className="text-white">ESP32-based IoT solutions</span>, and
//           hardware–software integrated projects.  
//           I enjoy building real-world systems that combine electronics,
//           firmware, and modern web dashboards for monitoring and control.
//         </p>

//         <motion.div
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { opacity: 1 },
//           }}
//           transition={{ delay: 0.6 }}
//           className="mt-8 flex gap-6"
//         >
//           <a
//             href="https://linkedin.com/in/YOUR_ID"
//             target="_blank"
//             rel="noreferrer"
//             className="px-8 py-3 rounded-lg bg-blue-600 
//             hover:bg-blue-700 transition text-white font-medium"
//           >
//             LinkedIn
//           </a>

//           <a
//             href="https://github.com/YOUR_ID"
//             target="_blank"
//             rel="noreferrer"
//             className="px-8 py-3 rounded-lg border border-gray-500 
//             hover:bg-white/10 transition text-white font-medium"
//           >
//             GitHub
//           </a>
//            <a
//     href="/Resume.pdf"
//     download
//     className="px-8 py-3 rounded-lg 
//     border border-blue-500 text-blue-400 
//     hover:bg-blue-500 hover:text-white 
//     transition font-medium"
//   >
//     Download Resume
//   </a>
//         </motion.div>
//       </motion.div>

//       {/* RIGHT SIDE : BIG PROFILE IMAGE */}
//       <motion.div
//         variants={{
//           hidden: { opacity: 0, scale: 0.7 },
//           visible: { opacity: 1, scale: 1 },
//         }}
//         transition={{ duration: 0.9 }}
//         className="relative"
//       >
//         {/* Glow effect */}
//         <div
//           className="absolute inset-0 rounded-full 
//           bg-blue-500 blur-3xl opacity-30"
//         ></div>

//         <Image
//           src="/porfolio.jpg"
//           alt="Aryan Profile Photo"
//           width={340}
//           height={340}
//           className="relative rounded-full 
//           border-4 border-white/10 object-cover"
//           priority
//         />
//       </motion.div>
//     </motion.section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="order-1 md:order-2 w-full md:w-1/2 flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30"></div>

            <Image
              src="/my photo.jpeg"
              alt="Aryan Profile Photo"
              width={320}
              height={320}
              className="relative rounded-full border-4 border-white/10 object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="order-2 md:order-1 w-full md:w-1/2 text-center md:text-left"
        >
          <h1
            className="
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl
              font-extrabold
              bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400
              bg-clip-text text-transparent animate-gradient
            "
          >
            Aryan <br /> Srivastava
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-400">
            ECE Student | Embedded Systems | ESP32 | IoT
          </p>

          <p className="mt-6 text-gray-400 leading-relaxed text-sm sm:text-base">
            I am an Electronics & Communication Engineering student with hands-on
            experience in{" "}
            <motion.span
              initial={{ backgroundSize: "0% 100%" }}
              animate={{ backgroundSize: "100% 100%" }}
              transition={{ delay: 1, duration: 1 }}
              className="
                bg-gradient-to-r from-blue-500 to-purple-500
                bg-no-repeat bg-left-bottom text-white px-1
              "
            >
              Embedded Systems
            </motion.span>
            ,{" "}
            <span className="text-white">
              ESP32-based IoT solutions
            </span>
            , and hardware–software integrated projects.  
            I enjoy building real-world systems that combine electronics,
            firmware, and modern web dashboards for monitoring and control.
          </p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="
              mt-8 flex flex-col sm:flex-row gap-6
              items-center justify-center md:justify-start
            "
          >
            <a
              href="https://www.linkedin.com/in/aryan-srivastava-966b63286/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-medium"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/AryanIIT2024?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg border border-gray-500 hover:bg-white/10 transition text-white font-medium"
            >
              GitHub
            </a>

            <a
              href="/My_Resume_2026.pdf"
              download
              className="px-6 py-3 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition font-medium"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

