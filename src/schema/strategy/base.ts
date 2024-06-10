import * as yup from 'yup';
import { optionalStringArray } from '../utils/array';
import { optionalObjectOf } from '../utils/objectOf';

export default function strategyBase() {
  return yup.object({
    recommendedForIssueIds: optionalStringArray,
    recommendedForIssueOrdinals: optionalObjectOf(yup.number().required()),
    ordinal: yup.number().required(),
    title: yup.string().required('is required'),
  });
}
