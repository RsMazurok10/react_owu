import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {genresServices} from '../../services/GenreService';

export const getAllGenres = createAsyncThunk(
    'genreSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const genres = await genresServices.getAllGenres();
            return genres;
        } catch (e) {
            console.log(e);
        }
    }
);

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState: {
        genres: {}
    },
    reducers: {},

    extraReducers: {
        [getAllGenres.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllGenres.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.genres = action.payload;
        },
        [getAllGenres.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

const genrePageReducer = genreSlice.reducer;

export default genrePageReducer;