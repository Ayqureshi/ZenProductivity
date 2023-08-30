import React from 'react';
import './CommunityHomeContainerStyles.css'
import './ExploreTopicsStyles.css'
import Tag from './Tag';
// import { Button } from 'react-bootstrap'

const ExploreTopics = () => {


    return (
        <div className='row text-center exploreTopicsContainer'>
            <div className='row'>
                <div className='col-2'>  </div>
                <div className='containerHeader col-8' id='exploreTopicsHeader'> Explore Topics </div>
            </div>  
            <div className='row'>
                <div className='col-2'>  </div>
                <div className="topicsContainer col-8">
                    <Tag title='News'/>
                    <Tag title='Work/Life Balance'/>
                    <Tag title='Focus'/>
                    <Tag title='Reading'/>
                    <Tag title='Habits'/>
                </div>

            </div>
        </div>
    );
};

export default ExploreTopics;