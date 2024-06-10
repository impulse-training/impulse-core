import * as yup from 'yup';
import { tacticValueBaseSchema } from './base';

export const contactsTacticSchema = tacticValueBaseSchema('contacts').shape({
  contactIds: yup.array().of(yup.string().required()).required(),
});
export type ContactcsTacticValue = yup.InferType<typeof contactsTacticSchema>;
