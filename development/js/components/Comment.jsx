import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Comment = ({nickname, text}) => (
    <p className="comment">
        <span className="commentNickname">{nickname}</span>
        <span className="commentText">{' '+ text}</span>
    </p>
);

Comment.propTypes = {
    nickname: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Comment