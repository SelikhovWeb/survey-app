import surveys from "@/mocks/surveys.json"; // Данные для опросов
import { Answer } from "@/types";
import styles from "./page.module.css";
import AnswerOption from "@/components/AnswerOption/AnswerOption";

interface QuestionPageProps {
  params: {
    surveyId: string;
    questionId: string;
  };
}

export default function QuestionPage({ params }: QuestionPageProps) {
  const { surveyId, questionId } = params;

  const survey = surveys.data.find((s) => s.surveyId === surveyId);
  if (!survey) return <div>Survey not found</div>;

  const question = survey.questions.find((q) => q.questionId === questionId);
  if (!question) return <div>Question not found</div>;

  return (
    <div>
      <h1>{question.text}</h1>

      {question.answers.map((answer: Answer) => (
        <div className={styles.answerWrapper} key={answer.answerId}>
          <AnswerOption
            surveyId={surveyId}
            answer={answer}
            question={question}
          />
        </div>
      ))}
    </div>
  );
}
