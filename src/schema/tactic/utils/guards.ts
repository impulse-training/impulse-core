import { keys } from 'lodash';
import { TacticValue, questionTacticSchemas } from '..';
import { recapTacticSchemas } from '../recap';

export const isStepsTactic = ({ type }: TacticValue) => type === 'steps';
export const isAudioTactic = ({ type }: TacticValue) => type === 'audio';
export const isVideoTactic = ({ type }: TacticValue) => type === 'video';
export const isBreatheTactic = ({ type }: TacticValue) => type === 'breathe';
export const isTaskTactic = ({ type }: TacticValue) => type === 'task';
export const isContactsTactic = ({ type }: TacticValue) => type === 'contacts';

export const isQuestionTactic = ({ type }: TacticValue) =>
  keys(questionTacticSchemas).includes(type);
export const isQuestionSliderTactic = ({ type }: TacticValue) =>
  type === 'question-slider';
export const isQuestionTimeTactic = ({ type }: TacticValue) =>
  type === 'question-time';
export const isQuestionCounterTactic = ({ type }: TacticValue) =>
  type === 'question-counter';

export const isRecapTactic = ({ type }: TacticValue) =>
  keys(recapTacticSchemas).includes(type);
