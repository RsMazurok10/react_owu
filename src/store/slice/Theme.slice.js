import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState: {
        white: false
    },
    reducers: {
        switchTheme: (state) => {
            state.white = !state.white;
        }
    }
});

const themeReducers = themeSlice.reducer;

export const {switchTheme} = themeSlice.actions;

export default themeReducers;