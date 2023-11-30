import { useEffect } from "react";
import AppNav from "../components/AppNav";
import styles from "./AboutEvents.module.css";
import { useLocation } from "react-router-dom";

const EventsList = () => {
  const location = useLocation();
  const formData = location.state?.formData || null;

  useEffect(() => {
    console.log("Location state:", location.state);
    console.log("Form data:", formData);
  }, [location.state, formData]);

  return (
    <main className={styles.eventCard}>
      <AppNav />
      <section>
        <div>
          <h2>Events</h2>
          {formData && (
            <div className={styles.card}>
              <div>
                <h1>{formData.startTime}</h1>
                <h1>{formData.eventName}</h1>
              </div>

              {/* Include other form data fields */}
              {formData.eventImage && (
                <img
                  src={URL.createObjectURL(formData.eventImage)}
                  alt="Event"
                  style={{
                    maxWidth: "45%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default EventsList;
