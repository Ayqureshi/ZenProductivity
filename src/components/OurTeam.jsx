import React from 'react';
import "./OurTeam.css";
import Ameen from '../images/IMG_8056.jpg';
import Jamie from '../images/IMG_7345.jpg';


function OurTeam() {
    return (
        <div>
            <div className="title">
                <h1> Our Team </h1>
            </div>
            <div className="row1">
                <div>
                    <img src={Ameen} alt="" className="img-pfp"/>
                    <h2>
                        Ameen Qureshi
                    </h2>
                    <p>
                        Project Lead
                    </p>
                </div>
                <div>
                    <img src={Ameen} alt="" className="img-pfp"/>
                    <h2>
                        Esther Kim
                    </h2>
                    <p>
                        Front-End Developer
                    </p>
                </div>
                <div>
                    <img src={Ameen} alt="" className="img-pfp"/>
                    <h2>
                        Kathy Lin
                    </h2>
                    <p>
                        Front-End Devloper
                    </p>
                </div>
            </div>
            <div className="row2">
                <div>
                    <img src={Ameen} alt="" className="img-pfp"/>
                    <h2>
                        Yingxin Wu
                    </h2>
                    <p>
                        Back-End Developer
                    </p>
                </div>
                <div>
                    <img src={Jamie} alt="" className="img-pfp"/>
                    <h2>
                        Jamie Hsu
                    </h2>
                    <p>
                        UI/UX Designer
                    </p>
                </div>
                <div>
                    <img src={Ameen} alt="" className="img-pfp"/>
                    <h2>
                        Azam Modam
                    </h2>
                    <p>
                        UI/UX Designer
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OurTeam;