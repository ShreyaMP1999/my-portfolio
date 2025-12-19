// src/components/SkillSection.tsx
import React from "react";
import { profile, SkillCategory } from "../data/profile";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const SkillSection: React.FC = () => {
  return (
    <Reveal delay={0.1}>
      <section className="py-12 border-t border-slate-800">
      <SectionHeading
        id="skills"
        title="Skills"
        subtitle="Stacks I’m comfortable using to ship real products."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {profile.skills.map((cat: SkillCategory) => (
          <div
            key={cat.name}
            className="hover-card rounded-xl border border-slate-800 bg-slate-900/70 p-4"
          >
            <h3 className="text-sm md:text-base font-semibold text-slate-50 mb-2">
              {cat.name}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="px-2 py-0.5 rounded-full bg-slate-800 text-[11px] text-slate-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    </Reveal>
    
  );
};

export default SkillSection;
