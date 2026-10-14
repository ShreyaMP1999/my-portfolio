import React, { useState } from "react";
import { Github, ArrowUpRight, ChevronDown } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";

const focuses=["All","Full-Stack","AI","Data","Leadership"];
const workflows: Record<string,string[]>={
  "Micro-Observer":["Collect metrics","Store history","Charts + alerts"],
  "Distributed Task Scheduler":["Priority queue","Workers + retries","Recover task state"],
  "Clinical Risk Eligibility Engine":["Clinical criteria","Scoring API","Clinician review"],
  "BioPlex Automation Framework":["Instrument outputs","Test scenarios","Validate results"],
};
const ProjectsSection: React.FC = () => {
  const [focus,setFocus]=useState("All");
  const [expanded,setExpanded]=useState<string[]>([]);
  const list=focus==="All"?profile.projects:profile.projects.filter(p=>p.highlightTags.includes(focus));
  return <section id="projects" className="section-space bg-white">
    <div className="container-width">
      <SectionHeading title="From idea to interface to impact" subtitle="Enterprise products, applied AI, data systems, and dependable infrastructure. Personal projects sit alongside professional work, with the contribution and results behind each."/>
      <div className="mb-8 flex flex-wrap gap-2 border-b border-slate-200 pb-5" role="group" aria-label="Project focus">
        {focuses.map(f=><button type="button" key={f} aria-pressed={focus===f} className={`rounded-md px-4 py-2 text-sm font-semibold ${focus===f?"bg-slate-950 text-white":"bg-slate-100 text-slate-600 hover:bg-cyan-50"}`} onClick={()=>setFocus(f)}>{f}</button>)}
      </div>
      <p className="sr-only" role="status">{list.length} projects</p>
      <div className="grid items-start gap-7 md:grid-cols-2">
        {list.map(p=>{
          const isOpen=expanded.includes(p.name);
          const steps=p.workflow.length?p.workflow:(workflows[p.name]||[]);
          return <article key={p.name} className="project-card">
            <div className={`project-visual ${p.highlightTags.includes("AI")?"project-visual-monitor":"project-visual-scheduler"}`}>
              <p className="absolute left-5 top-5 max-w-[calc(100%-40px)] rounded-md bg-white px-3 py-1 text-sm font-bold text-slate-950">{p.impact}</p>
              <div className="ai-project-flow" aria-label={`${p.name} workflow`}>{steps.map((s,i)=><div className="ai-flow-step" key={s}><span className="ai-flow-number">0{i+1}</span><span>{s}</span></div>)}</div>
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase text-cyan-800">{p.kind}</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">{p.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{p.description}</p>
              <p className="mt-3 text-xs font-semibold text-slate-500">{p.highlightTags.join(" / ")}</p>
              {p.evaluation&&<p className="mt-4 border-l-2 border-emerald-500 pl-3 text-sm leading-6 text-emerald-800">{p.evaluation}</p>}
              <div className="mt-5 flex flex-wrap gap-2">{p.techStack.map(t=><span className="chip" key={t}>{t}</span>)}</div>
              {isOpen&&<div className="mt-5 border-t border-slate-200 pt-5"><p className="text-sm leading-7 text-slate-600">{p.details}</p><ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">{p.features.map(f=><li key={f}>{f}</li>)}</ul></div>}
              <div className="mt-6 flex flex-wrap gap-2">
                {p.link&&<a className="action action-outline" href={p.link} target="_blank" rel="noopener noreferrer"><Github size={16}/>GitHub</a>}
                <a href="#contact" className="action action-primary"><ArrowUpRight size={16}/>Discuss Build</a>
                <button type="button" className="action text-slate-600 hover:bg-slate-50" aria-expanded={isOpen} onClick={()=>setExpanded(prev=>isOpen?prev.filter(x=>x!==p.name):[...prev,p.name])}>Details<ChevronDown size={16} className={isOpen?"rotate-180":""}/></button>
              </div>
            </div>
          </article>;
        })}
      </div>
    </div>
  </section>;
};
export default ProjectsSection;
