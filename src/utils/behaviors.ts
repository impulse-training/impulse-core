import { BehaviorValue, formatSecondsInWords } from '../schema';

export function formatBehaviorLimit(behavior: BehaviorValue) {
  if (typeof behavior.dailyLimit !== 'number') return null;
  if (behavior.trackingType === 'time') {
    return formatSecondsInWords(behavior.dailyLimit);
  } else {
    return behavior.dailyLimit.toString();
  }
}
