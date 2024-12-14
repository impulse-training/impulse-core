import { TacticValue } from '..';

export const isStepsTactic = ({ type }: TacticValue) => type === 'steps';
export const isAudioTactic = ({ type }: TacticValue) => type === 'audio';
export const isVideoTactic = ({ type }: TacticValue) => type === 'video';
export const isBreatheTactic = ({ type }: TacticValue) =>
  type === 'breathingExercise';
export const isTaskTactic = ({ type }: TacticValue) => type === 'task';
export const isContactsTactic = ({ type }: TacticValue) =>
  type === 'notifyASupportPerson';
