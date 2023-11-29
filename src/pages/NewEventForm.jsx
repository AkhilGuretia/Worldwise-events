import { useReducer } from "react";
import AppNav from "../components/AppNav";
import styles from "./EventForm.module.css";

const initialState = {
  eventName: "",
  startDate: "",
  startTime: "",
  endDate: "",
  endTime: "",
  location: "",
  ticketsType: "free",
  requireApproval: "no",
  capacity: "unlimited",
  visibility: "public",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_EVENTNAME":
      return { ...state, eventName: action.payload };
    case "UPDATE_STARTDATE":
      return { ...state, startDate: action.payload };
    case "UPDATE_STARTTIME":
      return { ...state, startTime: action.payload };
    case "UPDATE_ENDDATE":
      return { ...state, endDate: action.payload };
    case "UPDATE_ENDTIME":
      return { ...state, endTime: action.payload };
    case "UPDATE_LOCATION":
      return { ...state, location: action.payload };
    case "UPDATE_TICKETSTYPE":
      return { ...state, ticketsType: action.payload };
    case "UPDATE_REQUIREAPPROVAL":
      return { ...state, requireApproval: action.payload };
    case "UPDATE_CAPACITY":
      return { ...state, capacity: action.payload };
    case "UPDATE_VISIBILITY":
      return { ...state, visibility: action.payload };
    default:
      return state;
  }
};
const NewEventForm = () => {
  const [formData, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: `UPDATE_${name.toUpperCase()}`, payload: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  return (
    <main className={styles.about}>
      <h3>Create a New Event</h3>

      <AppNav />

      <form className={styles.form} onSubmit={handleFormSubmit}>
        <div className={styles.row}>
          <label htmlFor="eventName">Event Name</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            placeholder="Event Name"
            value={formData.eventName}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.gridContainer}>
          <div className={styles.row}>
            <label htmlFor="startDate">Event Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.row}>
            <label htmlFor="startTime">Event Start Time</label>
            <input
              type="time"
              id="startTime"
              name="startTime"
              value={formData.startTime}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.row}>
            <label htmlFor="endDate">Event End Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.row}>
            <label htmlFor="endTime">Event End Time</label>
            <input
              type="time"
              id="endTime"
              name="endTime"
              value={formData.endTime}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className={styles.row}>
          <label htmlFor="location">Event Location</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Offline location or virtual link"
            value={formData.location}
            onChange={handleInputChange}
          />
        </div>
        <h1>Event Options</h1>

        <div className={styles.gridContainer}>
          <div className={styles.row}>
            <label htmlFor="ticketsType">Tickets</label>
            <select
              id="ticketsType"
              name="ticketsType"
              value={formData.ticketsType}
              onChange={handleInputChange}
            >
              <option value="free">Free</option>
              <option value="paid">Paid</option>
            </select>
          </div>

          <div className={styles.row}>
            <label htmlFor="requireApproval">Require Approval</label>
            <select
              id="requireApproval"
              name="requireApproval"
              value={formData.requireApproval}
              onChange={handleInputChange}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>

          <div className={styles.row}>
            <label htmlFor="capacity">Capacity</label>
            <select
              id="capacity"
              name="capacity"
              value={formData.capacity}
              onChange={handleInputChange}
            >
              <option value="unlimited">Unlimited</option>
              <option value="limited">Limited</option>
            </select>
          </div>

          <div className={styles.row}>
            <label htmlFor="visibility">Visibility</label>
            <select
              id="visibility"
              name="visibility"
              value={formData.visibility}
              onChange={handleInputChange}
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
        </div>

        <div className={styles.row}>
          <label htmlFor="eventImage">Event Image</label>
          <input
            type="file"
            id="eventImage"
            name="eventImage"
            value={formData.eventimage}
            accept="image/*"
            onChange={handleInputChange}
          ></input>
        </div>

        <div className={styles.submitButton}>
          <button type="submit">Create Event</button>
        </div>
      </form>
    </main>
  );
};

export default NewEventForm;
