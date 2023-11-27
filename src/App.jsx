import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutEventListings from "./pages/AboutEventListings";
import AboutCreateEventForm from "./pages/AboutCreateEventForm";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Application from "./pages/Application";
import NewEventForm from "./pages/NewEventForm";
import EventsList from "./pages/EventsList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about-create-events" element={<AboutCreateEventForm />} />
        <Route path="about-events-listing" element={<AboutEventListings />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<Application />} />
        <Route path="/create-event-form" element={<NewEventForm />} />
        <Route path="/view-events-list" element={<EventsList />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
