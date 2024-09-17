import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactButton from "../../Components/ContactButton/ContactButton";
import contacts from "../../data/contacts.data";
import classes from "./Home.module.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useSound from "use-sound";
import pageTurnSound from "../../assets/sounds/page-turn.mp3";
const Home = () => {

  const contactsToShow = contacts.filter((contact) =>
    ["LinkedIn", "GitHub", "X"].includes(contact.name)
  );
  
  const [play] = useSound(pageTurnSound, { volume: 0.5 });

  return (
    <main className={classes.HomePage}>
      <div className={[classes.Content, "container"].join(" ")}>
        <div>
          <h1>
            Hi, Im <strong>Adham Usama</strong>
          </h1>
          <p>
            An ambitious young man from Egypt. I graduated from the{" "}
            <span>faculty of engineering</span> as a computer and software
            engineer and chose to follow my path as a{" "}
            <span>front-end software developer</span> using <span>ReactJS</span>
            . I put all my focus on becoming better and better at software
            development.
          </p>
        </div>

        <Link to="/resume" id="view-resume-link" onClick={()=>play()}>
          <p>View My Resume</p>
          <FontAwesomeIcon id="view-resume-link-arrow" icon={faArrowRight} />
        </Link>

        <div>
          <ul>
            {contactsToShow.map((contact, _idx) => (
              <li>
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
