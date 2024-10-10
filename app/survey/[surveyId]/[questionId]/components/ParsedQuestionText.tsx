// ParsedQuestionText.tsx
"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { CompletedAnswer, ParseOptions } from "@/types";

interface ParsedQuestionTextProps {
  text: string;
  parseOptions?: ParseOptions;
}

const parseQuestionText = (
  text: string,
  parseOptions: ParseOptions,
  completedAnswers: CompletedAnswer[]
): string => {
  if (!parseOptions) return text;

  let parsedText = text;

  for (const [key, option] of Object.entries(parseOptions)) {
    const completedAnswer = completedAnswers.find(
      (answer) => answer.questionId === option.questionId
    );

    if (completedAnswer) {
      const answerId = completedAnswer.answerId;
      const answerText = option.answers[answerId] || "";
      parsedText = parsedText.replace(`{{${key}}}`, answerText);
    }
  }

  return parsedText;
};

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
