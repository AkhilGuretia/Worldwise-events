import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          You want to host events and collaborate with the world.
          <br />
          WorldWise Events helps you reach the right audience.
        </h1>
        <h2>
          Events bringing together the right ingredients to generate value for
          the target audience. Over 2 million professional events are hosted for
          various topic, attracting over a billion knowledge audience around the
          world. We aim to ensure these events reach the right audience.
        </h2>
      </section>
    </main>
  );
};

export default Homepage;
