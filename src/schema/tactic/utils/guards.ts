import { TacticValue } from '..';

export const isStepsTactic = ({ type }: TacticValue) => type === 'steps';
export const isEmotionsTactic = ({ type }: TacticValue) => type === 'emotions';
export const isAudioTactic = ({ type }: TacticValue) => type === 'audio';
export const isVideoTactic = ({ type }: TacticValue) => type === 'video';
export const isMeasureSliderTactic = ({ type }: TacticValue) =>
  type === 'measure-slider';
export const isMeasureTimeTactic = ({ type }: TacticValue) =>
  type === 'measure-time';
export const isMeasureCounterTactic = ({ type }: TacticValue) =>
  type === 'measure-counter';
export const isPhoneTacticValue = ({ type }: TacticValue) => type === 'phone';
export const isBreatheTactic = ({ type }: TacticValue) => type === 'breathe';
export const isTaskTactic = ({ type }: TacticValue) => type === 'task';
export const isQuestionTactic = ({ type }: TacticValue) => type === 'question';
