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
    <main className={styles.about}>
      <AppNav />
      <section>
        <div>
          <h2>Event Listing Page</h2>
          {formData && (
            <div>
              <h3>Form Data:</h3>
              <p>Event Name: {formData.eventName}</p>
              <p>Start Date: {formData.startDate}</p>
              {/* Include other form data fields */}
              {formData.eventImage && (
                <div>
                  <h3>Event Image:</h3>
                  <img
                    src={URL.createObjectURL(formData.eventImage)}
                    alt="Event"
                    style={{
                      maxWidth: "48rem",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default EventsList;
