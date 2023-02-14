import { createSlice } from "@reduxjs/toolkit";

const optionsSlice = createSlice({
  name: "options",
  initialState: {
    sidebarOpen: false,
    subredditSearch: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = state.sidebarOpen ? false : true;
    },
    toggleSearchMode: (state) => {
      state.subredditSearch = state.subredditSearch ? false : true;
    },
  },
});

export const selectAllOptions = (state) => state.options;

export default optionsSlice.reducer;
export const { toggleSidebar, toggleSearchMode } = optionsSlice.actions;
