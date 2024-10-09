"use client";
import React from "react";
import Button from "@/components/Button/Button";
import { Survey } from "@/types";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setCurrentSurveyId } from "@/redux/slices/surveySlice";

interface SurveyOptionProps {
  survey: Survey;
}

const SurveyOption = ({ survey }: SurveyOptionProps) => {
  const dispatch = useDispatch();

  const { surveyId, surveyTitle } = survey;

  const handleSurveyOptionClick = () => {
    dispatch(setCurrentSurveyId(surveyId));
  };

  return (
    <Link href={`/survey/${surveyId}`}>
      <Button text={surveyTitle} onClick={handleSurveyOptionClick} />
    </Link>
  );
};

export default SurveyOption;
