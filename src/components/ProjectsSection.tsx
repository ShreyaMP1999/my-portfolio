// src/components/ProjectsSection.tsx
import React, { useState } from "react";
import { profile, ProjectItem } from "../data/profile";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const ALL = "All";

const ProjectsSection: React.FC = () => {
  const allTags = Array.from(
    new Set(profile.projects.flatMap((p) => p.highlightTags))
  );
  const [tag, setTag] = useState<string>(ALL);

  const list =
    tag === ALL
      ? profile.projects
      : profile.projects.filter((p) => p.highlightTags.includes(tag));

  return (
    <Reveal delay={0.05}>
      <section className="py-12 border-t border-slate-800">
        <SectionHeading
          id="projects"
          title="Selected Projects"
          subtitle="A taste of things I’ve built outside of pure coursework."
        />

        <div className="mb-5 flex flex-wrap gap-2">
          {[ALL, ...allTags].map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`px-3 py-1 rounded-full text-xs font-medium border ${
                t === tag
                  ? "bg-gradient-to-r from-violet-500 to-sky-500 border-transparent text-slate-50"
                  : "border-slate-700 text-slate-300 hover:bg-slate-800"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {list.map((p: ProjectItem) => (
            <article
              key={p.name}
              className="hover-card rounded-xl border border-slate-800 bg-slate-900/70 p-4 flex flex-col"
            >
              <h3 className="font-semibold text-slate-50 mb-1 text-sm md:text-base">
                {p.name}
              </h3>
              <p className="text-xs md:text-sm text-slate-300 mb-3">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                {p.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-full bg-slate-800 text-[10px] uppercase tracking-wide text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  className="mt-auto text-xs md:text-sm text-sky-300 hover:text-sky-200 underline underline-offset-4"
                >
                  View on GitHub →
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
    </Reveal>
  );
};

export default ProjectsSection;
