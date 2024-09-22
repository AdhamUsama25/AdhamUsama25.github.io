import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactButton from "../../Components/ContactButton/ContactButton";
import contacts from "../../data/contacts.data";
import classes from "./Home.module.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useSound from "use-sound";
import pageTurnSound from "../../assets/sounds/page-turn.mp3";
import { useTheme } from "../../ThemeContext";
const Home = () => {
  const isDark = useTheme();

  const contactsToShow = contacts.filter((contact) =>
    ["LinkedIn", "GitHub", "X"].includes(contact.name)
  );

  const [play] = useSound(pageTurnSound, { volume: 0.5 });

  return (
    <main className={[classes.HomePage, isDark && classes.Dark].join(" ")}>
      <div className={[classes.Content, "container"].join(" ")}>
        <div>
          <h1>
            Hi, Im <strong>Adham Usama</strong>
          </h1>
          <p>
            I am a dedicated <span>NextJS</span>/<span>ReactJS</span> Front-end Developer with hands-on
            experience in developing scalable web applications using modern
            technologies like <span>HTML</span>, <span>CSS</span>, <span>TypeScript</span>, <span>ReactJS</span>, and <span>NodeJS</span>. I have
            successfully contributed to several projects, including a real-time
            virtual classroom platform and a book review website. My strengths
            lie in <span>problem-solving</span> ,<span>clean code</span> practices, and collaborating with
            cross-functional teams to deliver high-quality solutions. With a
            passion for front-end development and a fast-learning mindset, I
            thrive in dynamic environments that encourage innovation and
            teamwork.
          </p>
        </div>

        <Link to="/resume" id="view-resume-link" onClick={() => play()}>
          <p>View My Resume</p>
          <FontAwesomeIcon id="view-resume-link-arrow" icon={faArrowRight} />
        </Link>

        <div>
          <ul>
            {contactsToShow.map((contact, _idx) => (
              <li key={_idx}>
                <ContactButton key={_idx} contact={contact} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};
export default Home;
