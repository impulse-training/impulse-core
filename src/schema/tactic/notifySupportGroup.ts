import * as yup from 'yup';
import { documentReferenceSchema } from '../utils/firestore';
import { tacticValueBaseSchema } from './base';

export const notifySupportGroupSchema = tacticValueBaseSchema(
  'notifySupportGroup'
).shape({
  supportGroup: documentReferenceSchema.required(),
});
export type NotifySupportGroupValue = yup.InferType<
  typeof notifySupportGroupSchema
>;
