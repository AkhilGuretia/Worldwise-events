import AppNav from "../components/AppNav";
import styles from "./Homepage.module.css";

const NewEventForm = () => {
  return (
    <main className={styles.homepage}>
      <AppNav />
      You are in the Create Event Form page
    </main>
  );
};

export default NewEventForm;
