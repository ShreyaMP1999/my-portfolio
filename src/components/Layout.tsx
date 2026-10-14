import React, { useState } from "react";
import { Menu, X, ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";

const sections = [
  { id: "about", label: "About" }, { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" }, { id: "skills", label: "Skills" },
  { id: "awards", label: "Leadership" }, { id: "contact", label: "Contact" },
];

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:p-3">Skip to content</a>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container-width flex min-h-16 items-center justify-between gap-4">
          <a href="#top" className="text-2xl font-bold text-slate-950" aria-label="Shreya Padaganur, back to top">SP</a>
          <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
            {sections.map(s => <a className="text-sm font-medium text-slate-700 hover:text-cyan-700" key={s.id} href={`#${s.id}`}>{s.label}</a>)}
          </nav>
          <a href="#contact" className="action action-primary hidden lg:inline-flex">Let's Connect</a>
          <button onClick={() => setOpen(!open)} className="p-2 md:hidden" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-nav">{open ? <X /> : <Menu />}</button>
        </div>
        {open && <nav id="mobile-nav" aria-label="Mobile navigation" className="container-width grid gap-1 border-t border-slate-200 py-3 md:hidden">{sections.map(s => <a key={s.id} className="rounded-md p-3 text-slate-700 hover:bg-cyan-50" href={`#${s.id}`} onClick={() => setOpen(false)}>{s.label}</a>)}</nav>}
      </header>
      <main id="main">{children}</main>
      <footer className="bg-slate-950 py-10 text-slate-300">
        <div className="container-width flex flex-wrap items-center justify-between gap-8">
          <div><p className="text-xl font-bold text-white">{profile.name}</p><p className="mt-2 text-sm">Software Engineer | Full-Stack, AI, Data & Delivery</p><p className="mt-2 text-sm">{profile.location}</p></div>
          <div className="flex gap-3">
            <a className="hero-social" href={profile.github} target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub"><Github size={18}/></a>
            <a className="hero-social" href={profile.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn"><Linkedin size={18}/></a>
            <a className="hero-social" href={`mailto:${profile.email}`} title="Email" aria-label="Email"><Mail size={18}/></a>
            <a className="hero-social" href="#top" title="Back to top" aria-label="Back to top"><ArrowUp size={18}/></a>
          </div>
        </div>
        <p className="container-width mt-8 border-t border-white/10 pt-5 text-xs text-slate-400">Copyright {new Date().getFullYear()} Shreya Padaganur</p>
      </footer>
    </>
  );
};
export default Layout;
