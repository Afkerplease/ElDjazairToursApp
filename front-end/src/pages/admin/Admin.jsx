import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import TourForm from "./TourForm.jsx";
import UserForm from "./UserForm.jsx";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

const Admin = () => {
  const [tourData, setTourData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [isTourModalOpen, setTourModalOpen] = useState(false);
  const [isUserModalOpen, setUserModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  // !! function to get all tours
  async function getTours() {
    try {
      const res = await fetch("/api/v1/tours");
      const data = await res.json();

      setTourData(data.data.tours);
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(tourData);

  // !! function to get all users (/api/v1/users)
  async function getUsers() {
    try {
      const res = await fetch("/api/v1/users");
      const data = await res.json();

      setUserData(data.data.users);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(userData);
  useEffect(() => {
    getTours();
    getUsers();
  }, []);

  // !!tour delete handler
  const deleteHandler = async (id) => {
    try {
      const res = await fetch(`/api/v1/tours/${id}`, {
        method: "DELETE",
      });
      const data = res.json();
      if ((data.success = false)) {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };
  //!! user delete handler
  const userDeleteHandler = async (id) => {
    try {
      const res = await fetch(`/api/v1/users/${id}`, {
        method: "DELETE",
      });
      const data = res.json();
      if ((data.success = false)) {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const openTourModal = (tour) => {
    setSelectedTour(tour);
    setTourModalOpen(true);
  };

  const closeTourModal = () => {
    setTourModalOpen(false);
    setSelectedTour(null);
  };

  const openUserModal = (user = null) => {
    setSelectedUser(user);
    setUserModalOpen(true);
  };

  const closeUserModal = () => {
    setUserModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="flex flex-wrap gap-4 p-4">
      <div className="w-full md:w-1/2 bg-gray-100 p-4 rounded-lg">
        <div className=" flex  justify-between items-center ">
          <h2 className="text-2xl mb-4   font-bold font-['Montserrat'] ">
            Tours
          </h2>
          <button
            onClick={() => openTourModal()}
            className="bg-blue-500 text-white border-none py-2 px-3 rounded mb-4"
          >
            Add Tour
          </button>
        </div>
        {tourData.map((tour) => {
          return (
            <div
              key={tour._id}
              className="mb-2 p-2 flex justify-between items-center border-b"
            >
              <img className="  object-cover  w-20" src={tour.images} alt="" />
              <span> {tour.name} </span>
              <span> {tour.destination} </span>
              <span> {tour.price} € </span>
              <span> {tour.maxGroupSize} </span>
              <div>
                <button
                  onClick={() => openTourModal(tour)}
                  className="bg-green-500 text-white py-1 px-3 rounded mr-2"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => deleteHandler(tour._id)}
                  className="bg-red-500 text-white py-1 px-3 rounded"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {/* !! User div start  */}
      {/* *************************************************** */}
      {/* *************************************************** */}
      {/* *************************************************** */}
      {/* *************************************************** */}
      {/* *************************************************** */}
      {/* *************************************************** */}
      {/* *************************************************** */}
      {/* *************************************************** */}
      {/* *************************************************** */}
      <div className="w-full md:w-1/2 bg-gray-100 p-4 rounded-lg">
        <div className=" flex justify-between items-center">
          <h2 className="text-2xl mb-4   font-bold font-['Montserrat']">
            Users
          </h2>
          <button
            onClick={() => openUserModal()}
            className="bg-blue-500 text-white py-2 px-3 rounded mb-4"
          >
            Add User
          </button>
        </div>
        {userData.map((user) => {
          return (
            <div className="mb-2 p-2 flex justify-between items-center border-b">
              <span>{user.name} </span>
              <span>{user.email} </span>
              <span>{user.role} </span>
              <div>
                <button
                  onClick={() => openUserModal(user)}
                  className="bg-green-500 text-white py-1 px-3 rounded mr-2"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => userDeleteHandler(user._id)}
                  className="bg-red-500 text-white py-1 px-3 rounded"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {isTourModalOpen && (
        <Modal onClose={closeTourModal}>
          <TourForm tour={selectedTour} onClose={closeTourModal} />
        </Modal>
      )}
      {isUserModalOpen && (
        <Modal onClose={closeUserModal}>
          <UserForm user={selectedUser} onClose={closeUserModal} />
        </Modal>
      )}
    </div>
  );
};

export default Admin;
