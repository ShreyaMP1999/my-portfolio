import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import Particles from "./Particles";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" as any },
  show: { opacity: 1, y: 0, filter: "blur(0px)" as any, transition: { duration: 0.6 } },
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center py-10">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 -left-10 h-72 w-72 rounded-full bg-violet-500 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-sky-500 blur-3xl" />
      </div>

      {/* Floating particles */}
      <Particles count={32} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative w-full max-w-5xl px-4"
      >
        <div className="grid md:grid-cols-[220px_1fr] gap-8 items-center">
          {/* Profile Picture */}
          <motion.div variants={item} className="flex justify-center md:justify-start">
            <div className="relative w-44 h-44 md:w-52 md:h-52">
              <img
                src="/shreya.jpg"
                alt="Shreya Padaganur"
                className="rounded-full w-full h-full object-cover border-2 border-sky-300/70 shadow-2xl"
              />
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-sky-400/20 blur-2xl -z-10" />
              {/* Gradient ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-500 via-sky-400 to-emerald-300 opacity-40 blur-md -z-10" />
            </div>
          </motion.div>

          {/* Text content */}
          <div className="space-y-4 text-center md:text-left">
            <motion.p
              variants={item}
              className="text-xs uppercase tracking-[0.3em] text-slate-400"
            >
              {profile.location} · Open to Full-Time Roles
            </motion.p>

            <motion.h1 variants={item} className="text-4xl md:text-5xl font-bold leading-tight">
              Hi, I&apos;m <span className="gradient-text">{profile.name}</span>.
            </motion.h1>

            <motion.h2 variants={item} className="text-lg md:text-xl text-slate-200 font-medium">
              {profile.title}
            </motion.h2>

            <motion.p variants={item} className="max-w-2xl mx-auto md:mx-0 text-sm md:text-base text-slate-300">
              {profile.summary}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-violet-500 via-sky-500 to-emerald-400 text-sm font-medium shadow-lg hover:shadow-xl hover:brightness-110 transition"
                >
                  Download Resume
                </a>
              )}
              <a
                href="#contact"
                className="px-4 py-2 rounded-full border border-slate-600 text-sm font-medium hover:bg-slate-800/70 transition"
              >
                Contact Me
              </a>
              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  className="px-4 py-2 rounded-full bg-slate-900/60 border border-slate-700 text-xs md:text-sm hover:bg-slate-800 transition"
                >
                  GitHub
                </a>
              )}
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  className="px-4 py-2 rounded-full bg-slate-900/60 border border-slate-700 text-xs md:text-sm hover:bg-slate-800 transition"
                >
                  LinkedIn
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
