import React from "react";
import { Award } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";

const AwardsSection: React.FC = () => (
  <section id="awards" className="section-space border-t border-slate-200 bg-white">
    <div className="container-width">
      <SectionHeading title="Leadership beyond the code" subtitle="Service, representation, and recognition alongside my engineering work."/>
      <div className="grid gap-6 md:grid-cols-3">
        {profile.awards.map(a=><article key={a.title} className="border-t-2 border-emerald-500 pt-5"><Award className="mb-4 text-emerald-700" size={24}/><h3 className="font-semibold text-slate-950">{a.title}</h3><p className="mt-2 text-sm text-slate-600">{a.org}</p><p className="mt-1 text-sm text-slate-500">{a.year}</p></article>)}
      </div>
    </div>
  </section>
);
export default AwardsSection;
