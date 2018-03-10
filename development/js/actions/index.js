
export const addComment = text => {
    return {
        type: 'ADD_COMMENT',
        nickname: 'mr.vlass',
        text
    }
};


export const toggleLike = () => {
    return {
        type: 'TOGGLE_LIKE',
    }
};
