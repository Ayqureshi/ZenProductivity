import React, { useState } from 'react';
import { Button } from 'react-bootstrap'
import CommunityHomeContainer from './community/CommunityHomeContainer';
import './Community.css'


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
                <div className='col-12' id="communityHeader">
                    <h2>Community</h2>
                </div>
                <form onSubmit={handleSearch}>
                    <div className='col-11'>
                        <input
                            type="text"
                            placeholder="Ask a question or share something!"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Button className="col-1" type="submit" onSubmit={handleSearch}>Search</Button>
                    </div>
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
                        <CommunityHomeContainer parameter={"Explore Topics"}/>
                </div>
            </div>
            
        </div>
    );
};

export default Community;