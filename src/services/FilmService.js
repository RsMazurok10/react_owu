import {axiosServices} from './axiosService';

import {urls} from '../config';

export const movieServices = {
    getOnePage: (pages) => axiosServices.get(urls.moviesPage + `&page=${pages}`).then(value => value.data),
    getOnePageWithGenre: (genreId, pages) => axiosServices.get(urls.moviesPage + `&page=${pages}` + `&with_genres=${genreId}`).then(value => value.data),
    getMovie: (movieId) => axiosServices.get(`/3/movie/${movieId}?${urls.movie}`).then(value => value.data),
};
