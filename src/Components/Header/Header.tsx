import { Link } from "react-router-dom";
import navigation from "../../data/navigation.data";
import classes from "./Header.module.scss";
import myLogo from "../../assets/AU.svg";

const Header = () => {
  return (
    <header className={classes.Header}>
      <div>

        <Link to={"/"} className={classes.Logo} title="Adham Usama">
          <img src={myLogo} alt="Adham Usama"></img>
        </Link>
        <nav>
          <ul>
            {navigation.map((nav, _idx) => (
              <li key={_idx}>
                <Link to={nav.link}>{nav.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
