import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import EventListings from "./pages/EventListings";
import CreateEventForm from "./pages/CreateEventForm";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="create-event-form" element={<CreateEventForm />} />
        <Route path="events-listing" element={<EventListings />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={PageNotFound} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
