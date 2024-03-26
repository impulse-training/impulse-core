import * as yup from 'yup';
import { optionalStringArray, requiredStringArray } from '../array';

export function strategyBaseSchema<K extends string>(type: K) {
  return yup.object({
    type: yup.mixed<K>().oneOf([type]).defined(),
    title: yup.string().required('is required'),
    prompt: yup.string().notRequired(),
    tacticIds: requiredStringArray,
    suggestedTacticIds: optionalStringArray,
  });
}
