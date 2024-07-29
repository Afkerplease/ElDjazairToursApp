import React, { useState } from "react";
import "./signup.scss";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  console.log(error);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
    } else {
      setError("");
      try {
        setLoading(true);
        const res = await fetch("/api/v1/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        setLoading(false);
        const data = await res.json();

        console.log(data);
        navigate("/log-in");
      } catch (error) {
        console.log(error);
      }
      setFormData({});
    }
  };

  return (
    <div className="sign-up-page">
      <h1>Sign Up</h1>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            required
          />
        </div>
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
          {error && <p style={{ color: "red" }}> {error} </p>}
        </div>

        <button type="submit"> {loading ? "Loading..." : "Sign Up"} </button>
      </form>
      <p>
        already have an account? LogIn <Link to={"/log-in"}>here</Link>{" "}
      </p>
    </div>
  );
};
export default SignUpPage;
