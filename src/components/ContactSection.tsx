import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";

const ContactSection: React.FC = () => {
  const [draftRequested,setDraftRequested]=useState(false);
  const submit=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const fields=new FormData(event.currentTarget);
    const subject=encodeURIComponent(String(fields.get("subject")||"Portfolio inquiry"));
    const body=encodeURIComponent(`${fields.get("message")}\n\nFrom: ${fields.get("name")}\nEmail: ${fields.get("email")}`);
    window.location.href=`mailto:${profile.email}?subject=${subject}&body=${body}`;
    setDraftRequested(true);
  };
  return <section id="contact" className="section-space border-t border-slate-200 bg-white">
    <div className="container-width">
      <SectionHeading title="Let's build something useful" subtitle="Open to full-stack, AI, data, and technical delivery opportunities. Based in San Ramon, CA, and open to relocation."/>
      <div className="grid items-start gap-12 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-bold text-slate-950">Get in touch</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">Most recently, Software Engineer at Bio-Rad Laboratories (March-September 2026). I enjoy opportunities where I can build, collaborate, and take ownership of outcomes.</p>
          <div className="mt-7 space-y-5">
            <a className="flex items-center gap-3 text-sm text-cyan-800" href={`mailto:${profile.email}`}><Mail size={20}/><span className="break-all">{profile.email}</span></a>
            <a className="flex items-center gap-3 text-sm text-slate-700" href={`tel:${profile.phone.replace(/[^+\d]/g,"")}`}><Phone size={20}/>{profile.phone}</a>
            <p className="flex items-start gap-3 text-sm text-slate-600"><MapPin size={20} className="shrink-0"/>{profile.location}</p>
          </div>
          <div className="mt-7 flex gap-3">
            <a className="action action-outline" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={16}/>GitHub</a>
            <a className="action action-outline" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={16}/>LinkedIn</a>
          </div>
        </div>
        <form onSubmit={submit} className="space-y-5 rounded-lg border border-slate-200 p-6">
          <h3 className="text-xl font-bold text-slate-950">Start a conversation</h3>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">Your name<input className="mt-2 block min-h-11 w-full rounded-md border border-slate-300 px-3 py-2" name="name" autoComplete="name" required maxLength={120}/></label>
            <label className="block text-sm font-medium text-slate-700">Email address<input className="mt-2 block min-h-11 w-full rounded-md border border-slate-300 px-3 py-2" name="email" type="email" autoComplete="email" required/></label>
          </div>
          <label className="block text-sm font-medium text-slate-700">Subject<input className="mt-2 block min-h-11 w-full rounded-md border border-slate-300 px-3 py-2" name="subject" required maxLength={200}/></label>
          <label className="block text-sm font-medium text-slate-700">Message<textarea className="mt-2 block w-full resize-y rounded-md border border-slate-300 px-3 py-2" name="message" rows={5} required maxLength={5000}/></label>
          <button type="submit" className="action action-primary w-full"><Send size={16}/>Open Email Draft</button>
          {draftRequested&&<p role="status" className="text-sm leading-6 text-cyan-800">Your email app was requested to open a draft. You can also contact {profile.email} directly.</p>}
        </form>
      </div>
    </div>
  </section>;
};
export default ContactSection;
