import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/images/logo2.png";
const Navbar = () => {
  return (
    <header id="navbar" className="shadow-sm py-2">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <NavLink to="/" className="logo navbar-brand">
            <img src={logo} alt="app-logo" width={150} />
          </NavLink>
          <ul className="navbar-nav">
            <li className="nav-item px-2">
              <NavLink className="nav-link" to="/">
                <MdOutlineShoppingCart />{" "}
                {/* <sup className="badge bg-danger rounded-circle">0</sup> */}
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="btn-app" to="/sign-up">
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
