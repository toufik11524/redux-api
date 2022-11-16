import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    data: [],
    error: '',
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        fetchData: (state, action) => {
            state.data = action.payload;    
        },
      },
});

export default postSlice.reducer;

export const { fetchData } = postSlice.actions;