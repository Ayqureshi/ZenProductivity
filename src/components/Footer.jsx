import React from 'react';
import './Footer.css';
import instagram from '../images/instagram.svg';
import linkedin from '../images/linkedin-in.svg';
import facebook from '../images/facebook-f.svg';

function Footer() {
  return (
    <footer className="footer">
      <div id="flex-box">
        
        <div id="about-us">
          <p><strong>About US</strong></p>
          <p><a href="/ourmission" className="footer-text">Our Mission</a></p>
          <p><a href="/ourteam" className="footer-text">Our Team</a></p>
          <p><a href="/aboutus" className="footer-text">About Us</a></p>
          <p>FAQs</p>
        </div>
        <div id="customer-care">
          <p><strong>Customer Care</strong></p>
          <p><a href="/support-request" className="footer-text">Support Request</a></p>
          <p><a href="/contact" className="footer-text">Contact Us</a></p>
        </div>
        <div id="stewarship">
          <p><strong>Stewarship</strong></p>
          <p>Privacy Policy & Data Security</p>
          <p>Community Service</p>
        </div>
        <div id="vertical-line"></div>
        <div id="copy-right">
          <p>© 2023 ZenProducitivty</p>
          <p>All rights reserved.</p>
        </div>
        
        {/* Social icons with linked images */}
        <div id="social-icons">
          <a href="https://instagram.com/your_username" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://linkedin.com/in/your_username" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://facebook.com/your_username" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
