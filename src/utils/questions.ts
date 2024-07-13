import { map, sortBy } from 'lodash';
import { QuestionCategory, QuestionValue } from '../schema';

export function getQuestions(
  questionsById: Record<string, QuestionValue>,
  category: QuestionCategory
) {
  // First, filter the questions that have the category
  const questionsWithIds = map(questionsById, (question, id) => ({
    id,
    question,
  }));
  const questions = questionsWithIds.filter(({ question }) =>
    question.categories?.includes(category)
  );
  return sortBy(questions, ({ question }) => question.ordinals?.[category]);
}
