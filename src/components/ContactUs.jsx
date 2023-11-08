import React from 'react';
import './ContactUs.css';
import {firestore} from '../firebase';
// import { doc, setDoc } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import {useState} from "react";

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async() => {
        try{
            const contactCollection = collection(firestore, 'contactForm');
            // create a data object with the input values
            const data = {
                name,
                email,
                message,
            };
            await addDoc(contactCollection, data);
            console.log('Document added to Firestore successfully');
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Error storing data in Firestore:', error);
        }
      };

  return (
    <div className='page-container'>
        <h1 className='contact-title'>Contact Us</h1>
        <div className="contact-text">
            <p>Questions or comments? We would love to get in touch.</p>
            <p>Fill out the form below.</p>
        </div>

        <div className='body-content'>
            <div className="img-container-contact">
                <img src="https://s2.r29static.com/bin/entry/4c1/x/1765183/image.png" alt="Olaf" />
            </div>

            <div className='form'>
                <div className="input-container">
                    <p>Last Name, First Name<span className="red-asterisk">*</span></p>
                    <input type="text" className="input-box" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="input-container">
                    <p>Email<span className="red-asterisk">*</span></p>
                    <input type="text" className="input-box" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="input-container">
                    <p>Message<span className="red-asterisk">*</span></p>
                    <input type="text" className="input-box" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <div className="button-container">
                    <button className="circular-button" onClick={handleSubmit}>
                    Submit
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ContactUs;
