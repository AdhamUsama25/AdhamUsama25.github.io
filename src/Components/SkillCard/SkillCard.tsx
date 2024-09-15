import classes from "./SkillCard.module.scss";
import { ISkill } from "../../Types/resume.types";

const SkillCard = ({ skill }: { skill: ISkill }) => {
  return (
    <div className={classes.SkillCard}>
      <div className={classes.Content}>
        <img src={skill.icon} alt={skill.name} />
        <div className={classes.Details}>
          <h3>{skill.name}</h3>
          <p id="proficiency">{skill.proficiency}</p>
          <p id="experience">{skill.experience}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
