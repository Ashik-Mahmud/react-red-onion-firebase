import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../App";
import logo from "../../../Assets/images/logo2.png";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./../Styles/Styles.css";
const SignUp = () => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";
  useEffect(() => {
    if (isAuth) {
      navigate(from, { replace: true });
    }
  }, [isAuth, navigate, from]);

  /* handle create user  */
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    avatar: "",
  });

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (!formInput.name) return toast.error("Name field is required.");
    if (!formInput.phone) return toast.error("Phone field is required.");
    if (!/[1-9]/.test(formInput.phone))
      return toast.error("Phone number must need number");
    if (formInput.phone.length < 11)
      return toast.error("Phone number must need 11 chars");
    if (!formInput.email) return toast.error("Email field is required.");
    if (!formInput.password) return toast.error("Password field is required.");
  };

  return (
    <div className="signIn-container">
      <div className="signIn-wrapper">
        <form action="" onSubmit={handleCreateUser} className="form-wrapper">
          <img src={logo} className="mb-3" alt="logo" width={200} />
          <div className="my-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              onBlur={(event) =>
                setFormInput({ ...formInput, name: event.target.value })
              }
              placeholder="Name"
              className="form-control"
            />
          </div>
          <div className="my-3">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              onBlur={(event) =>
                setFormInput({ ...formInput, phone: event.target.value })
              }
              placeholder="Phone"
              className="form-control"
            />
          </div>
          <div className="my-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              onBlur={(event) =>
                setFormInput({ ...formInput, email: event.target.value })
              }
              placeholder="Email"
              className="form-control"
            />
          </div>
          <div className="my-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onBlur={(event) =>
                setFormInput({ ...formInput, password: event.target.value })
              }
              placeholder="Password"
              className="form-control"
            />
          </div>
          <div className="my-3">
            <label htmlFor="password">Avatar</label>
            <input
              type="file"
              onChange={(event) =>
                setFormInput({ ...formInput, avatar: event.target.files[0] })
              }
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
