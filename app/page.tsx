import styles from "./page.module.css";
import surveys from "@/mocks/surveys.json";
import SurveyOption from "@/components/SurveyOption/SurveyOption";

export default function Home() {
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
