"use client";

import { motion } from "framer-motion";

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const leftItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const lineVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "100%", opacity: 0.3, transition: { duration: 1.5, ease: "easeInOut" } }
  };

  return (
    <section
      className="section-padding bg-white dark:bg-slate-950"
      data-purpose="education-section"
      id="education"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-16 text-center"
        >
          Education
        </motion.h2>

        {/* Modern Polish Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-4xl mx-auto space-y-12"
        >
          {/* Center Vertical Line */}
          <motion.div
            variants={lineVariants}
            className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gradient-to-b from-cyan-400 dark:from-cyan-500 via-accent to-transparent hidden md:block"
          />

          {/* Timeline Item 1: SSC */}
          <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
            <motion.div variants={leftItemVariants} className="w-full md:w-[45%] mb-4 md:mb-0 text-center md:text-right">
              <span className="inline-block px-4 py-1 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 rounded-full text-sm font-bold mb-2 border border-cyan-200 dark:border-cyan-400/20 shadow-sm">
                2021 / Munsi Meher Ullah Academy
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">SSC (Secondary School Certificate)</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mt-1">Result: GPA 4.96</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 leading-relaxed">
                Completed secondary education with a brilliant result, focusing on science and foundational technical studies.
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-50 dark:bg-midnight border-2 border-cyan-600 dark:border-cyan-400 rounded-full z-10 hidden md:block group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(0,240,255,0.8)]"
            />
            <div className="w-full md:w-[45%]"></div>
          </div>

          {/* Timeline Item 2: Diploma */}
          <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
            <div className="w-full md:w-[45%] order-2 md:order-1"></div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-50 dark:bg-midnight border-2 border-accent rounded-full z-10 hidden md:block group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(255,77,77,0.8)]"
            />
            <motion.div variants={rightItemVariants} className="w-full md:w-[45%] order-1 md:order-2 text-center md:text-left mb-4 md:mb-0">
              <span className="inline-block px-4 py-1 bg-red-50 dark:bg-red-900/30 text-accent rounded-full text-sm font-bold mb-2 border border-red-200 dark:border-accent/20 shadow-sm">
                2022 - 2026 / Jashore Polytechnic Institute
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Diploma in Computer Science and Technology</h3>
              <div className="mt-2 space-y-1">
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Department: Computer Technology</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Result: CGPA 3.35</p>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 leading-relaxed">
                Successfully completed Diploma in Engineering with a focus on software development, data structures, and web technologies.
              </p>
            </motion.div>
          </div>


        </motion.div>
      </div>
    </section>
  );
}
