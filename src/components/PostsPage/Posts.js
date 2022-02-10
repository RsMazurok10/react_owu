import React from "react";

import {Link} from "react-router-dom";

import css from './post.module.css'

const Posts = ({post}) => {
    const {id, title} = post;
    let indexFirst=title.charAt(0).toUpperCase()+title.slice(1);

    return (
        <div className={css.post}>
            <div>ID: {id}</div>
            <div>{indexFirst}</div>
            <Link to={`${id}`} state={post}><button>Details</button></Link>
        </div>
    );
};

export default Posts;