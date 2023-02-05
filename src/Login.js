import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import Details from "./Details";
import { signInWithGoogle } from "./firebase";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";
import "./Login.css";

function Login() {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const navigate = useNavigate();
  const validateEmail = (email) => {
    return emailRegex.test(email);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser = currentUser;
  });

  const signin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        if (auth) {
          // addToast("Login successfull", { appearance: "success" });
          // setShowToast(true);

          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        alert("Logged out");
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
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
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
            onClick={signin}
          >
            Sign In
          </button>

          {/* {value?<Home/>:
                    <button type='submit' className='login__signinButton' onClick={handleclick}>Sign In With Google</button>} */}
        </form>
        <p>
          By siging-in you agree to our conditions of Use & sale. Please see our
          Privacy notice, our Cookies Notice and our Interest Based-ads
        </p>

        <p>Click here to create a new account</p>
        <Link to="/signup">
          <button type="submit" className="login__signinButton">
            Register
          </button>
        </Link>
        <button className="login__signinButton" onClick={logout}>
          Sign out
        </button>
        <p className="or">or</p>
        <button className="login-button" onClick={signInWithGoogle}>
          Sign in with google
        </button>
      </div>

      <Details />
    </div>
  );
}

export default Login;
