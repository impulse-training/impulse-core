import * as yup from 'yup';
import { strategySchema } from './strategy';
import { optionalStringArray } from './utils/array';
import { documentReferenceSchema } from './utils/firestore';
import { optionalObjectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

export const profileStrategySchema = yup.object({
  strategyDoc: documentReferenceSchema,
  strategy: strategySchema,
  ordinalsForIssues: optionalObjectOf(yup.number().required()),
  ordinal: yup.number(),
  forAllIssues: yup.boolean(),
  forIssueIds: optionalStringArray,
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
});
export type ProfileStrategyValue = yup.InferType<typeof profileStrategySchema>;
