import ResumeContact from "../../Components/ResumeContact/ResumeContact";
import contacts from "../../data/contacts.data";
import ResumeInfoCard from "./ExperienceCard/ExperienceCard";
import classes from "./Resume.module.scss";
import {
  resumeWorkExperience,
  resumeEducation,
  resumeSkills,
} from "../../data/resume.data";
const Resume = () => {
  return (
    <main className={classes.ResumePage}>
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
                  <ResumeInfoCard
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
                  <ResumeInfoCard
                    key={_idx}
                    experience={education}
                    isLast={_idx === resumeWorkExperience.length - 1}
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
                <img src={skill.icon} alt={skill.name} />
                <p>{skill.name}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};
export default Resume;
