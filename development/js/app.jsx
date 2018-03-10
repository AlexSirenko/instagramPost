'use strict';


import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import instaPost from './reducers/instaPost'
import App from './components/App'

let store = createStore(instaPost);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('instaPost')
);