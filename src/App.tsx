// src/app.tsx
import React from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillSection from "./components/SkillSection";
import EducationSection from "./components/EducationSection";
import AwardsSection from "./components/AwardsSection";
import ContactSection from "./components/ContactSection";

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <ExperienceSection />
      <ProjectsSection />
      <SkillSection />
      <EducationSection />
      <AwardsSection />
      <ContactSection />
    </Layout>
  );
};

export default App;
