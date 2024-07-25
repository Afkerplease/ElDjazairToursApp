import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./bookings.scss";

const BookingsPage = () => {
  const [bookingData, setBookingData] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const userId = currentUser._id;
  //   console.log(userId);

  //   !! function to get the user bookings
  async function getUserBookings() {
    try {
      const res = await fetch(`/api/v1/booking/${userId}`);
      const data = await res.json();
      console.log(data.data);

      setBookingData(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUserBookings();
  }, []);

  // !! function to delete the booking
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/v1/booking/delete-booking/${id}`, {
        method: "DELETE",
      });
      const data = res.json();
    } catch (error) {
      console.log(error);
    }
    setBookingData(bookingData.filter((booking) => booking._id !== id));
  };
  return (
    <div className="bookings-page">
      <h1>Your Bookings</h1>
      {!bookingData.length ? (
        <p> you have no bookings</p>
      ) : (
        <ul className="booking-list">
          {bookingData.map((booking) => (
            <li key={booking._id} className="booking-item">
              <img src={booking.tour_id.images} alt={booking.name} />
              <div className="booking-info">
                <p>{booking.tour_id.name}</p>
                <p>{booking.tour_id.destination}</p>
                <p>{booking.bookingDate}</p>
              </div>
              <button onClick={() => handleDelete(booking._id)}>Cancel</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingsPage;
