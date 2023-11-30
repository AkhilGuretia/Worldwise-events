import { useEffect, useState } from "react";
import AppNav from "../components/AppNav";
import styles from "./AboutEvents.module.css";
import { useLocation } from "react-router-dom";

const EventsList = () => {
  const location = useLocation();
  const [formData, setFormData] = useState(location.state?.formData || null);

  useEffect(() => {
    // Check if formData is not present in state but is in local storage
    if (!formData) {
      const storedData = localStorage.getItem("formData");
      if (storedData) {
        setFormData(JSON.parse(storedData));
      }
    } else {
      // Convert image to data URL and store it in formData
      if (formData.eventImage instanceof File) {
        const reader = new FileReader();

        reader.onload = (e) => {
          const dataURL = e.target.result;
          setFormData((prevData) => ({
            ...prevData,
            eventImageLocalStorage: dataURL,
          }));
        };

        reader.readAsDataURL(formData.eventImage);
      }

      // Store formData in local storage
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [formData]);

  return (
    <main className={styles.eventCard}>
      <AppNav />
      <section>
        <div>
          <h2>Events</h2>
          {formData && (
            <div className={styles.card}>
              <div>
                <h1>
                  {formData.startTime} on {formData.startDate}
                </h1>
                <h1>{formData.eventName}</h1>

                <p>{formData.location}</p>
                <p>{formData.visibility}</p>
              </div>

              {/* Include other form data fields */}
              {formData.eventImageLocalStorage && (
                <img
                  src={formData.eventImageLocalStorage}
                  alt="Event"
                  style={{
                    maxWidth: "45%",
                    objectFit: "cover",
                    borderRadius: "10px",
                    maxHeight: "15rem",
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
