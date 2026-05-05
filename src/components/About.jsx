"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="section-padding relative overflow-hidden" data-purpose="about-section" id="about">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 dark:bg-slate-900/50 skew-x-12 transform origin-top-right -z-10"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* About Photo & Visuals - BLENDED STYLE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          {/* Main Photo Container */}
          <div className="relative z-10 overflow-hidden">
            <motion.img
              alt="Md Masum"
              className="w-full h-[450px] lg:h-[600px] object-cover object-top filter contrast-[1.02]"
              style={{
                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
              }}
              src="/images/11.png"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
            />
            {/* Small floating info card - Improved Readability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-10 left-6 z-20 bg-white/10 dark:bg-slate-900/30 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-2xl flex items-center gap-3"
            >
              <div className="w-9 h-9 bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              <div>
                <p className="text-[9px] font-black text-slate-800 dark:text-white tracking-widest uppercase leading-none mb-1">Clean Code</p>
                <p className="text-[13px] text-slate-900 dark:text-slate-100 font-bold leading-tight">Modern Architecture</p>
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements behind photo */}
          <div className="absolute -inset-10 bg-cyan-500/5 blur-[100px] -z-10 animate-pulse"></div>
          {/* Tech Decoration */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-500/20 rounded-tl-3xl"></div>
        </motion.div>

        {/* About Text Content */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 font-medium text-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              Discover
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">Me</span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-5 text-base text-slate-600 dark:text-slate-400 leading-relaxed border-l-4 border-cyan-500 pl-6 py-2">
            <p>
              I am a passionate <strong className="font-semibold text-slate-800 dark:text-slate-200">Frontend Developer</strong> dedicated to crafting immersive and high-performance web experiences. My journey is fueled by a blend of artistic design and technical precision, where I transform complex ideas into elegant, user-centric interfaces.
            </p>
            <p>
              With a keen eye for detail and a love for modern animations, I specialize in building responsive architectures that are not just functional, but delightful to interact with. I believe that every pixel has a purpose and every line of code should contribute to a seamless digital narrative.
            </p>
          </motion.div>

          {/* Personal Highlights - Better for Freshers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 shadow-sm hover:border-cyan-500/50 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Quick Learner</h4>
                <p className="text-[12px] text-slate-500 dark:text-slate-400">Always eager to learn new tech.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 shadow-sm hover:border-blue-500/50 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Detail Oriented</h4>
                <p className="text-[12px] text-slate-500 dark:text-slate-400">Focus on pixel-perfect UI.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div >
    </section >
  );
}
