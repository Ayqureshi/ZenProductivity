import React from "react";
import { Link } from 'react-router-dom';
import './CareerSuccess.css';
import img5 from '../images/microphone 1.png';
import img6 from '../images/mic-transparent-background.png';
import img7 from '../images/playbutton.png';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import {storage} from '../firebase'; // storage initialized in firebase.js
import {ref, getDownloadURL} from "firebase/storage";
import {useEffect, useState, useRef} from "react";

function CareerSuccess({
  backgroundColor = "#E47C42",
  title = "CAREER SUCCESS STORIES",
  description = "Inspiring interviews with professionals who have achieved remarkable career success.",
  episodes = [
    { title: "Career Success Title 1", description: "Description for episode 1" },
    { title: "Career Success Title 2", description: "Description for episode 2" },
    { title: "Career Success Title 3", description: "Description for episode 3" },
    { title: "Career Success Title 4", description: "Description for episode 4" },
    { title: "Career Success Title 5", description: "Description for episode 5" },
    { title: "Career Success Title 6", description: "Description for episode 6" }
  ]
}) {
  const [audioURL, setAudioURL] = useState(null);
  const [audioStatus, changeAudioStatus] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef();

  useEffect(() => {
    const mp3Ref = ref(storage, 'audio/testing.mp3'); // get reference to where audio is stored

    getDownloadURL(mp3Ref)
      .then((url) => {
        setAudioURL(url); // if successful, update the state of audioURL
      })
      .catch((error) => {
        console.error("Error downloading the MP3 file:", error);
      });
  }, []);

  const startAudio = () => {
    audioRef.current.play();
    changeAudioStatus(true);
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    changeAudioStatus(false);
  };

  const handleForward30Seconds = () => {
    if (audioRef.current) {
      console.log("forwarding??");
      console.log(audioRef.current.currentTime);
      audioRef.current.currentTime += 30;
    }
  };

  const handleBackward30Seconds = () => {
    if (audioRef.current) {
      console.log("going back??");
      audioRef.current.currentTime -= 30;
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSliderChange = (e) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };


  return (
    <>
      <div className="rectangle" style={{ backgroundColor: backgroundColor }}>
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
        <h1 className="episode-header">All Episodes</h1>
        <img src={img7} alt="" className="playbutton" />

        <ul className="custom-list">
          {episodes.map((episode, index) => (
            <li className="list-item" key={index}>
              <span className="number">{index + 1}.</span>
              <img src={img6} alt={`Description of Image ${index + 1}`} className="item-image" />
              <div className="audio-content">
                <h3><Link to={`/episodes/${index}`}>{episode.title}</Link></h3>
                <p>{episode.description}</p>
                <div>
                  {audioURL ? (
                    <audio ref={audioRef} src={audioURL} onTimeUpdate={handleTimeUpdate}>
                    </audio>
                  ) : (
                    'Loading...' // when getting source
                  )}
                  <input
                    type="range"
                    min="0"
                    max={audioRef.current ? audioRef.current.duration : 0}
                    step="1"
                    value={currentTime}
                    onChange={handleSliderChange}
                  />
                </div>
                  <button onClick={handleForward30Seconds}>Forward 30 seconds</button>
                  {/* adding buttons */}
                  {audioStatus ? (
                    <button onClick={pauseAudio}>pause</button>
                  ) : (
                    <button onClick={startAudio}>start</button>
                  )}
                <button onClick={handleBackward30Seconds}>Backward 30 seconds</button>
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
