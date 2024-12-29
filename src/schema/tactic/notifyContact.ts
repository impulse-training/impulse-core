import * as yup from 'yup';
import { tacticBaseSchema } from './base';

export const notifyAContactSchema = tacticBaseSchema(
  'notifyASupportPerson'
).shape({
  contactIds: yup.array().of(yup.string().required()).required(),
});
export type NotifyAContactValue = yup.InferType<typeof notifyAContactSchema>;
