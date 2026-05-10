"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      className="section-padding relative overflow-hidden"
      data-purpose="contact-section"
      id="contact"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">Connect</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Have a project in mind? Reach out and let's build something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 flex flex-col justify-center"
          >
            {[
              {
                icon: "📧",
                label: "Email Me",
                val: "masum634510@gmail.com",
                color: "from-blue-500/10 to-cyan-500/10"
              },
              {
                icon: "📱",
                label: "Call Me",
                val: "01972788532",
                color: "from-cyan-500/10 to-indigo-500/10"
              },
              {
                icon: "📍",
                label: "Location",
                val: "Jashore, Dhaka, Bangladesh",
                color: "from-indigo-500/10 to-blue-500/10"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 hover:border-cyan-500/30 transition-all duration-300 group shadow-sm"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-xl sm:text-2xl group-hover:scale-110 transition-transform shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-1">{item.label}</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200 break-all">{item.val}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-slate-900/40 backdrop-blur-xl p-5 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-2xl relative"
          >
            <div className="absolute top-0 right-10 w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Full Name</label>
                  <input
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-sm font-medium"
                    placeholder="Enter your name"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Email Address</label>
                  <input
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-sm font-medium"
                    placeholder="example@email.com"
                    type="email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Message</label>
                <textarea
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-sm font-medium min-h-[120px] resize-none"
                  placeholder="Descrip..."
                ></textarea>
              </div>

              <div className="flex justify-center sm:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05, translateY: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-3 rounded-xl font-bold uppercase tracking-wider text-xs bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex items-center justify-center gap-3"
                  type="submit"
                >
                  Send Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}