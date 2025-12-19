// src/components/ExperienceSection.tsx
import React, { useState } from "react";
import { profile, ExperienceItem } from "../data/profile";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const ExperienceSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <Reveal>
      <section className="py-12 border-t border-slate-800">
        <SectionHeading
          id="experience"
          title="Experience"
          subtitle="Roles where I shipped production code, not just class projects."
        />

        <div className="space-y-4">
          {profile.experience.map((exp: ExperienceItem, idx) => {
            const isOpen = openIndex === idx;

            return (
              <article
                key={exp.company}
                className="hover-card rounded-xl border border-slate-800 bg-slate-900/60 p-4 md:p-5"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-start justify-between gap-3 text-left"
                >
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-slate-50">
                      {exp.role} · {exp.company}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-400">
                      {exp.location} · {exp.period}
                    </p>

                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full bg-violet-500/10 text-[10px] uppercase tracking-wide text-violet-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="mt-1 text-slate-400 text-lg md:text-xl">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <ul className="mt-3 list-disc list-inside space-y-1.5 text-xs md:text-sm text-slate-200">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </Reveal>
  );
};

export default ExperienceSection;
