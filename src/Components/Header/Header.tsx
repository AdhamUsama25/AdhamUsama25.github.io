import { Link, useLocation } from "react-router-dom";
import navigation from "../../data/navigation.data";
import classes from "./Header.module.scss";
import myLogo from "../../assets/AU.svg";
import useSound from "use-sound";
import pageTurnSound from "../../assets/sounds/page-turn.mp3";
const Header = () => {
  const location = useLocation();
  console.log(location.pathname);
  const [play] = useSound(pageTurnSound, { volume: 0.5 });

  return (
    <header className={classes.Header}>
      <div>
        <Link to={"/"} className={classes.Logo} title="Adham Usama">
          <img src={myLogo} alt="Adham Usama"></img>
        </Link>
        <nav>
          <ul>
            {navigation.map(
              (nav, _idx) =>
                nav.link !== location.pathname && (
                  <li key={_idx}>
                    <Link to={nav.link} onClick={()=>play()}>{nav.name}</Link>
                  </li>
                )
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
