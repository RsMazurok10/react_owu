import {axiosService} from "./axiosService";

import {urls} from "../configs/urls";

export const userService = {
    getAll: () => axiosService.get(urls.users).then(value => value.data),
    getUserId:(id)=>axiosService.get(`${urls.users}/${id}`).then(value => value.data),
    getPostId:(id)=>axiosService.get(`${urls.users}/${id}/posts`).then(value => value.data),
    getAlbumId:(id)=>axiosService.get(`${urls.users}/${id}/albums`).then(value => value.data)
}
