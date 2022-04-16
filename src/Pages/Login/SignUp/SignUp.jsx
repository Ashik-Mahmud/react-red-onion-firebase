import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../App";
import logo from "../../../Assets/images/logo2.png";
import { auth, storage } from "../../../Firebase/Firebase";
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

  const [progress, setProgress] = useState(0);

  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    avatar: "",
  });
  const formRef = useRef(null);

  const handleCreateUser = async (event) => {
    event.preventDefault();
    if (!formInput.name) return toast.error("Name field is required.");
    if (!formInput.phone) return toast.error("Phone field is required.");
    if (!/[1-9]/.test(formInput.phone))
      return toast.error("Phone number must need number");
    if (formInput.phone.length < 11)
      return toast.error("Phone number must need 11 chars");
    if (!formInput.email) return toast.error("Email field is required.");
    if (!formInput.password) return toast.error("Password field is required.");
    if (!formInput.avatar) return toast.error("Avatar field is required.");

    /* upload image on firebase storage */

    const avatarRef = ref(
      storage,
      `/images/${new Date() + formInput.avatar.name}`
    );
    const uploadImage = uploadBytesResumable(avatarRef, formInput.avatar);
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressValue = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressValue);
      },
      (err) => {
        toast.error("something went wrong to upload image.");
      },
      () => {
        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          createUserWithEmailAndPassword(
            auth,
            formInput.email,
            formInput.password
          )
            .then((user) => {
              updateProfile(auth.currentUser, {
                displayName: formInput.name,
                photoURL: url ? url : "",
                phoneNumber: formInput.phone,
              }).then(() => {
                toast.success("Creating user successfully done.");
              });
            })
            .catch((err) => toast.error(err.message.split(":")[1]));
        });
        setProgress(0);
        formRef.current.reset();
      }
    );
  };

  return (
    <div className="signIn-container">
      <div className="signIn-wrapper">
        <form
          action=""
          ref={formRef}
          onSubmit={handleCreateUser}
          className="form-wrapper"
        >
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
            {progress > 0 && (
              <div className="progress mt-3">
                <div
                  className="progress-bar progress-bar-animated bg-danger progress-bar-striped"
                  style={{ width: `${progress}%` }}
                >
                  {progress}%
                </div>
              </div>
            )}
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
