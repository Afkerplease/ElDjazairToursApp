import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import TourForm from "./TourForm.jsx";
import UserForm from "./UserForm.jsx";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import userPic from "../../images/blank-user.gif";

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
    const updatedTours = tourData.filter((tour) => tour._id !== id);
    setTourData(updatedTours);
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
    const updatedUsers = userData.filter((user) => user._id !== id);
    setUserData(updatedUsers);
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
      <div className="w-full  bg-gray-100 p-4 rounded-lg">
        <div className=" flex  justify-between items-center ">
          <h2 className="text-2xl mb-4   font-bold font-['Montserrat'] ">
            Tours
          </h2>
          <button
            onClick={() => openTourModal()}
            className=" text-white py-2 px-3 rounded mb-4 bg-orange-500 border-none font-bold  cursor-pointer"
          >
            Add Tour
          </button>
        </div>
        {!tourData.length && (
          <p className=" text-center  text-2xl">ther is no tours</p>
        )}
        {tourData.map((tour) => {
          return (
            <div
              key={tour._id}
              className="mb-2 p-2 flex justify-between items-center border-b"
            >
              <img className="  object-cover  w-20" src={tour.images} alt="" />

              <div className=" flex flex-col md:flex-row  justify-around w-full items-center ">
                <h3>
                  Name: <span className="  ">{tour.name} </span>
                </h3>
                <h3>Destination: {tour.destination} </h3>
                <h3> Price: {tour.price} € </h3>
                <h3> GroupSize: {tour.maxGroupSize} </h3>
              </div>
              <div>
                <button
                  onClick={() => openTourModal(tour)}
                  className="bg-green-500 text-white py-1 px-3 md:mb-2 cursor-pointer border-none rounded mr-2"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => deleteHandler(tour._id)}
                  className="bg-red-500 text-white py-1 border-none cursor-pointer px-3 rounded"
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
      <div className="w-full  bg-gray-100 p-4 rounded-lg">
        <div className=" flex justify-between items-center">
          <h2 className="text-2xl mb-4   font-bold font-['Montserrat']">
            Users
          </h2>
          <button
            onClick={() => openUserModal()}
            className="bg-orange-500 border-none font-bold  cursor-pointer text-white py-2 px-3 rounded mb-4"
          >
            Add User
          </button>
        </div>
        {!userData.length && (
          <p className=" text-center  text-2xl">ther is no Users</p>
        )}
        {userData.map((user) => {
          return (
            <div
              key={user._id}
              className="mb-2 p-2 flex justify-between items-center border-b"
            >
              <img className="  object-cover  w-20" src={userPic} alt="" />
              <div className="flex flex-col md:flex-row  justify-around w-full items-center">
                <span>UserName:{user.name} </span>
                <span>Email:{user.email} </span>
                <span>Role:{user.role} </span>
              </div>
              <div>
                <button
                  onClick={() => openUserModal(user)}
                  className="bg-green-500 cursor-pointer text-white py-1 px-3 md:mb-2 border-none rounded mr-2"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => userDeleteHandler(user._id)}
                  className="bg-red-500 cursor-pointer text-white border-none py-1 px-3 rounded"
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
