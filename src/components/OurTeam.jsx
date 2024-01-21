import React from 'react';
import "./OurTeam.css";
import Ameen from '../images/IMG_8056.jpg';
import Jamie from '../images/IMG_7345.jpg';
import Yingxin from '../images/yingxin.JPG';
import Mohammed from '../images/mohammed.png';
import Kathy from '../images/kathy.jpeg';
import Azam from '../images/azam.png';
import Esther from '../images/esther.png';


function OurTeam() {
    return (
        <div>
            <div className="our-team-title">
                <h1> Our Team </h1>
            </div>
            <div className="row1">
                <div className='pfp-outer-container'>
                    <div className='pfp-container'>
                        <img src={Ameen} alt="" className="img-pfp"/>
                    </div>
                    <h2>Ameen Qureshi</h2>
                    <p>Project Lead</p>
                </div>
                <div className='pfp-outer-container'>
                    <div className='pfp-container'>
                        <img src={Esther} alt="" className="img-pfp"/>
                    </div>
                    <h2>Esther Kim</h2>
                    <p>Front-End Developer</p>
                </div>
                <div className='pfp-outer-container'>
                    <div className='pfp-container'>
                        <img src={Kathy} alt="" className="img-pfp"/>
                    </div>
                    <h2>Kathy Lin</h2>
                    <p>Front-End Developer</p>
                </div>
            </div>
            <div className="row2">
                <div className='pfp-outer-container'>
                    <div className='pfp-container'>
                        <img src={Yingxin} alt="" className="img-pfp"/>
                    </div>
                    <h2>Yingxin Wu</h2>
                    <p>Back-End Developer</p>
                </div>
                <div className='pfp-outer-container'>
                    <div className='pfp-container'>
                        <img src={Mohammed} alt="" className="img-pfp"/>
                    </div>
                    <h2>Mohammed Alamgir</h2>
                    <p>Back-End Developer</p>
                </div>
                <div className='pfp-outer-container'>
                    <div className='pfp-container'>
                        <img src={Jamie} alt="" className="img-pfp"/>
                    </div>
                    <h2>Jamie Hsu</h2>
                    <p>UI/UX Designer</p>
                </div>
                <div className='pfp-outer-container'>
                    <div className='pfp-container'>
                        <img src={Azam} alt="" className="img-pfp"/>
                    </div>
                    <h2>Azam Modam</h2>
                    <p>UI/UX Designer</p>
                </div>
            </div>
        </div>
    );
}

export default OurTeam;