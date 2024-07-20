import React, { useState } from "react";
import "./signup.scss";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    preferences: [],
  });

  const preferencesOptions = [
    "Travel",
    "Technology",
    "Food",
    "Fitness",
    "Music",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => {
        if (checked) {
          return {
            ...prevData,
            preferences: [...prevData.preferences, value],
          };
        } else {
          return {
            ...prevData,
            preferences: prevData.preferences.filter(
              (preference) => preference !== value
            ),
          };
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
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
            value={formData.name}
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
            value={formData.email}
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
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Preferences</label>
          <div className="preferences-options">
            {preferencesOptions.map((option) => (
              <label key={option}>
                <input
                  type="checkbox"
                  name="preferences"
                  value={option}
                  checked={formData.preferences.includes(option)}
                  onChange={handleChange}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
