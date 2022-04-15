import React from "react";
import "./../Styles/Styles.css";
const SignIn = () => {
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
        </form>
      </div>
    </div>
  );
};

export default SignIn;
