import React from "react";

import css from './Photo.module.css'

const Photo = ({photo}) => {
    const {albumId, id, title, thumbnailUrl} = photo;
    let indexFirst=title.charAt(0).toUpperCase()+title.slice(1);

    return (
        <div className={css.photo}>
            <div>albumID: {albumId}</div>
            <div>ID: {id}</div>
            <h4>Title: {indexFirst}</h4>
            <div>
                <img src={thumbnailUrl} alt={title}/>
            </div>
        </div>
    );
};

export default Photo;