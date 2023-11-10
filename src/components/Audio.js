// import React from "react";
// import './Audio.css';
// import img3 from '../images/mic.png';
// import img4 from '../images/search.png';
// import img2 from '../images/whitez.png';
// import { Link } from 'react-router-dom';

// function Audio() {
//     return (
//         <div className="audio-page">
//         <div className="audio-container">
//                 <img src={img3} alt="" className="audio-image" />
//                 <p className="audio-text">Audio</p>
//         </div>
//         <div className="search-container">
//             <div className="input-wrapper">
//                 <input type="text" placeholder="Search audio files" className="search-input"/>
//                 <img src={img4} alt="" className="search-image" />
//             </div>
//         </div>
        
//         <div className="career">
//             <p className="text">
//                 <Link to="/careersuccess">CAREER SUCCESS STORIES</Link>
//             </p>
//         </div>
//         <div className="personal-development">
//             <p className="text">
//                 <Link to="/personalDevelopment">PERSONAL DEVELOPMENT</Link>
//             </p>
//         </div>
//         <div className="entrepreneurship">
//             <p className="text">
//                 <Link to="/entrepreneurship">ENTREPRENEURSHIP & STARTUPS</Link>
//             </p>
//         </div>
//         <div className="remote">
//             <p className="text">
//                 <Link to="/remoteWork">REMOTE WORK & DIGITAL NOMADISM</Link>
//             </p>
//             <img src={img2} alt="" className="zen-image" />
//         </div>
        
//          </div>
//     );

    
// }

// export default Audio;

import React, {useState} from "react";
import './Audio.css';
import img3 from '../images/mic.png';
import img4 from '../images/search.png';
import img2 from '../images/whitez.png';
import { Link } from 'react-router-dom';
import {storage} from '../firebase'; // storage initialized in firebase.js
import {listAll, ref} from "firebase/storage";

function Audio() {
    const [input, setInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
  
    const storageRef = storage; // Use the reference to the storage service
    const audioFolderRef = ref(storageRef, "audio"); // Reference to the 'audio' directory
  
    const listAudioFiles = async () => {
      try {
        const files = await listAll(audioFolderRef); // 
        const fileNamesPromises = files.items.map(async (item) => {
          return item.name;
        });
        const fileNames = await Promise.all(fileNamesPromises);
        console.log("Audio file names:", fileNames);
        return fileNames;
      } catch (error) {
        console.error("Error listing audio files:", error);
      }
    };
  
    const fetchData = async (value) => {
      setInput(value);
      const audioFiles = await listAudioFiles();

      const filteredResults = audioFiles ? audioFiles.filter((fileName) => fileName.toLowerCase().includes(value.toLowerCase())) : [];
      setSearchResults(filteredResults);
    };
  
    const handleChange = (value) => {
      // whenever change is made
      setInput(value);
      fetchData(value);
    };
    
    return (
        <div className="audio-page">
        <div className="audio-container">
                <img src={img3} alt="" className="audio-image" />
                <p className="audio-text">Audio</p>
        </div>
        <div className="search-container">
            <div className="input-wrapper">
                <input type="text" placeholder="Search audio files" className="search-input" 
                value={input} onChange={(e) => handleChange(e.target.value)}/>
                <img src={img4} alt="" className="search-image" />
            </div>
            <div className="search-results">
                {searchResults.map((result, index) => (
                <div key={index}>
                    <Link to={`/audio/${result}`}>{result}</Link>
                </div>
                ))}
            </div>
        </div>
        
        <div className="career">
            <p className="text">
                <Link to="/careersuccess">CAREER SUCCESS STORIES</Link>
            </p>
        </div>
        <div className="personal-development">
            <p className="text">
                <Link to="/personalDevelopment">PERSONAL DEVELOPMENT</Link>
            </p>
        </div>
        <div className="entrepreneurship">
            <p className="text">
                <Link to="/entrepreneurship">ENTREPRENEURSHIP & STARTUPS</Link>
            </p>
        </div>
        <div className="remote">
            <p className="text">
                <Link to="/remoteWork">REMOTE WORK & DIGITAL NOMADISM</Link>
            </p>
            <img src={img2} alt="" className="zen-image" />
        </div>
        
         </div>
    );
}

export default Audio;