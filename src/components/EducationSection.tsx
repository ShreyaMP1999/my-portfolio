import React from "react";
import { GraduationCap } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";
const EducationSection: React.FC = () => (
  <section id="education" className="section-space border-t border-slate-200 bg-white">
    <div className="container-width">
      <SectionHeading title="Education"/>
      <div className="grid gap-8 md:grid-cols-2">{profile.education.map(ed=><article key={ed.school} className="flex items-start gap-4"><GraduationCap size={28} className="shrink-0 text-cyan-700"/><div><h3 className="text-lg font-bold text-slate-950">{ed.degree}</h3><p className="mt-1 font-medium text-cyan-800">{ed.school}</p><p className="mt-2 text-sm text-slate-600">{ed.location} | {ed.period}</p><p className="mt-1 text-sm text-slate-500">GPA: {ed.gpa}</p></div></article>)}</div>
    </div>
  </section>
);
export default EducationSection;
