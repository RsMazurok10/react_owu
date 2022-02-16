import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {movieServices} from "../../services/FilmService";

export const getMovieGenre = createAsyncThunk(
    'movieGenreSlice/getMovieGenre',
    async ({genreId, pages}, {rejectWithValue}) => {
        try {
            const page = await movieServices.getOnePageWithGenre(genreId, pages);
            return page;
        } catch (e) {

        }
    });

const movieGenreSlice = createSlice({
    name: 'movieGenreSlice',
    initialState: {
        page: {},
        status: null
    },
    extraReducers: {
        [getMovieGenre.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null;
        },
        [getMovieGenre.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.page = action.payload;
        },
        [getMovieGenre.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
});

const movieGenreReducer = movieGenreSlice.reducer;

export default movieGenreReducer;