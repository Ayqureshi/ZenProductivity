import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
// import { BrowserRouter as Link } from 'react-router-dom';
import { Link,  } from "react-router-dom";
// import Question from "./questionPage";



const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h1>Create Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        
        <ul>
          <li>
            <Link to="/questions">
              <button type="submit">
                Sign Up
              </button>
            </Link>
          </li>
        </ul>


        {/* <Routes>
          <Route path="/Questions" element={<Question />} />
        </Routes> */}
        
      </form>
     
    </div>
  );
};

export default SignUp;