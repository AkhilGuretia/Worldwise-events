import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          You host events and collaborate with the world.
          <br />
        </h1>
        <h2>Worldwise helps you reach the right audience.</h2>
        <Link to="/login" className="cta">
          Start collaborating now
        </Link>
      </section>
    </main>
  );
};

export default Homepage;
