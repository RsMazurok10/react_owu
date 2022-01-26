import {urls} from '../config/urls'

const getAll = () => {
    return fetch(urls.users)
        .then(value => value.json())
}

const getInfo = (id) => {
    return fetch(`${urls.users}/${id}`)
        .then(value => value.json())
}

export const userService = {
    getAll,
    getInfo
}