import { ISkill, type IResumeInfo } from "../Types/resume.types";
import storkyLogo from "../assets/logos/StorkyApp logo.png";
import facultyLogo from "../assets/logos/Faculty of Engineering - Tanta University Logo.png";
import HTML_icon from "../assets/Skills/HTML.svg";
import CSS_icon from "../assets/Skills/CSS.png";
import JS_icon from "../assets/Skills/JS.png";
import TS_icon from "../assets/Skills/TS.png";
import React_icon from "../assets/Skills/React.png";
import Redux_icon from "../assets/Skills/Redux.png";
import Sass_icon from "../assets/Skills/Sass.png";
import Tailwind_icon from "../assets/Skills/Tailwind.png";
import NodeJS_icon from "../assets/Skills/NodeJS.svg";
import Express_icon from "../assets/Skills/ExpressJS.png";

export const resumeWorkExperience: IResumeInfo[] = [
  {
    organization: {
      name: "StorkyApp",
      logo: storkyLogo,
      url: "https://storkyapp.com",
    },
    title: "Software Developer",
    startDate: "Dec 2022",
    endDate: "Dec 2023",
    location: "Tanta, Egypt",
    responsibilities: [
      "- Developed and maintained robust software applications.",
      "- Participated in writing high-quality code using HTML, CSS, TypeScript, ReactJS, and NodeJS.",
      "- Conducted thorough testing and debugging to guarantee optimal performance.",
      "- Engaged in regular code reviews, ensuring adherence to coding standards and best practices.",
      "- Offered constructive feedback to team members, fostering a culture of continuous improvement.",
      "- Worked collaboratively with designers, testers, and others to deliver cohesive and functional software applications.",
      "- Communicated technical concepts to non-technical customers, facilitating a clear understanding of project functionality and new features.",
    ],
  },
  {
    organization: {
      name: "StorkyApp",
      logo: storkyLogo,
      url: "https://storkyapp.com",
    },
    title: "Software Developer Intern",
    startDate: "Jun 2022",
    endDate: "Aug 2023",
    location: "Tanta, Egypt",
    responsibilities: [
      "- I followed the assigned learning path including HTML5, CSS3, JavaScript, TypeScript, and ReactJS.",
      "- I Successfully applied the acquired knowledge to the required task.",
    ],
  },
];

export const resumeEducation: IResumeInfo[] = [
  {
    organization: {
      name: "Faculty of Engineering - Tanta University",
      url: "https://eng.tanta.edu.eg/",
      logo: facultyLogo,
    },
    title: "Bachelor of Computer Engineering & Automatic Control",
    startDate: "Sep 2019",
    endDate: "Jul 2024",
    location: "Tanta, Egypt",
    responsibilities: [],
  },
];

export const resumeSkills: ISkill[] = [
  {
    name: "HTML",
    icon: HTML_icon,
    proficiency: "Proficient",
    experience: "2 years",
  },
  {
    name: "CSS",
    icon: CSS_icon,
    proficiency: "Proficient",
    experience: "2 years",
  },
  {
    name: "JavaScript",
    icon: JS_icon,
    proficiency: "Proficient",
    experience: "2 years",
  },
  {
    name: "TypeScript",
    icon: TS_icon,
    proficiency: "Proficient",
    experience: "2 years",
  },
  {
    name: "ReactJS",
    icon: React_icon,
    proficiency: "Proficient",
    experience: "2 years",
  },
  {
    name: "Redux",
    icon: Redux_icon,
    proficiency: "Proficient",
    experience: "2 years",
  },
  {
    name: "Sass",
    icon: Sass_icon,
    proficiency: "Competent",
    experience: "5 months",
  },
  {
    name: "Tailwind CSS",
    icon: Tailwind_icon,
    proficiency: "Proficient",
    experience: "5 months",
  },
  {
    name: "NodeJS",
    icon: NodeJS_icon,
    proficiency: "Competent",
    experience: "2 years",
  },
  {
    name: "ExpressJS",
    icon: Express_icon,
    proficiency: "Competent",
    experience: "2 years",
  },
];
