import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import './Episodes.css';
import image from '../images/marie-curie.png';
import forwardbutton from '../images/forwardbutton.png';
import backwardbutton from '../images/backwardbutton.png';
import playbutton from '../images/playbutton.webp';
import pausebutton from '../images/pausebutton.png';
import {storage} from '../firebase'; // storage initialized in firebase.js
import {ref, getDownloadURL} from "firebase/storage";
import { useEffect, useState, useRef} from "react";


function Episodes() {
    const navigate = useNavigate();
    const { episodeNumber } = useParams();
    const episodeContent = [
      { title: "Episode 1 - Personal Development", description: "Dr. Tracy Bower holds a PHD in Sociology from MSU and is currently a VP at Steelcase for workplace insights. She is also a contributor to Forbes and Newsroom and talks frequently about mental health in the workplace. She shared her insights on what makes someone stand out and how to balance both your career and mental health easily. She also shared some advice when making a career decision and most importantly made it clear that you are your biggest" },
      { title: "Episode 2 - Personal Development", description: "Personal Development: Description for episode 2" },
      { title: "Episode 3 - Personal Development", description: "Personal Development: Description for episode 3" },
      { title: "Episode 4 - Personal Development", description: "Personal Development: Description for episode 4" },
      { title: "Episode 5 - Personal Development", description: "Personal Development: Description for episode 5" },
      { title: "Episode 6 - Personal Development", description: "Personal Development: Description for episode 6" }
    ];
    const episodeNumberInt = parseInt(episodeNumber);
    console.log("Episode Number: " + episodeNumber);
    console.log("Episode Number Int: " + episodeNumberInt);
    console.log("Episode Content Length: " + episodeContent.length);
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
        <div id="title">
            <div className="episode1-title">
                <h1>{episodeContent[episodeNumberInt].title}</h1>
            </div>
        </div>
        <div id="individual-episode">
                <img src={image} alt="Episode Description" className="microphone-image" />
                <div className="text-box">
                    <p>{episodeContent[episodeNumberInt].description}</p>
                </div>
                <div className="episode1-player">
                <div>
                  {audioURL ? (
                    <audio ref={audioRef} src={audioURL} onTimeUpdate={handleTimeUpdate}>
                    </audio>
                  ) : (
                    'Loading...' // when getting source
                  )}
                  <input
                    className="progress-bar"
                    type="range"
                    min="0"
                    max={audioRef.current ? audioRef.current.duration : 0}
                    step="1"
                    value={currentTime}
                    onChange={handleSliderChange}
                  />
                </div>
                <img src = {backwardbutton}
                    alt="Backward 30 seconds"
                    onClick={handleBackward30Seconds}
                    className="backward-button" 
                />
                
                  {/* adding buttons */}
                  {audioStatus ? (
                    <img src = {pausebutton}
                    alt="Pause Button"
                    onClick={pauseAudio}
                    className="pause-button" />
                  ) : (
                    <img src = {playbutton}
                    alt="Play Button"
                    onClick={startAudio}
                    className="play-button" />
                  )}

                <img src = {forwardbutton}
                    alt="Forward 30 seconds"
                    onClick={handleForward30Seconds}
                    className="forward-button" 
                />
            
                </div>
        </div>
        <button className="back-button" onClick={() => navigate(-1)}>
            ← Career Success Stories
        </button></>
    );
}

export default Episodes;