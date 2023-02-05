import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="/Users/dheerajtn/Downloads/LogoSample_ByTailorBrands.jpg"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-Up</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            type="submit"
            className="login__signinButton"
            onClick={register}
          >
            Sign In
          </button>
        </form>
        <p>
          Already have an account?
          <Link to="/login">
            <span>Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
