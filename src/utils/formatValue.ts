import { compact } from 'lodash';
import { TacticData, formatSecondsInWords } from '../schema';

export function formatValue(
  value: number,
  unit: TacticData['unit'],
  customUnit?: string
) {
  if (unit === 'time') return formatSecondsInWords(value || 0);
  return compact([value?.toString(), customUnit]).join(' ');
}
