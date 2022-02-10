import React from "react";

import {Link, Outlet} from "react-router-dom";

import css from './PostInfo.module.css'

const PostInfo=({post})=>{
    const{userId,id,title,body}=post;
    let indexFirst=title.charAt(0).toUpperCase()+title.slice(1);

    return(
        <div className={css.infoPost}>
            <div>userID: {userId}</div>
            <div>ID: {id}</div>
            <h4>Title: {indexFirst}</h4>
            <p>{body}</p>
            <Link to={`comments`} ><button>Comments</button></Link>
            <Outlet/>
        </div>
    );
};

export default PostInfo