import React from 'react';
import './CommunityHomeContainerStyles.css';
import PostThumbnail from './PostThumbnail.jsx';

const CommunityHomeContainer = (title) => {


    return (
        <div className='row text-center CommunityHomeContainer'>
            <div className='row'>
                <div className='col-1'>  </div>
                <div className='containerHeader col-11'> {title.parameter} </div>
            </div>
            <div className='row'>
                <div className='col-1'>  </div>
                <div id="boxWrapper" className='col-11'  >
                    <PostThumbnail profilePhoto = "null" title = "I win tiktok" replies="5" timePosted="18" />
                    <h1 />
                    <PostThumbnail profilePhoto = "null" title = "How Elon Musk Sleeps" replies="5" timePosted="18" />
                    <h1 />
                    <PostThumbnail profilePhoto = "null" title = "I killed my boss and got promoted" replies="5" timePosted="18" />
                </div>
            </div>
            
            
        </div>
    );
};

export default CommunityHomeContainer;