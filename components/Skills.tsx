// // "use client";

// // import { motion } from "framer-motion";

// // type Skill = {
// //   name: string;
// //   level: number;
// // };

// // const skills: Skill[] = [
// //   { name: "C / Embedded C", level: 85 },
// //   { name: "ESP32 / Arduino", level: 80 },
// //   { name: "IoT & Sensors", level: 75 },
// //   { name: "PCB Design (EasyEDA)", level: 70 },
// //   { name: "React (Dashboard)", level: 65 },
// //   { name: "Verilog (Basics)", level: 60 },
// // ];


// // export default function Skills() {
// //   return (
// //     <section id="skills" className="px-8 py-20">
// //       <motion.h2
// //         initial={{ opacity: 0 }}
// //         whileInView={{ opacity: 1 }}
// //         transition={{ duration: 0.6 }}
// //         className="text-3xl font-bold mb-10"
// //       >
// //         Skills
// //       </motion.h2>

// //       <div className="max-w-xl space-y-6">
// //         {skills.map((skill) => (
// //           <div key={skill.name}>
// //             <div className="flex justify-between text-sm mb-1">
// //               <span>{skill.name}</span>
// //               <span>{skill.level}%</span>
// //             </div>

// //             <div className="w-full bg-gray-200 h-2 rounded">
// //               <motion.div
// //                 initial={{ width: 0 }}
// //                 whileInView={{ width: `${skill.level}%` }}
// //                 transition={{ duration: 1 }}
// //                 className="bg-black h-2 rounded"
// //               />
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }
// "use client";

// import { motion } from "framer-motion";

// type Skill = {
//   name: string;
//   usedIn: string;
// };

// const skills: Skill[] = [
//   { name: "Embedded C", usedIn: "ESP32, IoT Projects" },
//   { name: "ESP32 / Arduino", usedIn: "Live Streaming, Sensors" },
//   { name: "IoT Systems", usedIn: "Monitoring Dashboards" },
//   { name: "PCB Design (EasyEDA)", usedIn: "Sensor Breakouts" },
//   { name: "React + TypeScript", usedIn: "Portfolio, Dashboards" },
//   { name: "Verilog (Basics)", usedIn: "Digital Logic" },
// ];

// function SkillCard({
//   skill,
//   index,
// }: {
//   skill: Skill;
//   index: number;
// }) {
//   return (
//     <motion.div
//       // 🔹 Entry animation (ONLY ONCE)
//       initial={{ opacity: 0, y: 15 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}

//       // 🔹 Continuous floating (LIMITED RANGE)
//       animate={{ y: [0, -4, 0] }}
//       transition={{
//         duration: 5,
//         repeat: Infinity,
//         ease: "easeInOut",
//         delay: index * 0.25,
//       }}

//       // 🔹 Hover effect
//       whileHover={{ scale: 1.05 }}

//       className="
//         bg-white/5 backdrop-blur
//         border border-white/10
//         rounded-xl p-5
//         shadow-lg
//       "
//     >
//       <h3 className="text-lg font-semibold text-white">
//         {skill.name}
//       </h3>

//       <p className="text-sm text-gray-400 mt-2">
//         Used in: {skill.usedIn}
//       </p>
//     </motion.div>
//   );
// }

// export default function Skills() {
//   return (
//     <section id="skills" className="px-8 py-24">
//       <div className="max-w-6xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl font-bold text-white mb-12"
//         >
//           Skills
//         </motion.h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {skills.map((skill, index) => (
//             <SkillCard
//               key={skill.name}
//               skill={skill}
//               index={index}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Skill = {
  name: string;
  usedIn: string;
  level: number;
};

const skills: Skill[] = [
  { name: "Embedded C", usedIn: "ESP32, IoT Projects", level: 85 },
  { name: "ESP32 / Arduino", usedIn: "Live Streaming, Sensors", level: 80 },
  { name: "IoT Systems", usedIn: "Monitoring Dashboards", level: 75 },
  { name: "PCB Design (EasyEDA)", usedIn: "Sensor Breakouts", level: 70 },
  { name: "React", usedIn: "Portfolio, Dashboards", level: 85 },
  { name: "Verilog (Basics)", usedIn: "Digital Logic", level: 60 },
  { name: "HTML", usedIn: "Building Websites", level: 85 },
  { name: "CSS", usedIn: "Creating Improved UI", level: 75 },
  { name: "Javascript", usedIn: "Logical Thinking", level: 60 },
];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill) => {
            const isActive = activeSkill === skill.name;

            return (
              <motion.div
                key={skill.name}
                // 🔹 ENTRY ANIMATION (ONLY ONCE)
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}

                // 🔹 CLICK HANDLER
                onClick={() =>
                  setActiveSkill(
                    isActive ? null : skill.name
                  )
                }

                // 🔹 HOVER (minor)
                whileHover={{ scale: 1.04 }}

                className={`
                  cursor-pointer
                  rounded-xl p-6
                  border border-white/10
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-blue-600 shadow-blue-500/40 shadow-lg"
                      : "bg-white/5"
                  }
                `}
              >
                {/* Skill name */}
                <h3 className="text-lg font-semibold text-white">
                  {skill.name}
                </h3>

                {/* Used in */}
                <p className="text-sm text-gray-300 mt-2">
                  Used in: {skill.usedIn}
                </p>

                {/* LEVEL BAR (SHOW ONLY WHEN CLICKED) */}
                {isActive && (
                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-gray-200 mb-1">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>

                    <div className="w-full bg-blue-900/40 h-2 rounded overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8 }}
                        className="h-2 bg-white rounded"
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

