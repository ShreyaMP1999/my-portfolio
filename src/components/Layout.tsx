// src/components/Layout.tsx
import React from "react";

const sections = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" },
];

type LayoutProps = React.PropsWithChildren;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-950 bg-grid bg-[length:32px_32px] text-slate-50">
      {/* top nav */}
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-300">
            Shreya Padaganur
          </span>
          <nav className="hidden gap-4 text-xs md:flex">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-slate-300 hover:text-sky-300 transition"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* main */}
      <main className="mx-auto max-w-5xl px-4 pb-16 pt-10">{children}</main>

      {/* footer */}
      <footer className="border-t border-slate-800 py-5 text-center text-[11px] text-slate-500">
        © {new Date().getFullYear()} Shreya Padaganur · Built with React, Vite,
        and Tailwind CSS.
      </footer>
    </div>
  );
};

export default Layout;
