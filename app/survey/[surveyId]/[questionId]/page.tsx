import surveysData from "@/mocks/surveys.json";
import AnswersList from "./components/AnswersList";
import InfoScreenContent from "@/components/InfoScreenContent/InfoScreenContent";
import ParsedQuestionText from "./components/ParsedQuestionText";
import { SurveysData } from "@/types";
import TextAnswer from "./components/TextAnswer/TextAnswer";

export interface QuestionPageProps {
  params: {
    surveyId: string;
    questionId: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export default function QuestionPage({
  params,
  searchParams,
}: QuestionPageProps) {
  const { surveyId, questionId } = params;

  const surveys: SurveysData = surveysData as SurveysData;

  const survey = surveys.data.find((s) => s.surveyId === surveyId);
  if (!survey) return <div>Survey not found</div>;

  const question = survey.questions.find((q) => q.questionId === questionId);
  if (!question) return <div>Question not found</div>;

  const questionIndex = survey.questions.findIndex(
    (q) => q.questionId === questionId
  );

  const shouldShowInfoScreen =
    !!searchParams?.infoScreenId && question?.infoScreen;

  const shouldParseQuestionText = question?.parseOptions;

  if (shouldShowInfoScreen) {
    return (
      <InfoScreenContent
        infoScreenData={question.infoScreen}
        params={params}
        searchParams={searchParams}
      />
    );
  }

  return (
    <div>
      {shouldParseQuestionText ? (
        <ParsedQuestionText
          text={question.text}
          parseOptions={question.parseOptions}
        />
      ) : (
        <h1>{question.text}</h1>
      )}

      {question.type === "radio" && (
        <AnswersList
          surveyId={surveyId}
          question={question}
          questionIndex={questionIndex}
        />
      )}

      {question.type === "text" && (
        <TextAnswer question={question} surveyId={surveyId} />
      )}
    </div>
  );
}
