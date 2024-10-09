export interface Answer {
  answerId: string;
  text: string;
  nextQuestionId?: string | null;
}

export interface Question {
  questionId: string;
  text: string;
  answers: Answer[];
}

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
