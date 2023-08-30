import React from "react";
import PropTypes from 'prop-types';
import './TagStyles.css';

const Tag = ({title}) => {
    // Depending on Title, change color
    const tagMap = new Map();
    tagMap.set('News','Beige');
    tagMap.set('Work/Life Balance','Blue');
    tagMap.set('Focus','Purple');
    tagMap.set('Reading','Wheat');
    tagMap.set('Habits','Red');

    // Change id based on tag title
    const idString = 'tagContainer' + tagMap.get(title);
    console.log(idString);

    return (
        <div className='tagContainer col-12' id={idString}>
            {title}
        </div>
    );
};

// Add prop types validation
Tag.propTypes = {
    title: PropTypes.string,
  };

export default Tag;