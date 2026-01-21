"use client";
import { ArrowRight, Settings, Plus, Waves } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function ExperimentLab() {
  return (
    <section className="mb-32 max-w-7xl mx-auto px-4">
      <motion.div
        className="flex items-end gap-4 mb-8"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-mono uppercase bg-hazard text-black px-2 py-1 inline-block">
          Experiment_Lab
        </h3>
        <p className="text-gray-500 text-xs font-mono mb-1">
          {"//"} UNSTABLE BUILDS
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 auto-rows-[120px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* Item 1: Noise */}
        <motion.div
          className="bg-mono-dark border border-mono-gray p-3 flex flex-col justify-between hover:border-hazard transition-colors group relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ scale: 1.05, borderColor: "#FF4500" }}
        >
          <Waves className="text-gray-600 group-hover:text-white transition-colors" />
          <span className="font-mono text-[10px] text-gray-400">
            #E01_NOISE
          </span>
        </motion.div>

        {/* Item 2: Generative Type */}
        <motion.div
          className="col-span-2 bg-white text-black p-3 flex flex-col justify-between relative overflow-hidden group cursor-pointer"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute top-0 right-0 w-8 h-8 bg-hazard triangle-corner clip-path-polygon-[0_0,100%_0,100%_100%]"></div>
          <h4 className="font-bold text-lg leading-none">
            Generative
            <br />
            Typeface
          </h4>
          <div className="flex justify-between items-end">
            <span className="font-mono text-[10px]">Processing 4</span>
            <motion.div whileHover={{ x: 5 }}>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>
        </motion.div>

        {/* Item 3: Aa */}
        <motion.div
          className="bg-mono-dark border border-mono-gray p-3 flex items-center justify-center hover:bg-hazard hover:text-black transition-colors cursor-pointer"
          variants={itemVariants}
          whileHover={{ scale: 1.1, rotate: 2 }}
        >
          <span className="font-display font-bold text-4xl">Aa</span>
        </motion.div>

        {/* Item 4: Liquid Metal (Image Placeholder) */}
        <motion.div
          className="col-span-2 row-span-2 bg-mono-gray border border-white/10 relative group overflow-hidden"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-neutral-800 bg-cover bg-center grayscale mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500" />
          <div className="absolute bottom-0 left-0 p-3 w-full bg-black/80 backdrop-blur-sm border-t border-white/10">
            <p className="font-mono text-[10px] text-hazard mb-1">
              SHADER_EXP_04
            </p>
            <p className="font-bold text-xs">Liquid Metal</p>
          </div>
        </motion.div>

        {/* Item 5: CPU */}
        <motion.div
          className="bg-mono-dark border border-mono-gray p-3 flex flex-col justify-between group hover:border-white transition-colors"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-hazard"
              initial={{ width: "0%" }}
              whileInView={{ width: "66%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            />
          </div>
          <span className="font-mono text-[10px] text-right">CPU: 89%</span>
        </motion.div>

        {/* Item 6: Settings */}
        <motion.div
          className="bg-mono-dark border border-mono-gray p-3 flex items-center justify-center"
          variants={itemVariants}
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.5 }}
        >
          <Settings className="text-gray-700 w-8 h-8" />
        </motion.div>

        {/* Item 7: Load More */}
        <motion.div
          className="col-span-2 bg-mono-dark border border-dashed border-gray-600 p-3 flex items-center justify-center gap-2 hover:bg-gray-900 cursor-pointer"
          variants={itemVariants}
          whileHover={{ scale: 1.02, borderColor: "#FF4500" }}
        >
          <Plus className="text-hazard w-4 h-4" />
          <span className="font-mono text-xs text-gray-400">
            LOAD MORE ARTIFACTS
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
