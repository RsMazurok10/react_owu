import {useState, useEffect} from "react";

import Post from './Post'

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(response => setPosts(response))
    }, [])

    return (
        <div>
            <h2>Posts</h2>
            {posts.map(response =>
                <Post
                    key={response.id}
                    userId={response.userId}
                    id={response.id}
                    title={response.title}
                />
            )}
        </div>
    )
}

export default Posts;
