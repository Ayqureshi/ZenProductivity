import React from 'react';
import './loggingin.css';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import AuthDetails from './AuthDetails';

function loggingin() {
  return (
    <div className="App">
      <SignIn />
      <SignUp />
      <AuthDetails />
    </div>
  );
}

export default loggingin;
