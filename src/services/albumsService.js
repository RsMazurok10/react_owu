import {axiosService} from "./axiosService";

import {urls} from "../configs/urls";

export const albumService = {
    getPhoto: (id) => axiosService.get(`${urls.albums}/${id}/photos`).then(value => value.data)
}