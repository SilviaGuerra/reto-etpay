import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const themeReducer = createSlice({
  name: "theme",
  initialState,
  reducers: {
    theme: (state, action) => {
      state = action.payload;
    },
  },
});

export const { theme } = themeReducer.actions;
export default themeReducer.reducer;
