import surveys from "@/mocks/surveys.json";
import AnswersList from "./components/AnswersList";

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

  const questionIndex = survey.questions.findIndex(
    (q) => q.questionId === questionId
  );

  return (
    <div>
      <h1>{question.text}</h1>
      <AnswersList
        surveyId={surveyId}
        question={question}
        questionIndex={questionIndex}
      />
    </div>
  );
}
