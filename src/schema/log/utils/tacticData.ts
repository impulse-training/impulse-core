import * as yup from 'yup';
import { tacticSchema, TacticValue } from '../../tactic';
import {
  DocumentReferenceLike,
  documentReferenceSchema,
} from '../../utils/firestore';
import { objectOf } from '../../utils/objectOf';
import { timestampSchema } from '../../utils/timestamp';

// In future, we may extend this schema to include stuff like time spent
export const tacticDataSchema = yup.object({
  isCompleted: yup.boolean().required(),
  setAt: timestampSchema,
});

export type TacticDataValue = yup.InferType<typeof tacticDataSchema>;

export const tacticsById = objectOf(
  yup.object({
    doc: documentReferenceSchema.required(),
    tactic: tacticSchema,
    data: tacticDataSchema.optional().default(undefined),
  })
);
export type TacticsById = Record<
  string,
  {
    doc: DocumentReferenceLike<TacticValue>;
    tactic: TacticValue;
    data?: TacticDataValue;
  }
>;

// Export type guard functions for each tactic type (TT)
export type WithTacticsById<T> = Omit<T, 'tacticsById'> & {
  tacticsById: TacticsById;
};
