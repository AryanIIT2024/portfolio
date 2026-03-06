"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  idea: string;
  problems: string[];
  github?: string;
};
const projects: Project[] = [
  {
    title: "ESP32-Based Wi-Fi Anti-Jamming Detection System",
    description:
      "I developed a real-time Wi-Fi Anti-Jamming Detection System using ESP32 to identify suspicious wireless disruptions such as signal jamming, de-authentication attacks, rogue access point behavior, and abnormal RSSI variations.",
    image: "/image2.png",
    tech: [
      "ESP32",
      "Embedded C",
      "WiFi",
      "Buzzer",
      "Real Time Messaging System (RTMS)",
    ],
    idea:
      "The idea came from observing how critical systems rely heavily on wireless communication and how intentional interference or jamming can silently disrupt connectivity without any alert mechanism.",
    problems: [
      "Undetected Wi-Fi jamming or interference attacks",
      "Sudden communication loss in wireless-dependent systems",
      "Lack of low-cost security monitoring for IoT networks",
    ],
    github: "https://github.com/YOUR_ID/esp32-antijamming",
  },

  {
    title: "ESP32-Based RC Electric Car",
    description:
      "Built a wireless remote-controlled electric car using ESP32, enabling real-time control, motor direction management, and responsive movement through Wi-Fi-based commands.",
    image: "/Image3.jpeg",
    tech: ["ESP32", "IoT", "Motor Driver"],
    idea:
      "The project was inspired by interest in robotics and the challenge of designing a reliable wireless control system for vehicle movement using embedded systems.",
    problems: [
      "Limited hands-on learning in embedded robotics",
      "Manual and inefficient control mechanisms",
      "Lack of low-cost platforms for RC vehicle experimentation",
    ],
  },

  {
    title: "Feel Buddy – Your AI Partner",
    description:
      "Developed an AI-powered virtual companion that interacts with users, analyzes emotional input, and provides supportive responses through a web-based interface.",
    image: "/image4.png",
    tech: ["AI/ML", "API", "Web App", "Flask"],
    idea:
      "The idea originated from the growing need for accessible mental wellness support and a conversational AI system that can assist users anytime through intelligent interaction.",
    problems: [
      "Lack of immediate emotional support",
      "Difficulty in expressing feelings openly",
      "Limited access to mental wellness tools",
    ],
  },

  {
    title: "Candy Crush Game",
    description:
      "Designed a browser-based Candy Crush-style game using JavaScript, HTML, and CSS, featuring interactive gameplay, score tracking, and responsive animations.",
    image: "/image5.png",
    tech: ["HTML", "CSS", "JavaScript"],
    idea:
      "Inspired by popular puzzle games and the desire to strengthen front-end development and game logic skills using core web technologies.",
    problems: [
      "Limited practice in JavaScript game logic",
      "Need for interactive and engaging UI projects",
      "Understanding DOM manipulation and event handling",
    ],
  },

  {
    title: "Laser-Based Fencing Detection System",
    description:
      "Developed a security system using laser sensors and ESP32 to detect unauthorized boundary crossings and instantly trigger alerts using buzzers and real-time notifications.",
    image: "/image6.png",
    tech: [
      "ESP32",
      "Laser Sensor",
      "Real Time Messaging System (RTMS)",
      "Buzzer",
    ],
    idea:
      "The project was inspired by the need for cost-effective perimeter security systems for restricted areas, warehouses, and industrial sites.",
    problems: [
      "Unauthorized access to restricted zones",
      "Delayed response to perimeter breaches",
      "High cost of traditional security systems",
    ],
  },

  {
    title: "Snake Game",
    description:
      "Created a classic Snake Game using HTML, CSS, and JavaScript with smooth controls, collision detection, and score tracking.",
    image: "/image8.png",
    tech: ["HTML", "CSS", "JavaScript"],
    idea:
      "Built to strengthen JavaScript fundamentals and understand game loops, state management, and keyboard-based user interactions.",
    problems: [
      "Lack of practical JavaScript projects",
      "Understanding real-time game logic",
      "Improving problem-solving through interactive coding",
    ],
  },
];



export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="min-h-screen pt-24 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-white mb-10"
        >
          Projects
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isOpen = activeProject === index;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="
                  bg-white/5 border border-white/10
                  rounded-xl p-5 sm:p-6
                  backdrop-blur
                "
              >
                {/* IMAGE */}
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={320}
                  className="w-full h-auto rounded-lg mb-4 object-cover"
                />

                {/* TITLE */}
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-400 text-sm sm:text-base mt-2">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="
                        text-xs px-2 py-1
                        bg-white/10 text-gray-300
                        rounded
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* TOGGLE */}
                <button
                  onClick={() =>
                    setActiveProject(isOpen ? null : index)
                  }
                  className="mt-4 text-blue-400 text-sm hover:underline"
                >
                  {isOpen ? "Hide details ↑" : "View details ↓"}
                </button>

                {/* DETAILS */}
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="mt-5 space-y-4 text-sm text-gray-300"
                  >
                    <div>
                      <h4 className="font-semibold text-white">
                        💡 How I got the idea
                      </h4>
                      <p>{project.idea}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white">
                        🌍 Daily life problems it solves
                      </h4>
                      <ul className="list-disc ml-5">
                        {project.problems.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </div>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block text-blue-400 hover:underline"
                      >
                        View on GitHub →
                      </a>
                    )}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

