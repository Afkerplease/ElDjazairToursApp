import { Link } from "react-router-dom";
import "./homepage.scss";
import React, { useState, useEffect } from "react";

function HomePage() {
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
          <div key={tour.id}>
            {" "}
            <h3> {tour.name}</h3>{" "}
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
