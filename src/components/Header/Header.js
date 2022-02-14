import {NavLink} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.header}>
            <NavLink to={"/cat"}><button>Cat</button></NavLink>
            <NavLink to={"/car"}><button>Car</button></NavLink>
            <NavLink to={"/dog"}><button>Dog</button></NavLink>
        </div>
    );
};

export default Header;