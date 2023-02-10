import { createSlice } from "@reduxjs/toolkit";

const optionsSlice = createSlice({
  name: "options",
  initialState: {
    sidebarOpen: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = state.sidebarOpen ? false : true;
    },
  },
});

export const selectAllOptions = (state) => state.options;

export default optionsSlice.reducer;
export const { toggleSidebar } = optionsSlice.actions;
