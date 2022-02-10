import {useLocation, useParams} from "react-router-dom";
import {useState, useEffect} from "react";

import {postService} from "../../services/postsService";
import PostInfo from "../../components/PostInfo/PostInfo";

const PostsInfoPage = () => {
    const [post, setPost] = useState(null);
    const{id}=useParams();
    const {state}=useLocation();

    useEffect(() => {
        if (state){
            setPost(state)
            return
        }
        postService.getPostId(id).then(value => setPost([...value]))
    }, [id])

    return (
        <div>
            {post&&<PostInfo post={post}/>}
        </div>
    );
};

export {PostsInfoPage};