import { compact } from 'lodash';
import { formatSecondsInWords } from '../schema';

export function formatValue(
  value: number,
  unit: 'time' | 'custom',
  customUnit?: string
) {
  if (unit === 'time') return formatSecondsInWords(value || 0);
  return compact([value?.toString(), customUnit]).join(' ');
}
