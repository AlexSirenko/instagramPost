import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Header = ({logoSrc, nickname}) => (
    <header className="postHeader">
        <p className="d-inline-block imgAvatar">
            <img src={logoSrc}/>
        </p>
        <p className = "d-inline-block headerNickname">
            <span>{nickname}</span>
        </p>
    </header>
);

Header.propTypes = {
    logoSrc: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired
};

export default Header