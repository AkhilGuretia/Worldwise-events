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
          Worldwise helps you reach the right audience.
        </h1>
        <h2>
          Events bringing together the right ingredients to generate value for
          the target audience. Over 2 million professional events are hosted for
          various topic, attracting over a billion knowledge audience around the
          world.
        </h2>
        <Link to="/login" className="cta">
          Start Creating Now
        </Link>
      </section>
    </main>
  );
};

export default Homepage;
