import { compact } from 'lodash';
import { QuestionDataValue, formatSecondsInWords } from '../schema';

export function formatValue(
  value: number,
  unit: QuestionDataValue['unit'],
  customUnit?: string
) {
  if (unit === 'time') return formatSecondsInWords(value || 0);
  return compact([value?.toString(), customUnit]).join(' ');
}
