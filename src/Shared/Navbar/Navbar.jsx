import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import logo from "../../Assets/images/logo2.png";
import { auth } from "../../Firebase/Firebase";
const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    signOut(auth).then(() => {
      navigate("/login");
      setIsAuth(false);
    });
  };
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
            {isAuth ? (
              <>
                <li className="d-flex gap-3">
                  <img
                    src={auth?.currentUser?.photoURL}
                    width={40}
                    className="img-fluid rounded-circle"
                    alt=""
                  />
                  <div>
                    <span>{auth?.currentUser?.displayName}</span>
                    <small className="d-block">
                      {auth?.currentUser?.email
                        ? auth?.currentUser?.email?.length > 15
                          ? auth?.currentUser?.email.slice(0, 15) + "..."
                          : auth?.currentUser?.email
                        : "not available"}
                    </small>
                  </div>
                </li>
                <li className="nav-item px-2">
                  <button onClick={handleLogOut} className="btn-app">
                    Log Out
                  </button>
                </li>
                <li className="nav-item px-2">
                  <NavLink className="nav-link" to="/order">
                    Order History
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {" "}
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
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
