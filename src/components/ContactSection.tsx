// src/components/ContactSection.tsx
import React from "react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-12 border-t border-slate-800">
      <SectionHeading
        title="Let’s Connect"
        subtitle="Open to Software Engineer, Full-Stack, and AI-in-Healthcare roles."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <div className="hover-card rounded-xl border border-slate-800 bg-slate-900/70 p-4">
          <h3 className="text-sm font-semibold mb-1 text-slate-50">Email</h3>
          <a
            href={`mailto:${profile.email}`}
            className="text-xs md:text-sm text-sky-300 hover:underline break-all"
          >
            {profile.email}
          </a>
        </div>

        <div className="hover-card rounded-xl border border-slate-800 bg-slate-900/70 p-4">
          <h3 className="text-sm font-semibold mb-1 text-slate-50">Phone</h3>
          <p className="text-xs md:text-sm text-slate-300">{profile.phone}</p>
        </div>

        <div className="hover-card rounded-xl border border-slate-800 bg-slate-900/70 p-4 space-y-1.5">
          <h3 className="text-sm font-semibold text-slate-50">Links</h3>
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              className="block text-xs md:text-sm text-sky-300 hover:underline"
            >
              LinkedIn
            </a>
          )}
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              className="block text-xs md:text-sm text-sky-300 hover:underline"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
