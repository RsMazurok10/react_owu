import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Outlet} from "react-router-dom";

import {userService} from "../../services/userService";
import Albums from "../../components/Albums/Albums";
import css from './Albums.module.css'

const UsersAlbumsPage = () => {
    const [albums, setAlbums] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        userService.getAlbumId(id).then(value => setAlbums([...value]))
    }, [id])

    return (
        <div className={css.albums}>
            <div>
                {albums.map(album => <Albums key={album.id} album={album}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>

    );
};

export {UsersAlbumsPage};