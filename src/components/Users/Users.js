import {useState, useEffect} from "react";

import Forms from "../Forms/Forms";
import {userService} from "../../services/user.service";
import User from "../User/User";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [usersFilter, setFilterUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => {
            setUsers(value)
            setFilterUsers(value)
        })
    },[])

    const getFilter = (info) => {
        let filterArr = [...users];

        if (info.name) {
            filterArr = filterArr.filter(user => user.name.toLowerCase().includes(info.name));
        }
        if (info.username) {
            filterArr = filterArr.filter(user => user.username.toLowerCase().includes(info.username));
        }
        if (info.email) {
            filterArr = filterArr.filter(user => user.email.toLowerCase().includes(info.email));
        }
        setFilterUsers(filterArr);
    }

    return (
        <div>
            <Forms getFilter={getFilter}/>
            {usersFilter.map(user => <User key={user.id} user={user}/>)}
        </div>
    )
}

export default Users;