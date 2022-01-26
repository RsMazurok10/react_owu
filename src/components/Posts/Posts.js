import {useState, useEffect} from "react";

import Post from '../Post/Post'
import {postService} from "../../services/post.sevice";
import css from './post.module.css'

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getId(userId).then(value => setPosts(value))
    })

    return (
        <div className={css.posts}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    )
}

export default Posts;