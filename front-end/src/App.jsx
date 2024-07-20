import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Home/HomePage";
import LogIn from "./pages/Login/LogIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/log-in" element={<LogIn />} />
      </Route>
    </Routes>
  );
}

export default App;
