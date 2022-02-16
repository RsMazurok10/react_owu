import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {movieServices} from "../../services/FilmService";

export const getMoviesPage = createAsyncThunk(
    'moviesPageSlice/getMoviesPage',
    async (pages, {rejectWithValue}) => {
        try {
            const page = await movieServices.getOnePage(pages);
            return page;

        } catch (e) {
            console.log(e);
        }
    }
);

const moviesPageSlice = createSlice({
    name: 'MoviesPageSlice',
    initialState: {
        page: {},
        searchQuery: '',
        status: null,
        error: null

    },
    extraReducers: {
        [getMoviesPage.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null;
        },
        [getMoviesPage.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.page = action.payload;
        },
        [getMoviesPage.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

const moviesPageReducer = moviesPageSlice.reducer;

export default moviesPageReducer;