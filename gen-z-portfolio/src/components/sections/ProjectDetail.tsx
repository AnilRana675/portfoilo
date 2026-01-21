"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  ChevronLeft,
} from "lucide-react";
import type { Project } from "@/lib/projects";
import { heroContainerVariants, heroItemVariants } from "@/lib/animations";

interface ProjectDetailProps {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
}

export function ProjectDetail({
  project,
  prevProject,
  nextProject,
}: ProjectDetailProps) {
  return (
    <main className="min-h-screen relative pt-20">
      {/* Background */}
      <div className="fixed inset-0 w-full h-full bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none z-0" />
      <div className="fixed inset-0 w-full h-full scanlines z-50 mix-blend-overlay opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 pb-32">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-hazard transition-colors font-mono text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            BACK_TO_INDEX
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroContainerVariants}
          className="mb-16"
        >
          <motion.div variants={heroItemVariants} className="flex items-center gap-4 mb-4">
            <span className="text-hazard font-mono text-sm font-bold">
              {project.id}
            </span>
            <span className="text-gray-500 font-mono text-xs">{project.year}</span>
          </motion.div>

          <motion.h1
            variants={heroItemVariants}
            className="text-5xl md:text-7xl font-display font-bold text-white uppercase tracking-tighter mb-6"
          >
            {project.title}
          </motion.h1>

          <motion.p
            variants={heroItemVariants}
            className="text-xl text-gray-300 max-w-2xl"
          >
            {project.tagline}
          </motion.p>

          <motion.div
            variants={heroItemVariants}
            className="flex flex-wrap gap-3 mt-8"
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 border border-hazard text-hazard font-mono text-xs uppercase"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Links */}
          <motion.div variants={heroItemVariants} className="flex gap-4 mt-8">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-hazard text-black font-mono font-bold uppercase text-sm hover:bg-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                VIEW_LIVE
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-white text-white font-mono font-bold uppercase text-sm hover:bg-white hover:text-black transition-colors"
              >
                <Github className="w-4 h-4" />
                VIEW_CODE
              </a>
            )}
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroContainerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20"
        >
          {/* Main Description */}
          <motion.div variants={heroItemVariants} className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-hazard font-mono text-sm mb-4 tracking-widest">
                {"//"} PROJECT_OVERVIEW
              </h2>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>

            <div>
              <h2 className="text-hazard font-mono text-sm mb-4 tracking-widest">
                {"//"} KEY_FEATURES
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-hazard font-mono text-xs mt-1">
                      [{String(index + 1).padStart(2, "0")}]
                    </span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div variants={heroItemVariants} className="space-y-6">
            <div className="border border-mono-gray bg-mono-dark p-6">
              <h3 className="text-hazard font-mono text-xs mb-4 tracking-widest">
                ROLE
              </h3>
              <p className="text-white font-mono">{project.role}</p>
            </div>

            <div className="border border-mono-gray bg-mono-dark p-6">
              <h3 className="text-hazard font-mono text-xs mb-4 tracking-widest">
                TECH_STACK
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-mono-gray text-gray-300 font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-mono-gray bg-mono-dark p-6">
              <h3 className="text-hazard font-mono text-xs mb-4 tracking-widest">
                YEAR
              </h3>
              <p className="text-white font-mono text-2xl">{project.year}</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="border-t border-mono-gray pt-12"
        >
          <div className="flex justify-between">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex items-center gap-4 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
                <div>
                  <p className="text-xs font-mono text-gray-500 mb-1">
                    PREV_PROJECT
                  </p>
                  <p className="font-mono">{prevProject.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center gap-4 text-gray-400 hover:text-white transition-colors text-right"
              >
                <div>
                  <p className="text-xs font-mono text-gray-500 mb-1">
                    NEXT_PROJECT
                  </p>
                  <p className="font-mono">{nextProject.title}</p>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
