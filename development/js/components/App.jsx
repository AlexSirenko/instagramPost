import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ContentPhoto from './ContentPhoto';
import FooterWrap from '../containers/FooterWrap';


import headerLogo from '../../images/logo.jpg';
import contentPhoto from '../../images/contentBody.jpg';

const App = () => (
    <div className="instaPost">
        <Header logoSrc={headerLogo} nickname={"alexqwerty"}/>
        <ContentPhoto imgSrc={contentPhoto}/>
        <FooterWrap/>
    </div>);

export default App