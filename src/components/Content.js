import React from "react";
import './Content.css';
import img2 from '../images/whitez.png';

function Content() {
    return (
        <>
        <div className="content">
            <h1>Work smarter.</h1>
            <h1>Chill harder!</h1>
        </div>
        <div className="content2">
            <p>Discover a world of growth and connection through Zen Productivity’s vibrant community, engaging audio interviews, and enriching articles.</p>
        </div>
        <div className="green-line"></div>
        <div className="content3">
            <p>Gain valuable insights from like-minded individuals, delve into thought-provoking interviews with experts, and explore a wealth of articles to fuel your personal and professional growth.</p>
        <br></br>
        Connect, learn, and thrive with our app's diverse resources at your fingertips.
        </div>
        <div className="green-semi-circle"></div>
        <div><img src={img2} alt ="" className="edited-image"/></div>
            </>
    );
}

export default Content;