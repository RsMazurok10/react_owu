import React from "react";

const Comment=(props)=>{
    const{postId,id,name,email}=props;

    return(
        <div className='comment_div'>
            <h4>Post ID: {postId} - ID: {id} </h4>
            <h5>Name:{name} - Email{email}</h5>
        </div>
    )
}


export default Comment;