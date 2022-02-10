import React from "react";
import {Link} from "react-router-dom";

import css from './Album.module.css'

const Albums=({album})=>{
    const{userId,id,title}=album;

    let indexFirst=title.charAt(0).toUpperCase()+title.slice(1);

    return(
        <div className={css.album}>
            <div>userID: {userId}</div>
            <div>ID: {id}</div>
            <div>Title: {indexFirst}</div>
            <Link to={`${id}/photos`}><button>Photos</button></Link>

        </div>
    );
};

export default Albums;