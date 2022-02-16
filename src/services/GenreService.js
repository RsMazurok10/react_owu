import {axiosServices} from './axiosService';

import {urls} from '../config';

export const genresServices = {
    getAllGenres: () => axiosServices.get(urls.genres + '&language=uk').then(value => value.data)
};