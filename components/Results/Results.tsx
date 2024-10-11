"use client";
import styles from "./Results.module.css";
import { RootState } from "@/redux/store";
import { CompletedAnswer } from "@/types";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import { resetSurvey, setCurrentSurveyId } from "@/redux/slices/surveySlice";
import { useRouter } from "next/navigation";

const Results = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const completedAnswers = useSelector(
    (state: RootState) => state.survey.completedAnswers
  );

  useEffect(() => {
    dispatch(setCurrentSurveyId(null));
  }, [dispatch]);

  useEffect(() => {
    if (completedAnswers.length === 0) {
      router.push("/");
    }
  }, [completedAnswers, router]);

  const handleBackToHomeClick = () => {
    router.push("/");
    dispatch(resetSurvey());
  };

  return (
    <>
      <ul className={styles.resultsList}>
        {completedAnswers.map((answer: CompletedAnswer) => (
          <li className={styles.resultsListItem} key={answer.questionId}>
            <span className={styles.questionText}>{answer.question}</span>
            <br />
            <span className={styles.answerText}>{answer.answer}</span>
          </li>
        ))}
      </ul>
      <Button text="Back to Home" onClick={handleBackToHomeClick} />
    </>
  );
};

export default Results;
