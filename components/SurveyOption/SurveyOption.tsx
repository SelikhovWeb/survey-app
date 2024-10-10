"use client";
import React from "react";
import Button from "@/components/Button/Button";
import { Survey } from "@/types";
import { useDispatch } from "react-redux";
import { setCurrentSurveyId } from "@/redux/slices/surveySlice";
import { useRouter } from "next/navigation";

interface SurveyOptionProps {
  survey: Survey;
}

const SurveyOption = ({ survey }: SurveyOptionProps) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { surveyId, surveyTitle } = survey;

  const handleSurveyOptionClick = () => {
    dispatch(setCurrentSurveyId(surveyId));

    router.push(`/survey/${surveyId}`);
  };

  return <Button text={surveyTitle} onClick={handleSurveyOptionClick} />;
};

export default SurveyOption;
