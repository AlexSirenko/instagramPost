import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Likes = ({count}) => (
    <p className="markLike">
        <span>{count + ' items \'likes\''}</span>
    </p>
);

Likes.propTypes = {
    count: PropTypes.number.isRequired
};

export default Likes