import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import Logo from "./Logo";

const PageNav = () => {
  const LogoSrc = "/";
  return (
    <nav className={styles.nav}>
      <Logo LogoSrc={LogoSrc} />
      <ul>
        <li>
          <NavLink to="/about-create-events">New Event</NavLink>
        </li>
        <li>
          <NavLink to="/about-events-listing">View Events</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
