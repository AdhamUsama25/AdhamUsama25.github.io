import classes from "./SkillCard.module.scss";
import { ISkill } from "../../Types/resume.types";
import wooshSound from "../../assets/sounds/Woosh.wav";
import useSound from "use-sound";
import { useTheme } from "../../ThemeContext";

const SkillCard = ({ skill }: { skill: ISkill }) => {
  const [play] = useSound(wooshSound, { volume: 0.3 });
  const isDark = useTheme();
  return (
    <div
      className={[classes.SkillCard, isDark && classes.Dark].join(" ")}
      onMouseEnter={() => play()}
    >
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
