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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/tours" element={<Tours />}>
          <Route path="/tours/tour/:id" element={<Tour />} />
        </Route>
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<ContactUs />} />
      </Route>
      {/* <Route path="tours" element={<Tours />}></Route> */}
    </Routes>
  );
}

export default App;
