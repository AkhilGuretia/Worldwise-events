import { NavLink } from "react-router-dom";

const PageNav = () => {
  return (
    <nav>
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
