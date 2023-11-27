import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

const AppNav = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="#">New Event</NavLink>
        </li>
        <li>
          <NavLink to="#">View Events</NavLink>
        </li>
        <li>
          <NavLink to="/" className={styles.ctaLink}>
            Log Out
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
