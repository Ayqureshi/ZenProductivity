import React from "react";
import './CareerSuccess.css';
import img5 from '../images/microphone 1.png';
import img6 from '../images/mic-transparent-background.png';
function CareerSuccess() {
    return (
   
            <div className="rectangle">
                <div className="mic-container">
                    <img src={img5} alt="" className="microphone" />
                    <p className="mic">Audio</p>
                </div>
                <div className="text-section">
                    <h1>CAREER SUCCESS STORIES</h1>
                    <p>Inspiring interviews with professionals who have achieved remarkable career success.</p>
                </div>
                <div className="big-mic">
                    <img src={img6} alt="Success" />
                </div>
            </div>
    );
}

export default CareerSuccess; 