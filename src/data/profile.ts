import portfolio from "./portfolio.json";

export type ExperienceItem = { company: string; role: string; location: string; period: string; bullets: string[]; tags: string[] };
export type ProjectItem = { name: string; description: string; techStack: string[]; link?: string; highlightTags: string[]; details: string; features: string[]; impact: string; kind: string; workflow: string[]; evaluation: string };
export type EducationItem = { school: string; degree: string; location: string; period: string; gpa?: string };
export type AwardItem = { title: string; org: string; year: string };
export type SkillCategory = { name: string; skills: string[] };

export const profile = {
  ...portfolio.personalInfo,
  summary: portfolio.personalInfo.bio,
  resumeUrl: "",
  experience: portfolio.experience.map(exp => ({
    company: exp.company, role: exp.position, location: exp.location,
    period: exp.duration, bullets: exp.responsibilities, tags: exp.technologies,
  })) as ExperienceItem[],
  projects: portfolio.projects.map(p => ({
    name: p.title, description: p.description, techStack: p.technologies,
    link: p.github || undefined, highlightTags: p.focus, details: p.long_description,
    features: p.features, impact: p.impact, kind: p.kind,
    workflow: "workflow" in p ? p.workflow : [], evaluation: "evaluation" in p ? p.evaluation : "",
  })) as ProjectItem[],
  education: [
    ...portfolio.education.map(ed => ({school: ed.school, degree: ed.degree, location: ed.location, period: ed.duration, gpa: ed.gpa})),
    {school: "N. B. Navale Sinhgad College of Engineering", degree: "B.E. in Computer Science", location: "India", period: "Graduated May 2021", gpa: "3.8/4.0"},
  ] as EducationItem[],
  awards: [
    {title: "Vice President of DEI, Student Government Association", org: "Illinois Institute of Technology", year: "2024-2025"},
    {title: "Student of the Year", org: "N. B. Navale Sinhgad College of Engineering", year: "2020-2021"},
    {title: "Student Body President", org: "N. B. Navale Sinhgad College of Engineering", year: "2019-2020"},
  ] as AwardItem[],
  skills: portfolio.skills.map(s => ({name: s.category, skills: s.skills})) as SkillCategory[],
  highlights: portfolio.achievements,
};
  
