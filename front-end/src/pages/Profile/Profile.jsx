import React, { useState } from "react";
import "./profile.scss";
import { useDispatch, useSelector } from "react-redux";

import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserFailure,
  deleteUserSuccess,
  deleteUserStart,
} from "../../redux/user/userSlice.js";

function Profile() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(`/api/v1/users/${currentUser._id} `, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        setError(data);
        console.log(data);
        return;
      }

      dispatch(updateUserSuccess(data));
    } catch (error) {
      setError(error);
    }
  };

  const handleDelete = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/v1/users/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = res.json();
      if ((data.success = false)) {
        setError(error);
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {}
  };

  return (
    <>
      <div className="profile-form">
        <h1>Update Profile</h1>
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
              required={true}
            />
          </div>
          <div className="form-actions">
            <button type="button" className="delete-btn" onClick={handleDelete}>
              Delete
            </button>
            <button type="submit" className="update-btn">
              {loading ? "Loading..." : "Update"}
            </button>
          </div>
        </form>

        <p>{error && "Something went wrong!"}</p>
      </div>
    </>
  );
}

export default Profile;
