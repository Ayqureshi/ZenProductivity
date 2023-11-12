import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './CareerSuccess.css';
import img8 from '../images/microphone.png';
import careersuccess from '../images/careerstories.png';
import PropTypes from 'prop-types'; // Import PropTypes for validation


function CareerSuccess({
  customTextSectionClass = "text-section",
  customTextSectionContent = <h1>Career Success Stories</h1>,
  episodes = [
    { title: "Ep. 1 - Zuck on Harvard", description: "Mark Zuckerberg talks about how he started Facebook. And yes, he adamantly states that the Winklevoss twins are a fraud." },
    { title: "Ep. 2 - Jeff Bezos Plotting World Domination", description: "Streaming? Cloud computing? Online retailer? Groceries? What else does Bezos have in mind? The grind never stops..." },
    { title: "Ep. 3 - Bill Gates Dealing With Divorce In the Public Eye", description: "The tea everyone’s been waiting for. Why did Bill cheat on Melinda?" },
    { title: "Career Success Title 4", description: "Description for episode 4" },
    { title: "Career Success Title 5", description: "Description for episode 5" },
    { title: "Career Success Title 6", description: "Description for episode 6" }
  ]
}) {
  const navigate = useNavigate();
  return (
    <>
        <div className={customTextSectionClass}>
          {customTextSectionContent}
        </div>
        <img src={careersuccess} className="career-image"></img>
      
      <div className="episodes">
        <button className="back" onClick={() => navigate(-1)}>
            ← All Podcasts
        </button>
        <ul className="custom-list">
          {episodes.map((episode, index) => (
            <li className="list-item" key={index}>
              <span className="number">{index + 1}.</span>
              <img src={img8} alt={`Description of Image ${index + 1}`} className="item-image" />
              <div className="audio-content">
                <h3><Link to={`/episodes/${index}`}>{episode.title}</Link></h3>
                <p>{episode.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
    
  );
}

// Add PropTypes validation
CareerSuccess.propTypes = {
  customTextSectionClass: PropTypes.string,
  customTextSectionContent: PropTypes.string,
  backgroundColor: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default CareerSuccess;