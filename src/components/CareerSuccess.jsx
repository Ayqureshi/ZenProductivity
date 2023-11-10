import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './CareerSuccess.css';
import img8 from '../images/microphone.png';
import careersuccess from '../images/careerstories.png';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import {storage} from '../firebase'; // storage initialized in firebase.js
import {ref, getDownloadURL} from "firebase/storage";
import {useState, useRef, useEffect} from "react";


function CareerSuccess({
  episodes = [
    { title: "Career Success Title 1", description: "Description for episode 1" },
    { title: "Career Success Title 2", description: "Description for episode 2" },
    { title: "Career Success Title 3", description: "Description for episode 3" },
    { title: "Career Success Title 4", description: "Description for episode 4" },
    { title: "Career Success Title 5", description: "Description for episode 5" },
    { title: "Career Success Title 6", description: "Description for episode 6" }
  ]
}) {
  const navigate = useNavigate();

  const [loadedEpisodes, setLoadedEpisodes] = useState([]);
  const [audioData, setAudioData] = useState(episodes.map(() => ({
    audioURL: null,
    audioStatus: false,
    currentTime: 0,
    audioRef: useRef(null),
  })));

  // Load all audio files when the component is mounted
  useEffect(() => {
    episodes.forEach((episode, index) => {
      loadEpisodeAudio(index);
    });
  }, []);
  
  const loadEpisodeAudio = (index) => {
    const mp3Ref = ref(storage, `audio/career_episode${index + 1}.mp3`);

    getDownloadURL(mp3Ref)
      .then((url) => {
        setAudioData((prevAudioData) =>
          prevAudioData.map((item, i) =>
            i === index ? { ...item, audioURL: url } : item
          )
        );
        setLoadedEpisodes((prevLoadedEpisodes) => [...prevLoadedEpisodes, index]);
      })
      .catch((error) => {
        console.error(`Error downloading the MP3 file for episode ${index + 1}:`, error);
      });
  };

  const isEpisodeLoaded = (index) => loadedEpisodes.includes(index);

  const startAudio = (index) => {
    if (audioData[index].audioRef.current) {
      audioData[index].audioRef.current.play();
      setAudioData((prevAudioData) =>
        prevAudioData.map((item, i) =>
          i === index ? { ...item, audioStatus: true } : item
        )
      );
    }
  };
  
  const pauseAudio = (index) => {
    audioData[index].audioRef.current.pause();
    setAudioData((prevAudioData) =>
      prevAudioData.map((item, i) =>
        i === index ? { ...item, audioStatus: false } : item
      )
    );
  };
  
  const handleForward30Seconds = (index) => {
    if (audioData[index].audioRef.current) {
      audioData[index].audioRef.current.currentTime += 30;
    }
  };
  
  const handleBackward30Seconds = (index) => {
    if (audioData[index].audioRef.current) {
      audioData[index].audioRef.current.currentTime -= 30;
    }
  };
  
  const handleSliderChange = (e, index) => {
    const newTime = parseFloat(e.target.value);
    audioData[index].audioRef.current.currentTime = newTime;
    setAudioData((prevAudioData) =>
      prevAudioData.map((item, i) =>
        i === index ? { ...item, currentTime: newTime } : item
      )
    );
  };

  const handleTimeUpdate = (index) => {
    console.log(`handleTimeUpdate: Index ${index}`);
    if (audioData[index] && audioData[index].audioRef) {
      const audioRef = audioData[index].audioRef.current;
      if (audioRef) {
        const currentTime = audioRef.currentTime;
        setAudioData((prevAudioData) =>
          prevAudioData.map((item, i) =>
            i === index ? { ...item, currentTime } : item
          )
        );
      } else {
        console.log(`handleTimeUpdate: Invalid audioRef for index ${index}`);
      }
    } else {
      console.log(`handleTimeUpdate: Invalid index or audioData for index ${index}`);
    }
  };  
  
  return (
    <>
      <div className="text-section">
        <h1>Career Success Stories</h1>
      </div>
      <img src={careersuccess} className="career-image" alt="Career Success" />

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
                <h3>
                  <Link to={`/episodes/${index}`}>{episode.title}</Link>
                </h3>
                <p>{episode.description}</p>
                <div>
                  {isEpisodeLoaded(index) ? (
                    <audio
                      ref={audioData[index].audioRef}
                      src={audioData[index].audioURL}
                      onTimeUpdate={() => handleTimeUpdate(index)}
                    ></audio>
                  ) : (
                    <button onClick={() => loadEpisodeAudio(index)}>Load Audio</button>
                  )}
                  <input
                    type="range"
                    min="0"
                    max={
                      audioData[index].audioRef.current
                        ? audioData[index].audioRef.current.duration
                        : 0
                    }
                    step="1"
                    value={audioData[index].currentTime}
                    onChange={(e) => handleSliderChange(e, index)}
                  />
                </div>
                <button onClick={() => handleForward30Seconds(index)}>
                  Forward 30 seconds
                </button>
                {audioData[index].audioStatus ? (
                  <button onClick={() => pauseAudio(index)}>Pause</button>
                ) : (
                  <button onClick={() => startAudio(index)}>Start</button>
                )}
                <button onClick={() => handleBackward30Seconds(index)}>
                  Backward 30 seconds
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

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