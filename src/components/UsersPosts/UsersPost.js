import React from "react";
import {Outlet} from "react-router-dom";

import css from './PostsUs.module.css';


const UsersPost = ({post}) => {
    const {userId, id, title, body} = post;

    let indexFirst = title.charAt(0).toUpperCase() + title.slice(1);
    return (
        <div className={css.posts}>
            <div>userID: {userId}</div>
            <div>ID: {id}</div>
            <h3>Title: {indexFirst}</h3>
            <p>{body}</p>
            <Outlet/>
        </div>
    );
};

export default UsersPost;