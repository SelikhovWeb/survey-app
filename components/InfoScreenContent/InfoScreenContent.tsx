"use client";
import { InfoScreen } from "@/types";
import React, { useEffect } from "react";
import Button from "../Button/Button";
import styles from "./InfoScreenContent.module.css";
import { useRouter } from "next/navigation";
import { QuestionPageProps } from "@/app/survey/[surveyId]/[questionId]/page";
import { useDispatch } from "react-redux";
import { setDarkThemeEnabled } from "@/redux/slices/layoutSlice";

interface InfoScreenProps {
  infoScreenData: InfoScreen;
  params: QuestionPageProps["params"];
  searchParams: QuestionPageProps["searchParams"];
}

const InfoScreenContent = ({
  infoScreenData,
  params,
  searchParams,
}: InfoScreenProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { text, subtext, buttonText } = infoScreenData;

  useEffect(() => {
    dispatch(setDarkThemeEnabled(true));

    return () => {
      dispatch(setDarkThemeEnabled(false));
    };
  }, [dispatch]);

  const handleInfoScreenButtonClick = () => {
    router.push(`/survey/${params.surveyId}/${searchParams.nextQuestionId}`);
  };

  return (
    <div className={styles.infoScreenContentWrapper}>
      <h1 className={styles.infoText}>{text}</h1>
      <p className={styles.infoSubtext}>{subtext}</p>
      <Button text={buttonText} onClick={handleInfoScreenButtonClick} />
    </div>
  );
};

export default InfoScreenContent;
