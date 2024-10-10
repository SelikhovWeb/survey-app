import styles from "./page.module.css";
import surveysData from "@/mocks/surveys.json";
import SurveyOption from "@/components/SurveyOption/SurveyOption";
import { SurveysData } from "@/types";

export default function Home() {
  const surveys: SurveysData = surveysData as SurveysData;

  return (
    <div className={styles.page}>
      <h1>Choose the survey that you want to start.</h1>

      {surveys.data.map((survey) => (
        <div key={survey.surveyId} className={styles.surveyButtonWrapper}>
          <SurveyOption survey={survey} />
        </div>
      ))}
    </div>
  );
}
