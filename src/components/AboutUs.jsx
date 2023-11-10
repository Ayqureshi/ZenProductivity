import React from 'react';
import './AboutUs.css';
import arrow from '../images/arrow.png';
import arrow2 from '../images/arrow2.png';
const AboutUs = () => {
 
  return (
        <div className='about-us-container'>
            <h1 className='about-us-title'>About Us</h1>
            <div className='first-section'>
                <div className='about-us-img'>
                    <img src="https://media.tenor.com/rPYosYmsvokAAAAC/work-homework.gif" alt="working picture" />
                </div>
                <div className='bubble-container'>
                    <div className='about-us-text'>
                    We have all been there. Whether it is an impolite team leader, an impossible to complete task, or an existential crisis--work is stressful.
                    </div>
                </div>
            </div>
            <div className='second-section'>
                <div className='arrow-container'>
                    <img src={arrow2} alt="arrow" className='arrow-img'></img>
                </div>
            </div>
            <div className='third-section'>
                <div className='bubble-container'>
                    <div className='about-us-text'>
                        Sometimes you just want to scream, give up, and send a very well worded email. But deep down you know you need to manage these complex emotions.
                    </div>
                </div>
            </div>
            <div className='fourth-section'>
                <div className='arrow-container2'>
                    <img src={arrow} alt="arrow" className='arrow-img'></img>
                </div>
            </div>
            <div className='fifth-section'>
                <div className='bubble-container'>
                    <div className='about-us-text'>
                        Insert text here...
                    </div>
                </div>
            </div>
        </div>
  );
};

export default AboutUs;
