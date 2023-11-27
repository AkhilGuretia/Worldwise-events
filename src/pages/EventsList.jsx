import AppNav from "../components/AppNav";
import styles from "./Homepage.module.css";

const EventsList = () => {
  return (
    <main className={styles.homepage}>
      <AppNav />
      You are in Events Listing page
    </main>
  );
};

export default EventsList;
