import { createSlice } from "@reduxjs/toolkit";


export const postsSlice = createSlice({
    name: 'posts',
    initialState: {},
    reducers: {

    },
    extraReducers: {
        //load posts with async thunk
    }
})