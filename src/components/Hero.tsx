// src/components/Hero.tsx
import React from "react";
import { profile } from "../data/profile";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center gap-6">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 -left-10 h-72 w-72 rounded-full bg-violet-500 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-sky-500 blur-3xl" />
      </div>

      <div className="relative space-y-4">
      <p className="text-xl uppercase tracking-[0.2em] text-slate-400 font-bold">
          {profile.location}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Hi, I&apos;m <span className="gradient-text">{profile.name}</span>.
        </h1>
        <h2 className="text-lg md:text-xl text-slate-200 font-medium">
          {profile.title}
        </h2>
        <p className="max-w-2xl text-sm md:text-base text-slate-300">
          {profile.summary}
        </p>
      </div>

      <div className="relative flex flex-wrap gap-3">
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
      </div>
    </section>
  );
};

export default Hero;
