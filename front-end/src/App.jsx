import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Home/HomePage";
import LogIn from "./pages/Login/LogIn";
import Tours from "./pages/Tours/Tours";
import Help from "./pages/Help/Help";
import ContactUs from "./pages/ContactUs/ContactUs";
import SignUp from "./pages/Signup/SignUp";
import Tour from "./pages/Tour/Tour";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile/Profile";
import PrivacyPage from "./pages/PrivacyPage/PrivacyPage";
import BookingsPage from "./pages/Bookings/BookingsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/tour/:id" element={<Tour />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/bookings" element={<BookingsPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
