import { combineReducers } from 'redux'
import comments from './comments'
import like from './like'

const instaPost = combineReducers({
    comments,
    like
});

export default instaPost