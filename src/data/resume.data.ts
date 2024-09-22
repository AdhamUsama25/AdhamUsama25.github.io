import { ISkill, type IResumeInfo } from "../Types/resume.types";
import HTML_icon from "../assets/Skills/HTML.svg";
import CSS_icon from "../assets/Skills/CSS.png";
import JS_icon from "../assets/Skills/JS.png";
import TS_icon from "../assets/Skills/TS.png";
import NextIcon from "../assets/Skills/Next.js.png";
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
      logo: "",
      url: "https://storkyapp.com",
    },
    title: "Software Developer",
    startDate: "Dec 2022",
    endDate: "Dec 2023",
    location: "Tanta, Egypt",
    responsibilities: [
      "- Developed and maintained web applications using HTML, CSS, TypeScript, ReactJS, and NodeJS.",
      "- Conducted thorough testing and debugging to ensure performance and reliability.",
      "- Collaborated with cross-functional teams, including designers and testers, to meet project goals.",
      "- Participated in code reviews to improve code quality and consistency.",
      "- Contributed to the development of a real-time virtual classroom platform with interactive whiteboard and chat features.",
    ],
  },
  {
    organization: {
      name: "StorkyApp",
      logo: "",
      url: "https://storkyapp.com",
    },
    title: "Software Developer Intern",
    startDate: "Jun 2022",
    endDate: "Aug 2023",
    location: "Tanta, Egypt",
    responsibilities: [
      "- Gained hands-on experience in front-end development with HTML5, CSS3, JavaScript, TypeScript, and ReactJS.",
      "- Completed multiple projects and tasks, applying learned skills in a practical setting.",
    ],
  },
];

export const resumeEducation: IResumeInfo[] = [
  {
    organization: {
      name: "Faculty of Engineering - Tanta University",
      url: "https://eng.tanta.edu.eg/",
      logo: "",
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
    name: "NextJS",
    icon: NextIcon,
    proficiency: "Amateur",
    experience: "1 month",
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
