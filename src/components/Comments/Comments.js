import React from "react";
import {Outlet} from "react-router-dom";

import css from './Comments.module.css'

const Comments = ({comment}) => {
    const {id, postId, name, email, body} = comment;

    return (
        <div className={css.comment}>
            <div>PostId: {postId}</div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Email:{email}</div>
            <p>{body}</p>
            <Outlet/>
        </div>
    );
};

export default Comments;