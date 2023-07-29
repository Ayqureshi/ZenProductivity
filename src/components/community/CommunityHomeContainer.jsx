import React from 'react';
import '../Community.css'
// import { Button } from 'react-bootstrap'

const CommunityHomeContainer = (title) => {


    return (
        <div className='row text-center CommunityHomeContainer'>
            <div className='row'>
                <div className='col-2'>  </div>
                {/* <div className='containerHeader col-8'> ContainerHeader </div> */}
                <div className='containerHeader col-8'> {title.parameter} </div>
            </div>
            <div className='row'>
                <div className='col-2'>  </div>
                <div id="boxWrapper" className='col-8'  >
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>
                    <div>
                        Post 3
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default CommunityHomeContainer;