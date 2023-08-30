import React, { useState } from 'react';
import { Button } from 'react-bootstrap'
import CommunityHomeContainer from './community/CommunityHomeContainer';
import ExploreTopics from './community/ExploreTopics';
import './CommunityStyles.css'
import AmountContainer from './community/AmountContainer';


const Community = () => {
    const [searchTerm, setSearchTerm] = useState([]);
    //   const [newPost, setNewPost] = useState('');


    const handleSearch = (e) => {
        e.preventDefault();
        console.log("You've searched",searchTerm)
    };

    return (
        <div>
            <div id="searchWrapper" className='col-12 text-center mg-4 mt-5'>
                <div className='row text-center'>
                    <div className='col-3'></div>
                    <div className="col-1 communityHeader">
                        <h2>L</h2>
                    </div>
                    <div className="col-3 communityHeader">
                        <h2>Community</h2>
                    </div>
                </div>
                <form className="searchContainer row text-center align-items-center" onSubmit={handleSearch}>
                    <div className='col-2'></div>
                    <div className='col-7'>
                        <input
                            type="text"
                            placeholder="Ask a question or share something!"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <Button  className='col-1' type="submit" onSubmit={handleSearch}>Logo</Button>
                </form>
            </div>
            <div id="wrapper" className='row text-center'>
                <div id="mainContainer" className='col-8'>
                    <div className='col-12'>
                        <CommunityHomeContainer parameter={"Recent"}/>
                    </div>
                    <div className='col-12'>
                        <CommunityHomeContainer parameter={"Trending"}/>
                    </div>
                </div>
                <div id="sideContainer" className='col-4'>
                    <AmountContainer title='MEMBERS' num='245'/>
                    <AmountContainer title='ONLINE' num='20'/>
                    <AmountContainer title='POSTS' num='134'/>
                    <ExploreTopics/>
                </div>
            </div>
            
        </div>
    );
};

export default Community;