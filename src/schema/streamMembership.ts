import * as yup from 'yup';
import { streamSchema } from './stream';
import { documentReferenceSchema } from './utils/firestore';
import { objectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

export const streamMembershipSchema = yup.object().shape({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  streamRef: documentReferenceSchema.required(),
  streamData: streamSchema,
  ordinal: yup.number().required(),
  seenTactics: objectOf(yup.boolean().required()),
  tacticOrdinals: objectOf(yup.number().required()),
  tacticLikes: objectOf(yup.boolean().required()),
});

export type StreamMembershipValue = yup.InferType<
  typeof streamMembershipSchema
>;
