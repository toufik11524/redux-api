import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: '',
}

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setIsLoding: (state, action) => {
            state.loading = action.payload;  
        },
        setIsError: (state, action) => {
            state.error = action.payload;  
        },
      },
});

export default commonSlice.reducer;

export const { setIsLoding, setIsError } = commonSlice.actions;