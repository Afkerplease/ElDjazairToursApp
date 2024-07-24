import React, { useState } from "react";
import "./navbar.scss";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../images/logo3.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to={"/"}>
          <img className="navbar__logo" src={logo} />
        </Link>
      </div>

      <div className={`navbar__links ${isOpen ? "navbar__links--open" : ""}`}>
        <a href="/" className="navbar__link">
          Home
        </a>
        <a href="/tours" className="navbar__link">
          Tours
        </a>
        <a href="/help" className="navbar__link">
          Help
        </a>
        <a href="/contact" className="navbar__link">
          Contact
        </a>
        <div className="gap"></div>
        {!currentUser && (
          <a href="/sign-up" className="navbar__link">
            Sign up
          </a>
        )}
        <a href="/profile" className="navbar__link login">
          {currentUser ? <RxAvatar /> : "Log in "}
        </a>
      </div>
      <div className="navbar__hamburger" onClick={toggleMenu}>
        {isOpen ? <MdClose /> : <GiHamburgerMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
