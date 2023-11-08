import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
// import { auth } from "../../firebase";
import "./SignIn.css"
import { getAuth, FacebookAuthProvider, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link,  } from "react-router-dom";
import facebooklogo from './resources/facebook_icon.png';
import googleLogo from './resources/googleLogo.png';


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //might be able to do both with just one function and state that chagnes based on button "facebook or google"
  const facebookProvider = new FacebookAuthProvider();
  const googleProvider = new GoogleAuthProvider();

  facebookProvider.addScope('email');
  const auth = getAuth();

  function facebookLoginHandler() {

    signInWithPopup(auth, facebookProvider)
    .then((result) => {
      const userDetail = result.user;
      console.log("userdetail: " + JSON.stringify(userDetail))
    })
    .catch((error) =>{
      console.log(error)
    })

  }

  function googleLoginHandler() {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const userDetail = result.user;
      console.log("userdetail: " + JSON.stringify(userDetail))
    })
    .catch((error) =>{
      console.log(error)
    })
  }


  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="sign-in-container">
        <form onSubmit={signIn}>
          <h1 className="loginTitle">Log In</h1>
          <div className="formContainer">
            <div className="title">
              Email: 
            </div>
              <input
                className="input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
          </div>
          <div className="formContainer">
              <div className="title">
                Password:
              </div>
            <input
              className="input"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="resetPasswordContainer">
            <Link to="/resetPassword" className="passwordResetText">Forgot Password?</Link>
          </div>
          <button className="loginButtonContainer" type="submit">
            <div className="buttonText">
              Log In
            </div>
          </button>
          <div className="lineContainer">
            <h2 className="line"><span className="lineSpan">or</span></h2>
          </div>
          <div>
            <button className="loginButtonContainer" onClick={facebookLoginHandler}>
              <div className="buttonText">
              <img src={facebooklogo} className="facebookLogo" /> Log In with Facebook
              </div>
            </button>
          </div>
          <div>
            <button className="loginButtonContainer" onClick={googleLoginHandler}>
              <div className="buttonText">
              <img src={googleLogo} className="facebookLogo" /> Log In with Google
              </div>
            </button>
          </div>
        </form>
        <div className="signUpRedirectContainer">
          <span>Don&apos;t have an account? <Link to="/signUp" className="signUpRedirectText">Sign Up</Link></span>
        </div>
        </div>
    </div>
  );
};

export default SignIn;