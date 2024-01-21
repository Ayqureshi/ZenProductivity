import React from "react";
import CareerSuccess from './CareerSuccess';
import { Link } from 'react-router-dom';

function RemoteWork() {
    const remoteWorkEpisodes = [
        { title: "Benefits of Remote Work", description: "Ameen Talks to a VP of People Strategy to see if she is on board with Remote Work" },
        // { title: "Remote Work Title 2", description: "Remote Work for episode 2" },
        // { title: "Remote Work Title 3", description: "Remote Work for episode 3" },
        // { title: "Remote Work Title 4", description: "Remote Work for episode 4" },
        // { title: "Remote Work Title 5", description: "Remote Work for episode 5" },
        // { title: "Remote Work Title 6", description: "Remote Work for episode 6" },
        // ... add more episodes as needed
    ];

    return <CareerSuccess backgroundColor="#82108C" 
    title="REMOTE WORK & DIGITAL NOMADISM"
    description="Inspiring interviews with professionals who have achieved remarkable career success."
    episodes={remoteWorkEpisodes.map((episode, index) => ({
        ...episode,
        title: <Link to={`/RemoteWorkEpisode/${index}`}>{episode.title}</Link>
    }))}
    />
}

export default RemoteWork;