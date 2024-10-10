"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ParseOptions } from "@/types";
import parseQuestionText from "../utils/parseQuestionText";

interface ParsedQuestionTextProps {
  text: string;
  parseOptions?: ParseOptions;
}

const ParsedQuestionText: React.FC<ParsedQuestionTextProps> = ({
  text,
  parseOptions,
}) => {
  const completedAnswers = useSelector(
    (state: RootState) => state.survey.completedAnswers
  );

  if (!parseOptions) {
    return <h1>{text}</h1>;
  }

  const parsedText = parseQuestionText(text, parseOptions, completedAnswers);

  return <h1>{parsedText}</h1>;
};

export default ParsedQuestionText;
