import { CompletedAnswer } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SurveyState {
  currentSurveyId: string | null;
  completedAnswers: CompletedAnswer[];
}

const initialState: SurveyState = {
  currentSurveyId: null,
  completedAnswers: [],
};

const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    setCurrentSurveyId(state, action: PayloadAction<string | null>) {
      state.currentSurveyId = action.payload;
    },
    addCompletedAnswer(state, action: PayloadAction<CompletedAnswer>) {
      state.completedAnswers.push(action.payload);
    },
    resetSurvey(state) {
      state.currentSurveyId = null;
      state.completedAnswers = [];
    },
  },
});

export const { setCurrentSurveyId, addCompletedAnswer, resetSurvey } =
  surveySlice.actions;

export default surveySlice.reducer;
