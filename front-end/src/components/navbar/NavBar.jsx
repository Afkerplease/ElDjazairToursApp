import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
        <NavLink to="/" className="navbar__link">
          Home
        </NavLink>
        <NavLink to="/tours" className="navbar__link">
          Tours
        </NavLink>
        <NavLink to="/help" className="navbar__link">
          Help
        </NavLink>
        <NavLink to="/contact" className="navbar__link">
          Contact
        </NavLink>
        <div className="gap"></div>
        {!currentUser && (
          <NavLink to="/sign-up" className="navbar__link">
            Sign up
          </NavLink>
        )}
        <NavLink to="/profile" className="navbar__link login">
          {currentUser ? <RxAvatar /> : "Log in "}
        </NavLink>
      </div>
      <div className="navbar__hamburger" onClick={toggleMenu}>
        {isOpen ? <MdClose /> : <GiHamburgerMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
