import React from "react";
import PropTypes from 'prop-types'
import './AmountContainerStyles.css'

const AmountContainer = ({title ='Title', num='Number'}) => {

    return (
        <div className='row text-center amountContainer'>
            <div className='row'>
                <div className='col-2'>  </div>
                <div className='amountContainerHeader col-8'>
                    <div className='row'>
                        <div className='col-3 text-center' id="numContainer"> {num} </div>
                        <div className='col-9' id="titleContainer"> {title} </div> 
                    </div>
                    
                </div>
                
            </div>  
        </div>
    );
};

// Add prop types validation
AmountContainer.propTypes = {
    title: PropTypes.string,
    num: PropTypes.number,
  };

export default AmountContainer;