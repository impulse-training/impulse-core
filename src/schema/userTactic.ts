import * as yup from 'yup';
import { tacticSchema } from './tactic';
import { documentReferenceSchema } from './utils/firestore';

// A user tactic is a tactic that a user has added to their gameplan (i.e., to be used in certain
// routines, or "impulse moments" for a particular unwanted behavior)
export const userTacticSchema = yup.object({
  tactic: tacticSchema,
  tacticDoc: documentReferenceSchema.required(),
  allBehaviors: yup.boolean().required(),
  behaviorDocs: yup.array().of(documentReferenceSchema.required()),
  routineDocs: yup.array().of(documentReferenceSchema.required()),
});
export type UserTacticValue = yup.InferType<typeof userTacticSchema>;
