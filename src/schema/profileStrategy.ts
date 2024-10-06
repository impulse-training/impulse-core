import * as yup from 'yup';
import { strategySchema } from './strategy';
import { documentReferenceSchema } from './utils/firestore';
import { optionalObjectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

export const profileStrategySchema = yup.object({
  strategyDoc: documentReferenceSchema,
  strategy: strategySchema,
  ordinalsForIssues: optionalObjectOf(yup.number().required()),
  ordinal: yup.number(),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  // TODO: we will add configuration and more soon
});
export type ProfileStrategyValue = yup.InferType<typeof profileStrategySchema>;
