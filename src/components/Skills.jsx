"use client";

import { motion, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { SiNextdotjs, SiReact, SiTailwindcss, SiJavascript, SiHtml5, SiDaisyui } from "react-icons/si";

function Counter({ to, duration = 1.2 }) {
  const ref = useRef(null);
  useEffect(() => {
    const controls = animate(0, to, {
      duration,
      onUpdate(v) {
        if (ref.current) ref.current.textContent = Math.round(v) + "%";
      },
    });
    return controls.stop;
  }, [to, duration]);
  return <span ref={ref}>0%</span>;
}

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 14 } },
  };

  const skillsData = [
    {
      id: "html-css",
      title: "HTML5 & CSS3",
      level: 95,
      color: "from-orange-500 to-red-500",
      glow: "shadow-orange-500/30",
      icon: <SiHtml5 className="w-7 h-7" />,
    },
    {
      id: "tailwind",
      title: "Tailwind CSS",
      level: 92,
      color: "from-teal-400 to-cyan-500",
      glow: "shadow-teal-500/30",
      icon: <SiTailwindcss className="w-7 h-7" />,
    },
    {
      id: "daisyui",
      title: "DaisyUI",
      level: 82,
      color: "from-green-400 to-emerald-500",
      glow: "shadow-emerald-500/30",
      icon: <SiDaisyui className="w-7 h-7" />,
    },
    {
      id: "javascript",
      title: "JavaScript",
      level: 52,
      color: "from-yellow-400 to-amber-500",
      glow: "shadow-yellow-500/30",
      icon: <SiJavascript className="w-7 h-7" />,
    },
    {
      id: "react",
      title: "React.js",
      level: 60,
      color: "from-cyan-400 to-sky-500",
      glow: "shadow-cyan-500/30",
      icon: <SiReact className="w-7 h-7" />,
    },
    {
      id: "nextjs",
      title: "Next.js",
      level: 55,
      color: "from-slate-400 to-white",
      glow: "shadow-slate-400/30",
      icon: <SiNextdotjs className="w-7 h-7" />,
    },
  ];

  const tools = [
    { name: "Git & GitHub", emoji: "🔗" },
    { name: "VS Code", emoji: "💻" },
    { name: "Figma", emoji: "🎨" },
    { name: "Vercel", emoji: "▲" },
    { name: "Netlify", emoji: "◈" },
    { name: "Pixo", emoji: "🖼️" },
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
        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
          Skills &amp; Technologies
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
          I build fast, responsive web apps with modern tools — from design to deployment.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillsData.map((skill) => (
          <motion.div
            key={skill.id}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className={`p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/60 hover:border-cyan-500/30 transition-all duration-400 shadow-sm hover:shadow-xl hover:${skill.glow} group`}
          >
            <div className="flex items-center justify-between mb-5">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white shadow-lg`}>
                {skill.icon}
              </div>
              <motion.span
                className="text-2xl font-black text-slate-800 dark:text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <Counter to={skill.level} />
              </motion.span>
            </div>

            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
              {skill.title}
            </h3>

            <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 mt-20"
      >
        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-[0.25em] whitespace-nowrap">
            Tools &amp; Environments
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-800" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {tools.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-2 hover:border-cyan-500/30 hover:bg-white dark:hover:bg-slate-800/60 transition-all group cursor-default"
            >
              <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                {tool.emoji}
              </span>
              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}