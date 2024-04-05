import { keys } from 'lodash';
import { TacticValue, questionTacticSchemas } from '..';

export const isStepsTactic = ({ type }: TacticValue) => type === 'steps';
export const isEmotionsTactic = ({ type }: TacticValue) => type === 'emotions';
export const isAudioTactic = ({ type }: TacticValue) => type === 'audio';
export const isVideoTactic = ({ type }: TacticValue) => type === 'video';
export const isPhoneTacticValue = ({ type }: TacticValue) => type === 'phone';
export const isBreatheTactic = ({ type }: TacticValue) => type === 'breathe';
export const isTaskTactic = ({ type }: TacticValue) => type === 'task';

export const isQuestionTactic = ({ type }: TacticValue) =>
  keys(questionTacticSchemas).includes(type);
export const isQuestionSliderTactic = ({ type }: TacticValue) =>
  type === 'question-slider';
export const isQuestionTimeTactic = ({ type }: TacticValue) =>
  type === 'question-time';
export const isQuestionCounterTactic = ({ type }: TacticValue) =>
  type === 'question-counter';
