import UsersPost from "../../components/UsersPosts/UsersPost";
import {userService} from "../../services/userService";

import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";

const UsersPostPage = () => {
    const [posts, setPosts] = useState([]);
    const{id}=useParams();

    useEffect(() => {
        userService.getPostId(id).then(value => setPosts([...value]))
    }, [id])

    return (
        <div>
                {posts.map(post => <UsersPost key={post.id} post={post}/>)}
        </div>
    );
};

export {UsersPostPage}