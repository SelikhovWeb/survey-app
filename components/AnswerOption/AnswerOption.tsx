"use client";
import Button from "@/components/Button/Button";
import { Answer, Question } from "@/types";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCompletedAnswer } from "@/redux/slices/surveySlice";
import { RootState } from "@/redux/store";
import { setBackButtonVisibility } from "@/redux/slices/layoutSlice";

interface AnswerOptionProps {
  surveyId: string;
  question: Question;
  answer: Answer;
}

const AnswerOption = ({ answer, surveyId, question }: AnswerOptionProps) => {
  const dispatch = useDispatch();
  const { nextQuestionId, answerId } = answer;
  const { questionId } = question;

  const completedAnswers = useSelector(
    (state: RootState) => state.survey.completedAnswers
  );

  const currentQuestionAnswer = completedAnswers.find(
    (answer) => answer.questionId === questionId
  );

  const isAnswerSelected = currentQuestionAnswer?.answerId === answerId;

  const handleAnswerOptionClick = () => {
    dispatch(
      addCompletedAnswer({
        questionId,
        question: question.text,
        answerId,
        answer: answer.text,
      })
    );

    if (!nextQuestionId) {
      dispatch(setBackButtonVisibility(false));
    }
  };

  return (
    <Link
      href={
        nextQuestionId
          ? `/survey/${surveyId}/${nextQuestionId}`
          : `/survey/${surveyId}/completed`
      }
    >
      <Button
        text={answer.text}
        onClick={handleAnswerOptionClick}
        isActive={isAnswerSelected}
      />
    </Link>
  );
};

export default AnswerOption;
