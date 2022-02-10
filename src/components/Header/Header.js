import {NavLink} from "react-router-dom";

import css from './Header.module.css'

const Header=()=>{
    return(
        <div className={css.header}>
            <NavLink to={'/users'} className={css.users}>Users</NavLink>
            <NavLink to={'/posts'} className={css.posts}>Posts</NavLink>
        </div>
    );
};

export default Header;