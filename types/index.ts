type QuestionType = "radio" | "text" | "range" | "date";

export interface Answer {
  answerId: string;
  text: string;
  nextQuestionId?: string | null;
}

export interface BaseQuestion {
  questionId: string;
  text: string;
  infoScreen?: InfoScreen;
  parseOptions?: ParseOptions;
  subtext?: string;
}

export interface QuestionWithAnswers extends BaseQuestion {
  answers: Answer[];
  type: Extract<QuestionType, "radio">;
}

export interface SingleValueQuestion extends BaseQuestion {
  nextQuestionId: string | null;
  type: Extract<QuestionType, "text" | "range" | "date">;
}

export type Question = QuestionWithAnswers | SingleValueQuestion;

export interface Survey {
  surveyId: string;
  surveyTitle: string;
  questions: Question[];
}

export interface CompletedAnswer {
  questionId: string;
  question: string;
  answerId: string;
  answer: string;
}

export interface InfoScreen {
  infoScreenId: string;
  text: string;
  subtext: string;
  buttonText: string;
}

export interface ParseOptions {
  [key: string]: {
    questionId: string;
    answers: { [key: string]: string | undefined };
  };
}

export interface SurveysData {
  data: Survey[];
}
