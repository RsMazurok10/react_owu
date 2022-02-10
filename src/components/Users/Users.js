import React from "react";
import {Link} from "react-router-dom";

import css from './Users.module.css'

const Users=({user})=>{
    const {id,name,username}=user;

    return(
        <div className={css.users}>

            {id}. {name}--{username}


            <Link to={`${id}`} state={user}><button>Details</button></Link>
            <Link to={`${id}/albums`}><button>Albums</button></Link>
        </div>
    )
}

export default Users;

