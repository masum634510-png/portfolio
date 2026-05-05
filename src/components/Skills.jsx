"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } },
  };

  const skillsData = [
    {
      id: "htmlcss",
      icon: <span className="text-2xl font-black">H/C</span>,
      title: "HTML5 & CSS3",
      desc: "Writing semantic markup and advanced CSS techniques for accessibility and visual excellence."
    },
    {
      id: "js",
      icon: <span className="text-2xl font-black">JS</span>,
      title: "JavaScript",
      desc: "Mastering ES6+ features to write clean, maintainable, and highly efficient client-side logic."
    },
    {
      id: "tailwind",
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.632C13.671 10.64 15.013 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.632C16.331 6.16 14.989 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.632C7.671 17.84 9.013 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.632C10.331 13.36 8.989 12 6.001 12z"/></svg>,
      title: "Tailwind CSS",
      desc: "Creating pixel-perfect, fully responsive layouts using utility-first styling patterns."
    },
    {
      id: "react",
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm-8 4c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8z"/></svg>,
      title: "React.js",
      desc: "Building highly interactive and performant user interfaces using a component-driven architecture."
    },
    {
      id: "nextjs",
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.34 17.512l-6.196-8.031v8.031h-1.332v-10.334h1.168l6.36 8.243v-8.243h1.332v10.334h-1.332z"/></svg>,
      title: "Next.js",
      desc: "Developing SEO-friendly, lightning-fast web applications with Server-Side Rendering and static generation."
    },
    {
      id: "framer",
      icon: <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/></svg>,
      title: "Framer Motion",
      desc: "Implementing smooth, premium micro-interactions and scroll-based animations for an immersive UX."
    }
  ];

  return (
    <section className="section-padding" data-purpose="skills-section" id="skills">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 text-center mb-16"
      >
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">Skills & Technologies</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          I work with modern tools and technologies to build fast, scalable and efficient web
          applications.
        </p>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skillsData.map((skill) => (
          <motion.div key={skill.id} variants={cardVariants} className="p-8 rounded-3xl text-center group bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/50 hover:shadow-2xl hover:-translate-y-2 hover:border-cyan-500/30 transition-all duration-500">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800/50 text-cyan-600 dark:text-cyan-400 rounded-2xl flex items-center justify-center border border-slate-100 dark:border-slate-800 group-hover:bg-gradient-to-br group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:text-white dark:group-hover:from-cyan-500 dark:group-hover:to-blue-500 dark:group-hover:text-slate-950 transition-all duration-500 shadow-sm">
                {skill.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">{skill.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              {skill.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Tools Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 mt-24"
      >
        <div className="flex items-center gap-4 mb-10">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-wider">Tools & Environments</h3>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-800" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { name: "Git & GitHub", icon: "🔗" },
            { name: "VS Code", icon: "💻" },
            { name: "Figma", icon: "🎨" },
            { name: "Pixo", icon: "🖼️" },
            { name: "Vercel", icon: "▲" },
            { name: "Netlify", icon: "◈" }
          ].map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-4 rounded-xl bg-slate-50/50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800 flex items-center gap-3 hover:border-cyan-500/30 hover:bg-white dark:hover:bg-slate-800/50 transition-all group"
            >
              <span className="text-lg group-hover:scale-120 transition-transform">{tool.icon}</span>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
