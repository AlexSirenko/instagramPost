
let comments = [
    {
        nickname: 'Alex',
        text: 'bullshit'
    },
    {
        nickname: 'Alex',
        text: 'bullshit'
    },
    {
        nickname: 'Alex',
        text: 'bullshit'
    },
    {
        nickname: 'Alex',
        text: 'bullshit'
    },
    {
        nickname: 'Alex',
        text: 'bullshit'
    },
    {
        nickname: 'Alex',
        text: 'bullshit'
    },
    {
        nickname: 'mr.valss',
        text: 'hah lol))))'
    }

];

const initialState = {
    comments: comments,
    countOfLikes: 12345,
    liked: false
};

const instaPost = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return Object.assign({}, state, {
                comments: [
                    ...state.comments,
                    {
                        nickname: action.nickname,
                        text: action.text
                    }
                ]
            });
        case 'TOGGLE_LIKE':
            return Object.assign({}, state, {
                liked: !state.liked,
                countOfLikes: state.liked ? --state.countOfLikes : ++state.countOfLikes
            });

        default:
            return state

    }
};


export default instaPost