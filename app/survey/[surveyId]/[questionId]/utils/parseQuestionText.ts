import { CompletedAnswer, ParseOptions } from "@/types";

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

export default parseQuestionText;
