import { createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    shouldDisplayBackButtonInHeader: false,
    darkThemeEnabled: false,
  },
  reducers: {
    setBackButtonVisibility(state, action) {
      state.shouldDisplayBackButtonInHeader = action.payload;
    },
    setDarkThemeEnabled(state, action) {
      state.darkThemeEnabled = action.payload;
    },
  },
});

export const { setBackButtonVisibility, setDarkThemeEnabled } =
  layoutSlice.actions;

export default layoutSlice.reducer;
