import {useState, useEffect} from "react";
import {Outlet} from "react-router-dom";

import {userService} from "../../services/userService";
import Users from "../../components/Users/Users";
import css from './UsersPage.module.css'

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]))
    }, [])

    return (
        <div className={css.usersPage}>
            <div>
                {users.map(user => <Users key={user.id} user={user}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {UsersPage};