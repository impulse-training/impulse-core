import * as yup from 'yup';
import { documentReferenceSchema } from '../utils/firestore';
import { tacticBaseSchema } from './base';

export const supportGroupTacticSchema = tacticBaseSchema('supportGroup').shape({
  supportGroup: documentReferenceSchema.required(),
});
export type supportGroupValue = yup.InferType<typeof supportGroupTacticSchema>;
