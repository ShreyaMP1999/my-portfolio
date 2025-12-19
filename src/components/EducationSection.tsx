// src/components/EducationSection.tsx
import React from "react";
import { profile, EducationItem } from "../data/profile";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const EducationSection: React.FC = () => {
  return (
    <Reveal>
    <section className="py-12 border-t border-slate-800">
      <SectionHeading id="education" title="Education" />

      <div className="space-y-3">
        {profile.education.map((ed: EducationItem) => (
          <article
            key={ed.school}
            className="hover-card rounded-xl border border-slate-800 bg-slate-900/70 p-4"
          >
            <h3 className="text-sm md:text-base font-semibold text-slate-50">
              {ed.school}
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              {ed.degree} · {ed.location}
            </p>
            <p className="text-xs text-slate-400">
              {ed.period}
              {ed.gpa && <> · GPA {ed.gpa}</>}
            </p>
          </article>
        ))}
      </div>
    </section>
    </Reveal>
  );
};

export default EducationSection;
