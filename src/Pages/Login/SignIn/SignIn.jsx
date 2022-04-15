import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../App";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./../Styles/Styles.css";
const SignIn = () => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";
  useEffect(() => {
    if (isAuth) {
      navigate(from, { replace: true });
    }
  }, [isAuth, navigate, from]);

  return (
    <div className="signIn-container">
      <div className="signIn-wrapper">
        <form action="" className="form-wrapper">
          <h1>
            Sign In into <span className="colorize">Account</span>
          </h1>
          <div className="my-3">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" className="form-control" />
          </div>
          <div className="my-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="form-control"
            />
            <span>
              Forget Password?{" "}
              <span className="colorize cursor-pointer">Reset</span>
            </span>
          </div>
          <div className="my-3">
            <button className="btn-app">Sign In</button>
          </div>
          <p>
            Need Account?{" "}
            <Link to="/sign-up" className="colorize cursor-pointer">
              Create
            </Link>
          </p>
          <SocialLogin />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
