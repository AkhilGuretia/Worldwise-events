import PageNav from "../components/PageNav";
import styles from "./AboutEvents.module.css";
import { Link } from "react-router-dom";

const AboutEventListings = () => {
  return (
    <main className={styles.about}>
      <PageNav />

      <section>
        <div>
          <h2>
            Sounds fun right?
            <br />
          </h2>
          <p>Just create an account or Login to view events.</p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />

        <Link
          to="/login"
          className="cta"
          style={{ position: "relative", top: "-200px", textAlign: "center" }}
        >
          Login now
        </Link>
      </section>
    </main>
  );
};

export default AboutEventListings;
