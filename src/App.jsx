import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutEventListings from "./pages/AboutEventListings";
import AboutCreateEventForm from "./pages/AboutCreateEventForm";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Application from "./pages/Application";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="create-event-form" element={<AboutCreateEventForm />} />
        <Route path="events-listing" element={<AboutEventListings />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<Application />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
