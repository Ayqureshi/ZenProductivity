import React from "react";
import CareerSuccess from './CareerSuccess';
import { Link } from 'react-router-dom';
function Entrepreneurship() {
    const entrepreneurshipTitle = [
        { title: "Entrepreneurship Title 1", description: "Entrepreneurship for episode 1" },
        { title: "Entrepreneurship Title 2", description: "Entrepreneurship for episode 2" },
        { title: "Entrepreneurship Title 3", description: "Entrepreneurship for episode 3" },
        { title: "Entrepreneurship Title 4", description: "Entrepreneurship for episode 4" },
        { title: "Entrepreneurship Title 5", description: "Entrepreneurship for episode 5" },
        { title: "Entrepreneurship Title 6", description: "Entrepreneurship for episode 6" },
        // ... add more episodes as needed
    ];


    return <CareerSuccess backgroundColor="#1E8C9B" 
            title="ENTREPRENEURSHIP & STARTUPS"
            description="Interviews with successful entrepreneurs sharing their entrepreneurial journey and tips."
            episodes={entrepreneurshipTitle.map((episode, index) => ({
                ...episode,
                title: <Link to={`/EntrepreneurshipEpisode/${index}`}>{episode.title}</Link>
            }))}
    />
}

export default Entrepreneurship;