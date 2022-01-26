import {useState} from "react";

import Posts from "./components/Posts/Posts";
import Users from './components/Users/Users'
import UserInfo from "./components/User-Info/UserInfo";
import css from './App.module.css'

function App() {

    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    const getUser = (user) => {
        setUser(user);
        setUserId(null);
    }

    const getUserId = (id) => {
        setUserId(id);
    }

    return (
        <div>
            <div className={css.container}>
                <Users getUser={getUser}/>
                {user && <UserInfo user={user} getUserId={getUserId}/>}
            </div>
            {userId && <Posts userId={userId}/>}
        </div>
    );
}

export default App;
