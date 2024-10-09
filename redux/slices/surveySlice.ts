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
      if (!state.currentSurveyId) {
        return;
      }

      // Check if answer already written in current survey completed answers
      if (
        state.completedAnswers.some(
          (answer) => answer.questionId === action.payload.questionId
        )
      ) {
        state.completedAnswers = state.completedAnswers.filter(
          (answer) => answer.questionId !== action.payload.questionId
        );
      }

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
