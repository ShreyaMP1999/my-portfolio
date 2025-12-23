// src/data/profile.ts

export type ExperienceItem = {
    company: string;
    role: string;
    location: string;
    period: string;
    bullets: string[];
    tags: string[];
  };
  
  export type ProjectItem = {
    name: string;
    description: string;
    techStack: string[];
    link?: string;
    highlightTags: string[];
  };
  
  export type EducationItem = {
    school: string;
    degree: string;
    location: string;
    period: string;
    gpa?: string;
  };
  
  export type AwardItem = {
    title: string;
    org: string;
    year: string;
  };
  
  export type SkillCategory = {
    name: string;
    skills: string[];
  };
  
  export const profile = {
    name: "Shreya Padaganur",
    title: "Software Engineer | Full-Stack Developer ",
    location: "United States",
    email: "shreyamp1999@gmail.com",
    phone: "+1 (312) 774-9512",
    linkedin: "https://www.linkedin.com/in/shreyamp/", // TODO: real link
    github: "https://github.com/ShreyaMP1999",         // TODO: real link
    resumeUrl: "https://drive.google.com/file/d/13z3i3FMg9YNFlpdfuqTUgA0ZA6PC9xSY/view?usp=sharing", //  PDF /public
  
    summary:
      "Full-stack engineer with 3+ years building AI-driven healthcare, analytics, and cloud-native systems using Python, FastAPI, React, .NET Core, and BigQuery.",
  
    experience: [
      {
        company: "Leap of Faith Technologies",
        role: "Software Development Consultant",
        location: "Chicago, USA",
        period: "May 2024 – Dec 2025",
        tags: ["Python", "BigQuery", "NLP", "LLMs", "Healthcare"],
        bullets: [
          "Automated CMS MIPS ACEP22 scoring by building a Python–BigQuery–Docker pipeline integrating IMO NLP and GPT-4 scoring logic, using a consolidated Uber Script to process 10,000+ ED notes with higher accuracy and ~90% lower cost per note.",
          "Built an end-to-end eligibility detection engine using Python, SQL, LLM prompts, REST APIs, JSON workflows, and developed backend logic to validate demographics, pregnancy status, and identify CTPA orders in ED notes, achieving 167 validated PE-related matches.",
          "Developed a Python-based reporting service integrated with APIs, BigQuery, and automated anomaly detection, engineering data parsing logic, and follow-up validation rules to improve ED post-visit workflows, resulting in a reduction in missed follow-ups.",
          "Led a 6-member team to design a Coursera-ready Foundational Health Informatics and Medicine course, building FHIR, NLP, and analytics labs using Python, Postman, FastAPI, and real clinical datasets, adding automated PyTest + JUnit tests, resulting in a scalable curriculum adopted by multiple institutions and a certificate-automation system supporting 100+ learners.",
          "Supported 150+ students in Digital Healthcare Informatics & AI, refining hands-on labs (HAPI FHIR, HL7, NLP, OMOP ETL) and debugging workflows using Python, SQL, Postman, and FastAPI while coordinating weekly improvements with faculty, leading to smoother lab execution and consistently high course satisfaction scores.",
        ],
      },
      {
        company: "Accenture Solutions Pvt. Limited",
        role: "Full Stack Engineering Analyst",
        location: "India",
        period: "Aug 2021 – Jul 2023",
        tags: ["Angular", ".NET Core", "SQL Server", "Mendix"],
        bullets: [
          "Built and delivered core modules of the 360° Client Insights platform by developing scalable Angular and JavaScript UI components, .NET Core APIs, and optimized SQL Server schemas, resulting in faster client-data retrieval and adoption across 200+ internal users.",
          "Led the end-to-end development of a high-impact analytics graph feature by defining data requirements with product leads, engineering a reusable Angular graph module using dynamic databinding and ChartJS/D3 integrations, AJAX calls, implementing API aggregation logic in .NET Core, and optimizing payload normalization in SQL Server, which increased insights-tool usage by 40% across account teams.",
          "Owned the UI modernization effort by migrating complex Angular workflows into Mendix low-code pages and leading cross-team demos to refine business requirements, accelerating prototype turnaround times by 2 and improving stakeholder alignment.",
          "Designed and implemented a custom PDF microservice using OOP principles in .NET Core and SharpCorePDF to overcome Mendix’s limitations, enabling branded, pixel-perfect documents and reducing manual reporting time by almost 80%.",
          " Resolved 70+ critical defects across Auto Commercial Lines by conducting deep root-cause analysis using unit tests + Selenium UI tests, Trace Monitor and Manuscripts tools, resulting in greater system stability and smoother customer operations.",
          "Championed code-quality practices by conducting peer reviews, introducing structured unit tests, and collaborating with DevOps to streamline CI workflows, reducing production defects by approximately 25% and improving release confidence for the entire team."
        ],
      },
    ] as ExperienceItem[],
  
    projects: [
      {
        name: "Micro Observer(Mini DataDog) – Realtime App Monitoring",
        description:
          "Realtime dashboard for CPU, memory, alerting, and service health using React, Vite, WebSockets, and Node.js backend. Includes dynamic charts, alert acknowledgment and deployment-ready UI.",
        techStack: ["React", "TypeScript", "Node.js", "WebSockets", "Nivo"],
        link: "https://github.com/ShreyaMP1999/micro-observer", // optional
        highlightTags: ["FrontEnd", "Monitoring", "DevTools"]
      },
      {
        name: "Distributed Task Scheduler – Fault-Tolerant Job Orchestration",
        description:
          "Distributed task scheduling system with priority queues, automatic retries, dead-letter queue (DLQ), and stuck-task recovery. Built with FastAPI + Celery workers using Redis as broker and PostgreSQL for durable task state, packaged with Docker Compose for one-command local setup.",
        techStack: ["Python", "FastAPI", "Celery", "Redis", "PostgreSQL", "Docker Compose"],
        link: "https://github.com/ShreyaMP1999/distributed-task-scheduler", // update if different
        highlightTags: ["Backend", "DistributedSystems", "Reliability"]
      },   
      {
        name: "Mindful_chatbot – Mental Health Assistant",
        description:
          "Conversational assistant that triages mental-health intent, performs sentiment analysis, and routes users to curated resources, built with FastAPI, OpenAI, and a responsive React UI.",
        techStack: ["Python", "FastAPI", "OpenAI", "React", "SQLite"],
        link: "https://github.com/ShreyaMP1999/mindful_chatbot1-main",
        highlightTags: ["AI", "Healthcare", "Full-Stack"],
      },
      {
        name: "Intelligent Customer Support Chatbot",
        description:
          "An AI-powered customer support chatbot built with Next.js, MongoDB, and OpenAI GPT-4o/GPT-4o-mini.",
        techStack: ["Next.js 14, React 18, Tailwind CSS, MongoDB"],
        link: "https://github.com/ShreyaMP1999/IntelligentCustomerSupport",
        highlightTags: ["Backend", "API", "Healthcare"],
      },
      {
        name: "Personal Finance Tracker",
        description:
          "Secure personal finance dashboard with JWT auth, categorized spending, and analytics charts.",
        techStack: ["React", "Node.js", "Express", "MongoDB"],
        link: "https://github.com/ShreyaMP1999/Personal-Finance-tracker",
        highlightTags: ["Full-Stack", "FinTech"],
      }
    ] as ProjectItem[],
  
    education: [
      {
        school: "Illinois Institute of Technology",
        degree: "M.S. in Computer Science",
        location: "Chicago, IL, USA",
        period: "Graduated May 2025",
        gpa: "3.5 / 4.0",
      },
      {
        school: "N. B. Navale Sinhgad College of Engineering",
        degree: "B.E. in Computer Science",
        location: "India",
        period: "Graduated May 2021",
        gpa: "3.8 / 4.0",
      },
    ] as EducationItem[],
  
    awards: [
      {
        title: "Vice President of DEI, Student Government Association",
        org: "Illinois Institute of Technology",
        year: "2024 – 2025",
      },
      {
        title: "Student of the Year",
        org: "N. B. Navale Sinhgad College of Engineering",
        year: "2020 – 2021",
      },
      {
        title: "Student Body President",
        org: "N. B. Navale Sinhgad College of Engineering",
        year: "2019 – 2020",
      },
    ] as AwardItem[],
  
    skills: [
      {
        name: "Programming Languages",
        skills: [
          "Python",
          "Java",
          "TypeScript",
          "JavaScript",
          "C++",
          "C#",
          ".NET Core","SQL",
        ],
      },
      {
      name: "Frontend Technologies",
        skills: [
          "React", "Angular", "HTML5", "CSS3",
        ],
      },
      {
        name: "Backend and APIs",
          skills: [
            "FastAPI", "Django", ".NET Core", "RESTful APIs", "GraphQL",
          ],
        },
      {
        name: "Data",
        skills: [
          "PostgreSQL",
          "MySQL",
          "SQLite",
          "Google BigQuery",
        ],
      },
      {
        name: "Cloud & DevOps",
        skills: ["AWS (EC2, S3, Lambda, IAM, ELB)", "Docker", "Linux", "CI/CD Pipelines (GitHub Actions)"],
      },
      {
        name: "AI, Data & Healthcare",
        skills: [
          "Prompt Engineering",
          "LLM-based Integrations",
          "Healthcare Informatics",
          "NLP Pipelines",
        ],
      },
      {
        name: "Testing and Tools",
        skills: [
          "PyTest", "JUnit", "Selenium", "Git", "GitHub", "Postman", "VS Code", "JIRA",
        ],
      },
    ] as SkillCategory[],
  };
  