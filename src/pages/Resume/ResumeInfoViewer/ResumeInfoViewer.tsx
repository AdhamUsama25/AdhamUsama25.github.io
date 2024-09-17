import { useRef } from "react";
import { IResumeInfo } from "../../../Types/resume.types";
import classes from "./ResumeInfoViewer.module.scss";
import { useTheme } from "../../../ThemeContext";
const ResumeInfoViewer = ({
  experience: info,
  isLast,
}: {
  experience: IResumeInfo;
  isLast: boolean;
}) => {
  const companyLogoRef = useRef<HTMLDivElement>(null);
  const isDark = useTheme();
  const {
    organization,
    title,
    startDate,
    endDate,
    location,
    responsibilities,
  } = info;
  return (
    <div
      className={[classes.ResumeInfoViewer, isDark && classes.Dark].join(" ")}
      style={{
        borderLeft: isLast ? "none" : "2px dashed var(--gray-color)",
      }}
    >
      <div>
        {organization.logo && (
          <div className={classes.Avatar} ref={companyLogoRef}>
            <img src={organization.logo} alt={organization.name} />
          </div>
        )}
      </div>

      <div className={classes.Details}>
        <div className={classes.Info}>
          <div>
            <a
              href={organization.url}
              title={organization.name}
              target="_blank"
            >
              <h3
                onMouseLeave={() =>
                  companyLogoRef.current?.classList.add(
                    classes["scale-out-center"]
                  )
                }
                className={classes.Company}
              >
                {organization.name}
              </h3>
            </a>
            <h2 className={classes.Title}>{title}</h2>
          </div>
          <div>
            <p className={classes.Date}>{`${startDate} - ${endDate}`}</p>
            <p className={classes.Location}>{location}</p>
          </div>
        </div>
        {responsibilities && responsibilities.length > 0 && (
          <ul className={classes.Description}>
            {responsibilities.map((responsibility, idx) => (
              <li key={idx}>{responsibility}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ResumeInfoViewer;
