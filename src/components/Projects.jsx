"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const projectsData = [
    {
      id: "todo",
      title: "MERN Todo App (2025)",
      desc: "A fully functional Todo application with authentication, CRUD operations, and a clean, responsive UI.",
      img: "https://lh3.googleusercontent.com/aida/ADBb0ujRlG_TLf4qEH3TE5LZlb7lzw74dsHidMYlkiC6lU49f11mchDVYe_Xrh6GhVrG7O8bHOjOyx8E_Bs3JVXymKiMJwjb1bMxvMtuZwYHWao0fNlrZmMOXQxUm8yKVX07kaeMfODZD3t0xCGfdWw4oXpe3bVVQsGD16Gzrx9guY9iBpdTD_MUO5NfeJ44GF48ifbxcAwQCO80t-ULDDmtz86I_S4Z9uDR6eFT2nfEmcFEhD-NKHcPC-86VfSumZU83OLcnh_uaELwtw",
      tags: ["React", "Node.js", "Express.js", "MongoDB"]
    },
    {
      id: "ecommerce",
      title: "E-Commerce Demo (2025)",
      desc: "A demo e-commerce platform featuring product listing, cart system, and checkout flow.",
      img: "https://lh3.googleusercontent.com/aida/ADBb0ujRlG_TLf4qEH3TE5LZlb7lzw74dsHidMYlkiC6lU49f11mchDVYe_Xrh6GhVrG7O8bHOjOyx8E_Bs3JVXymKiMJwjb1bMxvMtuZwYHWao0fNlrZmMOXQxUm8yKVX07kaeMfODZD3t0xCGfdWw4oXpe3bVVQsGD16Gzrx9guY9iBpdTD_MUO5NfeJ44GF48ifbxcAwQCO80t-ULDDmtz86I_S4Z9uDR6eFT2nfEmcFEhD-NKHcPC-86VfSumZU83OLcnh_uaELwtw",
      tags: ["React", "Node.js", "Express.js", "MongoDB"]
    }
  ];

  return (
    <section
      className="section-padding bg-slate-50/50 dark:bg-slate-900/20"
      data-purpose="projects-section"
      id="projects"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 text-center mb-16"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">Recent Projects</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Here are some of the real-world projects I've built using the MERN stack.
        </p>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {projectsData.map((project) => (
          <motion.div key={project.id} variants={cardVariants} className="p-6 rounded-3xl group overflow-hidden bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:border-cyan-400/40 transition-all duration-300">
            <div className="rounded-2xl overflow-hidden mb-6 h-64 border border-slate-200 dark:border-slate-800">
              <img
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={project.img}
              />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm h-10">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-cyan-50 dark:bg-cyan-900/30 rounded-full text-xs font-medium text-cyan-700 dark:text-cyan-400 border border-cyan-100 dark:border-cyan-800/50">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <Link
                href="#"
                className="flex-1 text-center bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold py-3 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              >
                GitHub ↗
              </Link>
              <Link
                href="#"
                className="flex-1 text-center bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white font-semibold py-3 rounded-xl shadow-lg shadow-cyan-600/20 transition-all"
              >
                Live Demo ↗
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
