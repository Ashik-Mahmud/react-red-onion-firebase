import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import logo from "../../Assets/images/logo2.png";
const Navbar = () => {
  return (
    <header id="navbar" className="shadow-sm py-2">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a href="/" className="logo navbar-brand">
            <img src={logo} alt="app-logo" width={150} />
          </a>
          <ul className="navbar-nav">
            <li className="nav-item px-2">
              <a className="nav-link" href="/">
                <MdOutlineShoppingCart />{" "}
                <sup className="badge bg-danger rounded-circle">0</sup>
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="/">
                Login
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="btn-app" href="/">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
