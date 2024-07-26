import React from "react";
import "./popularSection.scss";
import image1 from "../../images/place1.jpeg";
import image2 from "../../images/place2.jpg";
import image3 from "../../images/image3.png";
import beachTours from "../../images/image4.png";
import cityTours from "../../images/image1.png";
import hiking from "../../images/image2.png";
import museum from "../../images/museum.png";
import food from "../../images/food.png";
import { Link } from "react-router-dom";
function PopularSection() {
  return (
    <section className=" popular__section">
      <div className="popular__header">
        <h2>Popular things to do</h2>
        <span>
          {" "}
          <Link className="link" to={"/tours"}>
            See all{" "}
          </Link>{" "}
        </span>
      </div>
      <div className="parent">
        <div
          className="div1 image-container"
          style={{ backgroundImage: `url(${image3})` }}
        >
          <div>
            <p>Cruises</p>
          </div>
        </div>
        <div
          className="div2 image-container"
          style={{ backgroundImage: `url(${cityTours})` }}
        >
          <div>
            <p>City Tours</p>
          </div>
        </div>
        <div
          className="div3 image-container"
          style={{
            backgroundImage: `url(${beachTours})`,
            backgroundSize: "cover",
          }}
        >
          <div>
            <p>Beach Tours</p>
          </div>
        </div>
        <div
          className="div4 image-container"
          style={{ backgroundImage: `url(${museum})` }}
        >
          <div>
            <p>Museum Tour</p>
          </div>
        </div>
        <div
          className="div5 image-container"
          style={{
            backgroundImage: `url(${hiking})`,
          }}
        >
          <div>
            <p>Hiking</p>
          </div>
        </div>
        <div
          className="div6 image-container"
          style={{ backgroundImage: `url(${food})` }}
        >
          <div>
            <p>Food</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularSection;
