import React from "react";
import css from './posst.module.css'

const Post=({post})=>{
    const{userId,id,title,body}=post;

    return(
        <div className={css.post}>
            <div>UserID: {userId}</div>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    )
}

export default Post;