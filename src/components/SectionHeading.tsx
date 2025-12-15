// src/components/SectionHeading.tsx
import React from "react";

type Props = {
  id?: string;
  title: string;
  subtitle?: string;
};

const SectionHeading: React.FC<Props> = ({ id, title, subtitle }) => {
  return (
    <header id={id} className="mb-8">
      <h2 className="text-2xl md:text-3xl font-semibold gradient-text">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-1 text-sm text-slate-300 max-w-xl">{subtitle}</p>
      )}
    </header>
  );
};

export default SectionHeading;
