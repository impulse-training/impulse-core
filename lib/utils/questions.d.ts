import { QuestionCategory, QuestionValue } from '../schema';
export declare function getQuestions(questionsById: Record<string, QuestionValue>, category: QuestionCategory): {
    id: string;
    question: QuestionValue;
}[];
