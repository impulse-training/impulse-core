import * as yup from 'yup';
import { strategySchema } from './strategy';
import { documentReferenceSchema } from './utils/firestore';

export const profileStrategy = yup.object({
  strategyDoc: documentReferenceSchema,
  strategy: strategySchema,
  ordinal: yup.number().required(),
  // TODO: we will add configuration and more soon
});
export type ProfileStrategyType = yup.InferType<typeof profileStrategy>;
