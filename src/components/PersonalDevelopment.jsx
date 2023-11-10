import React from "react";
import CareerSuccess from './CareerSuccess';
import { Link } from 'react-router-dom';
import './CareerSuccess.css';

// import img from '../images/personaldevelopment.png';

function PersonalDevelopment() {
    const personalDevelopmentTitle = [
        { title: "Personal Development Title 1", description: "Personal Development for episode 1" },
        { title: "Personal Development Title 2", description: "Personal Development for episode 2" },
        { title: "Personal Development Title 3", description: "Personal Development for episode 3" },
        { title: "Personal Development Title 4", description: "Personal Development for episode 4" },
        { title: "Personal Development Title 5", description: "Personal Development for episode 5" },
        { title: "Personal Development Title 6", description: "Personal Development for episode 6" },
        // ... add more episodes as needed
    ];
    
    //const customTextSectionClass = "new-text-section";
    // const customTextSectionContent = <h1>Personal Development</h1>;
    return (
        <div>
            <CareerSuccess
                episodes={personalDevelopmentTitle.map((episode, index) => ({
                    ...episode,
                    title: <Link to={`/personalDevelopmentEpisode/${index}`}>{episode.title}</Link>
                }))}
                
            />

        </div>
    );
    
}

export default PersonalDevelopment;