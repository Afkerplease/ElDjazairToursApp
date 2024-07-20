import React from "react";
import "./footer.scss";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h4>About Us</h4>
          <p>
            We aim to revolutionize travel booking by providing a modern,
            user-friendly platform for guided tours worldwide. Born from a deep
            passion for travel, our mission is to simplify and make the booking
            process seamless and transparent. Join us and explore the world with
            ease and confidence.
          </p>
        </div>
        <div className="footer__section">
          <h4>Contact Us</h4>
          <p>Email: notre email</p>
          <p>Phone: notre telephone</p>
        </div>
        <div className="footer__section">
          <h4>Follow Us</h4>
          <div className="footer__social-links">
            <a href="#facebook" className="footer__social-link">
              <FaFacebook />
            </a>
            <a href="#twitter" className="footer__social-link">
              <FaSquareXTwitter />
            </a>
            <a href="#instagram" className="footer__social-link">
              <FaInstagramSquare />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2024 ElDjazairTours. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
