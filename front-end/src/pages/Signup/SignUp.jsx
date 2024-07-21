import React, { useState } from "react";
import "./signup.scss";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const preferencesOptions = [
    "Travel",
    "Technology",
    "Food",
    "Fitness",
    "Music",
  ];

  // const handleChange = (e) => {
  //   console.log(e.target.value);
  //   const { name, value, type, checked } = e.target;
  //   if (type === "checkbox") {
  //     setFormData((prevData) => {
  //       if (checked) {
  //         return {
  //           ...prevData,
  //           preferences: [...prevData.preferences, value],
  //         };
  //       } else {
  //         return {
  //           ...prevData,
  //           preferences: prevData.preferences.filter(
  //             (preference) => preference !== value
  //           ),
  //         };
  //       }
  //     });
  //   } else {
  //     setFormData({
  //       ...formData,
  //       [name]: value,
  //     });
  //   }
  // };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/v1/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      navigate("/log-in");
    } catch (error) {
      console.log(error);
    }
    setFormData({});
    alert("account created");
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
        </div>
        {/* <div className="form-group">
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
        </div> */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default SignUp;
