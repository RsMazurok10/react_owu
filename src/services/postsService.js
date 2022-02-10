import {axiosService} from "./axiosService";

import {urls} from "../configs/urls";

export const postService={
    getAll:() => axiosService.get(urls.posts).then(value => value.data),
    getPostId:(id)=>axiosService.get(`${urls.posts}/${id}`).then(value => value.data),
    getComment:(id)=>axiosService.get(`${urls.posts}/${id}/comments`).then(value => value.data),
}