import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        fetchData: (state, action) => {
            console.log(action.payload, 'action.payload');
            state.data = action.payload;
        },
      },
});

export default postSlice.reducer;

export const { fetchData } = postSlice.actions;