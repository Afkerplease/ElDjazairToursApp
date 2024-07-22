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
      <div className="parent">
        <div
          className="div1 image-container"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <div>
            <p>Cruises</p>
          </div>
        </div>
        <div
          className="div2 image-container"
          style={{ backgroundImage: `url(${image2})` }}
        >
          <div>
            <p>Beach Tours</p>
          </div>
        </div>
        <div
          className="div3 image-container"
          style={{ backgroundImage: `url(${image3})` }}
        >
          <div>
            <p>City Tours</p>
          </div>
        </div>
        <div
          className="div4 image-container"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <div>
            <p>Museum Tour</p>
          </div>
        </div>
        <div
          className="div5 image-container"
          style={{ backgroundImage: `url(${image2})` }}
        >
          <div>
            <p>Food</p>
          </div>
        </div>
        <div
          className="div6 image-container"
          style={{ backgroundImage: `url(${image3})` }}
        >
          <div>
            <p>Hiking</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularSection;
