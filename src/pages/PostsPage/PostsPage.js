import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import {Outlet} from "react-router-dom";

import {postService} from "../../services/postsService";
import Posts from "../../components/PostsPage/Posts";
import css from './PostsPage.module.css'

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, [])

    return (
        <div className={css.postPage}>
            <div>
                {posts.map(post => <Posts key={post.id} post={post}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostsPage}