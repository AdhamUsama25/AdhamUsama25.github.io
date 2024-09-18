import { Link } from "react-router-dom";
import navigation from "../../data/navigation.data";
import classes from "./Header.module.scss";
import myLogo from "../../assets/AU.svg";
import useSound from "use-sound";
import pageTurnSound from "../../assets/sounds/page-turn.mp3";
import lightsSound from "../../assets/sounds/Switch.wav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme, useThemeUpdate } from "../../ThemeContext";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
const Header = () => {
  const location = window.location.href;
  const locationArray = location.split("/");
  const path = locationArray[locationArray.length - 1];
  const isHome = path === "";
  const [play] = useSound(pageTurnSound, { volume: 0.5 });
  const [playLightsSound] = useSound(lightsSound, {
    volume: 0.5,
    sprite: {
      lightsOn: [0, 1000],
      lightsOff: [2100, 1000],
    },
  });

  const isDark = useTheme();
  const toggleDarkTheme = useThemeUpdate();

  const handleThemeChange = () => {
    toggleDarkTheme();
    playLightsSound({ id: isDark ? "lightsOn" : "lightsOff" });
  };

  const handleLogoClick = () => {
    if (!isHome) play();
  };

  return (
    <header className={[classes.Header, isDark && classes.Dark].join(" ")}>
      <div className={classes.HeaderContent}>
        <Link
          to={"/"}
          className={classes.Logo}
          title="Adham Usama"
          onClick={handleLogoClick}
        >
          <img src={myLogo} alt="Adham Usama"></img>
        </Link>
        <div className={classes.Actions}>
          <button
            onClick={handleThemeChange}
            title={isDark ? "Light mode" : "Dark mode"}
          >
            <FontAwesomeIcon icon={isDark ? faLightbulb : faMoon} />
          </button>
          <nav>
            <ul>
              {navigation.map(
                (nav, _idx) =>
                  nav.link !== path && (
                    <li key={_idx}>
                      <Link to={"/" + nav.link} onClick={() => play()}>
                        {nav.name}
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
