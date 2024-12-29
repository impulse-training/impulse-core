import * as yup from 'yup';
import { documentReferenceSchema } from '../utils/firestore';
import { tacticBaseSchema } from './base';

export const notifySupportGroupSchema = tacticBaseSchema(
  'notifySupportGroup'
).shape({
  supportGroup: documentReferenceSchema.required(),
});
export type NotifySupportGroupValue = yup.InferType<
  typeof notifySupportGroupSchema
>;
