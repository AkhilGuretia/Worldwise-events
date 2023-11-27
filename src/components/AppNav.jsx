import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import Logo from "./Logo";

const AppNav = () => {
  const LogoSrc = "/app";
  return (
    <nav className={styles.nav}>
      <Logo LogoSrc={LogoSrc} />
      <ul>
        <li>
          <NavLink to="/create-event-form">New Event</NavLink>
        </li>
        <li>
          <NavLink to="/view-events-list">View Events</NavLink>
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
