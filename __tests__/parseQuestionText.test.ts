import parseQuestionText from "../app/survey/[surveyId]/[questionId]/utils/parseQuestionText";
import { CompletedAnswer } from "../types";

interface ParseOptions {
  [key: string]: {
    questionId: string;
    answers: { [key: string]: string };
  };
}
describe("parseQuestionText", () => {
  it("should return the original text if no parseOptions are provided", () => {
    const text = "Hello, world!";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = parseQuestionText(text, null as any, []);
    expect(result).toBe(text);
  });

  it("should replace dynamic data with the correct answer text", () => {
    const text = "Your answer is: {{answerKey}}";
    const parseOptions: ParseOptions = {
      answerKey: {
        questionId: "1",
        answers: {
          a1: "Correct Answer",
        },
      },
    };
    const completedAnswers: CompletedAnswer[] = [
      {
        questionId: "1",
        answerId: "a1",
        question: "",
        answer: "",
      },
    ];

    const result = parseQuestionText(text, parseOptions, completedAnswers);
    expect(result).toBe("Your answer is: Correct Answer");
  });

  it("should not modify the text if no completedAnswer is found for the question", () => {
    const text = "Your answer is: {{answerKey}}";
    const parseOptions: ParseOptions = {
      answerKey: {
        questionId: "1",
        answers: {
          a1: "Correct Answer",
        },
      },
    };
    const completedAnswers: CompletedAnswer[] = [];

    const result = parseQuestionText(text, parseOptions, completedAnswers);
    expect(result).toBe(text);
  });

  it("should replace the placeholder with an empty string if the answer text is missing", () => {
    const text = "Your answer is: {{answerKey}}";
    const parseOptions: ParseOptions = {
      answerKey: {
        questionId: "1",
        answers: {
          a1: "",
        },
      },
    };
    const completedAnswers: CompletedAnswer[] = [
      {
        questionId: "1",
        answerId: "a1",
        question: "",
        answer: "",
      },
    ];

    const result = parseQuestionText(text, parseOptions, completedAnswers);
    expect(result).toBe("Your answer is: ");
  });

  it("should handle multiple dynamic placeholders correctly", () => {
    const text = "First answer: {{firstKey}}, Second answer: {{secondKey}}";
    const parseOptions: ParseOptions = {
      firstKey: {
        questionId: "1",
        answers: {
          a1: "First Answer",
        },
      },
      secondKey: {
        questionId: "2",
        answers: {
          a2: "Second Answer",
        },
      },
    };
    const completedAnswers: CompletedAnswer[] = [
      {
        questionId: "1",
        answerId: "a1",
        question: "",
        answer: "",
      },
      {
        questionId: "2",
        answerId: "a2",
        question: "",
        answer: "",
      },
    ];

    const result = parseQuestionText(text, parseOptions, completedAnswers);
    expect(result).toBe(
      "First answer: First Answer, Second answer: Second Answer"
    );
  });
});
