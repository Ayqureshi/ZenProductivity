import React from "react";
import CareerSuccess from './CareerSuccess';
import { Link } from 'react-router-dom';

function PersonalDevelopment() {
    const personalDevelopmentEpisodes = [
        { title: "Personal Development Title 1", description: "Personal Development for episode 1" },
        { title: "Personal Development Title 2", description: "Personal Development for episode 2" },
        { title: "Personal Development Title 3", description: "Personal Development for episode 3" },
        { title: "Personal Development Title 4", description: "Personal Development for episode 4" },
        { title: "Personal Development Title 5", description: "Personal Development for episode 5" },
        { title: "Personal Development Title 6", description: "Personal Development for episode 6" },
        // ... add more episodes as needed
    ];

    return <CareerSuccess backgroundColor="#6860C7" 
    title="PERSONAL DEVELOPMENT"
    description="Conversations with experts on self-improvement, goal setting, and personal growth."
    episodes={personalDevelopmentEpisodes.map(episode => ({
        ...episode,
        title: <Link to={`/episodes/${episode.title.replace(/ /g, '-')}`}>{episode.title}</Link>
    }))}
    />
    
}

export default PersonalDevelopment;