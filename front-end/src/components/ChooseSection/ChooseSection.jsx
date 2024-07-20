import React from "react";
import ticket from "../../images/ticket.svg fill.png";
import vector from "../../images/Vector.png";
import medal from "../../images/medal.svg.png";
import diamond from "../../images/diamond.svg fill.png";
import "./chooseSection.scss";

function ChooseSection() {
  return (
    <section className="choose__section">
      <div className="choose__container">
        <h2>Why choose ElDjazairTours</h2>
        <div className="cards__container">
          {/* card */}
          <div className="card">
            <img className="card__image" src={ticket} alt="" />
            <h3 className="card__title">Ultimate flexibility</h3>
            <p className="card__text">
              You're in control with free cancellation
            </p>
          </div>
          {/* card */}
          <div className="card">
            <img className="card__image" src={vector} alt="" />
            <h3 className="card__title">Memorable experiences </h3>
            <p className="card__text">
              Browse and book tours and activities so incredible,you'll want to
              tell your freinds
            </p>
          </div>
          {/* card */}
          <div className="card">
            <img className="card__image" src={diamond} alt="" />
            <h3 className="card__title">Quality at our core</h3>
            <p className="card__text">
              High-quality standars.Millions of reviews. Atourz company
            </p>
          </div>
          {/* card */}
          <div className="card">
            <img className="card__image" src={medal} alt="" />
            <h3 className="card__title">Award-winning support</h3>
            <p className="card__text">
              New price? New plan? No problem. We're here to help,24/7.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseSection;
