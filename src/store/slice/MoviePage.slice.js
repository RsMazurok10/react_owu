import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {movieServices} from "../../services/FilmService";

export const getMovie = createAsyncThunk(
    'moviePageSlice/getMovie',
    async (movieId) => {
        try {
            const movie = await movieServices.getMovie(movieId);
            return movie;
        } catch (e) {
            console.log(e);
        }
    }
);

const moviePageSlice = createSlice({
    name: 'moviePageSlice',
    initialState: {
        movie: {},
        status: null,
        error: null
    },
    extraReducers: {
        [getMovie.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null;
        },
        [getMovie.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.movie = action.payload;
        },
        [getMovie.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

const moviePageReducer = moviePageSlice.reducer;

export default moviePageReducer;