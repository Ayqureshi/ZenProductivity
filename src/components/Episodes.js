import React from "react";
import { useNavigate } from 'react-router-dom';
import './Episodes.css';
import image from '../images/microphone.png';

function Episodes() {
    const navigate = useNavigate();

    return (
        <><button className="back-button" onClick={() => navigate(-1)}>
            ← Back
        </button>
        <div id="individual-episode">
                <img src={image} alt="Episode Description" className="microphone-image" />
                <div className="green-box"></div>
                <div className="episode1-text">
                    <h1>About this episode:</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
        </div></>
    );
}

export default Episodes;