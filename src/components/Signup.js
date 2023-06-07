import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

firebase.initializeApp({
  // Your Firebase configuration object
});

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // Form validation
      if (!email || !password) {
        setError('Please fill in all fields');
        return;
      }

      // Create a new user with email and password
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      console.log('User signed up:', user);

      // Reset form fields
      setEmail('');
      setPassword('');
      setError(null);

      // Do something else, such as redirect to a different page
    } catch (error) {
      // Handle sign-up errors
      const errorMessage = error.message;
      console.error('Sign-up error:', errorMessage);
      setError(errorMessage);
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p>{error}</p>}
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpForm;
