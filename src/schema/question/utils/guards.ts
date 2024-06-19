import { QuestionValue } from '..';

export const isQuestionSlider = ({ type }: QuestionValue) =>
  type === 'question-slider';
export const isQuestionTime = ({ type }: QuestionValue) =>
  type === 'question-time';
export const isQuestionCounter = ({ type }: QuestionValue) =>
  type === 'question-counter';
