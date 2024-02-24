import * as Yup from 'yup';
import { gameplanBaseSchema } from './gameplan';
import { timestampSchema } from './utils/timestamp';

export const patternSchema = Yup.object().shape({
  uid: Yup.string().required(),
  createdAt: timestampSchema.required(), // You should define a more specific validation based on what TimestampLike is
  updatedAt: timestampSchema.required(), // Same as above for TimestampLike
  name: Yup.string().required(),
  ordinal: Yup.number().required(),
  supportGroupIds: Yup.array().of(Yup.string()).notRequired(),
  notification: Yup.object({
    title: Yup.string().required(),
    body: Yup.string().required(),
  }).notRequired(),
  setbackTacticId: Yup.string().notRequired(),
  setbackThreshold: Yup.number().required(),
  issueId: Yup.string().notRequired(),
  sendWeeklyReports: Yup.boolean().required(),
  gameplanId: Yup.string().notRequired(),
  debriefGameplanId: Yup.string().notRequired(),
  impulse: gameplanBaseSchema,
  debrief: gameplanBaseSchema,
});

export type PatternValue = Yup.InferType<typeof patternSchema>;
