import { configureStore } from "@reduxjs/toolkit";
import surveyReducer from "./slices/surveySlice";
import layoutReducer from "./slices/layoutSlice";

const store = configureStore({
  reducer: {
    survey: surveyReducer,
    layout: layoutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
