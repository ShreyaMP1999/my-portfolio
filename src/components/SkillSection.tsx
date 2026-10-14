import React from "react";
import { Code2, BrainCircuit, Database, Users } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";
const SkillSection: React.FC = () => (
  <section id="skills" className="section-space bg-slate-50">
    <div className="container-width">
      <SectionHeading title="Tools I use to ship dependable systems" subtitle="Frontend interfaces, backend services, applied AI, data workflows, and delivery."/>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{profile.skills.map((s,i)=><article key={s.name} className="rounded-lg border border-slate-200 bg-white p-6"><div className={`mb-4 h-1 w-10 ${["bg-cyan-500","bg-emerald-500","bg-rose-500"][i%3]}`}/><h3 className="mb-4 text-lg font-bold text-slate-950">{s.name}</h3><div className="flex flex-wrap gap-2">{s.skills.map(t=><span key={t} className="chip">{t}</span>)}</div></article>)}</div>
      <div className="mt-12 grid gap-8 border-t border-slate-200 pt-10 md:grid-cols-2 lg:grid-cols-4">{[
        {icon:Code2,title:"Full-Stack Products",text:"React and Angular interfaces backed by Python and .NET services"},
        {icon:BrainCircuit,title:"Applied AI",text:"Agents, RAG, MCP integrations, and meaningful evaluations"},
        {icon:Database,title:"Data Engineering",text:"Pipelines, SQL aggregation, clinical data, and validation"},
        {icon:Users,title:"Leadership & Delivery",text:"Stakeholder collaboration, feature ownership, and business outcomes"},
      ].map(({icon:Icon,title,text})=><div key={title}><Icon className="mb-4 text-cyan-800" size={26}/><h3 className="font-bold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></div>)}</div>
      <p className="mt-10 max-w-3xl text-base leading-7 text-slate-600">The range to work across the stack, the curiosity to apply AI thoughtfully, and the ownership to connect technical decisions with user needs, reliable delivery, and measurable results.</p>
    </div>
  </section>
);
export default SkillSection;
