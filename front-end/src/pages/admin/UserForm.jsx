import React, { useState } from "react";

const UserForm = ({ user, onClose }) => {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [role, setRole] = useState(user ? user.role : "");
  const [password, setPassword] = useState(user ? user.password : "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted user:", { id: user?.id, name, email, role });
    try {
      const res = await fetch(
        user ? `/api/v1/users/${user._id}` : "/api/v1/auth/signup",
        {
          method: user ? "PATCH" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            role,
            password,
          }),
        }
      );
      const data = res.json();
      if ((data.success = false)) {
        return;
      }
    } catch (error) {
      console.log(error);
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-2xl">{user ? "Edit User" : "Add User"}</h2>
      <label className="flex flex-col">
        name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
      <label className="flex flex-col">
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
