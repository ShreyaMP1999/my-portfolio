import React from "react";
type Props = { id?: string; title: string; subtitle?: string };
const SectionHeading: React.FC<Props> = ({id,title,subtitle}) => (
  <header id={id} className="mb-10 max-w-3xl">
    <h2 className="text-3xl font-bold leading-tight text-slate-950 md:text-4xl">{title}</h2>
    {subtitle && <p className="mt-4 text-base leading-7 text-slate-600">{subtitle}</p>}
  </header>
);
export default SectionHeading;
