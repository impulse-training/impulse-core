import * as yup from 'yup';
import { tacticSchema } from './tactic';
import { optionalStringArray } from './utils/array';
import { documentReferenceSchema } from './utils/firestore';
import { optionalObjectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

export const strategySchema = yup.object({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  name: yup.string().required(),
  description: yup.string(),
  uid: yup.string(),
  isCollaborative: yup.boolean().required(),
  tacticCount: yup.number(),
  invitationCode: yup.string().required(),
  invitationUrl: yup.string().url().required(),
  profileIssues: yup.array().of(documentReferenceSchema.required()),
  templateForIssueIds: optionalStringArray,
  sharedWithIssueIds: optionalStringArray,
  tourTitle: yup.string(),
  tourDescription: yup.string(),
  tourConfirmButtonText: yup.string(),
  tacticsById: optionalObjectOf(tacticSchema),
  next3Tactics: yup.array().of(tacticSchema),
  nextTacticId: yup.string(),
});

export type StrategyValue = yup.InferType<typeof strategySchema>;
