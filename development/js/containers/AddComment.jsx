import React from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions/index'

let AddComment = ({dispatch}) => {
    let input;
    return (
        <div className="addComment">
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return
                }
                dispatch(addComment(input.value));
                input.value = ''
            }}
            >
                <input type="text" placeholder="Add a comment..." ref={node => { input = node }}/>
            </form>
        </div>
    )
};

AddComment = connect()(AddComment);

export default AddComment