import React, { useState } from "react";

const UserForm = ({ user, onClose }) => {
  const [username, setUsername] = useState(user ? user.username : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted user:", { id: user?.id, username, email, role });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-2xl">{user ? "Edit User" : "Add User"}</h2>
      <label className="flex flex-col">
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="border p-2 rounded"
        />
      </label>
      <label className="flex flex-col">
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 rounded"
        />
      </label>
      <label className="flex flex-col">
        Role:
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
          className="border p-2 rounded"
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        {user ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default UserForm;
