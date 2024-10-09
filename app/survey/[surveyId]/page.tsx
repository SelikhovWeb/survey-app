import { redirect } from "next/navigation";
import surveys from "@/mocks/surveys.json";

type Params = {
  params: {
    surveyId: string;
  };
};

export default function SurveyRedirect({ params }: Params) {
  const { surveyId } = params;

  const survey = surveys.data.find((s) => s.surveyId === surveyId);

  if (survey) {
    redirect(`/survey/${surveyId}/${survey.questions[0].questionId}`);
  }

  return <div>Survey not found</div>;
}
