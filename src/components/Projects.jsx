"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [activeChallenge, setActiveChallenge] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const projectsData = [
    {
      id: "todo",
      title: "GitHub Issues Tracker",
      year: "2026",
      desc: "A GitHub-styled issue tracking app with admin login, full CRUD operations, and persistent data storage — built with vanilla JavaScript and Tailwind CSS.",
      img: "/1.png",
      tags: ["HTML", "Tailwind CSS", "JavaScript", "Local Storage"],
      github: "https://github.com/masum634510-png/Github-Issue-Traker",
      demo: "https://masum634510-png.github.io/Github-Issue-Traker/",
      challenges: [
        "Building a login system using only JavaScript without any backend",
        "Persisting issues CRUD data correctly in Local Storage",
        "Handling array manipulation properly for filter and search features",
        "Replicating a GitHub-like UI design using Tailwind CSS",
      ],
    },
    {
      id: "ecommerce",
      title: "English Janala",
      year: "2026",
      desc: "An interactive English vocabulary learning platform in Bengali — users can select lessons, search words, and practice with dynamic content fetched from a REST API.",
      img: "/2.png",
      tags: ["HTML", "Tailwind CSS", "daisyui", "JavaScript", "REST API"],
      github: "https://github.com/masum634510-png/English-Janala",
      demo: "https://masum634510-png.github.io/English-Janala/",
      challenges: [
        "Fetching vocabulary data from an external API and rendering it dynamically",
        "Keeping the UI state updated correctly after selecting a lesson",
        "Implementing a real-time search feature to filter vocabulary",
        "Building a responsive layout that works on both mobile and desktop",
      ],
    },
    {
      id: "chat",
      title: "Developer Portfolio",
      year: "2026",
      desc: "A personal developer portfolio built with Next.js — showcasing skills, projects, and education with smooth animations and a fully responsive design.",
      img: "/3.png",
      tags: ["Next.js", "React.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/masum634510-png/portfolio",
      demo: "https://mdmasum-dev.netlify.app/",
      challenges: [
        "Understanding and implementing the new Next.js App Router system",
        "Keeping scroll-based animations smooth using Framer Motion",
        "Setting up meta tags and structured data for SEO optimization",
        "Configuring and deploying a Next.js project correctly on Netlify",
      ],
    },
    {
      id: "portfolio",
      title: "Skill Sphere",
      year: "2026",
      desc: "A modern online learning platform where users can browse courses, view instructor profiles, and enroll — built with Next.js and deployed on Vercel.",
      img: "/4.png",
      tags: ["Next.js", "React.js", "Tailwind CSS", "DaisyUI", "MongoDB", "Better Auth"],
      github: "https://github.com/masum634510-png/skill-sphere",
      demo: "https://skill-sphere-gamma.vercel.app/",
      challenges: [
        "Integrating Better Auth correctly with Next.js.",
        "Designing the relation between users, courses, and enrollments in MongoDB.",
        "Handling protected routes using middleware.",
        "Matching DaisyUI components with a custom design system.",
      ],
    },
  ];

  return (
    <section
      className="section-padding bg-slate-50/50 dark:bg-slate-900/20"
      data-purpose="projects-section"
      id="projects"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 text-xs font-semibold rounded-full border border-cyan-200 dark:border-cyan-800/50 mb-4 tracking-widest uppercase">
          My Work
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Recent Projects
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Here are some of the real-world projects I&apos;ve built using the MERN stack and modern web technologies.
        </p>
      </motion.div>

      {/* Project Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            className="group rounded-3xl overflow-hidden bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:border-cyan-400/40 transition-all duration-300"
          >
            {/* Screenshot */}
            <div className="relative h-52 sm:h-60 md:h-64 overflow-hidden">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 right-3 px-3 py-1 bg-slate-900/70 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                {project.year}
              </span>
            </div>

            {/* Card Body */}
            <div className="p-5 sm:p-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  🛠 Technologies Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-cyan-50 dark:bg-cyan-900/30 rounded-full text-xs font-medium text-cyan-700 dark:text-cyan-400 border border-cyan-100 dark:border-cyan-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenges Toggle */}
              <button
                onClick={() =>
                  setActiveChallenge(
                    activeChallenge === project.id ? null : project.id
                  )
                }
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40 text-amber-700 dark:text-amber-400 text-sm font-semibold mb-4 hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-all duration-200"
              >
                <span>⚡ Challenges Faced</span>
                <span className="text-lg leading-none">
                  {activeChallenge === project.id ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {activeChallenge === project.id && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mb-4 space-y-2"
                  >
                    {project.challenges.map((c, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 rounded-lg px-3 py-2"
                      >
                        <span className="text-amber-500 mt-0.5 shrink-0">▶</span>
                        {c}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={project.github}
                  target="_blank"
                  className="flex-1 text-center bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold py-2.5 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all text-sm"
                >
                  GitHub ↗
                </Link>
                <Link
                  href={project.demo}
                  target="_blank"
                  className="flex-1 text-center bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white font-bold py-2.5 rounded-xl shadow-lg shadow-cyan-600/20 transition-all text-sm"
                >
                  Live Demo ↗
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}