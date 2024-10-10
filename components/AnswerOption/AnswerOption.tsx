"use client";
import React from "react";
import Button from "@/components/Button/Button";
import { Answer, Question } from "@/types";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addCompletedAnswer } from "@/redux/slices/surveySlice";
import { RootState } from "@/redux/store";
import { setBackButtonVisibility } from "@/redux/slices/layoutSlice";

interface AnswerOptionProps {
  surveyId: string;
  question: Question;
  answer: Answer;
  withInfoScreen?: boolean;
}

const AnswerOption = ({
  answer,
  surveyId,
  question,
  withInfoScreen,
}: AnswerOptionProps) => {
  const router = useRouter();
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

    // Navigation logic
    if (!nextQuestionId) {
      dispatch(setBackButtonVisibility(false));
      router.push(`/survey/${surveyId}/completed`);
    } else {
      if (withInfoScreen) {
        router.push(
          `/survey/${surveyId}/${questionId}?infoScreenId=${question?.infoScreen?.infoScreenId}&nextQuestionId=${nextQuestionId}`
        );
      } else {
        router.push(`/survey/${surveyId}/${nextQuestionId}`);
      }
    }
  };

  return (
    <Button
      text={answer.text}
      onClick={handleAnswerOptionClick}
      isActive={isAnswerSelected}
    />
  );
};

export default AnswerOption;
