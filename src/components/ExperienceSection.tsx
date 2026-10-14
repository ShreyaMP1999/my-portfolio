import React, { useState } from "react";
import { ChevronDown, MapPin, Calendar } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";

const ExperienceSection: React.FC = () => {
  const [expanded,setExpanded]=useState<string[]>([profile.experience[0].company]);
  return <section id="experience" className="section-space bg-slate-50">
    <div className="container-width">
      <SectionHeading title="Experience across products, data, and delivery" subtitle="Healthcare software, enterprise platforms, automation, and full-stack delivery."/>
      <div className="space-y-5">
        {profile.experience.map((exp,i)=>{
          const isOpen=expanded.includes(exp.company);
          return <article key={exp.company} className="rounded-lg border border-slate-200 bg-white p-5 md:p-7">
            <button className="flex w-full items-start justify-between gap-4 text-left" aria-expanded={isOpen} aria-controls={`experience-details-${i}`} onClick={()=>setExpanded(prev=>isOpen?prev.filter(x=>x!==exp.company):[...prev,exp.company])}>
              <span><span className="block text-xl font-bold text-slate-950">{exp.company}</span><span className="mt-2 block font-semibold text-cyan-800">{exp.role}</span><span className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600"><span className="inline-flex items-center gap-2"><MapPin size={14}/>{exp.location}</span><span className="inline-flex items-center gap-2"><Calendar size={14}/>{exp.period}</span></span></span>
              <ChevronDown className={`mt-1 shrink-0 transition-transform ${isOpen?"rotate-180":""}`} size={20}/>
            </button>
            {isOpen&&<div id={`experience-details-${i}`} className="mt-6 border-t border-slate-100 pt-5"><ul className="list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">{exp.bullets.map(b=><li key={b}>{b}</li>)}</ul><div className="mt-5 flex flex-wrap gap-2">{exp.tags.map(t=><span className="chip" key={t}>{t}</span>)}</div></div>}
          </article>;
        })}
      </div>
    </div>
  </section>;
};
export default ExperienceSection;
