import * as yup from 'yup';
import { tacticSchema } from './tactic';
import { documentReferenceSchema } from './utils/firestore';
import { optionalObjectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

export const supportGroupSchema = yup.object({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  name: yup.string().required(),
  description: yup.string(),
  profileId: yup.string(),
  isShared: yup.boolean().required(),
  invitationCode: yup.string().required(),
  invitationUrl: yup.string().url().required(),
  profileIssues: yup.array().of(documentReferenceSchema.required()),
  tacticsById: optionalObjectOf(tacticSchema),
  next3Tactics: yup.array().of(tacticSchema),
  nextTacticId: yup.string(),
});

export type SupportGroupValue = yup.InferType<typeof supportGroupSchema>;
