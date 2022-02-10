import UsersInfo from "../../components/UsersInfo/UsersInfo";
import {userService} from "../../services/userService";

import {useState, useEffect} from "react";
import {useParams, useLocation} from "react-router-dom";

const UsersInfoPage = () => {
    const [user, setUser] = useState(null);
    const {id} = useParams();
    const {state} = useLocation();


    useEffect(() => {
        if (state) {
            setUser(state)
            return
        }
        userService.getUserId(id).then(value => setUser(value))
    }, [id])

    return (
        <div>
            {user && <UsersInfo user={user}/>}
        </div>
    );
};

export {UsersInfoPage};