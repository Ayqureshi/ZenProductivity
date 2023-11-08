import React from 'react';
import './SupportRequest.css';
import {firestore} from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import {useState} from "react";

const SupportRequest = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [issue, setIssue] = useState('');

    const handleSubmit = async() => {
        try{
            const contactCollection = collection(firestore, 'supportForm');
            // create a data object with the input values
            const data = {
                name,
                email,
                issue,
            };
            await addDoc(contactCollection, data);
            console.log('Document added to Firestore successfully');
            setName('');
            setEmail('');
            setIssue('');
        } catch (error) {
            console.error('Error storing data in Firestore:', error);
        }
      };

  return (
    <div className='support-page-container'>
        <h1 className='support-request-title'>Support Request</h1>
        <div className='outer-body'>
            <div className="description">
                <p className='help-text'>Need Help?</p>
                <p>We understand that technology can sometimes be frustrating, and we are here to help you resolve any issues you are having with our website.</p>
                <p>Please use the form below to describe the problem you are encountering, and our support team will do their best to assist you promptly.</p>
            </div>

            <div className='main-body'>
                <div className='support-form'>
                    <h2 className='form-title'>Support Form</h2>

                    <div className="input-field">
                        <p>Last Name, First Name<span className="red-asterisk">*</span></p>
                        <input type="text" className="form-box" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div className="input-field">
                        <p>Email<span className="red-asterisk">*</span></p>
                        <input type="text" className="form-box" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="input-field-big">
                        <p>Describe the issue<span className="red-asterisk">*</span></p>
                        <input type="text" className="form-box-big" value={issue} onChange={(e) => setIssue(e.target.value)}/>
                    </div>
                    <div className="support-request-button-container">
                        <button className="support-request-button" type="submit" onClick={handleSubmit}>
                        Submit
                        </button>
                    </div>
                </div>
                <div className="pic-container">
                    <img src="https://media1.popsugar-assets.com/files/thumbor/IAEFufO2h7uko7ZMUJ7frfhZEkw/768x0:2768x2000/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/12/07/727/n/1922283/5ab0521a5debd30e41aaf5.29396688_/i/funny-tweets-about-olaf-from-frozen-height.jpg" alt="Placeholder Olaf picture" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default SupportRequest;
