import React from "react";
import "./admin.scss";

const Admin = () => {
  const handleAddTour = () => {
    console.log("Add Tour");
  };

  const handleEditTour = (tourId) => {
    console.log("Edit Tour", tourId);
  };

  const handleRemoveTour = (tourId) => {
    console.log("Remove Tour", tourId);
  };

  const handleEditUser = (userId) => {
    console.log("Edit User", userId);
  };

  const handleRemoveUser = (userId) => {
    console.log("Remove User", userId);
  };

  return (
    <div className="admin-page">
      <div className="block tours-block">
        <h2>Tours</h2>
        <button onClick={handleAddTour}>Add Tour</button>
        <div className="tour">
          <span>Tour 1</span>
          <button onClick={() => handleEditTour(1)}>Edit</button>
          <button onClick={() => handleRemoveTour(1)}>Remove</button>
        </div>
        <div className="tour">
          <span>Tour 2</span>
          <button onClick={() => handleEditTour(2)}>Edit</button>
          <button onClick={() => handleRemoveTour(2)}>Remove</button>
        </div>
      </div>
      <div className="block users-block">
        <h2>Users</h2>
        <div className="user">
          <span>User 1</span>
          <button onClick={() => handleEditUser(1)}>Edit</button>
          <button onClick={() => handleRemoveUser(1)}>Remove</button>
        </div>
        <div className="user">
          <span>User 2</span>
          <button onClick={() => handleEditUser(2)}>Edit</button>
          <button onClick={() => handleRemoveUser(2)}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
