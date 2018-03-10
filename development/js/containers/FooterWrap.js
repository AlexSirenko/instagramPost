import { connect } from 'react-redux'
import { toggleLike } from '../actions'
import Footer from '../components/Footer'

const mapStateToProps = state => {
    return {
        comments: state.comments,
        countOfLikes: state.countOfLikes,
        liked: state.liked
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLikeClick: () => {
            dispatch(toggleLike())
        }
    }
};

const FooterWrap = connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);

export default FooterWrap