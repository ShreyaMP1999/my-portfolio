// src/components/AwardsSection.tsx
import React from "react";
import { profile, AwardItem } from "../data/profile";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const AwardsSection: React.FC = () => {
  if (!profile.awards.length) return null;

  return (
    <Reveal>
    <section className="py-12 border-t border-slate-800">
      <SectionHeading id="awards" title="Honors & Awards" />

      <div className="grid gap-3 md:grid-cols-2">
        {profile.awards.map((award: AwardItem, i) => (
          <article
            key={i}
            className="hover-card rounded-xl border border-amber-500/40 bg-amber-500/10 p-4"
          >
            <h3 className="text-sm md:text-base font-semibold text-amber-100">
              {award.title}
            </h3>
            <p className="text-xs md:text-sm text-amber-200">{award.org}</p>
            <p className="text-[11px] text-amber-300/80">{award.year}</p>
          </article>
        ))}
      </div>
    </section>
    </Reveal>
  );
};

export default AwardsSection;
