import * as yup from 'yup';
import { optionalStringArray } from '../utils/array';
import { optionalObjectOf } from '../utils/objectOf';

export default function strategyBase() {
  return yup.object({
    profileId: yup.string(),
    recommendedForIssueIds: optionalStringArray.max(
      10,
      "can't be more than 10"
    ),
    recommendedForIssueOrdinals: optionalObjectOf(yup.number().required()),
    isInGameplan: yup.boolean(),
    ordinal: yup.number().required(),
    prompt: yup.string().required('is required'),
    description: yup.string().nullable(),
  });
}
