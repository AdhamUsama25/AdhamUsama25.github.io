import { type IResumeInfo } from "../Types/resume.types";
import storkyLogo from "../assets/storkyApp logo.png";
import facultyLogo from "../assets/Faculty of Engineering - Tanta University Logo.png";

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
      "Developed and maintained robust software applications:",
      "- Participated in writing high-quality code using HTML, CSS, TypeScript, ReactJS, and NodeJS.",
      "- Conducted thorough testing and debugging to guarantee optimal performance.",
      "- Participated in code reviews and provided feedback:",
      "- Engaged in regular code reviews, ensuring adherence to coding standards and best practices.",
      "- Offered constructive feedback to team members, fostering a culture of continuous improvement.",
      "- Collaborated and communicated effectively:",
      "- Worked collaboratively with designers, testers, and others to deliver cohesive and functional software applications.",
      "- Communicated technical concepts to non-technical customers, facilitating a clear understanding of project functionality and new features.",
    ],
  },
];

export const resumeEducation: IResumeInfo[] = [
    {
        organization: {
            name: "Faculty of Engineering - Tanta University",
            url: "https://eng.tanta.edu.eg/",
            logo: facultyLogo
        },
        title: "Bachelor of Computer Engineering & Automatic Control",
        startDate: "Sep 2019",
        endDate: "Jul 2024",
        location: "Tanta, Egypt",
        responsibilities: [],
    }
];