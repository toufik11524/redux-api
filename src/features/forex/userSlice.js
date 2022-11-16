import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    loading: false,
    data: [],
    error: '',
}

export const fetchData = createAsyncThunk('user/fetchData', () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.data)
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchData.pending, (state) => {
          // Add user to the state array
          state.loading = true;
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            // Add user to the state array
            state.loading = false;
            state.data = action.payload;
            state.error = '';
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            // Add user to the state array
            state.loading = false;
            state.data = [];
            state.error = action.error.message;
        })
    },
});

export default userSlice.reducer;