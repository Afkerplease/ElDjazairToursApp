import React from "react";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
import image4 from "../../images/image4.png";
import "./trendingSection.scss";
function TrendingDestinations() {
  return (
    <section className="section__trending">
      <div className="section__container">
        <div className="container__header">
          <h2>Trending Destinations</h2>
          <span>See all</span>
        </div>
        <div className="section__grid">
          {/* grid item */}
          <div className="grid__item">
            <img className="grid__image" src={image4} alt="" />
            <div className="grid__title">
              <h4>Bali</h4>
            </div>
          </div>
          {/* grid item */}
          <div className="grid__item">
            <img src={image1} alt="" />
            <div className="grid__title">
              <h4>Roma</h4>
            </div>
          </div>
          {/* grid item */}
          <div className="grid__item">
            <img src={image2} alt="" />
            <div className="grid__title">
              <h4>Phuket</h4>
            </div>
          </div>
          {/* grid item */}
          <div className="grid__item">
            <img src={image3} alt="" />
            <div className="grid__title">
              <h4>Paris</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendingDestinations;
