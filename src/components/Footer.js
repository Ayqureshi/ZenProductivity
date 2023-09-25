import React from 'react';
import './Footer.css';
import img1 from '../images/zenp.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import facebook from '../images/facebook.png';
function Footer() {
  return (
    <footer className="footer">
        <div id ="flex-box">
            <div id ="footer-img">
                <img src={img1} alt =""/>
                <div id="social-icons">
                  <a href="https://instagram.com/your_username" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram"/></a>
                  <a href="https://linkedin.com/in/your_username" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn"/></a>
                  <a href="https://facebook.com/your_username" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Facebook"/></a>
                </div>
            </div>
            
        
            <div id="about-us">
                <p><strong>About US</strong></p>
                <p>Our Mission</p>
                <p>Our Team</p>
                <p>FAQs</p>
            </div>
            <div id ="customer-care">
                <p><strong>Customer Care</strong></p>
                <p>Support Request</p>
                <p>Contact us</p>
            </div>
            <div id ="stewarship">
                <p><strong>Stewarship</strong></p>
                <p>Privacy Policy & Data Security</p>
                <p>Community Service</p>
            </div>
            <div id ="vertical-line">
            
            </div>
            <div id ="copy-right">
                <p>© 2023 ZenProducitivty</p>
                <p>All rights reserved.</p>

            </div>
        </div>

        
      
    </footer>
  );
}

export default Footer;