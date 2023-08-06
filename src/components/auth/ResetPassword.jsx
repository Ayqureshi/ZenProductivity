import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, {useState} from "react";
import "./ResetPassword.css"
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const ResetPassword = () => {

  const [email, setEmail] = useState('');
  // const [resetSuccess, setResetSuccess] = useState(null);

  const resetPasswordHandler = () => {
    console.log('working' + email)
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        // setResetSuccess(true);
        toast.success('Email sent successfully!', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode)
        // const errorMessage = error.message;
      //  setResetSuccess(false);
       toast.error('Please enter a valid email', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        // ..
    });
  }

  return (
    <div className="container">
      <div className="sign-in-container">
        <div className="resetPasswordTitle">
          <h1>
            Reset Password
          </h1>
        </div>
        <div className='bodyTextContainer'>
            <span className='bodyText'>
              Enter the email associated with your account and we&apos;ll send a link to reset your password.
            </span>
          </div>
        <div className="formContainer">
          <div className="title">
            Email
          </div>
          <input
            className="input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <button className="loginButtonContainer" onClick={resetPasswordHandler}>
          <span className="buttonText">
            Reset Password
          </span>
        </button>
        <div className="signUpRedirectContainer">
           <Link to="/loggingin" className="signUpRedirectText">Return to sign in</Link>
        </div>
        <ToastContainer 
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>

  )
}

export default ResetPassword;