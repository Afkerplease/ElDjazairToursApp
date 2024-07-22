import React, { useState, useEffect } from "react";
import "./tours.scss";
import { Link } from "react-router-dom";

function Tours() {
  const [data, setData] = useState([]);
  async function getTours() {
    const res = await fetch("/api/v1/tours");
    const data = await res.json();
    console.log(data.data.tours);
    setData(data.data.tours);
  }
  useEffect(() => {
    getTours();
  }, []);
  return (
    <div className="tours">
      {data.map((tour) => {
        return (
          <div
            key={tour._id}
            style={{ backgroundImage: `url( " ${tour.images} " ) ` }}
          >
            <div>
              <h2>{tour.destination}</h2>
              <p> {tour.name} </p>
              <h3> {tour.price}£ </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Tours;
