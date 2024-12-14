import { compact } from 'lodash';
import { BehaviorDataValue, formatSecondsInWords } from '../schema';

export function formatValue(
  value: number,
  unit: BehaviorDataValue['unit'],
  customUnit?: string
) {
  if (unit === 'time') return formatSecondsInWords(value || 0);
  return compact([value?.toString(), customUnit]).join(' ');
}
