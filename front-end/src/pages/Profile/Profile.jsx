import React, { useState } from "react";
import "./profile.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from "../../redux/user/userSlice.js";
function Profile() {
  const dispatch = useDispatch();
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  console.log(currentUser);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //   dispatch(updateUserStart());
      const res = await fetch(`/api/v1/users/${currentUser._id} `, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        // dispatch(updateUserFailure(data));
        console.log(data);
        return;
      }
      console.log(data);
      dispatch(updateUserSuccess(data));
    } catch (error) {
      dispatch(updateUserFailure(error));
      //   console.log(error.message);
    }
  };
  const handleUpdate = () => {
    // Add update logic here
    alert("Profile updated!");
  };

  const handleDelete = () => {
    // Add delete logic here
    alert("Profile deleted!");
  };

  return (
    <div className="profile-form">
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            defaultValue={currentUser.name}
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            defaultValue={currentUser.email}
            id="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
          />
          <button type="submit" className="update-btn">
            {loading ? "Loading..." : "Update"}
          </button>
        </div>
        <div className="form-actions">
          <button type="button" className="delete-btn" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </form>
      <p>{error && "Something went wrong!"}</p>
      <p>{updateUserSuccess && "User is updated successfully!"}</p>
    </div>
  );
}

export default Profile;
