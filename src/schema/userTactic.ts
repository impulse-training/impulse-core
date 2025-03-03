import * as yup from 'yup';
import { tacticSchema } from './tactic';
import { documentReferenceSchema } from './utils/firestore';
import { optionalTimestampSchema } from './utils/timestamp';

// A user tactic is a tactic that a user has added to their gameplan (i.e., to be used in certain
// routines, or "impulse moments" for a particular unwanted behavior)
export const userTacticSchema = yup.object({
  tactic: yup.object({
    tactic: tacticSchema,
    doc: documentReferenceSchema.optional(),
  }),
  allBehaviors: yup.boolean().required(),
  behaviorDocs: yup.array().of(documentReferenceSchema.required()).required(),
  routineDocs: yup.array().of(documentReferenceSchema.required()).required(),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
});
export type UserTacticValue = yup.InferType<typeof userTacticSchema>;
