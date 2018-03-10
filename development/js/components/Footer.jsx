import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import Likes from './Likes';
import AddComment from '../containers/AddComment';

const Footer = ({comments, countOfLikes, liked, onLikeClick}) => (
    <div className='footerPost'>
        <section className="likeComment">
            <p>
                <a>
                    <span className={liked ? "d-inline-block likeIconClicked" : "d-inline-block likeIcon"} onClick={onLikeClick}>

                    </span>
                </a>
                <a>
                    <span className="d-inline-block commentIcon">

                    </span>
                </a>
            </p>
        </section>
        <Likes count={countOfLikes}/>
        <section>
            {comments.map((comment, index) => (
                <Comment key={index} nickname={comment.nickname} text={comment.text}/>
            ))}
        </section>
        <AddComment/>
    </div>

);

Footer.propTypes = {

    comments: PropTypes.arrayOf(
        PropTypes.shape({
            nickname: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    ),

    countOfLikes: PropTypes.number.isRequired,

    liked: PropTypes.bool,

    onLikeClick: PropTypes.func
};

export default Footer