import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Home/HomePage";
import LogIn from "./pages/Login/LogIn";
import Tours from "./pages/Tours/Tours";
import Help from "./pages/Help/Help";
import ContactUs from "./pages/ContactUs/ContactUs";
import SignUp from "./pages/Signup/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<ContactUs />} />
      </Route>
    </Routes>
  );
}

export default App;
