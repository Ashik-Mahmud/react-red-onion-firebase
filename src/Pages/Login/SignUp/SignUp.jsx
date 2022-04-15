import React from "react";
import logo from "../../../Assets/images/logo2.png";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./../Styles/Styles.css";
const SignUp = () => {
  return (
    <div className="signIn-container">
      <div className="signIn-wrapper">
        <form action="" className="form-wrapper">
          <img src={logo} className="mb-3" alt="logo" width={200} />
          <div className="my-3">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Name" className="form-control" />
          </div>
          <div className="my-3">
            <label htmlFor="phone">Phone</label>
            <input type="text" placeholder="Phone" className="form-control" />
          </div>
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
          </div>
          <div className="my-3">
            <button className="btn-app">Sign Up into Account</button>
          </div>
          <SocialLogin />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
