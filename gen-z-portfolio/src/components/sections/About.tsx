"use client";

import { motion } from "framer-motion";
import { Award, MapPin, GraduationCap, Gamepad2, Headphones } from "lucide-react";
import { WordRotate } from "@/components/ui/TextAnimations";
import { containerVariants, itemVariants } from "@/lib/animations";

const skills = [
  { name: "Python", level: 90 },
  { name: "JavaScript/TypeScript", level: 85 },
  { name: "React/Next.js", level: 80 },
  { name: "Node.js/Express", level: 85 },
  { name: "Django", level: 80 },
  { name: "MongoDB/PostgreSQL", level: 75 },
  { name: "TensorFlow/PyTorch", level: 70 },
  { name: "Docker/Kubernetes", level: 65 },
];

export function About() {
  return (
    <section className="mb-32 max-w-7xl mx-auto px-4" id="about">
      <motion.div
        className="flex items-end gap-4 mb-12"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-mono uppercase bg-hazard text-black px-2 py-1 inline-block">
          About_Me
        </h3>
        <p className="text-gray-500 text-xs font-mono mb-1">
          {"//"} SYSTEM_PROFILE
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Bio */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-4xl md:text-5xl font-display font-bold text-white">
              Anil Magar
            </h4>
            <WordRotate
              words={[
                "BACKEND_DEVELOPER // AI_ENTHUSIAST",
                "FULL_STACK_ENGINEER // BUILDER",
                "PROBLEM_SOLVER // INNOVATOR",
              ]}
              className="text-hazard font-mono text-sm tracking-widest"
              duration={3000}
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 leading-relaxed"
          >
            I&apos;m a builder at heart. I don&apos;t just write code; I engineer solutions
            that solve real problems. Currently bridging the gap between
            traditional agriculture and modern AI with Agro Connect, while
            pushing the boundaries of what&apos;s possible with MERN stack and Django.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="border border-mono-gray p-4 bg-mono-dark">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-hazard" />
                <span className="text-xs font-mono text-gray-500">
                  ACHIEVEMENT
                </span>
              </div>
              <p className="text-sm font-bold">ICT Award 2025</p>
              <p className="text-xs text-gray-400">Top 14 Rising Star Finalist</p>
            </div>

            <div className="border border-mono-gray p-4 bg-mono-dark">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="w-4 h-4 text-hazard" />
                <span className="text-xs font-mono text-gray-500">
                  EDUCATION
                </span>
              </div>
              <p className="text-sm font-bold">BSc.CSIT</p>
              <p className="text-xs text-gray-400">Academia International College</p>
            </div>

            <div className="border border-mono-gray p-4 bg-mono-dark">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-hazard" />
                <span className="text-xs font-mono text-gray-500">LOCATION</span>
              </div>
              <p className="text-sm font-bold">Nepal</p>
              <p className="text-xs text-gray-400">Architecting the future</p>
            </div>

            <div className="border border-mono-gray p-4 bg-mono-dark">
              <div className="flex items-center gap-2 mb-2">
                <Gamepad2 className="w-4 h-4 text-hazard" />
                <span className="text-xs font-mono text-gray-500">
                  SIDE_QUEST
                </span>
              </div>
              <p className="text-sm font-bold">Valorant</p>
              <p className="text-xs text-gray-400">Strategic FPS gaming</p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 pt-4 border-t border-mono-gray"
          >
            <Headphones className="w-5 h-5 text-hazard" />
            <div>
              <p className="text-xs font-mono text-gray-500">AUDIOPHILE_MODE</p>
              <p className="text-sm text-gray-300">
                &quot;Music is the shorthand of emotion.&quot;
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-mono text-hazard mb-6 tracking-widest">
              {"//"} SKILL_MATRIX
            </h4>
          </motion.div>

          <div className="space-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="space-y-2"
              >
                <div className="flex justify-between text-sm">
                  <span className="font-mono">{skill.name}</span>
                  <span className="text-hazard font-mono">{skill.level}%</span>
                </div>
                <div className="h-2 bg-mono-gray overflow-hidden">
                  <motion.div
                    className="h-full bg-hazard"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="pt-6 border-t border-mono-gray"
          >
            <p className="text-xs font-mono text-gray-500 mb-4">
              {"//"} TECH_ARSENAL
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Django",
                "MongoDB",
                "PostgreSQL",
                "Docker",
                "AWS",
                "Git",
                "TensorFlow",
                "PyTorch",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-mono border border-mono-gray hover:border-hazard hover:text-hazard transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
