import { Link } from "react-router-dom";
import navigation from "../../data/navigation.data";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.Header}>
      <div>
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
