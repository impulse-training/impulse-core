import * as yup from 'yup';
import { tacticSchema } from './tactic';
import { optionalObjectOf } from './utils/objectOf';

export const supportGroupSchema = yup.object({
  invitationCode: yup.string().required(),
  invitationUrl: yup.string().url().required(),
  tacticsById: optionalObjectOf(tacticSchema),
  next3Tactics: yup.array().of(tacticSchema),
  nextTacticId: yup.string(),
});

export type SupportGroupValue = yup.InferType<typeof supportGroupSchema>;
