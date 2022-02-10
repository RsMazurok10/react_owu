import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import {Outlet} from "react-router-dom";

import {albumService} from "../../services/albumsService";
import Photo from "../../components/Photos/Photo";

const AlbumsPhotoPage = () => {
    const [photos, setPhotos] = useState([]);
    const{albumId}=useParams();

    useEffect(() => {
        albumService.getPhoto(albumId).then(value => setPhotos([...value]))
    }, [albumId])

    return (
        <div>
            <div>
                {photos.map(photo => <Photo key={photo.id} photo={photo}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {AlbumsPhotoPage}