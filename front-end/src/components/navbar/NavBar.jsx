import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../images/logo3.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RxAvatar } from "react-icons/rx";
import { signOut } from "../../redux/user/userSlice.js";

const Navbar = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [isDropOpen, setIsDropOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropOpen(!isDropOpen);
  };
  const handleSignOut = async () => {
    try {
      await fetch("api/v1/auth/logout");
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
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

        {!currentUser ? (
          <NavLink to={"log-in"} className="navbar__link login">
            Log in
          </NavLink>
        ) : (
          <div className="dropdown">
            <NavLink to={"/profile"}>
              <RxAvatar
                className="avatar__link"
                onMouseEnter={toggleDropdown}
                fontSize={"1.4rem"}
              />
            </NavLink>
            {isDropOpen && (
              <div className="dropdown-menu">
                <a href="/profile" className="dropdown-item">
                  Profile
                </a>
                <a href="/bookings" className="dropdown-item">
                  Bookings
                </a>
                <button
                  type="button"
                  className="log__out dropdown-item"
                  onClick={handleSignOut}
                >
                  Log out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="navbar__hamburger" onClick={toggleMenu}>
        {isOpen ? <MdClose /> : <GiHamburgerMenu onClick={toggleDropdown} />}
      </div>
    </nav>
  );
};

export default Navbar;
