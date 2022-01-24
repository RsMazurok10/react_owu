import React from "react";

const Post = (props) => {

    const {userId, id, title} = props;

    return (
        <div className='post_div'>
            <h4>UserID: {userId} - ID: {id}</h4>
            <h5>Title: {title}</h5>
        </div>
    )
}

export default Post;