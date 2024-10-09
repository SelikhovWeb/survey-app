"use client";
import Button from "@/components/Button/Button";
import { Answer, Question } from "@/types";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { addCompletedAnswer } from "@/redux/surveySlice";

interface AnswerOptionProps {
  surveyId: string;
  question: Question;
  answer: Answer;
}

const AnswerOption = ({ answer, surveyId, question }: AnswerOptionProps) => {
  const dispatch = useDispatch();
  const { nextQuestionId } = answer;
  const { questionId } = question;

  const handleAnswerOptionClick = () => {
    dispatch(
      addCompletedAnswer({
        questionId,
        question: question.text,
        answer: answer.text,
      })
    );
  };

  return (
    <Link
      href={
        nextQuestionId
          ? `/survey/${surveyId}/${nextQuestionId}`
          : `/survey/${surveyId}/completed`
      }
    >
      <Button text={answer.text} onClick={handleAnswerOptionClick} />
    </Link>
  );
};

export default AnswerOption;
