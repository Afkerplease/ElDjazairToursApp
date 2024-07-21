import React, { useState, useEffect } from "react";

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
    <div>
      {data.map((tour) => {
        return (
          <div key={tour._id}>
            {" "}
            <h3> {tour.name}</h3>
            <img src={tour.images} />
            <h1> {tour.price} </h1>
          </div>
        );
      })}
    </div>
  );
}

export default Tours;
