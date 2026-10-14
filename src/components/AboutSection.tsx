import React from "react";
import { Award, Users, Target, Workflow } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";

const AboutSection: React.FC = () => (
  <section id="about" className="section-space bg-white">
    <div className="container-width">
      <SectionHeading title="Engineering depth. A people-first approach." subtitle="Full-stack products, applied AI, dependable data, and ownership from problem to delivery."/>
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-lg leading-8 text-slate-700">{profile.summary}</p>
          <p className="leading-7 text-slate-600">I enjoy the whole path from an ambiguous problem to a working product: listening to clinical stakeholders, shaping backend logic, building the interface, and checking whether the result helps people.</p>
          <div className="border-t border-slate-200 pt-6">
            <h3 className="mb-5 text-2xl font-bold text-slate-950">How I lead work</h3>
            {[
              {icon:Users,title:"Connect with stakeholders",text:"Worked directly with clinical stakeholders to refine pulmonary embolism detection logic, reaching 94% agreement across 167 validated cases."},
              {icon:Target,title:"Own outcomes",text:"Led an enterprise visualization module and improved adoption from 23% to 63% through reusable interfaces and better data aggregation."},
              {icon:Workflow,title:"Improve how teams deliver",text:"Reduced deployment time from 60 to 32 minutes and rollback incidents by 67% through Azure DevOps pipeline improvements."},
            ].map(({icon:Icon,title,text})=><div key={title} className="mb-6 flex items-start gap-3"><Icon size={20} className="mt-1 shrink-0 text-cyan-700"/><div><h4 className="font-semibold text-slate-950">{title}</h4><p className="mt-1 text-sm leading-6 text-slate-600">{text}</p></div></div>)}
          </div>
          <div className="grid grid-cols-3 gap-3 border-y border-slate-200 py-5">
            {[["~4","Years engineering"],["40%","Latency reduced"],["100+","Clinical test cases"]].map(([value,label])=><div key={label}><p className="text-2xl font-bold text-slate-950">{value}</p><p className="mt-1 text-xs text-slate-600">{label}</p></div>)}
          </div>
        </div>
        <div>
          <h3 className="mb-6 text-2xl font-bold text-slate-950">Seven results that define my work</h3>
          <ol className="space-y-4">
            {profile.highlights.map(h=><li key={h.id} className="flex gap-4 rounded-lg bg-slate-50 p-5"><Award size={20} className="mt-1 shrink-0 text-cyan-700"/><div><h4 className="font-semibold text-slate-950">{h.title}</h4><p className="mt-1 text-xs text-cyan-800">{h.organization} | {h.year}</p><p className="mt-2 text-sm leading-6 text-slate-600">{h.description}</p></div></li>)}
          </ol>
        </div>
      </div>
    </div>
  </section>
);
export default AboutSection;
