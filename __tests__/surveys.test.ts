import { SurveysData } from "../types";
import surveys from "../mocks/surveys.json";

const surveyData: SurveysData = surveys as SurveysData;

describe("Survey JSON validity tests", () => {
  const allQuestions = surveyData.data.flatMap((survey) => survey.questions);

  const findQuestionById = (questionId: string) => {
    return allQuestions.find((q) => q.questionId === questionId);
  };

  test("All nextQuestionId must lead to existing questions", () => {
    allQuestions.forEach((question) => {
      if (question.type === "radio") {
        question.answers.forEach((answer) => {
          const nextQuestionId = answer.nextQuestionId;
          if (nextQuestionId) {
            const nextQuestionExists = findQuestionById(nextQuestionId);
            expect(nextQuestionExists).toBeDefined();
          }
        });
      } else {
        const nextQuestionId = question.nextQuestionId;
        if (nextQuestionId) {
          const nextQuestionExists = findQuestionById(nextQuestionId);
          expect(nextQuestionExists).toBeDefined();
        }
      }
    });
  });

  test("No circular dependencies between questions", () => {
    const visited = new Set();
    const checkForCycles = (questionId: string) => {
      if (visited.has(questionId)) {
        throw new Error(`Cycle detected with questionId: ${questionId}`);
      }
      visited.add(questionId);
      const question = findQuestionById(questionId);
      if (question && question.type === "radio") {
        question.answers.forEach((answer) => {
          if (answer.nextQuestionId) {
            checkForCycles(answer.nextQuestionId);
          }
        });
      }
      visited.delete(questionId);
    };

    allQuestions.forEach((question) => {
      checkForCycles(question.questionId);
    });
  });

  test("Parse options must reference valid questions and answerIds", () => {
    allQuestions.forEach((question) => {
      if (question.parseOptions) {
        Object.values(question.parseOptions).forEach((option) => {
          const refQuestion = findQuestionById(option.questionId);
          expect(refQuestion).toBeDefined();

          Object.keys(option.answers).forEach((answerId) => {
            if (refQuestion?.type === "radio") {
              const answerExists = refQuestion?.answers.find(
                (a) => a.answerId === answerId
              );
              expect(answerExists).toBeDefined();
            }
          });
        });
      }
    });
  });

  test("All questions and answers must have required fields", () => {
    allQuestions.forEach((question) => {
      if (question.type === "radio") {
        expect(question.questionId).toBeDefined();
        expect(question.text).toBeDefined();
        expect(Array.isArray(question.answers)).toBe(true);

        question.answers.forEach((answer) => {
          expect(answer.text).toBeDefined();
          expect(answer.answerId).toBeDefined();
        });
      }
    });
  });
});
