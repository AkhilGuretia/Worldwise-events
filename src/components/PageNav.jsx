import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

const PageNav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/create-event-form">New Event</NavLink>
        </li>
        <li>
          <NavLink to="/events-listing">View Events</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
