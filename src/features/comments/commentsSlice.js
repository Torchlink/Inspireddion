import { createSlice } from "@reduxjs/toolkit";


const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: {

        }
    },
    reducers: {
        loadComments: (state, action) => {
            state.comments = action.payload;
        }
    }
})

export const selectComments = state => state.comments.comments;

export const { loadComments } = commentsSlice.actions;
export default commentsSlice.reducer;