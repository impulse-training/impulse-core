import { BehaviorValue } from '..';

export const isTimeBehavior = ({ type }: BehaviorValue) => type === 'time';
export const isCounterBehavior = ({ type }: BehaviorValue) =>
  type === 'counter';
