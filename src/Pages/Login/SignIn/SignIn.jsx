import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../App";
import { auth } from "../../../Firebase/Firebase";
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

  /*  handle login  */
  const [isReset, setIsReset] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (event) => {
    event.preventDefault();
    if (!email) return toast.error("Email field is required.");
    if (!isReset) {
      if (!password) return toast.error("Password field is required.");
    }
    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        toast.success("LoggedIn successfully done.");
      })
      .catch((err) => toast.error(err.message.split(":")[1]));
  };

  /* handle reset password  */
  const resetPassword = async () => {
    if (!email) return toast.error("You need to put email to reset password.");
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success(`we sent you email with password reset link on ${email}`);
      })
      .catch((err) => toast.error(err.message.split(":")[1]));
  };

  return (
    <div className="signIn-container">
      <div className="signIn-wrapper">
        <form action="" className="form-wrapper" onSubmit={handleLogin}>
          {isReset ? (
            <h1>
              Reset <span className="colorize">Password</span>
            </h1>
          ) : (
            <h1>
              Sign In into <span className="colorize">Account</span>
            </h1>
          )}
          <div className="my-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              onBlur={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="my-3">
            {!isReset && (
              <>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  onBlur={(e) => setPassword(e.target.value)}
                />{" "}
              </>
            )}
            <span>
              {isReset ? "Go to home" : "Forget Password?"}{" "}
              <span
                onClick={() => setIsReset((prev) => !prev)}
                className="colorize cursor-pointer"
              >
                {isReset ? "Page" : "Reset"}
              </span>
            </span>
          </div>

          <div className="my-3">
            {isReset ? (
              <button type="button" onClick={resetPassword} className="btn-app">
                Reset Password
              </button>
            ) : (
              <button className="btn-app" type="submit">
                Sign In
              </button>
            )}
          </div>
          <p>
            Need Account?{" "}
            <Link to="/sign-up" className="colorize cursor-pointer">
              Create
            </Link>
          </p>
          {!isReset && <SocialLogin />}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
