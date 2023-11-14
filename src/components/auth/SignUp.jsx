import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
// import { BrowserRouter as Link } from 'react-router-dom';
import { Link,  } from "react-router-dom";
import facebooklogo from './resources/facebook_icon.png';
import googleLogo from './resources/googleLogo.png';
// import Question from "./questionPage";



const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function facebookSignUpHandler() {

  }

  function googleSignUpHandler() {

  }
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
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
        <form onSubmit={signUp}>
          <h1 className="loginTitle">Sign Up</h1>
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
          <button className="loginButtonContainer" type="submit">
            <div className="buttonText">
              Sign Up
            </div>
          </button>
          <div className="lineContainer">
            <h2 className="line"><span className="lineSpan">or</span></h2>
          </div>
          <div>
            <button className="loginButtonContainer" onClick={facebookSignUpHandler}>
              <div className="buttonText">
              <img src={facebooklogo} className="facebookLogo" /> Sign Up with Facebook
              </div>
            </button>
          </div>
          <div>
            <button className="loginButtonContainer" onClick={googleSignUpHandler}>
              <div className="buttonText">
              <img src={googleLogo} className="facebookLogo" /> Sign Up with Google
              </div>
            </button>
          </div>
        </form>
        <div className="signUpRedirectContainer">
          <span>Already have an account? <Link to="/signin" className="signUpRedirectText">Log In</Link></span>
        </div>
        </div>

      
    </div>
  );
};

export default SignUp;