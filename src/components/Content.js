import React from "react";
import { Link } from 'react-router-dom'; // Import the Link component
import './Content.css';
import img2 from '../images/whitez.png';
import {Link} from 'react-router-dom';


function Content() {
    return (
        <div className = "app-container">
        <div className="content">
            <h1>Work smarter.</h1>
            <h1>Chill harder!</h1> {/* Escape the single quote */}
        </div>
        <div className="content2">
            <p>Discover a world of growth and connection through Zen Productivity’s vibrant community, engaging audio interviews, and enriching articles.</p>
        </div>
        <div className="green-line"></div>
        <div className="content3">
            <p>Gain valuable insights from like-minded individuals, delve into thought-provoking interviews with experts, and explore a wealth of articles to fuel your personal and professional growth.</p>
        <br></br>
        Connect, learn, and thrive with our app&apos;s diverse resources at your fingertips. {/* Escape the single quote */}
        </div>
        <div className="green-semi-circle"></div>
        <div><img src={img2} alt ="" className="edited-image"/></div>
        <div className="green-rectangle">
            <h2>
            From college <br/> to career.
            </h2>
            <div className="white-line"></div>
        </div>
        {/* <div className="white-line"></div> */}
        <div className="black-line"></div>
        <div className="content4">
            <p>Join other recent graduates as we help you leverage and translate your unique academic experience to maximize your practical skill set while you begin your professional journey.</p>
        </div>
        <div>
            <img src="https://www.hepper.com/wp-content/uploads/2021/11/rsz_shutterstock_1765335680.jpg" alt ="temp" className="table-image"/>
        </div>

        <div className = "image-container">
            <div className = "image-card">
                <img src="https://media.istockphoto.com/id/942498970/photo/young-happy-smiling-white-samoyed-dog-or-bjelkier-sammy-sit-outdoor-in-green-spring-meadow.jpg?s=612x612&w=0&k=20&c=11OGTg7VZeq-Vk9EPwZgiFM8ymPNC5OoEwAN3P7eWLo=" alt ="temp" className="network-image"/>
                <div className="networking-title"> <h3>Networking and Relationship Building</h3></div>
                <div className="networking-content">   
                    <p>Connect to an expansive international professional network to gain insights, mentorship, and potential job opportunities, maximizing your career’s  prospects.</p>
                </div>
            </div>

            <div className = "image-card">
                <img src="https://media.istockphoto.com/id/942498970/photo/young-happy-smiling-white-samoyed-dog-or-bjelkier-sammy-sit-outdoor-in-green-spring-meadow.jpg?s=612x612&w=0&k=20&c=11OGTg7VZeq-Vk9EPwZgiFM8ymPNC5OoEwAN3P7eWLo=" alt ="temp" className="learning-image"/>
                <div className="learning-title"> <h3>Continuous Learning and Skill Development</h3> </div>
                <div className="learning-content">   
                    <p>Embrace ongoing learning and adapt to changes. Your knowledge is valuable, but stay open to new skills and technologies to thrive in a rapidly evolving professional landscape.</p>
                </div>
            </div>

            <div className = "image-card">
                <img src="https://media.istockphoto.com/id/942498970/photo/young-happy-smiling-white-samoyed-dog-or-bjelkier-sammy-sit-outdoor-in-green-spring-meadow.jpg?s=612x612&w=0&k=20&c=11OGTg7VZeq-Vk9EPwZgiFM8ymPNC5OoEwAN3P7eWLo=" alt ="temp" className="goals-image"/>
                <div className="goals-title"> <h3>Setting Clear Goals and Seeking Feedback</h3></div>
                <div className="goals-content">   
                    <p>Learn to stay focused and motivated with clear short and long-term goals for your career, and proactively seek feedback to improve and showcase your dedication to your role.</p>
                </div>
            </div>
        </div>
        <Link to="/contact">Go to Contact Page</Link> {/* Add this Link component */}
        <Link to="/support-request">Go to Support Request Page</Link> {/* Add this Link component */}
        </div>

    );
}

export default Content;
