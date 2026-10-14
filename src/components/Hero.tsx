import React, { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Code2, BrainCircuit, Database, Users, ArrowDown } from "lucide-react";
import { profile } from "../data/profile";

const signals = [
  {label:"Full-Stack",value:"-40%",detail:"API response latency at Leap of Faith",stack:"React + Angular + FastAPI + .NET",icon:Code2},
  {label:"AI",value:"93.5%",detail:"SupportPilot Recall@1; MRR 0.963",stack:"LangGraph + RAG + MCP",icon:BrainCircuit},
  {label:"Data",value:"10k+",detail:"FHIR records processed with 90% lower compute cost",stack:"Python + Pandas + SQL + AWS",icon:Database},
  {label:"Leadership",value:"23% to 63%",detail:"Adoption after leading an enterprise visualization module",stack:"Feature ownership + stakeholder collaboration",icon:Users},
];
const Hero: React.FC = () => {
  const [active,setActive] = useState(0);
  const ActiveIcon = signals[active].icon;
  return (
    <section id="top" className="hero-shell relative overflow-hidden bg-slate-950 text-white">
      <div className="hero-grid absolute inset-0" aria-hidden="true"/>
      <div className="container-width relative grid min-h-[calc(100svh-64px)] items-center gap-12 py-14 lg:grid-cols-2 lg:py-16">
        <div>
          <p className="mb-6 inline-flex rounded-md border border-emerald-300/30 bg-emerald-300/10 px-3 py-2 text-sm text-emerald-100">Software Engineer | Full-Stack, AI, Data & Delivery</p>
          <div className="flex items-center gap-5">
            <img src="/Formalpic.png" alt="Shreya Padaganur" width={128} height={128} fetchPriority="high" className="h-24 w-24 shrink-0 rounded-full border-2 border-cyan-200/50 object-cover object-[50%_30%] md:h-32 md:w-32"/>
            <h1 className="min-w-0 text-3xl font-black leading-tight text-white md:text-5xl">{profile.name}</h1>
          </div>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">{profile.tagline}</p>
          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2"><MapPin size={16}/>{profile.location}</span>
            <a className="hero-social" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><Github size={18}/></a>
            <a className="hero-social" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><Linkedin size={18}/></a>
            <a className="hero-social" href={`mailto:${profile.email}`} aria-label="Email" title="Email"><Mail size={18}/></a>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="action bg-cyan-300 text-slate-950 hover:bg-cyan-200">Explore My Work</a>
            <a href="#experience" className="action border border-white/30 text-white hover:bg-white/10">See Experience</a>
          </div>
        </div>
        <div className="system-panel">
          <p className="text-xs font-semibold uppercase text-cyan-200">Build. Connect. Deliver.</p>
          <h2 className="mb-6 mt-2 text-2xl font-bold text-white">Technical depth. Product perspective.</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {signals.map((signal,i) => {
              const Icon=signal.icon;
              return <button key={signal.label} type="button" onClick={()=>setActive(i)} onMouseEnter={()=>setActive(i)} onFocus={()=>setActive(i)} aria-pressed={active===i} className={`signal-card text-left ${active===i ? "signal-card-active" : ""}`}>
                <span className="flex items-center justify-between gap-3 text-sm font-semibold text-slate-300">{signal.label}<Icon size={18}/></span>
                <span className="mt-4 block text-2xl font-black text-white">{signal.value}</span>
                <span className="mt-1 block text-sm leading-6 text-slate-400">{signal.detail}</span>
              </button>;
            })}
          </div>
          <div className="mt-5 border-t border-white/10 pt-4" aria-live="polite">
            <p className="flex items-center gap-2 text-sm font-semibold text-cyan-200"><ActiveIcon size={16}/>{signals[active].label} in practice</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">{signals[active].stack}</p>
            <p className="mt-1 text-sm leading-6 text-slate-400">{signals[active].detail}</p>
          </div>
        </div>
        <a href="#about" className="mx-auto inline-flex p-2 text-cyan-200 lg:col-span-2" aria-label="Scroll to about" title="About Shreya"><ArrowDown size={20}/></a>
      </div>
    </section>
  );
};
export default Hero;
