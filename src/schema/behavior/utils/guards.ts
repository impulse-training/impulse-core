import { BehaviorValue } from '..';

export const isBehaviorSlider = ({ type }: BehaviorValue) =>
  type === 'scaleOf1To10';
export const isBehaviorTime = ({ type }: BehaviorValue) => type === 'time';
export const isBehaviorCounter = ({ type }: BehaviorValue) =>
  type === 'counter';
