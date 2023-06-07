import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./Slices/theme";

const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

export default store;
