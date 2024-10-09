import surveys from "@/mocks/surveys.json";

type Params = {
  surveyId: string;
  questionId: string;
};
export async function generateStaticParams() {
  const params: Params[] = [];

  surveys.data.forEach((survey) => {
    survey.questions.forEach((question) => {
      params.push({
        surveyId: survey.surveyId,
        questionId: question.questionId,
      });
    });
  });

  return params;
}
