import {useState, useEffect} from "react";

import Comment from './Comment'

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(response => setComments(response))
    }, [])

    return (
        <div>
            <h2>Comments</h2>
            {comments.map(response =>
                <Comment
                key={response.id}
                postId={response.postId}
                id={response.id}
                name={response.name}
                email={response.email}
                />
            )}
        </div>
    )
}
export default Comments;