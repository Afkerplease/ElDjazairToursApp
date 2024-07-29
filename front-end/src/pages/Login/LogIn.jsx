import React, { useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";

import { signInFailure, signInSuccess } from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/v1/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      console.log(data.error);
      if (data.success === false) {
        console.log(data.error);
        setLoading(false);

        setError(data.error);
        return;
      }
      dispatch(signInSuccess(data));
      if (data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit"> {loading ? "Loading..." : "Login"} </button>
      </form>
      {error && <p style={{ color: "red" }}> {error} </p>}
      <p>
        you dont have an account? Signup <Link to={"/sign-up"}>here</Link>{" "}
      </p>
    </div>
  );
};

export default Login;
