import * as yup from 'yup';
import { optionalStringArray } from '../utils/array';
import { optionalObjectOf } from '../utils/objectOf';

export default function strategyBase() {
  return yup.object({
    recommendedForIssueIds: optionalStringArray,
    recommendedForIssueOrdinals: optionalObjectOf(yup.number().required()),
    isInGameplan: yup.boolean(),
    ordinal: yup.number().required(),
    prompt: yup.string().required('is required'),
  });
}
