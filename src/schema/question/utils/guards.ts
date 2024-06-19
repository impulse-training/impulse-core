import { QuestionValue } from '..';

export const isQuestionSlider = ({ type }: QuestionValue) =>
  type === 'scaleOf1To10';
export const isQuestionTime = ({ type }: QuestionValue) => type === 'time';
export const isQuestionCounter = ({ type }: QuestionValue) =>
  type === 'counter';
