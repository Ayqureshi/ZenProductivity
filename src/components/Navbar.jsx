import React from 'react';
// import { Link } from 'react-router-dom';
import img1 from '../images/zenpro.png';
import "./NavbarStyles.css";


function Navbar(){
    return(
        <>
        <nav>
        <a href="/">
            <img src={img1} alt="" />
        </a>
            <div>
                <ul id="navbar">
                    <li><a href="/aboutus">ABOUT US</a></li>
                    <li><a href="/chatbot">CHATBOT</a></li>
                    {/* <li><a href="community/">COMMUNITY</a></li> */}
                    <li><a href="/audio">AUDIO</a></li>
                    <li><a href="articles/">ARTICLES</a></li>
                </ul>
            </div>
        </nav>
        </>
    );
}

export default Navbar;
