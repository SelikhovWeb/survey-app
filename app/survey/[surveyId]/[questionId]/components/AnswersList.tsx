"use client";
import React, { useEffect } from "react";
import styles from "../page.module.css";
import AnswerOption from "@/components/AnswerOption/AnswerOption";
import { useDispatch, useSelector } from "react-redux";
import { setBackButtonVisibility } from "@/redux/slices/layoutSlice";
import { resetSurvey } from "@/redux/slices/surveySlice";
import { redirect } from "next/navigation";
import { RootState } from "@/redux/store";
import { Answer, Question } from "@/types";

interface AnswerOptionProps {
  question: Question;
  surveyId: string;
  questionIndex: number;
}

const AnswersList = ({
  question,
  surveyId,
  questionIndex,
}: AnswerOptionProps) => {
  const dispatch = useDispatch();

  const currentSurveyId = useSelector(
    (state: RootState) => state.survey.currentSurveyId
  );

  useEffect(() => {
    if (questionIndex === 0) {
      dispatch(setBackButtonVisibility(false));
    }
    if (questionIndex === 1) {
      dispatch(setBackButtonVisibility(true));
    }
  }, [dispatch, questionIndex]);

  useEffect(() => {
    if (!currentSurveyId) {
      dispatch(setBackButtonVisibility(false));
      dispatch(resetSurvey());
      redirect("/");
    }
  }, [dispatch, currentSurveyId]);

  return (
    <>
      {question.answers.map((answer: Answer) => (
        <div className={styles.answerWrapper} key={answer.answerId}>
          <AnswerOption
            surveyId={surveyId}
            answer={answer}
            question={question}
          />
        </div>
      ))}
    </>
  );
};

export default AnswersList;
