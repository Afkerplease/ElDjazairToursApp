import React, { useState, useEffect } from "react";
import "./tours.scss";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

function ToursPage() {
  const [data, setData] = useState([]);
  const [searchedTours, setSearchedTour] = useState("");
  async function getTours() {
    try {
      const res = await fetch(`/api/v1/tours`);
      const data = await res.json();

      setData(data.data.tours);
    } catch (error) {
      console.log(error);
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/v1/tours?searchedTour=${searchedTours}`);
      const data = await res.json();
      console.log(data.data.tours);

      setData(data.data.tours);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTours();
  }, []);
  return (
    <div>
      <form className=" search__form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder=" search by  tour name"
          onChange={(e) => setSearchedTour(e.target.value)}
        />
        <button>
          <CiSearch />
        </button>
      </form>
      <div className="tours">
        {data.map((tour) => {
          return (
            <div
              key={tour._id}
              style={{ backgroundImage: `url( " ${tour.images} " ) ` }}
            >
              <Link
                to={`/tours/tour/${tour._id}`}
                style={{ textDecoration: "none" }}
              >
                <div>
                  <h2>{tour.destination}</h2>
                  <p> {tour.name} </p>
                  <h3> {tour.price} € </h3>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ToursPage;
