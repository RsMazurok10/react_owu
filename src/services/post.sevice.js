import {urls} from '../config/urls'

const getId=(id)=>{
    return fetch(`${urls.posts}?userId=${id}`)
        .then(value => value.json())
}

export const postService = {
    getId
}