import React, { useState, useEffect } from "react";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Listen for changes to the state of the form fields
    const handleChange = (e) => {
      const { target: { value } } = e;
      setFirstName(value);
      setLastName(value);
      setEmail(value);
    };

    // Attach the change handler to the form fields
    document.querySelectorAll("input").forEach(input => input.addEventListener("change", handleChange));

    // Remove the change handler when the component unmounts
    return () => document.querySelectorAll("input").forEach(input => input.removeEventListener("change", handleChange));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile submitted:", { firstName, lastName, email });
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" value={firstName} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={lastName} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} />
        </div>
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default Profile;
