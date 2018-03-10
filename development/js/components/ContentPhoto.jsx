import React, {Component} from 'react';
import PropTypes from 'prop-types';

const ContentPhoto = ({imgSrc}) => (
    <div className="contentPhoto" >
        <img src={imgSrc}/>
    </div>
);

ContentPhoto.propTypes = {
    imgSrc: PropTypes.string.isRequired
};

export default ContentPhoto