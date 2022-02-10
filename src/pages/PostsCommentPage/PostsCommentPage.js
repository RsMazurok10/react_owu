import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import Comments from "../../components/Comments/Comments";
import {postService} from "../../services/postsService";

const PostsCommentPage = () => {
    const [comments, setComments] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        postService.getComment(id).then(value => setComments([...value]))
    }, [id])

    return (
        <div>
                {comments.map(comment => <Comments key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {PostsCommentPage}