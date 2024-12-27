import * as yup from 'yup';
import { optionalStringArray } from '../utils/array';
import { optionalObjectOf } from '../utils/objectOf';
import { optionalTimestampSchema } from '../utils/timestamp';

export function profileStrategyBaseSchema<T extends string>(type: T) {
  return yup.object({
    type: yup.mixed<T>().oneOf([type]).required(),
    ordinalsForIssues: optionalObjectOf(yup.number().required()),
    ordinal: yup.number(),
    sortBy: yup.mixed<'random' | 'newest'>().required(),
    forAllIssues: yup.boolean(),
    forIssueIds: optionalStringArray,
    tourDismissed: yup.boolean(),
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
  });
}
