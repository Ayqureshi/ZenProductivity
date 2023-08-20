import React from "react";
import './Audio.css';
import img3 from '../images/mic.png';
import img4 from '../images/search.png';
import img2 from '../images/whitez.png';
import { Link } from 'react-router-dom';

function Audio() {
    return (
        <>
        <div className="audio-container">
                <img src={img3} alt="" className="audio-image" />
                <p className="audio-text">Audio</p>
        </div>
        <div className="search-container">
            <div className="input-wrapper">
                <input type="text" placeholder="Search audio files" className="search-input"/>
                <img src={img4} alt="" className="search-image" />
            </div>
        </div>
        
        <div className="career">
            <p className="text">
                <Link to="/careersuccess">CAREER SUCCESS STORIES</Link>
            </p>
        </div>
        <div className="personal-development">
            <p className="text">
                <Link to="/careersuccess">CAREER SUCCESS STORIES</Link>
            </p>
        </div>
        <div className="entrepreneurship">
            <p className="text">
                <Link to="/careersuccess">CAREER SUCCESS STORIES</Link>
            </p>
        </div>
        <div className="remote">
            <p className="text">
                <Link to="/careersuccess">CAREER SUCCESS STORIES</Link>
            </p>
            <img src={img2} alt="" className="zen-image" />
        </div>
        
         </>
    );

    
}

export default Audio;