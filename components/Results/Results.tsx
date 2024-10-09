"use client";
import styles from "./Results.module.css";
import { RootState } from "@/redux/store";
import { CompletedAnswer } from "@/types";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import { resetSurvey } from "@/redux/surveySlice";

const Results = () => {
  const completedAnswers = useSelector(
    (state: RootState) => state.survey.completedAnswers
  );

  const dispatch = useDispatch();

  const handleBackToHomeClick = () => {
    dispatch(resetSurvey());
  };

  if (completedAnswers.length === 0) {
    return <div>No results found</div>;
  }

  return (
    <>
      <ul className={styles.resultsList}>
        {completedAnswers.map((answer: CompletedAnswer) => (
          <li key={answer.questionId}>
            {answer.question}: {answer.answer}
          </li>
        ))}
      </ul>
      <Link href="/">
        <Button text="Back to Home" onClick={handleBackToHomeClick} />
      </Link>
    </>
  );
};

export default Results;
