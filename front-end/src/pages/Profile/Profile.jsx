import React, { useState } from "react";
import "./profile.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserFailure,
  deleteUserSuccess,
  deleteUserStart,
  signOut,
} from "../../redux/user/userSlice.js";

function Profile() {
  const dispatch = useDispatch();
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/v1/users/${currentUser._id} `, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        dispatch(updateUserFailure(data));
        console.log(data);
        return;
      }

      dispatch(updateUserSuccess(data));
    } catch (error) {
      dispatch(updateUserFailure(error));
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
        dispatch(deleteUserFailure(data));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {}
  };
  const handleSignOut = async () => {
    try {
      await fetch("api/v1/auth/logout");
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Link className="booking__link" to="/profile/bookings">
        my bookings
      </Link>
      <div className="profile-form">
        {/* <Link>my boookings</Link> */}
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
            <button
              type="button"
              className="delete-btn"
              onClick={handleSignOut}
            >
              Signout
            </button>
          </div>
        </form>

        <p>{error && "Something went wrong!"}</p>
      </div>
    </>
  );
}

export default Profile;
