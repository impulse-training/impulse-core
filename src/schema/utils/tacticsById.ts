import * as yup from 'yup';
import { tacticSchema } from '../tactic';
import { documentReferenceSchema } from './firestore';
import { objectOf } from './objectOf';

export const tacticsById = objectOf(
  yup.object({
    doc: documentReferenceSchema.required(),
    tactic: tacticSchema,
  })
);
