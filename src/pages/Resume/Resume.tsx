import ResumeContact from "../../Components/ResumeContact/ResumeContact";
import contacts from "../../data/contacts.data";
import ResumeInfoViewer from "./ResumeInfoViewer/ResumeInfoViewer";
import classes from "./Resume.module.scss";
import {
  resumeWorkExperience,
  resumeEducation,
  resumeSkills,
} from "../../data/resume.data";
import SkillCard from "../../Components/SkillCard/SkillCard";
import { useTheme } from "../../ThemeContext";

const Resume = () => {
  const isDark = useTheme();

  return (
    <main className={[classes.ResumePage, isDark&& classes.Dark].join(" ")}>
      <div className={[classes.Content, "container"].join(" ")}>
        <ul className={classes.Contacts}>
          {contacts.map((contact, _idx) => (
            <li>
              <ResumeContact key={_idx} contact={contact} />
            </li>
          ))}
        </ul>

        <section id="experience" className={classes.ResumeSection}>
          <h1 className={classes.SectionTitle}>Professional Experience</h1>

          <div>
            <ul>
              <li>
                {resumeWorkExperience.map((experience, _idx) => (
                  <ResumeInfoViewer
                    key={_idx}
                    experience={experience}
                    isLast={_idx === resumeWorkExperience.length - 1}
                  />
                ))}
              </li>
            </ul>
          </div>
        </section>

        <section id="education" className={classes.ResumeSection}>
          <h1 className={classes.SectionTitle}>Education</h1>

          <div>
            <ul>
              <li>
                {resumeEducation.map((education, _idx) => (
                  <ResumeInfoViewer
                    key={_idx}
                    experience={education}
                    isLast={_idx === resumeEducation.length - 1}
                  />
                ))}
              </li>
            </ul>
          </div>
        </section>

        <section id="skills" className={classes.ResumeSection}>
          <h1 className={classes.SectionTitle}>Skills</h1>

          <ul className={classes.Skills}>
            {resumeSkills.map((skill, _idx) => (
              <li key={_idx}>
                <SkillCard skill={skill} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};
export default Resume;
