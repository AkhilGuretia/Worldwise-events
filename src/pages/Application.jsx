import AppNav from "../components/AppNav";
import styles from "./Homepage.module.css";

const Application = () => {
  return (
    <main className={styles.homepage}>
      <AppNav />
      <section>
        <h1>
          Welcome back!
          <br />
          use the above navigation to create or view your events.
        </h1>
      </section>
    </main>
  );
};

export default Application;
