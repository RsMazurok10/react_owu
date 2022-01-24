import {useState, useEffect} from "react";
import User from './User'

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => setUsers(response))
    }, [])

    return (
        <div>
            <h2>Users</h2>
            {users.map(response =>
                <User
                    key={response.id}
                    id={response.id}
                    name={response.name}
                    username={response.username}
                    email={response.email}
                />
            )}
        </div>
    )
}
export default Users;