"use client";
import Link from "next/link";
import { ArrowUpRight, FolderOpen } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";

export function ProjectIndex() {
  return (
    <section className="mb-32 max-w-7xl mx-auto px-4" id="projects">
      <motion.div
        className="flex items-baseline justify-between mb-12 border-b-2 border-white pb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold uppercase flex items-center gap-3">
          <FolderOpen className="text-hazard w-6 h-6" />
          Project_Index
        </h3>
        <span className="font-mono text-xs text-gray-500">
          DIR: /ROOT/WORK/
        </span>
      </motion.div>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <Link href={`/projects/${project.slug}`}>
              <article
                className="group relative border-b border-mono-gray py-8 hover:bg-white hover:text-black transition-colors duration-0 cursor-pointer overflow-hidden"
                data-cursor="project"
              >
                <motion.div
                  className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ rotate: 45, scale: 1.1 }}
                >
                  <ArrowUpRight className="w-12 h-12 md:w-16 md:h-16" />
                </motion.div>

                <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 relative z-10 px-4">
                  <span className="font-mono text-sm text-hazard font-bold group-hover:text-black">
                    {project.id}
                  </span>
                  <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter group-hover:translate-x-4 transition-transform">
                    {project.title}
                  </h2>
                  <div className="md:ml-auto flex gap-4 font-mono text-xs uppercase tracking-wide">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-current px-2 py-1 rounded-full hover:bg-hazard hover:text-black hover:border-hazard transition-colors group-hover:border-black"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-gray-800 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity mix-blend-difference z-0" />
              </article>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
