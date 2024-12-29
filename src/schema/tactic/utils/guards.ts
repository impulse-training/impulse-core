import { TacticValue } from '..';

export const isStepsTactic = ({ type }: TacticValue) => type === 'steps';
export const isVideoTactic = ({ type }: TacticValue) => type === 'video';
export const isBreatheTactic = ({ type }: TacticValue) =>
  type === 'breathingExercise';
export const isTaskTactic = ({ type }: TacticValue) => type === 'basic';
export const isContactsTactic = ({ type }: TacticValue) =>
  type === 'notifyASupportPerson';
