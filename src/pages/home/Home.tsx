import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialMediaButton from "../../Components/SocialMediaButton/SocialMediaButton";
import socialMedia from "../../data/socialMedia.data";
import classes from "./Home.module.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";

const Home = () => {
  return (
    <main className={classes.HomePage}>
      <Header/>
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

        <Link to="/resume" id="view-resume-link">
          <p>View My Resume</p>{" "}
          <FontAwesomeIcon id="view-resume-link-arrow" icon={faArrowRight} />
        </Link>

        <div>
          <ul>
            {socialMedia.map((socialMedia, _idx) => (
              <li>
                <SocialMediaButton key={_idx} socialMedia={socialMedia} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};
export default Home;
