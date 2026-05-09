"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

/* Animated number counter */
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
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.48 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
        </svg>
      ),
    },
    {
      id: "tailwind",
      title: "Tailwind CSS",
      level: 92,
      color: "from-teal-400 to-cyan-500",
      glow: "shadow-teal-500/30",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
        </svg>
      ),
    },
    {
      id: "daisyui",
      title: "DaisyUI",
      level: 82,
      color: "from-green-400 to-emerald-500",
      glow: "shadow-emerald-500/30",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.01-2.98c.41-1.01.793-2.026 1.003-2.963zm-12.31-.05c.208.963.592 1.98 1.017 2.99a23.463 23.463 0 0 0-1.004 2.94c-.988-.303-1.9-.652-2.668-1.01C1.9 13.765.786 12.772.786 12.01c0-.768 1.112-1.745 2.845-2.48.65-.28 1.37-.522 2.138-.73zm10.888 2.595c.362.613.697 1.24 1.006 1.88a19.997 19.997 0 0 1-1.006 1.88 20.405 20.405 0 0 1-1.013-1.88c.307-.653.647-1.29 1.013-1.88zm-9.774 0c.365.59.705 1.227 1.01 1.882a19.99 19.99 0 0 1-1.01 1.876 20.405 20.405 0 0 1-1.013-1.876c.307-.655.647-1.29 1.013-1.882zm4.25 6.12c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.096-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
        </svg>
      ),
    },
    {
      id: "javascript",
      title: "JavaScript",
      level: 52,
      color: "from-yellow-400 to-amber-500",
      glow: "shadow-yellow-500/30",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474.0 .9538.0109 1.0988.1067 1.7805.6863 4.7433 3.9737 8.7466 8.5553 10.0219.8 .2338 1.653.3942 2.605.5002.3533.0409 1.7752.0409 2.1285.0 1.5484-.1719 2.9927-.6075 4.3417-1.3003.2072-.1059.2464-.1349.2183-.1588-.0178-.0154-1.6738-2.2139-3.6898-4.8895l-3.6558-4.8603-4.5795-6.7798c-.1897-.2809-.3659-.5407-.3927-.5707-.0268-.0294-.0495-.0235-.0627.0153-.0131.0394-.0131 1.0155-.0016 2.7428.0116 2.6647.0132 2.7107.0511 2.7816.0545.1019.1053.1537.2247.2218.0919.0521.1758.0651.7786.0651h.6736l.1787-.1116c.1114-.0697.2012-.1451.2524-.2098l.0755-.0969.0013-1.9985.0016-1.999.1185-.1576c.1307-.1737.3317-.3742.5312-.517.13-.0924.4381-.2492.5905-.2993.0969-.0325.1737-.0407.5518-.0407.4082 0 .4469.0054.6336.0749.5851.2172 1.0135.7291 1.1263 1.3419.0316.1686.0316 4.7854.0 4.954-.0527 2.8826-3.5488 4.4973-6.0034 2.8015-.2476-.1665-.4909-.3928-.6921-.6487-.0802-.1031-.0834-.1031-.1296-.0564-.0132.0131-.0199.0539-.0199.1215v.0962l.3538.4887c.3876.5354.4078.5588.5989.749.6688.6684 1.5059 1.0809 2.3952 1.1736.2827.0293.9128.0293 1.1955 0 .9054-.0937 1.7326-.5047 2.408-1.2145l.0765-.0815.0013 2.3698.0013 2.3698.0946.1251c.0521.0692.1744.2262.272.3493l.1773.222h5.4483l.1773-.222c.0975-.1231.2198-.2801.272-.3493l.0946-.1251.0013-2.7429.0013-2.7429.0765.0815c.6754.7098 1.5026 1.1208 2.408 1.2145.2827.0293.9128.0293 1.1955 0 .8893-.0927 1.7264-.5052 2.3952-1.1736.1911-.1902.2113-.2136.5989-.749l.3538-.4887v-.0962c0-.0676-.0067-.1084-.0199-.1215-.0462-.0467-.0494-.0467-.1296.0564-.2012.2559-.4445.4822-.6921.6487-2.4546 1.6958-6.0034.0811-6.0034-2.8015-.0013-.1684 0-4.7918.0-4.954.1128-.6128.5412-1.1247 1.1263-1.3419.1867-.0695.2254-.0749.6336-.0749.3781 0 .4549.0082.5518.0407.1524.0501.4605.2069.5905.2993.1995.1428.4005.3433.5312.517l.1185.1576.0016 1.999.0013 1.9985.0755.0969c.0512.0647.141.1401.2524.2098l.1787.1116h.6736c.6028 0 .6867-.013.7786-.0651.1194-.0681.1702-.1199.2247-.2218.0379-.0709.0395-.1169.0511-2.7816.0115-2.7273.0115-2.7034-.0016-2.7428-.0132-.0388-.0359-.0447-.0627-.0153-.0268.03-.203.2898-.3927.5707l-4.5795 6.7798-3.6558 4.8603c-2.016 2.6756-3.672 4.8741-3.6898 4.8895-.0281.024.0111.0529.2183.1588 1.349.6928 2.7933 1.1284 4.3417 1.3003.3533.0409 1.7752.0409 2.1285.0 .9520-.1060 1.805-.2664 2.605-.5002 4.5816-1.2753 7.869-5.2786 8.5553-10.0219.0958-.6817.1067-.8267.1067-1.7805.0-.8937-.0118-1.0884-.108-1.7474-.272-1.8884-.9922-3.671-2.1003-5.2482C18.1743 2.1476 14.9814.3086 11.5725.0013 11.524.0053 11.3905.007 11.2142.007h.3583z" />
        </svg>
      ),
    },
    {
      id: "react",
      title: "React.js",
      level: 60,
      color: "from-cyan-400 to-sky-500",
      glow: "shadow-cyan-500/30",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.632C13.671 10.64 15.013 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.632C16.331 6.16 14.989 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.632C7.671 17.84 9.013 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.632C10.331 13.36 8.989 12 6.001 12z" />
        </svg>
      ),
    },
    {
      id: "nextjs",
      title: "Next.js",
      level: 55,
      color: "from-slate-400 to-white",
      glow: "shadow-slate-400/30",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
        </svg>
      ),
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

      {/* ── Section Header ── */}
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

      {/* ── Skill Cards with Progress Bars ── */}
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
            {/* Icon + Percentage */}
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

            {/* Title */}
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
              {skill.title}
            </h3>

            {/* Progress Bar */}
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


      {/* ── Tools & Environments ── */}
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
