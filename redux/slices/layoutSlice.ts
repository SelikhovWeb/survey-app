import { createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    shouldDisplayBackButtonInHeader: false,
  },
  reducers: {
    setBackButtonVisibility(state, action) {
      state.shouldDisplayBackButtonInHeader = action.payload;
    },
  },
});

export const { setBackButtonVisibility } = layoutSlice.actions;

export default layoutSlice.reducer;
