import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadSubreddits = createAsyncThunk(
  "subreddits/loadSubreddits",
  async () => {
    try {
      const response = await fetch(
        `https://www.reddit.com/subreddits.json?limit=100`
      );
      if (response.ok) {
        const json = await response.json();
        const subredditObject = json.data.children.map((subreddit => {
            return {name: subreddit.data.display_name}
        }));
        return subredditObject;
      }
    } catch (err) {
      console.log(err);
    }
  }
);

const subredditsSlice = createSlice({
  name: "subreddits",
  initialState: {
    subreddits: [{name: "Art"}],
    filteredSubreddits: null,
    isLoadingSubreddits: false,
    failedLoadingSubreddits: false,
  },
  reducers: {
    filterSubreddits: (state, action) => {
        state.filteredSubreddits = state.subreddits.filter((subreddit => subreddit.name.toLowerCase().includes(action.payload.toLowerCase())))
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadSubreddits.pending, (state, action) => {
        state.isLoadingSubreddits = true;
        state.failedLoadingSubreddits = false;
      })
      .addCase(loadSubreddits.fulfilled, (state, action) => {
        state.isLoadingSubreddits = false;
        state.failedLoadingSubreddits = false;
        state.subreddits = action.payload;
      })
      .addCase(loadSubreddits.rejected, (state, action) => {
        state.isLoadingSubreddits = false;
        state.failedLoadingSubreddits = true;
      });
  },
});

export const selectSubreddits = (state) => state.subreddits.subreddits;
export const selectFilteredSubreddits = (state) => state.subreddits.filteredSubreddits;
export const { filterSubreddits } = subredditsSlice.actions;

export default subredditsSlice.reducer;