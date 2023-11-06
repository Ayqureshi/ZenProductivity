import React from 'react';
//import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './OurMission.css';
import img from '../images/30177630.jpg'
import img1 from '../images/Group 128.png'
import img2 from '../images/Group 129.png'
import img3 from '../images/Group 130.png'
import tele from '../images/image 29.png'
import redCouch from '../images/image 26.png'

// Inside the Router component

function OurMission() {
  return (
    <div>
      <div className="title">
        <h1> Our Mission </h1>
      </div>
      <div className="img-container">
        <img src={img} alt="" className="img-mission"/>
      </div>
      <div className="body-container">
        <p className="body">
           At ZenProductivity, our mission is to empower interns and new graduates to thrive both personally and professionally as they embark on their journey in the corporate world. We are dedicated to fostering mental health and well-being while enhancing productivity. 
        </p>
      </div>
      <div className="images">
        <img src={img1} alt="" className="img-facts"/>
        <img src={img2} alt="" className="img-facts"/>
        <img src={img3} alt="" className="img-facts"/>
      </div>
      <div className="title">
        <h1> Were Here to Support. Guide. Inspire </h1>
      </div>
      <div className="imageText">
        <p className="imageTextBody">
          Our commitment is to provide an enriching platform where young professionals can access valuable content and guidance from industry experts. We believe in equipping the next generation with the knowledge, tools, and strategies they need to excel in their careers while maintaining a healthy work-life balance. 
        </p>
        <img src={redCouch} alt="" className="img-redCouch"/>
      </div>
      <div className="imageText2">
        <img src={tele} alt="" className="img-tele"/>
        <p className="imageTextBody">
          Navigating the challenges of workforce is tough. ZenProductivity will ultimately help individuals reach their full potential with confidence and resilience.
        </p>
      </div>

    </div>
  );
}


export default OurMission;