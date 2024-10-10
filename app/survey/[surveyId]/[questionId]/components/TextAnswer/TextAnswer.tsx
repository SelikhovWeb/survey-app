"use client";
import React, { useState } from "react";
import { SingleValueQuestion } from "@/types";
import styles from "./TextAnswer.module.css";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setBackButtonVisibility } from "@/redux/slices/layoutSlice";
import { addCompletedAnswer } from "@/redux/slices/surveySlice";

interface TextAnswerProps {
  question: SingleValueQuestion;
  surveyId: string;
}
const TextAnswer = ({ question, surveyId }: TextAnswerProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { questionId, nextQuestionId } = question;

  const [textAreaValue, setTextAreaValue] = useState("");

  const handleAnswerOptionClick = () => {
    dispatch(
      addCompletedAnswer({
        questionId,
        question: question.text,
        answerId: "",
        answer: textAreaValue,
      })
    );

    if (!nextQuestionId) {
      dispatch(setBackButtonVisibility(false));
      router.push(`/survey/${surveyId}/completed`);
    } else {
      router.push(`/survey/${surveyId}/${nextQuestionId}`);
    }
  };

  return (
    <>
      <textarea
        className={styles.textarea}
        onChange={(e) => setTextAreaValue(e.target.value)}
        value={textAreaValue}
        placeholder="Type here..."
      />
      <Button text="Next" onClick={handleAnswerOptionClick} />
    </>
  );
};

export default TextAnswer;
