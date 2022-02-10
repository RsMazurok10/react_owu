import {Routes, Route, Navigate} from 'react-router-dom'

import Layout from "./components/Layout/Layout";

import {
    UsersPage,
    UsersInfoPage,
    UsersPostPage,
    UsersAlbumsPage,
    PostsCommentPage,
    PostsInfoPage,
    AlbumsPhotoPage,
    PostsPage
} from "./pages";


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>

                <Route index element={<Navigate to={'users'}/>}/>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UsersInfoPage/>}>
                        <Route path={'posts'} element={<UsersPostPage/>}/>
                    </Route>

                    <Route path={':id/albums'} element={<UsersAlbumsPage/>}>
                        <Route path={':albumId/photos'} element={<AlbumsPhotoPage/>}/>
                    </Route>
                </Route>

                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<PostsInfoPage/>}>
                        <Route path={'comments'} element={<PostsCommentPage/>}/>
                    </Route>
                </Route>

            </Route>
        </Routes>
    );
}

export default App;
