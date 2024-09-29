import * as yup from 'yup';
import { tacticValueBaseSchema } from './base';

export const notifyAContactSchema = tacticValueBaseSchema(
  'notifyASupportPerson'
).shape({
  contactIds: yup.array().of(yup.string().required()).required(),
});
export type NotifyAContactValue = yup.InferType<typeof notifyAContactSchema>;
