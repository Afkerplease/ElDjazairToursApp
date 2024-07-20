import React from "react";
import "./popularSection.scss";
import image1 from "../../images/place1.jpeg";
import image2 from "../../images/place2.jpg";
import image3 from "../../images/place3.jpg";
function PopularSection() {
  return (
    <section className=" popular__section">
      <div className="popular__header">
        <h2>Popular things to do</h2>
        <span>See all</span>
      </div>
      <div className="popular__images">
        {/* image */}
        <div className=" popular__image__container">
          <img className="popular__image" src={image1} alt="" />
          <p>dummy data</p>
        </div>
        {/* image */}
        <div className=" popular__image__container">
          <img className="popular__image" src={image2} alt="" />
          <p>dummy data</p>
        </div>
        {/* image */}
        <div className=" popular__image__container">
          <img className="popular__image" src={image3} alt="" />
          <p>dummy data</p>
        </div>
        {/* image */}
        <div className=" popular__image__container">
          <img className="popular__image" src={image3} alt="" />
          <p>dummy data</p>
        </div>
      </div>
    </section>
  );
}

export default PopularSection;
