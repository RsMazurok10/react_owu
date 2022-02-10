import React from "react";

import {Outlet} from "react-router-dom";
import {Link} from "react-router-dom";

import css from './Info.module.css'

const UsersInfo = ({user}) => {
    const {id, name, username, email, phone} = user;

    return (
        <div className={css.info}>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Username:{ username}</div>
            <div>Email: {email}</div>
            <div>Phone: {phone}</div>
            <Link to={'posts'}>
                <button>Posts</button>
            </Link>

            <Outlet/>
        </div>
    );
};

export default UsersInfo;
