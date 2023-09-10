    import React from "react";
    import { Link } from 'react-router-dom';
    import './CareerSuccess.css';
    import img5 from '../images/microphone 1.png';
    import img6 from '../images/mic-transparent-background.png';
    import img7 from '../images/playbutton.png';
    function CareerSuccess({backgroundColor = "#E47C42", 
                            title = "CAREER SUCCESS STORIES", 
                            description = "Inspiring interviews with professionals who have achieved remarkable career success.",
                            episodes = [{ title: "Career Success Title 1", description: "Description for episode 1" },
                            {title: "Career Success Title 2", description: "Description for episode 2"},
                            {title: "Career Success Title 3", description: "Description for episode 3"},
                            {title: "Career Success Title 4", description: "Description for episode 4"},
                            {title: "Career Success Title 5", description: "Description for episode 5"},
                            {title: "Career Success Title 6", description: "Description for episode 6"}
                        ]
                        }) {
        return (
    
                <><div className="rectangle" style={{ backgroundColor: backgroundColor}}>
                <div className="mic-container">
                    <img src={img5} alt="" className="microphone" />
                    <p className="mic">Audio</p>
                </div>
                <div className="text-section">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className="big-mic">
                    <img src={img6} alt="Success" />
                </div>
            </div>
            <div className="episodes">
                <h1 class="episode-header">All Episodes</h1>
                <img src={img7} alt="" className="playbutton" />

                <ul className="custom-list">
                    {episodes.map((episode, index) => (
                        <li className="list-item" key={index}>
                            <span className="number">{index + 1}.</span>
                            <img src={img6} alt={`Description of Image ${index + 1}`} className="item-image" />
                            <div className="audio-content">
                            <h3><Link to={`/episodes/${index}`}>{episode.title}</Link></h3>
                                <p>{episode.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
    
            </div></>
        );
    }

    export default CareerSuccess; 