"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const socialLinks = [
    { name: 'GitHub', link: 'https://github.com/masum634510-png', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>, color: 'hover:text-slate-900 dark:hover:text-white' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/mdmasum-dev/', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>, color: 'hover:text-[#0A66C2]' },
    { name: 'WhatsApp', link: 'https://web.whatsapp.com/', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>, color: 'hover:text-[#25D366]' },
    { name: 'Facebook', link: 'https://www.facebook.com/', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>, color: 'hover:text-[#1877F2]' }
  ];

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden px-6 lg:px-12 pt-20 pb-32"
      data-purpose="hero-section"
      id="hero"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* Left Side: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1 flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300 uppercase tracking-widest text-[10px]">
              Available for new projects
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-2xl lg:text-3xl font-semibold mb-2 text-slate-800 dark:text-slate-200">
            Hello, <span className="text-cyan-600 dark:text-cyan-400">I'm Md Masum</span>
          </motion.h2>

          <motion.h1 variants={itemVariants} className="text-4xl lg:text-8xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-[0.9]">
            Creative <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Frontend <br /> Developer
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base lg:text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl">
            I craft responsive, high-performance web applications using modern technologies.
            Bringing ideas to life with clean code and modern design.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Link
              href="#contact"
              className="px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg hover:scale-105 transition-all"
            >
              Start a Project
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2"
            >
              Download CV
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side: Image with Effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-[400px] lg:w-[450px] lg:h-[600px] rounded-[3rem] overflow-hidden group border-2 border-white/10 dark:border-slate-800/50 shadow-2xl">
            <Image
              src="/images/11.png"
              alt="Md Masum"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
              priority
            />
            {/* Blended Fade for Midnight Theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-slate-950 dark:via-transparent pointer-events-none" />
            
            {/* Ambient Background Glow behind image */}
            <div className="absolute -inset-10 bg-cyan-500/10 blur-[100px] -z-10 group-hover:bg-cyan-500/20 transition-colors" />
          </div>

          {/* Projects Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-3 -left-3 bg-white dark:bg-slate-900/90 backdrop-blur-md p-3 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl z-20 flex items-center gap-3"
          >
            <div className="w-9 h-9 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl flex items-center justify-center text-lg">
              🔥
            </div>
            <div>
              <p className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none mb-1">Portfolio</p>
              <p className="text-[13px] font-bold text-slate-900 dark:text-white leading-tight">15+ Projects</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Vertical Social Sidebar (Premium Style) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="hidden lg:flex fixed left-10 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-50"
      >
        <div className="w-px h-24 bg-gradient-to-t from-cyan-500 to-transparent opacity-50" />
        <div className="flex flex-col gap-6">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-slate-400 dark:text-slate-500 transition-all duration-300 ${social.color} hover:scale-125 transform shadow-sm`}
              title={social.name}
            >
              {social.icon}
            </Link>
          ))}
        </div>
        <div className="w-px h-24 bg-gradient-to-b from-cyan-500 to-transparent opacity-50" />
      </motion.div>

      {/* Skills Marquee at the bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-white/50 dark:bg-slate-950/50 backdrop-blur-md border-t border-slate-100 dark:border-slate-900 py-4 overflow-hidden">
        <div className="flex animate-[marquee_15s_linear_infinite] whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 px-6 text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] items-center">
              <span>Next.js</span>
              <span className="text-cyan-500">✦</span>
              <span>React.js</span>
              <span className="text-cyan-500">✦</span>
              <span>Tailwind CSS</span>
              <span className="text-cyan-500">✦</span>
              <span>JavaScript</span>
              <span className="text-cyan-500">✦</span>
              <span>Framer Motion</span>
              <span className="text-cyan-500">✦</span>
              <span>UI/UX Design</span>
              <span className="text-cyan-500">✦</span>
              <span>Web Performance</span>
              <span className="text-cyan-500">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
