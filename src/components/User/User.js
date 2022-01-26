import React from "react";
import css from './user.module.css'

const User=({user,getUser})=>{
    const {id,name,username}=user;

    return(
        <div className={css.user}>
            <div>{id}. {name}--{username}</div>
            <button onClick={()=>getUser(user)} className={css.btn_user}>Get info</button>
        </div>
    )
}

export default User;