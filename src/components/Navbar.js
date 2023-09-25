import React from 'react';
// import { Link } from 'react-router-dom';
import img1 from '../images/zenpro.png';
import "./NavbarStyles.css";

function Navbar(){
    return(
        <>
        <nav>
            <img src={img1} alt="" />
            <div>
                <ul id="navbar">
                    <li><a href="/">ABOUT US</a></li>
                    <li><a href="/">COMMUNITY</a></li>
                    <li><a href="/audio">AUDIO</a></li>
                    <li><a href="/">ARTICLES</a></li>
                </ul>
            </div>
        </nav>
        </>
    );
}

export default Navbar;
