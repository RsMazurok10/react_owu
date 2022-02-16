import {configureStore} from '@reduxjs/toolkit';

import movieGenreReducer from "./slice/MovieGenre.slice";
import moviePageReducer from "./slice/MoviePage.slice";
import moviesPageReducer from "./slice/MoviesPage.slice";
import themeReducers from "./slice/Theme.slice";
import genrePageReducer from "./slice/GenrePage.slice";

const store = configureStore({
    reducer: {
        moviesPageReducer,
        genrePageReducer,
        themeReducers,
        movieGenreReducer,
        moviePageReducer,
    }

});

export default store;