import PageNav from "../components/PageNav";
import styles from "./AboutEvents.module.css";
import { Link } from "react-router-dom";

const CreateEventForm = () => {
  return (
    <main className={styles.about}>
      <PageNav />

      <section>
        <img
          src="/img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>Login to Create Events and unleash the power our platform</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>

          <Link to="/login" className="cta">
            Login now
          </Link>
        </div>
      </section>
    </main>
  );
};

export default CreateEventForm;
